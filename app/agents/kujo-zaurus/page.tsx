import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

const SITE = "https://gaichu-pro.com";
const PATH = "/agents/kujo-zaurus";
const UPDATED = "2026年6月10日";

export const metadata: Metadata = {
  title: {
    absolute:
      "駆除ザウルスの口コミ・評判は？料金・対応害獣・メリットを徹底調査【2026年最新】｜害虫・害獣駆除プロ比較ナビ",
  },
  description:
    "駆除ザウルスの口コミ・評判を徹底調査。基本料金9,680円からの料金体系、対応する害獣・害虫、最長10年の再発保証、完全自社施工の強み、利用者のリアルな良い口コミ・悪い口コミまで、編集部が中立的にまとめました。",
  alternates: { canonical: `${SITE}${PATH}/` },
  openGraph: {
    title: "駆除ザウルスの口コミ・評判は？料金・対応害獣・メリットデメリットを徹底調査【2026年最新】",
    description:
      "駆除ザウルスの料金・対応害獣・再発保証・利用者の口コミを中立的に調査。利用前に知っておきたいメリットとデメリットを解説します。",
    url: `${SITE}${PATH}/`,
    type: "article",
    images: ["/images/companies/kujyo-zaurus.jpg"],
  },
};

const toc = [
  ["about", "駆除ザウルスとはどんな会社か"],
  ["taiou", "対応している害獣・害虫の種類"],
  ["price", "駆除ザウルスの料金体系と相場"],
  ["reviews", "利用者のリアルな口コミ・評判"],
  ["merit", "メリットとデメリット"],
  ["recommend", "駆除ザウルスがおすすめな人"],
  ["compare", "他社と比較するときのチェックポイント"],
  ["faq", "よくある質問"],
  ["summary", "まとめ"],
];

const goodReviews = [
  {
    title: "深夜の問い合わせにもすぐ対応してくれた",
    body: "天井裏の物音が気になって夜遅くに電話したところ、すぐにつながって翌日には現地調査に来てもらえました。24時間対応はいざというときに心強いと感じました。",
    meta: "戸建て・イタチ駆除",
  },
  {
    title: "見積もりが無料で、説明も丁寧だった",
    body: "現地調査と見積もりが無料で、侵入経路や作業内容を写真付きで説明してくれたので納得して依頼できました。仲介ではなく自社施工という点も安心材料でした。",
    meta: "アパート・ネズミ駆除",
  },
  {
    title: "再発保証があるので安心して任せられた",
    body: "施工後の保証が長く付いていて、定期点検もあると聞いて決めました。駆除後しばらく経っても再発の兆候はなく、依頼してよかったと思っています。",
    meta: "戸建て・コウモリ駆除",
  },
];

const badReviews = [
  {
    title: "見積もり金額がやや高めに感じた",
    body: "対応や保証には満足していますが、提示された金額は事前にイメージしていた相場より高めでした。複数社で相見積もりを取ってから判断するべきだったと感じました。",
    meta: "戸建て・アライグマ駆除",
  },
  {
    title: "数年後に再侵入してしまった",
    body: "施工直後は問題なかったものの、数年経って再び侵入の形跡がありました。建物の構造によっては完全な封鎖が難しい場合もあるようで、定期的な点検は欠かせないと感じています。",
    meta: "戸建て・ハクビシン駆除",
  },
];

const faqs = [
  {
    q: "駆除ザウルスの料金はいくらからですか",
    a: "基本料金は9,680円(税込)からで、害獣・害虫駆除の本格的な施工は25,000円(税込)からが目安です。利用者の相場は5万円以下が中心ですが、被害の規模や建物の構造によって変動します。正確な金額は無料の現地調査と見積もりで確認できます。",
  },
  {
    q: "見積もりや現地調査は無料ですか",
    a: "はい。駆除ザウルスは現地調査と見積もりを無料で行っています。作業内容や金額に納得したうえで契約できるため、まずは無料見積もりを依頼するのがおすすめです。",
  },
  {
    q: "施工後の保証はありますか",
    a: "最長10年の再発保証と定期点検が用意されています。保証の期間や条件は害獣の種類や施工内容によって異なるため、契約前に保証範囲を書面で確認しておくと安心です。",
  },
  {
    q: "対応していない害獣・害虫はありますか",
    a: "イタチ・アライグマ・ハクビシン・コウモリ・ネズミなどの主要な害獣に加え、シロアリやトコジラミなどの害虫にも対応しています。対応可否が不明な場合は、問い合わせ時に確認しましょう。",
  },
];

