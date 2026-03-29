import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "神奈川の害虫駆除業者比較 | 料金相場・口コミ・おすすめ10社",
  description: "神奈川の害虫駆除業者10社を料金・サービス・口コミで徹底比較。地域別の料金相場、害虫カレンダー、信頼できる業者の選び方を詳しく解説。即日対応可能な業者も掲載。",
  openGraph: {
    title: "神奈川の害虫駆除業者比較 | 料金相場・口コミ・おすすめ10社",
    description: "神奈川の害虫駆除業者10社を料金・サービス・口コミで徹底比較。",
    url: "https://pest-control-001.pages.dev/area/kanagawa",
  },
};

export default function TokyoPage() {
  const topPests = [
    {
      rank: 1,
      name: "ゴキブリ",
      icon: "🪳",
      description: "繁華街や飲食店が多い神奈川では、ゴキブリ被害が最も多い。特にチャバネゴキブリが問題。",
      areas: "渋谷区、新宿区、港区などの繁華街",
      link: "/gokiburi",
    },
    {
      rank: 2,
      name: "ネズミ",
      icon: "🐭",
      description: "都心部の古い建物や飲食店街でネズミ被害が増加。クマネズミが主流。",
      areas: "千代田区、中央区、台東区などの都心部",
      link: "/nezumi",
    },
    {
      rank: 3,
      name: "シロアリ",
      icon: "🐜",
      description: "木造住宅密集地域でシロアリ被害が多発。梅雨時期の羽アリに注意。",
      areas: "世田谷区、杉並区、大田区などの住宅街",
      link: "/shiroari",
    },
    {
      rank: 4,
      name: "ハチ",
      icon: "🐝",
      description: "公園や緑地が多いエリアでスズメバチ・アシナガバチの巣が発見される。",
      areas: "目黒区、品川区、練馬区などの緑地周辺",
      link: "/hachi",
    },
    {
      rank: 5,
      name: "コウモリ",
      icon: "🦇",
      description: "住宅街の屋根裏や古いビルでアブラコウモリの被害が報告されている。",
      areas: "世田谷区、杉並区、中野区などの住宅街",
      link: "/koumori",
    },
  ];

  const priceComparison = [
    {
      pest: "シロアリ駆除",
      kanagawa: "12,000〜18,000円/坪",
      national: "10,000〜15,000円/坪",
      note: "都心部はやや高め",
    },
    {
      pest: "ハチ駆除",
      kanagawa: "15,000〜35,000円",
      national: "15,000〜30,000円",
      note: "高所作業が多く料金高め",
    },
    {
      pest: "ゴキブリ駆除",
      kanagawa: "20,000〜35,000円",
      national: "15,000〜30,000円",
      note: "飲食店需要で料金やや高",
    },
    {
      pest: "ネズミ駆除",
      kanagawa: "100,000〜180,000円",
      national: "80,000〜150,000円",
      note: "複雑な建物構造で高額",
    },
    {
      pest: "コウモリ駆除",
      kanagawa: "120,000〜350,000円",
      national: "100,000〜300,000円",
      note: "都心部の難易度高",
    },
  ];

  const seasonCalendar = [
    {
      season: "春（3月〜5月）",
      pests: ["シロアリの羽アリ発生", "ゴキブリの活動開始", "ハチの巣作り開始"],
      advice: "シロアリの羽アリを見かけたらすぐに点検を。ゴキブリ対策も早めに開始。",
    },
    {
      season: "夏（6月〜8月）",
      pests: ["ゴキブリのピーク", "ハチの攻撃性増加", "湿気でカビ・ダニ発生"],
      advice: "ゴキブリ・ハチ被害が最多の時期。梅雨明けの点検が重要。",
    },
    {
      season: "秋（9月〜11月）",
      pests: ["ネズミの侵入増加", "ハチの活動最盛期", "越冬準備の害虫増加"],
      advice: "ネズミが暖かい場所を求めて侵入。侵入口の封鎖が必須。",
    },
    {
      season: "冬（12月〜2月）",
      pests: ["ネズミ被害継続", "ゴキブリ（暖房で活動）", "コウモリの越冬"],
      advice: "暖房のある場所ではゴキブリが活動継続。ネズミ駆除のベストシーズン。",
    },
  ];

  const areas = [
    {
      name: "23区エリア",
      description: "都心部から住宅街まで幅広く対応。飲食店・オフィスビルの駆除実績豊富。",
      features: ["即日対応可能", "夜間作業対応", "多言語対応"],
    },
    {
      name: "多摩地域",
      description: "八王子、立川、町田など多摩地域全域をカバー。戸建て住宅の駆除に強い。",
      features: ["地域密着", "アフターフォロー充実", "農地・山林対応"],
    },
    {
      name: "島しょ部",
      description: "伊豆諸島・小笠原諸島にも対応可能な業者あり。事前予約推奨。",
      features: ["出張対応", "離島料金設定", "長期保証"],
    },
  ];

  const consultations = [
    {
      name: "神奈川都福祉保健局",
      description: "害虫相談窓口",
      contact: "03-5320-4391",
      hours: "平日 9:00〜17:00",
    },
    {
      name: "各区保健所",
      description: "地域ごとの相談・指導",
      contact: "各区役所HP参照",
      hours: "平日 8:30〜17:00（区により異なる）",
    },
    {
      name: "神奈川都ペストコントロール協会",
      description: "業者紹介・相談",
      contact: "03-3254-0014",
      hours: "平日 9:00〜17:00",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
{/* パンくずリスト */}
      <Breadcrumb items={[
        { label: "害虫駆除110番", href: "/" },
        { label: "神奈川" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-control.jpg"
          alt="神奈川の害虫駆除サービス"
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            神奈川の害虫駆除 完全ガイド
          </h2>
          <p className="text-lg text-gray-700">
            神奈川都内の害虫駆除業者と料金相場を徹底比較。23区・多摩地域別の特徴と信頼できる業者の選び方をご紹介します。
          </p>
        </div>
      </section>

      {/* 神奈川で多い害虫トップ5 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">神奈川で多い害虫トップ5</h2>
          <div className="space-y-6">
            {topPests.map((pest) => (
              <div key={pest.rank} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-primary badge-lg">第{pest.rank}位</div>
                    <div className="text-5xl">{pest.icon}</div>
                    <div className="flex-1">
                      <h3 className="card-title text-2xl mb-2 text-black">{pest.name}</h3>
                      <p className="text-gray-700 mb-2">{pest.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="badge badge-outline">多発エリア:</span>
                        <span className="text-gray-700">{pest.areas}</span>
                      </div>
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

      {/* おすすめ業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">神奈川のおすすめ害虫駆除業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">項目</th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="/images/companies/kujyo-zaurus.svg" alt="駆除ザウルス" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                      <img src="/images/companies/roy.svg" alt="害獣駆除のROY" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害獣駆除のROY</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                      <img src="/images/companies/buzz.svg" alt="害獣BUZZ" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害獣BUZZ</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">4</span>
                      <img src="/images/companies/sankyo.png" alt="サンキョークリーンサービス" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">サンキョークリーンサービス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">5</span>
                      <img src="/images/companies/house-protect.svg" alt="ハウスプロテクト" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">ハウスプロテクト</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">6</span>
                      <img src="/images/companies/gaichu110.svg" alt="害虫駆除110番" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害虫駆除110番</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">7</span>
                      <img src="/images/companies/protec.svg" alt="害獣プロテック" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害獣プロテック</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">8</span>
                      <img src="/images/companies/ratter.svg" alt="ラッター" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">ラッター</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">9</span>
                      <img src="/images/companies/emeao.svg" alt="EMEAO!" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">EMEAO!</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">10</span>
                      <img src="/images/companies/duskin.svg" alt="ダスキン" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">ダスキン</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center border border-gray-300">全国（北海道・沖縄除く）</td>
                  <td className="text-center border border-gray-300">全国（一部不可）</td>
                  <td className="text-center border border-gray-300">関東・関西・東海・中国・九州</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">関東・関西・東海・中国・四国</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">関東・東北・関西・東海・北陸・中国・九州</td>
                  <td className="text-center border border-gray-300">関東・東海・関西・中国・九州</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">全国</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">記載なし</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">記載なし</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">記載なし</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">料金目安</th>
                  <td className="text-center text-primary font-bold border border-gray-300">25,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">4,730円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">要見積もり</td>
                  <td className="text-center text-primary font-bold border border-gray-300">22,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">要見積もり</td>
                  <td className="text-center text-primary font-bold border border-gray-300">22,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">状況により変動</td>
                  <td className="text-center text-primary font-bold border border-gray-300">10,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">施工業者による</td>
                  <td className="text-center text-primary font-bold border border-gray-300">16,500円〜</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長5年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長2年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">施工業者による</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長5年保証</td>
                  <td className="text-sm border border-gray-300">施工業者による</td>
                  <td className="text-sm border border-gray-300">最長5年保証</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="heading-primary text-center mt-16 mb-8">神奈川のおすすめ害虫駆除業者 詳細紹介</h2>

          {/* 1. 駆除ザウルス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-warning badge-lg">👑 1</span>
                <h3 className="text-2xl font-bold text-black">駆除ザウルス（神奈川）</h3>
              </div>
              <img src="/images/companies/kujyo-zaurus.svg" alt="駆除ザウルス" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業20年、累計相談3万件以上の豊富な実績</li>
                <li>日本ペストコントロール協会加盟で信頼性が高い</li>
                <li>神奈川都内の害虫駆除に精通したプロフェッショナル</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=駆除ザウルス+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                  <p className="text-sm text-gray-900">
                    創業20年の実績があり、神奈川都内の害虫駆除に精通したスタッフが来てくれました。10年保証も心強いです。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">★★★★☆</span>
                    <span className="text-sm text-gray-600">4.0</span>
                  </div>
                  <p className="text-sm text-gray-900">
                    日本ペストコントロール協会加盟で、専門性が高く安心してお任せできました。累計相談3万件以上の経験に基づいた的確な施工でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                  <p className="text-sm text-gray-900">
                    24時間365日対応で、緊急時にもすぐに来ていただけました。見積もりも明確で、追加料金もなく信頼できました。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 2. 害獣駆除のROY */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                <h3 className="text-2xl font-bold text-black">害獣駆除のROY（神奈川）</h3>
              </div>
              <img src="/images/companies/roy.svg" alt="害獣駆除のROY" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣駆除のROYの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>一級建築士事務所で建物構造を熟知</li>
                <li>4,730円からの業界最安値水準</li>
                <li>最短即日対応で緊急時にも安心</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=害獣駆除のROY+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    一級建築士事務所ということで、神奈川の複雑な建物構造を熟知した的確な施工をしていただけました。業界最安値水準でコスパも最高です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    最短即日対応で、緊急時にもすぐに来ていただけました。5年保証もあり、万が一の再発時も安心です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    神奈川都内全域に対応しているので、地方でも迅速に対応していただけました。見積もりも明確で、追加料金もなく信頼できました。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 3. 害獣BUZZ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                <h3 className="text-2xl font-bold text-black">害獣BUZZ（神奈川）</h3>
              </div>
              <img src="/images/companies/buzz.svg" alt="害獣BUZZ" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣BUZZの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>口コミ多数公開で透明性が高い</li>
                <li>日本有害鳥獣駆除防除管理協会加盟</li>
                <li>最短30分対応で緊急時にも迅速</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=害獣BUZZ+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    口コミが多数公開されており、透明性が高く安心してお願いできました。日本有害鳥獣駆除防除管理協会に加盟しているので信頼性も高いです。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    最短30分で来ていただけて、緊急時の対応が素早かったです。神奈川都内の害虫駆除に精通した的確な施工でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    10年保証があり、長期的に安心できました。施工後のフォローも丁寧で、再発の心配もありません。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 4. サンキョークリーンサービス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">4</span>
                <h3 className="text-2xl font-bold text-black">サンキョークリーンサービス（神奈川）</h3>
              </div>
              <img src="/images/companies/sankyo.png" alt="サンキョークリーンサービス" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">サンキョークリーンサービスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業28年のベテラン業者で豊富な経験</li>
                <li>日本ペストコントロール協会加盟で信頼性が高い</li>
                <li>神奈川都内の害虫駆除に精通したプロフェッショナル</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼年中無休・通話無料／<br />
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=サンキョークリーンサービス+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    創業28年のベテラン業者だけあって、経験豊富なスタッフが来てくれました。神奈川都内の害虫駆除に精通した的確な施工でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    日本ペストコントロール協会に加盟しているということで、安心してお任せできました。見積もりも明確で、追加料金もなく信頼できました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    全国対応で、神奈川都内でも迅速に対応していただけました。施工後のフォローも丁寧でした。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼年中無休・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 5. ハウスプロテクト */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">5</span>
                <h3 className="text-2xl font-bold text-black">ハウスプロテクト（神奈川）</h3>
              </div>
              <img src="/images/companies/house-protect.svg" alt="ハウスプロテクト" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ハウスプロテクトの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Google口コミ業界トップクラスの高評価</li>
                <li>2300件以上の実績掲載で透明性が高い</li>
                <li>最短即日対応で緊急時にも迅速</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=ハウスプロテクト+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    Google口コミ業界トップクラスということで、安心してお願いできました。実際の施工も丁寧で、期待以上の仕上がりでした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    2300件以上の実績が掲載されており、透明性が高く信頼できました。最短即日対応で助かりました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    10年保証があり、長期的に安心できました。施工後のフォローも丁寧で、再発の心配もありません。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 6. 害虫駆除110番 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">6</span>
                <h3 className="text-2xl font-bold text-black">害虫駆除110番（神奈川）</h3>
              </div>
              <img src="/images/companies/gaichu110.svg" alt="害虫駆除110番" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害虫駆除110番の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>東証上場企業運営で信頼性が高い</li>
                <li>累計相談500万件以上の圧倒的な実績</li>
                <li>全国対応で神奈川都内も迅速対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=害虫駆除110番+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    東証上場企業が運営しているということで、安心してお願いできました。累計相談500万件以上の実績も心強いです。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    全国対応で、神奈川都内でも迅速に対応していただけました。24時間365日受付で、緊急時にもすぐに連絡できました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    大手業者ならではの安心感がありました。施工業者による保証もあり、アフターフォローもしっかりしています。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 7. 害獣プロテック */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">7</span>
                <h3 className="text-2xl font-bold text-black">害獣プロテック（神奈川）</h3>
              </div>
              <img src="/images/companies/protec.svg" alt="害獣プロテック" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣プロテックの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>50年以上の経験を持つベテラン業者</li>
                <li>工務店歴50年で建物構造を熟知</li>
                <li>最短30分対応で緊急時にも迅速</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=害獣プロテック+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    50年以上の経験があるベテラン業者だけあって、神奈川都内の害虫駆除に精通した的確な施工でした。10年保証も心強いです。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    工務店歴50年で建物構造を熟知しているため、複雑な神奈川の建物でも適切な対応をしていただけました。最短30分で来ていただけて助かりました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    広範囲のエリアに対応しているので、神奈川都内でも安心です。施工後のアフターフォローも丁寧でした。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 8. ラッター */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">8</span>
                <h3 className="text-2xl font-bold text-black">ラッター（神奈川）</h3>
              </div>
              <img src="/images/companies/ratter.svg" alt="ラッター" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ラッターの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>累計3万件以上の豊富な実績</li>
                <li>最短10分対応で緊急時にも迅速</li>
                <li>経験豊富なプロフェッショナル</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼年中無休・通話無料／<br />
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=ラッター+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    累計3万件以上の実績があり、経験豊富なスタッフが来てくれました。神奈川都内の害虫駆除に精通した的確な施工でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    最短10分で来ていただけて、緊急時の対応が素早かったです。5年保証もあり、万が一の再発時も安心です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    10,000円からという良心的な料金設定で、コスパも良かったです。見積もりも明確で、追加料金もなく信頼できました。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼年中無休・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 9. EMEAO! */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">9</span>
                <h3 className="text-2xl font-bold text-black">EMEAO!（神奈川）</h3>
              </div>
              <img src="/images/companies/emeao.svg" alt="EMEAO!" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">EMEAO!の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>累計相談10万件以上の業者紹介サービス</li>
                <li>厳選された優良業者のみを紹介</li>
                <li>最短即日対応で緊急時にも安心</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=EMEAO!+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    累計相談10万件以上の実績がある業者紹介サービスで、厳選された優良業者を紹介していただけました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    最短即日対応で、緊急時にもすぐに業者を紹介していただけました。複数の業者から見積もりを取れて比較できました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    全国対応で、神奈川都内でも優良業者を紹介していただけました。業者選びに迷った時に便利なサービスです。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 10. ダスキン */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">10</span>
                <h3 className="text-2xl font-bold text-black">ダスキン（神奈川）</h3>
              </div>
              <img src="/images/companies/duskin.svg" alt="ダスキン" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ダスキンの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>東証上場企業のFC加盟店で信頼性が高い</li>
                <li>社内ライセンス取得のプロが施工</li>
                <li>大手ブランドの安心感</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼年中無休・通話無料／<br />
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
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
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
                <a href="https://www.google.com/search?q=ダスキン+神奈川+害虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    東証上場企業のFC加盟店ということで、大手ブランドの安心感がありました。社内ライセンス取得のプロが施工してくれました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    16,500円からという良心的な料金設定で、全国対応なので神奈川都内でも安心です。見積もりも明確で、追加料金もなく信頼できました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    5年保証があり、長期的に安心できました。大手ブランドならではの丁寧なアフターフォローも良かったです。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼年中無休・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 神奈川の害虫駆除料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">神奈川の害虫駆除料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black shadow-xl border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">害虫</th>
                  <th className="bg-gray-800 text-white border border-gray-300">神奈川の相場</th>
                  <th className="bg-gray-800 text-white border border-gray-300">全国平均</th>
                  <th className="bg-gray-800 text-white border border-gray-300">備考</th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold border border-gray-300">{row.pest}</td>
                    <td className="text-primary font-semibold border border-gray-300">{row.kanagawa}</td>
                    <td className="text-gray-700 border border-gray-300">{row.national}</td>
                    <td className="text-sm text-gray-700 border border-gray-300">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="alert alert-info mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-bold">神奈川の料金が高い理由</h3>
              <p className="text-sm">
                都心部の家賃・人件費の高さ、高層ビルや複雑な建物構造、
                飲食店など商業施設の需要が多いことが料金に影響しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 神奈川の害虫カレンダー */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">神奈川の害虫カレンダー</h2>
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

      {/* 神奈川都内の害虫駆除業者エリア */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">神奈川都内の害虫駆除業者エリア</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-black">{area.name}</h3>
                  <p className="text-gray-700 text-sm">{area.description}</p>
                  <div className="divider"></div>
                  <ul className="space-y-2">
                    {area.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-success text-xl">✓</span>
                        <span className="text-sm text-gray-900">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 神奈川都の相談窓口 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">神奈川都の害虫相談窓口</h2>
          <div className="space-y-4">
            {consultations.map((org, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📞</div>
                    <div className="flex-1">
                      <h3 className="card-title text-lg text-black">{org.name}</h3>
                      <p className="text-gray-700 text-sm mb-2">{org.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                          <span className="text-xs text-gray-700">電話番号:</span>
                          <p className="font-semibold text-black">{org.contact}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-700">受付時間:</span>
                          <p className="font-semibold text-sm text-black">{org.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary">
            神奈川の害虫駆除は地域に詳しい業者へ
          </h2>
          <p className="text-lg mb-8">
            神奈川の気候や建物の特性を理解した業者なら、
            効果的な駆除と再発防止が可能です。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を見る
            </Link>
            <Link href="/guide" className="btn btn-lg btn-outline btn-neutral">
              業者選びガイド
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
