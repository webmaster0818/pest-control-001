import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ゴキブリ駆除の完全ガイド | 確実な駆除方法と予防策 - 害虫駆除110番",
  description: "ゴキブリ駆除の料金相場、業者の選び方、自力駆除との比較を徹底解説。再発防止策と予防方法で、ゴキブリのいない快適な生活を実現します。",
};

export default function GokiburiPage() {
  const types = [
    {
      name: "クロゴキブリ",
      description: "日本で最も一般的な大型ゴキブリ。体長3〜4cm。屋外から侵入することが多い。",
      habitat: "一般住宅、マンション",
      features: ["体長: 3〜4cm", "色: 黒褐色", "活動: 屋外・屋内"],
      color: "badge-neutral",
    },
    {
      name: "チャバネゴキブリ",
      description: "小型で繁殖力が高い。飲食店やビルに多く、駆除が困難。",
      habitat: "飲食店、ビル、集合住宅",
      features: ["体長: 1〜1.5cm", "色: 茶褐色", "活動: 屋内中心"],
      color: "badge-warning",
    },
    {
      name: "ワモンゴキブリ",
      description: "日本最大級のゴキブリ。主に温暖な地域に分布。",
      habitat: "沖縄、九州南部",
      features: ["体長: 4〜5cm", "色: 赤褐色", "活動: 温暖地域"],
      color: "badge-error",
    },
  ];

  const comparison = [
    {
      method: "自力駆除（市販グッズ）",
      cost: "数千円〜1万円",
      effectiveness: "軽度な被害には効果的",
      pros: ["コストが安い", "手軽に始められる", "自分のペースで対処可能"],
      cons: ["根絶は困難", "侵入口の特定が難しい", "再発しやすい"],
      recommended: "1〜2匹見かけた程度の初期段階",
    },
    {
      method: "業者駆除（プロの施工）",
      cost: "1.5万円〜5万円",
      effectiveness: "根本的な解決が可能",
      pros: ["侵入口を徹底封鎖", "薬剤の効果が高い", "保証期間あり"],
      cons: ["費用がかかる", "施工日程の調整が必要"],
      recommended: "頻繁に見かける、飲食店、確実に駆除したい場合",
    },
  ];

  const priceTable = [
    { type: "1R・1K（〜30㎡）", price: "15,000〜25,000円", note: "1回施工" },
    { type: "1DK・1LDK（30〜50㎡）", price: "20,000〜30,000円", note: "1回施工" },
    { type: "2LDK以上（50㎡〜）", price: "30,000〜50,000円", note: "1回施工" },
    { type: "飲食店（厨房あり）", price: "50,000〜100,000円", note: "定期メンテナンス含む" },
  ];

  const prevention = [
    {
      category: "掃除",
      tips: [
        "食べカスやゴミをすぐに片付ける",
        "シンク周りの水気を拭き取る",
        "冷蔵庫や家具の裏を定期的に掃除",
      ],
    },
    {
      category: "侵入経路の遮断",
      tips: [
        "排水口に網をかぶせる",
        "換気扇にフィルターを取り付ける",
        "玄関や窓の隙間をパテで埋める",
      ],
    },
    {
      category: "環境整備",
      tips: [
        "ダンボールは放置しない（産卵場所になる）",
        "ペットフードは密閉容器に保管",
        "ゴミは密閉して毎日捨てる",
      ],
    },
  ];

  const checklist = [
    "侵入口の特定・封鎖技術があるか",
    "使用薬剤の安全性（ペット・子供への配慮）",
    "保証期間は何ヶ月か（6ヶ月〜1年推奨）",
    "定期メンテナンスプランはあるか",
    "施工実績と口コミ評価は良好か",
  ];

  const areas = [
    { name: "東京", href: "/area/tokyo" },
    { name: "大阪", href: "/area/osaka" },
    { name: "名古屋", href: "/area/nagoya" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-red-700 to-red-900 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-2iNv2jXonQw?w=1920&h=1080&fit=crop"
          alt="ゴキブリ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🪳</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ゴキブリ駆除の完全ガイド
            </h1>
            <p className="text-xl mb-8">
              確実な駆除方法と再発防止策で、ゴキブリのいない快適な生活を実現します
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* ゴキブリの種類と生態 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ゴキブリの種類と生態</h2>
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

      {/* 自力駆除 vs 業者駆除 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">自力駆除 vs 業者駆除</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comparison.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl text-primary">{item.method}</h3>
                  <div className="badge badge-lg badge-outline">{item.cost}</div>
                  <p className="text-base-content/70 mt-4 font-semibold">{item.effectiveness}</p>
                  
                  <div className="mt-4">
                    <h4 className="font-bold text-lg mb-2 text-success">メリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {item.pros.map((pro, i) => (
                        <li key={i} className="text-sm">{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-bold text-lg mb-2 text-error">デメリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {item.cons.map((con, i) => (
                        <li key={i} className="text-sm">{con}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="divider"></div>
                  <div className="alert alert-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-sm">おすすめ：</h4>
                      <p className="text-xs">{item.recommended}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ゴキブリ駆除の料金相場</h2>
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
            ※ 被害の程度や建物の構造によって料金は変動します。複数の業者から見積もりを取ることをおすすめします。
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
            </div>
          </div>
        </div>
      </section>

      {/* 再発防止の予防策 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">再発させないための予防策</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prevention.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-primary">{item.category}</h3>
                  <ul className="space-y-3 mt-4">
                    {item.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-success text-xl">✓</span>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-warning mt-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-bold">重要：1匹見たら数十匹いる</h3>
              <p className="text-sm">ゴキブリは夜行性で隠れて生活しています。1匹見かけたら、すでに数十匹〜数百匹が潜んでいる可能性があります。早めの対策が重要です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のゴキブリ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でゴキブリ駆除</h3>
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
      <section className="py-16 px-4 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary">
            ゴキブリ駆除は早めの対策が重要
          </h2>
          <p className="text-lg mb-8">
            1匹見かけたら、すでに数十匹が潜んでいる可能性があります。
            お住まいの地域の料金相場を確認して、最適な業者を見つけましょう。
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
