import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "東京の害虫駆除業者 | 地域別料金相場と選び方 - 害虫駆除110番",
  description: "東京都内の害虫駆除業者と料金相場を徹底比較。23区・多摩地域別の特徴、季節ごとの害虫カレンダー、信頼できる業者の選び方をご紹介します。",
};

export default function TokyoPage() {
  const topPests = [
    {
      rank: 1,
      name: "ゴキブリ",
      icon: "🪳",
      description: "繁華街や飲食店が多い東京では、ゴキブリ被害が最も多い。特にチャバネゴキブリが問題。",
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
      tokyo: "12,000〜18,000円/坪",
      national: "10,000〜15,000円/坪",
      note: "都心部はやや高め",
    },
    {
      pest: "ハチ駆除",
      tokyo: "15,000〜35,000円",
      national: "15,000〜30,000円",
      note: "高所作業が多く料金高め",
    },
    {
      pest: "ゴキブリ駆除",
      tokyo: "20,000〜35,000円",
      national: "15,000〜30,000円",
      note: "飲食店需要で料金やや高",
    },
    {
      pest: "ネズミ駆除",
      tokyo: "100,000〜180,000円",
      national: "80,000〜150,000円",
      note: "複雑な建物構造で高額",
    },
    {
      pest: "コウモリ駆除",
      tokyo: "120,000〜350,000円",
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
      name: "東京都福祉保健局",
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
      name: "東京都ペストコントロール協会",
      description: "業者紹介・相談",
      contact: "03-3254-0014",
      hours: "平日 9:00〜17:00",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🗼</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              東京の害虫駆除 完全ガイド
            </h1>
            <p className="text-xl mb-8">
              東京都内の害虫駆除業者と料金相場を徹底比較。
              23区・多摩地域別の特徴と信頼できる業者の選び方をご紹介します。
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              東京の料金相場を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 東京で多い害虫トップ5 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">東京で多い害虫トップ5</h2>
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

      {/* 東京の害虫駆除料金相場 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">東京の害虫駆除料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>害虫</th>
                  <th>東京の相場</th>
                  <th>全国平均</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold">{row.pest}</td>
                    <td className="text-primary font-semibold">{row.tokyo}</td>
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
              <h3 className="font-bold">東京の料金が高い理由</h3>
              <p className="text-sm">
                都心部の家賃・人件費の高さ、高層ビルや複雑な建物構造、
                飲食店など商業施設の需要が多いことが料金に影響しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 東京の害虫カレンダー */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">東京の害虫カレンダー</h2>
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

      {/* 東京都内の害虫駆除業者 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">東京都内の害虫駆除業者エリア</h2>
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

      {/* 東京都の相談窓口 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">東京都の害虫相談窓口</h2>
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
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            東京の害虫駆除は地域に詳しい業者へ
          </h2>
          <p className="text-lg mb-8">
            東京の気候や建物の特性を理解した業者なら、
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
