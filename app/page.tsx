import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const pests = [
    { name: "シロアリ", href: "/shiroari", icon: "🐜", color: "bg-amber-100 hover:bg-amber-200" },
    { name: "ハチ", href: "/hachi", icon: "🐝", color: "bg-yellow-100 hover:bg-yellow-200" },
    { name: "ゴキブリ", href: "/gokiburi", icon: "🪳", color: "bg-red-100 hover:bg-red-200" },
    { name: "ネズミ", href: "/nezumi", icon: "🐭", color: "bg-gray-100 hover:bg-gray-200" },
    { name: "コウモリ", href: "/koumori", icon: "🦇", color: "bg-purple-100 hover:bg-purple-200" },
  ];

  const areas = [
    { name: "東京", href: "/area/tokyo" },
    { name: "大阪", href: "/area/osaka" },
    { name: "名古屋", href: "/area/nagoya" },
  ];

  const features = [
    { title: "5種類の害虫を網羅", description: "シロアリ、ハチ、ゴキブリ、ネズミ、コウモリの駆除情報を一括比較" },
    { title: "地域別の詳細情報", description: "お住まいの地域に特化した駆除業者と料金相場を掲載" },
    { title: "わかりやすい料金相場", description: "透明性のある料金情報で、安心して業者選びができる" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[70vh] bg-gradient-to-r from-primary to-secondary text-primary-content relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop"
          alt="害虫駆除サービス"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              害虫でお困りですか？
              <br />
              今すぐ解決方法を見つけましょう
            </h1>
            <p className="text-xl mb-8">
              シロアリ、ハチ、ゴキブリ、ネズミ、コウモリの駆除業者を比較して、
              あなたに最適な業者を見つけましょう
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/price" className="btn btn-lg btn-neutral">
                料金相場を見る
              </Link>
              <Link href="/guide" className="btn btn-lg btn-outline btn-neutral">
                業者の選び方
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ業者比較 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">おすすめ害虫駆除業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">項目</th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop" alt="害獣プロテック" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害獣プロテック</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop" alt="駆除ザウルス" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop" alt="街角害虫駆除相談所" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">街角害虫駆除相談所</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">4</span>
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop" alt="ラッター" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">ラッター</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">5</span>
                      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100&h=100&fit=crop" alt="キャッツ" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">キャッツ</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center bg-white text-black border border-gray-300">関東・東北・関西・東海・北陸・中国・九州</td>
                  <td className="text-center bg-white text-black border border-gray-300">全国（北海道・沖縄除く）</td>
                  <td className="text-center bg-white text-black border border-gray-300">東京全域</td>
                  <td className="text-center bg-white text-black border border-gray-300">関東・東海・関西・中国・九州</td>
                  <td className="text-center bg-white text-black border border-gray-300">東京全域</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">6:00〜20:00</td>
                  <td className="text-center bg-white text-black border border-gray-300">要確認</td>
                  <td className="text-center bg-white text-black border border-gray-300">9:00〜18:00（365日）</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">料金目安</th>
                  <td className="text-center text-primary font-bold bg-white border border-gray-300">状況により変動</td>
                  <td className="text-center text-primary font-bold bg-white border border-gray-300">25,000円〜</td>
                  <td className="text-center text-primary font-bold bg-white border border-gray-300">要見積もり</td>
                  <td className="text-center text-primary font-bold bg-white border border-gray-300">10,000円〜</td>
                  <td className="text-center text-primary font-bold bg-white border border-gray-300">要見積もり</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                  <td className="text-sm bg-white text-black border border-gray-300">最長10年保証</td>
                  <td className="text-sm bg-white text-black border border-gray-300">最長10年保証</td>
                  <td className="text-sm bg-white text-black border border-gray-300">要確認</td>
                  <td className="text-sm bg-white text-black border border-gray-300">最長5年保証</td>
                  <td className="text-sm bg-white text-black border border-gray-300">要確認</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 害虫の種類から探す */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center">害虫の種類から探す</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pests.map((pest) => (
              <Link
                key={pest.name}
                href={pest.href}
                className={`card ${pest.color} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="card-body items-center text-center">
                  <div className="text-6xl mb-4">{pest.icon}</div>
                  <h3 className="card-title text-2xl">{pest.name}駆除</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 地域から探す */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center">お住まいの地域から探す</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl">{area.name}</h3>
                  <p className="text-gray-700">地域別の料金相場と業者情報</p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-primary btn-sm">詳しく見る →</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* なぜ選ばれるのか */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center">
            なぜ害虫駆除110番が選ばれるのか
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary">
            害虫駆除のご相談は今すぐ無料で
          </h2>
          <p className="text-lg mb-8">
            専門の業者があなたの害虫問題を解決します。
            まずは料金相場を確認して、最適な業者を見つけましょう。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を見る
            </Link>
            <Link href="/faq" className="btn btn-lg btn-outline btn-neutral">
              よくある質問
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
