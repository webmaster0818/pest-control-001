import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "大阪の害虫駆除業者 | 地域別料金相場と選び方 - 害虫駆除110番",
  description: "大阪府内の害虫駆除業者と料金相場を徹底比較。大阪市内・北摂・南大阪別の特徴、季節ごとの害虫カレンダー、信頼できる業者の選び方をご紹介します。",
};

export default function OsakaPage() {
  const topPests = [
    {
      rank: 1,
      name: "ゴキブリ",
      icon: "🪳",
      description: "商業施設や飲食店が多い大阪では、ゴキブリ被害が最も多い。特に繁華街で深刻。",
      areas: "中央区、北区、浪速区などの繁華街",
      link: "/gokiburi",
    },
    {
      rank: 2,
      name: "シロアリ",
      icon: "🐜",
      description: "古い木造住宅が多く、シロアリ被害が多発。梅雨時期の羽アリに特に注意。",
      areas: "東大阪市、堺市、豊中市などの住宅街",
      link: "/shiroari",
    },
    {
      rank: 3,
      name: "ハチ",
      icon: "🐝",
      description: "郊外の住宅地でスズメバチ・アシナガバチの巣が発見される。",
      areas: "吹田市、豊中市、箕面市などの郊外",
      link: "/hachi",
    },
    {
      rank: 4,
      name: "ネズミ",
      icon: "🐭",
      description: "繁華街や古いビルでネズミ被害が増加。飲食店街で特に多い。",
      areas: "中央区、北区、西成区などの繁華街",
      link: "/nezumi",
    },
    {
      rank: 5,
      name: "ムカデ",
      icon: "🐛",
      description: "山沿いの住宅地で春〜秋にかけてムカデが侵入。毒性あり。",
      areas: "箕面市、池田市、能勢町などの山沿い",
      link: "/",
    },
  ];

  const priceComparison = [
    {
      pest: "シロアリ駆除",
      osaka: "10,000〜16,000円/坪",
      national: "10,000〜15,000円/坪",
      note: "標準的な相場",
    },
    {
      pest: "ハチ駆除",
      osaka: "15,000〜30,000円",
      national: "15,000〜30,000円",
      note: "全国平均並み",
    },
    {
      pest: "ゴキブリ駆除",
      osaka: "18,000〜32,000円",
      national: "15,000〜30,000円",
      note: "飲食店需要でやや高",
    },
    {
      pest: "ネズミ駆除",
      osaka: "90,000〜160,000円",
      national: "80,000〜150,000円",
      note: "古い建物が多く料金高め",
    },
    {
      pest: "コウモリ駆除",
      osaka: "110,000〜320,000円",
      national: "100,000〜300,000円",
      note: "標準的な相場",
    },
  ];

  const seasonCalendar = [
    {
      season: "春（3月〜5月）",
      pests: ["シロアリの羽アリ大量発生", "ゴキブリの活動開始", "ムカデの侵入開始"],
      advice: "シロアリの羽アリが特に多い時期。見かけたらすぐに点検を。",
    },
    {
      season: "夏（6月〜8月）",
      pests: ["ゴキブリのピーク", "ハチの攻撃性増加", "ムカデの活動活発"],
      advice: "梅雨明けの害虫被害が最多。湿気対策とゴキブリ駆除が重要。",
    },
    {
      season: "秋（9月〜11月）",
      pests: ["ネズミの侵入増加", "ハチの活動最盛期", "ムカデの侵入継続"],
      advice: "ネズミが越冬場所を求めて侵入。侵入口の早期封鎖が必須。",
    },
    {
      season: "冬（12月〜2月）",
      pests: ["ネズミ被害継続", "暖房でゴキブリ活動", "害虫全般減少"],
      advice: "暖房のある場所ではゴキブリが活動。ネズミ駆除のベストシーズン。",
    },
  ];

  const areas = [
    {
      name: "大阪市内",
      description: "都心部から住宅街まで幅広く対応。飲食店・商業施設の駆除実績豊富。",
      features: ["即日対応可能", "夜間作業対応", "商業施設専門"],
    },
    {
      name: "北摂地域",
      description: "豊中市、吹田市、箕面市など北摂エリア全域をカバー。住宅駆除に強い。",
      features: ["地域密着", "アフターフォロー充実", "山沿い対応"],
    },
    {
      name: "南大阪",
      description: "堺市、岸和田市、泉佐野市など南大阪エリアに対応。",
      features: ["出張対応", "工場・倉庫対応", "長期保証"],
    },
  ];

  const consultations = [
    {
      name: "大阪府健康医療部",
      description: "害虫相談窓口",
      contact: "06-6944-6705",
      hours: "平日 9:00〜17:45",
    },
    {
      name: "各市町村保健所",
      description: "地域ごとの相談・指導",
      contact: "各市町村HP参照",
      hours: "平日 9:00〜17:30（市町村により異なる）",
    },
    {
      name: "大阪府ペストコントロール協会",
      description: "業者紹介・相談",
      contact: "06-6762-7711",
      hours: "平日 9:00〜17:00",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-orange-600 to-orange-800 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1920&h=1080&fit=crop"
          alt="大阪の害虫駆除サービス"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🏯</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              大阪の害虫駆除 完全ガイド
            </h1>
            <p className="text-xl mb-8">
              大阪府内の害虫駆除業者と料金相場を徹底比較。
              大阪市内・北摂・南大阪別の特徴と信頼できる業者の選び方をご紹介します。
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              大阪の料金相場を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 大阪で多い害虫トップ5 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">大阪で多い害虫トップ5</h2>
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
        </div>
      </section>

      {/* 大阪の害虫駆除料金相場 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">大阪の害虫駆除料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>害虫</th>
                  <th>大阪の相場</th>
                  <th>全国平均</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold">{row.pest}</td>
                    <td className="text-primary font-semibold">{row.osaka}</td>
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
              <h3 className="font-bold">大阪の料金の特徴</h3>
              <p className="text-sm">
                大阪は全国平均と比較して標準的な料金設定。
                ただし、飲食店が多い繁華街や古い木造住宅が多いエリアでは、
                被害が深刻化しやすく料金がやや高めになる傾向があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 大阪の害虫カレンダー */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">大阪の害虫カレンダー</h2>
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

      {/* 大阪府内の害虫駆除業者 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">大阪府内の害虫駆除業者エリア</h2>
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

      {/* 大阪府の相談窓口 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">大阪府の害虫相談窓口</h2>
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
      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            大阪の害虫駆除は地域に詳しい業者へ
          </h2>
          <p className="text-lg mb-8">
            大阪の気候や建物の特性を理解した業者なら、
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
