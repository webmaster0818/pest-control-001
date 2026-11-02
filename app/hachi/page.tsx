import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import RelatedLinkList from "@/app/components/RelatedLinkList";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "/hachi" },
  title: "ハチ駆除業者の比較｜9社の対応エリア・受付時間と見積もりの注意点",
  description: "ハチ駆除に対応する9社の対応エリア・電話受付時間・見積もりの扱いを各社の公式表記で比較しています。国民生活センターが呼びかける見積もりの注意点と、刺されたときの応急処置（埼玉県・札幌市の案内）もまとめています。",
  openGraph: {
    title: "ハチ駆除業者の比較｜9社の対応エリア・受付時間と見積もりの注意点",
    description: "ハチ駆除に対応する9社の対応エリア・電話受付時間・見積もりの扱いを、各社の公式表記で比較しています。",
    url: "https://gaichu-pro.com/hachi",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function HachiPage() {
  const checklist = [
    "即日対応可能か（緊急性が高いため）",
    "防護服と専用機材を完備しているか",
    "高所作業の経験が豊富か",
    "再発時の保証はあるか",
    "自治体の補助金制度について案内があるか",
  ];

  const areas = [
    { name: "東京", href: "/area/tokyo" },
    { name: "大阪", href: "/area/osaka" },
    { name: "名古屋", href: "/area/nagoya" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* パンくずリスト */}
      <Breadcrumb items={[
        { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
        { label: "ハチ" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-new.jpg"
          alt="ハチ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ハチ駆除の基礎知識と業者比較
            </h1>
            <p className="text-xl mb-8">
              対応エリア・受付時間・見積もりの扱いを各社の公式表記で比較しています
            </p>
            </div>
        </div>
      </section>

      {/* 冒頭の要約 */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            ハチ駆除業者を比べるときの要点
          </h2>
          <div className="bg-base-100 border border-gray-300 rounded p-5 text-gray-800 space-y-3">
            <p>
              このページでは、ハチ駆除に対応する9社を、対応エリア・電話受付時間・見積もりの扱いなど各社の公式サイトの表記で比較しています。日本全国（沖縄・離島を除く）で24時間365日受付としているのはハチお助け本舗で、ほかの8社は対応エリアや営業所が一部の地域に限られます。
            </p>
            <p>
              国民生活センターは、ウェブサイトの広告等で提示された料金と異なる高額な請求を受けた事例が多くみられるとして、複数社から見積もりを取って比較・検討する前提で話を聞くこと、料金や作業内容に納得できない場合はその場での支払いを避けることを呼びかけています。
            </p>
            <p className="text-xs text-gray-600">
              出典：<a href="https://www.kokusen.go.jp/news/data/n-20250304_1.html" target="_blank" rel="nofollow noopener" className="underline">国民生活センター「【広告の格安料金に要注意！】作業後に高額請求する害虫駆除トラブル」（2025年3月4日公表）</a>（2026年11月2日確認）
            </p>
            <p>
              スズメバチの巣の駆除費を補助している市町村もあります。都道府県・市ごとの自治体の対応（駆除の扱い・補助・防護服の貸出）は、<Link href="/pest#area" className="underline">エリア別のハチ駆除のページ</Link>で各自治体の公式ページをもとにまとめています。
            </p>
          </div>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">ハチ駆除業者の比較</h2>
          
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
                      <CompanyVisual id="/images/companies/hachi-otasuke.png" name="ハチお助け本舗" size="thumb" />
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
                  <td className="text-center">ハチ：公式に掲載</td>
                  <td className="text-center">ハチ：公式に掲載</td>
                  <td className="text-center">ハチ：公式に掲載</td>
                  <td className="text-center">ハチ：公式に掲載</td>
                  <td className="text-center">ハチ：公式に掲載</td>
                  <td className="text-center">ハチ：公式に掲載</td>
                  <td className="text-center">ハチ：公式に掲載</td>
                  <td className="text-center">ハチ：公式に掲載</td>
                  <td className="text-center">ハチ：公式に掲載</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">無料診断</th>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料（危険箇所を除く）</td>
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
          <h2 className="heading-primary text-center mt-16 mb-8">ハチ駆除業者の詳細</h2>

          {/* 株式会社三共消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-1">1</span>
                <h3 className="text-2xl font-bold text-black">株式会社三共消毒（ハチ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/sankyo-shoudoku.png" name="株式会社三共消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社三共消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業 大正14年4月の害虫・害獣駆除業者です（公式の会社概要）</li>
                <li>営業所は東京都・神奈川県・千葉県・埼玉県・栃木県・群馬県・静岡県・愛知県・大阪府・京都府にあります（公式の営業所一覧）</li>
                <li>出張調査・見積もりは無料と案内しています。駆除の種類により無料保証があり、保証期間中の再発は無料で再施工するとしています（期間の記載なし）</li>
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
                      <td>個人向け：シロアリ・ねずみ・ゴキブリ・トコジラミ・ハチ</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>アシナガバチ ￥15,000〜／スズメバチ ￥30,000〜（公式表記。正式な見積もりは現場調査後）</td>
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
                <h3 className="text-2xl font-bold text-black">株式会社アサンテ（ハチ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/asante.png" name="株式会社アサンテ" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社アサンテの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>害虫・害獣対策は1986年から行い、累計12万件と案内しています（公式表記）</li>
                <li>受付時間は8:30〜19:30（夏期休暇・年末年始除く）で、受付時間内であれば当日対応も可能としています</li>
                <li>現地調査・見積もりは無料で、調査の結果施工を断っても費用はかからないとしています</li>
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
                      <td>ネズミ・アライグマ・ハクビシン・ハト・ハチ・トコジラミ・ダニ・ゴキブリ・食品害虫・チョウバエ／チカイエカ・毛虫（樹木害虫）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>スズメバチ 30,000円／その他のハチ 20,000円（殺虫及び巣の撤去）</td>
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
                <a href="https://www.google.com/search?q=株式会社アサンテ+ハチ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">有限会社北日本消毒（ハチ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kita-nihon.png" name="有限会社北日本消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">有限会社北日本消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>有限会社北日本消毒は富山県富山市に所在し、公式サイトでは「富山県の専門業者として40年以上の実績」と案内しています（設立 昭和51年9月）</li>
                <li>対応エリアは富山県・石川県・新潟県・岐阜県、営業時間は8:30〜17:30（土日祝・時間外も対応と公式表記）</li>
                <li>公式サイトにハチ駆除のページがあり、現地調査と見積もりは無料（高所・閉所など危険箇所を除く）と案内しています</li>
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
                      <td>現地調査・見積もりは無料（高所・閉所など危険箇所を除く。公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：有限会社北日本消毒 公式サイト（https://kitanihonshoudoku.co.jp/company/ ・ /service/ ・ /service/extermination-of-bees/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆有限会社北日本消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=有限会社北日本消毒+ハチ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">株式会社あい営繕（ハチ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/ai-eizen.png" name="株式会社あい営繕" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社あい営繕の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>北九州を中心に福岡県全域・山口県西部・大分県北部・佐賀県東部に対応しています（公式表記）</li>
                <li>電話受付は8:00〜20:00で、土日祝も営業しています</li>
                <li>見積もりは無料で相見積もりも可としています。ハチ駆除は12月までのシーズン保証（同じ場所・同じ種類の再営巣は無料で再施工）、ムカデ駆除は5年保証です</li>
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
                      <td>シロアリ・ムカデ・屋根裏動物（イタチ、アライグマ）・コウモリ・ネズミ・ハト・ハチ</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>ハチ駆除 ￥16,500〜（税込）</td>
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
                <a href="https://www.google.com/search?q=株式会社あい営繕+ハチ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">株式会社ミヤコ消毒（ハチ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/miyako.png" name="株式会社ミヤコ消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社ミヤコ消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>1973年に創立。公式サイトで「アフターフォローが強み、リピート率80％以上」と案内しています。</li>
                <li>薬剤は「厚生労働省に認可された医薬品、医薬部外品を中心に」使用（公式のよくある質問）</li>
                <li>2022年3月に日本ペストコントロール協会の優良事業所認証を取得、東京都の建築物ねずみ昆虫等防除業に登録（公式の会社概要）</li>
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
                      <td>ネズミ・ゴキブリ・シロアリ・有害鳥獣・アリ・ケムシ類・ダニ・ハチ・ハエ・蚊・トコジラミ・ゲジゲジ ほか</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>ハチ 10,780円〜（税込・概算）</td>
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
                <a href="https://www.google.com/search?q=株式会社ミヤコ消毒+ハチ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">株式会社こだま（ハチ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kodama.png" name="株式会社こだま" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社こだまの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>三重県津市の会社で、創業は昭和51年2月です（公式の会社案内）</li>
                <li>施工エリアは三重県・愛知県（岐阜県の一部を含む）・静岡県を中心とし、営業時間は8:00〜17:00（日曜・祝日休み）です</li>
                <li>見積もり・相談・現地調査は無料と案内しています</li>
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
                      <td>シロアリ・ネズミ・ハチ・イタチ・ハクビシン・アライグマ・コウモリ・ハト・ムカデ・ヤスデ・黒アリ ほか</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>スズメバチ 44,000円〜／アシナガバチ 22,000円〜／ミツバチ 55,000円〜（税込）</td>
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
                <a href="https://www.google.com/search?q=株式会社こだま+ハチ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">大洋防疫研究所（ハチ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/taiyo.png" name="大洋防疫研究所" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">大洋防疫研究所の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業は昭和50年11月です（公式の会社概要）</li>
                <li>対応エリアは関西・関東・中部（その他地域は要相談）、電話受付は平日9:00〜17:00・土曜9:00〜12:00、施工は24時間年中無休（年末年始除く）です</li>
                <li>相談・現地調査・見積もりは無料で、見積もり後に追加費用は発生しないと案内しています</li>
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
                      <td>ゴキブリ・ネズミ・トコジラミ・シロアリ・ハエ・イタチ・ノミ・ハチ・ハト・アリ・ムカデ・タカラダニ・シバンムシ ほか</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>アシナガバチ 8,800円〜／スズメバチ 22,000円〜／ミツバチ 16,500円〜（税込）</td>
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
                <a href="https://www.google.com/search?q=大洋防疫研究所+ハチ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">株式会社第一環研（ハチ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/daiichi.png" name="株式会社第一環研" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社第一環研の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>福井県内に対応する害虫駆除業者で、設立は昭和48年です（公式の会社概要）</li>
                <li>営業時間は9:00〜17:00（休業日 土曜・日曜・祝日）です</li>
                <li>見積もり・相談は無料（土日祝日・夜間の現場調査は有料）と案内しています</li>
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
                      <td>シロアリ・ゴキブリ・トコジラミ・ハチ・ムカデ・ネズミ・ダニ・ノミ・害獣・ハト</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>8,800円〜（税込・目安）</td>
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
                <a href="https://www.google.com/search?q=株式会社第一環研+ハチ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
              <CompanyVisual id="/images/companies/hachi-otasuke.png" name="ハチお助け本舗" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ハチお助け本舗の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>ハチ（スズメバチ・アシナガバチ・ミツバチ）駆除の受付サービスで、作業は提携する加盟店が行います（運営 BEST株式会社）</li>
                <li>24時間365日受付で、日本全国（沖縄・離島を除く）に対応しています</li>
                <li>作業後1週間以内に同じ場所に再発した場合は0円で対応するとしています</li>
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
                      <td>ハチ（スズメバチ・アシナガバチ・ミツバチ）のみ</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>スズメバチ・アシナガバチ・ミツバチ 各1,980円（税込）〜</td>
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

      {/* 緊急対処法 */}
      <section className="py-16 px-4 bg-error/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center text-error">
            ハチに刺された場合の対処法
          </h2>
          <div className="card bg-white shadow-xl mb-6">
            <div className="card-body">
              <p className="text-gray-700">
                埼玉県は、ハチに刺されたときの応急処置として「① 刺された人はなるべく動かない。」「② ポイズンリムーバーで毒を吸い出す。」「③ 流水で洗い流す」「④ 冷やす」「⑤ 早めに病院へ」の順を案内しています。同資料は「一般的にスズメバチに刺される危険な時期は、７月～１０月と言われており」としています。
              </p>
              <p className="text-xs text-gray-600 mt-2">
                出典：<a href="https://www.pref.saitama.lg.jp/documents/4719/hachi_ni_sasaretara.pdf" target="_blank" rel="nofollow noopener" className="underline">埼玉県 環境部 水環境課「ハチに刺されたら」（PDF）</a>（2026年11月2日確認）
              </p>
            </div>
          </div>
          <div className="alert alert-error shadow-lg">
            <div>
              <h3 className="font-bold">すぐに病院で治療を受けるべき場合</h3>
              <p className="text-sm">札幌市保健所は、「一度に多くのハチに刺された」場合や、刺された直後に「呼吸困難、顔面蒼白、全身のじんましん、吐き気、激しい悪寒などのショック症状」があらわれた場合は、すぐに病院で治療を受けるよう案内しています。</p>
              <p className="text-xs mt-2">
                出典：<a href="https://www.city.sapporo.jp/hokenjo/f3seikatu/f80mushi/hati/hati2.html" target="_blank" rel="nofollow noopener" className="underline">札幌市「ハチに刺されたら」</a>（2026年11月2日確認）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 業者選びのポイント */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者選びのポイント</h2>
          <div className="card bg-white shadow-xl mb-6">
            <div className="card-body">
              <h3 className="card-title text-xl mb-2">ネットの「〇千円〜」だけで比べない</h3>
              <p className="text-base leading-relaxed">
                兵庫県の「東・北はりま消費者注意報 第135号（ハチの駆除で高額請求！）」は、ネット検索で「5千円から」と表示された業者に依頼したところ、作業後に10万円を請求された事例を紹介し、害虫・害獣駆除の相談の約7割がネット検索やネット広告をきっかけに高額請求のトラブルになっていると注意を呼びかけています。
                同注意報のアドバイスは、①安いネットの表示料金をうのみにしない、②作業内容と料金を確認し、表示とかけ離れた料金ならすぐに契約しない、③複数社から見積もりを取って比べる、④勧誘方法や契約内容によってはクーリング・オフができる場合があるので消費生活センター（消費者ホットライン188）に相談する、の4つです。
                自治体によってはハチの駆除方法の案内や補助制度があるため、業者に頼む前にお住まいの市区町村にも確認してください。
              </p>
              <p className="text-sm mt-2">
                出典：<a href="https://web.pref.hyogo.lg.jp/ehk11/shohi/documents/chiyuuihou135.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">兵庫県 東・北はりま消費者注意報 第135号（PDF）</a>（2026年10月22日確認）
              </p>
              <p className="text-base leading-relaxed mt-3">
                全国の提携業者から近くの業者が向かう受付窓口型のサービスは、基本料金に出張費・高所作業などの追加費用がどう加わるかが社ごとに違います。料金の表記と追加費用の条件は
                <Link href="/agents/hachi-buster" className="text-primary underline">蜂バスターの口コミ・評判（ミツバチ2,900円〜の内訳と追加費用）</Link>
                で、公式表記どおりに整理しています。
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">見積もり時のチェックリスト</h3>
              <div className="space-y-3">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <input type="checkbox" className="checkbox checkbox-primary mt-1" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のハチ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でハチ駆除</h3>
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
              ハチ駆除のご相談について
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
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <RelatedLinkList title="業者ごとの口コミ・評判（料金・保証を公式表記で確認）" links={[{ href: "/agents/hachi-buster", label: "蜂バスターの口コミ・評判" }, { href: "/agents/kujo-oh", label: "害獣害虫駆除王の口コミ・評判" }, { href: "/agents/mushi-protec", label: "ムシプロテックの口コミ・評判" }, { href: "/agents/machikado-gaiju-kujo", label: "街角害獣駆除相談所の口コミ・評判" }, { href: "/agents/e-buster", label: "イーバスターの口コミ・評判" }]} />
      </section>
    </div>
  );
}
