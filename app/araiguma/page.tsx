import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "アライグマ駆除の完全ガイド | 確実な駆除と再発防止 - 害虫・害獣駆除プロ比較ナビ",
  description: "アライグマ駆除の料金相場、業者の選び方、駆除方法を徹底解説。ドブアライグマ、クマアライグマ、ハツカアライグマの種類別対策と再発防止策をご紹介します。",
  openGraph: {
    title: "アライグマ駆除業者比較 | 料金相場・口コミ・おすすめ業者",
    description: "アライグマ駆除業者を料金・サービス・口コミで徹底比較。",
    url: "https://pest-control-001.pages.dev/nezumi",
  },
};

export default function AraigumaPage() {
  const types = [
    {
      name: "ドブアライグマ",
      description: "日本最大のアライグマ。体長20〜25cm。下水道や側溝に生息し、湿った場所を好む。",
      habitat: "下水道、側溝、地下室",
      features: ["体長: 20〜25cm", "色: 灰褐色", "性格: 獰猛"],
      color: "badge-error",
    },
    {
      name: "クマアライグマ",
      description: "都市部に多い。体長15〜20cm。運動能力が高く、高所への侵入も得意。駆除が困難。",
      habitat: "天井裏、壁の中、ビル",
      features: ["体長: 15〜20cm", "色: 黒褐色", "性格: 警戒心強い"],
      color: "badge-warning",
    },
    {
      name: "ハツカアライグマ",
      description: "最も小型のアライグマ。体長6〜9cm。倉庫や物置に多く、わずかな隙間からも侵入。",
      habitat: "倉庫、物置、農地",
      features: ["体長: 6〜9cm", "色: 灰白色", "性格: 好奇心旺盛"],
      color: "badge-info",
    },
  ];

  const damages = [
    {
      category: "健康被害",
      icon: "🦠",
      examples: [
        "サルモネラ菌などの病原菌を媒介",
        "ダニやノミの発生源",
        "糞尿による悪臭と衛生問題",
      ],
    },
    {
      category: "経済的被害",
      icon: "💰",
      examples: [
        "食品・食材の汚染",
        "電気配線をかじることによる火災リスク",
        "建材・家具の破損",
      ],
    },
    {
      category: "精神的被害",
      icon: "😰",
      examples: [
        "夜間の物音による不眠",
        "不衛生な環境によるストレス",
        "再発への不安",
      ],
    },
  ];

  const difficulties = [
    {
      title: "学習能力の高さ",
      description: "一度罠にかかりそうになると、同じ罠を避けるようになる。特にクマアライグマは警戒心が強い。",
    },
    {
      title: "繁殖スピードの速さ",
      description: "1匹のメスが年間6〜8回出産し、1回の出産で6〜10匹産む。数ヶ月で数十匹に増殖。",
    },
    {
      title: "侵入口の多様性",
      description: "わずか2〜3cmの隙間があれば侵入可能。配管、換気口、壁の亀裂など侵入経路は多岐にわたる。",
    },
  ];

  const methods = [
    {
      name: "捕獲（罠）",
      description: "粘着シートや捕獲器を使用。即効性はあるが、学習されやすい。",
      effectiveness: "中",
      pros: ["即効性がある", "確実に捕獲できる"],
      cons: ["警戒されやすい", "継続的な設置が必要"],
    },
    {
      name: "忌避剤",
      description: "アライグマが嫌がる成分で追い出す。一時的な効果。",
      effectiveness: "低",
      pros: ["簡単に使用できる", "人体への影響が少ない"],
      cons: ["効果が一時的", "根本的な解決にならない"],
    },
    {
      name: "侵入口封鎖",
      description: "アライグマの侵入経路を完全に塞ぐ。最も重要な対策。",
      effectiveness: "高",
      pros: ["再発防止に効果的", "長期的な解決"],
      cons: ["専門知識が必要", "全ての侵入口の特定が困難"],
    },
  ];

  const priceTable = [
    { type: "戸建て（侵入口封鎖含む）", price: "80,000〜150,000円", note: "1〜2回の施工" },
    { type: "マンション（1室）", price: "50,000〜100,000円", note: "1回の施工" },
    { type: "店舗・飲食店", price: "100,000〜200,000円", note: "定期メンテナンス含む" },
    { type: "追加作業（清掃・消毒）", price: "+20,000〜50,000円", note: "被害状況により" },
  ];

  const checklist = [
    "侵入口調査を徹底的に行うか（建物全体の点検）",
    "保証期間は1年以上あるか",
    "アフターフォロー体制（定期点検）はあるか",
    "清掃・消毒作業も含まれているか",
    "見積もりに侵入口封鎖の費用が含まれているか",
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
        { label: "アライグマ" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-gray-700 to-gray-900 text-white relative overflow-hidden">
        <Image
          src="/images/hero-animal-new.jpg"
          alt="アライグマ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🦝</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              アライグマ駆除の完全ガイド
            </h1>
            <p className="text-xl mb-8">
              確実な駆除と再発防止で、アライグマの被害から家族と財産を守ります
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            アライグマ駆除の完全ガイド | 確実な駆除と再発防止 - 害虫駆除の完全ガイド
          </h2>
          <p className="text-lg text-gray-700">
            アライグマ駆除の完全ガイド | 確実な駆除と再発防止 - 害虫の特徴・被害状況から駆除方法まで、適切な対処法をご紹介します
          </p>
        </div>
      </section>

      {/* おすすめ業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">おすすめアライグマ駆除業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">項目</th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="/images/companies/kujyo-zaurus.png" alt="駆除ザウルス" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                      <img src="/images/companies/roy.png" alt="害獣駆除のROY" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">害獣駆除のROY</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                      <img src="/images/companies/buzz.png" alt="害獣BUZZ" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">害獣BUZZ</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">4</span>
                      <img src="/images/companies/sankyo.png" alt="サンキョークリーンサービス" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">サンキョークリーンサービス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">5</span>
                      <img src="/images/companies/house-protect.png" alt="ハウスプロテクト" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">ハウスプロテクト</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">6</span>
                      <img src="/images/hero-animal-new.jpg" alt="害獣駆除110番" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">害獣駆除110番</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">7</span>
                      <img src="/images/companies/protec.png" alt="害獣プロテック" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">害獣プロテック</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">8</span>
                      <img src="/images/companies/ratter.png" alt="ラッター" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">ラッター</strong>
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
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">要確認</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">要確認</td>
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
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="heading-primary text-center mt-16 mb-8">おすすめアライグマ駆除業者 詳細紹介</h2>

          {/* 1. 駆除ザウルス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-warning badge-lg">👑 1</span>
                <h3 className="text-2xl font-bold text-black">駆除ザウルス（アライグマ駆除）</h3>
              </div>
              <img src="/images/companies/kujyo-zaurus.png" alt="駆除ザウルス" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業20年、累計相談3万件以上の実績</li>
                <li>日本ペストコントロール協会加盟で信頼性が高い</li>
                <li>最長10年保証で長期的に安心</li>
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">アライグマ・コウモリ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=駆除ザウルス+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                    創業20年の実績があるだけあって、対応が迅速で丁寧でした。アライグマの侵入口を徹底的に調査し、封鎖していただきました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">★★★★☆</span>
                    <span className="text-sm text-gray-600">4.0</span>
                  </div>
                  <p className="text-sm text-gray-900">
                    日本ペストコントロール協会加盟ということで、安心してお任せできました。10年保証もあり、長期的に安心です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                  <p className="text-sm text-gray-900">
                    累計相談3万件以上の経験に基づいた的確な施工で、アライグマが完全にいなくなりました。アフターフォローも丁寧です。
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
                <h3 className="text-2xl font-bold text-black">害獣駆除のROY（アライグマ駆除）</h3>
              </div>
              <img src="/images/companies/roy.png" alt="害獣駆除のROY" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣駆除のROYの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>業界最安値水準の4,730円から対応可能</li>
                <li>24時間365日受付で緊急時にも即座に対応</li>
                <li>最長5年保証で再発時も安心</li>
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">アライグマ・コウモリ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=害獣駆除のROY+アライグマ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    業界最安値水準の料金設定で、コスパが非常に良かったです。24時間365日受付で、緊急時にもすぐに対応していただけました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    5年保証があり、万が一再発した場合も安心です。施工の質も高く、アライグマが完全にいなくなりました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    全国対応で、地方でも迅速に来ていただけました。見積もりも明確で、追加料金もなく安心でした。
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
                <h3 className="text-2xl font-bold text-black">害獣BUZZ（アライグマ駆除）</h3>
              </div>
              <img src="/images/companies/buzz.png" alt="害獣BUZZ" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣BUZZの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>口コミ多数公開で信頼性が高い</li>
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">アライグマ・コウモリ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=害獣BUZZ+アライグマ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    口コミが多数公開されていたので、安心してお願いできました。実際の施工も丁寧で、期待以上の仕上がりでした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    日本有害鳥獣駆除防除管理協会に加盟しているということで、専門性が高く信頼できました。10年保証も心強いです。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    最短30分で来ていただけて、緊急時の対応が素早かったです。アライグマの侵入口も完璧に封鎖していただきました。
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
                <h3 className="text-2xl font-bold text-black">サンキョークリーンサービス（アライグマ駆除）</h3>
              </div>
              <img src="/images/companies/sankyo.png" alt="サンキョークリーンサービス" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">サンキョークリーンサービスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業28年のベテラン業者で豊富な経験</li>
                <li>日本ペストコントロール協会加盟で信頼性が高い</li>
                <li>全国対応で地域を問わず利用可能</li>
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">アライグマ・コウモリ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=サンキョークリーンサービス+アライグマ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    創業28年のベテラン業者だけあって、経験豊富なスタッフが来てくれました。アライグマの習性を熟知した的確な施工でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    日本ペストコントロール協会に加盟しているということで、安心してお任せできました。全国対応なので地方でも安心です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    料金も明確で、見積もり通りの金額でした。2年保証もあり、アフターフォローもしっかりしています。
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
                <h3 className="text-2xl font-bold text-black">ハウスプロテクト（アライグマ駆除）</h3>
              </div>
              <img src="/images/companies/house-protect.png" alt="ハウスプロテクト" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ハウスプロテクトの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Google口コミ業界トップクラスの評価</li>
                <li>2300件以上の実績掲載で信頼性が高い</li>
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">アライグマ・コウモリ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=ハウスプロテクト+アライグマ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    Google口コミの評価が非常に高く、安心してお願いできました。実際の施工も丁寧で、期待以上の仕上がりでした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    2300件以上の実績が公開されていて、信頼性が高かったです。最短即日対応で、緊急時にもすぐに来ていただけました。
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

          {/* 6. 害獣駆除110番 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">6</span>
                <h3 className="text-2xl font-bold text-black">害獣駆除110番（アライグマ駆除）</h3>
              </div>
              <img src="/images/hero-animal-new.jpg" alt="害獣駆除110番" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣駆除110番の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>東証上場企業運営で信頼性が高い</li>
                <li>累計相談500万件以上の圧倒的な実績</li>
                <li>全国対応で地域を問わず利用可能</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害獣駆除110番の基本情報</h4>
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">アライグマ・コウモリ・イタチなど害獣全般</td>
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
                <h4 className="font-bold text-lg text-black">◆害獣駆除110番の口コミ</h4>
                <a href="https://www.google.com/search?q=害獣駆除110番+アライグマ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                    全国対応で、地方でも迅速に対応していただけました。24時間365日受付で、緊急時にもすぐに連絡できました。
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
                <h3 className="text-2xl font-bold text-black">害獣プロテック（アライグマ駆除）</h3>
              </div>
              <img src="/images/companies/protec.png" alt="害獣プロテック" className="w-full h-48 object-cover rounded-lg" />
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">アライグマ・コウモリ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=害獣プロテック+アライグマ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    50年以上の経験があるベテラン業者だけあって、アライグマの習性を熟知した的確な施工でした。10年保証も心強いです。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    工務店歴50年で建物構造を熟知しているため、侵入口の特定が非常に正確でした。最短30分で来ていただけて助かりました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    広範囲のエリアに対応しているので、地方でも安心です。施工後のアフターフォローも丁寧でした。
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
                <h3 className="text-2xl font-bold text-black">ラッター（アライグマ駆除）</h3>
              </div>
              <img src="/images/companies/ratter.png" alt="ラッター" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ラッターの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>累計3万件以上の豊富な実績</li>
                <li>最短10分対応で業界最速クラス</li>
                <li>経験豊富なスタッフによる確実な施工</li>
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">アライグマ・コウモリ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=ラッター+アライグマ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    累計3万件以上の実績があるだけあって、経験豊富なスタッフが来てくれました。最短10分で到着し、緊急時に本当に助かりました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    料金も1万円からと手頃で、見積もりも明確でした。5年保証もあり、再発の心配もありません。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    経験豊富なスタッフによる確実な施工で、アライグマが完全にいなくなりました。アフターフォローも丁寧でした。
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

      {/* アライグマの種類と被害 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">アライグマの種類</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((type) => (
              <div key={type.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">{type.name}</h3>
                  <div className={`badge ${type.color} badge-lg`}>{type.habitat}</div>
                  <p className="text-gray-700 mt-4">{type.description}</p>
                  <div className="divider"></div>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 被害事例 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">アライグマによる被害</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {damages.map((damage, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="text-5xl mb-4 text-center">{damage.icon}</div>
                  <h3 className="card-title text-xl text-center justify-center">{damage.category}</h3>
                  <ul className="space-y-3 mt-4">
                    {damage.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-error text-xl">⚠️</span>
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-error mt-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold">緊急：アライグマを見かけたら即座に対策を</h3>
              <p className="text-sm">アライグマは繁殖スピードが非常に速く、放置すると数ヶ月で数十匹に増えます。早期の駆除が被害を最小限に抑える鍵です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* アライグマ駆除が難しい理由 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">アライグマ駆除が難しい理由</h2>
          <div className="space-y-6">
            {difficulties.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="badge badge-error badge-lg">{idx + 1}</div>
                    <h3 className="card-title text-xl">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 駆除方法 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">アライグマ駆除の方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {methods.map((method) => (
              <div key={method.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-primary">{method.name}</h3>
                  <div className={`badge badge-lg ${
                    method.effectiveness === "高" ? "badge-success" :
                    method.effectiveness === "中" ? "badge-warning" :
                    "badge-neutral"
                  }`}>
                    効果: {method.effectiveness}
                  </div>
                  <p className="text-gray-700 mt-4">{method.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="font-bold text-sm mb-2 text-success">メリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {method.pros.map((pro, i) => (
                        <li key={i} className="text-xs">{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-bold text-sm mb-2 text-error">デメリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {method.cons.map((con, i) => (
                        <li key={i} className="text-xs">{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-success shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold">最も効果的な方法</h3>
              <p className="text-sm">
                <strong>「捕獲 + 忌避剤 + 侵入口封鎖」の3つを組み合わせる</strong>のが最も効果的です。
                特に侵入口封鎖は再発防止に必須。プロの業者による徹底調査をおすすめします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">アライグマ駆除の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table bg-white text-black shadow-xl border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">物件タイプ</th>
                  <th className="bg-gray-800 text-white border border-gray-300">料金相場</th>
                  <th className="bg-gray-800 text-white border border-gray-300">備考</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold border border-gray-300">{row.type}</td>
                    <td className="text-primary font-semibold border border-gray-300">{row.price}</td>
                    <td className="text-sm border border-gray-300">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-300 mt-4 text-center">
            ※ 被害の程度や建物の構造、侵入口の数によって料金は変動します。
          </p>
        </div>
      </section>

      {/* 業者選びのポイント */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者選びのポイント</h2>
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
              <div className="alert alert-warning mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-bold text-sm">重要：保証期間の確認</h4>
                  <p className="text-xs">アライグマ駆除は1回の施工で完全に根絶することが困難です。最低でも1年以上の保証期間がある業者を選びましょう。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のアライグマ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でアライグマ駆除</h3>
                  <p className="text-gray-700 text-sm">地域の料金相場と業者情報</p>
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
              アライグマ駆除のご相談は今すぐ
            </h2>
          </div>
          <p className="text-lg mb-8 text-gray-900">
            お住まいの地域の料金相場を確認して、最適な業者を見つけましょう
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