export default function KujoZaurusPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "駆除ザウルスの口コミ・評判は？料金・対応害獣・メリットデメリットを徹底調査",
    description:
      "駆除ザウルスの料金・対応害獣・再発保証・利用者の口コミを中立的に調査した記事です。",
    image: `${SITE}/images/companies/kujyo-zaurus.jpg`,
    datePublished: "2026-06-10T00:00:00+09:00",
    dateModified: "2026-06-10T00:00:00+09:00",
    author: { "@type": "Organization", name: "害虫・害獣駆除プロ比較ナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "害虫・害獣駆除プロ比較ナビ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}/` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb
        items={[
          { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
          { label: "駆除業者", href: "/agents" },
          { label: "駆除ザウルスの口コミ・評判" },
        ]}
      />

      <article className="bg-white">
        {/* Hero */}
        <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm tracking-widest text-amber-300 mb-3">害獣・害虫駆除業者レビュー</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">
              駆除ザウルスの口コミ・評判は？
              <br className="hidden md:block" />
              料金・対応害獣・メリットデメリットを徹底調査
            </h1>
            <p className="text-slate-200 leading-relaxed max-w-2xl">
              完全自社施工と最長10年の再発保証で知られる駆除ザウルス。実際の料金や対応害獣、利用者の評価を、編集部が中立的な視点で調査しました。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge badge-lg bg-white/15 border-0 text-white">基本料金 9,680円〜</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">24時間365日対応</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">最長10年保証</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">完全自社施工</span>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/companies/kujyo-zaurus.jpg"
                alt="駆除ザウルスの害獣・害虫駆除サービス"
                width={2000}
                height={1502}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">最終更新日：{UPDATED}　／　害虫・害獣駆除プロ比較ナビ編集部</p>

          {/* 目次 */}
          <nav aria-label="目次" className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-800 mb-4">この記事の目次</p>
            <ol className="space-y-2 text-sm md:text-base">
              {toc.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-slate-700 hover:text-amber-700 hover:underline">
                    <span className="text-amber-600 font-bold mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* about */}
          <section id="about" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              駆除ザウルスとはどんな会社か
            </h2>
            <p className="text-slate-700 leading-loose mb-4">
              駆除ザウルスは、イタチやアライグマ、ハクビシン、コウモリ、ネズミといった害獣から、シロアリやトコジラミなどの害虫まで幅広く対応する駆除業者です。最大の特徴は、外部業者へ委託せずに自社のスタッフが施工まで一貫して行う「完全自社施工」である点です。仲介手数料が発生しないため、同じ作業内容でも費用を抑えやすい仕組みになっています。
            </p>
            <p className="text-slate-700 leading-loose">
              また、24時間365日の受付体制を敷いており、天井裏の物音や糞尿被害など、急を要するトラブルにも対応しやすいのが強みです。現地調査と見積もりは無料で、施工後には最長10年の再発保証と定期点検が用意されています。
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <th className="bg-slate-50 text-slate-600 w-40">運営形態</th>
                    <td>完全自社施工（仲介手数料なし）</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="bg-slate-50 text-slate-600">受付時間</th>
                    <td>24時間365日</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="bg-slate-50 text-slate-600">現地調査・見積もり</th>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <th className="bg-slate-50 text-slate-600">保証</th>
                    <td>最長10年の再発保証・定期点検</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* taiou */}
          <section id="taiou" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              対応している害獣・害虫の種類
            </h2>
            <p className="text-slate-700 leading-loose mb-5">
              駆除ザウルスは主要な害獣だけでなく、害虫の駆除にも対応しています。被害が複数の生き物にまたがる場合でも、一社にまとめて相談できるのは利用者にとって負担が少ない点です。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-800 mb-2">対応する主な害獣</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  イタチ、アライグマ、ハクビシン、コウモリ、ネズミ など。天井裏や床下への侵入、糞尿被害、騒音被害に対応します。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-800 mb-2">対応する主な害虫</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  シロアリ、トコジラミ など。建物への被害や生活環境への影響が大きい害虫にも対応しています。
                </p>
              </div>
            </div>
          </section>

          {/* price */}
          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              駆除ザウルスの料金体系と相場
            </h2>
            <p className="text-slate-700 leading-loose mb-5">
              駆除ザウルスの料金は、基本料金に加えて被害の規模や害獣の種類に応じた施工費が発生する形です。利用者の相場は5万円以下が中心ですが、侵入経路の封鎖範囲や建物の構造によって変わります。
            </p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th>項目</th>
                    <th>料金の目安</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="font-medium">基本料金</td>
                    <td className="font-bold text-amber-700">9,680円〜（税込）</td>
                    <td className="text-sm text-slate-600">最小構成の目安</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="font-medium">害獣・害虫駆除（施工）</td>
                    <td className="font-bold text-amber-700">25,000円〜（税込）</td>
                    <td className="text-sm text-slate-600">被害規模・害獣の種類で変動</td>
                  </tr>
                  <tr>
                    <td className="font-medium">利用者の相場</td>
                    <td className="font-bold text-amber-700">5万円以下が中心</td>
                    <td className="text-sm text-slate-600">建物構造・封鎖範囲による</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              ※ 料金は変動する場合があります。正確な金額は無料の現地調査・見積もりでご確認ください。
            </p>
          </section>

          {/* reviews */}
          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              利用者のリアルな口コミ・評判
            </h2>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 mb-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-700">3.9<span className="text-xl text-slate-500">/5</span></p>
                <p className="text-xs text-slate-500 mt-1">利用者満足度の目安</p>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed flex-1">
                各種口コミサイトやGoogleのクチコミを編集部が調査したところ、約4分の3の利用者が「やや満足」以上と回答しています。対応の速さと保証への評価が高い一方、料金や再発については慎重な声も見られました。
              </p>
            </div>

            <h3 className="font-bold text-lg text-slate-800 mb-3">良い口コミ</h3>
            <div className="space-y-4 mb-8">
              {goodReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-5">
                  <p className="font-bold text-slate-800 mb-1">{r.title}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-2">{r.body}</p>
                  <p className="text-xs text-slate-400">{r.meta}</p>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-lg text-slate-800 mb-3">気になる口コミ・注意点</h3>
            <div className="space-y-4">
              {badReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 mb-1">{r.title}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-2">{r.body}</p>
                  <p className="text-xs text-slate-400">{r.meta}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              ※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです。感じ方には個人差があります。
            </p>
          </section>

          {/* merit */}
          <section id="merit" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              メリットとデメリット
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-bold text-emerald-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>完全自社施工で仲介手数料がかからない</li>
                  <li>24時間365日対応で緊急時も相談しやすい</li>
                  <li>現地調査・見積もりが無料</li>
                  <li>最長10年の再発保証と定期点検がある</li>
                  <li>害獣だけでなく害虫にも幅広く対応</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6">
                <h3 className="font-bold text-rose-800 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>見積もり金額が相場より高く感じる場合がある</li>
                  <li>建物の構造によっては再発の可能性が残る</li>
                  <li>料金が被害規模で変動し事前に確定しにくい</li>
                  <li>相見積もりで比較してから判断するのが望ましい</li>
                </ul>
              </div>
            </div>
          </section>

          {/* recommend */}
          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              駆除ザウルスがおすすめな人
            </h2>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <Image
                src="/images/hero-animal-new.jpg"
                alt="天井裏に侵入する害獣のイメージ"
                width={1200}
                height={480}
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="p-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>夜間や緊急で害獣被害に対応してほしい人</li>
                  <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>施工後の保証や定期点検まで重視したい人</li>
                  <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>仲介ではなく自社施工の業者に任せたい人</li>
                  <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>害獣と害虫の被害をまとめて相談したい人</li>
                </ul>
              </div>
            </div>
          </section>

          {/* compare */}
          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              他社と比較するときのチェックポイント
            </h2>
            <p className="text-slate-700 leading-loose mb-4">
              駆除業者を選ぶ際は、料金の安さだけでなく、保証や施工体制を含めて総合的に比較することが大切です。駆除ザウルスを他社と比べる際は、次の点を確認すると判断しやすくなります。
            </p>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span>見積もりに追加費用が含まれていないか（総額で比較する）</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span>再発保証の期間と適用条件</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span>自社施工か、外部委託かという施工体制</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">4.</span>対応してほしい害獣・害虫に対応しているか</li>
            </ol>
            <p className="text-slate-700 leading-loose mt-4">
              料金や対応は地域・被害状況で変わるため、駆除ザウルスを含めて
              <Link href="/" className="text-amber-700 underline">複数の駆除業者を比較</Link>
              し、無料見積もりを取ったうえで選ぶのがおすすめです。
            </p>
          </section>

          {/* faq */}
          <section id="faq" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              よくある質問
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="collapse collapse-arrow border border-slate-200 rounded-xl bg-white">
                  <input type="checkbox" defaultChecked={i === 0} />
                  <div className="collapse-title font-bold text-slate-800">{f.q}</div>
                  <div className="collapse-content">
                    <p className="text-slate-700 text-sm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* summary */}
          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              まとめ
            </h2>
            <p className="text-slate-700 leading-loose mb-4">
              駆除ザウルスは、完全自社施工による費用の抑えやすさ、24時間365日の対応、最長10年の再発保証といった点で、害獣・害虫駆除を安心して任せやすい業者です。利用者満足度の目安は3.9で、対応の速さと保証への評価が目立ちました。
            </p>
            <p className="text-slate-700 leading-loose mb-6">
              一方で、見積もり金額や再発については慎重な声もあるため、契約前には保証条件を確認し、相見積もりで総額を比較することをおすすめします。まずは無料の現地調査・見積もりから検討してみてください。
            </p>
            <div className="rounded-2xl bg-slate-800 text-white p-6 text-center">
              <p className="font-bold text-lg mb-2">害獣・害虫の被害でお困りの方へ</p>
              <p className="text-slate-300 text-sm mb-4">地域・被害状況に合った駆除業者を比較して、無料見積もりを取りましょう。</p>
              <Link href="/" className="btn bg-amber-500 hover:bg-amber-600 border-0 text-white">
                駆除業者を比較して探す
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
