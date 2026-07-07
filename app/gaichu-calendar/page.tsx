import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

const CHECKED = "2026年7月7日";
const UPDATED = "2026年7月7日";

export const metadata: Metadata = {
  title:
    "害虫・害獣 発生・駆除ベストタイミングカレンダー【2026年7月】今月やるべき対策 - 害虫・害獣駆除プロ比較ナビ",
  description:
    "シロアリ・ハチ・ゴキブリ・ネズミ・ムカデ・トコジラミ・ダニ・シバンムシなど、害虫害獣ごとの発生が活発になる時期と駆除・依頼に適した時期を、日本しろあり対策協会や自治体・衛生研究所などの公的情報をもとにまとめました。今月（2026年7月）やるべき対策と依頼判断も毎月更新します。",
  alternates: { canonical: "/gaichu-calendar" },
};

type Pest = {
  name: string;
  peak: string;
  best: string;
  source: string;
  sourceUrl: string;
  link?: string;
};

// 発生・駆除時期は公的機関・自治体・業界団体の情報をもとに当サイトが2026年7月7日に確認。
// 月・気温の細かい閾値は公的資料で確認できない場合があり、その旨を注記。
const pests: Pest[] = [
  {
    name: "シロアリ（ヤマトシロアリ）",
    peak: "羽アリの群飛は4〜5月の昼間（沖縄は2月頃、東北・北海道は6月頃）",
    best: "羽アリを見たら4〜5月に早期防除。昼間に群飛するのがヤマトの識別点",
    source: "日本しろあり対策協会",
    sourceUrl: "https://www.hakutaikyo.or.jp/faq/2278.html",
    link: "/shiroari",
  },
  {
    name: "シロアリ（イエシロアリ）",
    peak: "羽アリの群飛は6〜7月の夜間、電灯に飛来する",
    best: "群飛期の6〜7月に確認。加害力が強く早期の専門防除が必要",
    source: "日本しろあり対策協会",
    sourceUrl: "https://www.hakutaikyo.or.jp/faq/2278.html",
    link: "/shiroari",
  },
  {
    name: "ハチ（スズメバチ）",
    peak: "女王バチの単独営巣が4月下旬〜5月に始まり、8〜9月頃が最盛期",
    best: "巣が小さく女王1匹の初期（4月中旬〜5月）なら対処しやすい。6月以降は巣が大型化し専門業者・保健所への相談が必要",
    source: "小平市・堺市",
    sourceUrl: "https://www.city.sakai.lg.jp/kenko/kenko/sodan/gaichu/mijika/suzumebachi.html",
    link: "/hachi",
  },
  {
    name: "ハチ（アシナガバチ）",
    peak: "5月頃〜10月頃に活動",
    best: "営巣初期のうちに対処。大きくなった巣は無理をせず専門業者へ",
    source: "京都市",
    sourceUrl: "https://www.city.kyoto.lg.jp/hokenfukushi/page/0000223566.html",
    link: "/hachi",
  },
  {
    name: "ゴキブリ",
    peak: "春〜秋（クロゴキブリが灯火を目当てに屋内へ侵入する時期）",
    best: "残留処理・燻煙/加熱蒸散・粘着トラップで防除（※具体的な月・気温の閾値は公的出典では確認できず）",
    source: "日本ペストコントロール協会・千葉市保健所",
    sourceUrl: "https://pestcontrol.or.jp/pages/87/",
    link: "/gokiburi",
  },
  {
    name: "ネズミ",
    peak: "冬期に家屋への侵入が増える（寒さに弱く、夜間に侵入）",
    best: "殺鼠剤（毒餌）は冬期が適期。冬期以外は死骸の腐敗・ウジのリスクがあり注意",
    source: "目黒区・横浜市",
    sourceUrl: "https://www.city.meguro.tokyo.jp/seikatsueisei/kenkoufukushi/eisei/nezumi.html",
    link: "/nezumi",
  },
  {
    name: "ムカデ",
    peak: "冬を除く全季節（春・夏・秋）",
    best: "生息環境を作らない・侵入を防ぐ防除的対策（※月単位のピークは公的出典では確認できず）",
    source: "堺市保健所",
    sourceUrl: "https://www.city.sakai.lg.jp/kenko/kenko/sodan/gaichu/mijika/mukade.html",
    link: "/mukade",
  },
  {
    name: "トコジラミ",
    peak: "通年（暖房環境では冬も活動・繁殖）",
    best: "季節を問わず発見時点で早期・積極的に防除。卵に効きにくく抵抗性個体もあるため掃除機吸引・熱処理・専門業者への委託が有効",
    source: "東京都・国立健康危機管理研究機構（IASR）",
    sourceUrl: "https://id-info.jihs.go.jp/surveillance/iasr/IASR/Vol46/550/550r05.html",
    link: "/tokojirami",
  },
  {
    name: "ダニ（ヒョウヒダニ等）",
    peak: "湿度の高い6月に特に多くなる（繁殖の適条件は温度20〜30℃・湿度60%以上）",
    best: "6月の梅雨〜夏が最重要。乾燥した晴天日に換気・湿度管理を行い、高温多湿・エサ（フケ・アカ）・産卵場所のいずれかを減らす",
    source: "愛知県衛生研究所",
    sourceUrl: "https://www.pref.aichi.jp/eiseiken/5f/dani.html",
    link: "/dani",
  },
  {
    name: "シバンムシ",
    peak: "5〜6月・10〜11月（タバコシバンムシ）",
    best: "発生源が食品なら加熱駆除、多数なら廃棄し密閉保管で侵入・産卵を防ぐ。畳は天日干しで乾燥させる",
    source: "豊田市",
    sourceUrl: "https://www.city.toyota.aichi.jp/_res/projects/default_project/_page_/001/003/703/07shiban.pdf",
    link: "/shibanmushi",
  },
];

