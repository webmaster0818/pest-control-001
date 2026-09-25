import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { pestAreas, getPestArea } from "@/app/data/pestAreas";
import { agents, type AgentReview } from "@/app/agents/agentsData";

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
  nezumi: ["nagoya", "osaka", "tokyo", "yokohama"],
  termite: [
    "chiba", "fukuoka", "hamamatsu", "hiroshima", "kanagawa", "kawasaki",
    "kitakyushu", "kobe", "kumamoto", "kyoto", "nagoya", "niigata", "osaka",
    "saitama", "saitama-city", "sapporo", "sendai", "tokyo", "yokohama",
  ],
  wasp: ["chiba", "fukuoka", "nagoya", "osaka", "saitama", "tokyo", "yokohama"],
};

function isExistingStaticPath(pest: string, area: string) {
  return (EXISTING_STATIC_PATHS[pest] ?? []).includes(area);
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
  const url = `${SITE}/pest/${pest}/${area}/`;
  const title = `${p.areaName}の${p.pestName}駆除｜捕獲の許可・相談窓口・対応業者の比較`;
  const description = `${p.areaName}で${p.pestName}の被害に困っている方向けに、捕獲に関する法令（環境省・東京都の記載）、自治体の相談窓口、${p.pestName}対応の記載がある駆除業者の比較を編集部が整理しました。`;
  return {
    title: { absolute: `${title}｜害虫・害獣駆除プロ比較ナビ` },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
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
  return "本サイト掲載データに記載なし";
}

export default async function PestAreaPage({ params }: Props) {
  const { pest, area } = await params;
  const p = getPestArea(pest, area);
  if (!p) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        ページが見つかりません。
      </div>
    );
  }
  const confirmed = formatDate(p.confirmedDate);
  const pestPagePath = p.pestPagePath ?? `/${p.pestSlug}`;

  // 順位づけはしない。partnerTier 順（affiliated → candidate → other）で並べるだけ。
  const companies = p.companySlugs
    .map((s) => agents.find((a) => a.slug === s))
    .filter((a): a is AgentReview => Boolean(a))
    .sort((a, b) => tierRank[a.partnerTier] - tierRank[b.partnerTier]);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
          { label: "害虫・害獣から探す", href: "/pest" },
          { label: `${p.pestName}駆除`, href: pestPagePath },
          { label: p.areaName },
        ]}
      />

      <article className="bg-white">
        <header className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
            <p className="text-sm tracking-widest text-amber-300 mb-3">
              エリア × 害獣情報
            </p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">
              {p.areaName}の{p.pestName}駆除
              <br className="hidden md:block" />
              捕獲の許可・相談窓口・対応業者
            </h1>
            <p className="text-slate-200 leading-relaxed">
              法令と自治体窓口の情報を先に整理し、そのうえで{p.pestName}
              対応の記載がある業者を比較できるようにしています。
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="badge badge-lg bg-white/15 border-0 text-white">
                掲載業者 {companies.length}社
              </span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">
                確認日 {confirmed}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-slate-700 leading-relaxed">
            本ページは、公的機関（環境省・{p.areaName}
            ・区市）および各社の公式サイトの公開情報をもとに編集部が整理したものです（確認日：
            {confirmed}
            ）。法令に関する記述は各機関のページの記載の範囲にとどめ、編集部による法解釈は行っていません。実際の手続きの可否は、必ず下記の窓口にご確認ください。
          </div>

          {/* 冒頭の要約 */}
          <section id="intro" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              {p.areaName}の{p.pestName}被害について
            </h2>
            {p.intro.map((t, i) => (
              <p key={i} className="text-slate-700 leading-loose mb-4">
                {t}
              </p>
            ))}
          </section>

          {/* 法令 */}
          <section id="legal" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-red-500 pl-4 mb-5">
              {p.pestName}の捕獲には許可が必要です
            </h2>
            <p className="text-slate-700 leading-loose mb-6">
              {p.pestName}
              を含む野生鳥獣は、鳥獣保護管理法により原則として捕獲が禁止されています。以下は、公的機関のページに記載されている内容をそのまま引用したものです。
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
                </blockquote>
              ))}
            </div>
          </section>

          {/* 相談窓口 */}
          <section id="gov" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
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
                </div>
              ))}
            </div>
          </section>

          {/* 被害の種類 */}
          <section id="damage" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              被害の種類（公的機関の記載より）
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
          <section id="companies" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              {p.pestName}対応の記載がある業者
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              当サイト掲載業者のうち、対応害獣として{p.pestName}
              を明記している会社を掲載しています。掲載順は編集部の提携状況による並びで、優劣・順位を示すものではありません。料金・保証・受付時間は各社の公表内容をそのまま記載しています。
            </p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-slate-300">業者名</th>
                    <th className="border border-slate-300">料金（公表値）</th>
                    <th className="border border-slate-300">保証</th>
                    <th className="border border-slate-300">受付時間</th>
                    <th className="border border-slate-300">対応害獣の記載</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((a) => (
                    <tr key={a.slug} className="align-top">
                      <th className="bg-slate-50 border border-slate-200 whitespace-nowrap">
                        <Link
                          href={`/agents/${a.slug}/`}
                          className="text-blue-600 hover:underline"
                        >
                          {a.name}
                        </Link>
                      </th>
                      <td className="border border-slate-200">
                        {a.priceRows[0]
                          ? `${a.priceRows[0].item}：${a.priceRows[0].price}`
                          : "本サイト掲載データに記載なし"}
                      </td>
                      <td className="border border-slate-200">
                        {pick(a, ["保証"])}
                      </td>
                      <td className="border border-slate-200">
                        {pick(a, ["受付"])}
                      </td>
                      <td className="border border-slate-200 leading-relaxed">
                        {a.servicesAnimals ?? "本サイト掲載データに記載なし"}
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              業者を選ぶときの確認項目
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
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-slate-400 pl-4 mb-5">
                今回の調査で裏付けが取れなかったこと
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              関連ページ
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href={`${pestPagePath}/`}
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">
                  {p.pestName}駆除の基礎知識
                </p>
                <p className="text-xs text-slate-500 mt-1">{pestPagePath}</p>
              </Link>
              <Link
                href={`/area/${p.areaSlug}/`}
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">
                  {p.areaName}の害虫・害獣駆除業者比較
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  /area/{p.areaSlug}
                </p>
              </Link>
              <Link
                href="/agents/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">駆除業者を比較</p>
                <p className="text-xs text-slate-500 mt-1">/agents</p>
              </Link>
              <Link
                href="/pest/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">害虫・害獣から探す</p>
                <p className="text-xs text-slate-500 mt-1">/pest</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
