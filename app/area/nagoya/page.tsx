import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "名古屋の害虫駆除業者 | 地域別料金相場と選び方 - 害虫駆除110番",
  description: "名古屋・愛知県内の害虫駆除業者と料金相場を徹底比較。名古屋市内・豊田・岡崎・三河地域別の特徴、季節ごとの害虫カレンダー、信頼できる業者の選び方をご紹介します。",
};

export default function NagoyaPage() {
  const topPests = [
    {
      rank: 1,
      name: "シロアリ",
      icon: "🐜",
      description: "名古屋は湿度が高く、シロアリ被害が特に多い。木造住宅での被害が深刻。",
      areas: "緑区、天白区、名東区などの住宅街",
      link: "/shiroari",
    },
    {
      rank: 2,
      name: "ゴキブリ",
      icon: "🪳",
      description: "繁華街や飲食店でゴキブリ被害が多発。湿気の多い気候で繁殖しやすい。",
      areas: "中区、中村区、熱田区などの繁華街",
      link: "/gokiburi",
    },
    {
      rank: 3,
      name: "ハチ",
      icon: "🐝",
      description: "郊外の住宅地や公園周辺でスズメバチ・アシナガバチの巣が発見される。",
      areas: "千種区、名東区、守山区などの郊外",
      link: "/hachi",
    },
    {
      rank: 4,
      name: "ネズミ",
      icon: "🐭",
      description: "古い建物や飲食店街でネズミ被害が報告されている。",
      areas: "中村区、中区、昭和区などの商業地",
      link: "/nezumi",
    },
    {
      rank: 5,
      name: "ムカデ",
      icon: "🐛",
      description: "山沿いや緑の多いエリアでムカデが侵入。梅雨時期に特に多い。",
      areas: "緑区、守山区、天白区などの山沿い",
      link: "/",
    },
  ];

  const priceComparison = [
    {
      pest: "シロアリ駆除",
      nagoya: "9,000〜14,000円/坪",
      national: "10,000〜15,000円/坪",
      note: "比較的リーズナブル",
    },
    {
      pest: "ハチ駆除",
      nagoya: "14,000〜28,000円",
      national: "15,000〜30,000円",
      note: "全国平均よりやや安",
    },
    {
      pest: "ゴキブリ駆除",
      nagoya: "16,000〜30,000円",
      national: "15,000〜30,000円",
      note: "標準的な相場",
    },
    {
      pest: "ネズミ駆除",
      nagoya: "85,000〜150,000円",
      national: "80,000〜150,000円",
      note: "標準的な相場",
    },
    {
      pest: "コウモリ駆除",
      nagoya: "105,000〜310,000円",
      national: "100,000〜300,000円",
      note: "標準的な相場",
    },
  ];

  const seasonCalendar = [
    {
      season: "春（3月〜5月）",
      pests: ["シロアリの羽アリ大量発生", "ゴキブリの活動開始", "ムカデの侵入開始"],
      advice: "湿度が高くなる前にシロアリ点検を。羽アリを見かけたら即座に対処。",
    },
    {
      season: "夏（6月〜8月）",
      pests: ["ゴキブリのピーク", "ハチの攻撃性増加", "ムカデの活動活発"],
      advice: "梅雨の湿気でシロアリ・ゴキブリ被害が急増。早期対策が重要。",
    },
    {
      season: "秋（9月〜11月）",
      pests: ["ネズミの侵入増加", "ハチの活動最盛期", "シロアリ点検の好機"],
      advice: "ネズミが暖かい場所を求めて侵入。秋はシロアリ点検に最適な時期。",
    },
    {
      season: "冬（12月〜2月）",
      pests: ["ネズミ被害継続", "暖房でゴキブリ活動", "害虫全般減少"],
      advice: "暖房のある場所ではゴキブリが活動。ネズミ駆除のベストシーズン。",
    },
  ];

  const areas = [
    {
      name: "名古屋市内",
      description: "16区全域をカバー。住宅地から商業施設まで幅広く対応。",
      features: ["即日対応可能", "夜間作業対応", "湿気対策ノウハウ"],
    },
    {
      name: "豊田市・岡崎市",
      description: "西三河地域の主要都市。工場・倉庫の駆除実績豊富。",
      features: ["地域密着", "工場対応", "長期保証"],
    },
    {
      name: "三河地域",
      description: "豊橋市、蒲郡市など東三河エリアに対応。",
      features: ["出張対応", "農地・山林対応", "アフターフォロー充実"],
    },
  ];

  const consultations = [
    {
      name: "愛知県健康福祉部",
      description: "害虫相談窓口",
      contact: "052-954-6999",
      hours: "平日 9:00〜17:00",
    },
    {
      name: "名古屋市保健所",
      description: "名古屋市内の相談・指導",
      contact: "052-972-2631",
      hours: "平日 8:45〜17:15",
    },
    {
      name: "愛知県ペストコントロール協会",
      description: "業者紹介・相談",
      contact: "052-682-3266",
      hours: "平日 9:00〜17:00",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-green-600 to-green-800 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-JpcnBpFRBt4?w=1920&h=1080&fit=crop"
          alt="名古屋の害虫駆除サービス"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🏰</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              名古屋の害虫駆除 完全ガイド
            </h1>
            <p className="text-xl mb-8">
              名古屋・愛知県内の害虫駆除業者と料金相場を徹底比較。
              名古屋市内・豊田・岡崎・三河地域別の特徴と信頼できる業者の選び方をご紹介します。
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              名古屋の料金相場を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 名古屋で多い害虫トップ5 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">名古屋で多い害虫トップ5</h2>
          <div className="space-y-6">
            {topPests.map((pest) => (
              <div key={pest.rank} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-primary badge-lg">第{pest.rank}位</div>
                    <div className="text-5xl">{pest.icon}</div>
                    <div className="flex-1">
                      <h3 className="card-title text-2xl mb-2">{pest.name}</h3>
                      <p className="text-base-content/70 mb-2">{pest.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="badge badge-outline">多発エリア:</span>
                        <span className="text-base-content/60">{pest.areas}</span>
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
          <div className="alert alert-warning mt-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-bold">名古屋の気候とシロアリリスク</h3>
              <p className="text-sm">
                名古屋は湿度が高く、シロアリの活動に適した環境です。
                特に梅雨時期は要注意。定期的な点検をおすすめします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 名古屋の害虫駆除料金相場 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">名古屋の害虫駆除料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>害虫</th>
                  <th>名古屋の相場</th>
                  <th>全国平均</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold">{row.pest}</td>
                    <td className="text-primary font-semibold">{row.nagoya}</td>
                    <td className="text-base-content/70">{row.national}</td>
                    <td className="text-sm text-base-content/60">{row.note}</td>
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
              <h3 className="font-bold">名古屋の料金の特徴</h3>
              <p className="text-sm">
                名古屋は東京・大阪と比較して料金がリーズナブル。
                ただし、湿気が多い気候のため、シロアリ被害が深刻化しやすく、
                早期発見・早期対処が重要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 名古屋の害虫カレンダー */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">名古屋の害虫カレンダー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonCalendar.map((season, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl">{season.season}</h3>
                  <ul className="space-y-2 mt-4">
                    {season.pests.map((pest, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-error text-xl">•</span>
                        <span className="text-sm">{pest}</span>
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

      {/* 愛知県内の害虫駆除業者 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">愛知県内の害虫駆除業者エリア</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl">{area.name}</h3>
                  <p className="text-base-content/70 text-sm">{area.description}</p>
                  <div className="divider"></div>
                  <ul className="space-y-2">
                    {area.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-success text-xl">✓</span>
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

      {/* 愛知県の相談窓口 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">愛知県の害虫相談窓口</h2>
          <div className="space-y-4">
            {consultations.map((org, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📞</div>
                    <div className="flex-1">
                      <h3 className="card-title text-lg">{org.name}</h3>
                      <p className="text-base-content/70 text-sm mb-2">{org.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                          <span className="text-xs text-base-content/60">電話番号:</span>
                          <p className="font-semibold">{org.contact}</p>
                        </div>
                        <div>
                          <span className="text-xs text-base-content/60">受付時間:</span>
                          <p className="font-semibold text-sm">{org.hours}</p>
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
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary">
            名古屋の害虫駆除は地域に詳しい業者へ
          </h2>
          <p className="text-lg mb-8">
            名古屋の湿度の高い気候を理解した業者なら、
            シロアリなど湿気を好む害虫への効果的な対策が可能です。
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
