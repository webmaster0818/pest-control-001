import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "/tokojirami" },
  title: "トコジラミ駆除の基礎知識 | 南京虫対策",
  description: "トコジラミ（南京虫）の特徴、刺された場合の対処、血糞などの発見のサイン、薬剤抵抗性、業者に依頼する前に確認することを、東京都・大阪府・厚生労働省の公開情報にもとづいてご説明します。駆除業者の比較も掲載しています。",
  openGraph: {
    title: "トコジラミ駆除業者比較 | 料金相場・口コミ・主要業者",
    description: "トコジラミ駆除業者を、料金・サービス・口コミの観点から比較しています。",
    url: "https://gaichu-pro.com/tokojirami",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function TokojiPage() {
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
        { label: "トコジラミ" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-new.jpg"
          alt="トコジラミ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              トコジラミ駆除の基礎知識と業者比較
            </h1>
            <p className="text-xl mb-8">
              トコジラミの駆除方法と再発防止策をご説明します
            </p>
            </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            トコジラミ（南京虫）の特徴と駆除業者の選び方
          </h2>
          <p className="text-lg text-gray-700">
            トコジラミの特徴・被害・発見のサインから、業者に依頼する前に確認することまでご説明します
          </p>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">トコジラミ駆除業者の比較</h2>
          <p className="text-sm text-gray-600 text-center mb-6">各社の公式サイトでトコジラミ駆除の対応が確認できた業者だけを掲載しています（2026年10月23日確認）。</p>
          
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300"></th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-1">1</span>
                      <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-2">2</span>
                      <CompanyVisual id="/images/companies/duskin.png" name="ダスキン" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">ダスキン</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-3">3</span>
                      <CompanyVisual id="name-only" name="アサンテ" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">アサンテ</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">4</span>
                      <CompanyVisual id="name-only" name="Qujolia" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">Qujolia</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center">◎ 全国（北海道・沖縄除く）</td>
                  <td className="text-center">◎ 全国の店舗（一部地域を除く）</td>
                  <td className="text-center">◎ 東北〜九州の営業所（一部地域を除く）</td>
                  <td className="text-center">○ 千葉・茨城（守谷市・取手市）</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center">24時間365日</td>
                  <td className="text-center">記載なし</td>
                  <td className="text-center">8:30〜19:30</td>
                  <td className="text-center">9:00〜18:00</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応害虫・害獣</th>
                  <td className="text-center">害獣・害虫全般</td>
                  <td className="text-center">害虫・害獣・ハト</td>
                  <td className="text-center">害虫・害獣・鳥類</td>
                  <td className="text-center">害虫・害獣・害鳥</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">無料診断</th>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">キャンセル</th>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">○ 調査後に断っても費用なし</td>
                  <td className="text-center">△ 記載なし</td>
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
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="heading-primary text-center mt-16 mb-8">トコジラミ駆除業者の詳細</h2>

          {/* 駆除ザウルス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-1">1</span>
                <h3 className="text-2xl font-bold text-black">駆除ザウルス（トコジラミ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>公式サイトで「全国対応（北海道、沖縄県、一部地域を除く）」「完全自社施工」と案内しています</li>
                <li>「お見積り」「現地調査」無料、電話は24時間365日受付（公式表記）</li>
                <li>公式表記で「創業21年」「最長10年 安心の再発保証」</li>
                <li>公式サイトの対応害虫にトコジラミ駆除を掲載しています</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日受付<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆駆除ザウルスの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>全国（北海道・沖縄県・一部地域を除く。公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>24時間365日受付（公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>害獣・害虫全般（公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>最長10年の再発保証（公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>クレジットカード・電子マネーに対応（公式FAQ）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆駆除ザウルスの口コミ</h4>
                <a href="https://www.google.com/search?q=駆除ザウルス+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* ダスキン */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-2">2</span>
                <h3 className="text-2xl font-bold text-black">ダスキン（トコジラミ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/duskin.png" name="ダスキン" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ダスキンの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>ダスキンの害虫獣駆除サービス「ターミニックス」です。公式サイトの「ターミニックス全国店舗一覧」から依頼先の店舗を探す仕組みです</li>
                <li>トコジラミ駆除は、生息調査・バキューミング、冷却処理、薬剤処理のあと、初回点検と再点検で効果を確認します（公式表記）</li>
                <li>トコジラミ駆除は作業日から30日間が保証期間で、期間内に再発生を確認した場合は無料で再施工（公式表記）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆ダスキンの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>全国の店舗が対応（一部対応できない地域あり。公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ゴキブリ・シロアリ・ネズミ・ハト・ハチ・トコジラミ など</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>料金例：洋室20m²の場合 93,500円（税込）。内訳はトコジラミ駆除基本料金66,000円・ベッド1台22,000円・クローゼット5,500円（いずれも税込）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>作業日から30日間（期間内の再発生は無料で再施工）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆ダスキンの口コミ</h4>
                <a href="https://www.google.com/search?q=ダスキン+トコジラミ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* アサンテ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-3">3</span>
                <h3 className="text-2xl font-bold text-black">アサンテ（トコジラミ駆除）</h3>
              </div>
              <CompanyVisual id="name-only" name="アサンテ" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">アサンテの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>東証プライム上場。1986年から害虫・害獣対策を手がけ、累計12万件の施工実績があります（公式表記）</li>
                <li>対応害虫にトコジラミ・ダニ・ハチ・ゴキブリなど、対応害獣にネズミ・アライグマ・ハクビシン・ハトを掲載しています（地域により一部対応できない場合あり）</li>
                <li>現地調査・お見積りは完全無料で、調査の結果施工を断っても費用は発生しません（公式のよくある質問）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                土日祝も対応<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆アサンテの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>東北・関東・中部・近畿・中国・四国・九州の営業所から対応（公式の拠点一覧。地域により一部対応できない場合あり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:30〜19:30（夏期休暇・年末年始を除く）。受付時間内は当日対応も可能（公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>トコジラミ・ダニ・ハチ・ゴキブリ・ネズミ・アライグマ・ハクビシン・ハトなど</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>現地調査・お見積りは完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>請求書払い・クレジットカード・分割払い（公式表記）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆アサンテの口コミ</h4>
                <a href="https://www.google.com/search?q=アサンテ+トコジラミ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                土日祝も対応<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* Qujolia */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">4</span>
                <h3 className="text-2xl font-bold text-black">Qujolia（トコジラミ駆除）</h3>
              </div>
              <CompanyVisual id="name-only" name="Qujolia" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">Qujoliaの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>公式サイトで「千葉・茨城の害虫駆除・防除・対策専門」と案内しています（株式会社Qujolia・千葉県柏市・2018年8月設立）</li>
                <li>受付時間は9:00〜18:00、現地調査・見積もりは無料です（公式表記）</li>
                <li>「自社見積」「自社施工」「追加料金なし」を掲げています（公式表記）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                9:00〜18:00<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆Qujoliaの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>千葉県（一部地域を除く）、茨城県（守谷市・取手市）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>9:00〜18:00（公式表記。会社概要の定休日は土日祝日）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>害虫・害獣・害鳥（公式サイトのサービス一覧にトコジラミ、ノミ・ダニを掲載）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり（現地調査・見積もりは無料）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>現地調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆Qujoliaの口コミ</h4>
                <a href="https://www.google.com/search?q=Qujolia+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                9:00〜18:00<br />
                無料相談はこちら
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* トコジラミの特徴と被害 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">トコジラミの特徴と被害</h2>
<p className="text-gray-700 mb-6">トコジラミはナンキンムシ（南京虫）とも呼ばれるカメムシの仲間で、ダニやシラミの仲間ではありません。家庭で発生する要因は、荷物等と共に外から持ち込まれることと考えられています。</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">トコジラミの特徴</h3>
<p className="text-gray-700 mt-2">人や動物の血液だけをエサとして生活し、吸血しなくても長期間生きることができます。夜、部屋の隙間等から出てきて活動します。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">成虫の大きさ：5mm〜8mm（東京都）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">体型：丸く扁平でとても薄く、色は褐色</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">成虫は3〜4か月生存します</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">メスは1日に5〜6個（生涯では200〜500個）の卵を産み、卵は約1週間でふ化し、1〜2か月で成虫になります（東京都）</span></li>
</ul>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">刺咬による被害</h3>
<p className="text-gray-700 mt-2">夜間に、寝ている人の手や足、首など露出している部分から吸血することが多く、非常に強いかゆみが生じます。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">初めて刺された人は症状が出ないこともあります</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">かゆみや腫れが出るまでの時間には個人差があり、刺されてから数日後に症状が出ることもあります（大阪府）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">強いかゆみによる寝不足など、精神的な影響を受けることもあります</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">ダニは腹部など皮膚の柔らかい部分を、トコジラミは衣服から肌が露出している部分を刺すのが特徴とされています（大阪府）</span></li>
</ul>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">発見のサイン（血糞・卵・虫体）</h3>
<p className="text-gray-700 mt-2">生息している場所には、血糞（けっぷん）と呼ばれる黒いしみが多く見られます。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">血糞は赤から黒色の2mm程度の糞です（大阪府）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">寝室、布団、ベッドの周りに多く生息します</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">白っぽい布団やシーツの上では血糞を、畳の縁やカーテンの折り目など黒っぽいものの上では乳白色の卵を探しやすいとされています（大阪府）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">布団などに覚えのない血液が付着している場合も注意が必要です</span></li>
</ul>
</div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/tokojirami_leaf" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「トコジラミ」（リーフレット「知っていますか？トコジラミ」）</a>（2026年10月17日確認）、<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/bedbugs2.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「トコジラミについて」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 刺された場合の対処法 */}
      <section className="py-16 px-4 bg-error/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center text-error">トコジラミに刺された場合の対処法</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body"><div className="badge badge-error badge-lg mb-4">ステップ 1</div><h3 className="card-title text-xl">市販のかゆみ止めを使用する</h3><p className="text-gray-700">大阪府は、刺された時の対処法として市販のかゆみ止めの使用を挙げています。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><div className="badge badge-error badge-lg mb-4">ステップ 2</div><h3 className="card-title text-xl">症状がひどい場合は皮膚科等を受診する</h3><p className="text-gray-700">かゆみや腫れがひどい場合は、皮膚科等の医療機関を受診してください。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><div className="badge badge-error badge-lg mb-4">ステップ 3</div><h3 className="card-title text-xl">虫の写真や虫体を持参する</h3><p className="text-gray-700">診察の際に、虫の写真やティッシュなどで潰した虫を医療機関に持って行くと、適切な処置を受けやすくなるとされています。</p></div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/bedbugs2.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「トコジラミについて」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* トコジラミを見つけたら */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">トコジラミを見つけたら</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="card bg-error text-error-content shadow-xl"><div className="card-body">
<h3 className="card-title text-2xl">避けるべき行動</h3>
<ul className="space-y-3 mt-4">
<li className="flex items-start gap-2"><span className="mark mark-ng" aria-hidden="true"></span><span>ピレスロイド系の殺虫成分を用いたくん煙剤やスプレーを使う（効かないだけでなく、トコジラミが興奮してほかの部屋に移動し、被害が広がることがあります）</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ng" aria-hidden="true"></span><span>くん煙殺虫剤で済ませようとする（かえって生息範囲が広がってしまうこともあります）</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ng" aria-hidden="true"></span><span>家庭での対策だけで駆除を終えようとする（東京都は、家庭での対策だけで駆除することは困難としています）</span></li>
</ul>
</div></div>
<div className="card bg-success text-success-content shadow-xl"><div className="card-body">
<h3 className="card-title text-2xl">すべきこと</h3>
<ul className="space-y-3 mt-4">
<li className="flex items-start gap-2"><span className="mark mark-ok" aria-hidden="true"></span><span>血糞やトコジラミの特徴を持った虫が見つかった場合は、早急に専門業者に見てもらい駆除を行う</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ok" aria-hidden="true"></span><span>ベッドの隙間、マットレス、布団、畳の縁、カーテンの折り目などの潜み場所を確認する</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ok" aria-hidden="true"></span><span>お住まいの地区を管轄する保健所に相談する</span></li>
<li className="flex items-start gap-2"><span className="mark mark-ok" aria-hidden="true"></span><span>被害の拡大を防ぐため、対応を先延ばしにしない（家中に広がると駆除が困難になります）</span></li>
</ul>
</div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/tokojirami_leaf" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「トコジラミ」（リーフレット「知っていますか？トコジラミ」）</a>（2026年10月17日確認）、<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/bedbugs2.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「トコジラミについて」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">トコジラミ駆除の料金相場</h2>
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
<span>表の金額は当サイトが掲載している目安で、公的な基準ではありません。トコジラミ駆除の費用は発生範囲・被害状況・施工回数で変わるため、複数業者の無料見積もりで比較することをおすすめします。</span>
</div>
        </div>
      </section>
      {/* 予防対策 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">トコジラミの予防対策</h2>
<p className="text-gray-700 mb-6">当サイトが確認した公的機関の資料では、トコジラミの季節ごとの発生時期は示されていないため、季節別のカレンダーではなく通年の予防対策をご説明します。</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">持ち込みを防ぐ</h3>
<p className="text-gray-700 mt-2">卵や幼虫が荷物や衣服の裏、ポケットなどに付着して室内に持ち込まれることがあります。旅行先などからの帰宅時には、鞄や衣服の縫い目などを確認します。</p>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">部屋を整理整頓する</h3>
<p className="text-gray-700 mt-2">生活用品が密集して隠れる場所が多いと、トコジラミが繁殖しやすいだけでなく、発見が遅れてしまう場合があります。</p>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">潜み場所を小まめに確認する</h3>
<p className="text-gray-700 mt-2">早期発見のため、ベッド周りやソファの隙間、壁の亀裂、カーテンの折り目、電気製品・コンセントの中などに血糞や虫体がないかを確認します。</p>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">空室だった部屋にも注意する</h3>
<p className="text-gray-700 mt-2">吸血しなくても長期間生きることができるため、長く空室になった部屋でも注意が必要です。</p>
</div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/bedbugs2.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「トコジラミについて」</a>（2026年10月17日確認）、<a href="https://www.mhlw.go.jp/content/11130500/001304973.pdf" target="_blank" rel="nofollow noopener" className="underline">厚生労働省「旅行・帰省時にはトコジラミに注意！」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 業者に依頼する前に確認すること */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者に依頼する前に確認すること</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">発生源の特定</h3><p className="text-gray-700">虫刺されによるかゆみがあり、血糞やトコジラミの特徴を持った虫が見つかった場合には、トコジラミが生息している可能性があります（東京都）。ダニによる被害と勘違いされることもあるため、刺された部位や血糞の有無を確認し、業者の現地調査で生息場所を特定してもらうことが大切です。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">保健所の相談窓口</h3><p className="text-gray-700">東京都は、トコジラミについての問い合わせ先をお住まいの地区を管轄する保健所としています。厚生労働省のリーフレットでは、被害への対応に関する一般相談は保健所、調査や防除に関する相談はペストコントロール業の事業者団体が窓口として案内されています。なお、大阪府は府による駆除は行っていないと明記しています。保健所の連絡先は、お住まいの自治体の公式サイトでご確認ください。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">薬剤抵抗性の説明</h3><p className="text-gray-700">大阪府によると、現在蔓延しているトコジラミのほとんどは、ピレスロイド系や有機リン系の既存の殺虫成分が効かない薬剤抵抗性を持っています。見積もりの段階で、使用する薬剤の種類と、抵抗性を持つトコジラミへの効果について説明を受けてください。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">見積もりの内訳</h3><p className="text-gray-700">調査費、施工費、施工回数、再調査の有無、追加費用の条件が分けて記載されているかを確認します。トコジラミは家中に広がると駆除が困難になるため、1回の施工で終わらない場合の費用もあらかじめ確認しておくことをおすすめします。</p></div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/tokojirami_leaf" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「トコジラミ」（リーフレット「知っていますか？トコジラミ」）</a>（2026年10月17日確認）、<a href="https://www.mhlw.go.jp/content/11130500/001304973.pdf" target="_blank" rel="nofollow noopener" className="underline">厚生労働省「旅行・帰省時にはトコジラミに注意！」</a>（2026年10月17日確認）、<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/bedbugs2.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「トコジラミについて」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 業者選びのポイント */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者選びのポイント</h2>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl mb-4">見積もり時のチェックリスト</h3>
<div className="space-y-3">
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">現地調査で生息場所（血糞・卵・虫体）を確認したうえで見積もりを出すか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">使用する薬剤の種類と、薬剤抵抗性への対応について説明があるか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">施工回数と、再調査・再施工の条件が明記されているか</span></div>
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
<li><a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/tokojirami_leaf" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「トコジラミ」（リーフレット「知っていますか？トコジラミ」）</a>（2026年10月17日確認）</li>
<li><a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/bedbugs2.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「トコジラミについて」</a>（2026年10月17日確認）</li>
<li><a href="https://www.mhlw.go.jp/content/11130500/001304973.pdf" target="_blank" rel="nofollow noopener" className="underline">厚生労働省「旅行・帰省時にはトコジラミに注意！」</a>（2026年10月17日確認）</li>
</ul>
<p className="text-sm text-gray-600 mt-4">当サイトでは、生態・被害・相談窓口について、官公庁・自治体の公開情報で確認できた内容のみを掲載しています。ご利用前に、各機関の公式サイトにて最新情報をご確認ください。</p>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のトコジラミ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でトコジラミ駆除</h3>
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
              トコジラミ駆除のご相談について
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
