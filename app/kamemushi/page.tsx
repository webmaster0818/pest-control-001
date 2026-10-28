import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "/kamemushi" },
  title: "カメムシ駆除業者の比較と料金の確かめ方｜侵入時期と対策",
  description: "カメムシ駆除の料金は住宅の大きさや構造、発生状況で異なります（国民生活センター）。見積もりで確認する点と、業者9社の対応範囲・受付時間、自治体が案内する侵入時期・対策をまとめています。",
  openGraph: {
    title: "カメムシ駆除業者の比較と料金の確かめ方｜侵入時期と対策",
    description: "カメムシ駆除業者9社の比較と、料金の確かめ方（国民生活センター）、自治体が案内する侵入時期・対策をまとめています。",
    url: "https://gaichu-pro.com/kamemushi",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function KamemushiPage() {
  const SRC_DATE = "2026年10月26日確認";

  const invasionFacts = [
    {
      title: "屋内に入りやすい時期",
      body: "札幌市は10月中旬頃、堺市は10〜11月ごろに、カメムシが越冬場所を探して屋内へ侵入することがあると案内しています。春先には屋外に戻ります（札幌市）。",
    },
    {
      title: "入ってくる場所",
      body: "体が平たく、窓枠や溝、換気口などのごく狭い場所からでも侵入します（札幌市）。" +
        "2〜3ミリメートル程度の隙間があれば屋内に入ってくるとされています（堺市）。",
    },
    {
      title: "人への害",
      body: "東京都の資料では、衛生上の害はないものの独特の悪臭があるため嫌われる「不快害虫」とされています。" +
        "分泌される臭気は手につくと取れにくく、屋外に干した洗濯物を汚すことがあります（札幌市）。",
    },
  ];

  const selfMeasures = [
    "侵入が始まる前に大きな穴をふさぎ、窓枠や溝、換気口の周囲に専用の殺虫剤を散布しておく（札幌市）",
    "網戸や窓の隙間を隙間テープでふさぐ（堺市）",
    "10〜11月は外干しをやめて室内干しにし、洗濯物への付着を防ぐ（堺市）",
    "見つけたら潰さずに、ガムテープや紙でそっと捕まえるか、市販のカメムシ用殺虫剤で駆除する（堺市・札幌市）",
    "多数侵入された場合は、くん煙剤ですき間に潜んだカメムシを室内に追い出して捕まえる方法もある（札幌市）",
    "夜間の照明は最低限にし、紫外線をカットした防虫ランプに替える（堺市）",
  ];

  const checklist = [
    "電話の段階で、作業内容・出張費・キャンセル料の有無を確認する",
    "作業の前に見積書を受け取り、金額の根拠を確認する",
    "複数社から見積もりを取り、比べたうえで依頼する",
    "広告の「〇〇円から」という表示の金額で作業を頼めるとは限らないことを踏まえる",
    "納得できない請求は、その場で支払わずに消費者ホットライン「188」に相談する",
  ];

  const faqs = [
    {
      q: "カメムシ駆除を業者に頼むと料金はいくらですか？",
      a: "駆除の作業内容や料金は、住宅の大きさや構造、害虫の発生状況によって異なります（国民生活センター）。" +
        "当サイトではカメムシ駆除の料金の目安を示していないため、現地調査のうえで見積書を受け取り、作業内容と金額を確認してから依頼してください。" +
        "下の比較表のとおり、掲載業者の多くは無料の調査・見積もりに対応しています。",
    },
    {
      q: "「〇〇円から」と広告している業者に頼んでも大丈夫ですか？",
      a: "国民生活センターは、広告に「〇〇円から」「基本料金□□円」と表示されていても、その料金で駆除作業を依頼できるとは限らず、" +
        "特に3ケタ台など極端な格安料金で依頼できることはまずないと注意を呼びかけています。" +
        "作業後に広告と大きく異なる高額な料金を請求された相談事例も公表されています。複数社から見積もりを取って比べること、納得できない場合はその場で支払わないことが勧められています。",
    },
    {
      q: "業者に頼む前に自分でできるカメムシ対策はありますか？",
      a: "札幌市は、侵入が始まる前に大きな穴をふさぎ、窓枠や溝、換気口の周囲に専用の殺虫剤を散布しておく方法を案内しています。" +
        "堺市は、網戸や窓の隙間を隙間テープでふさぐこと、10〜11月は室内干しにすること、見つけたカメムシは潰さずにガムテープや紙で捕まえることを勧めています。",
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const areas = [
    { name: "東京", href: "/area/tokyo" },
    { name: "大阪", href: "/area/osaka" },
    { name: "名古屋", href: "/area/nagoya" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* パンくずリスト */}
      <Breadcrumb items={[
        { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
        { label: "カメムシ" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-new.jpg"
          alt="カメムシ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              カメムシ駆除業者の比較と料金の確かめ方
            </h1>
            <p className="text-xl mb-8">
              業者9社の対応範囲・受付時間と、自治体が案内する侵入時期・対策をまとめています
            </p>
            </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            カメムシ駆除の料金は見積もりで確認を
          </h2>
          <div className="text-left bg-base-100 border border-gray-300 rounded p-5 text-gray-800 space-y-2">
            <p>
              カメムシ駆除の作業内容や料金は、住宅の大きさや構造、発生状況によって異なります。国民生活センターは、広告の「〇〇円から」の金額で依頼できるとは限らないとして、複数社から見積もりを取って比べることを勧めています。
            </p>
            <p>
              カメムシは10〜11月ごろ、越冬のために2〜3ミリメートル程度の隙間から屋内に入ることがあります（札幌市・堺市）。下の比較表では、業者9社の対応エリア・受付時間・無料調査の有無を公式サイトの記載で比べています。
            </p>
            <p className="text-xs text-gray-600">
              出典：<a href="https://www.kokusen.go.jp/news/data/n-20250304_1.html" target="_blank" rel="nofollow noopener" className="underline mr-2">国民生活センター</a>
              <a href="https://www.city.sapporo.jp/hokenjo/f3seikatu/f80mushi/2_juukyo/kamemusi.html" target="_blank" rel="nofollow noopener" className="underline mr-2">札幌市</a>
              <a href="https://www.city.sakai.lg.jp/kenko/kenko/sodan/gaichu/mijika/kamemusi.html" target="_blank" rel="nofollow noopener" className="underline">堺市</a>（2026年10月26日確認）。料金の確かめ方は<a href="#kamemushi-faq" className="underline">よくある質問</a>にまとめています。
            </p>
          </div>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">カメムシ駆除業者の比較</h2>
          
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300"></th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-1">1</span>
                      <CompanyVisual id="/images/companies/sankyo-shoudoku.png" name="株式会社三共消毒" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社三共消毒</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-2">2</span>
                      <CompanyVisual id="/images/companies/asante.png" name="株式会社アサンテ" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社アサンテ</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-3">3</span>
                      <CompanyVisual id="/images/companies/kita-nihon.png" name="有限会社北日本消毒" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">有限会社北日本消毒</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">4</span>
                      <CompanyVisual id="/images/companies/ai-eizen.png" name="株式会社あい営繕" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社あい営繕</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">5</span>
                      <CompanyVisual id="/images/companies/miyako.png" name="株式会社ミヤコ消毒" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社ミヤコ消毒</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">6</span>
                      <CompanyVisual id="/images/companies/kodama.png" name="株式会社こだま" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社こだま</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">7</span>
                      <CompanyVisual id="/images/companies/taiyo.png" name="大洋防疫研究所" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">大洋防疫研究所</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">8</span>
                      <CompanyVisual id="/images/companies/daiichi.png" name="株式会社第一環研" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社第一環研</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">9</span>
                      <CompanyVisual id="name-only" name="ハチお助け本舗" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">ハチお助け本舗</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center">○ 営業所：関東・静岡・愛知・大阪・京都</td>
                  <td className="text-center">◎ 28府県（地域により対応不可あり）</td>
                  <td className="text-center">○ 富山・石川・新潟・岐阜</td>
                  <td className="text-center">○ 北九州中心に福岡県全域・山口県西部ほか</td>
                  <td className="text-center">◎ 関東・長野・新潟</td>
                  <td className="text-center">○ 三重・愛知・静岡（岐阜は一部）</td>
                  <td className="text-center">◎ 関西・関東・中部</td>
                  <td className="text-center">○ 福井県</td>
                  <td className="text-center">◎ 全国（沖縄・離島除く）</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">8:30〜19:30</td>
                  <td className="text-center">8:30〜17:30（土日祝・時間外も対応）</td>
                  <td className="text-center">8:00〜20:00</td>
                  <td className="text-center">平日9:00〜18:00</td>
                  <td className="text-center">8:00〜17:00（日祝休み）</td>
                  <td className="text-center">平日9:00〜17:00・土曜9:00〜12:00</td>
                  <td className="text-center">9:00〜17:00（土日祝休み）</td>
                  <td className="text-center">24時間365日</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応害虫・害獣</th>
                  <td className="text-center">カメムシ：公式に記載なし</td>
                  <td className="text-center">カメムシ：公式に記載なし</td>
                  <td className="text-center">カメムシ：公式に掲載</td>
                  <td className="text-center">カメムシ：公式に記載なし</td>
                  <td className="text-center">カメムシ：公式に記載なし</td>
                  <td className="text-center">カメムシ：公式に記載なし</td>
                  <td className="text-center">カメムシ：公式に記載なし</td>
                  <td className="text-center">カメムシ：公式に記載なし</td>
                  <td className="text-center">カメムシ：公式に記載なし</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">無料診断</th>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">○ 無料相談</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">○ 無料（土日祝・夜間は有料）</td>
                  <td className="text-center">○ 無料（条件あり）</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">キャンセル</th>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">○ 調査後に断っても費用なし</td>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">公式サイト</th>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="heading-primary text-center mt-16 mb-8">カメムシ駆除業者の詳細</h2>

          {/* 株式会社三共消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-1">1</span>
                <h3 className="text-2xl font-bold text-black">株式会社三共消毒（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/sankyo-shoudoku.png" name="株式会社三共消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社三共消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業 大正14年4月の害虫・害獣駆除業者です（公式の会社概要）</li>
                <li>営業所は東京都・神奈川県・千葉県・埼玉県・栃木県・群馬県・静岡県・愛知県・大阪府・京都府にあります（公式の営業所一覧）</li>
                <li>出張調査・見積もりは無料と案内しています。駆除の種類により無料保証があり、保証期間中の再発は無料で再施工するとしています（期間の記載なし）</li>
                <li>公式サイトにカメムシの駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                出張調査・見積もり無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社三共消毒の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>営業所：東京都・神奈川県・千葉県・埼玉県・栃木県・群馬県・静岡県・愛知県・大阪府・京都府（対応エリアの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>公式に記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>個人向け：シロアリ・ねずみ・ゴキブリ・トコジラミ・ハチ（カメムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（カメムシの駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>駆除の種類により無料保証あり（期間の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>出張調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式に記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社三共消毒 公式サイト（https://sankyo-shodoku.com/company/overview/ ・ /company/area/ ・ /service/personal/ ・ /service/personal/price/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社三共消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社三共消毒+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                出張調査・見積もり無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社アサンテ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-2">2</span>
                <h3 className="text-2xl font-bold text-black">株式会社アサンテ（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/asante.png" name="株式会社アサンテ" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社アサンテの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>害虫・害獣対策は1986年から行い、累計12万件と案内しています（公式表記）</li>
                <li>受付時間は8:30〜19:30（夏期休暇・年末年始除く）で、受付時間内であれば当日対応も可能としています</li>
                <li>現地調査・見積もりは無料で、調査の結果施工を断っても費用はかからないとしています</li>
                <li>公式サイトにカメムシの駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                受付 8:30〜19:30<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社アサンテの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>山形・宮城・福島・群馬・栃木・茨城・埼玉・東京・神奈川・千葉・静岡・山梨・長野・新潟・愛知・三重・岐阜・滋賀・京都・奈良・和歌山・大阪・岡山・広島・愛媛・高知・佐賀・鹿児島（地域により対応できない場合あり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:30〜19:30（夏期休暇・年末年始除く）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ネズミ・アライグマ・ハクビシン・ハト・ハチ・トコジラミ・ダニ・ゴキブリ・食品害虫・チョウバエ／チカイエカ・毛虫（樹木害虫）（カメムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（カメムシの駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>保証制度なし（一般住宅のネズミ防除・小動物追い出しは1〜6ヶ月の契約期間制度）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>現地調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>請求書払い・クレジットカード・分割払い</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社アサンテ 公式サイト（https://www.asante.co.jp/vermin/ ・ /area/ ・ /company/c06.html） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社アサンテの口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社アサンテ+カメムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                受付 8:30〜19:30<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 有限会社北日本消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-3">3</span>
                <h3 className="text-2xl font-bold text-black">有限会社北日本消毒（カメムシ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kita-nihon.png" name="有限会社北日本消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">有限会社北日本消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>有限会社北日本消毒は富山県富山市に所在し、公式サイトでは「富山県の専門業者として40年以上の実績」と案内しています（設立 昭和51年9月）</li>
                <li>対応エリアは富山県・石川県・新潟県・岐阜県、営業時間は8:30〜17:30（土日祝・時間外も対応と公式表記）</li>
                <li>公式サイトのサービス一覧にカメムシ駆除を掲載しています</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                土日祝日・時間外も対応<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆有限会社北日本消毒の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>富山県、石川県、新潟県、岐阜県（公式の会社情報）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:30〜17:30（土日祝・時間外も対応、休業日は年末年始。公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>シロアリ・ハチ・ゴキブリ・ネズミ・クモ・ハクビシン・カメムシ・鳩などの鳥獣・コウモリ、その他としてムカデ・ハエ・ダニ・ノミ・ヤスデ・ゲジゲジ</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり（公式サイトに料金表なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>無料相談あり（公式表記）。現地調査・見積もりの費用は問い合わせ時に確認</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：有限会社北日本消毒 公式サイト（https://kitanihonshoudoku.co.jp/company/ ・ /service/ ・ /service/stink-bug-control/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆有限会社北日本消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=有限会社北日本消毒+カメムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                土日祝日・時間外も対応<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社あい営繕 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">4</span>
                <h3 className="text-2xl font-bold text-black">株式会社あい営繕（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/ai-eizen.png" name="株式会社あい営繕" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社あい営繕の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>北九州を中心に福岡県全域・山口県西部・大分県北部・佐賀県東部に対応しています（公式表記）</li>
                <li>電話受付は8:00〜20:00で、土日祝も営業しています</li>
                <li>見積もりは無料で相見積もりも可としています。ハチ駆除は12月までのシーズン保証（同じ場所・同じ種類の再営巣は無料で再施工）、ムカデ駆除は5年保証です</li>
                <li>公式サイトにカメムシの駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                受付 8:00〜20:00・土日祝も営業<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社あい営繕の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>北九州を中心に福岡県全域、山口県西部、大分県北部、佐賀県東部</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:00〜20:00（土日祝も営業）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>シロアリ・ムカデ・屋根裏動物（イタチ、アライグマ）・コウモリ・ネズミ・ハト・ハチ（カメムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（カメムシの駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>ハチ：その年の12月までのシーズン保証／ムカデ：5年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>見積もり無料（自社対応エリア内は出張費なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>クレジットカード・分割払い（最長60回・審査あり）ほか</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社あい営繕 公式サイト（https://www.shiroarikujyo.com/ ・ /bee ・ https://www.gaijyuukujyo.com/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社あい営繕の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社あい営繕+カメムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                受付 8:00〜20:00・土日祝も営業<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社ミヤコ消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">5</span>
                <h3 className="text-2xl font-bold text-black">株式会社ミヤコ消毒（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/miyako.png" name="株式会社ミヤコ消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社ミヤコ消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>1973年に創立。公式サイトで「アフターフォローが強み、リピート率80％以上」と案内しています。</li>
                <li>薬剤は「厚生労働省に認可された医薬品、医薬部外品を中心に」使用（公式のよくある質問）</li>
                <li>2022年3月に日本ペストコントロール協会の優良事業所認証を取得、東京都の建築物ねずみ昆虫等防除業に登録（公式の会社概要）</li>
                <li>公式サイトにカメムシの駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                平日9:00〜18:00受付<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社ミヤコ消毒の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>東京23区、多摩、埼玉、神奈川、千葉、茨城、栃木、群馬、長野、新潟 ほか（公式の会社概要「営業範囲」）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>平日9:00〜18:00（公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ネズミ・ゴキブリ・シロアリ・有害鳥獣・アリ・ケムシ類・ダニ・ハチ・ハエ・蚊・トコジラミ・ゲジゲジ ほか（カメムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（カメムシの駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>公式に記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>事前調査・見積もりは無料（高所など一部例外あり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式に記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：ミヤコ消毒 公式サイト（https://www.kkmiyako.com/ ・ https://www.kkmiyako.com/company/overview ・ https://www.kkmiyako.com/faq）2026年10月16日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社ミヤコ消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社ミヤコ消毒+カメムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                平日9:00〜18:00受付<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社こだま */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">6</span>
                <h3 className="text-2xl font-bold text-black">株式会社こだま（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kodama.png" name="株式会社こだま" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社こだまの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>三重県津市の会社で、創業は昭和51年2月です（公式の会社案内）</li>
                <li>施工エリアは三重県・愛知県（岐阜県の一部を含む）・静岡県を中心とし、営業時間は8:00〜17:00（日曜・祝日休み）です</li>
                <li>見積もり・相談・現地調査は無料と案内しています</li>
                <li>公式サイトにカメムシの駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                受付 8:00〜17:00<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社こだまの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>三重県・愛知県（岐阜県の一部を含む）・静岡県を中心（取り扱い商品により対応できない地域あり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:00〜17:00（定休日 日曜・祝日）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>シロアリ・ネズミ・ハチ・イタチ・ハクビシン・アライグマ・コウモリ・ハト・ムカデ・ヤスデ・黒アリ ほか（カメムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（カメムシの駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>公式に記載なし（ムカデ対策SCキーパーは機材保証5年）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>見積もり・相談・現地調査は無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式に記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社こだま 公式サイト（https://kankyo-kodama.co.jp/company/ ・ /vermin/ ・ /centipede_sc/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社こだまの口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社こだま+カメムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                受付 8:00〜17:00<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 大洋防疫研究所 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">7</span>
                <h3 className="text-2xl font-bold text-black">大洋防疫研究所（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/taiyo.png" name="大洋防疫研究所" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">大洋防疫研究所の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業は昭和50年11月です（公式の会社概要）</li>
                <li>対応エリアは関西・関東・中部（その他地域は要相談）、電話受付は平日9:00〜17:00・土曜9:00〜12:00、施工は24時間年中無休（年末年始除く）です</li>
                <li>相談・現地調査・見積もりは無料で、見積もり後に追加費用は発生しないと案内しています</li>
                <li>公式サイトにカメムシの駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                現地調査・見積もり無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆大洋防疫研究所の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>関西・関東・中部（その他地域は要相談）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>平日9:00〜17:00・土曜9:00〜12:00（4〜6月は平日・土曜とも9:00〜17:00）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ゴキブリ・ネズミ・トコジラミ・シロアリ・ハエ・イタチ・ノミ・ハチ・ハト・アリ・ムカデ・タカラダニ・シバンムシ ほか（カメムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（カメムシの駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>シロアリ駆除のみ5年保証（その他の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・現地調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式に記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：大洋防疫研究所 公式サイト（https://taiyouboueki.co.jp/ ・ /info/ ・ /charge_list/ ・ /other/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆大洋防疫研究所の口コミ</h4>
                <a href="https://www.google.com/search?q=大洋防疫研究所+カメムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                現地調査・見積もり無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社第一環研 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">8</span>
                <h3 className="text-2xl font-bold text-black">株式会社第一環研（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/daiichi.png" name="株式会社第一環研" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社第一環研の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>福井県内に対応する害虫駆除業者で、設立は昭和48年です（公式の会社概要）</li>
                <li>営業時間は9:00〜17:00（休業日 土曜・日曜・祝日）です</li>
                <li>見積もり・相談は無料（土日祝日・夜間の現場調査は有料）と案内しています</li>
                <li>公式サイトにカメムシの駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                受付 9:00〜17:00<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社第一環研の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>福井県内（福井市・坂井市・あわら市・勝山市・大野市・鯖江市・越前市・敦賀市・小浜市 ほか）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>9:00〜17:00（休業日 土曜・日曜・祝日）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>シロアリ・ゴキブリ・トコジラミ・ハチ・ムカデ・ネズミ・ダニ・ノミ・害獣・ハト（カメムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（カメムシの駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>大型害獣1年・シロアリ5年（ハチ等の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>見積もり・相談は無料（土日祝日・夜間の現場調査は有料）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社第一環研 公式サイト（https://d-kanken.com/ ・ /company ・ /pest） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社第一環研の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社第一環研+カメムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                受付 9:00〜17:00<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* ハチお助け本舗 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">9</span>
                <h3 className="text-2xl font-bold text-black">ハチお助け本舗（ハチ駆除専門）</h3>
              </div>
              <CompanyVisual id="name-only" name="ハチお助け本舗" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ハチお助け本舗の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>ハチ（スズメバチ・アシナガバチ・ミツバチ）駆除の受付サービスで、作業は提携する加盟店が行います（運営 BEST株式会社）</li>
                <li>24時間365日受付で、日本全国（沖縄・離島を除く）に対応しています</li>
                <li>作業後1週間以内に同じ場所に再発した場合は0円で対応するとしています</li>
                <li>公式サイトにカメムシの駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日受付<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆ハチお助け本舗の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>日本全国（沖縄・離島を除く）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>24時間365日受付</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ハチ（スズメバチ・アシナガバチ・ミツバチ）のみ（カメムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（カメムシの駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>作業後1週間以内に同じ場所に再発した場合は0円</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>現地調査・事前見積もり無料（地域・加盟店・現場状況により費用がかかる場合あり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・クレジットカード・後払い</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：ハチお助け本舗 公式サイト（https://hachi.otasuke-honpo.com/ ・ https://best24.co.jp/company/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆ハチお助け本舗の口コミ</h4>
                <a href="https://www.google.com/search?q=ハチお助け本舗+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日受付<br />
                無料相談はこちら
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 侵入の時期と特徴 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">カメムシが家に入る時期と特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {invasionFacts.map((f) => (
              <div key={f.title} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-black">{f.title}</h3>
                  <p className="text-gray-700">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-4">
            出典：<a href="https://www.city.sapporo.jp/hokenjo/f3seikatu/f80mushi/2_juukyo/kamemusi.html" target="_blank" rel="nofollow noopener" className="underline mr-2">札幌市「カメムシ」</a>
            <a href="https://www.city.sakai.lg.jp/kenko/kenko/sodan/gaichu/mijika/kamemusi.html" target="_blank" rel="nofollow noopener" className="underline mr-2">堺市「カメムシ」</a>
            <a href="https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/21kamemusi" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「カメムシ」（PDF）</a>（{SRC_DATE}）
          </p>
        </div>
      </section>

      {/* 自分でできる対策 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者に頼む前に自分でできる対策</h2>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <ul className="space-y-3">
                {selfMeasures.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">
                屋外の広い範囲に生息する虫のため、発生源を抑えることはできないとされています（札幌市）。網戸の取り付けなど、家屋への侵入を防ぐ対策が中心になります（東京都）。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金の確かめ方 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">カメムシ駆除の料金の確かめ方</h2>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <p className="text-gray-700">
                駆除の作業内容や料金は、住宅の大きさや構造、害虫の発生状況によって異なります。広告の「〇〇円から」といった表示の料金で依頼できるとは限らないため、見積書で作業内容と金額を確認してから依頼してください。
              </p>
              <h3 className="card-title text-xl text-black mt-4">見積もり時のチェックリスト</h3>
              <ul className="space-y-3">
                {checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-600 mt-4">
                出典：<a href="https://www.kokusen.go.jp/news/data/n-20250304_1.html" target="_blank" rel="nofollow noopener" className="underline">国民生活センター「【広告の格安料金に要注意！】作業後に高額請求する害虫駆除トラブル」（2025年3月4日公表）</a>（{SRC_DATE}）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section id="kamemushi-faq" className="py-16 px-4 bg-base-100 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">カメムシ駆除のよくある質問</h2>
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
          <p className="text-xs text-gray-600 mt-4">
            出典：<a href="https://www.kokusen.go.jp/news/data/n-20250304_1.html" target="_blank" rel="nofollow noopener" className="underline mr-2">国民生活センター</a>
            <a href="https://www.city.sapporo.jp/hokenjo/f3seikatu/f80mushi/2_juukyo/kamemusi.html" target="_blank" rel="nofollow noopener" className="underline mr-2">札幌市「カメムシ」</a>
            <a href="https://www.city.sakai.lg.jp/kenko/kenko/sodan/gaichu/mijika/kamemusi.html" target="_blank" rel="nofollow noopener" className="underline">堺市「カメムシ」</a>（{SRC_DATE}）
          </p>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のカメムシ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でカメムシ駆除</h3>
                  <p className="text-gray-700 text-sm">即日対応可能な業者情報</p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-primary btn-sm">詳しく見る →</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#66FFFF] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{backgroundColor: "#2B3A50", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "2rem"}}>
            <h2 className="heading-primary text-white">
              カメムシ駆除のご相談について
            </h2>
          </div>
          <p className="text-lg mb-8 text-gray-900">
            各社の料金をご確認のうえ、業者選びにお役立てください。
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
