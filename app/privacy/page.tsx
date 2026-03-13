export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[30vh] bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              プライバシーポリシー
            </h1>
            <p className="text-xl">
              個人情報の取り扱いについて
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
                害虫駆除110番（以下「当サイト」）は、ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. 個人情報の定義</h2>
              <p className="text-base-content/70">
                個人情報とは、個人情報保護法に規定される個人情報を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレス等の記述等により特定の個人を識別できる情報、及びその他の記述等と照合することができ、それにより特定の個人を識別することができる情報（個人識別情報）を指します。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. 個人情報の収集方法</h2>
              <p className="text-base-content/70">
                当サイトでは、ユーザーが以下のサービスを利用する際に、個人情報を収集することがあります：
              </p>
              <ul className="list-disc list-inside text-base-content/70 space-y-2 mt-4">
                <li>お問い合わせフォームへの入力時</li>
                <li>見積もり依頼時</li>
                <li>メールマガジンへの登録時</li>
                <li>アンケートへの回答時</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. 個人情報の利用目的</h2>
              <p className="text-base-content/70">
                当サイトで収集した個人情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc list-inside text-base-content/70 space-y-2 mt-4">
                <li>お問い合わせへの対応</li>
                <li>見積もり依頼への対応および業者への紹介</li>
                <li>メールマガジンの配信</li>
                <li>サービスの改善・新サービスの開発</li>
                <li>利用規約違反への対応</li>
                <li>その他、上記利用目的に付随する目的</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. 個人情報の第三者提供</h2>
              <p className="text-base-content/70">
                当サイトは、以下の場合を除いて、ユーザーの同意なく第三者に個人情報を提供することはありません：
              </p>
              <ul className="list-disc list-inside text-base-content/70 space-y-2 mt-4">
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>

              <div className="alert alert-info mt-6">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>
                    <strong>注意事項：</strong>
                    見積もり依頼時には、ユーザーの同意を得た上で、提携業者に必要な個人情報（氏名、住所、連絡先等）を提供します。
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. 個人情報の開示・訂正・削除</h2>
              <p className="text-base-content/70">
                ユーザーは、当サイトに対し、個人情報保護法の定めに従い、以下の権利を行使することができます：
              </p>
              <ul className="list-disc list-inside text-base-content/70 space-y-2 mt-4">
                <li>個人情報の開示請求</li>
                <li>個人情報の訂正・追加・削除請求</li>
                <li>個人情報の利用停止請求</li>
              </ul>
              <p className="text-base-content/70 mt-4">
                これらの請求を行う場合は、お問い合わせフォームよりご連絡ください。本人確認の上、合理的な期間内に対応いたします。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookieの使用について</h2>
              <p className="text-base-content/70">
                当サイトでは、サービスの利便性向上のためにCookie（クッキー）を使用しています。Cookieとは、Webサイトを訪問した際にブラウザに保存される小さなテキストファイルです。
              </p>
              <p className="text-base-content/70 mt-4">
                Cookieの使用目的：
              </p>
              <ul className="list-disc list-inside text-base-content/70 space-y-2 mt-4">
                <li>ユーザーの利便性向上（ログイン状態の保持等）</li>
                <li>アクセス解析（Google Analytics等）</li>
                <li>広告配信の最適化</li>
              </ul>
              <p className="text-base-content/70 mt-4">
                ブラウザの設定により、Cookieの受け入れを拒否することができますが、その場合、当サイトの一部機能が正常に動作しない可能性があります。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. アクセス解析ツール</h2>
              <p className="text-base-content/70">
                当サイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsは、Cookieを使用してユーザーの訪問情報を収集します。この情報は匿名で収集されており、個人を特定するものではありません。
              </p>
              <p className="text-base-content/70 mt-4">
                Google Analyticsの利用規約およびプライバシーポリシーについては、Googleのサイトをご確認ください。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. 個人情報の安全管理</h2>
              <p className="text-base-content/70">
                当サイトは、個人情報の漏洩、滅失、毀損等を防止するため、必要かつ適切な安全管理措置を講じます。また、個人情報を取り扱う従業者や委託先に対して、必要かつ適切な監督を行います。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. プライバシーポリシーの変更</h2>
              <p className="text-base-content/70">
                当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. お問い合わせ</h2>
              <p className="text-base-content/70">
                個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
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
