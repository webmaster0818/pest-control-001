import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | 害虫・害獣駆除プロ比較ナビ",
  description: "害虫・害獣駆除プロ比較ナビの利用規約です。本サイトをご利用の際は、必ず本規約をお読みいただき、同意の上でご利用ください。",
  openGraph: {
    title: "利用規約 | 害虫・害獣駆除プロ比較ナビ",
    description: "害虫・害獣駆除プロ比較ナビの利用規約です。",
    url: "https://pest-control-001.pages.dev/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* ヘッダー */}
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">利用規約</h1>
          <p className="text-center mt-4 text-white/90">Terms of Service</p>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="mb-8 text-gray-700">
            株式会社MediaX（以下「当社」といいます。）は、当社が提供するサービスである「害虫・害獣駆除プロ比較ナビ」（以下「本サービス」といい、当社の運営する本サービスのウェブサイトを「本サイト」といいます。）の利用について、以下のとおり利用規約を定めます（以下「本規約」といいます。）。
            当社は、必要に応じて本規約を変更いたしますので、本サイトの利用者（以下「ユーザー」といいます。）は、ご利用前に、予め最新の本規約の全文をお読みいただき、これに同意した上で、本サイトを利用するものとします。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第1条（本サービスの目的）</h2>
          <p className="mb-8 text-gray-700">
            本サービスは、ユーザーに対して、本サイトに掲載されている害虫駆除業者・害獣駆除業者等の事業者（以下「掲載事業者」といいます。）の紹介、料金相場情報、害虫・害獣に関する情報提供、その他のアドバイス等を行うことを目的とします。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第2条（本規約の適用）</h2>
          <div className="mb-8 text-gray-700 space-y-2">
            <p>（１）当社は、本規約の内容に従って本サービスの提供を行います。</p>
            <p>（２）当社が本サイト上に掲示する本サービスに関するルール、諸規定、プライバシーポリシーなどの利用条件等（以下「利用条件等」といいます。）は、全て本規約の一部を構成します。</p>
            <p>（３）本規約と利用条件等との内容が矛盾する場合、利用条件等が本規約に優先して適用されます。</p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第3条（禁止事項）</h2>
          <div className="mb-8 text-gray-700 space-y-2">
            <p>（１）当社は、ユーザーが、以下の各号のいずれかの事由に該当すると当社が判断した場合は、本サービスの利用を拒否することができます。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>本規約に違反し、又はそのおそれがある場合</li>
              <li>当社に提供された情報の全部又は一部につき、虚偽や記載漏れ等がある場合</li>
              <li>本サービスの目的以外の目的（自ら又は第三者のための営業、広告、又はその他顧客誘引等の目的等）で、本サービスを利用し又は利用するおそれがある場合</li>
              <li>過去に本サービスの利用を拒否又は中止された者である場合</li>
              <li>その他、本サービスの利用を認めることが適当でないと当社が判断した場合</li>
            </ul>
            <p>（２）当社は、ユーザーに、前項各号に該当する事由が判明した場合、それ以降の当該ユーザーによる本サービスの利用を中止（本サービスに基づき提供される一切のサービスの提供の中止、及び本サイトへのアクセス拒否等）することができます。</p>
            <p>（３）当社は、本条に基づき当社が行った行為によりユーザーに生じた損害等（精神的苦痛、逸失利益又はその他の金銭的損害を含む一切の不利益を含みます。以下同様とします。）について、一切責任を負いません。</p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第4条（取引）</h2>
          <p className="mb-8 text-gray-700">
            ユーザーが、本サービスの利用に起因して掲載事業者との間で取引を行う場合、ユーザーと掲載事業者のみが当該取引の当事者となり、いかなる場合も、当社は当該取引の当事者となりません。掲載事業者が提供するサービスの内容、品質、料金等に関するトラブルについて、当社は一切の責任を負いません。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第5条（禁止行為）</h2>
          <div className="mb-8 text-gray-700">
            <p className="mb-2">ユーザーは、本サービスを利用するにあたり、以下の行為を行わないものとします。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>本規約、公序良俗若しくは法令に違反する行為又はそのおそれがある行為</li>
              <li>事実に反する情報を本サービスにおいて送信する行為</li>
              <li>他のユーザーの利用を妨害する行為又はそのおそれがある行為</li>
              <li>本サービスを構成するハードウェア又はソフトウェアへの不正アクセス行為、クラッキング行為その他設備等に支障を与える等の行為</li>
              <li>当社、他のユーザー、掲載事業者及びその他の第三者の財産権（特許権、商標権、著作権等のあらゆる知的財産権を含みます。）又はプライバシーに関する権利等、あらゆる法的権利を侵害する行為</li>
              <li>当社、他のユーザー、掲載事業者及びその他の第三者を誹謗中傷する行為</li>
              <li>本サービスと競合し得る事業を行いながら本サービスを利用する行為</li>
              <li>その他、当社が不適切と判断する一切の行為</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第6条（知的財産権）</h2>
          <p className="mb-8 text-gray-700">
            本サービスを構成する有形・無形の構成物（ソフトウェアプログラム、アイコン、画像、文章の関連ドキュメント等を含みます。）に関する著作権を含む一切の知的財産権、その他の権利は、当社又は当社にライセンスを許諾した第三者に帰属します。
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第7条（本サービスの停止、中断）</h2>
          <div className="mb-8 text-gray-700 space-y-2">
            <p>（１）当社は、以下の各号のいずれかに該当する場合には、事前の通知なく、本サービスの利用の全部又は一部を停止又は中断することができます。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>システムの点検又は保守を緊急に行う必要がある場合</li>
              <li>サーバー、通信回線等が事故により停止した場合</li>
              <li>地震、落雷、火災などの不可抗力によって本サービスの提供ができなくなった場合</li>
              <li>その他、当社が本サービスの提供を停止又は中断する必要があると判断した場合</li>
            </ul>
            <p>（２）当社は、前項に基づき当社が行った措置によってユーザーに生じた損害等について、一切責任を負いません。</p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第8条（保証の否認及び免責事項）</h2>
          <div className="mb-8 text-gray-700 space-y-2">
            <p>（１）本サービスは現状有姿で提供されるものであり、当社は本サービスについて、特定の目的への適合性、完全性、継続性等について、保証をいたしません。</p>
            <p>（２）当社は、本サイト上に掲載された掲載事業者の各種情報（料金、サービス内容、営業時間等）及び本サイトからリンクされている当社以外の第三者が運営するウェブサイト上に掲載されている情報の内容の正確性等について、いかなる保証もいたしません。掲載料金は参考値であり、実際の料金は被害状況・建物の構造等により変動いたします。</p>
            <p>（３）当社は、本サイトに掲載された口コミ・評判等のユーザー投稿内容について、その正確性、信頼性、有用性等について、いかなる保証もいたしません。</p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第9条（個人情報の利用・第三者への提供）</h2>
          <div className="mb-8 text-gray-700 space-y-2">
            <p>（１）本サービスに関連して当社が知り得たユーザーの個人情報については、当社が別途定める<Link href="/privacy-policy" className="text-primary hover:underline">プライバシーポリシー</Link>に従い取り扱います。</p>
            <p>（２）当社は、ユーザーが本サービスを利用して見積もり依頼や問い合わせの申込を行った掲載事業者に対して、ユーザーの個人情報を提供します。ユーザーは、本サービスの利用にあたり、本項に基づく個人情報の提供に同意します。</p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第10条（反社会的勢力の排除）</h2>
          <div className="mb-8 text-gray-700 space-y-2">
            <p>（１）当社は、反社会的勢力又はこれに準じる者（暴力、威力又は詐欺的手法を駆使して経済的利益を追求する団体又は個人等。以下「反社会的勢力等」といいます。）による本サービスの利用を禁止します。</p>
            <p>（２）当社は、ユーザーが反社会的勢力等に該当すると判断した場合、当該ユーザーに対する本サービスの提供を停止することができます。</p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">第11条（準拠法・合意管轄）</h2>
          <p className="mb-8 text-gray-700">
            本規約に起因し、又は関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>

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
