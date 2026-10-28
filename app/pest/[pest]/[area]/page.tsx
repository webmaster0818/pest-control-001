import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import RelatedLinkList from "@/app/components/RelatedLinkList";
import { pestAreas, getPestArea } from "@/app/data/pestAreas";
import { agents, type AgentReview } from "@/app/agents/agentsData";
import { AffText, hasAff } from "@/app/components/AffLink";
import CompanyVisual from "@/app/components/CompanyVisual";
import { brandAreas } from "@/app/data/brandAreas";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

// データ駆動テンプレート。
// app/data/pestAreas.ts に PestArea を1件足すと、このテンプレートから
// /pest/{pestSlug}/{areaSlug}/ が1ページ生成される。ページ側の追加実装は不要。

const SITE = "https://gaichu-pro.com";

// 既にベタ書きの静的ページが存在する組み合わせ。
// これらと同じパスを生成するとビルドが衝突するため、generateStaticParams から除外する。
// （app/pest 配下のディレクトリを ls して作成。ページを新設・削除したらここも更新すること）
const EXISTING_STATIC_PATHS: Record<string, string[]> = {
  cockroach: [
    "chiba", "fukuoka", "hamamatsu", "hiroshima", "kanagawa", "kawasaki",
    "kitakyushu", "kobe", "kumamoto", "kyoto", "nagoya", "niigata", "osaka",
    "saitama", "saitama-city", "sapporo", "sendai", "tokyo", "yokohama",
  ],
  dani: ["tokyo"],
  termite: [
    "chiba", "fukuoka", "hamamatsu", "hiroshima", "kanagawa", "kawasaki",
    "kitakyushu", "kobe", "kumamoto", "kyoto", "nagoya", "niigata", "osaka",
    "saitama", "saitama-city", "sapporo", "sendai", "tokyo", "yokohama",
  ],
  wasp: ["chiba", "fukuoka", "nagoya", "osaka", "saitama", "tokyo", "yokohama"],
};

// app/area/ 配下に実在するエリアページ。無い県（福島県など）へ /area/{slug}/ を張ると404になるため、
// 関連ページのリンクはここに含まれる場合だけ出す（エリアページを新設したらここにも追加すること）。
const AREA_PAGES = new Set([
  "aichi", "chiba", "fukuoka", "hamamatsu", "hiroshima", "hokkaido", "hyogo",
  "ibaraki", "kagoshima", "kanagawa", "kawasaki", "kitakyushu", "kobe",
  "kumamoto", "kyoto", "miyagi", "miyazaki", "nagoya", "niigata", "okinawa",
  "osaka", "saitama", "saitama-city", "sapporo", "sendai", "shizuoka",
  "tochigi", "tokyo", "yokohama",
]);

function isExistingStaticPath(pest: string, area: string) {
  return (EXISTING_STATIC_PATHS[pest] ?? []).includes(area);
}

// ベタ書きの静的ページの害虫名（関連リンクの表示用）
const STATIC_PEST_NAMES: Record<string, string> = {
  cockroach: "ゴキブリ",
  dani: "ダニ",
  nezumi: "ネズミ",
  termite: "シロアリ",
  wasp: "ハチ",
};

/** 実在する害虫×エリアページ（データ駆動＋ベタ書き）を path をキーに列挙する */
function allPestAreaLinks() {
  const areaNames = new Map(pestAreas.map((x) => [x.areaSlug, x.areaName]));
  const m = new Map<string, { pest: string; area: string; pestName: string; areaName: string }>();
  for (const x of pestAreas) {
    m.set(`/pest/${x.pestSlug}/${x.areaSlug}`, {
      pest: x.pestSlug, area: x.areaSlug, pestName: x.pestName, areaName: x.areaName,
    });
  }
  for (const [pest, areas] of Object.entries(EXISTING_STATIC_PATHS)) {
    for (const area of areas) {
      const key = `/pest/${pest}/${area}`;
      if (!m.has(key) && areaNames.has(area)) {
        m.set(key, { pest, area, pestName: STATIC_PEST_NAMES[pest], areaName: areaNames.get(area)! });
      }
    }
  }
  return [...m.entries()].map(([href, v]) => ({ href, ...v }));
}

type Props = { params: Promise<{ pest: string; area: string }> };

