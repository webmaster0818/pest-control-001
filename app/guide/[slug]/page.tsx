import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { guideArticles, getGuideArticle, type GuideSource } from "@/app/data/guideArticles";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

// データ駆動テンプレート。app/data/guideArticles.ts に1件足すと /guide/{slug} が1ページ生成される。

const SITE = "https://gaichu-pro.com";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideArticles.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuideArticle(slug);
  if (!g) return {};
  const url = `${SITE}/guide/${g.slug}`;
  return {
    title: { absolute: `${g.metaTitle}｜害虫・害獣駆除プロ比較ナビ` },
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: g.metaTitle, description: g.metaDescription, url, type: "article", images: [DEFAULT_OG_IMAGE] },
  };
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}

function sourceLabel(s: GuideSource) {
  return `${s.org}「${s.title}」`;
}

export default async function GuideArticlePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuideArticle(slug);
  if (!g) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center">該当するページの情報はありません。</div>;
  }
  const confirmed = formatDate(g.confirmedDate);
  const byId = new Map(g.sources.map((s) => [s.id, s]));
  const faqSchema = g.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Breadcrumb
        items={[
          { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
          { label: g.parent.label, href: g.parent.href },
          { label: g.h1 },
        ]}
      />

      <article className="bg-white">
        <header className="ph" data-no-reveal>
          <div className="ph-inner">
            <p className="eyebrow">{g.eyebrow}</p>
            <h1 className="ph-title">{g.h1}</h1>
            <div className="ph-badges">
              <span className="ph-badge">出典 {g.sources.length}件</span>
              <span className="ph-badge">確認日 {confirmed}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <section id="answer" className="scroll-mt-20 mb-10">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
              {g.lead.map((t, i) => (
                <p key={i} className="text-slate-800 leading-loose mb-3 last:mb-0">
                  {t}
                </p>
              ))}
            </div>
          </section>

          <nav aria-label="目次" className="mb-10 rounded-2xl border border-slate-200 p-5">
            <p className="text-sm font-bold text-slate-800 mb-2">目次</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              {g.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="underline">
                    {s.heading}
                  </a>
                </li>
              ))}
              {g.faqs.length > 0 && (
                <li>
                  <a href="#faq" className="underline">
                    よくある質問
                  </a>
                </li>
              )}
              <li>
                <a href="#sources" className="underline">
                  出典と確認日
                </a>
              </li>
            </ol>
          </nav>

          {g.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-20 mb-12">
              <h2 className="h2-sec">{s.heading}</h2>
              {(s.paras ?? []).map((t, i) => (
                <p key={`a${i}`} className="text-slate-700 leading-loose mb-4">
                  {t}
                </p>
              ))}
              {s.table && (
                <div className="overflow-x-auto mb-5">
                  <table className="table w-full border border-slate-200 text-sm">
                    {s.table.caption && <caption className="text-left text-slate-600 mb-2">{s.table.caption}</caption>}
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        {s.table.head.map((h) => (
                          <th key={h} className="border border-slate-300">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r, i) => (
                        <tr key={i} className="align-top">
                          {r.map((c, j) =>
                            j === 0 ? (
                              <th key={j} className="bg-slate-50 border border-slate-200">
                                {c}
                              </th>
                            ) : (
                              <td key={j} className="border border-slate-200 leading-relaxed">
                                {c}
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {(s.after ?? []).map((t, i) => (
                  <p key={`b${i}`} className="text-slate-700 leading-loose mb-4">
                    {t}
                  </p>
                ))}
              {s.items && (
                <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
                  {s.items.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              )}
              <p className="text-xs text-slate-500 leading-relaxed">
                出典：
                {s.sourceIds
                  .map((id) => byId.get(id))
                  .filter((x): x is GuideSource => Boolean(x))
                  .map((x, i) => (
                    <span key={x.id}>
                      {i > 0 && "／"}
                      <a href={x.url} target="_blank" rel="nofollow noopener" className="underline">
                        {sourceLabel(x)}
                      </a>
                    </span>
                  ))}
                （確認日：{confirmed}）
              </p>
            </section>
          ))}

          {g.faqs.length > 0 && (
            <section id="faq" className="scroll-mt-20 mb-12">
              <h2 className="h2-sec">よくある質問</h2>
              <div className="space-y-3">
                {g.faqs.map((f, i) => {
                  const s = byId.get(f.sourceId);
                  return (
                    <div key={i} className="collapse collapse-arrow border border-slate-200 rounded-xl bg-white">
                      <input type="checkbox" defaultChecked={i === 0} aria-label={f.q} />
                      <div className="collapse-title font-bold text-slate-800">{f.q}</div>
                      <div className="collapse-content">
                        <p className="text-slate-700 text-sm leading-relaxed">{f.a}</p>
                        {s && (
                          <p className="text-slate-500 text-xs mt-2">
                            出典：
                            <a href={s.url} target="_blank" rel="nofollow noopener" className="underline">
                              {sourceLabel(s)}
                            </a>
                            （確認日：{formatDate(s.confirmedDate)}）
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          <section id="sources" className="scroll-mt-20 mb-12">
            <h2 className="h2-sec">出典と確認日</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              本ページは、次の公的機関・自治体・公益法人の公式ページを{confirmed}に開いて確認した内容をもとに、編集部が整理したものです。「」内は各ページの原文です。制度や受付状況は変わることがあるため、実際の手続きは各機関にご確認ください。
            </p>
            <ul className="space-y-2">
              {g.sources.map((s) => (
                <li key={s.id} className="text-xs text-slate-600 break-all">
                  {sourceLabel(s)}
                  {s.updated && `（ページの更新日・発行日：${s.updated}）`}：
                  <a href={s.url} target="_blank" rel="nofollow noopener" className="underline">
                    {s.url}
                  </a>
                  （確認日：{formatDate(s.confirmedDate)}）
                </li>
              ))}
            </ul>
            {g.cautions.length > 0 && (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-800 mb-2">掲載範囲について</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                  {g.cautions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section id="related" className="scroll-mt-20 mb-4">
            <h2 className="h2-sec">あわせて確認したいページ</h2>
            <ul className="space-y-2">
              {g.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="underline">
                    {r.label}
                  </Link>
                </li>
              ))}
              {guideArticles
                .filter((x) => x.slug !== g.slug && !g.related.some((r) => r.href === `/guide/${x.slug}`))
                .map((x) => (
                  <li key={x.slug}>
                    <Link href={`/guide/${x.slug}`} className="underline">
                      {x.h1}
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
