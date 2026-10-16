import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/content-policy" },
  title: "記事の制作ポリシー | 害虫・害獣駆除プロ比較ナビ",
  description: "害虫・害獣駆除プロ比較ナビの記事制作ポリシーです。正確性・中立性・利用者の視点を重視して記事を制作しています。",
  openGraph: {
    title: "記事の制作ポリシー | 害虫・害獣駆除プロ比較ナビ",
    description: "害虫・害獣駆除プロ比較ナビの記事制作ポリシーです。",
    url: "https://gaichu-pro.com/content-policy",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ContentPolicyPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <Breadcrumb items={[{ label: "害虫・害獣駆除プロ比較ナビ", href: "/" }, { label: "記事の制作ポリシー" }]} />
      {/* ヘッダー */}
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">記事の制作ポリシー</h1>
          <p className="text-center mt-4 text-white/90">Content Policy / Editorial Policy</p>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          
          {/* 基本理念 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-primary pb-2">基本理念</h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-900">利用者の視点を第一に情報を提供します</h3>
                <p className="text-gray-700">
                  害虫・害獣駆除プロ比較ナビは、利用者の多様なニーズに沿った業者選びを支援します。
                  近年、害虫駆除・害獣駆除業者の業態は多様化しています。
                  所在地や価格帯だけでなく、駆除の手法、対応する害虫・害獣の種類、緊急対応の可否なども業者によって異なります。
                  また、利用者が求めるサービスの内容もさまざまです。
                  利用者がそれぞれの目的に合った業者を選べるよう、各駆除業者の特性・強みを分かりやすくお伝えすることに努めます。
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-900">正確かつ最新の情報の提供に努めます</h3>
                <p className="text-gray-700">
                  害虫・害獣駆除プロ比較ナビでは、正確な情報をお届けするため、掲載情報をできる限り最新の状態に保つよう努めます。
                  当社スタッフによる定期的な更新に加え、全国の害虫駆除業者・害獣駆除業者の運営者様からの修正依頼を受けて随時更新を行い、信頼される媒体であるよう努めます。
                </p>
                <div className="mt-4 bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">情報の取得元</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                    <li>掲載事業者の公式ウェブサイト</li>
                    <li>掲載事業者からの直接提供情報</li>
                    <li>一般社団法人日本ペストコントロール協会などの業界団体の公開情報</li>
                    <li>行政機関（保健所、環境局等）の公開情報</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-amber-900">中立性・公平性を保ちます</h3>
                <p className="text-gray-700">
                  害虫・害獣駆除プロ比較ナビでは、特定の業者に偏ることなく、各業者の特徴・強み・弱みを公平に掲載いたします。
                  掲載順位は、ユーザーの利便性を考慮し、サービス内容、料金、対応エリア、口コミ評価等を総合的に判断して決定しています。
                  広告枠と編集コンテンツは明確に区別し、ユーザーが判断しやすい形で提供いたします。
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-900">口コミ情報の透明性を確保します</h3>
                <p className="text-gray-700">
                  害虫・害獣駆除プロ比較ナビでは、収集した口コミの参照元を明示し、内容を改変せずに掲載することで、中立性の確保に努めます。
                  掲載している口コミは、Google口コミ等の第三者プラットフォームから引用しており、参照元を明示しています。
                </p>
                <div className="mt-4 bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">口コミの掲載基準</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                    <li>Google口コミ等の第三者プラットフォームから引用</li>
                    <li>出典元を明示</li>
                    <li>編集・改変は行わず、原文のまま掲載</li>
                    <li>著しく不適切な表現がある場合は掲載を見送ることがあります</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-pink-900">分かりやすい情報の提供に努めます</h3>
                <p className="text-gray-700">
                  害虫駆除・害獣駆除サービスは決して安価ではないため、利用者がより良い選択をできるよう、参考となる情報をお届けします。
                  一方で、情報が多すぎると、かえって分かりにくくなることもあります。
                  意思決定に必要な情報を、分かりやすくお伝えするよう努めます。
                </p>
              </div>
            </div>
          </div>

          {/* 記事の制作フロー */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-primary pb-2">記事の制作フロー</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">1. 記事の企画設計</h3>
                <p className="text-gray-700">
                  害虫・害獣駆除プロ比較ナビの記事は、企画設計から制作を始めます。
                  利用者が必要とする情報を調査したうえで、記事を企画しています。
                </p>
                <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-gray-700">
                  <li>検索キーワードの調査・分析</li>
                  <li>ユーザーニーズの把握（害虫の種類、地域、料金相場、業者選びのポイント等）</li>
                  <li>既存情報の不足点・改善点の洗い出し</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">2. 情報収集・リサーチ</h3>
                <p className="text-gray-700">
                  正確な情報を提供するため、複数の信頼できる情報源から情報を収集します。
                </p>
                <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-gray-700">
                  <li>掲載事業者の公式サイトからの情報収集</li>
                  <li>業界団体（日本ペストコントロール協会等）の公開情報</li>
                  <li>行政機関（保健所、環境局等）の公開情報</li>
                  <li>専門書籍・学術論文の参照（害虫の生態、駆除方法等）</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">3. 記事のライティング</h3>
                <p className="text-gray-700">
                  企画した構成に沿って執筆します。
                  専門用語はできる限り避け、分かりやすく読みやすい文章で執筆します。
                  害虫駆除・害獣駆除業者選びのお役に立てるよう、記事を作成します。
                </p>
                <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-gray-700">
                  <li>専門用語は分かりやすく解説</li>
                  <li>具体例・事例を交えた説明</li>
                  <li>料金相場は複数業者の公開情報から算出</li>
                  <li>画像・図表を活用した視覚的な分かりやすさ</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">4. 品質チェック</h3>
                <p className="text-gray-700">
                  公開前に、情報の正確性、分かりやすさ、誤字脱字等を複数名でチェックします。
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">5. 記事の公開</h3>
                <p className="text-gray-700">
                  完成した記事をウェブサイトに公開します。
                  公開後は、読者の反応などを参考に、記事の改善を行っています。
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">6. 記事の更新</h3>
                <p className="text-gray-700">
                  記事の公開後も、正確かつ最新の情報を掲載するため、定期的に情報を更新しています。
                  また、業者の運営者様や利用者の皆様からご意見や修正依頼をいただいた場合は、その都度修正を行い、正確性と最新性の維持に努めています。
                </p>
              </div>
            </div>
          </div>

          {/* 修正依頼について */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">情報の修正・訂正依頼について</h2>
            <p className="text-gray-700 mb-4">
              誤った情報や更新されていない情報がございましたら、お問い合わせフォームよりご連絡ください。
              確認のうえ、速やかに修正いたします。
            </p>
            <p className="text-sm text-gray-600">
              ※掲載事業者様からの情報修正依頼は優先的に対応いたします。
            </p>
          </div>

          {/* 広告・アフィリエイトについて */}
          <div className="mb-12 bg-amber-50 p-6 rounded-lg border-2 border-amber-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">広告・アフィリエイトについて</h2>
            <p className="text-gray-700">
              当サイトは、掲載事業者からの広告収入やアフィリエイト収入により運営されています。
              ただし、広告収入の有無が記事内容や掲載順位に影響を与えることはありません。
              利用者の利便性を最優先に、公平・中立な情報提供に努めています。
            </p>
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
