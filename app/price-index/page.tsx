import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

const CHECKED = "2026年7月7日";
const UPDATED = "2026年7月7日";

export const metadata: Metadata = {
  title:
    "害虫・害獣駆除 料金インデックス｜主要業者の公式料金を実確認【2026年7月】業者×料金一覧 - 害虫・害獣駆除プロ比較ナビ",
  description:
    "駆除ザウルス・ハウスプロテクト・害獣プロテック・アサンテ・ダスキン・サンキョークリーンサービスの公式サイトに掲載された料金・保証・見積もり条件を、当サイトが2026年7月7日に実確認して一覧化。基本料金の有無、保証年数、無料見積もりの可否を出典URLつきで比較できます。毎月再確認して更新します。",
  alternates: { canonical: "https://gaichu-pro.com/price-index/" },
};

type Row = {
  name: string;
  slug?: string;
  official: string;
  base: string;
  targets: string;
  warranty: string;
  estimate: string;
};

// 各社公式サイトの掲載内容を 2026年7月7日 に当サイトが確認。
// 具体額が公式に掲載されていない場合は「公式に掲載なし（要見積もり）」と記載し、推測値は入れない。
const rows: Row[] = [
  {
    name: "駆除ザウルス",
    slug: "kujo-zaurus",
    official: "https://kujyo-zaurus.com/cost/",
    base: "害獣25,000円〜／トコジラミ2,200円/㎡〜／シロアリ1,980円/㎡〜（税込）",
    targets: "ハクビシン・イタチ・アライグマ・テン・コウモリ・ネズミ・アナグマ・カメムシ・トコジラミ・シロアリ 等",
    warranty: "最長10年（イタチ・テン・ネズミ・コウモリ・トコジラミ・シロアリ等は最長5年）",
    estimate: "無料（現地調査・見積もり無料）",
  },
  {
    name: "ハウスプロテクト",
    slug: "house-protect",
    official: "https://house-protect.net/",
    base: "公式に掲載なし（害獣種類・被害状況・面積により決定）",
    targets: "ネズミ・イタチ・ハクビシン・コウモリ 等",
    warranty: "「業界最長クラス」との記載のみ（具体年数は公式で確認できず）",
    estimate: "無料（現場調査・見積もり・出張費すべて0円と明記）",
  },
  {
    name: "害獣プロテック",
    slug: "protec",
    official: "https://gaiju-kujo.co.jp/",
    base: "公式に掲載なし（一律価格表なし）",
    targets: "ネズミ・イタチ・ハクビシン・アライグマ・コウモリ・害鳥・アナグマ・シロアリ・ハチ 等",
    warranty: "最長10年（期間は施工内容による）",
    estimate: "無料（調査・見積り完全無料と明記）",
  },
  {
    name: "株式会社アサンテ",
    slug: "asante",
    official: "https://www.asante.co.jp/termite/",
    base: "公式に掲載なし（施工面積・内容により異なるとの記載のみ）",
    targets: "ヤマトシロアリ・イエシロアリ（シロアリ専門）",
    warranty: "5年（保証期間中の再発は追加費用なしで再処理・年1回無料点検）",
    estimate: "無料（床下診断・見積もり無料）",
  },
  {
    name: "ダスキン（ターミニックス）",
    slug: "duskin",
    official: "https://www.duskin.jp/terminix/",
    base: "不快害虫27,500円（税抜25,000円）〜／ハチ22,000円〜／クモ11,000円〜（サービス別）",
    targets: "ゴキブリ・シロアリ・ネズミ・ハト・ハチ・トコジラミ・クモ・カメムシ・アリ・ムカデ・蚊 等",
    warranty: "「満足の保証」制度あり（具体年数は公式で確認できず）",
    estimate: "調査・見積り対応（“無料”の明記は公式で確認できず）",
  },
  {
    name: "サンキョークリーンサービス",
    slug: "sankyo",
    official: "https://www.sankyo64.com/price/rat/",
    base: "ねずみスポット1回20,000円〜／A施工プラン(3回訪問・5坪まで)26,500円（税込29,150円）〜（消費税別途）",
    targets: "シロアリ・羽アリ・ねずみ・ハチ・ゴキブリ・ダニ・毛虫 等",
    warranty: "具体年数は公式で確認できず（アフターフォロー記載のみ）",
    estimate: "無料（スピード出張・無料調査見積もり／所有者以外・瑕疵担保絡みは有料）",
  },
];

const faqs = [
  {
    q: "この料金一覧はどうやって確認していますか？",
    a: "各社の公式サイトに掲載されている料金・保証・見積もり条件を、当サイト編集部が2026年7月7日に確認して一覧化しています。基本料金の具体額が公式に掲載されていない業者は「公式に掲載なし（要見積もり）」と記載し、推測値は入れていません。料金・条件は改定されることがあるため、毎月再確認して更新します。",
  },
  {
    q: "害虫駆除の料金はなぜ『要見積もり』が多いのですか？",
    a: "害虫・害獣駆除は、被害の規模・建物の構造・侵入経路の数・封鎖範囲・作業の難易度によって費用が大きく変わるため、多くの業者が一律の価格表ではなく現地調査後の見積もりで金額を決めています。今回確認した6社のうち、基本料金の具体額を公式に掲載していたのは駆除ザウルス・ダスキン・サンキョークリーンサービスでした。まずは無料の現地調査・見積もりで総額を確認するのが確実です。",
  },
  {
    q: "保証年数が長い業者はどこですか？",
    a: "今回の確認（2026年7月7日）で公式に保証年数を明示していたのは、駆除ザウルス（最長10年・一部5年）、害獣プロテック（最長10年）、アサンテ（5年・年1回無料点検）でした。ハウスプロテクトは「業界最長クラス」、ダスキンは「満足の保証」との記載で、具体年数は公式では確認できませんでした。保証は害虫の種類・施工内容で条件が変わるため、契約前に対象範囲を確認してください。",
  },
  {
    q: "見積もりは無料ですか？",
    a: "駆除ザウルス・ハウスプロテクト・害獣プロテック・アサンテ・サンキョークリーンサービスは公式に現地調査・見積もりの無料を明記しています（サンキョーは所有者以外の申込や瑕疵担保絡みは有料）。ダスキンは調査・見積もりに対応していますが、“無料”の明記は公式では確認できませんでした。",
  },
];

