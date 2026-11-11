"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AffText, hasAffBanner } from "@/app/components/AffLink";
import CompanyVisual from "@/app/components/CompanyVisual";
import { REGIONS } from "@/app/data/regions";
import { BUILDINGS, PEST_CATEGORIES, getCategory, type Building, type PestCat } from "@/app/data/estimatorQuestions";
import { ESTIMATOR_CHECKED, estimatorPartners, type BuildingKind, type EstPartner, type EstPrice } from "@/app/data/estimatorPartners";

// 見積機能（okina 2026-11-11 承認の仕様）。
// ・ページ遷移なし。ステップの切り替えはブラウザの履歴に積まない（戻るボタンの乗っ取りに見える動きを入れない）
// ・選択肢を押すと自動で次へ。「次へ」「前へ」も置く。どの設問にも「わからない」
// ・料金の目安は提携業者の公式表記だけ（app/data/estimatorPartners.ts）。独自の相場は出さない
// ・計測は GA4 のイベント（estimator_step / estimator_result / estimator_partner_click）

type StepId = "pest" | "building" | "location" | "size" | "region" | "result";

type Gtag = (cmd: "event", name: string, params: Record<string, string | number>) => void;
function track(name: string, params: Record<string, string | number>) {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === "function") g("event", name, params);
}

const prefName = (slug: string) => {
  for (const r of REGIONS) for (const [n, s] of r.prefs) if (s === slug) return n;
  return "";
};

const buildingKind = (b: Building | ""): BuildingKind | null => {
  if (b === "kodate") return "kodate";
  if (b === "shugo-own" || b === "shugo-rent") return "shugo";
  if (b === "tenpo") return "tenpo";
  if (b === "office") return "office";
  return null;
};
const BUILDING_KIND_LABEL: Record<BuildingKind, string> = {
  kodate: "戸建て",
  shugo: "マンション・アパート",
  tenpo: "店舗・飲食店",
  office: "オフィス・施設",
};

const yen = (n: number) => `${n.toLocaleString("ja-JP")}円`;

export interface EstimatorProps {
  /** 依頼内容を選んだ状態で始める（各害虫ページ用） */
  initialPest?: PestCat;
  /** `${cat}:${pref}` → 自治体の相談窓口をまとめた当サイトのページ（ビルド時に実在するものだけ） */
  helpLinks: Record<string, string>;
  /** pref → 都道府県の比較ページ（実在するものだけ） */
  areaLinks: Record<string, string>;
  /** 見出しのレベル（TOP は h2） */
  headingId?: string;
}

