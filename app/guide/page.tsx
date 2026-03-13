import Link from 'next/link'

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[40vh] bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              害虫駆除業者の選び方
            </h1>
            <p className="text-xl mb-8">
              失敗しない業者選びの5つのポイントと悪徳業者の見分け方を徹底解説
            </p>
          </div>
        </div>
      </section>

      {/* 業者選びで重要な5つのポイント */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            業者選びで重要な5つのポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: '実績と信頼性',
                description: '施工実績数、創業年数、口コミ評価などを確認。実績豊富な業者は技術力も高い傾向があります。'
              },
              {
                number: '02',
                title: '料金の透明性',
                description: '見積もりが明確で、追加料金の条件が事前に説明されているか確認しましょう。'
              },
              {
                number: '03',
                title: '保証期間とアフターフォロー',
                description: '駆除後の保証期間や、再発時の対応について契約前に確認が必要です。'
              },
              {
                number: '04',
                title: '対応スピード',
                description: '緊急時の対応力や、見積もり～施工までのスピード感も重要な判断材料です。'
              },
              {
                number: '05',
                title: '使用薬剤の安全性',
                description: 'ペットや小さいお子様がいる家庭では、使用薬剤の安全性を必ず確認しましょう。'
              }
            ].map((point, index) => (
              <div key={index} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {point.number}
                  </div>
                  <h3 className="card-title text-xl mb-2">{point.title}</h3>
                  <p className="text-base-content/70">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 確認すべき資格・認証 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            確認すべき資格・認証
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl border-2 border-primary">
              <div className="card-body">
                <h3 className="card-title text-xl">日本ペストコントロール協会</h3>
                <p className="text-base-content/70">
                  害虫駆除業界の代表的な団体。加盟業者は一定の技術水準を満たしています。
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl border-2 border-primary">
              <div className="card-body">
                <h3 className="card-title text-xl">日本しろあり対策協会</h3>
                <p className="text-base-content/70">
                  シロアリ駆除専門の認定団体。シロアリ駆除では特に重要な資格です。
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl border-2 border-primary">
              <div className="card-body">
                <h3 className="card-title text-xl">建築物ねずみ昆虫等防除業</h3>
                <p className="text-base-content/70">
                  都道府県知事の登録を受けた事業者。公的な認可を受けている証明です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 見積もり時のチェックリスト */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            見積もり時のチェックリスト
          </h2>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <ul className="space-y-4">
                {[
                  {
                    title: '現地調査の有無',
                    description: '電話だけでなく、実際に現地を確認してから見積もりを出してくれるか'
                  },
                  {
                    title: '料金の内訳',
                    description: '薬剤費、人件費、出張費など、料金の詳細が明記されているか'
                  },
                  {
                    title: '追加料金の条件',
                    description: 'どのような場合に追加料金が発生するのか、事前に説明があるか'
                  },
                  {
                    title: '保証内容',
                    description: '保証期間、保証範囲、再施工の条件などが明確に記載されているか'
                  },
                  {
                    title: '施工方法',
                    description: '使用する薬剤、施工手順、所要時間などの説明があるか'
                  },
                  {
                    title: '支払い条件',
                    description: '支払い方法、支払いタイミング（前払い/後払い）が明確か'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold text-sm">
                        ✓
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-base-content/70">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* こんな業者には注意！ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            こんな業者には注意！
          </h2>
          <div className="alert alert-warning shadow-lg mb-8">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>以下のような業者には特に注意が必要です</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '飛び込み営業',
                description: 'アポなしで訪問し、「今すぐ駆除が必要」と不安を煽る業者。正規の業者は基本的に飛び込み営業はしません。',
                icon: '🚪'
              },
              {
                title: '即決を迫る',
                description: '「今日契約すれば特別割引」など、考える時間を与えない業者。複数業者の比較検討が基本です。',
                icon: '⏰'
              },
              {
                title: '見積もりを出さない',
                description: '「作業してみないとわからない」と明確な見積もりを出さない業者。後から高額請求されるリスクがあります。',
                icon: '📄'
              },
              {
                title: '極端に安い料金',
                description: '相場よりも大幅に安い料金を提示する業者。追加料金で結局高額になるケースが多いです。',
                icon: '💰'
              },
              {
                title: '連絡先が不明確',
                description: '固定電話がない、住所が不明など、連絡先が不明確な業者。トラブル時に連絡が取れないリスクがあります。',
                icon: '📞'
              },
              {
                title: '契約を急かす',
                description: '「害虫が増える前に」「被害が広がる前に」と契約を急かす業者。冷静な判断ができなくなります。',
                icon: '🏃'
              }
            ].map((warning, index) => (
              <div key={index} className="card bg-red-50 border-2 border-red-200 shadow-lg">
                <div className="card-body">
                  <div className="text-4xl mb-2">{warning.icon}</div>
                  <h3 className="card-title text-xl text-red-700">{warning.title}</h3>
                  <p className="text-base-content/70">{warning.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 複数業者の比較方法 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            複数業者の比較方法
          </h2>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">3社以上から見積もりを取る</h3>
                    <p className="text-base-content/70">
                      最低でも3社から見積もりを取り、料金と サービス内容を比較しましょう。相場感を掴むことができます。
                    </p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">同じ条件で比較する</h3>
                    <p className="text-base-content/70">
                      被害状況、施工範囲、保証内容など、できるだけ同じ条件で見積もりを取り、公平に比較しましょう。
                    </p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">総合的に判断する</h3>
                    <p className="text-base-content/70">
                      料金だけでなく、実績、保証、対応の丁寧さなど、総合的に判断することが重要です。安さだけで選ぶと後悔することも。
                    </p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">質問をためらわない</h3>
                    <p className="text-base-content/70">
                      疑問点や不安な点は遠慮せずに質問しましょう。丁寧に説明してくれる業者は信頼できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            信頼できる業者を見つけましょう
          </h2>
          <p className="text-lg mb-8">
            このガイドを参考に、あなたに最適な害虫駆除業者を見つけてください。<br />
            まずは料金相場を確認して、複数業者から見積もりを取ることをおすすめします。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を見る
            </Link>
            <Link href="/faq" className="btn btn-lg btn-outline btn-neutral">
              よくある質問
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
