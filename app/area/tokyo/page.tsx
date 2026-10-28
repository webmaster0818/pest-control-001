import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import { AffBanner, AffText } from "@/app/components/AffLink";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "https://gaichu-pro.com/area/tokyo" },
  title: "東京の害虫駆除｜保健所の相談窓口と業者10社の比較",
  description: "東京都では、ねずみ・衛生害虫の相談はお住まいの地域の保健所（23区は区の保健所、多摩・島しょは都保健所と八王子市・町田市の保健所）が受け付けています（東京都公式）。駆除を依頼できる業者10社も比較しています。",
  openGraph: {
    title: "東京の害虫駆除｜保健所の相談窓口と業者10社の比較",
    description: "東京都の害虫の相談窓口（区・都・市の保健所、東京都ペストコントロール協会）と、駆除を依頼できる業者10社を比較しています。",
    url: "https://gaichu-pro.com/area/tokyo",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function TokyoPage() {
  const topPests = [
    { rank: 1, name: "ゴキブリ", icon: "", description: "ゴキブリの特徴、駆除方法、業者の選び方は、リンク先のページでご説明しています。", link: "/pest/cockroach/tokyo" },
    { rank: 2, name: "ネズミ", icon: "", description: "ネズミの特徴、駆除方法、業者の選び方は、リンク先のページでご説明しています。", link: "/pest/nezumi/tokyo" },
    { rank: 3, name: "シロアリ", icon: "", description: "シロアリの特徴、駆除方法、業者の選び方は、リンク先のページでご説明しています。", link: "/pest/termite/tokyo" },
    { rank: 4, name: "ハチ", icon: "", description: "ハチの特徴、駆除方法、業者の選び方は、リンク先のページでご説明しています。", link: "/pest/wasp/tokyo" },
    { rank: 5, name: "コウモリ", icon: "", description: "コウモリの特徴、駆除方法、業者の選び方は、リンク先のページでご説明しています。", link: "/koumori" },
  ];


  const seasonCalendar = [
    {
      season: "春（3月〜5月）",
      pests: ["シロアリの羽アリ発生", "ゴキブリの活動開始", "ハチの巣作り開始"],
      advice: "シロアリの羽アリを見かけた場合は、早めの点検をおすすめします。ゴキブリ対策も早めに始めることが大切です。",
    },
    {
      season: "夏（6月〜8月）",
      pests: ["ゴキブリのピーク", "ハチの攻撃性増加", "湿気でカビ・ダニ発生"],
      advice: "ゴキブリ・ハチの被害が最も多い時期です。梅雨明けの点検が重要です。",
    },
    {
      season: "秋（9月〜11月）",
      pests: ["ネズミの侵入増加", "ハチの活動最盛期", "越冬準備の害虫増加"],
      advice: "ネズミが暖かい場所を求めて屋内に侵入する時期です。侵入口の封鎖が欠かせません。",
    },
    {
      season: "冬（12月〜2月）",
      pests: ["ネズミ被害継続", "ゴキブリ（暖房で活動）", "コウモリの越冬"],
      advice: "暖房のある場所ではゴキブリが活動を続けます。ネズミ駆除に適した時期です。",
    },
  ];

  const areas = [
    { name: "区部（23区）", description: "千代田区・新宿区・世田谷区・練馬区 など特別区23区", url: "https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/kushichoson" },
    { name: "多摩地域", description: "八王子市・立川市・町田市・府中市 など（26市・3町1村）", url: "https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/shikumi/shikumi09" },
    { name: "島しょ地域", description: "大島町・三宅村・八丈町・小笠原村 など伊豆諸島・小笠原諸島（大島・三宅・八丈・小笠原の4支庁）", url: "https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/shikumi/shikumi09" },
  ];

  const consultations = [
    { name: "東京都 保健医療局 健康安全部 環境保健衛生課 指導担当", description: "東京都のねずみ・衛生害虫情報（スズメバチ等）ページの問い合わせ先", contact: "03-5320-4391", hours: "", url: "https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/suzumebachi" },
    { name: "お住まいの区・市町村の保健所（特別区保健所／都保健所）", description: "23区は各区の保健所、多摩・島しょは都保健所（西多摩・南多摩・多摩立川・多摩府中・多摩小平・島しょ）および八王子市・町田市の保健所", contact: "各保健所の連絡先は公式サイトをご確認ください", hours: "", url: "https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon" },
    { name: "公益社団法人 東京都ペストコントロール協会", description: "ネズミ・害虫の相談（協会事務局）。害虫相談員の紹介も案内", contact: "03-3254-0014（代表）", hours: "業務時間 平日午前9時〜午後5時", url: "https://www.pestcontrol-tokyo.jp/overview.html" },
  ];

  const faqs = [
    {
      q: "東京都で害虫について相談できる公的な窓口はどこですか？",
      a: "東京都保健医療局は、ねずみ・衛生害虫に関する相談を、お住まいの地域を所管する保健所で受け付けると案内しています。23区にお住まいの場合は各区の保健所、八王子市・町田市にお住まいの場合は市の保健所、そのほかの多摩地域・島しょ地域にお住まいの場合は都の保健所が窓口です。",
    },
    {
      q: "多摩地域・島しょ地域の保健所の所管区域と電話番号を教えてください。",
      a: "西多摩保健所（青梅市・福生市・羽村市・あきる野市・瑞穂町・日の出町・檜原村・奥多摩町）0428-22-6141、南多摩保健所（日野市・多摩市・稲城市）042-371-7661、多摩立川保健所（立川市・昭島市・国分寺市・国立市・東大和市・武蔵村山市）042-524-5171、多摩府中保健所（武蔵野市・三鷹市・府中市・調布市・小金井市・狛江市）042-362-2334、多摩小平保健所（小平市・東村山市・清瀬市・東久留米市・西東京市）042-450-3111、島しょ保健所（都庁第一本庁舎30階）03-5320-4342、八王子市保健所 042-645-5111、町田市保健所 042-724-4241です。23区の保健所の連絡先は、東京都の「特別区保健所・保健センター一覧」に掲載されています。",
    },
    {
      q: "ネズミ・害虫について、より専門的な相談はどこにできますか？",
      a: "公益社団法人 東京都ペストコントロール協会（千代田区鍛冶町2-9-5 東園ビル4階）が、ネズミ・害虫の防除に関する害虫相談を行い、お近くの害虫相談員の紹介も案内しています。電話は03-3254-0014（代表）、業務時間は平日午前9時〜午後5時です。",
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div className="min-h-screen bg-base-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
{/* パンくずリスト */}
      <Breadcrumb items={[
        { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
        { label: "東京" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-control.jpg"
          alt="東京の害虫駆除サービス"
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            東京の害虫駆除の相談窓口と業者比較
          </h1>
          <div className="text-left bg-base-100 border border-gray-300 rounded p-5 text-gray-800 space-y-2">
            <p>
              東京都では、ねずみ・衛生害虫に関する相談を、お住まいの地域を所管する保健所で受け付けています。23区は各区の保健所、八王子市と町田市は市の保健所、そのほかの多摩地域と島しょ地域は都の保健所が窓口です。
            </p>
            <p>
              ネズミ・害虫の相談や害虫相談員の紹介は、公益社団法人 東京都ペストコントロール協会（03-3254-0014・平日9時〜17時）も受け付けています。駆除作業を依頼する場合は、下の業者10社の比較をご覧ください。
            </p>
            <p className="text-xs text-gray-600">
              出典：<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「ねずみ・衛生害虫」</a>（2026年10月25日確認）。多摩・島しょの保健所の所管区域と電話番号は<a href="#tokyo-faq" className="underline">よくある質問</a>にまとめています。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">東京の害虫駆除業者の比較</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">項目</th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-1">1</span>
                      <CompanyVisual id="/images/companies/roy.png" name="害獣駆除のROY" size="thumb" />
                      <strong className="text-black">害獣駆除のROY</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-2">2</span>
                      <CompanyVisual id="/images/companies/buzz.png" name="害獣BUZZ" size="thumb" />
                      <strong className="text-black">害獣BUZZ</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-3">3</span>
                      <CompanyVisual id="/images/companies/sankyo.png" name="サンキョークリーンサービス" size="thumb" />
                      <strong className="text-black">サンキョークリーンサービス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">4</span>
                      <CompanyVisual id="/images/companies/house-protect.png" name="ハウスプロテクト" size="thumb" />
                      <strong className="text-black">ハウスプロテクト</strong>
                      <AffText slug="house-protect" variant="small" label="公式サイト" />
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">5</span>
                      <CompanyVisual id="/images/companies/protec.png" name="害獣プロテック" size="thumb" />
                      <strong className="text-black">害獣プロテック</strong>
                      <AffText slug="protec" variant="small" label="公式サイト" />
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">6</span>
                      <CompanyVisual id="/images/companies/duskin.png" name="ダスキン" size="thumb" />
                      <strong className="text-black">ダスキン</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">7</span>
                      <CompanyVisual id="/images/companies/gaichu110.png" name="害虫駆除110番" size="thumb" />
                      <strong className="text-black">害虫駆除110番</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">8</span>
                      <CompanyVisual id="/images/companies/emeao.png" name="EMEAO!" size="thumb" />
                      <strong className="text-black">EMEAO!</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">9</span>
                      <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="thumb" />
                      <strong className="text-black">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">10</span>
                      <CompanyVisual id="/images/companies/ratter.png" name="ラッター" size="thumb" />
                      <strong className="text-black">ラッター</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center border border-gray-300">全国（一部不可）</td>
                  <td className="text-center border border-gray-300">関東・関西・東海・中国・九州</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">関東・関西・東海・中国・四国</td>
                  <td className="text-center border border-gray-300">関東・東北・関西・東海・北陸・中国・九州</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">全国（北海道・沖縄除く）</td>
                  <td className="text-center border border-gray-300">関東・東海・関西・中国・九州</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">記載なし</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">記載なし</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">記載なし</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">料金目安</th>
                  <td className="text-center text-primary font-bold border border-gray-300">4,730円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">要見積もり</td>
                  <td className="text-center text-primary font-bold border border-gray-300">22,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">要見積もり</td>
                  <td className="text-center text-primary font-bold border border-gray-300">状況により変動</td>
                  <td className="text-center text-primary font-bold border border-gray-300">16,500円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">22,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">施工業者による</td>
                  <td className="text-center text-primary font-bold border border-gray-300">25,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">10,000円〜</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                  <td className="text-sm border border-gray-300">最長5年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長2年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長5年保証</td>
                  <td className="text-sm border border-gray-300">施工業者による</td>
                  <td className="text-sm border border-gray-300">施工業者による</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長5年保証</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="heading-primary text-center mt-16 mb-8">東京の害虫駆除業者の詳細</h2>

          {/* 1. 害獣駆除のROY */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-1">1</span>
                <h3 className="text-2xl font-bold text-black">害獣駆除のROY（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/roy.png" name="害獣駆除のROY" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣駆除のROYの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>一級建築士事務所として建物構造を踏まえた施工</li>
                <li>4,730円からの料金設定</li>
                <li>最短即日対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害獣駆除のROYの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国（一部対応不可エリアあり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">4,730円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長5年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害獣駆除のROYの口コミ</h4>
                <a href="https://www.google.com/search?q=害獣駆除のROY+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 2. 害獣BUZZ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-2">2</span>
                <h3 className="text-2xl font-bold text-black">害獣BUZZ（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/buzz.png" name="害獣BUZZ" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣BUZZの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>口コミを多数公開</li>
                <li>日本有害鳥獣駆除防除管理協会加盟</li>
                <li>最短30分で対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害獣BUZZの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東・関西・東海・中国・九州</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長10年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害獣BUZZの口コミ</h4>
                <a href="https://www.google.com/search?q=害獣BUZZ+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 3. サンキョークリーンサービス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-3">3</span>
                <h3 className="text-2xl font-bold text-black">サンキョークリーンサービス（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/sankyo.png" name="サンキョークリーンサービス" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">サンキョークリーンサービスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業28年の業者</li>
                <li>日本ペストコントロール協会加盟</li>
                <li>東京都内の害虫駆除に対応する専門業者</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆サンキョークリーンサービスの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">要確認</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">22,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長2年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆サンキョークリーンサービスの口コミ</h4>
                <a href="https://www.google.com/search?q=サンキョークリーンサービス+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 4. ハウスプロテクト */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">4</span>
                <h3 className="text-2xl font-bold text-black">ハウスプロテクト（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/house-protect.png" name="ハウスプロテクト" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ハウスプロテクトの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Google口コミの評価が高い</li>
                <li>2300件以上の実績を掲載</li>
                <li>最短即日対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <AffBanner slug="house-protect" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆ハウスプロテクトの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東・関西・東海・中国・四国</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長10年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆ハウスプロテクトの口コミ</h4>
                <a href="https://www.google.com/search?q=ハウスプロテクト+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <AffText slug="house-protect" variant="button" label="ハウスプロテクトの公式サイトで無料相談" />
            </div>
          </div>

          {/* 5. 害獣プロテック */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">5</span>
                <h3 className="text-2xl font-bold text-black">害獣プロテック（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/protec.png" name="害獣プロテック" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣プロテックの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>50年以上の経験を持つ業者</li>
                <li>工務店歴50年、建物の構造を踏まえた施工</li>
                <li>最短30分で対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <AffBanner slug="protec" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害獣プロテックの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東・東北・関西・東海・北陸・中国・九州</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">状況に応じて変動</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長10年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害獣プロテックの口コミ</h4>
                <a href="https://www.google.com/search?q=害獣プロテック+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <AffText slug="protec" variant="button" label="害獣プロテックの公式サイトで無料相談" />
            </div>
          </div>

          {/* 6. ダスキン */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">6</span>
                <h3 className="text-2xl font-bold text-black">ダスキン（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/duskin.png" name="ダスキン" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ダスキンの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>東証上場企業のFC加盟店</li>
                <li>社内ライセンスを取得したスタッフが施工</li>
                <li>大手ブランドによるサービス</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆ダスキンの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">要確認</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">16,500円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長5年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆ダスキンの口コミ</h4>
                <a href="https://www.google.com/search?q=ダスキン+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>
        </div>
      {/* 7. 害虫駆除110番 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">7</span>
                <h3 className="text-2xl font-bold text-black">害虫駆除110番（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/gaichu110.png" name="害虫駆除110番" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害虫駆除110番の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>東証上場企業運営</li>
                <li>累計相談500万件以上の実績</li>
                <li>全国対応（東京都内を含む）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害虫駆除110番の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">22,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">施工業者による</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害虫駆除110番の口コミ</h4>
                <a href="https://www.google.com/search?q=害虫駆除110番+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 8. EMEAO! */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">8</span>
                <h3 className="text-2xl font-bold text-black">EMEAO!（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/emeao.png" name="EMEAO!" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">EMEAO!の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>累計相談10万件以上の業者紹介サービス</li>
                <li>厳選した業者を紹介するサービス</li>
                <li>最短即日対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆EMEAO!の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">施工業者による</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">施工業者による</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">施工業者による</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆EMEAO!の口コミ</h4>
                <a href="https://www.google.com/search?q=EMEAO!+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 9. 駆除ザウルス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">9</span>
                <h3 className="text-2xl font-bold text-black">駆除ザウルス（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業20年、累計相談3万件以上の実績</li>
                <li>日本ペストコントロール協会加盟</li>
                <li>東京都内の害虫駆除に対応する専門業者</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆駆除ザウルスの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国（北海道・沖縄県・一部地域を除く）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">25,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長10年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆駆除ザウルスの口コミ</h4>
                <a href="https://www.google.com/search?q=駆除ザウルス+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 10. ラッター */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">10</span>
                <h3 className="text-2xl font-bold text-black">ラッター（東京）</h3>
              </div>
              <CompanyVisual id="/images/companies/ratter.png" name="ラッター" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ラッターの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>累計3万件以上の実績</li>
                <li>最短10分で対応</li>
                <li>経験のある専門スタッフが対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆ラッターの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東・東海・関西・中国・九州</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">要確認</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害虫・害獣</th>
                      <td className="bg-white text-black border border-gray-300">シロアリ・ハチ・ゴキブリ・ネズミ・コウモリなど全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">10,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長5年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆ラッターの口コミ</h4>
                <a href="https://www.google.com/search?q=ラッター+東京+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          </section>

      {/* 東京の害虫駆除の料金の確かめ方 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">東京の害虫駆除の料金の確かめ方</h2>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <p className="text-gray-700">
                駆除の作業内容や料金は、住宅の大きさや構造、害虫の発生状況によって異なります。広告の「〇〇円から」「基本料金□□円」といった表示の料金で依頼できるとは限りません。
                複数の業者から見積もりを取って比べること、料金や作業内容に納得できない場合はその場での支払いを避け、消費者ホットライン「188」に相談することが勧められています。
              </p>
              <p className="text-xs text-gray-600 mt-2">
                出典：<a href="https://www.kokusen.go.jp/news/data/n-20250304_1.html" target="_blank" rel="nofollow noopener" className="underline">国民生活センター「【広告の格安料金に要注意！】作業後に高額請求する害虫駆除トラブル」（2025年3月4日公表）</a>（2026年10月28日確認）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 東京の害虫カレンダー */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">東京の害虫カレンダー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonCalendar.map((season, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-black">{season.season}</h3>
                  <ul className="space-y-2 mt-4">
                    {season.pests.map((pest, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-error text-xl">•</span>
                        <span className="text-sm text-gray-900">{pest}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="divider"></div>
                  <div className="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-xs">{season.advice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 東京の地域区分 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">東京の地域区分</h2>
          <p className="text-gray-700 mb-6">東京都の地域区分は次のとおりです。業者の対応エリアは業者ごとに異なるため、依頼前に住所が対応範囲に含まれるか各社にご確認ください。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-black">{area.name}</h3>
                  <p className="text-gray-700 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-4">出典：{Array.from(new Set(areas.map((a) => a.url).filter(Boolean))).map((u, i) => (<a key={i} href={u} target="_blank" rel="nofollow noopener" className="underline mr-2">東京都公式サイト</a>))}（2026年10月17日確認）</p>
        </div>
      </section>

      {/* 東京の相談窓口 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">東京の害虫相談窓口</h2>
          <p className="text-gray-700 mb-6">ネズミ・衛生害虫などの相談は、次の公的な窓口でも受け付けています。連絡先・受付時間は変更されることがあるため、ご利用前に公式サイトにて最新情報をご確認ください。</p>
          <div className="space-y-4">
            {consultations.map((org, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="card-title text-lg text-black">{org.name}</h3>
                      <p className="text-gray-700 text-sm mb-2">{org.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {org.contact && (
                          <div>
                            <span className="text-xs text-gray-700">連絡先:</span>
                            <p className="font-semibold text-black">{org.contact}</p>
                          </div>
                        )}
                        {org.hours && (
                          <div>
                            <span className="text-xs text-gray-700">受付時間:</span>
                            <p className="font-semibold text-sm text-black">{org.hours}</p>
                          </div>
                        )}
                      </div>
                      {org.url && (
                        <p className="text-xs text-gray-600 mt-2">出典：<a href={org.url} target="_blank" rel="nofollow noopener" className="underline">公式ページ</a>（2026年10月25日確認）</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section id="tokyo-faq" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">東京の害虫相談のよくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-lg text-black">{f.q}</h3>
                  <p className="text-gray-700">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-4">出典：<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon" target="_blank" rel="nofollow noopener" className="underline mr-2">東京都保健医療局「ねずみ・衛生害虫」</a><a href="https://www.hokeniryo.metro.tokyo.lg.jp/shisetsu/jigyosyo/hokenjyo/" target="_blank" rel="nofollow noopener" className="underline mr-2">都保健所一覧</a><a href="https://www.hokeniryo.metro.tokyo.lg.jp/kenkou/shisetsu/seire_list" target="_blank" rel="nofollow noopener" className="underline mr-2">中核市・政令市保健所・保健センター一覧</a><a href="https://www.hokeniryo.metro.tokyo.lg.jp/kenkou/shisetsu/kuho_list" target="_blank" rel="nofollow noopener" className="underline mr-2">特別区保健所・保健センター一覧</a><a href="https://www.pestcontrol-tokyo.jp/overview.html" target="_blank" rel="nofollow noopener" className="underline">東京都ペストコントロール協会「協会の概要」</a>（2026年10月25日確認）</p>
        </div>
      </section>

      {/* 主な害虫別の駆除情報 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">主な害虫別の駆除情報</h2>
          <div className="space-y-6">
            {topPests.map((pest) => (
              <div key={pest.rank} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="card-title text-2xl mb-2 text-black">{pest.name}</h3>
                      <p className="text-gray-700 mb-2">{pest.description}</p>
                      <Link href={pest.link} className="btn btn-primary btn-sm mt-4">
                        {pest.name}駆除について詳しく →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#66FFFF] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{backgroundColor: "#2B3A50", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "2rem"}}>
            <h2 className="heading-primary text-white">
              東京の害虫駆除のご相談について
            </h2>
          </div>
          <p className="text-lg mb-8 text-gray-900">
            各社の料金と見積もりの確かめ方をご確認のうえ、業者選びにお役立てください。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を見る
            </Link>
            <Link href="/guide" className="btn btn-lg btn-outline" style={{backgroundColor: "#2F4F4F", borderColor: "orange", color: "white"}}>
              業者選びガイド
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
