import Link from "next/link";
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
      <section className="hero min-h-[50vh] bg-gradient-to-r from-purple-700 to-purple-900 text-white">
        <div className="hero-content text-center">
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

      {/* コウモリの生態と被害 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">コウモリの被害</h2>
          <div className="card bg-white shadow-xl mb-8">
            <div className="card-body">
              <h3 className="card-title text-2xl">アブラコウモリ（イエコウモリ）</h3>
              <p className="text-base-content/70">
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
                  <p className="text-base-content/70 mt-4 text-sm">{damage.description}</p>
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
          <h2 className="text-3xl font-bold mb-8 text-center">コウモリ駆除と法律</h2>
          <div className="space-y-6">
            {lawPoints.map((point, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{point.icon}</div>
                    <h3 className="card-title text-xl">{point.title}</h3>
                  </div>
                  <p className="text-base-content/70 mt-4">{point.description}</p>
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
          <h2 className="text-3xl font-bold mb-8 text-center">コウモリの追い出し方法（4ステップ）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methods.map((method) => (
              <div key={method.step} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="badge badge-primary badge-lg mb-4">ステップ {method.step}</div>
                  <h3 className="card-title text-xl">{method.title}</h3>
                  <p className="text-base-content/70">{method.description}</p>
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
          <h2 className="text-3xl font-bold mb-8 text-center">コウモリ駆除の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>作業項目</th>
                  <th>料金相場</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold">{row.item}</td>
                    <td className="text-primary font-semibold">{row.price}</td>
                    <td className="text-sm text-base-content/70">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-base-content/60 mt-4 text-center">
            ※ 被害の程度や建物の構造により料金は変動します。侵入口の数が多い場合は追加費用が発生します。
          </p>
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
          <h2 className="text-3xl font-bold mb-8 text-center">地域別のコウモリ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でコウモリ駆除</h3>
                  <p className="text-base-content/70 text-sm">法律知識のある専門業者情報</p>
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
          <h2 className="text-3xl font-bold mb-6">
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