const thisMonth = [
  "イエシロアリの羽アリ（6〜7月・夜間に灯火へ飛来）を見たら発生源が近い可能性大。早めに床下調査を依頼する判断が有効です。",
  "スズメバチの巣が大きくなる時期に入ります。6月以降の巣は無理に触らず、専門業者・保健所へ相談を。",
  "梅雨〜夏はダニの繁殖に注意（湿度60%以上）。換気・除湿と寝具の手入れを。",
  "ゴキブリの活動期。屋内侵入の前に、粘着トラップの設置と侵入経路の点検を。",
  "トコジラミは通年。旅行・帰省シーズンは持ち帰りに注意し、発見時は早期に対処を。",
];

const faqs = [
  {
    q: "害虫駆除を依頼するのに良い時期はいつですか？",
    a: "害虫・害獣によって異なります。シロアリは羽アリを見た春〜初夏（ヤマトは4〜5月昼、イエは6〜7月夜）、ハチは巣が小さい営巣初期（スズメバチは4月中旬〜5月）、ネズミは殺鼠剤が適する冬期が目安です。トコジラミのように通年で早期対処が必要なものもあります。本ページの表と各害虫のページで、公的情報にもとづく時期の目安を確認してください。",
  },
  {
    q: "シロアリの羽アリを見たらどうすればいいですか？",
    a: "羽アリはシロアリのコロニーが成熟しているサインで、建物の近くに発生源がある可能性があります。ヤマトシロアリは4〜5月の昼間、イエシロアリは6〜7月の夜間に群飛します。自分で羽アリを退治しても本体の巣は残るため、床下調査（多くの業者で無料）を依頼して被害範囲を確認するのが安全です。",
  },
  {
    q: "ハチの巣は自分で駆除できますか？",
    a: "スズメバチは女王バチが単独で営巣する4月中旬〜5月の初期であれば、巣が小さく比較的対処しやすいとされます。ただし6月以降は働きバチが増えて巣が大型化し危険が高まるため、無理をせず専門業者や自治体（保健所）に相談してください。高所・大きな巣・アレルギーが心配な場合は初期でも専門業者が安全です。",
  },
];

export default function GaichuCalendarPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "害虫・害獣 発生・駆除ベストタイミングカレンダー【2026年7月】",
    description: "害虫害獣ごとの発生が活発な時期と駆除・依頼に適した時期を公的情報をもとにまとめたカレンダー。",
    author: { "@type": "Organization", name: "害虫・害獣駆除プロ比較ナビ編集部" },
    publisher: { "@type": "Organization", name: "害虫・害獣駆除プロ比較ナビ" },
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main className="bg-base-200 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "害虫・害獣カレンダー" }]} />

        <article className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 mt-4">
          <h1 className="text-2xl sm:text-3xl font-bold leading-snug mb-3">
            害虫・害獣 発生・駆除ベストタイミングカレンダー【2026年7月】
          </h1>
          <p className="text-sm text-gray-500 mb-1">最終更新日：{UPDATED}</p>
          <p className="text-xs text-gray-400 mb-6">情報の確認日：{CHECKED}（公的情報をもとに毎月見直し・更新）</p>

          {/* 今月 */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-amber-900 mb-2">📅 今月（2026年7月）やるべき対策と依頼判断</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700 leading-relaxed">
              {thisMonth.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            害虫・害獣は種類ごとに活動が活発になる時期が違い、「いつ対策・依頼すべきか」も変わります。下の表は、<strong>日本しろあり対策協会・自治体の保健所・衛生研究所・日本ペストコントロール協会などの公的情報</strong>をもとに、当サイトが{CHECKED}に確認した発生・駆除の時期の目安です。月単位・気温の細かい閾値まで公的資料で確認できないものは、その旨を明記しています。
          </p>

          {/* カレンダー表 */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-3 py-3 text-left font-bold whitespace-nowrap">害虫・害獣</th>
                  <th className="px-3 py-3 text-left font-bold">活動・発生が活発な時期</th>
                  <th className="px-3 py-3 text-left font-bold">駆除・依頼の目安</th>
                  <th className="px-3 py-3 text-left font-bold whitespace-nowrap">出典</th>
                </tr>
              </thead>
              <tbody>
                {pests.map((p, i) => (
                  <tr key={p.name} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-3 py-3 font-bold align-top">
                      {p.link ? (
                        <Link href={p.link} className="text-primary underline">{p.name}</Link>
                      ) : (
                        p.name
                      )}
                    </td>
                    <td className="px-3 py-3 text-gray-700 align-top">{p.peak}</td>
                    <td className="px-3 py-3 text-gray-700 align-top">{p.best}</td>
                    <td className="px-3 py-3 align-top">
                      <a href={p.sourceUrl} target="_blank" rel="noopener nofollow" className="text-primary underline text-xs">{p.source}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-8">
            ※ 発生・駆除時期は上記の公的機関・自治体・業界団体の情報をもとに当サイトが{CHECKED}に確認した目安です。地域・気候・その年の状況により前後します。具体的な発生状況は各害虫のページや、現地調査（多くの業者で無料）でご確認ください。
          </p>

          {/* 内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8">
            <h2 className="text-lg font-bold mb-2">時期に合わせて費用と業者を比較する</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              駆除費用は害虫の種類・被害規模・建物構造で変わります。各社が公式に掲載する料金・保証・対応害虫は、料金インデックスで比較できます。
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/price-index" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">害虫別・業者料金インデックスを見る →</Link>
              <Link href="/price" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium">料金相場</Link>
              <Link href="/agents" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium">駆除業者を比較</Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