export function generateStaticParams() {
  return pestAreas
    .filter((p) => !isExistingStaticPath(p.pestSlug, p.areaSlug))
    .map((p) => ({ pest: p.pestSlug, area: p.areaSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pest, area } = await params;
  const p = getPestArea(pest, area);
  if (!p) return {};
  // 本番は末尾スラッシュ付きURLを無しへ308リダイレクトするため、canonical はスラッシュ無しで自己参照させる。
  const url = `${SITE}/pest/${pest}/${area}`;
  // municipalSupport があるページ（ハチなど鳥獣保護管理法の対象外の種別）は
  // 「捕獲の許可」が主題ではないため、タイトル・説明文を自治体対応の側に寄せる。
  const municipal = p.municipalSupport ?? [];
  const title = p.metaTitle ?? (municipal.length
    ? `${p.areaName}の${p.pestName}駆除｜自治体の対応・費用の助成・防護服の貸出`
    : `${p.areaName}の${p.pestName}駆除｜捕獲の許可・相談窓口・対応業者の比較`);
  const description = p.metaDescription ?? (municipal.length
    ? `${p.areaName}で${p.pestName}の巣でお困りの方に向けて、${municipal.length}自治体の公式ページに記載されている駆除の可否・費用の助成・防護服の貸出と、${p.pestName}対応の記載がある駆除業者を編集部が整理しています。`
    : `${p.areaName}で${p.pestName}の被害でお困りの方に向けて、捕獲に関する法令（環境省・自治体の記載）、自治体の相談窓口、${p.pestName}対応の記載がある駆除業者の比較を編集部が整理しています。`);
  return {
    title: { absolute: `${title}｜害虫・害獣駆除プロ比較ナビ` },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", images: [DEFAULT_OG_IMAGE] },
  };
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}

const tierRank: Record<AgentReview["partnerTier"], number> = {
  affiliated: 0,
  candidate: 1,
  other: 2,
};

/** agentsData の infoTable / priceRows から値を拾う。無ければ「本サイト掲載データに記載なし」。 */
function pick(a: AgentReview, keywords: string[]): string {
  const info = a.infoTable.find((r) => keywords.some((k) => r.k.includes(k)));
  if (info) return info.v;
  const row = a.priceRows.find((r) => keywords.some((k) => r.item.includes(k)));
  if (row) return row.price;
  return "当サイト掲載データに記載なし";
}

export default async function PestAreaPage({ params }: Props) {
  const { pest, area } = await params;
  const p = getPestArea(pest, area);
  if (!p) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        該当するページの情報はありません。
      </div>
    );
  }
  const confirmed = formatDate(p.confirmedDate);
  const pestPagePath = p.pestPagePath ?? `/${p.pestSlug}`;
  // 自治体ごとの対応（ハチなど）。空なら従来どおり法令中心の見せ方のまま。
  const municipal = p.municipalSupport ?? [];
  const hasMunicipal = municipal.length > 0;
  const related = allPestAreaLinks();

  // 順位づけはしない。partnerTier 順（affiliated → candidate → other）で並べるだけ。
  const companies = p.companySlugs
    .map((s) => agents.find((a) => a.slug === s))
    .filter((a): a is AgentReview => Boolean(a))
    .sort((a, b) => tierRank[a.partnerTier] - tierRank[b.partnerTier]);

  const faqs = p.faqs ?? [];
  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <>
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <Breadcrumb
        items={[
          { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
          { label: "害虫・害獣から探す", href: "/pest" },
          { label: `${p.pestName}駆除`, href: pestPagePath },
          { label: p.areaName },
        ]}
      />

      <article className="bg-white">
        <header className="ph" data-no-reveal>
          <div className="ph-inner">
            <p className="eyebrow">
              エリア × {hasMunicipal ? "害虫" : "害獣"}情報
            </p>
            <h1 className="ph-title">
              {p.areaName}の{p.pestName}駆除
              <br className="hidden md:block" />
              {hasMunicipal
                ? "自治体の対応・費用の助成・対応業者"
                : p.pestSlug === "nezumi"
                  ? "法令・相談窓口・対応業者"
                  : "捕獲の許可・相談窓口・対応業者"}
            </h1>
            <p className="ph-lead">
              {hasMunicipal
                ? `自治体が駆除するかどうか、費用の助成や防護服の貸出があるかどうかは自治体ごとに分かれます。各自治体の公式ページの記載をまとめたうえで、${p.pestName}対応の記載がある業者を比較できるようにしています。`
                : `法令と自治体窓口の情報をまとめたうえで、${p.pestName}対応の記載がある業者を比較できるようにしています。`}
            </p>
            <div className="ph-badges">
              <span className="ph-badge">
                掲載業者 {companies.length}社
              </span>
              {hasMunicipal && (
                <span className="ph-badge">
                  掲載自治体 {municipal.length}件
                </span>
              )}
              <span className="ph-badge">
                確認日 {confirmed}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <div className="notice">
            {hasMunicipal ? (
              <>
                本ページは、{p.areaName}
                内の各自治体および各社の公式サイトの公開情報をもとに編集部が整理したものです（確認日：
                {confirmed}
                ）。自治体の対応・助成・貸出に関する記述は各自治体のページの記載の範囲にとどめ、記載がない項目は「記載なし」としています。制度は年度ごとに変わることがあるため、実際の可否・金額は必ず各自治体にご確認ください。
              </>
            ) : (
              <>
                本ページは、公的機関（環境省・{p.areaName}
                ・区市）および各社の公式サイトの公開情報をもとに編集部が整理したものです（確認日：
                {confirmed}
                ）。法令に関する記述は各機関のページの記載の範囲にとどめ、編集部による法解釈は行っていません。実際の手続きの可否は、必ず下記の窓口にご確認ください。
              </>
            )}
          </div>

          {/* 冒頭の要約 */}
          <section id="intro" className="scroll-mt-20 mb-12">
            <h2 className="h2-sec">
              {p.areaName}の{p.pestName}被害について
            </h2>
            {p.intro.map((t, i) => (
              <p key={i} className="text-slate-700 leading-loose mb-4">
                {t}
              </p>
            ))}
          </section>

          {faqs.length > 0 && (
            <section id="faq" className="scroll-mt-20 mb-12">
              <h2 className="h2-sec">よくある質問</h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <div key={i} className="collapse collapse-arrow border border-slate-200 rounded-xl bg-white">
                    <input type="checkbox" defaultChecked={i === 0} />
                    <div className="collapse-title font-bold text-slate-800">{f.q}</div>
                    <div className="collapse-content">
                      <p className="text-slate-700 text-sm leading-relaxed">{f.a}</p>
                      <p className="text-slate-500 text-xs mt-2">
                        出典：
                        <a href={f.source} target="_blank" rel="noopener noreferrer" className="underline">
                          {f.org}
                        </a>
                        （確認日：{formatDate(f.confirmedDate)}）
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 自治体の対応（municipalSupport があるときだけ出す） */}
          {hasMunicipal && (
            <section id="municipal" className="scroll-mt-20 mb-12">
              <h2 className="h2-sec">
                自治体の対応（助成・防護服の貸出）
              </h2>
              {p.supportSummary && (
                <p className="text-slate-700 leading-loose mb-6">
                  {p.supportSummary}
                </p>
              )}
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                各自治体の公式ページに書かれている内容をそのまま整理しています。公式ページに記載がない項目は「記載なし」としており、編集部による推測は行っていません。「記載なし」は制度がないことを示すものではなく、当該ページで記載を確認できなかったことを示しています。
              </p>
              <div className="overflow-x-auto">
                <table className="table w-full border border-slate-200 text-sm">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="border border-slate-300">自治体</th>
                      <th className="border border-slate-300">
                        自治体による駆除
                      </th>
                      <th className="border border-slate-300">費用の助成</th>
                      <th className="border border-slate-300">
                        防護服・器具の貸出
                      </th>
                      <th className="border border-slate-300">条件</th>
                    </tr>
                  </thead>
                  <tbody>
                    {municipal.map((m) => (
                      <tr key={m.url} className="align-top">
                        <th className="bg-slate-50 border border-slate-200 whitespace-nowrap">
                          {m.name}
                        </th>
                        <td className="border border-slate-200 leading-relaxed">
                          {m.policy || "記載なし"}
                        </td>
                        <td className="border border-slate-200 leading-relaxed">
                          {m.subsidy ?? "記載なし"}
                        </td>
                        <td className="border border-slate-200 leading-relaxed">
                          {m.lending ?? "記載なし"}
                        </td>
                        <td className="border border-slate-200 leading-relaxed">
                          {m.note ?? "記載なし"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-800 mb-3">
                  出典（各自治体の公式ページ）
                </p>
                <ul className="space-y-2">
                  {municipal.map((m) => (
                    <li key={m.url} className="text-xs text-slate-600 break-all">
                      {m.name}：
                      <a
                        href={m.url}
                        target="_blank"
                        rel="nofollow noopener"
                        className="text-blue-600 hover:underline"
                      >
                        {m.url}
                      </a>
                      （確認日 {formatDate(m.confirmedDate)}）
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* 法令 */}
          {p.legalNotes.length > 0 && (
          <section id="legal" className="scroll-mt-20 mb-12">
            {/* 家ネズミ3種（ドブネズミ・クマネズミ・ハツカネズミ）は鳥獣保護管理法の対象外（環境省・法第80条・施行規則第78条）。2026-10-28 見出しを訂正 */}
            <h2 className="h2-sec">
              {p.pestSlug === "nezumi"
                ? "ネズミの捕獲と法令（家ネズミ3種は鳥獣保護管理法の対象外）"
                : `${p.pestName}の捕獲には許可が必要です`}
            </h2>
            <p className="text-slate-700 leading-loose mb-6">
              {p.pestSlug === "nezumi"
                ? "家の中や周りで見かけるドブネズミ・クマネズミ・ハツカネズミ（いえねずみ類3種）は、鳥獣保護管理法の対象外とされています。以下は、公的機関のページに記載されている内容をそのまま引用したものです。"
                : `${p.pestName}を含む野生鳥獣は、鳥獣保護管理法により原則として捕獲が禁止されています。以下は、公的機関のページに記載されている内容をそのまま引用したものです。`}
            </p>
            <div className="space-y-4">
              {p.legalNotes.map((n, i) => (
                <blockquote
                  key={i}
                  className="rounded-2xl border-l-4 border-red-400 bg-red-50 p-5"
                >
                  <p className="text-slate-800 leading-relaxed">「{n.text}」</p>
                  <p className="mt-3 text-xs text-slate-600">
                    出典：{n.org}／
                    <a
                      href={n.source}
                      target="_blank"
                      rel="nofollow noopener"
                      className="text-blue-600 hover:underline break-all"
                    >
                      {n.source}
                    </a>
                    （確認日 {formatDate(n.confirmedDate)}）
                  </p>
                  {n.text.includes("懲役") && (
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      ※2025年6月1日施行の改正刑法により、懲役は拘禁刑に一本化されています。現行の鳥獣保護管理法の罰則は「一年以下の拘禁刑又は百万円以下の罰金」です（
                      <a href="https://laws.e-gov.go.jp/law/414AC0000000088" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">e-Gov法令検索</a>
                      、2026年10月17日確認）。
                    </p>
                  )}
                </blockquote>
              ))}
            </div>
          </section>
          )}

          {/* 相談窓口 */}
          {p.govContacts.length > 0 && (
          <section id="gov" className="scroll-mt-20 mb-12">
            <h2 className="h2-sec">
              {p.areaName}・区市の相談窓口
            </h2>
            <div className="space-y-4">
              {p.govContacts.map((g) => (
                <div
                  key={g.url}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <p className="font-bold text-slate-800 mb-2">{g.name}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {g.text}
                  </p>
                  <p className="mt-3 text-xs text-slate-500 break-all">
                    <a
                      href={g.url}
                      target="_blank"
                      rel="nofollow noopener"
                      className="text-blue-600 hover:underline"
                    >
                      {g.url}
                    </a>
                    （確認日 {formatDate(g.confirmedDate)}）
                  </p>
                  {g.text.includes("懲役") && (
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      ※2025年6月1日施行の改正刑法により、懲役は拘禁刑に一本化されています。現行の鳥獣保護管理法の罰則は「一年以下の拘禁刑又は百万円以下の罰金」です（
                      <a href="https://laws.e-gov.go.jp/law/414AC0000000088" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">e-Gov法令検索</a>
                      、2026年10月17日確認）。
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
          )}

          {/* 被害の種類 */}
          <section id="damage" className="scroll-mt-20 mb-12">
            <h2 className="h2-sec">
              被害の種類
            </h2>
            <ul className="space-y-3">
              {p.damage.map((d, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-700 leading-relaxed text-sm rounded-xl bg-slate-50 border border-slate-200 p-4"
                >
                  <span className="text-amber-500 shrink-0">■</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 業者比較 */}
          <section id="companies" className="scroll-mt-20 mb-12" data-no-reveal>
            <h2 className="h2-sec">
              {p.pestName}対応の記載がある業者
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              当サイト掲載業者のうち、対応する{hasMunicipal ? "害虫" : "害獣"}
              として{p.pestName}
              を明記している業者を掲載しています。掲載順は編集部の提携状況にもとづくもので、優劣・順位を示すものではありません。料金・保証・受付時間は各社の公表内容をそのまま記載しています。
            </p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-slate-300">業者名</th>
                    <th className="border border-slate-300">料金（公表値）</th>
                    <th className="border border-slate-300">保証</th>
                    <th className="border border-slate-300">受付時間</th>
                    <th className="border border-slate-300">
                      対応{hasMunicipal ? "害虫" : "害獣"}の記載
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((a) => (
                    <tr key={a.slug} className="align-top">
                      <th className="bg-slate-50 border border-slate-200 whitespace-nowrap">
                        <CompanyVisual id={a.image} name={a.name} size="mini" monogram />
                        <Link
                          href={`/agents/${a.slug}`}
                          className="text-blue-600 hover:underline"
                        >
                          {a.name}
                        </Link>
                        {hasAff(a.slug) && (
                          <span className="block mt-1">
                            <AffText slug={a.slug} variant="small" label="公式サイト" />
                          </span>
                        )}
                      </th>
                      <td className="border border-slate-200">
                        {a.priceRows[0]
                          ? `${a.priceRows[0].item}：${a.priceRows[0].price}`
                          : "当サイト掲載データに記載なし"}
                      </td>
                      <td className="border border-slate-200">
                        {pick(a, ["保証"])}
                      </td>
                      <td className="border border-slate-200">
                        {pick(a, ["受付"])}
                      </td>
                      <td className="border border-slate-200 leading-relaxed">
                        {a.servicesAnimals ??
                          a.servicesPests ??
                          (a.serviceTags?.length
                            ? a.serviceTags.join("／")
                            : "当サイト掲載データに記載なし")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※金額は各社が公表している料金で、{p.areaName}の{p.pestName}
              駆除の相場を示すものではありません。実際の費用は現地調査後の見積もりでご確認ください。
            </p>
          </section>

          {/* 確認項目 */}
          <section id="check" className="scroll-mt-20 mb-12">
            <h2 className="h2-sec">
              業者を選ぶ際の確認項目
            </h2>
            <ul className="space-y-3">
              {p.checkPoints.map((c, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-700 leading-relaxed"
                >
                  <span className="text-amber-500 shrink-0 font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 確認できなかったこと */}
          {p.cautions.length > 0 && (
            <section id="cautions" className="scroll-mt-20 mb-12">
              <h2 className="h2-sec">
                ご利用にあたっての注意事項
              </h2>
              <ul className="space-y-3">
                {p.cautions.map((c, i) => (
                  <li
                    key={i}
                    className="text-slate-700 leading-relaxed text-sm rounded-xl bg-slate-50 border border-slate-200 p-4"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 関連ページ */}
          <section id="related" className="scroll-mt-20">
            <h2 className="h2-sec">
              関連ページ
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href={pestPagePath}
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">
                  {p.pestName}駆除の基礎知識
                </p>
                <p className="text-xs text-slate-500 mt-1">{pestPagePath}</p>
              </Link>
              {AREA_PAGES.has(p.areaSlug) && (
                <Link
                  href={`/area/${p.areaSlug}`}
                  className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
                >
                  <p className="font-bold text-slate-800">
                    {p.areaName}の害虫・害獣駆除業者比較
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    /area/{p.areaSlug}
                  </p>
                </Link>
              )}
              <Link
                href="/agents"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">駆除業者を比較</p>
                <p className="text-xs text-slate-500 mt-1">/agents</p>
              </Link>
              <Link
                href="/pest"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">害虫・害獣から探す</p>
                <p className="text-xs text-slate-500 mt-1">/pest</p>
              </Link>
            </div>
            <RelatedLinkList
              title={`${p.areaName}のほかの害虫・害獣`}
              links={related
                .filter((x) => x.area === p.areaSlug && x.pest !== p.pestSlug)
                .map((x) => ({ href: x.href, label: `${x.areaName}の${x.pestName}駆除` }))}
            />
            <RelatedLinkList
              title={`ほかのエリアの${p.pestName}駆除`}
              links={related
                .filter((x) => x.pest === p.pestSlug && x.area !== p.areaSlug)
                .map((x) => ({ href: x.href, label: x.areaName }))}
            />
            <RelatedLinkList
              title={`${p.areaName}の拠点・対応エリアを整理した業者ページ`}
              links={brandAreas
                .filter((b) => b.areaSlug === p.areaSlug && p.companySlugs.includes(b.brandSlug))
                .map((b) => ({ href: `/agents/${b.brandSlug}/${b.areaSlug}`, label: `${agents.find((a) => a.slug === b.brandSlug)?.name ?? b.brandName.split("（")[0]} ${b.areaName}` }))}
            />
          </section>
        </div>
      </article>
    </>
  );
}
