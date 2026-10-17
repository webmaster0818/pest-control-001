import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { agents, getAgent } from "../agentsData";
import RelatedLinkList from "@/app/components/RelatedLinkList";
import { brandAreas } from "@/app/data/brandAreas";
import { AffBanner, AffText, hasAff } from "@/app/components/AffLink";
import CompanyVisual from "@/app/components/CompanyVisual";

const SITE = "https://gaichu-pro.com";
const UPDATED = "2026-06-10";
const jpDate = (d: string) => { const [y, m, dd] = d.split("-").map(Number); return `${y}年${m}月${dd}日`; };

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAgent(slug);
  if (!a) return {};
  const url = `${SITE}/agents/${slug}`; // 末尾スラッシュ付きは本番で308になるため無しで自己参照
  return {
    title: { absolute: a.metaTitle },
    description: a.metaDesc,
    alternates: { canonical: url },
    openGraph: { title: a.metaTitle, description: a.metaDesc, url, type: "article", images: [a.image] },
  };
}

export default async function AgentPage({ params }: Props) {
  const { slug } = await params;
  const a = getAgent(slug);
  if (!a) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center">該当する業者の情報はありません。</div>;
  }

  const toc: [string, string][] = [
    ["about", `${a.name}の概要`],
    ["taiou", "対応している害獣・害虫の種類"],
    ["price", `${a.name}の料金体系と相場`],
    ["reviews", "利用者の口コミ・評判"],
    ["merit", "メリットとデメリット"],
    ["recommend", `${a.name}の利用が適している方`],
    ["compare", "他社と比較する際の確認項目"],
    ["faq", "よくある質問"],
    ["summary", "まとめ"],
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${a.name}の口コミ・評判・料金`,
    description: a.metaDesc,
    image: `${SITE}${a.image}`,
    datePublished: `${a.updated ?? UPDATED}T00:00:00+09:00`,
    dateModified: `${a.updated ?? UPDATED}T00:00:00+09:00`,
    author: { "@type": "Organization", name: "害虫・害獣駆除プロ比較ナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "害虫・害獣駆除プロ比較ナビ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/agents/${slug}/` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: a.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb
        items={[
          { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
          { label: "駆除業者", href: "/agents" },
          { label: `${a.name}の口コミ・評判` },
        ]}
      />

      <article className="bg-white">
        <header className="ph" data-no-reveal>
          <div className="ph-inner ph-grid">
            <div className="ph-copy">
              <p className="eyebrow">害獣・害虫駆除業者の口コミ・評判</p>
              <h1 className="ph-title">
                {a.name}の口コミ・評判
                <br className="hidden md:block" />
                <span className="ph-title-sub">料金・サービス内容・メリットとデメリット</span>
              </h1>
              <p className="ph-lead">{a.heroLead}</p>
              <div className="ph-badges">
                {a.badges.map((b) => (
                  <span key={b} className="ph-badge">{b}</span>
                ))}
              </div>
            </div>
            <aside className="ph-side">
              {hasAff(a.slug) ? (
                <div className="ph-cta">
                  <AffBanner slug={a.slug} />
                  <AffText slug={a.slug} variant="button" label={`${a.name}の公式サイトで無料見積もり`} />
                  <p className="ph-pr">※本ページはプロモーションを含みます</p>
                </div>
              ) : (
                <CompanyVisual id={a.image} name={a.name} size="wide" />
              )}
            </aside>
          </div>
          {hasAff(a.slug) && (
            <div className="ph-visual">
              <Image src={a.image} alt={`${a.name}の害獣・害虫駆除サービス`} width={1200} height={800} className="ph-visual-img" priority />
            </div>
          )}
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="meta-line">最終更新日：{jpDate(a.updated ?? UPDATED)}　／　害虫・害獣駆除プロ比較ナビ編集部</p>

          <nav aria-label="目次" className="toc">
            <p className="toc-title">目次</p>
            <ol className="toc-list">
              {toc.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <span className="toc-no">{String(i + 1).padStart(2, "0")}</span>{label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="about" className="scroll-mt-20 mb-14">
            <h2 className="h2-sec">{a.name}の概要</h2>
            {a.about.map((p, i) => (
              <p key={i} className="text-slate-700 leading-loose mb-4">{p}</p>
            ))}
            <div className="mt-6 overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <tbody>
                  {a.infoTable.map((r, i) => (
                    <tr key={i} className={i < a.infoTable.length - 1 ? "border-b border-slate-200" : ""}>
                      <th className="bg-slate-50 text-slate-600 w-44">{r.k}</th>
                      <td>{r.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="taiou" className="scroll-mt-20 mb-14">
            <h2 className="h2-sec">対応している害獣・害虫の種類</h2>
            {a.serviceTags ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {a.serviceTags.map((s) => (
                  <div key={s} className="rounded-xl border border-slate-200 p-4 text-center font-medium text-slate-700">{s}</div>
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {a.servicesAnimals && (
                  <div className="rounded-xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-800 mb-2">対応する主な害獣</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{a.servicesAnimals}</p>
                  </div>
                )}
                {a.servicesPests && (
                  <div className="rounded-xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-800 mb-2">対応する主な害虫</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{a.servicesPests}</p>
                  </div>
                )}
              </div>
            )}
          </section>

          <section id="price" className="scroll-mt-20 mb-14" data-no-reveal>
            <h2 className="h2-sec">{a.name}の料金体系と相場</h2>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <thead><tr className="bg-slate-100 text-slate-700"><th>項目</th><th>料金の目安</th><th>備考</th></tr></thead>
                <tbody>
                  {a.priceRows.map((r, i) => (
                    <tr key={i} className={i < a.priceRows.length - 1 ? "border-b border-slate-200" : ""}>
                      <td className="font-medium">{r.item}</td>
                      <td className="font-bold text-amber-700">{r.price}</td>
                      <td className="text-sm text-slate-600">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-3">{a.priceNote ?? "※ 料金は変動する場合があります。正確な金額は無料の現地調査・見積もりでご確認ください。"}</p>
            {hasAff(a.slug) && (
              <p className="text-sm text-slate-700 mt-3">
                最新の料金・受付状況は公式サイトでご確認ください：<AffText slug={a.slug} label={`${a.name}の公式サイト`} />
              </p>
            )}
          </section>

          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="h2-sec">利用者の口コミ・評判</h2>
            <div className="rv-summary">
              {a.satisfaction && (
                <div className="text-center">
                  <p className="text-4xl font-bold text-amber-700">{a.satisfaction}<span className="text-xl text-slate-500">/5</span></p>
                  <p className="text-xs text-slate-500 mt-1">利用者満足度の目安</p>
                </div>
              )}
              <p className="text-slate-700 text-sm leading-relaxed flex-1">{a.reviewsSummary}</p>
            </div>
            {a.goodReviews.length > 0 && (<>
            <h3 className="font-bold text-lg text-slate-800 mb-3">良い口コミ</h3>
            <div className="space-y-4 mb-8">
              {a.goodReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-5">
                  <p className="font-bold text-slate-800 mb-1">{r.title}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-2">{r.body}</p>
                  <p className="text-xs text-slate-400">
                    {r.url ? <a href={r.url} target="_blank" rel="nofollow noopener" className="underline">{r.meta}</a> : r.meta}
                  </p>
                </div>
              ))}
            </div>
            </>)}
            {a.badReviews.length > 0 && (<>
            <h3 className="font-bold text-lg text-slate-800 mb-3">気になる口コミ・注意点</h3>
            <div className="space-y-4">
              {a.badReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 mb-1">{r.title}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-2">{r.body}</p>
                  <p className="text-xs text-slate-400">
                    {r.url ? <a href={r.url} target="_blank" rel="nofollow noopener" className="underline">{r.meta}</a> : r.meta}
                  </p>
                </div>
              ))}
            </div>
            </>)}
            {a.goodReviews.length + a.badReviews.length > 0 && <p className="text-xs text-slate-500 mt-4">※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです。感じ方には個人差があります。</p>}
          </section>

          <section id="merit" className="scroll-mt-20 mb-14">
            <h2 className="h2-sec">メリットとデメリット</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="pm-box pm-good">
                <h3 className="pm-title">メリット</h3>
                <ul className="space-y-2 text-sm text-slate-700">{a.merits.map((m, i) => <li key={i}>{m}</li>)}</ul>
              </div>
              <div className="pm-box pm-bad">
                <h3 className="pm-title">デメリット・注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">{a.demerits.map((m, i) => <li key={i}>{m}</li>)}</ul>
              </div>
            </div>
          </section>

          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="h2-sec">{a.name}の利用が適している方</h2>
            <div className="rec-box">
              <Image src="/images/hero-animal-new.jpg" alt="天井裏に侵入する害獣のイメージ" width={1200} height={480} className="w-full h-48 md:h-56 object-cover" />
              <div className="p-6">
                <ul className="space-y-3 text-slate-700">
                  {a.recommend.map((r, i) => (
                    <li key={i} className="flex gap-3"><span className="text-amber-600 font-bold">●</span>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="h2-sec">他社と比較する際の確認項目</h2>
            <p className="text-slate-700 leading-loose mb-4">駆除業者を選ぶ際は、料金の安さだけでなく、保証や施工体制を含めて総合的に比較することが大切です。{a.name}を他社と比べる際は、次の点を確認すると判断しやすくなります。</p>
            <ol className="space-y-3 text-slate-700">
              {a.comparePoints.map((c, i) => (
                <li key={i} className="flex gap-3"><span className="font-bold text-amber-600">{i + 1}.</span>{c}</li>
              ))}
            </ol>
            <p className="text-slate-700 leading-loose mt-4">
              料金や対応は地域・被害状況で変わるため、{a.name}を含めて
              <Link href="/" className="text-amber-700 underline">複数の駆除業者を比較</Link>
              し、無料見積もりを取ったうえで選ぶことをおすすめします。
            </p>
          </section>

          <section id="faq" className="scroll-mt-20 mb-14">
            <h2 className="h2-sec">よくある質問</h2>
            <div className="space-y-3">
              {a.faqs.map((f, i) => (
                <div key={i} className="collapse collapse-arrow border border-slate-200 rounded-xl bg-white">
                  <input type="checkbox" defaultChecked={i === 0} />
                  <div className="collapse-title font-bold text-slate-800">{f.q}</div>
                  <div className="collapse-content"><p className="text-slate-700 text-sm leading-relaxed">{f.a}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section id="summary" className="scroll-mt-20" data-no-reveal>
            <h2 className="h2-sec">まとめ</h2>
            {a.summary.map((p, i) => (
              <p key={i} className="text-slate-700 leading-loose mb-4">{p}</p>
            ))}
            <div className="end-cta">
              <p className="font-bold text-lg mb-2">害獣・害虫の被害でお困りの方へ</p>
              <p className="text-slate-300 text-sm mb-4">地域・被害状況に合った駆除業者を比較し、無料見積もりの依頼にお役立てください。</p>
              {hasAff(a.slug) ? (
                <div className="flex flex-col items-center gap-3">
                  <AffBanner slug={a.slug} />
                  <AffText slug={a.slug} variant="button" label={`${a.name}の公式サイトで無料見積もり`} />
                  <Link href="/" className="text-slate-300 text-sm underline">他の駆除業者とも比較する</Link>
                  <p className="text-xs text-slate-400">※本ページはプロモーションを含みます</p>
                </div>
              ) : (
                <Link href="/" className="btn bg-amber-500 hover:bg-amber-600 border-0 text-white btn-arrow">駆除業者を比較して探す</Link>
              )}
            </div>
            {a.sources && a.sources.length > 0 && (
              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-bold text-slate-800 mb-2 text-sm">本ページの確認先（{jpDate(a.updated ?? UPDATED)}確認）</p>
                <ul className="space-y-1 text-xs text-slate-600">
                  {a.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="nofollow noopener" className="underline break-all">{s.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <RelatedLinkList
              title={`${a.name}のエリア別ページ（拠点・対応市区町村・受付時間）`}
              links={brandAreas
                .filter((b) => b.brandSlug === a.slug)
                .map((b) => ({ href: `/agents/${b.brandSlug}/${b.areaSlug}`, label: b.areaName }))}
            />
          </section>
        </div>
      </article>
    </>
  );
}
