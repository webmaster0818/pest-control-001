import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "害虫駆除の料金相場【2026年最新版】 - 害虫駆除110番",
  description: "害虫駆除の料金相場を徹底解説。シロアリ、ハチ、ゴキブリ、ネズミ、コウモリ別の料金目安、地域別の料金差、追加料金が発生するケースをご紹介します。",
};

export default function PricePage() {
  const pestPrices = [
    {
      pest: "シロアリ駆除",
      icon: "🐜",
      priceRange: "8,000〜15,000円/坪",
      average: "約12,000円/坪",
      details: "30坪の住宅で30万円〜45万円程度。工法により料金が変動。",
      link: "/shiroari",
    },
    {
      pest: "ハチ駆除",
      icon: "🐝",
      priceRange: "15,000〜50,000円",
      average: "約25,000円",
      details: "巣のサイズ・場所により変動。高所作業は追加料金あり。",
      link: "/hachi",
    },
    {
      pest: "ゴキブリ駆除",
      icon: "🪳",
      priceRange: "15,000〜50,000円",
      average: "約25,000円",
      details: "物件の広さと被害状況により変動。飲食店は高額になりやすい。",
      link: "/gokiburi",
    },
    {
      pest: "ネズミ駆除",
      icon: "🐭",
      priceRange: "80,000〜200,000円",
      average: "約120,000円",
      details: "侵入口封鎖と清掃含む。複数回施工が一般的。",
      link: "/nezumi",
    },
    {
      pest: "コウモリ駆除",
      icon: "🦇",
      priceRange: "100,000〜350,000円",
      average: "約200,000円",
      details: "追い出し・侵入口封鎖・清掃の総合費用。法律遵守が必須。",
      link: "/koumori",
    },
  ];

  const includedServices = [
    { service: "現地調査・診断", included: "◎", note: "多くの業者で無料" },
    { service: "薬剤散布・設置", included: "◎", note: "基本料金に含まれる" },
    { service: "作業員の人件費", included: "◎", note: "基本料金に含まれる" },
    { service: "駆除保証（1年）", included: "○", note: "業者により異なる" },
    { service: "侵入口封鎖", included: "△", note: "別途料金の場合あり" },
    { service: "清掃・消毒", included: "△", note: "別途料金の場合あり" },
    { service: "高所作業費", included: "×", note: "追加料金が一般的" },
    { service: "出張費（遠方）", included: "×", note: "距離により追加" },
  ];

  const additionalCases = [
    {
      case: "高所作業（2階以上、屋根裏）",
      fee: "+10,000〜30,000円",
      reason: "特殊機材や安全装備が必要",
    },
    {
      case: "深夜・早朝作業",
      fee: "+20%〜50%",
      reason: "割増料金が発生",
    },
    {
      case: "被害範囲が広い",
      fee: "変動",
      reason: "作業量・薬剤量が増加",
    },
    {
      case: "侵入口が多数",
      fee: "+10,000〜50,000円/箇所",
      reason: "封鎖作業が増加",
    },
    {
      case: "清掃・消毒追加",
      fee: "+20,000〜100,000円",
      reason: "糞尿処理や消毒作業",
    },
  ];

  const savingTips = [
    {
      tip: "複数業者の相見積もり",
      description: "最低3社から見積もりを取り、料金とサービス内容を比較する。",
      effect: "10〜30%の節約",
    },
    {
      tip: "閑散期に依頼",
      description: "冬季（12月〜2月）は害虫活動が少なく、業者も空いているため料金交渉しやすい。",
      effect: "5〜15%の節約",
    },
    {
      tip: "定期契約の検討",
      description: "飲食店や複数物件の場合、年間契約で割引が適用される。",
      effect: "15〜25%の節約",
    },
    {
      tip: "早期発見・早期対応",
      description: "被害が軽微なうちに駆除すれば、作業範囲が小さく済む。",
      effect: "大幅な節約",
    },
  ];

  const warningSignspests = [
    "見積もりを出さずに作業を開始しようとする",
    "電話だけで確定料金を提示する（現地調査なし）",
    "不安を煽って即日契約を迫る",
    "作業後に追加料金を大量請求する",
    "保証内容が曖昧・書面がない",
    "会社情報が不明確（住所・電話番号が不明）",
  ];

  const regionalPrices = [
    { region: "東京", level: "やや高め", note: "都心部の人件費・家賃が影響", multiplier: "110-120%" },
    { region: "大阪", level: "標準", note: "全国平均に近い料金設定", multiplier: "100-110%" },
    { region: "名古屋", level: "やや安め", note: "競争が激しくリーズナブル", multiplier: "90-100%" },
    { region: "地方都市", level: "安め", note: "人件費が比較的低い", multiplier: "80-95%" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">💰</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              害虫駆除の料金相場【2026年最新版】
            </h1>
            <p className="text-xl mb-8">
              適正価格を知って、安心して業者選びを。
              害虫別・地域別の料金相場を徹底解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 害虫別の料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">害虫別の料金相場</h2>
          <div className="space-y-6">
            {pestPrices.map((item) => (
              <div key={item.pest} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="card-title text-2xl mb-2">{item.pest}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-base-content/60">料金範囲:</span>
                          <p className="text-primary font-bold text-xl">{item.priceRange}</p>
                        </div>
                        <div>
                          <span className="text-sm text-base-content/60">平均相場:</span>
                          <p className="font-bold text-xl">{item.average}</p>
                        </div>
                      </div>
                      <p className="text-base-content/70 text-sm mb-4">{item.details}</p>
                      <Link href={item.link} className="btn btn-primary btn-sm">
                        {item.pest}の詳細を見る →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金に含まれるもの・含まれないもの */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">料金に含まれるもの・含まれないもの</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>サービス内容</th>
                  <th className="text-center">含まれる</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {includedServices.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold">{row.service}</td>
                    <td className="text-center text-2xl">
                      {row.included === "◎" && <span className="text-success">◎</span>}
                      {row.included === "○" && <span className="text-info">○</span>}
                      {row.included === "△" && <span className="text-warning">△</span>}
                      {row.included === "×" && <span className="text-error">×</span>}
                    </td>
                    <td className="text-sm text-base-content/70">{row.note}</td>
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
              <h3 className="font-bold">見積もり時の確認ポイント</h3>
              <p className="text-sm">
                見積書に「どこまでが基本料金に含まれるか」「どんな場合に追加料金が発生するか」を
                明記してもらいましょう。曖昧な見積書は要注意です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 追加料金が発生するケース */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">追加料金が発生するケース</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalCases.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-lg">{item.case}</h3>
                  <div className="badge badge-warning badge-lg">{item.fee}</div>
                  <p className="text-base-content/70 text-sm mt-2">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 地域別の料金差 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">地域別の料金差</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>地域</th>
                  <th>料金レベル</th>
                  <th>全国平均比</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {regionalPrices.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold">{row.region}</td>
                    <td>
                      <span className={`badge ${
                        row.level === "やや高め" ? "badge-error" :
                        row.level === "標準" ? "badge-info" :
                        "badge-success"
                      }`}>
                        {row.level}
                      </span>
                    </td>
                    <td className="font-semibold">{row.multiplier}</td>
                    <td className="text-sm text-base-content/70">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 料金を安く抑えるコツ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">料金を安く抑えるコツ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savingTips.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="badge badge-success badge-lg mb-4">{item.effect}</div>
                  <h3 className="card-title text-xl">{item.tip}</h3>
                  <p className="text-base-content/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 悪徳業者の見分け方 */}
      <section className="py-16 px-4 bg-error/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-error">
            高額請求に注意！悪徳業者の見分け方
          </h2>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">こんな業者は要注意⚠️</h3>
              <ul className="space-y-3">
                {warningSignspests.map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-error text-2xl">🚨</span>
                    <span className="text-lg">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="divider"></div>
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold">トラブル回避のために</h4>
                  <p className="text-sm">
                    必ず書面で見積もりを取り、作業内容・料金・保証内容を確認してから契約しましょう。
                    口頭での約束は証拠になりません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            適正価格で安心の害虫駆除を
          </h2>
          <p className="text-lg mb-8">
            料金相場を知って、信頼できる業者を選びましょう。
            まずは無料見積もりから。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/guide" className="btn btn-lg btn-neutral">
              業者選びガイド
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