export default function Estimator({ initialPest, helpLinks, areaLinks, headingId = "estimate-title" }: EstimatorProps) {
  const [pest, setPest] = useState<PestCat | "">(initialPest ?? "");
  const [building, setBuilding] = useState<Building | "">("");
  const [location, setLocation] = useState("");
  const [sizes, setSizes] = useState<Record<string, string>>({});
  const [pref, setPref] = useState("");
  const [tab, setTab] = useState(1); // 既定は「関東」
  const [stepIdx, setStepIdx] = useState(initialPest ? 1 : 0);
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);
  const first = useRef(true);

  const cat = pest ? getCategory(pest) : undefined;
  const steps: StepId[] = useMemo(
    () => ["pest", "building", "location", ...(cat?.sizes?.length ? (["size"] as StepId[]) : []), "region", "result"],
    [cat],
  );
  const step = steps[Math.min(stepIdx, steps.length - 1)];
  const questionCount = steps.length - 1;
  const done = step === "result" ? questionCount : stepIdx;

  // ステップが変わったら、見積の上端が画面外のときだけ戻す（履歴は触らない）
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = rootRef.current;
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [stepIdx]);
  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  const answered = (s: StepId) => {
    if (s === "pest") return Boolean(pest);
    if (s === "building") return Boolean(building);
    if (s === "location") return Boolean(location);
    if (s === "size") return Boolean(cat?.sizes?.every((q) => sizes[q.key]));
    if (s === "region") return Boolean(pref);
    return true;
  };

  const go = (i: number) => {
    if (timer.current) window.clearTimeout(timer.current);
    setStepIdx(Math.max(0, Math.min(i, steps.length - 1)));
  };
  const autoNext = (from: number, stepId: StepId, value: string) => {
    track("estimator_step", { step: stepId, step_index: from + 1, value });
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStepIdx(from + 1), 220);
  };

  const choosePest = (id: PestCat) => {
    if (id !== pest) {
      setLocation("");
      setSizes({});
    }
    setPest(id);
    autoNext(stepIdx, "pest", id);
  };
  const chooseBuilding = (b: Building) => {
    setBuilding(b);
    autoNext(stepIdx, "building", b);
  };
  const chooseLocation = (k: string) => {
    setLocation(k);
    autoNext(stepIdx, "location", k);
  };
  const chooseSize = (qKey: string, v: string) => {
    const next = { ...sizes, [qKey]: v };
    setSizes(next);
    if (cat?.sizes?.every((q) => next[q.key])) autoNext(stepIdx, "size", Object.values(next).join("/"));
  };
  const choosePref = (p: string) => {
    setPref(p);
    autoNext(stepIdx, "region", p);
  };

  const result = useMemo(() => (step === "result" && pest ? buildResult(pest, building, pref, sizes) : null), [step, pest, building, pref, sizes]);
  useEffect(() => {
    if (result) track("estimator_result", { pest: String(pest), pref: pref || "unknown", building: building || "unknown", partners: result.partners.length });
  }, [result, pest, pref, building]);

  const remaining = questionCount - done;

  return (
    <div className="est" ref={rootRef} aria-labelledby={headingId}>
      {/* 進捗バー */}
      <div className="est-progress" aria-hidden={step === "result"}>
        <p className="est-progress-text">
          {step === "result" ? (
            "診断が完了しました"
          ) : (
            <>
              入力完了まで、残り<b>{remaining}</b>ステップ
            </>
          )}
        </p>
        <div className="est-progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={questionCount} aria-valuenow={done} aria-label="入力の進み具合">
          <span style={{ width: `${(done / questionCount) * 100}%` }} />
        </div>
        <span className="est-progress-count">
          {done}/{questionCount}
        </span>
      </div>

      <div className="est-body" aria-live="polite">
        {step === "pest" && (
          <fieldset className="est-step">
            <legend className="est-q">ご依頼内容を選択してください。</legend>
            <div className="est-grid est-grid-icons">
              {PEST_CATEGORIES.map((c) => (
                <button key={c.id} type="button" className={`est-choice est-choice-icon${pest === c.id ? " is-on" : ""}`} aria-pressed={pest === c.id} onClick={() => choosePest(c.id)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/pests/${c.icon}.svg`} alt="" width={56} height={56} />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === "building" && (
          <fieldset className="est-step">
            <legend className="est-q">建物の種類を選択してください。</legend>
            <div className="est-grid">
              {BUILDINGS.map((b) => (
                <button key={b.key} type="button" className={`est-choice${building === b.key ? " is-on" : ""}`} aria-pressed={building === b.key} onClick={() => chooseBuilding(b.key)}>
                  {b.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === "location" && cat && (
          <fieldset className="est-step">
            <legend className="est-q">発生している場所を教えてください。</legend>
            <div className="est-grid">
              {cat.locations.map((l) => (
                <button key={l.key} type="button" className={`est-choice${location === l.key ? " is-on" : ""}`} aria-pressed={location === l.key} onClick={() => chooseLocation(l.key)}>
                  {l.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === "size" && cat?.sizes && (
          <div className="est-step">
            {cat.sizes.map((q) => (
              <fieldset key={q.key} className="est-subq">
                <legend className="est-q">{q.title}</legend>
                <div className="est-grid">
                  {q.choices.map((c) => (
                    <button key={c.key} type="button" className={`est-choice${sizes[q.key] === c.key ? " is-on" : ""}`} aria-pressed={sizes[q.key] === c.key} onClick={() => chooseSize(q.key, c.key)}>
                      {c.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
            <p className="est-hint">料金が変わりやすい点です。わからなければ「わからない」を選んでください。</p>
          </div>
        )}

        {step === "region" && (
          <fieldset className="est-step">
            <legend className="est-q">地域を選択してください。</legend>
            <div className="est-tabs" role="tablist" aria-label="地方">
              {REGIONS.map((r, i) => (
                <button key={r.name} type="button" role="tab" aria-selected={tab === i} className={`est-tab${tab === i ? " is-on" : ""}`} onClick={() => setTab(i)}>
                  {r.name}
                </button>
              ))}
            </div>
            <div className="est-grid est-grid-pref" role="tabpanel">
              {REGIONS[tab].prefs.map(([n, s]) => (
                <button key={s} type="button" className={`est-choice${pref === s ? " is-on" : ""}`} aria-pressed={pref === s} onClick={() => choosePref(s)}>
                  {n}
                </button>
              ))}
            </div>
            <button type="button" className={`est-choice est-choice-wide${pref === "unknown" ? " is-on" : ""}`} aria-pressed={pref === "unknown"} onClick={() => choosePref("unknown")}>
              地域を決めずに見る
            </button>
          </fieldset>
        )}

        {step === "result" && result && cat && (
          <Result
            cat={cat.name}
            catId={cat.id}
            hubHref={cat.hubHref}
            building={building}
            pref={pref}
            result={result}
            helpHref={pref && pref !== "unknown" ? helpLinks[`${cat.id}:${pref}`] ?? areaLinks[pref] : undefined}
            summary={[
              ["ご依頼内容", cat.name, 0],
              ["建物", BUILDINGS.find((b) => b.key === building)?.label ?? "", 1],
              ["場所", cat.locations.find((l) => l.key === location)?.label ?? "", 2],
              ...(cat.sizes ?? []).map((q): [string, string, number] => [q.title.replace(/を教えてください。$/, ""), q.choices.find((c) => c.key === sizes[q.key])?.label ?? "", 3]),
              ["地域", pref === "unknown" ? "指定なし" : prefName(pref), steps.indexOf("region")],
            ]}
            onEdit={(i) => go(i)}
            onRestart={() => {
              setPest("");
              setBuilding("");
              setLocation("");
              setSizes({});
              setPref("");
              go(0);
            }}
          />
        )}
      </div>

      {step !== "result" && (
        <div className="est-nav">
          <button type="button" className="est-nav-btn est-prev" onClick={() => go(stepIdx - 1)} disabled={stepIdx === 0}>
            前へ
          </button>
          <button type="button" className="est-nav-btn est-next" onClick={() => go(stepIdx + 1)} disabled={!answered(step)}>
            {steps[stepIdx + 1] === "result" ? "結果を見る" : "次へ"}
          </button>
        </div>
      )}
    </div>
  );
}

/* ----------------------------- 結果 ----------------------------- */

interface ResultData {
  partners: { p: EstPartner; rows: EstPrice[]; hasPrice: boolean; buildingOk: boolean | null; inArea: boolean }[];
  /** 料金を公式に数字で出している行（全社・追加費用を除く） */
  priced: { p: EstPartner; row: EstPrice; hit: boolean }[];
  /** 選んだ規模に当てはまる行（追加費用を含む） */
  hits: { p: EstPartner; row: EstPrice }[];
  noPriceNames: string[];
  extras: { p: EstPartner; row: EstPrice }[];
  kind: BuildingKind | null;
}

function rowHits(row: EstPrice, sizes: Record<string, string>) {
  if (!row.match) return false;
  return Object.entries(row.match).some(([k, vals]) => vals.includes(sizes[k]));
}

function buildResult(pest: PestCat, building: Building | "", pref: string, sizes: Record<string, string>): ResultData {
  const kind = buildingKind(building);
  const list = estimatorPartners
    .filter((p) => (pest === "other" ? true : p.cats.includes(pest)))
    .map((p) => {
      const inArea = pref === "unknown" || !pref ? true : p.prefs === "all" || p.prefs.includes(pref);
      const rows = p.prices.filter((r) => r.cat === pest);
      const hasPrice = rows.some((r) => typeof r.min === "number" && !r.extra);
      const buildingOk = kind ? p.buildings[kind] : null;
      return { p, rows, hasPrice, buildingOk, inArea };
    })
    .filter((x) => x.inArea && x.buildingOk !== false);
  // 並び順（画面に明記）：①その害虫・害獣の料金を公式に出している ②見積もり無料 ③24時間受付。同点はデータの並び
  const score = (x: (typeof list)[number]) => (x.hasPrice ? 4 : 0) + (x.p.freeEstimate ? 2 : 0) + (x.p.reception24h ? 1 : 0);
  const sorted = list.map((x, i) => ({ x, i })).sort((a, b) => score(b.x) - score(a.x) || a.i - b.i).map((v) => v.x);
  const partners = sorted.slice(0, 5);
  const priced = partners.flatMap((x) => x.rows.filter((r) => typeof r.min === "number" && !r.extra).map((row) => ({ p: x.p, row, hit: rowHits(row, sizes) })));
  const hits = partners.flatMap((x) => x.rows.filter((r) => rowHits(r, sizes)).map((row) => ({ p: x.p, row })));
  // 同じ追加費用（同じ社・同じ項目）は1回だけ
  const extras = partners.flatMap((x) => x.rows.filter((r) => r.extra).map((row) => ({ p: x.p, row })));
  const noPriceNames = partners.filter((x) => !x.hasPrice).map((x) => x.p.name);
  return { partners, priced, hits, noPriceNames, extras, kind };
}

function Result({
  cat,
  catId,
  hubHref,
  building,
  pref,
  result,
  helpHref,
  summary,
  onEdit,
  onRestart,
}: {
  cat: string;
  catId: PestCat;
  hubHref: string;
  building: Building | "";
  pref: string;
  result: ResultData;
  helpHref?: string;
  summary: [string, string, number][];
  onEdit: (i: number) => void;
  onRestart: () => void;
}) {
  const { partners, priced, hits, noPriceNames, extras, kind } = result;
  // 見出しの金額は「工事1件の料金として書かれた表記」だけで出す（1㎡・1坪あたり・年間プラン・単位不明の基本料金は除く＝inSummary:false）
  const summaryRows = priced.filter((x) => x.row.inSummary !== false);
  const lowest = summaryRows.reduce<(typeof priced)[number] | null>((m, x) => (!m || (x.row.min ?? Infinity) < (m.row.min ?? Infinity) ? x : m), null);
  const highest = summaryRows.reduce<(typeof priced)[number] | null>((m, x) => (typeof x.row.max === "number" && (!m || x.row.max > (m.row.max ?? 0)) ? x : m), null);
  const area = pref && pref !== "unknown" ? prefName(pref) : "";

  return (
    <div className="est-result">
      <h3 className="est-result-title">診断結果</h3>
      <dl className="est-summary">
        {summary.map(([k, v, i]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>
              {v || "わからない"}
              <button type="button" className="est-edit" onClick={() => onEdit(i)} aria-label={`${k}を変更`}>
                変更
              </button>
            </dd>
          </div>
        ))}
      </dl>

      {/* 料金の目安：提携業者の公式表記だけ */}
      <section className="est-price" aria-labelledby="est-price-title">
        <h4 id="est-price-title" className="est-h">{cat}の料金の目安（提携業者の公式表記）</h4>
        {partners.length === 0 ? (
          <p className="est-price-none">条件に合う提携業者がないため、ここでは料金の目安を出していません。料金は依頼する業者の現地調査・見積もりで決まります。</p>
        ) : catId === "other" ? (
          <p className="est-price-none">種類がわからない場合、料金は害虫・害獣の種類と被害の範囲で変わるため、ここでは目安を出していません。各社の料金の決まり方は、下のカードと各社のページで確認できます。</p>
        ) : lowest ? (
          <>
            {lowest && (
            <p className="est-price-big">
              {yen(lowest.row.min!)}
              <small>〜</small>
              {highest && highest.row.max ? (
                <>
                  {yen(highest.row.max)}
                  <small>程度</small>
                </>
              ) : null}
            </p>
            )}
            {lowest ? (
              <p className="est-price-cap">
              下の表の公式表記（1㎡・1坪あたりなどの単価を除く）のうち、最も低い下限と、上限が書かれている表記のうち最も高い上限です。税込・税抜は各社の表記どおりで、税の表記がない社もあります。実際の金額は現地調査・見積もりで決まります。
            </p>
            ) : (
              <p className="est-price-cap">条件に合う提携業者の公式表記は、1㎡・1坪あたりなどの単価だけです。広さで金額が変わるため、下の表の単価と見積もりで確認してください。</p>
            )}
            {hits.length > 0 && (
              <p className="est-price-hit">
                選んだ規模に当てはまる表記：
                {hits.map((x, i) => (
                  <span key={i}>
                    {i > 0 && "、"}
                    {x.p.name}「{x.row.label}」{x.row.price}
                  </span>
                ))}
              </p>
            )}
            <div className="est-table-wrap">
              <table className="est-table">
                <thead>
                  <tr>
                    <th scope="col">業者</th>
                    <th scope="col">公式の項目</th>
                    <th scope="col">公式表記の料金</th>
                  </tr>
                </thead>
                <tbody>
                  {priced.map((x, i) => (
                    <tr key={i} className={x.hit ? "is-hit" : undefined}>
                      <td>{x.p.name}</td>
                      <td>{x.row.label}</td>
                      <td>
                        {x.row.price}
                        {x.row.tax !== "税の表記なし" && !x.row.price.includes(x.row.tax) ? `（${x.row.tax}）` : ""}
                        {x.row.note && <span className="est-note">{x.row.note}</span>}
                        <a className="est-src" href={x.row.url} target="_blank" rel="noopener noreferrer">
                          出典
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="est-price-none">
            条件に合う提携業者は、{cat}の料金を公式サイトに数字で出していません。料金は現地調査・見積もりで決まります。
          </p>
        )}
        {extras.length > 0 && (
          <div className="est-extras">
            <p className="est-extras-title">追加になりやすい費用（公式表記）</p>
            <ul>
              {extras.map((x, i) => (
                <li key={i}>
                  {x.p.name}：{x.row.label} {x.row.price}
                  {x.row.note ? `（${x.row.note}）` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
        {noPriceNames.length > 0 && priced.length > 0 && <p className="est-note-line">{noPriceNames.join("・")}は、{cat}の料金を公式サイトに数字で出しておらず、現地調査のうえで見積もりになります。</p>}
        {building === "shugo-rent" && (
          <p className="est-note-line">賃貸住宅では、駆除の手配や費用の負担を管理会社・大家さんが行う場合があります。業者に依頼する前に、管理会社・大家さんに連絡しておくと安心です。</p>
        )}
        <p className="est-checked">各社の公式サイトで{ESTIMATOR_CHECKED}に確認した内容です。</p>
      </section>

      {/* 業者カード */}
      <section className="est-partners" aria-labelledby="est-partners-title">
        <h4 id="est-partners-title" className="est-h">
          {area ? `${area}で` : ""}
          {cat}に対応している提携業者
        </h4>
        <p className="est-pr">
          <span className="est-pr-badge">PR</span>
          ここに出る業者は、当サイトと提携している業者（広告）です。並び順は「{cat}の料金を公式に出している」「見積もり無料」「24時間受付」の順に、当てはまる項目が多い業者を上にしています。
        </p>
        {partners.length === 0 ? (
          <div className="est-empty">
            <p>
              {area ? `${area}で` : ""}
              {cat}に対応している提携業者は見つかりませんでした。
            </p>
            {helpHref ? (
              <p>
                <a href={helpHref}>{area}の自治体の相談窓口・制度をまとめたページ</a>で、自治体の窓口や業者の探し方を確認できます。
              </p>
            ) : (
              <p>
                <a href={hubHref}>{cat}の駆除の基本と業者の選び方</a>をご覧ください。
              </p>
            )}
          </div>
        ) : (
          <ol className="est-cards">
            {partners.map(({ p, rows, buildingOk }, i) => (
              <li key={p.slug} className="est-card" onClickCapture={(e) => {
                const a = (e.target as HTMLElement).closest("a");
                if (a && !a.getAttribute("href")?.startsWith("/")) track("estimator_partner_click", { partner: p.slug, rank: i + 1, pest: catId, pref: pref || "unknown" });
              }}>
                <div className="est-card-head">
                  <span className="est-rank">{i + 1}</span>
                  <strong className="est-card-name">{p.name}</strong>
                </div>
                <div className={`est-card-body${hasAffBanner(p.slug) ? "" : " is-text"}`}>
                  {hasAffBanner(p.slug) && (
                    <div className="est-card-visual">
                      <CompanyVisual id={p.slug} name={p.name} size="thumb" />
                    </div>
                  )}
                  <dl className="est-card-facts">
                    <div>
                      <dt>料金（公式）</dt>
                      <dd>
                        {rows.filter((r) => !r.extra).length > 0
                          ? rows
                              .filter((r) => !r.extra)
                              .map((r) => `${r.label} ${r.price}${r.tax !== "税の表記なし" && !r.price.includes(r.tax) ? `（${r.tax}）` : ""}`)
                              .join(" / ")
                          : p.prices.length > 0 ? `${cat}の料金は公式に記載なし（見積もりで決まる）` : p.priceNote ?? "公式に料金表なし（見積もりで決まる）"}
                      </dd>
                    </div>
                    <div>
                      <dt>見積もり</dt>
                      <dd>{p.freeText}</dd>
                    </div>
                    <div>
                      <dt>受付</dt>
                      <dd>{p.receptionText}</dd>
                    </div>
                    <div>
                      <dt>保証</dt>
                      <dd>{p.warranty}</dd>
                    </div>
                    <div>
                      <dt>対応エリア</dt>
                      <dd>{p.areaText}</dd>
                    </div>
                    {kind && (
                      <div>
                        <dt>{BUILDING_KIND_LABEL[kind]}</dt>
                        <dd>{buildingOk ? "公式に対応の記載あり" : "公式に記載なし（問い合わせ時にご確認ください）"}</dd>
                      </div>
                    )}
                  </dl>
                </div>
                <div className="est-card-actions">
                  <AffText slug={p.slug} label="公式サイトで詳しく見る" variant="button" />
                  <a className="est-card-review" href={`/agents/${p.slug}`}>
                    口コミ・料金の詳細を見る
                  </a>
                </div>
              </li>
            ))}
          </ol>
        )}
        {partners.length > 0 && partners.length < 3 && helpHref && (
          <p className="est-note-line">
            自治体の窓口や制度は<a href={helpHref}>{area}のページ</a>にまとめています。
          </p>
        )}
      </section>

      <div className="est-result-actions">
        <button type="button" className="est-nav-btn est-prev" onClick={onRestart}>
          最初からやり直す
        </button>
      </div>
    </div>
  );
}
