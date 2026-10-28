import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import { AffBanner, AffText } from "@/app/components/AffLink";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "https://gaichu-pro.com/area/kitakyushu" },
  title: "北九州の害虫駆除業者比較 | 料金相場・口コミ・おすすめ8社",
  description: "北九州の害虫駆除業者8社を、料金・サービス・口コミの観点から比較しています。見積もりは無料です。",
  openGraph: {
    title: "北九州の害虫駆除業者比較 | 料金相場・口コミ・主要10社",
    description: "北九州の害虫駆除業者10社を、料金・サービス・口コミの観点から比較しています。",
    url: "https://gaichu-pro.com/area/kitakyushu",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function KitakyushuPage() {
  const topPests = [
    { rank: 1, name: "ゴキブリ", icon: "", description: "ゴキブリの特徴、駆除方法、業者の選び方は、リンク先のページでご説明しています。", link: "/pest/cockroach/kitakyushu" },
    { rank: 2, name: "ネズミ", icon: "", description: "ネズミの特徴、駆除方法、業者の選び方は、リンク先のページでご説明しています。", link: "/nezumi" },
    { rank: 3, name: "シロアリ", icon: "", description: "シロアリの特徴、駆除方法、業者の選び方は、リンク先のページでご説明しています。", link: "/pest/termite/kitakyushu" },
    { rank: 4, name: "ハチ", icon: "", description: "ハチの特徴、駆除方法、業者の選び方は、リンク先のページでご説明しています。", link: "/hachi" },
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
    { name: "東部生活衛生課の担当地区", description: "門司区・小倉北区・小倉南区", url: "https://www.city.kitakyushu.lg.jp/contents/division184.html" },
    { name: "西部生活衛生課の担当地区", description: "若松区・八幡東区・八幡西区・戸畑区", url: "https://www.city.kitakyushu.lg.jp/contents/division184.html" },
    { name: "市内の行政区（全7区）", description: "門司区・小倉北区・小倉南区・若松区・八幡東区・八幡西区・戸畑区", url: "https://www.city.kitakyushu.lg.jp/category/90000752.html" },
  ];

  const consultations = [
    { name: "北九州市 衛生害虫相談センター（委託先：公益財団法人 北九州生活科学センター）", description: "衛生害虫・ハチに関する相談窓口（北九州市戸畑区中原新町1番4号）", contact: "093-522-5321", hours: "月曜日から金曜日の8時30分から17時15分まで（土曜日、日曜日、祝日及び年末年始を除く）", url: "https://www.city.kitakyushu.lg.jp/contents/18400051.html" },
    { name: "北九州市 保健福祉局保健所 東部生活衛生課／西部生活衛生課", description: "衛生害虫相談ページの作成担当課（東部＝門司・小倉北・小倉南、西部＝若松・八幡東・八幡西・戸畑）", contact: "東部 093-522-8728／西部 093-622-4614", hours: "", url: "https://www.city.kitakyushu.lg.jp/contents/18400051.html" },
    { name: "一般社団法人 福岡県ペストコントロール協会", description: "害虫相談（日本ペストコントロール協会：害虫相談はご所在地の県協会へ）", contact: "092-555-8701", hours: "", url: "https://www.pestcontrol.or.jp/pages/114/" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
{/* パンくずリスト */}
      <Breadcrumb items={[
        { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
        { label: "北九州" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-control.jpg"
          alt="北九州の害虫駆除サービス"
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            北九州の害虫駆除の基礎知識と業者比較
          </h1>
          <p className="text-lg text-gray-700">
            北九州の害虫駆除業者と料金を比較しています。地域の区分、公的な相談窓口、業者の選び方をご説明します。
          </p>
        </div>
      </section>

      {/* おすすめ業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">北九州の害虫駆除業者の比較</h2>
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

          <h2 className="heading-primary text-center mt-16 mb-8">北九州の害虫駆除業者の詳細</h2>

          {/* 1. 害獣駆除のROY */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-1">1</span>
                <h3 className="text-2xl font-bold text-black">害獣駆除のROY（北九州）</h3>
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
                <a href="https://www.google.com/search?q=害獣駆除のROY+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">害獣BUZZ（北九州）</h3>
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
                <a href="https://www.google.com/search?q=害獣BUZZ+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">サンキョークリーンサービス（北九州）</h3>
              </div>
              <CompanyVisual id="/images/companies/sankyo.png" name="サンキョークリーンサービス" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">サンキョークリーンサービスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業28年の業者</li>
                <li>日本ペストコントロール協会加盟</li>
                <li>北九州エリアの害虫駆除に対応する専門業者</li>
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
                <a href="https://www.google.com/search?q=サンキョークリーンサービス+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">ハウスプロテクト（北九州）</h3>
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
                <a href="https://www.google.com/search?q=ハウスプロテクト+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">害獣プロテック（北九州）</h3>
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
                <a href="https://www.google.com/search?q=害獣プロテック+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">ダスキン（北九州）</h3>
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
                <a href="https://www.google.com/search?q=ダスキン+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">害虫駆除110番（北九州）</h3>
              </div>
              <CompanyVisual id="/images/companies/gaichu110.png" name="害虫駆除110番" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害虫駆除110番の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>東証上場企業運営</li>
                <li>累計相談500万件以上の実績</li>
                <li>全国対応</li>
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
                <a href="https://www.google.com/search?q=害虫駆除110番+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">EMEAO!（北九州）</h3>
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
                <a href="https://www.google.com/search?q=EMEAO!+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">駆除ザウルス（北九州）</h3>
              </div>
              <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業20年、累計相談3万件以上の実績</li>
                <li>日本ペストコントロール協会加盟</li>
                <li>北九州エリアの害虫駆除に対応する専門業者</li>
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
                <a href="https://www.google.com/search?q=駆除ザウルス+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">ラッター（北九州）</h3>
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
                <a href="https://www.google.com/search?q=ラッター+北九州+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

      {/* 北九州の害虫駆除の料金の確かめ方 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">北九州の害虫駆除の料金の確かめ方</h2>
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

      {/* 北九州の害虫カレンダー */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">北九州の害虫カレンダー</h2>
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

      {/* 北九州の地域区分 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">北九州の地域区分</h2>
          <p className="text-gray-700 mb-6">北九州市の地域区分は次のとおりです。業者の対応エリアは業者ごとに異なるため、依頼前に住所が対応範囲に含まれるか各社にご確認ください。</p>
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
          <p className="text-xs text-gray-600 mt-4">出典：{Array.from(new Set(areas.map((a) => a.url).filter(Boolean))).map((u, i) => (<a key={i} href={u} target="_blank" rel="nofollow noopener" className="underline mr-2">北九州市公式サイト</a>))}（2026年10月17日確認）</p>
        </div>
      </section>

      {/* 北九州の相談窓口 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">北九州の害虫相談窓口</h2>
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
                        <p className="text-xs text-gray-600 mt-2">出典：<a href={org.url} target="_blank" rel="nofollow noopener" className="underline">公式ページ</a>（2026年10月17日確認）</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              北九州の害虫駆除のご相談について
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
