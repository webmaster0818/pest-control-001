import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "シロアリ駆除の完全ガイド | 料金相場・業者の選び方 - 害虫駆除110番",
  description: "シロアリ駆除の料金相場、業者の選び方、駆除方法を徹底解説。バリア工法とベイト工法の違い、見積もり時のチェックポイントをわかりやすく紹介します。",
};

export default function ShiroariPage() {
  const methods = [
    {
      name: "バリア工法",
      description: "薬剤を土壌や木部に散布してシロアリの侵入を防ぐ従来型の工法",
      pros: ["即効性が高い", "費用が比較的安い", "広範囲に対応可能"],
      cons: ["定期的な再処理が必要", "薬剤の臭いが気になる場合がある"],
      price: "8,000〜12,000円/坪",
    },
    {
      name: "ベイト工法",
      description: "毒餌を設置してシロアリの巣ごと駆除する最新工法",
      pros: ["巣ごと根絶できる", "薬剤散布不要で安全", "環境にやさしい"],
      cons: ["効果が出るまで時間がかかる", "費用がやや高い"],
      price: "15,000〜25,000円/坪",
    },
  ];

  const priceTable = [
    { area: "全国平均", price: "10,000〜15,000円/坪", note: "一般的な木造住宅の場合" },
    { area: "東京", price: "12,000〜18,000円/坪", note: "都心部はやや高め" },
    { area: "大阪", price: "10,000〜16,000円/坪", note: "標準的な相場" },
    { area: "名古屋", price: "9,000〜14,000円/坪", note: "比較的リーズナブル" },
  ];

  const checklist = [
    "日本しろあり対策協会に加盟しているか",
    "5年以上の保証があるか",
    "見積もりは無料か・詳細な内訳があるか",
    "施工実績が豊富か（写真付きで確認）",
    "アフターフォロー体制は整っているか",
  ];

  const faqs = [
    {
      q: "シロアリ駆除の費用はどのくらいかかりますか？",
      a: "一般的な木造住宅（30坪）の場合、バリア工法で30万円〜40万円、ベイト工法で50万円〜70万円程度が相場です。建物の状態や被害の程度によって変動します。",
    },
    {
      q: "シロアリ駆除の効果はどのくらい持続しますか？",
      a: "バリア工法の場合は約5年、ベイト工法の場合は継続的な監視により長期的な効果が期待できます。多くの業者が5年保証を提供しています。",
    },
    {
      q: "シロアリ駆除は自分でできますか？",
      a: "市販の薬剤を使った応急処置は可能ですが、完全な駆除には専門知識と技術が必要です。特に建物の構造部分への被害がある場合は、必ず専門業者に依頼してください。",
    },
    {
      q: "シロアリ駆除に最適な時期はありますか？",
      a: "シロアリは一年中活動しますが、活動が活発になる4月〜6月が発見しやすい時期です。ただし、被害を発見したらすぐに対処することをおすすめします。",
    },
  ];

  const areas = [
    { name: "東京", href: "/area/tokyo" },
    { name: "大阪", href: "/area/osaka" },
    { name: "名古屋", href: "/area/nagoya" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-amber-600 to-amber-800 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1530092376999-2431865aa8b0?w=1920&h=1080&fit=crop"
          alt="シロアリ駆除サービス"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🐜</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              シロアリ駆除の完全ガイド
            </h1>
            <p className="text-xl mb-8">
              料金相場から業者の選び方まで、シロアリ駆除に必要な情報をすべて解説します
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* シロアリとは */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">シロアリとは？見分け方と被害の実態</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">ヤマトシロアリ</h3>
                <p className="text-base-content/70">
                  日本全国に分布する最も一般的なシロアリ。湿った木材を好み、
                  床下や浴室周辺で被害が多い。
                </p>
                <div className="badge badge-warning">全国に分布</div>
              </div>
            </div>
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">イエシロアリ</h3>
                <p className="text-base-content/70">
                  主に温暖な地域に分布。巨大な巣を作り、被害が深刻化しやすい。
                  水を運ぶ能力があり、建物全体に被害が広がる。
                </p>
                <div className="badge badge-error">被害が深刻</div>
              </div>
            </div>
          </div>
          <div className="alert alert-warning mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>
              <strong>注意：</strong>シロアリ被害を放置すると、建物の倒壊リスクが高まります。
              少しでも疑わしい場合は、すぐに専門業者に相談してください。
            </span>
          </div>
        </div>
      </section>

      {/* 駆除方法 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">シロアリ駆除の方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((method) => (
              <div key={method.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl text-primary">{method.name}</h3>
                  <p className="text-base-content/70 mb-4">{method.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-lg mb-2 text-success">メリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {method.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm">{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-lg mb-2 text-error">デメリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {method.cons.map((con, idx) => (
                        <li key={idx} className="text-sm">{con}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="divider"></div>
                  <div className="text-center">
                    <p className="text-sm text-base-content/60">料金目安</p>
                    <p className="text-2xl font-bold text-primary">{method.price}</p>
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
          <h2 className="text-3xl font-bold mb-8 text-center">料金相場（2026年最新版）</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>地域</th>
                  <th>料金相場（坪単価）</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row) => (
                  <tr key={row.area}>
                    <td className="font-bold">{row.area}</td>
                    <td className="text-primary font-semibold">{row.price}</td>
                    <td className="text-sm text-base-content/70">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-base-content/60 mt-4 text-center">
            ※ 30坪の住宅で計算すると、全国平均で30万円〜45万円程度が目安です。
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
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">地域別のシロアリ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でシロアリ駆除</h3>
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

      {/* FAQ */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="collapse collapse-plus bg-white shadow-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">{faq.q}</div>
                <div className="collapse-content">
                  <p className="text-base-content/70">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            シロアリ駆除のご相談は今すぐ
          </h2>
          <p className="text-lg mb-8">
            お住まいの地域の料金相場を確認して、最適な業者を見つけましょう
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
