import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "/shibanmushi" },
  title: "シバンムシ駆除業者比較 | 畳・木材食害の料金相場と対策",
  description: "シバンムシ駆除業者を比較しています。タバコシバンムシ・ジンサンシバンムシの特徴と食品の被害、シバンムシアリガタバチによる刺咬、発生源の特定と予防方法を、自治体の公開情報にもとづいてご説明します。",
  openGraph: {
    title: "シバンムシ駆除業者比較 | 食品害虫の特徴と対策",
    description: "シバンムシ駆除業者を比較しています。食品害虫としての特徴、シバンムシアリガタバチ、発生源の特定と予防方法をご説明します。",
    url: "https://gaichu-pro.com/shibanmushi",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ShibanmushiPage() {
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
        { label: "シバンムシ" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-new.jpg"
          alt="シバンムシ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              シバンムシ駆除の基礎知識と業者比較
            </h1>
            <p className="text-xl mb-8">
              シバンムシの駆除方法と再発防止策をご説明します
            </p>
            </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            食品害虫シバンムシの特徴と対策
          </h2>
          <p className="text-lg text-gray-700">
            タバコシバンムシ・ジンサンシバンムシの特徴、シバンムシアリガタバチ、発生源の特定と予防方法をご説明します
          </p>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">シバンムシ駆除業者の比較</h2>
          
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
                  <td className="text-center">シバンムシ：公式に記載なし</td>
                  <td className="text-center">シバンムシ：公式に掲載</td>
                  <td className="text-center">シバンムシ：公式に記載なし</td>
                  <td className="text-center">シバンムシ：公式に記載なし</td>
                  <td className="text-center">シバンムシ：公式に記載なし</td>
                  <td className="text-center">シバンムシ：公式に記載なし</td>
                  <td className="text-center">シバンムシ：公式に掲載</td>
                  <td className="text-center">シバンムシ：公式に記載なし</td>
                  <td className="text-center">シバンムシ：公式に記載なし</td>
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
          <h2 className="heading-primary text-center mt-16 mb-8">シバンムシ駆除業者の詳細</h2>

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
                <li>公式サイトにシバンムシの駆除の記載はありません（2026年10月18日確認）</li>
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
                      <td>個人向け：シロアリ・ねずみ・ゴキブリ・トコジラミ・ハチ（シバンムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（シバンムシの駆除の掲載なし）</td>
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
                <h3 className="text-2xl font-bold text-black">株式会社アサンテ（シバンムシ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/asante.png" name="株式会社アサンテ" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社アサンテの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>害虫・害獣対策は1986年から行い、累計12万件と案内しています（公式表記）</li>
                <li>受付時間は8:30〜19:30（夏期休暇・年末年始除く）で、受付時間内であれば当日対応も可能としています</li>
                <li>現地調査・見積もりは無料で、調査の結果施工を断っても費用はかからないとしています</li>
                <li>シバンムシについては、公式サイトで食品害虫のページにタバコシバンムシを掲載しています</li>
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
                      <td>公式に記載なし</td>
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
                <a href="https://www.google.com/search?q=株式会社アサンテ+シバンムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">有限会社北日本消毒（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kita-nihon.png" name="有限会社北日本消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">有限会社北日本消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>有限会社北日本消毒は富山県富山市に所在し、公式サイトでは「富山県の専門業者として40年以上の実績」と案内しています（設立 昭和51年9月）</li>
                <li>対応エリアは富山県・石川県・新潟県・岐阜県、営業時間は8:30〜17:30（土日祝・時間外も対応と公式表記）</li>
                <li>公式サイトのサービス一覧にシバンムシの駆除の記載はありません（2026年10月18日確認）</li>
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
                      <td>シロアリ・ハチ・ゴキブリ・ネズミ・クモ・ハクビシン・カメムシ・鳩などの鳥獣・コウモリ、その他としてムカデ・ハエ・ダニ・ノミ・ヤスデ・ゲジゲジ（シバンムシの記載なし）</td>
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
              <p className="text-xs text-gray-600 mt-2">出典：有限会社北日本消毒 公式サイト（https://kitanihonshoudoku.co.jp/company/ ・ /service/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆有限会社北日本消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=有限会社北日本消毒+シバンムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <li>公式サイトにシバンムシの駆除の記載はありません（2026年10月18日確認）</li>
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
                      <td>シロアリ・ムカデ・屋根裏動物（イタチ、アライグマ）・コウモリ・ネズミ・ハト・ハチ（シバンムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（シバンムシの駆除の掲載なし）</td>
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
                <a href="https://www.google.com/search?q=株式会社あい営繕+シバンムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <li>公式サイトにシバンムシの駆除の記載はありません（2026年10月18日確認）</li>
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
                      <td>ネズミ・ゴキブリ・シロアリ・有害鳥獣・アリ・ケムシ類・ダニ・ハチ・ハエ・蚊・トコジラミ・ゲジゲジ ほか（シバンムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（シバンムシの駆除の掲載なし）</td>
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
                <a href="https://www.google.com/search?q=株式会社ミヤコ消毒+シバンムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <li>公式サイトにシバンムシの駆除の記載はありません（2026年10月18日確認）</li>
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
                      <td>シロアリ・ネズミ・ハチ・イタチ・ハクビシン・アライグマ・コウモリ・ハト・ムカデ・ヤスデ・黒アリ ほか（シバンムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（シバンムシの駆除の掲載なし）</td>
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
                <a href="https://www.google.com/search?q=株式会社こだま+シバンムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">大洋防疫研究所（シバンムシ駆除）</h3>
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
                      <td>シバンムシ駆除 22,000円〜（税込）</td>
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
                <a href="https://www.google.com/search?q=大洋防疫研究所+シバンムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <li>公式サイトにシバンムシの駆除の記載はありません（2026年10月18日確認）</li>
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
                      <td>シロアリ・ゴキブリ・トコジラミ・ハチ・ムカデ・ネズミ・ダニ・ノミ・害獣・ハト（シバンムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（シバンムシの駆除の掲載なし）</td>
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
                <a href="https://www.google.com/search?q=株式会社第一環研+シバンムシ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <li>公式サイトにシバンムシの駆除の記載はありません（2026年10月18日確認）</li>
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
                      <td>ハチ（スズメバチ・アシナガバチ・ミツバチ）のみ（シバンムシの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（シバンムシの駆除の掲載なし）</td>
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

      {/* シバンムシの特徴と被害 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">シバンムシの特徴と被害</h2>
<p className="text-gray-700 mb-6">シバンムシ類は小さな甲虫の仲間で、代表的な食品害虫です。日本で60種以上が記録されており、家庭内で見かけるのはタバコシバンムシとジンサンシバンムシが代表的です。食品を加害するのは幼虫の時期だけで、幼虫は食べ物の中で生育します（横浜市衛生研究所）。</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">タバコシバンムシ</h3>
<p className="text-gray-700 mt-2">成虫の体長は1.7〜3.1mmで、赤褐色の長楕円形です。触角はのこぎり状です。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">加害する食品：穀類の加工食品、穀粉、乾燥果実、菓子類、香辛料など</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">タバコの重要害虫としても知られています</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">主として幼虫で越冬します</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">日本では本州以南に広く分布します（横浜市衛生研究所）</span></li>
</ul>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">ジンサンシバンムシ</h3>
<p className="text-gray-700 mt-2">成虫の体長は1.7〜3.5mmで、赤褐色または茶褐色です。触角の先端3節が特に太く長いのが特徴です。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">加害する食品：穀類、穀粉、乾燥果実、菓子類など</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">乾燥朝鮮人参の害虫として知られています（横浜市衛生研究所）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">かじる力が強く、食品の包装材に孔を開けて侵入できます（さいたま市）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">シバンムシ類は乾燥した植物質を好み、乾燥食品のほか畳を食害することもあります（板橋区）</span></li>
</ul>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">シバンムシアリガタバチ</h3>
<p className="text-gray-700 mt-2">アメ色でアリに似ていますが、ハチの仲間です。シバンムシの幼虫に寄生して増え、メスは人を刺すことがあります。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">体長：1.5〜3mm（板橋区）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">発生時期：4月から9月（板橋区）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">風通しの良い乾いた部屋の畳などによく発生するとされています（大阪府）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">シバンムシ自体は人を刺しません（板橋区）</span></li>
</ul>
</div></div>
</div><div className="alert alert-info mt-8"><span>発生のサインとして、食べ物の周辺に見られる細かなくず、成虫が羽化した食品に開いた無数の孔、台所の棚の上や窓際を歩く褐色の小さな虫などが挙げられています（横浜市衛生研究所）。</span></div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.city.yokohama.lg.jp/kenko-iryo-fukushi/kenko-iryo/eiken/kankyoeisei/gaichu/shibamushi.html" target="_blank" rel="nofollow noopener" className="underline">横浜市衛生研究所「食品の管理は大丈夫ですか？（その2 シバンムシ類）」</a>（2026年10月17日確認）、<a href="https://www.city.saitama.lg.jp/sciencenavi/kenkou/003/p016904.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市健康科学研究センター「食品を食べる害虫『シバンムシ類』」</a>（2026年10月17日確認）、<a href="https://www.city.itabashi.tokyo.jp/kenko/eisei/doubutsu/sumai/1004041.html" target="_blank" rel="nofollow noopener" className="underline">板橋区「すまいの虫図鑑・シバンムシ」</a>（2026年10月17日確認）、<a href="https://www.city.itabashi.tokyo.jp/kenko/eisei/doubutsu/sumai/1004042.html" target="_blank" rel="nofollow noopener" className="underline">板橋区「すまいの虫図鑑・シバンムシアリガタバチ」</a>（2026年10月17日確認）、<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/iyanamusi_syosassi.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「身のまわり ちょっと気になる いやな虫（小冊子）」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* シバンムシアリガタバチに刺された場合 */}
      <section className="py-16 px-4 bg-error/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center text-error">シバンムシアリガタバチに刺された場合</h2>
<div className="card bg-white shadow-xl"><div className="card-body"><p className="text-gray-700">シバンムシ自体は人を刺しませんが、シバンムシの幼虫に寄生するシバンムシアリガタバチのメスは人を刺すことがあります（板橋区）。当サイトでは、刺された場合の手当てについて公的機関の具体的な案内を確認できていないため、手順の掲載を控えています。かゆみや腫れが続く場合は、皮膚科等の医療機関にご相談ください。シバンムシアリガタバチを減らすには、宿主であるシバンムシ類の駆除が大切とされています（大阪府）。</p></div></div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.city.itabashi.tokyo.jp/kenko/eisei/doubutsu/sumai/1004042.html" target="_blank" rel="nofollow noopener" className="underline">板橋区「すまいの虫図鑑・シバンムシアリガタバチ」</a>（2026年10月17日確認）、<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/iyanamusi_syosassi.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「身のまわり ちょっと気になる いやな虫（小冊子）」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* シバンムシの発生を見つけたら */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">シバンムシの発生を見つけたら</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="card bg-error text-error-content shadow-xl"><div className="card-body">
<h3 className="card-title text-2xl">避けるべき行動</h3>
<ul className="space-y-3 mt-4">
<li className="flex items-start gap-2"><span className="mark mark-ng" aria-hidden="true"></span><span>虫が発生した食品をそのまま保管する（食べられた乾燥食品は処分します）</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ng" aria-hidden="true"></span><span>購入時の袋や箱のまま保管する（未開封の食品でもわずかな隙間があれば産卵され、ビニール袋や紙の包装材は容易に食い破られます）</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ng" aria-hidden="true"></span><span>成虫やシバンムシアリガタバチだけを駆除して終える（宿主であるシバンムシ類の駆除が大切です）</span></li>
</ul>
</div></div>
<div className="card bg-success text-success-content shadow-xl"><div className="card-body">
<h3 className="card-title text-2xl">すべきこと</h3>
<ul className="space-y-3 mt-4">
<li className="flex items-start gap-2"><span className="mark mark-ok" aria-hidden="true"></span><span>発生源の食品を探す（幼虫は食品の中で育ち、表面に細かなくずを出すため、それが目印になります）</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ok" aria-hidden="true"></span><span>乾燥食品は、しっかり密閉できる容器に入れて保管する</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ok" aria-hidden="true"></span><span>掃除機をかけて換気し、保管場所にたまった食品かすを定期的に清掃する</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ok" aria-hidden="true"></span><span>畳を天日干しや高温処理する</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ok" aria-hidden="true"></span><span>種類が分からない場合は、虫を持参して保健所等に相談する（横浜市は近くの福祉保健センターへの相談を案内しています）</span></li>
</ul>
</div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.city.itabashi.tokyo.jp/kenko/eisei/doubutsu/sumai/1004041.html" target="_blank" rel="nofollow noopener" className="underline">板橋区「すまいの虫図鑑・シバンムシ」</a>（2026年10月17日確認）、<a href="https://www.city.yokohama.lg.jp/kenko-iryo-fukushi/kenko-iryo/eiken/kankyoeisei/gaichu/shibamushi.html" target="_blank" rel="nofollow noopener" className="underline">横浜市衛生研究所「食品の管理は大丈夫ですか？（その2 シバンムシ類）」</a>（2026年10月17日確認）、<a href="https://www.city.saitama.lg.jp/sciencenavi/kenkou/003/p016904.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市健康科学研究センター「食品を食べる害虫『シバンムシ類』」</a>（2026年10月17日確認）、<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/iyanamusi_syosassi.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「身のまわり ちょっと気になる いやな虫（小冊子）」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">シバンムシ駆除の料金相場</h2>
<div className="overflow-x-auto">
<table className="table w-full bg-white text-black shadow-xl">
<thead><tr><th>発生状況・作業内容</th><th>料金相場</th><th>備考</th></tr></thead>
<tbody>
<tr><td className="font-bold">発生範囲が狭い場合</td><td className="text-primary font-semibold">8,000〜15,000円</td><td className="text-sm text-gray-700">施工範囲・回数により変わります</td></tr>
<tr><td className="font-bold">発生範囲が中程度の場合</td><td className="text-primary font-semibold">15,000〜30,000円</td><td className="text-sm text-gray-700">施工範囲・回数により変わります</td></tr>
<tr><td className="font-bold">発生範囲が広い場合</td><td className="text-primary font-semibold">30,000〜50,000円+</td><td className="text-sm text-gray-700">施工範囲・回数により変わります</td></tr>
<tr><td className="font-bold">追加作業がある場合</td><td className="text-primary font-semibold">+10,000〜20,000円</td><td className="text-sm text-gray-700">追加料金（内容は業者により異なります）</td></tr>
</tbody>
</table>
</div>
<div className="alert alert-info mt-8">
<span>表の金額は当サイトが掲載している目安で、公的な基準ではありません。シバンムシ駆除の費用は発生範囲・被害状況・施工回数で変わるため、複数業者の無料見積もりで比較することをおすすめします。</span>
</div>
        </div>
      </section>
      {/* 発生時期 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">シバンムシの発生時期</h2>
<p className="text-gray-700 mb-6">自治体の資料にもとづく目安です。室内の温度などの環境により異なります。</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">成虫の発生（4月〜10月頃）</h3>
<p className="text-gray-700 mt-2">ジンサンシバンムシの成虫は4月から10月頃に発生し、食品の隙間に卵を産みつけます（さいたま市）。</p>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">冬（暖房のある室内）</h3>
<p className="text-gray-700 mt-2">通常は幼虫の状態で越冬しますが、冬でも暖房のあるところでは年間を通して発育します（さいたま市）。</p>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">シバンムシアリガタバチ（4月〜9月）</h3>
<p className="text-gray-700 mt-2">板橋区は、シバンムシアリガタバチの発生時期を4月から9月としています。</p>
</div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.city.saitama.lg.jp/sciencenavi/kenkou/003/p016904.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市健康科学研究センター「食品を食べる害虫『シバンムシ類』」</a>（2026年10月17日確認）、<a href="https://www.city.itabashi.tokyo.jp/kenko/eisei/doubutsu/sumai/1004042.html" target="_blank" rel="nofollow noopener" className="underline">板橋区「すまいの虫図鑑・シバンムシアリガタバチ」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 業者に依頼する前に確認すること */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者に依頼する前に確認すること</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">発生源の特定</h3><p className="text-gray-700">発生源が食品の場合、自治体は食品の処分と密閉容器での保管を基本の対策として案内しています（板橋区・横浜市衛生研究所）。畳などにいる場合について、大阪府は殺虫剤の残留処理や高周波処理を挙げています。業者には、発生源が食品か、畳・建材かの調査を依頼してください。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">保健所の相談窓口</h3><p className="text-gray-700">さいたま市保健所は、住居内でお困りの虫を窓口に持参すれば可能な範囲で同定し、対策を助言するとしています（事前に電話で相談し、虫体を破損しないよう密閉容器や袋に入れて持参）。一方で、保健所では防除作業や駆除は行っていないと明記しています。窓口の有無や連絡先は、お住まいの自治体の公式サイトでご確認ください。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">施工方法の説明</h3><p className="text-gray-700">台所や食品の保管場所で薬剤を使う場合は、処理する範囲と食品・食器への配慮について事前に説明を受けてください。畳の高周波処理など薬剤以外の方法を含め、施工内容を確認することをおすすめします。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">見積もりの内訳</h3><p className="text-gray-700">調査費、施工費、施工回数、追加費用の条件が分けて記載されているかを確認します。シバンムシアリガタバチの発生がある場合は、宿主のシバンムシ類の対策が見積もりに含まれているかもご確認ください。</p></div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.city.itabashi.tokyo.jp/kenko/eisei/doubutsu/sumai/1004041.html" target="_blank" rel="nofollow noopener" className="underline">板橋区「すまいの虫図鑑・シバンムシ」</a>（2026年10月17日確認）、<a href="https://www.city.yokohama.lg.jp/kenko-iryo-fukushi/kenko-iryo/eiken/kankyoeisei/gaichu/shibamushi.html" target="_blank" rel="nofollow noopener" className="underline">横浜市衛生研究所「食品の管理は大丈夫ですか？（その2 シバンムシ類）」</a>（2026年10月17日確認）、<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/iyanamusi_syosassi.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「身のまわり ちょっと気になる いやな虫（小冊子）」</a>（2026年10月17日確認）、<a href="https://www.city.saitama.lg.jp/002/002/011/002/p084017.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市「住まいの衛生害虫について」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 業者選びのポイント */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者選びのポイント</h2>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl mb-4">見積もり時のチェックリスト</h3>
<div className="space-y-3">
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">発生源（食品・畳・建材）を調査したうえで見積もりを出すか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">食品や食器のある場所での施工方法と注意点の説明があるか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">畳の処理方法（高周波処理等）の内容と費用が示されるか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">見積もりの内訳（調査費・施工費・追加費用）が書面で示されるか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">再発時の保証の範囲と期間が明記されているか</span></div>
</div>
</div></div>
        </div>
      </section>
      {/* 出典 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">出典</h2>
<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
<li><a href="https://www.city.yokohama.lg.jp/kenko-iryo-fukushi/kenko-iryo/eiken/kankyoeisei/gaichu/shibamushi.html" target="_blank" rel="nofollow noopener" className="underline">横浜市衛生研究所「食品の管理は大丈夫ですか？（その2 シバンムシ類）」</a>（2026年10月17日確認）</li>
<li><a href="https://www.city.saitama.lg.jp/sciencenavi/kenkou/003/p016904.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市健康科学研究センター「食品を食べる害虫『シバンムシ類』」</a>（2026年10月17日確認）</li>
<li><a href="https://www.city.itabashi.tokyo.jp/kenko/eisei/doubutsu/sumai/1004041.html" target="_blank" rel="nofollow noopener" className="underline">板橋区「すまいの虫図鑑・シバンムシ」</a>（2026年10月17日確認）</li>
<li><a href="https://www.city.itabashi.tokyo.jp/kenko/eisei/doubutsu/sumai/1004042.html" target="_blank" rel="nofollow noopener" className="underline">板橋区「すまいの虫図鑑・シバンムシアリガタバチ」</a>（2026年10月17日確認）</li>
<li><a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/iyanamusi_syosassi.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「身のまわり ちょっと気になる いやな虫（小冊子）」</a>（2026年10月17日確認）</li>
<li><a href="https://www.city.saitama.lg.jp/002/002/011/002/p084017.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市「住まいの衛生害虫について」</a>（2026年10月17日確認）</li>
</ul>
<p className="text-sm text-gray-600 mt-4">当サイトでは、生態・被害・相談窓口について、官公庁・自治体の公開情報で確認できた内容のみを掲載しています。ご利用前に、各機関の公式サイトにて最新情報をご確認ください。</p>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のシバンムシ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でシバンムシ駆除</h3>
                  <p className="text-gray-700 text-sm">地域の害虫駆除業者の情報</p>
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
              シバンムシ駆除のご相談について
            </h2>
          </div>
          <p className="text-lg mb-8 text-gray-900">
            お住まいの地域の料金相場をご確認のうえ、業者選びにお役立てください。
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