export default function PriceIndexPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "害虫・害獣駆除 料金インデックス｜主要業者の公式料金を実確認【2026年7月】",
    description: "主要な害虫害獣駆除業者の公式掲載料金・保証・見積もり条件を業者別に実確認して一覧化。出典URL・確認日つき。",
    author: { "@type": "Organization", name: "害虫・害獣駆除プロ比較ナビ編集部" },
    publisher: { "@type": "Organization", name: "害虫・害獣駆除プロ比較ナビ" },
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main className="bg-base-200 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "料金インデックス" }]} />

        <article className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 mt-4">
          <h1 className="text-2xl sm:text-3xl font-bold leading-snug mb-3">
            害虫・害獣駆除 料金インデックス｜主要業者の公式料金を実確認【2026年7月】
          </h1>
          <p className="text-sm text-gray-500 mb-1">最終更新日：{UPDATED}</p>
          <p className="text-xs text-gray-400 mb-6">料金の確認日：{CHECKED}（各社公式サイトを毎月再確認して更新）</p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8">
            <p className="font-bold text-primary mb-2">このページについて</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              主要な害虫・害獣駆除業者の<strong>公式サイトに掲載されている料金・保証・見積もり条件</strong>を、当サイト編集部が<strong>{CHECKED}に確認</strong>して一覧化しました。害虫駆除は被害規模・建物構造で費用が変わるため「要見積もり」が多い分野です。<strong>基本料金の具体額が公式に載っていない業者は「公式に掲載なし」と正直に記載</strong>し、推測値は入れていません。出典は各行の公式URLをご確認ください。
            </p>
          </div>

          {/* マトリクス */}
          <h2 className="text-xl font-bold mb-4">業者別 料金・保証インデックス（公式掲載・{CHECKED}確認）</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
            <table className="w-full text-xs sm:text-sm min-w-[900px]">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-3 py-3 text-left font-bold whitespace-nowrap">業者</th>
                  <th className="px-3 py-3 text-left font-bold">公式掲載の基本料金</th>
                  <th className="px-3 py-3 text-left font-bold">主な対応</th>
                  <th className="px-3 py-3 text-left font-bold">保証</th>
                  <th className="px-3 py-3 text-left font-bold">見積もり</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.name} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-3 py-3 font-bold align-top whitespace-nowrap">
                      {r.slug ? (
                        <Link href={`/agents/${r.slug}`} className="text-primary underline">{r.name}</Link>
                      ) : (
                        r.name
                      )}
                    </td>
                    <td className="px-3 py-3 text-gray-700 align-top">{r.base}</td>
                    <td className="px-3 py-3 text-gray-700 align-top">{r.targets}</td>
                    <td className="px-3 py-3 text-gray-700 align-top">{r.warranty}</td>
                    <td className="px-3 py-3 text-gray-700 align-top">{r.estimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-2">
            ※ 各社公式サイトの掲載内容を{CHECKED}に当サイトが確認したものです。金額は税込・税抜の別を各行に記載し、記載のない項目は推測せず「公式に掲載なし」としています。実際の費用は被害状況・建物により変わるため、必ず現地調査・見積もりで総額をご確認ください。
          </p>
          <div className="text-xs text-gray-400 mb-8 space-y-1">
            <p className="font-bold text-gray-600">出典（各社公式サイト・{CHECKED}確認）</p>
            {rows.map((r) => (
              <p key={r.name}>
                {r.name}：<a href={r.official} target="_blank" rel="noopener nofollow" className="text-primary underline break-all">{r.official}</a>
              </p>
            ))}
          </div>

          {/* 読み解き */}
          <h2 className="text-xl font-bold mb-4">この一覧の読み解き方</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed mb-8">
            <li><strong>基本料金を公式明示していたのは3社：</strong>駆除ザウルス・ダスキン・サンキョークリーンサービス。残る3社は現地調査後の見積もりで金額が決まります。</li>
            <li><strong>保証年数を公式明示していたのは3社：</strong>駆除ザウルス（最長10年・一部5年）・害獣プロテック（最長10年）・アサンテ（5年＋年1回点検）。</li>
            <li><strong>「〜円」は最低価格表示：</strong>被害規模・封鎖範囲・害虫の種類で総額は変わります。㎡単価表示（トコジラミ・シロアリ等）は施工面積で大きく変動します。</li>
            <li><strong>見積もりはほぼ無料：</strong>ダスキンを除く5社は現地調査・見積もりの無料を公式明記（サンキョーは一部条件で有料）。まずは無料調査で総額を把握するのが確実です。</li>
          </ul>

          {/* 内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8">
            <h2 className="text-lg font-bold mb-2">各社の詳しい評判・料金を見る</h2>
            <div className="flex flex-wrap gap-2">
              {rows.filter((r) => r.slug).map((r) => (
                <Link key={r.name} href={`/agents/${r.slug}`} className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium">{r.name}の評判・料金</Link>
              ))}
              <Link href="/gaichu-calendar/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium">害虫カレンダー</Link>
              <Link href="/price/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium">料金相場</Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mb-4">料金インデックスに関するよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
