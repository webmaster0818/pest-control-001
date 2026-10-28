import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from "@/app/components/Breadcrumb";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

export const metadata: Metadata = {
  alternates: { canonical: "https://gaichu-pro.com/faq" },
  title: "害虫駆除のよくある質問｜見積もり・追加料金・作業時間",
  description: "害虫駆除に関するよくある質問と回答をまとめています。見積もりの費用、追加料金やキャンセル料、作業時間や立ち会いの要否など、業者に依頼する前に確認すべき点をご説明します。",
  openGraph: {
    title: "害虫駆除のよくある質問｜見積もり・追加料金・作業時間",
    description: "害虫駆除に関するよくある質問と回答をまとめています。見積もりの費用、追加料金やキャンセル料、作業時間や立ち会いの要否など、業者に依頼する前に確認すべき点をご説明します。",
    url: "https://gaichu-pro.com/faq",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function FAQPage() {
  const faqs = {
    general: [
      {
        q: '見積もりは無料ですか？',
        a: 'ほとんどの業者が現地調査・見積もりを無料で行っています。ただし、一部の業者では出張費がかかる場合もあるため、事前に確認することをおすすめします。'
      },
      {
        q: '追加料金が発生することはありますか？',
        a: '見積もり時に想定できなかった被害が見つかった場合など、追加料金が発生する可能性があります。契約前に、追加料金の条件を必ずご確認ください。'
      },
      {
        q: 'キャンセル料はかかりますか？',
        a: 'キャンセルのタイミングによって異なります。一般的には施工日の3日前まで無料で、それ以降はキャンセル料が発生するケースが多くあります。契約時にご確認ください。'
      },
      {
        q: '急な依頼でも対応してもらえますか？',
        a: '即日対応が可能な業者もあります。特にハチ駆除などの緊急性の高いケースに備えて、24時間対応している業者もあります。'
      }
    ],
    work: [
      {
        q: '作業時間はどのくらいですか？',
        a: '害虫の種類や被害の規模によって異なります。シロアリ駆除なら半日～1日、ハチの巣駆除なら1～2時間、ゴキブリ駆除なら1～3時間程度が目安です。'
      },
      {
        q: '立ち会いは必要ですか？',
        a: '施工には原則として立ち会いが必要です。ただし、作業の開始時と終了時のみの立ち会いで済む場合もあります。事前に業者へご相談ください。'
      },
      {
        q: 'ペットや小さい子供がいても大丈夫ですか？',
        a: '施工中は、ペットやお子様を別の部屋に移動させるか、外出していただく必要があります。使用する薬剤の安全性については、事前に業者へご確認ください。'
      },
      {
        q: '家具や荷物は動かす必要がありますか？',
        a: '害虫の種類によって異なります。シロアリ駆除では家具の移動が必要な場合がありますが、ゴキブリ駆除では基本的に不要です。事前に業者へご確認ください。'
      },
      {
        q: '施工後すぐに部屋を使えますか？',
        a: '使用する薬剤によって異なりますが、一般的には換気後（30分～2時間程度）に使用可能です。詳細は施工時に業者から説明があります。'
      }
    ],
    warranty: [
      {
        q: '再発した場合はどうなりますか？',
        a: '保証期間内であれば、無料で再施工を受けられることが一般的です。ただし、保証の条件は業者によって異なるため、契約前に必ずご確認ください。'
      },
      {
        q: '保証期間はどのくらいですか？',
        a: '害虫の種類によって異なります。シロアリ駆除は5年程度、ハチ駆除は1年程度が一般的です。ゴキブリ駆除は3ヶ月～1年程度の保証が多く見られます。'
      },
      {
        q: '保証が適用されないケースはありますか？',
        a: 'お客様の過失（窓の開け放しなど）や、新たな侵入経路ができた場合など、保証が適用されないケースがあります。契約時に保証条件をご確認ください。'
      }
    ],
    pests: {
      termite: [
        {
          q: 'シロアリ被害はどうやって見つけられますか？',
          a: '床がきしむ、柱を叩くと空洞音がする、羽アリを見かけた、木くずが落ちているなどのサインがあります。定期的な点検をおすすめします。'
        },
        {
          q: 'シロアリ駆除の料金相場は？',
          a: '坪単価で7,000円～10,000円程度が一般的です。30坪の戸建てなら21万円～30万円が目安です。被害の程度によって変動します。'
        },
        {
          q: 'シロアリ予防はいつすればいいですか？',
          a: '新築時または前回の施工から5年経過したタイミングが目安です。特に木造住宅では定期的な予防が重要です。'
        }
      ],
      wasp: [
        {
          q: 'ハチの巣は自分で駆除できますか？',
          a: '小さなアシナガバチの巣であれば可能ですが、スズメバチの巣や大きな巣の駆除は危険です。専門業者へのご依頼をおすすめします。'
        },
        {
          q: 'ハチ駆除に適した時期はいつですか？',
          a: '春先（4月～5月）の巣が小さいうちが適しています。夏から秋にかけて巣が大きくなり、攻撃性も増すため、早めの対処が重要です。'
        },
        {
          q: 'ハチ駆除の料金相場は？',
          a: 'アシナガバチは8,000円～15,000円、スズメバチは15,000円～40,000円程度です。巣の大きさや場所によって変動します。'
        }
      ],
      cockroach: [
        {
          q: 'ゴキブリは完全に駆除できますか？',
          a: '専門業者による駆除で大幅に減らすことは可能ですが、外部からの侵入を完全に防ぐことは困難です。定期的な駆除と予防が効果的です。'
        },
        {
          q: 'ゴキブリ駆除後の効果はいつまで続きますか？',
          a: '使用する薬剤にもよりますが、3ヶ月～6ヶ月程度効果が持続します。定期的な施工で効果を維持できます。'
        },
        {
          q: 'ゴキブリ駆除の料金相場は？',
          a: '1LDK～2LDKで15,000円～25,000円程度が相場です。被害の程度や面積によって変動します。'
        }
      ],
      mouse: [
        {
          q: 'ネズミの侵入経路はどこですか？',
          a: '配管の隙間、換気口、屋根の隙間、床下などから侵入します。駆除後は侵入経路の封鎖が重要です。'
        },
        {
          q: 'ネズミ駆除の料金相場は？',
          a: '戸建てで10万円～30万円程度が相場です。侵入経路の封鎖工事が必要な場合は追加費用がかかります。'
        },
        {
          q: 'ネズミは完全に駆除できますか？',
          a: '捕獲と侵入経路の封鎖を行えば、再発を防ぐことができます。ただし、周辺環境によっては定期的な点検が必要です。'
        }
      ],
      bat: [
        {
          q: 'コウモリは駆除してもいいのですか？',
          a: 'コウモリは鳥獣保護法で保護されているため、許可なく捕獲・駆除することは違法です。追い出しと侵入防止が基本です。'
        },
        {
          q: 'コウモリ駆除の料金相場は？',
          a: '追い出し作業と侵入防止で10万円～30万円程度が相場です。糞尿の清掃や消毒が必要な場合は追加費用がかかります。'
        },
        {
          q: 'コウモリの追い出しに適した時期はいつですか？',
          a: '春（3月～5月）または秋（9月～11月）が適しています。繁殖期（6月～8月）は子コウモリがいるため、避けてください。'
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Breadcrumb items={[{ label: "害虫・害獣駆除プロ比較ナビ", href: "/" }, { label: "よくある質問" }]} />
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-control.jpg"
          alt="よくある質問"
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            よくある質問
          </h1>
          <p className="text-lg text-gray-700">
            害虫駆除に関するよくある質問とその回答をまとめています
          </p>
        </div>
      </section>

      {/* 一般的な質問 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            一般的な質問
          </h2>
          <div className="space-y-4">
            {faqs.general.map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-white shadow-lg">
                <input type="radio" name="general-accordion" defaultChecked={index === 0} />
                <div className="collapse-title text-xl font-medium">
                  {faq.q}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 作業内容について */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            作業内容について
          </h2>
          <div className="space-y-4">
            {faqs.work.map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-white shadow-lg">
                <input type="radio" name="work-accordion" />
                <div className="collapse-title text-xl font-medium">
                  {faq.q}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 保証・アフターフォローについて */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            保証・アフターフォローについて
          </h2>
          <div className="space-y-4">
            {faqs.warranty.map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-white shadow-lg">
                <input type="radio" name="warranty-accordion" />
                <div className="collapse-title text-xl font-medium">
                  {faq.q}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 害虫別FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            害虫別FAQ
          </h2>
          
          {/* シロアリ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              シロアリ駆除について
            </h3>
            <div className="space-y-4">
              {faqs.pests.termite.map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-amber-50 shadow-lg border-2 border-amber-200">
                  <input type="radio" name="termite-accordion" />
                  <div className="collapse-title text-xl font-medium">
                    {faq.q}
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content/70">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/shiroari" className="btn btn-primary">
                シロアリ駆除の詳細を見る →
              </Link>
            </div>
          </div>

          {/* ハチ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              ハチ駆除について
            </h3>
            <div className="space-y-4">
              {faqs.pests.wasp.map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-yellow-50 shadow-lg border-2 border-yellow-200">
                  <input type="radio" name="wasp-accordion" />
                  <div className="collapse-title text-xl font-medium">
                    {faq.q}
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content/70">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/hachi" className="btn btn-primary">
                ハチ駆除の詳細を見る →
              </Link>
            </div>
          </div>

          {/* ゴキブリ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              ゴキブリ駆除について
            </h3>
            <div className="space-y-4">
              {faqs.pests.cockroach.map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-red-50 shadow-lg border-2 border-red-200">
                  <input type="radio" name="cockroach-accordion" />
                  <div className="collapse-title text-xl font-medium">
                    {faq.q}
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content/70">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/gokiburi" className="btn btn-primary">
                ゴキブリ駆除の詳細を見る →
              </Link>
            </div>
          </div>

          {/* ネズミ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              ネズミ駆除について
            </h3>
            <div className="space-y-4">
              {faqs.pests.mouse.map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-gray-50 shadow-lg border-2 border-gray-200">
                  <input type="radio" name="mouse-accordion" />
                  <div className="collapse-title text-xl font-medium">
                    {faq.q}
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content/70">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/nezumi" className="btn btn-primary">
                ネズミ駆除の詳細を見る →
              </Link>
            </div>
          </div>

          {/* コウモリ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              コウモリ駆除について
            </h3>
            <div className="space-y-4">
              {faqs.pests.bat.map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-purple-50 shadow-lg border-2 border-purple-200">
                  <input type="radio" name="bat-accordion" />
                  <div className="collapse-title text-xl font-medium">
                    {faq.q}
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content/70">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/koumori" className="btn btn-primary">
                コウモリ駆除の詳細を見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#66FFFF] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{backgroundColor: "#2B3A50", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "2rem"}}>
            <h2 className="heading-primary text-white">
              害虫駆除のご相談について
            </h2>
          </div>
          <p className="text-lg mb-8 text-gray-900">
            各社の料金をご確認のうえ、業者選びにお役立てください。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を見る
            </Link>
            <Link href="/guide" className="btn btn-lg btn-outline" style={{backgroundColor: "#2F4F4F", borderColor: "orange", color: "white"}}>
              業者選びガイド
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
