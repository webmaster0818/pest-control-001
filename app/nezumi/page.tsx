import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ネズミ駆除の完全ガイド | 確実な駆除と再発防止 - 害虫駆除110番",
  description: "ネズミ駆除の料金相場、業者の選び方、駆除方法を徹底解説。ドブネズミ、クマネズミ、ハツカネズミの種類別対策と再発防止策をご紹介します。",
};

export default function NezumiPage() {
  const types = [
    {
      name: "ドブネズミ",
      description: "日本最大のネズミ。体長20〜25cm。下水道や側溝に生息し、湿った場所を好む。",
      habitat: "下水道、側溝、地下室",
      features: ["体長: 20〜25cm", "色: 灰褐色", "性格: 獰猛"],
      color: "badge-error",
    },
    {
      name: "クマネズミ",
      description: "都市部に多い。体長15〜20cm。運動能力が高く、高所への侵入も得意。駆除が困難。",
      habitat: "天井裏、壁の中、ビル",
      features: ["体長: 15〜20cm", "色: 黒褐色", "性格: 警戒心強い"],
      color: "badge-warning",
    },
    {
      name: "ハツカネズミ",
      description: "最も小型のネズミ。体長6〜9cm。倉庫や物置に多く、わずかな隙間からも侵入。",
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
      description: "一度罠にかかりそうになると、同じ罠を避けるようになる。特にクマネズミは警戒心が強い。",
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
      description: "ネズミが嫌がる成分で追い出す。一時的な効果。",
      effectiveness: "低",
      pros: ["簡単に使用できる", "人体への影響が少ない"],
      cons: ["効果が一時的", "根本的な解決にならない"],
    },
    {
      name: "侵入口封鎖",
      description: "ネズミの侵入経路を完全に塞ぐ。最も重要な対策。",
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
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-gray-700 to-gray-900 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-35J2ODtMdPU?w=1920&h=1080&fit=crop"
          alt="ネズミ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🐭</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ネズミ駆除の完全ガイド
            </h1>
            <p className="text-xl mb-8">
              確実な駆除と再発防止で、ネズミの被害から家族と財産を守ります
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* ネズミの種類と被害 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">ネズミの種類</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((type) => (
              <div key={type.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">{type.name}</h3>
                  <div className={`badge ${type.color} badge-lg`}>{type.habitat}</div>
                  <p className="text-base-content/70 mt-4">{type.description}</p>
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
          <h2 className="text-3xl font-bold mb-8 text-center">ネズミによる被害</h2>
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
              <h3 className="font-bold">緊急：ネズミを見かけたら即座に対策を</h3>
              <p className="text-sm">ネズミは繁殖スピードが非常に速く、放置すると数ヶ月で数十匹に増えます。早期の駆除が被害を最小限に抑える鍵です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ネズミ駆除が難しい理由 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">ネズミ駆除が難しい理由</h2>
          <div className="space-y-6">
            {difficulties.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="badge badge-error badge-lg">{idx + 1}</div>
                    <h3 className="card-title text-xl">{item.title}</h3>
                  </div>
                  <p className="text-base-content/70 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 駆除方法 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">ネズミ駆除の方法</h2>
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
                  <p className="text-base-content/70 mt-4">{method.description}</p>
                  
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
          <h2 className="text-3xl font-bold mb-8 text-center">ネズミ駆除の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>物件タイプ</th>
                  <th>料金相場</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold">{row.type}</td>
                    <td className="text-primary font-semibold">{row.price}</td>
                    <td className="text-sm text-base-content/70">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-base-content/60 mt-4 text-center">
            ※ 被害の程度や建物の構造、侵入口の数によって料金は変動します。
          </p>
        </div>
      </section>

      {/* 業者選びのポイント */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">業者選びのポイント</h2>
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
                  <p className="text-xs">ネズミ駆除は1回の施工で完全に根絶することが困難です。最低でも1年以上の保証期間がある業者を選びましょう。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">地域別のネズミ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でネズミ駆除</h3>
                  <p className="text-base-content/70 text-sm">地域の料金相場と業者情報</p>
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
      <section className="py-16 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            ネズミ駆除は早期対策が重要
          </h2>
          <p className="text-lg mb-8">
            繁殖スピードが速いネズミは、放置すると被害が急速に拡大します。
            早めの駆除で、被害を最小限に抑えましょう。
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
