import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ハチ駆除の完全ガイド | スズメバチ・アシナガバチ対策 - 害虫駆除110番",
  description: "スズメバチ、アシナガバチ、ミツバチの駆除料金相場と業者の選び方。緊急時の対処法、季節別ハチ対策カレンダーを詳しく解説します。",
};

export default function HachiPage() {
  const beeTypes = [
    {
      name: "スズメバチ",
      danger: "非常に危険",
      description: "攻撃性が高く、刺されると重症化しやすい。巣に近づくだけで攻撃されることも。",
      features: ["体長: 2〜4cm", "攻撃性: 極めて高い", "巣の場所: 軒下、屋根裏、土中"],
      color: "badge-error",
    },
    {
      name: "アシナガバチ",
      danger: "危険",
      description: "スズメバチより攻撃性は低いが、巣を刺激すると集団で攻撃。",
      features: ["体長: 1.5〜2.5cm", "攻撃性: 中程度", "巣の場所: 軒下、ベランダ"],
      color: "badge-warning",
    },
    {
      name: "ミツバチ",
      danger: "注意",
      description: "おとなしい性格だが、巣を守るために攻撃することも。アレルギー反応に注意。",
      features: ["体長: 1〜1.5cm", "攻撃性: 低い", "巣の場所: 樹木の空洞、屋根裏"],
      color: "badge-info",
    },
  ];

  const emergencySteps = [
    {
      step: "1",
      title: "すぐに現場から離れる",
      description: "ハチが追ってこない距離（20m以上）まで素早く移動。手で払おうとしない。",
    },
    {
      step: "2",
      title: "刺された部位を冷やす",
      description: "流水で患部を洗い流し、氷や冷水で冷やす。毒を絞り出すように。",
    },
    {
      step: "3",
      title: "アレルギー症状を確認",
      description: "呼吸困難、めまい、全身の発疹などアナフィラキシー症状が出たらすぐに救急車を呼ぶ。",
    },
  ];

  const priceTable = [
    { size: "初期の小さな巣（直径10cm未満）", price: "8,000〜15,000円", note: "4月〜6月頃" },
    { size: "中型の巣（直径10〜30cm）", price: "15,000〜30,000円", note: "7月〜8月頃" },
    { size: "大型の巣（直径30cm以上）", price: "30,000〜50,000円+", note: "9月〜10月頃" },
    { size: "高所作業（2階以上、屋根裏）", price: "+10,000〜20,000円", note: "追加料金" },
  ];

  const seasonCalendar = [
    {
      season: "春（4〜5月）",
      activity: "女王バチの活動開始",
      advice: "巣作りの初期段階。この時期の駆除が最も安全で低コスト。",
      risk: "低",
    },
    {
      season: "夏（6〜8月）",
      activity: "巣の成長ピーク",
      advice: "働きバチが増え、巣が急速に大きくなる。駆除は専門業者に依頼を。",
      risk: "中",
    },
    {
      season: "秋（9〜10月）",
      activity: "攻撃性が最も高い",
      advice: "新女王バチの誕生期。巣が最大になり、ハチの数も最多。絶対に自分で駆除しない。",
      risk: "高",
    },
    {
      season: "冬（11〜3月）",
      activity: "活動停止",
      advice: "ほとんどのハチが死滅。空の巣の撤去に最適な時期。",
      risk: "低",
    },
  ];

  const checklist = [
    "即日対応可能か（緊急性が高いため）",
    "防護服と専用機材を完備しているか",
    "高所作業の経験が豊富か",
    "再発時の保証はあるか（1年以上推奨）",
    "自治体の補助金制度について案内があるか",
  ];

  const areas = [
    { name: "東京", href: "/area/tokyo" },
    { name: "大阪", href: "/area/osaka" },
    { name: "名古屋", href: "/area/nagoya" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-H1c3VbKMAuo?w=1920&h=1080&fit=crop"
          alt="ハチ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🐝</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ハチ駆除の完全ガイド
            </h1>
            <p className="text-xl mb-8">
              スズメバチ・アシナガバチの危険性から駆除方法まで、安全な対処法をご紹介します
            </p>
            <div className="alert alert-error shadow-lg max-w-2xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold">緊急：ハチの巣を見つけたら絶対に自分で駆除しないでください</span>
            </div>
          </div>
        </div>
      </section>

      {/* ハチの種類と危険性 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">ハチの種類と危険性</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beeTypes.map((bee) => (
              <div key={bee.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">{bee.name}</h3>
                  <div className={`badge ${bee.color} badge-lg`}>{bee.danger}</div>
                  <p className="text-base-content/70 mt-4">{bee.description}</p>
                  <div className="divider"></div>
                  <ul className="space-y-2">
                    {bee.features.map((feature, idx) => (
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

      {/* 緊急対処法 */}
      <section className="py-16 px-4 bg-error/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-error">
            緊急！ハチに刺された時の対処法
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencySteps.map((step) => (
              <div key={step.step} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="badge badge-error badge-lg mb-4">ステップ {step.step}</div>
                  <h3 className="card-title text-xl">{step.title}</h3>
                  <p className="text-base-content/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-error mt-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-bold">アナフィラキシーショックの症状</h3>
              <p className="text-sm">呼吸困難、めまい、全身の発疹、吐き気などの症状が出たら、すぐに救急車（119番）を呼んでください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ハチの巣を見つけたら */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">ハチの巣を見つけたら</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-error text-error-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">❌ やってはいけないこと</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">🚫</span>
                    <span>自分で駆除しようとする</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">🚫</span>
                    <span>巣に近づく、刺激する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">🚫</span>
                    <span>市販のスプレーを使う（興奮させる）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">🚫</span>
                    <span>水をかける、棒でつつく</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card bg-success text-success-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">✅ すべきこと</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">✅</span>
                    <span>巣から最低10m以上離れる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">✅</span>
                    <span>すぐに専門業者に連絡</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">✅</span>
                    <span>家族や近隣に注意喚起</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">✅</span>
                    <span>窓やドアを閉めて侵入を防ぐ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">ハチ駆除の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>巣のサイズ・場所</th>
                  <th>料金相場</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold">{row.size}</td>
                    <td className="text-primary font-semibold">{row.price}</td>
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
            <span>
              <strong>自治体の補助金制度：</strong>スズメバチ駆除には自治体から補助金が出る場合があります。
              お住まいの市区町村にお問い合わせください。
            </span>
          </div>
        </div>
      </section>

      {/* 季節別対策カレンダー */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">季節別ハチ対策カレンダー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonCalendar.map((season) => (
              <div key={season.season} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="card-title text-xl">{season.season}</h3>
                    <div className={`badge ${
                      season.risk === "高" ? "badge-error" :
                      season.risk === "中" ? "badge-warning" :
                      "badge-success"
                    } badge-lg`}>
                      危険度: {season.risk}
                    </div>
                  </div>
                  <p className="font-bold text-primary mb-2">{season.activity}</p>
                  <p className="text-base-content/70">{season.advice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 業者選びのポイント */}
      <section className="py-16 px-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">地域別のハチ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でハチ駆除</h3>
                  <p className="text-base-content/70 text-sm">即日対応可能な業者情報</p>
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
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            ハチ駆除は今すぐプロに相談を
          </h2>
          <p className="text-lg mb-8">
            緊急性の高いハチ駆除は、即日対応可能な業者へ。
            お住まいの地域の料金相場を確認しましょう。
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
