import Link from "next/link";

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
      <section className="hero min-h-[70vh] bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="hero-content text-center">
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

      {/* 害虫の種類から探す */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">害虫の種類から探す</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">お住まいの地域から探す</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl">{area.name}</h3>
                  <p className="text-base-content/70">地域別の料金相場と業者情報</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">
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
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
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
