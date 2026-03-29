export default function TermsPage() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[30vh] bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              利用規約
            </h1>
            <p className="text-xl">
              サイト利用に関する規約
            </p>
          </div>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-white shadow-xl">
            <div className="card-body prose max-w-none">
              <p className="text-base-content/70">
                この利用規約（以下「本規約」）は、害虫・害獣駆除プロ比較ナビ（以下「当サイト」）が提供するサービスの利用条件を定めるものです。ユーザーの皆様には、本規約に従って当サイトをご利用いただきます。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">第1条（適用）</h2>
              <p className="text-base-content/70">
                本規約は、ユーザーと当サイトとの間の当サイトの利用に関わる一切の関係に適用されるものとします。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">第2条（サイトの目的）</h2>
              <p className="text-base-content/70">
                当サイトは、害虫駆除に関する情報を提供し、ユーザーと害虫駆除業者との出会いの場を提供することを目的とします。当サイトは、以下のサービスを提供します：
              </p>
              <ul className="list-disc list-inside text-base-content/70 space-y-2 mt-4">
                <li>害虫駆除に関する情報の提供</li>
                <li>料金相場の情報提供</li>
                <li>業者選びのガイド</li>
                <li>見積もり依頼の仲介（提携業者への紹介）</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">第3条（免責事項）</h2>
              <p className="text-base-content/70">
                当サイトは、以下の事項について一切の責任を負いません：
              </p>
              <ul className="list-disc list-inside text-base-content/70 space-y-2 mt-4">
                <li>当サイトに掲載された情報の正確性、完全性、有用性</li>
                <li>当サイトを通じて紹介された業者が提供するサービスの品質</li>
                <li>ユーザーと業者との間のトラブルや損害</li>
                <li>当サイトの利用によるユーザーの損害（直接損害、間接損害、特別損害を含む）</li>
                <li>当サイトのサービスの中断、停止、終了による損害</li>
              </ul>

              <div className="alert alert-warning mt-6">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>
                    <strong>重要：</strong>
                    当サイトは情報提供を目的としており、業者との契約や施工内容について一切の責任を負いません。契約前に必ず業者と直接確認してください。
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">第4条（情報の正確性）</h2>
              <p className="text-base-content/70">
                当サイトは、掲載する情報の正確性を保つよう努めますが、情報の完全性や正確性を保証するものではありません。料金相場や業者情報は変動する可能性があるため、最新情報は各業者に直接お問い合わせください。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">第5条（禁止事項）</h2>
              <p className="text-base-content/70">
                ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません：
              </p>
              <ul className="list-disc list-inside text-base-content/70 space-y-2 mt-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当サイトのサーバーやネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当サイトのサービスの運営を妨害する行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他、当サイトが不適切と判断する行為</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">第6条（著作権）</h2>
              <p className="text-base-content/70">
                当サイトに掲載されているコンテンツ（文章、画像、デザイン等）の著作権は、当サイトまたは正当な権利を有する第三者に帰属します。ユーザーは、当サイトの事前の承諾なく、これらのコンテンツを複製、転載、配布することはできません。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">第7条（リンク）</h2>
              <p className="text-base-content/70">
                当サイトへのリンクは、原則として自由です。ただし、以下の場合はリンクをお断りすることがあります：
              </p>
              <ul className="list-disc list-inside text-base-content/70 space-y-2 mt-4">
                <li>アダルトサイト、違法サイト、公序良俗に反するサイトからのリンク</li>
                <li>当サイトの信用を毀損する可能性のあるサイトからのリンク</li>
                <li>フレーム内でのリンクや、当サイトのコンテンツであるかのように誤解を与えるリンク</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">第8条（外部リンク）</h2>
              <p className="text-base-content/70">
                当サイトから外部サイトへのリンクが含まれる場合がありますが、当サイトは外部サイトの内容について一切の責任を負いません。外部サイトの利用は、各サイトの利用規約に従ってください。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">第9条（サービスの変更・中断・終了）</h2>
              <p className="text-base-content/70">
                当サイトは、ユーザーへの事前通知なく、サービス内容を変更、中断、または終了することができるものとします。これによってユーザーに生じた損害について、当サイトは一切の責任を負いません。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">第10条（個人情報の取り扱い）</h2>
              <p className="text-base-content/70">
                当サイトは、ユーザーの個人情報を適切に取り扱います。詳細は、<a href="/privacy" className="link link-primary">プライバシーポリシー</a>をご確認ください。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">第11条（利用規約の変更）</h2>
              <p className="text-base-content/70">
                当サイトは、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。変更後の利用規約は、当サイトに掲載した時点から効力を生じます。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">第12条（準拠法・裁判管轄）</h2>
              <p className="text-base-content/70">
                本規約の解釈にあたっては、日本法を準拠法とします。当サイトに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>

              <div className="divider my-8"></div>

              <p className="text-base-content/70 text-sm">
                制定日：2026年3月13日<br />
                最終更新日：2026年3月13日
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
