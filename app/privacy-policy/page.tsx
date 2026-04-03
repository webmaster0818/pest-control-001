import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 害虫・害獣駆除プロ比較ナビ",
  description: "害虫・害獣駆除プロ比較ナビのプライバシーポリシーです。個人情報の取り扱いについて詳しく説明しています。",
  openGraph: {
    title: "プライバシーポリシー | 害虫・害獣駆除プロ比較ナビ",
    description: "害虫・害獣駆除プロ比較ナビのプライバシーポリシーです。",
    url: "https://pest-control-001.pages.dev/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* ヘッダー */}
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">プライバシーポリシー</h1>
          <p className="text-center mt-4 text-white/90">Privacy Policy</p>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="mb-8 text-gray-700">
            株式会社MediaX（以下、「当社」といいます）は、当社が提供するサービス「害虫・害獣駆除プロ比較ナビ」（以下、「本サービス」といいます）におけるユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます）を定めます。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">1. 個人情報の定義</h2>
          <p className="mb-8 text-gray-700">
            「個人情報」とは、個人情報保護法にいう「個人情報」を指し、氏名、生年月日、住所、電話番号、メールアドレス、その他特定の個人を識別できる情報を含みます。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">2. 個人情報の取得方法</h2>
          <p className="mb-8 text-gray-700">
            当社は、ユーザーが見積もり依頼や問い合わせをする際、またはサービス利用中に氏名、住所、電話番号、メールアドレス、被害状況、建物情報、入力フォームその他当社が定める方法を通じてユーザーが入力または送信する情報を取得することがあります。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">3. 個人情報の利用目的</h2>
          <div className="mb-8 text-gray-700">
            <p className="mb-2">当社は、ユーザーの個人情報について、以下の利用目的の範囲内で利用し、ご本人の同意がある場合又は法令で認められている場合を除き、他の目的で利用しません。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>ユーザーが見積もり依頼・相談予約等の申込又は問い合わせをした掲載事業者に対して、ユーザーの個人情報を提供するため</li>
              <li>本サービス及び本サービス上で掲載された情報（掲載事業者に関する情報を含みます。）に関するユーザーからのお問い合わせ・ご相談に対する対応その他ユーザーに対する情報提供及び連絡のため</li>
              <li>本サービスの利用状況等を調査・分析するため</li>
              <li>本サービスの内容をよりご満足いただけるよう改良・改善するため、又は新サービスの開発のため</li>
              <li>利用規約等で禁じている競合し得る事業を行う者の利用、虚偽情報登録などの調査のため</li>
              <li>本サービスの正常な提供を妨害する不正行為防止のため</li>
              <li>統計・分析データの作成のため</li>
              <li>本サービス運営上のトラブルの解決のため</li>
              <li>前各号のほか、本サービスを提供するため</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">4. 個人情報の第三者提供</h2>
          <div className="mb-8 text-gray-700">
            <p className="mb-4">
              当社は、法令に基づく場合を除き、本人の同意なく第三者(委託先を除く)に提供いたしません。
              ただし、ユーザーが本サービス上で掲載事業者に対する見積もり依頼・相談予約等の申込を行った場合又は掲載事業者に関する問い合わせを行った場合、ユーザーの個人情報が当社から当該掲載事業者へ提供されることがあります。
            </p>
            <p className="font-semibold text-amber-700 bg-amber-50 p-4 rounded-lg">
              ※見積もり依頼・問い合わせフォームからの送信により、掲載事業者への個人情報提供に同意したものとみなされます。
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">5. 個人情報の管理</h2>
          <p className="mb-8 text-gray-700">
            当社は、個人情報の漏えい、滅失、毀損の防止およびその他の安全管理のために適切な措置を講じます。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">6. 個人情報の開示・訂正・利用停止</h2>
          <p className="mb-8 text-gray-700">
            ユーザー本人からの開示、訂正、利用停止の請求があった場合、本人確認のうえ、速やかに対応します。請求方法については、本ページ末尾のお問い合わせ窓口までご連絡ください。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">7. Cookie等の利用について</h2>
          <div className="mb-8 text-gray-700 space-y-4">
            <p>
              当社は、Cookieやアクセス解析ツールを使用し、利用状況の分析やサービス改善を行うことがあります。Cookieの受け入れを希望しない場合は、ブラウザの設定を変更できます。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Google Analyticsの利用について</h3>
              <p className="text-sm">
                当サイトでは、サイトの利用状況を把握し、コンテンツの改善に役立てるために Google Analyticsを利用しています。
                Google Analyticsは、Cookieを使用して、お客様の当サイト内での行動を匿名で記録します。これらの情報は、サイトのレイアウト改善やユーザー体験の向上のために使用されます。
                収集されるデータは匿名であり、個人を特定する情報は含まれません。
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">8. 免責事項について</h2>
          <p className="mb-8 text-gray-700">
            本サイトからリンクしたサイトで提供される情報、サービス等について一切の責任を負いません。本サイト内の情報については、正確な最新情報への更新に努めますが、正確性や安全性を保証することはできません。情報が古いまま残っている可能性もございますので予めご了承ください。また、当サイトに掲載された内容によって生じた損害等に責任は負いかねますことも、重ねてご了承をお願いいたします。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">9. プライバシーポリシーの変更</h2>
          <p className="mb-8 text-gray-700">
            当社は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、本サイト上に掲載した時点で効力を生じるものとします。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">10. お問い合わせ窓口</h2>
          <div className="mb-8 text-gray-700 bg-gray-50 p-6 rounded-lg">
            <p className="mb-2">本ポリシーに関するお問い合わせは、以下の窓口までご連絡ください。</p>
            <div className="space-y-1">
              <p><span className="font-semibold">会社名：</span>株式会社MediaX</p>
              <p><span className="font-semibold">住所：</span>〒150-0011 東京都渋谷区東一丁目27番10号</p>
              <p><span className="font-semibold">お問い合わせ：</span>お問い合わせフォームよりご連絡ください</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600">
            <p>制定日：2026年4月1日</p>
            <p className="mt-2">最終更新日：2026年4月3日</p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="btn btn-primary">
              トップページへ戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
