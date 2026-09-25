import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { brandAreas, getBrandArea } from "@/app/data/brandAreas";
import { getAgent } from "../../agentsData";

// データ駆動テンプレート。
// app/data/brandAreas.ts に BrandArea を1件足すと、このテンプレートから
// /agents/{brandSlug}/{areaSlug}/ が1ページ生成される。ページ側の追加実装は不要。

const SITE = "https://gaichu-pro.com";

type Props = { params: Promise<{ slug: string; area: string }> };

export function generateStaticParams() {
  return brandAreas.map((b) => ({ slug: b.brandSlug, area: b.areaSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, area } = await params;
  const b = getBrandArea(slug, area);
  if (!b) return {};
  const url = `${SITE}/agents/${slug}/${area}/`;
  const title = `${b.brandName} ${b.areaName}の対応エリア・拠点｜料金・保証・受付時間`;
  const description = `${b.brandName}（${b.operator.name}）の${b.areaName}における拠点・対応市区町村・料金表記・保証・受付時間を、公式サイトの記載をもとに編集部が整理しました。${b.confirmedDate}時点の公式表記です。`;
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

export default async function BrandAreaPage({ params }: Props) {
  const { slug, area } = await params;
  const b = getBrandArea(slug, area);
  if (!b) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        ページが見つかりません。
      </div>
    );
  }
  const agent = getAgent(b.brandSlug);
  const confirmed = formatDate(b.confirmedDate);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
          { label: "駆除業者を比較", href: "/agents" },
          { label: b.brandName, href: `/agents/${b.brandSlug}` },
          { label: b.areaName },
        ]}
      />

      <article className="bg-white">
        <header className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
            <p className="text-sm tracking-widest text-amber-300 mb-3">
              ブランド × エリア情報
            </p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">
              {b.brandName}
              <span className="text-amber-300">{b.areaName}</span>
              の対応エリア・拠点
            </h1>
            <p className="text-slate-200 leading-relaxed">
              {b.brandName}（運営：{b.operator.name}）が{b.areaName}
              向けに公開している拠点・対応市区町村・料金表記・保証・受付時間を、公式サイトの記載をそのまま整理しました。
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="badge badge-lg bg-white/15 border-0 text-white">
                拠点 {b.offices.length}件
              </span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">
                公式掲載 市区町村 {b.municipalities.length}件
              </span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">
                確認日 {confirmed}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-slate-700 leading-relaxed">
            本ページは、{b.brandName}
            の公式サイトの公開情報をもとに編集部が整理したものです（確認日：{confirmed}
            ）。料金・対応可否・住所は公式サイトの表記をそのまま掲載しており、編集部による推測は加えていません。最新の内容は公式サイトでご確認ください。
          </div>

          {/* 冒頭の要約 */}
          <section id="summary" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              {b.areaName}対応の概要
            </h2>
            <ul className="space-y-3">
              {b.areaStatements.map((s, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-700 leading-relaxed"
                >
                  <span className="text-amber-500 shrink-0">■</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            {b.officialAreaPage ? (
              <p className="mt-5 text-sm text-slate-500">
                引用元：
                <a
                  href={b.officialAreaPage}
                  target="_blank"
                  rel="nofollow noopener"
                  className="text-blue-600 hover:underline break-all"
                >
                  {b.officialAreaPage}
                </a>
                （確認日 {confirmed}）
              </p>
            ) : (
              <p className="mt-5 text-sm text-slate-500">
                公式サイトに{b.areaName}専用のページは確認できませんでした。
              </p>
            )}
          </section>

          {/* 拠点情報 */}
          <section id="offices" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              拠点情報（住所・電話・管轄エリア）
            </h2>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-slate-300">拠点名</th>
                    <th className="border border-slate-300">住所</th>
                    <th className="border border-slate-300">電話</th>
                    <th className="border border-slate-300">管轄エリア</th>
                  </tr>
                </thead>
                <tbody>
                  {b.offices.map((o) => (
                    <tr key={o.name} className="align-top">
                      <th className="bg-slate-50 text-slate-700 border border-slate-200 whitespace-nowrap">
                        {o.name}
                      </th>
                      <td className="border border-slate-200 leading-relaxed">
                        {o.address}
                      </td>
                      <td className="border border-slate-200 whitespace-nowrap">
                        {o.phone}
                      </td>
                      <td className="border border-slate-200 leading-relaxed">
                        {o.jurisdiction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {b.offices.some((o) => o.addressNote) && (
              <div className="mt-4 space-y-3">
                {b.offices
                  .filter((o) => o.addressNote)
                  .map((o) => (
                    <p
                      key={o.name}
                      className="text-sm text-slate-600 leading-relaxed rounded-xl bg-slate-50 border border-slate-200 p-4"
                    >
                      <span className="font-bold text-slate-700">
                        {o.name}について：
                      </span>
                      {o.addressNote}
                    </p>
                  ))}
              </div>
            )}
            {b.officesNote && (
              <div className="mt-4 rounded-xl border-l-4 border-red-400 bg-red-50 p-4 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-red-700">
                  公式サイト内の表記ゆれについて：
                </span>
                {b.officesNote}
              </div>
            )}
          </section>

          {/* 対応市区町村 */}
          <section id="municipalities" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              公式が掲げる対応市区町村
            </h2>
            <div className="flex flex-wrap gap-2">
              {b.municipalities.map((m) => (
                <span
                  key={m}
                  className="badge badge-lg border border-slate-200 bg-slate-50 text-slate-700"
                >
                  {m}
                </span>
              ))}
            </div>
            {b.municipalitiesNote && (
              <p className="mt-5 text-sm text-slate-600 leading-relaxed rounded-xl bg-slate-50 border border-slate-200 p-4">
                {b.municipalitiesNote}
              </p>
            )}
          </section>

          {/* 対応する害獣・作業内容 */}
          <section id="services" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              対応する害獣・作業内容
            </h2>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200 text-sm">
                <tbody>
                  <tr className="align-top">
                    <th className="bg-slate-50 text-slate-600 w-40 border border-slate-200">
                      主な対応害獣
                    </th>
                    <td className="border border-slate-200 leading-relaxed">
                      {b.services.main}
                    </td>
                  </tr>
                  {b.services.others && (
                    <tr className="align-top">
                      <th className="bg-slate-50 text-slate-600 border border-slate-200">
                        その他の対応
                      </th>
                      <td className="border border-slate-200 leading-relaxed">
                        {b.services.others}
                      </td>
                    </tr>
                  )}
                  <tr className="align-top">
                    <th className="bg-slate-50 text-slate-600 border border-slate-200">
                      作業内容
                    </th>
                    <td className="border border-slate-200 leading-relaxed">
                      {b.services.work}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※いずれも公式サイトの表記をそのまま掲載しています。
            </p>
          </section>

          {/* 料金と保証 */}
          <section id="price" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              料金と保証
            </h2>

            <div className="rounded-2xl border border-slate-200 p-5 mb-5">
              <p className="font-bold text-slate-800 mb-3">料金</p>
              {b.price.listedPrice ? (
                <p className="text-slate-700 leading-relaxed mb-3">
                  公式表記の金額：
                  <span className="font-bold text-primary">
                    {b.price.listedPrice}
                  </span>
                </p>
              ) : (
                <p className="rounded-xl bg-slate-100 p-4 text-slate-700 leading-relaxed mb-3">
                  公式サイトに金額の掲示なし（無料見積もり）。編集部が確認した範囲では、{b.brandName}
                  の公式サイトに駆除料金の具体的な金額は掲示されていません。
                </p>
              )}
              <p className="text-slate-700 leading-relaxed">{b.price.text}</p>
              {b.price.note && (
                <p className="mt-3 text-sm text-slate-600 leading-relaxed rounded-xl bg-slate-50 border border-slate-200 p-4">
                  {b.price.note}
                </p>
              )}
              {b.campaign && (
                <p className="mt-3 text-sm text-slate-700 leading-relaxed rounded-xl bg-amber-50 border border-amber-200 p-4">
                  <span className="font-bold">公式掲載のキャンペーン：</span>
                  {b.campaign}
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-800 mb-3">保証</p>
              <p className="text-slate-800 font-bold mb-2">
                {b.guarantee.headline}
              </p>
              <p className="text-slate-700 leading-relaxed">
                {b.guarantee.text}
              </p>
              {b.guarantee.condition && (
                <p className="mt-3 text-sm text-slate-600">
                  {b.guarantee.condition}
                </p>
              )}
              {b.guarantee.afterSupport && (
                <p className="mt-2 text-sm text-slate-600">
                  {b.guarantee.afterSupport}
                </p>
              )}
            </div>
          </section>

          {/* 受付時間・調査/見積もり */}
          <section id="hours" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              受付時間・調査／見積もり
            </h2>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200 text-sm">
                <tbody>
                  <tr className="align-top">
                    <th className="bg-slate-50 text-slate-600 w-40 border border-slate-200">
                      受付時間
                    </th>
                    <td className="border border-slate-200 leading-relaxed">
                      {b.hours}
                    </td>
                  </tr>
                  <tr className="align-top">
                    <th className="bg-slate-50 text-slate-600 border border-slate-200">
                      調査・見積もり
                    </th>
                    <td className="border border-slate-200 leading-relaxed">
                      {b.survey.cost}
                    </td>
                  </tr>
                  {b.survey.speed && (
                    <tr className="align-top">
                      <th className="bg-slate-50 text-slate-600 border border-slate-200">
                        対応スピード
                      </th>
                      <td className="border border-slate-200 leading-relaxed">
                        {b.survey.speed}
                      </td>
                    </tr>
                  )}
                  <tr className="align-top">
                    <th className="bg-slate-50 text-slate-600 border border-slate-200">
                      運営会社
                    </th>
                    <td className="border border-slate-200 leading-relaxed">
                      {b.operator.name}（{b.operator.address}）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 資格・許可 */}
          <section id="qualifications" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              資格・許可
            </h2>
            <ul className="space-y-2">
              {b.qualifications.map((q, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-700 leading-relaxed text-sm"
                >
                  <span className="text-amber-500 shrink-0">・</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            {b.qualificationsNote && (
              <p className="mt-4 text-sm text-slate-600 leading-relaxed rounded-xl bg-slate-50 border border-slate-200 p-4">
                {b.qualificationsNote}
              </p>
            )}
          </section>

          {/* 確認できなかった項目 */}
          {b.notFound && b.notFound.length > 0 && (
            <section id="notfound" className="scroll-mt-20 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-slate-400 pl-4 mb-5">
                公式サイトで確認できなかった項目
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                以下は編集部が公式サイトを確認した範囲では記載が見つからなかった項目です。推測での記載は行っていません。
              </p>
              <ul className="space-y-2">
                {b.notFound.map((n, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-slate-700 leading-relaxed text-sm"
                  >
                    <span className="text-slate-400 shrink-0">×</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 出典 */}
          <section id="sources" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-slate-400 pl-4 mb-5">
              出典（確認日 {confirmed}）
            </h2>
            <ul className="space-y-2 text-sm">
              {b.sources.map((s) => (
                <li key={s} className="break-all">
                  <a
                    href={s}
                    target="_blank"
                    rel="nofollow noopener"
                    className="text-blue-600 hover:underline"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 導線 */}
          <section id="related" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              関連ページ
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href={`/agents/${b.brandSlug}/`}
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">
                  {agent ? agent.name : b.brandName}の口コミ・評判・料金
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  ブランド本体のレビューページ
                </p>
              </Link>
              <Link
                href={`/area/${b.areaSlug}/`}
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">
                  {b.areaName}の害虫・害獣駆除業者比較
                </p>
                <p className="text-xs text-slate-500 mt-1">エリアのまとめページ</p>
              </Link>
              <Link
                href="/agents/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">駆除業者を比較</p>
                <p className="text-xs text-slate-500 mt-1">掲載業者の一覧</p>
              </Link>
              <Link
                href="/pest/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">害虫・害獣から探す</p>
                <p className="text-xs text-slate-500 mt-1">種類別のハブページ</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
