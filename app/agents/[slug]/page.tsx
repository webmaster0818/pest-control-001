import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { agents, getAgent } from "../agentsData";

const SITE = "https://gaichu-pro.com";
const UPDATED = "2026年6月10日";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAgent(slug);
  if (!a) return {};
  const url = `${SITE}/agents/${slug}/`;
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
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center">業者が見つかりません。</div>;
  }

  const toc: [string, string][] = [
    ["about", `${a.name}とはどんな会社か`],
    ["taiou", "対応している害獣・害虫の種類"],
    ["price", `${a.name}の料金体系と相場`],
    ["reviews", "利用者のリアルな口コミ・評判"],
    ["merit", "メリットとデメリット"],
    ["recommend", `${a.name}がおすすめな人`],
    ["compare", "他社と比較するときのチェックポイント"],
    ["faq", "よくある質問"],
    ["summary", "まとめ"],
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${a.name}の口コミ・評判・料金を徹底調査`,
    description: a.metaDesc,
    image: `${SITE}${a.image}`,
    datePublished: "2026-06-10T00:00:00+09:00",
    dateModified: "2026-06-10T00:00:00+09:00",
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
        <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm tracking-widest text-amber-300 mb-3">害獣・害虫駆除業者レビュー</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">
              {a.name}の口コミ・評判は？
              <br className="hidden md:block" />
              料金・サービス・メリットデメリットを徹底調査
            </h1>
            <p className="text-slate-200 leading-relaxed max-w-2xl">{a.heroLead}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {a.badges.map((b) => (
                <span key={b} className="badge badge-lg bg-white/15 border-0 text-white">{b}</span>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src={a.image} alt={`${a.name}の害獣・害虫駆除サービス`} width={1200} height={800} className="w-full h-56 md:h-72 object-cover" priority />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">最終更新日：{UPDATED}　／　害虫・害獣駆除プロ比較ナビ編集部</p>

          <nav aria-label="目次" className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-800 mb-4">この記事の目次</p>
            <ol className="space-y-2 text-sm md:text-base">
              {toc.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-slate-700 hover:text-amber-700 hover:underline">
                    <span className="text-amber-600 font-bold mr-2">{String(i + 1).padStart(2, "0")}</span>{label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="about" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">{a.name}とはどんな会社か</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">対応している害獣・害虫の種類</h2>
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

          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">{a.name}の料金体系と相場</h2>
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
          </section>

          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">利用者のリアルな口コミ・評判</h2>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 mb-6 flex flex-col sm:flex-row items-center gap-4">
              {a.satisfaction && (
                <div className="text-center">
                  <p className="text-4xl font-bold text-amber-700">{a.satisfaction}<span className="text-xl text-slate-500">/5</span></p>
                  <p className="text-xs text-slate-500 mt-1">利用者満足度の目安</p>
                </div>
              )}
              <p className="text-slate-700 text-sm leading-relaxed flex-1">{a.reviewsSummary}</p>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-3">良い口コミ</h3>
            <div className="space-y-4 mb-8">
              {a.goodReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-5">
                  <p className="font-bold text-slate-800 mb-1">{r.title}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-2">{r.body}</p>
                  <p className="text-xs text-slate-400">{r.meta}</p>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-3">気になる口コミ・注意点</h3>
            <div className="space-y-4">
              {a.badReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 mb-1">{r.title}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-2">{r.body}</p>
                  <p className="text-xs text-slate-400">{r.meta}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです。感じ方には個人差があります。</p>
          </section>

          <section id="merit" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">メリットとデメリット</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-bold text-emerald-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-sm text-slate-700">{a.merits.map((m, i) => <li key={i}>{m}</li>)}</ul>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6">
                <h3 className="font-bold text-rose-800 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">{a.demerits.map((m, i) => <li key={i}>{m}</li>)}</ul>
              </div>
            </div>
          </section>

          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">{a.name}がおすすめな人</h2>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">他社と比較するときのチェックポイント</h2>
            <p className="text-slate-700 leading-loose mb-4">駆除業者を選ぶ際は、料金の安さだけでなく、保証や施工体制を含めて総合的に比較することが大切です。{a.name}を他社と比べる際は、次の点を確認すると判断しやすくなります。</p>
            <ol className="space-y-3 text-slate-700">
              {a.comparePoints.map((c, i) => (
                <li key={i} className="flex gap-3"><span className="font-bold text-amber-600">{i + 1}.</span>{c}</li>
              ))}
            </ol>
            <p className="text-slate-700 leading-loose mt-4">
              料金や対応は地域・被害状況で変わるため、{a.name}を含めて
              <Link href="/" className="text-amber-700 underline">複数の駆除業者を比較</Link>
              し、無料見積もりを取ったうえで選ぶのがおすすめです。
            </p>
          </section>

          <section id="faq" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">よくある質問</h2>
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

          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>
            {a.summary.map((p, i) => (
              <p key={i} className="text-slate-700 leading-loose mb-4">{p}</p>
            ))}
            <div className="rounded-2xl bg-slate-800 text-white p-6 text-center mt-2">
              <p className="font-bold text-lg mb-2">害獣・害虫の被害でお困りの方へ</p>
              <p className="text-slate-300 text-sm mb-4">地域・被害状況に合った駆除業者を比較して、無料見積もりを取りましょう。</p>
              <Link href="/" className="btn bg-amber-500 hover:bg-amber-600 border-0 text-white">駆除業者を比較して探す</Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
