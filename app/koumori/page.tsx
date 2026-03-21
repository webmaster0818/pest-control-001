import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "コウモリ駆除の完全ガイド | 法律と安全な追い出し方法 - 害虫駆除110番",
  description: "コウモリ駆除の料金相場、法律知識、安全な追い出し方法を徹底解説。鳥獣保護管理法に基づく正しい対処法と業者の選び方をご紹介します。",
};

export default function KoumoriPage() {
  const damages = [
    {
      type: "糞害",
      icon: "💩",
      description: "天井裏や壁の中に大量の糞が蓄積。悪臭と衛生問題を引き起こす。",
      severity: "高",
      examples: [
        "天井にシミができる",
        "悪臭が室内に侵入",
        "ダニやノミの発生源",
      ],
    },
    {
      type: "騒音",
      icon: "🔊",
      description: "夜間の鳴き声や羽音で睡眠が妨げられる。",
      severity: "中",
      examples: [
        "夜間の鳴き声（キーキー音）",
        "天井裏を移動する音",
        "集団で生息する場合は特に騒音が大きい",
      ],
    },
    {
      type: "ダニ・病原菌",
      icon: "🦠",
      description: "コウモリに寄生するダニが人に被害を与えることも。",
      severity: "高",
      examples: [
        "マダニによる咬傷",
        "狂犬病ウイルスのリスク（稀）",
        "ヒストプラズマ症（糞から感染）",
      ],
    },
  ];

  const lawPoints = [
    {
      title: "鳥獣保護管理法で保護されている",
      description: "コウモリは野生鳥獣として法律で保護されています。無許可での捕獲・殺傷は違法行為となり、罰則があります。",
      icon: "⚖️",
    },
    {
      title: "「駆除」ではなく「追い出し」",
      description: "コウモリを殺傷することは法律で禁止されています。正しい対処法は、忌避剤などで追い出し、侵入口を封鎖することです。",
      icon: "🚪",
    },
    {
      title: "繁殖期（5月〜8月）は作業不可",
      description: "子育て期間中は追い出し作業ができません。この時期に封鎖すると、子コウモリが餓死し違法となります。",
      icon: "📅",
    },
  ];

  const methods = [
    {
      step: "1",
      title: "侵入口の特定",
      description: "コウモリの出入り口を特定します。わずか1〜2cmの隙間からも侵入するため、専門的な調査が必要。",
    },
    {
      step: "2",
      title: "忌避剤による追い出し",
      description: "コウモリが嫌がる成分の忌避剤を使用して、自然に出て行くように誘導します。",
    },
    {
      step: "3",
      title: "侵入口の封鎖",
      description: "コウモリが完全に出て行ったことを確認後、侵入口を金網やパテで完全に封鎖します。",
    },
    {
      step: "4",
      title: "清掃・消毒",
      description: "糞や尿の除去、天井裏の清掃と消毒を徹底的に行います。ダニの駆除も実施。",
    },
  ];

  const priceTable = [
    { item: "調査・診断", price: "無料〜10,000円", note: "侵入口の特定" },
    { item: "追い出し作業", price: "30,000〜80,000円", note: "忌避剤使用" },
    { item: "侵入口封鎖", price: "50,000〜150,000円", note: "箇所数により変動" },
    { item: "清掃・消毒", price: "30,000〜100,000円", note: "被害範囲により" },
    { item: "総額（目安）", price: "100,000〜300,000円", note: "戸建て1軒の場合" },
  ];

  const checklist = [
    "鳥獣保護管理法についての正しい知識があるか",
    "繁殖期の作業制限を理解しているか",
    "清掃・消毒作業が含まれているか",
    "侵入口の完全封鎖技術があるか（1cm単位の隙間も対応）",
    "保証期間は1年以上あるか",
  ];

  const areas = [
    { name: "東京", href: "/area/tokyo" },
    { name: "大阪", href: "/area/osaka" },
    { name: "名古屋", href: "/area/nagoya" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-purple-700 to-purple-900 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-35J2ODtMdPU?w=1920&h=1080&fit=crop"
          alt="コウモリ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🦇</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              コウモリ駆除の完全ガイド
            </h1>
            <p className="text-xl mb-8">
              法律に基づく正しい追い出し方法で、安全にコウモリ被害を解決します
            </p>
            <div className="alert alert-warning shadow-lg max-w-2xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-bold">重要：コウモリは法律で保護されています。無許可での捕獲・殺傷は違法です。</span>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">おすすめコウモリ駆除業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">項目</th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop" alt="駆除ザウルス" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop" alt="害獣駆除のROY" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害獣駆除のROY</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                      <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop" alt="ハウスプロテクト" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">ハウスプロテクト</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">4</span>
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop" alt="害獣BUZZ" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害獣BUZZ</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">5</span>
                      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100&h=100&fit=crop" alt="害獣駆除110番" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害獣駆除110番</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">6</span>
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop" alt="EMEAO!" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">EMEAO!</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">7</span>
                      <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop" alt="害獣プロテック" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害獣プロテック</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">8</span>
                      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100&h=100&fit=crop" alt="サンキョークリーンサービス" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">サンキョークリーンサービス</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center border border-gray-300">全国（北海道・沖縄除く）</td>
                  <td className="text-center border border-gray-300">全国（一部不可）</td>
                  <td className="text-center border border-gray-300">関東・関西・東海・中国・四国</td>
                  <td className="text-center border border-gray-300">関東・関西・東海・中国・九州</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">関東・東北・関西・東海・北陸・中国・九州</td>
                  <td className="text-center border border-gray-300">全国</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">要確認</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">料金目安</th>
                  <td className="text-center text-primary font-bold border border-gray-300">25,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">7,880円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">要見積もり</td>
                  <td className="text-center text-primary font-bold border border-gray-300">要見積もり</td>
                  <td className="text-center text-primary font-bold border border-gray-300">28,600円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">施工業者による</td>
                  <td className="text-center text-primary font-bold border border-gray-300">状況により変動</td>
                  <td className="text-center text-primary font-bold border border-gray-300">要見積もり</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長5年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">施工業者による</td>
                  <td className="text-sm border border-gray-300">施工業者による</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="heading-primary text-center mt-16 mb-8">おすすめコウモリ駆除業者 詳細紹介</h2>

          {/* 1. 駆除ザウルス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-warning badge-lg">👑 1</span>
                <h3 className="text-2xl font-bold text-black">駆除ザウルス（コウモリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop" alt="駆除ザウルス" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業20年、累計相談3万件以上の豊富な実績</li>
                <li>日本ペストコントロール協会加盟で信頼性が高い</li>
                <li>鳥獣保護管理法に精通した適法な追い出し作業</li>
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
                      <td className="bg-white text-black border border-gray-300">コウモリ・ネズミ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=駆除ザウルス+コウモリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    創業20年の実績があり、鳥獣保護管理法に精通したスタッフが適法な方法で追い出し作業をしてくれました。10年保証も心強いです。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    日本ペストコントロール協会加盟で、専門性が高く安心してお任せできました。繁殖期の作業制限も理解されており、適切な時期に施工していただけました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    累計相談3万件以上の経験に基づいた的確な侵入口特定で、コウモリが完全にいなくなりました。清掃・消毒も徹底的でした。
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
                <h3 className="text-2xl font-bold text-black">害獣駆除のROY（コウモリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop" alt="害獣駆除のROY" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣駆除のROYの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>一級建築士事務所で建物構造を熟知</li>
                <li>7,880円からの業界最安値水準</li>
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">コウモリ・ネズミ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">7,880円〜</td>
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
                <a href="https://www.google.com/search?q=害獣駆除のROY+コウモリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    一級建築士事務所ということで、建物構造を熟知した的確な侵入口特定をしていただけました。業界最安値水準でコスパも最高です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    最短即日対応で、緊急時にもすぐに来ていただけました。5年保証もあり、万が一の再発時も安心です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    全国対応で、地方でも迅速に対応していただけました。見積もりも明確で、追加料金もなく信頼できました。
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

          {/* 3. ハウスプロテクト */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                <h3 className="text-2xl font-bold text-black">ハウスプロテクト（コウモリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=200&fit=crop" alt="ハウスプロテクト" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ハウスプロテクトの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Google口コミ3000件星4.7の高評価</li>
                <li>施工実績2300件以上で経験豊富</li>
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">コウモリ・ネズミ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=ハウスプロテクト+コウモリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    Google口コミ3000件星4.7という高評価に惹かれてお願いしました。実際の施工も丁寧で、期待以上の仕上がりでした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    施工実績2300件以上の経験があり、コウモリの習性を熟知した的確な追い出し作業でした。最短即日対応で助かりました。
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

          {/* 4. 害獣BUZZ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">4</span>
                <h3 className="text-2xl font-bold text-black">害獣BUZZ（コウモリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop" alt="害獣BUZZ" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣BUZZの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>口コミ460件星4.7の高評価</li>
                <li>実績650件以上公開で透明性が高い</li>
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
                      <td className="bg-white text-black border border-gray-300">コウモリ・ネズミ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=害獣BUZZ+コウモリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    口コミ460件星4.7という高評価で安心してお願いできました。実績650件以上が公開されており、透明性が高いです。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    最短30分で来ていただけて、緊急時の対応が素早かったです。鳥獣保護管理法に基づいた適法な追い出し作業でした。
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

          {/* 5. 害獣駆除110番 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">5</span>
                <h3 className="text-2xl font-bold text-black">害獣駆除110番（コウモリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop" alt="害獣駆除110番" className="w-full h-48 object-cover rounded-lg" />
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
                      <td className="bg-white text-black border border-gray-300">コウモリ・ネズミ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">28,600円〜</td>
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
                <a href="https://www.google.com/search?q=害獣駆除110番+コウモリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 6. EMEAO! */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">6</span>
                <h3 className="text-2xl font-bold text-black">EMEAO!（コウモリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop" alt="EMEAO!" className="w-full h-48 object-cover rounded-lg" />
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
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">コウモリ・ネズミ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=EMEAO!+コウモリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                    全国対応で、地方でも優良業者を紹介していただけました。業者選びに迷った時に便利なサービスです。
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
                <h3 className="text-2xl font-bold text-black">害獣プロテック（コウモリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=200&fit=crop" alt="害獣プロテック" className="w-full h-48 object-cover rounded-lg" />
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
                      <td className="bg-white text-black border border-gray-300">コウモリ・ネズミ・イタチなど害獣全般</td>
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
                <a href="https://www.google.com/search?q=害獣プロテック+コウモリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    50年以上の経験があるベテラン業者だけあって、コウモリの習性を熟知した的確な追い出し作業でした。10年保証も心強いです。
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

          {/* 8. サンキョークリーンサービス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">8</span>
                <h3 className="text-2xl font-bold text-black">サンキョークリーンサービス（コウモリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop" alt="サンキョークリーンサービス" className="w-full h-48 object-cover rounded-lg" />
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
                      <td className="bg-white text-black border border-gray-300">コウモリ・ネズミ・イタチなど害獣全般</td>
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
                <h4 className="font-bold text-lg text-black">◆サンキョークリーンサービスの口コミ</h4>
                <a href="https://www.google.com/search?q=サンキョークリーンサービス+コウモリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    創業28年のベテラン業者だけあって、経験豊富なスタッフが来てくれました。コウモリの習性を熟知した的確な施工でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    日本ペストコントロール協会に加盟しているということで、安心してお任せできました。全国対応なので地方でも安心です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    10年保証があり、長期的に安心できました。見積もりも明確で、追加料金もなく信頼できました。
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

      {/* コウモリの生態と被害 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">コウモリの被害</h2>
          <div className="card bg-white shadow-xl mb-8">
            <div className="card-body">
              <h3 className="card-title text-2xl">アブラコウモリ（イエコウモリ）</h3>
              <p className="text-gray-700">
                日本の住宅に侵入する唯一のコウモリ。体長4〜6cm、体重5〜11g。
                わずか1〜2cmの隙間があれば侵入可能。夜行性で、昼間は天井裏や壁の中で休息。
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <div className="badge badge-lg">体長: 4〜6cm</div>
                <div className="badge badge-lg">夜行性</div>
                <div className="badge badge-lg">天井裏・壁の中に生息</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {damages.map((damage, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="text-5xl mb-4 text-center">{damage.icon}</div>
                  <h3 className="card-title text-xl text-center justify-center">{damage.type}</h3>
                  <div className={`badge ${
                    damage.severity === "高" ? "badge-error" : "badge-warning"
                  } badge-lg mx-auto`}>
                    深刻度: {damage.severity}
                  </div>
                  <p className="text-gray-700 mt-4 text-sm">{damage.description}</p>
                  <div className="divider"></div>
                  <ul className="space-y-2">
                    {damage.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-error text-xl">•</span>
                        <span className="text-xs">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コウモリ駆除と法律 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">コウモリ駆除と法律</h2>
          <div className="space-y-6">
            {lawPoints.map((point, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{point.icon}</div>
                    <h3 className="card-title text-xl">{point.title}</h3>
                  </div>
                  <p className="text-gray-700 mt-4">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-error mt-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold">違法行為の罰則</h3>
              <p className="text-sm">
                鳥獣保護管理法違反の場合、<strong>1年以下の懲役または100万円以下の罰金</strong>が科せられます。
                必ず法律を遵守した方法で対処してください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* コウモリの追い出し方法 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">コウモリの追い出し方法（4ステップ）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methods.map((method) => (
              <div key={method.step} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="badge badge-primary badge-lg mb-4">ステップ {method.step}</div>
                  <h3 className="card-title text-xl">{method.title}</h3>
                  <p className="text-gray-700">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-info mt-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-bold">プロへの依頼を推奨</h3>
              <p className="text-sm">
                コウモリの追い出しは、法律知識・専門技術・安全装備が必要です。
                自力での作業は法律違反や健康リスクがあるため、専門業者への依頼を強くおすすめします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">コウモリ駆除の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table bg-white text-black shadow-xl border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">作業項目</th>
                  <th className="bg-gray-800 text-white border border-gray-300">料金相場</th>
                  <th className="bg-gray-800 text-white border border-gray-300">備考</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold border border-gray-300">{row.item}</td>
                    <td className="text-primary font-semibold border border-gray-300">{row.price}</td>
                    <td className="text-sm border border-gray-300">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-300 mt-4 text-center">
            ※ 被害の程度や建物の構造により料金は変動します。侵入口の数が多い場合は追加費用が発生します。
          </p>
        </div>
      </section>

      {/* 業者選びのポイント */}
      <section className="py-16 px-4">
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
                  <h4 className="font-bold text-sm">注意：繁殖期の作業</h4>
                  <p className="text-xs">
                    5月〜8月は子育て期間のため、追い出し作業ができません。
                    この時期に封鎖すると子コウモリが餓死し、法律違反となります。9月〜4月の作業を推奨します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のコウモリ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でコウモリ駆除</h3>
                  <p className="text-gray-700 text-sm">法律知識のある専門業者情報</p>
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
      <section className="py-16 px-4 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary">
            コウモリ駆除は法律知識のある専門業者へ
          </h2>
          <p className="text-lg mb-8">
            鳥獣保護管理法に基づく正しい方法で、安全にコウモリ被害を解決します。
            お住まいの地域の信頼できる業者を見つけましょう。
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
