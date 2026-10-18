import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "/mukade" },
  title: "ムカデ・ゲジゲジ駆除業者比較 | 料金相場と侵入防止対策",
  description: "ムカデ・ゲジゲジ駆除業者9社を、料金・対応エリア・受付時間の観点から比較しています。ムカデの生態、咬まれた場合の対処法、屋内への侵入を防ぐ方法を自治体の公表情報にもとづいてご説明します。",
  openGraph: {
    title: "ムカデ・ゲジゲジ駆除業者比較 | 料金相場と侵入防止対策",
    description: "ムカデ・ゲジゲジ駆除業者9社を、料金・対応エリア・受付時間の観点から比較しています。ムカデに咬まれた場合の対処法もご説明します。",
    url: "https://gaichu-pro.com/mukade",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function MukadePage() {
  const KAWASAKI_MUKADE_URL = "https://www.city.kawasaki.jp/350/cmsfiles/contents/0000006/6005/mukade.pdf";
  const KAWASAKI_YASUDE_URL = "https://www.city.kawasaki.jp/350/cmsfiles/contents/0000006/6005/yasude.pdf";
  const KAWASAKI_INDEX_URL = "https://www.city.kawasaki.jp/kurashi/category/22-13-1-0-0-0-0-0-0-0.html";
  const TOKYO_RUIBETSU_URL = "https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/nezukon/ruibetsu";

  const mukadeTypes = [
    {
      name: "ムカデ",
      danger: "咬まれると激痛",
      description: "屋外の落ち葉の下や石垣の下などに生息し、ゴキブリなどのエサを求めて屋内へ侵入します。自分から人を襲うことはありませんが、気付かずに触れたり刺激したりすると、防御のために咬みつきます。咬まれるとしびれを伴う激痛があり、患部は赤く腫れあがります（川崎市）。",
      features: ["体長: 2〜3cmのものから15cm位までの種類があります", "夜行性で、昼間は暗く湿った場所に潜んでいます", "5〜8月頃が産卵期で、活動が活発になります"],
      color: "badge-error",
    },
    {
      name: "ヤスデ（ムカデに似た虫）",
      danger: "咬まない",
      description: "体型が細長く多数の脚があるためムカデに似ていますが、咬まれるなどの危害はありません。防御のために刺激臭のある体液を分泌するため、不快感を与えます（川崎市）。",
      features: ["体長: 普通種のヤケヤスデで約2cm", "体の各節から2対の脚が出ています（ムカデは1対）", "4〜7月頃に発生し、梅雨時期に大発生することがあります"],
      color: "badge-info",
    },
  ];

  const emergencySteps = [
    {
      step: "1",
      title: "流水で冷やしながら毒を絞り出す",
      description: "流水などで患部を冷やしながら、毒を絞り出します。",
    },
    {
      step: "2",
      title: "軟膏を塗り、腫れがひどければ湿布する",
      description: "抗ヒスタミン剤含有のステロイド軟膏を塗ります。腫れがひどい場合は、水で湿布します。",
    },
    {
      step: "3",
      title: "必要に応じて医療機関を受診する",
      description: "必要に応じて医療機関を受診してください。",
    },
  ];

  const priceTable = [
    { size: "小規模の作業", price: "8,000〜15,000円", note: "作業範囲・建物の構造により変動" },
    { size: "中規模の作業", price: "15,000〜30,000円", note: "作業範囲・建物の構造により変動" },
    { size: "大規模の作業", price: "30,000〜50,000円+", note: "作業範囲・建物の構造により変動" },
    { size: "高所作業（2階以上など）", price: "+10,000〜20,000円", note: "追加料金" },
  ];

  const seasonCalendar = [
    {
      season: "春",
      target: "ムカデ・ヤスデ",
      activity: "発生が始まる時期",
      advice: "川崎市は、ムカデの発生時期を春〜秋、ヤスデの発生時期を4〜7月頃と案内しています。家の周りの雑草を刈り取り、落ち葉や廃材など不要な物を片付けて、日当たりをよくしておくことが予防になります。",
    },
    {
      season: "5〜8月頃",
      target: "ムカデ",
      activity: "ムカデの産卵期",
      advice: "ムカデの活動が活発になる時期です。床下や家の周りに粉剤の殺虫剤を帯状に散布するなど、屋内への侵入を防ぐ対策を行います（川崎市）。",
    },
    {
      season: "梅雨時期",
      target: "ヤスデ",
      activity: "ヤスデが大発生しやすい時期",
      advice: "梅雨時期に大発生したヤスデが、雨上がりにブロック塀や壁面に這い上がり、屋内に侵入することがあります（川崎市）。",
    },
    {
      season: "秋",
      target: "ムカデ",
      activity: "ムカデの発生が続く時期",
      advice: "川崎市は、ムカデの発生時期を春〜秋としています。屋内で見つけた場合は素手で触れず、スプレー式殺虫剤などで対処してください。",
    },
  ];

  const checklist = [
    "調査で侵入経路や発生場所を確認し、対策の内容を説明しているか",
    "使用する薬剤の種類と散布場所（床下・建物の周りなど）が見積書に明記されているか",
    "ペットや小さなお子様がいる場合の薬剤の扱いについて説明があるか",
    "追加料金が発生する条件が事前に示されているか",
    "施工後に再び発生した場合の対応（保証の有無・期間）が書面で示されているか",
  ];

  const areas = [
    { name: "東京", href: "/area/tokyo" },
    { name: "大阪", href: "/area/osaka" },
    { name: "名古屋", href: "/area/nagoya" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* パンくずリスト */}
      <Breadcrumb items={[
        { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
        { label: "ムカデ・ゲジゲジ" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-new.jpg"
          alt="ムカデ・ゲジゲジ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ムカデ・ゲジゲジ駆除の基礎知識と業者比較
            </h1>
            <p className="text-xl mb-8">
              ムカデの生態と、咬まれた場合の対処法、屋内への侵入を防ぐ方法をご説明します
            </p>
            </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ムカデ・ゲジゲジ駆除の基礎知識と業者比較
          </h2>
          <p className="text-lg text-gray-700">
            自治体の公表情報にもとづき、ムカデの特徴・被害・予防方法をご説明します
          </p>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">ムカデ・ゲジゲジ駆除業者の比較</h2>
          
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300"></th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-1">1</span>
                      <CompanyVisual id="/images/companies/sankyo-shoudoku.png" name="株式会社三共消毒" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社三共消毒</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-2">2</span>
                      <CompanyVisual id="/images/companies/asante.png" name="株式会社アサンテ" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社アサンテ</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-3">3</span>
                      <CompanyVisual id="/images/companies/kita-nihon.png" name="有限会社北日本消毒" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">有限会社北日本消毒</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">4</span>
                      <CompanyVisual id="/images/companies/ai-eizen.png" name="株式会社あい営繕" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社あい営繕</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">5</span>
                      <CompanyVisual id="/images/companies/miyako.png" name="株式会社ミヤコ消毒" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社ミヤコ消毒</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">6</span>
                      <CompanyVisual id="/images/companies/kodama.png" name="株式会社こだま" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社こだま</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">7</span>
                      <CompanyVisual id="/images/companies/taiyo.png" name="大洋防疫研究所" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">大洋防疫研究所</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">8</span>
                      <CompanyVisual id="/images/companies/daiichi.png" name="株式会社第一環研" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">株式会社第一環研</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">9</span>
                      <img src="/images/hero-pest-new.jpg" alt="ハチお助け本舗" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">ハチお助け本舗</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center">◎ 関東・関西・東海</td>
                  <td className="text-center">◎ 関東・東海</td>
                  <td className="text-center">○ 富山・石川・新潟・岐阜</td>
                  <td className="text-center">○ 北九州・福岡・下関</td>
                  <td className="text-center">◎ 関東・長野・新潟</td>
                  <td className="text-center">○ 三重・愛知・静岡・岐阜</td>
                  <td className="text-center">◎ 関西・関東・中部</td>
                  <td className="text-center">○ 福井県</td>
                  <td className="text-center">◎ 全国対応</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center">24時間365日</td>
                  <td className="text-center">8:30〜19:30</td>
                  <td className="text-center">8:30〜17:30（土日祝・時間外も対応）</td>
                  <td className="text-center">8:00〜20:00</td>
                  <td className="text-center">平日9:00〜18:00</td>
                  <td className="text-center">8:00〜17:00</td>
                  <td className="text-center">9:00〜17:00</td>
                  <td className="text-center">9:00〜17:00</td>
                  <td className="text-center">24時間365日</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応害虫・害獣</th>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害獣（公式掲載の種類）</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害鳥獣全般</td>
                  <td className="text-center">害虫全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">ハチ駆除が中心（ムカデは要確認）</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">無料診断</th>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">○ 無料相談</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">キャンセル</th>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">○ 可能</td>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">○ 可能</td>
                  <td className="text-center">○ 可能</td>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">○ 可能</td>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">○ 可能</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">公式サイト</th>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-primary btn-sm">公式サイトへ →</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="heading-primary text-center mt-16 mb-8">ムカデ・ゲジゲジ駆除業者の詳細</h2>

          {/* 株式会社三共消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-1">1</span>
                <h3 className="text-2xl font-bold text-black">株式会社三共消毒（ムカデ・ゲジゲジ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/sankyo-shoudoku.png" name="株式会社三共消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社三共消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業約100年の、衛生害虫・衛生害獣の駆除・予防を手がける業者</li>
                <li>24時間年中無休で受付、地域に密着した対応</li>
                <li>専門スタッフが調査を行い、再発した場合は無料で再施工</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社三共消毒の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>東京都、神奈川県、千葉県、埼玉県、栃木県、群馬県、大阪府、愛知県、静岡県</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>24時間365日・通話無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ムカデ・ゲジゲジ・シロアリ・ネズミなど害虫・害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり（現地調査後にお見積もり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>保証あり（詳細は要確認）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社三共消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社三共消毒+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社アサンテ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-2">2</span>
                <h3 className="text-2xl font-bold text-black">株式会社アサンテ（ムカデ・ゲジゲジ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/asante.png" name="株式会社アサンテ" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社アサンテの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>累計60万件以上の施工実績</li>
                <li>最短即日対応も可能、蜂の場合は即日での対応を実施</li>
                <li>調査から見積もり、施工、アフターフォローまで自社スタッフが対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社アサンテの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>東京都、神奈川県、千葉県、愛知県</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:30〜19:30・年中無休</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ムカデ・ゲジゲジ・シロアリ・ゴキブリなど害虫・害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>同年の再発に限り無償で再駆除</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社アサンテの口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社アサンテ+ムカデ・ゲジゲジ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 有限会社北日本消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-3">3</span>
                <h3 className="text-2xl font-bold text-black">有限会社北日本消毒（ムカデ・ゲジゲジ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kita-nihon.png" name="有限会社北日本消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">有限会社北日本消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>有限会社北日本消毒は富山県富山市に所在し、公式サイトでは「富山県の専門業者として40年以上の実績」と案内しています（設立 昭和51年9月）</li>
                <li>対応エリアは富山県・石川県・新潟県・岐阜県、営業時間は8:30〜17:30（土日祝・時間外も対応と公式表記）</li>
                <li>公式サイトの「その他の害虫駆除」にムカデ・ゲジゲジの駆除を掲載しています</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                土日祝日・時間外も対応<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆有限会社北日本消毒の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>富山県、石川県、新潟県、岐阜県（公式の会社情報）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:30〜17:30（土日祝・時間外も対応、休業日は年末年始。公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>シロアリ・ハチ・ゴキブリ・ネズミ・クモ・ハクビシン・カメムシ・鳩などの鳥獣・コウモリ、その他としてムカデ・ハエ・ダニ・ノミ・ヤスデ・ゲジゲジ</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり（公式サイトに料金表なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>無料相談あり（公式表記）。現地調査・見積もりの費用は問い合わせ時に確認</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式サイトに記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：有限会社北日本消毒 公式サイト（https://kitanihonshoudoku.co.jp/company/ ・ /service/ ・ /service/various-exterminations/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆有限会社北日本消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=有限会社北日本消毒+ムカデ・ゲジゲジ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                土日祝日・時間外も対応<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社あい営繕 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">4</span>
                <h3 className="text-2xl font-bold text-black">株式会社あい営繕（ムカデ・ゲジゲジ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/ai-eizen.png" name="株式会社あい営繕" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社あい営繕の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>最短30分で現場に到着</li>
                <li>自社施工、シーズン内に再発した場合は無料で再施工</li>
                <li>大手ホームセンターや家電量販店との取引経歴あり、蜂1匹の駆除から相談可能</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社あい営繕の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>福岡市、北九州市、下関市</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:00〜20:00・年中無休</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ムカデ・ゲジゲジ・ネズミなど害虫・害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり（現地調査後にお見積もり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>12月までのシーズン保証あり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社あい営繕の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社あい営繕+ムカデ・ゲジゲジ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社ミヤコ消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">5</span>
                <h3 className="text-2xl font-bold text-black">株式会社ミヤコ消毒（ムカデ・ゲジゲジ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/miyako.png" name="株式会社ミヤコ消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社ミヤコ消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>1973年に創立。公式サイトで「アフターフォローが強み、リピート率80％以上」と案内しています。</li>
                <li>薬剤は「厚生労働省に認可された医薬品、医薬部外品を中心に」使用（公式のよくある質問）</li>
                <li>2022年3月に日本ペストコントロール協会の優良事業所認証を取得、東京都の建築物ねずみ昆虫等防除業に登録（公式の会社概要）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社ミヤコ消毒の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>東京23区、多摩、埼玉、神奈川、千葉、茨城、栃木、群馬、長野、新潟 ほか（公式の会社概要「営業範囲」）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>平日9:00〜18:00（公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ムカデ・ゲジゲジ・シロアリなど害虫・害鳥獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり（現地調査後にお見積もり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>保証あり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：ミヤコ消毒 公式サイト（https://www.kkmiyako.com/ ・ https://www.kkmiyako.com/company/overview ・ https://www.kkmiyako.com/faq）2026年10月16日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社ミヤコ消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社ミヤコ消毒+ムカデ・ゲジゲジ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社こだま */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">6</span>
                <h3 className="text-2xl font-bold text-black">株式会社こだま（ムカデ・ゲジゲジ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kodama.png" name="株式会社こだま" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社こだまの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>高い技術力を持ったスタッフが対応</li>
                <li>日本ペストコントロール協会加盟</li>
                <li>三重県、愛知県、静岡県、岐阜県エリアに対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社こだまの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>三重県、愛知県、静岡県、岐阜県</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:00〜17:00・日祝休み</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ムカデ・ゲジゲジなど害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>保証あり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社こだまの口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社こだま+ムカデ・ゲジゲジ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 大洋防疫研究所 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">7</span>
                <h3 className="text-2xl font-bold text-black">大洋防疫研究所（ムカデ・ゲジゲジ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/taiyo.png" name="大洋防疫研究所" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">大洋防疫研究所の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>メディア出演多数、即日対応</li>
                <li>日本ペストコントロール協会加盟</li>
                <li>関西、関東、中部エリアに対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆大洋防疫研究所の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>関西、関東、中部</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>平日 9:00〜17:00・土曜 9:00〜12:00</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ムカデ・ゲジゲジなど害虫・害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>保証あり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆大洋防疫研究所の口コミ</h4>
                <a href="https://www.google.com/search?q=大洋防疫研究所+ムカデ・ゲジゲジ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社第一環研 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">8</span>
                <h3 className="text-2xl font-bold text-black">株式会社第一環研（ムカデ・ゲジゲジ駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/daiichi.png" name="株式会社第一環研" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社第一環研の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>テレビCMを放送、50年以上の実績を持つ害虫駆除業者</li>
                <li>日本ペストコントロール協会加盟</li>
                <li>福井県エリアに対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆株式会社第一環研の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>福井県</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>9:00〜17:00・土日祝定休</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ムカデ・ゲジゲジなど害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>保証あり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社第一環研の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社第一環研+ムカデ・ゲジゲジ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* ハチお助け本舗 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">9</span>
                <h3 className="text-2xl font-bold text-black">ハチお助け本舗（ハチ駆除専門）</h3>
              </div>
              <img src="/images/hero-pest-new.jpg" alt="ハチお助け本舗" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ハチお助け本舗の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>全国に拠点を持つ、蜂の巣駆除の専門サービス</li>
                <li>24時間365日受付、最短で受付から10分で現地に到着</li>
                <li>作業前に見積もりを提示、実績のある専門スタッフが対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆ハチお助け本舗の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>全国対応（一部地域を除く）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>24時間365日・通話無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ハチ駆除が中心（ムカデ・ゲジゲジへの対応は公式サイトにてご確認ください）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり（現地調査後にお見積もり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>作業後1週間以内の再発は無料対応</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・クレジットカード・電子マネー</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆ハチお助け本舗の口コミ</h4>
                <a href="https://www.google.com/search?q=ハチお助け本舗+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">実際の口コミは上記「Google口コミを見る」から最新の評価をご確認ください。当サイトでは出典が確認できない個人の体験談は掲載していません。</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ムカデの種類と被害 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ムカデの特徴と被害</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mukadeTypes.map((item) => (
              <div key={item.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">{item.name}</h3>
                  <div className={`badge ${item.color} badge-lg`}>{item.danger}</div>
                  <p className="text-gray-700 mt-4">{item.description}</p>
                  <div className="divider"></div>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700 mt-6">
            ゲジ（ゲジゲジ）は、東京都保健医療局の「ねずみ・衛生害虫」の類別一覧で、ムカデとは別の「不快動物」として分類されています。ゲジの生態の詳細は、現在掲載しておりません。
          </p>
          <p className="text-xs text-gray-600 mt-2">
            出典：<a href={KAWASAKI_MUKADE_URL} target="_blank" rel="nofollow noopener" className="underline">川崎市「くらしに身近な虫たち」掲載資料「ムカデ」（PDF）</a>（2026年10月17日確認）、
            <a href={KAWASAKI_YASUDE_URL} target="_blank" rel="nofollow noopener" className="underline">川崎市「くらしに身近な虫たち」掲載資料「ヤスデ」（PDF）</a>（2026年10月17日確認）、
            <a href={TOKYO_RUIBETSU_URL} target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「類別一覧」</a>（2026年10月17日確認）
          </p>
        </div>
      </section>

      {/* ムカデに咬まれた場合の対処法 */}
      <section className="py-16 px-4 bg-error/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center text-error">
            ムカデに咬まれた場合の対処法
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencySteps.map((step) => (
              <div key={step.step} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="badge badge-error badge-lg mb-4">ステップ {step.step}</div>
                  <h3 className="card-title text-xl">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-error mt-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-bold">川崎市の案内</h3>
              <p className="text-sm">
                川崎市は、咬まれた場合の対処として「流水などで患部を冷やしながら毒を絞り出します。そして、抗ヒスタミン剤含有のステロイド軟膏を塗り、腫れがひどければ水で湿布します。」「必要に応じて医療機関を受診しましょう。」と案内しています。
              </p>
              <p className="text-xs mt-2">
                出典：<a href={KAWASAKI_MUKADE_URL} target="_blank" rel="nofollow noopener" className="underline">川崎市「くらしに身近な虫たち」掲載資料「ムカデ」（PDF）</a>（2026年10月17日確認）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ムカデの侵入を見つけたら */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ムカデの侵入を見つけたときの対応</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-error text-error-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">避けるべき行動</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>素手で捕まえる、触れる（刺激すると防御のために瞬時に咬みつくためです）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>殺虫処理の直後に近づく（暴れて咬まれる可能性があるためです）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>家の周りに落ち葉や廃材を置いたままにする（暗く湿った場所に潜むためです）</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card bg-success text-success-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">すべきこと</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>直接駆除する場合は、スプレー式殺虫剤を噴霧する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>床下や家の周りに粉剤の殺虫剤を帯状に散布し、屋内への侵入を防ぐ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>家の周りの雑草を刈り取り、不要な物を片付けて日当たりをよくする</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>ご自身での対処が難しい場合は、業者に相談する</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-6">
            出典：<a href={KAWASAKI_MUKADE_URL} target="_blank" rel="nofollow noopener" className="underline">川崎市「くらしに身近な虫たち」掲載資料「ムカデ」（PDF）</a>（2026年10月17日確認）。殺虫剤は、製品の使用上の注意を守ってお使いください。
          </p>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ムカデ・ゲジゲジ駆除の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black shadow-xl">
              <thead>
                <tr>
                  <th>作業の規模・場所</th>
                  <th>料金相場</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold">{row.size}</td>
                    <td className="text-primary font-semibold">{row.price}</td>
                    <td className="text-sm text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="alert alert-info mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>
              <strong>費用について：</strong>費用は発生範囲・建物の構造・施工回数などにより変わります。
              正確な金額は、複数の業者の見積もりで比較されることをおすすめします。
            </span>
          </div>
        </div>
      </section>

      {/* 季節別対策カレンダー */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">季節別ムカデ・ゲジゲジ対策カレンダー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonCalendar.map((season) => (
              <div key={season.season} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="card-title text-xl">{season.season}</h3>
                    <div className="badge badge-warning badge-lg">{season.target}</div>
                  </div>
                  <p className="font-bold text-primary mb-2">{season.activity}</p>
                  <p className="text-gray-700">{season.advice}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-6">
            出典：<a href={KAWASAKI_MUKADE_URL} target="_blank" rel="nofollow noopener" className="underline">川崎市「くらしに身近な虫たち」掲載資料「ムカデ」（PDF）</a>（2026年10月17日確認）、
            <a href={KAWASAKI_YASUDE_URL} target="_blank" rel="nofollow noopener" className="underline">川崎市「くらしに身近な虫たち」掲載資料「ヤスデ」（PDF）</a>（2026年10月17日確認）。発生時期は地域や年により異なります。
          </p>
        </div>
      </section>

      {/* 業者に依頼する前に確認すること */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者に依頼する前に確認すること</h2>
          <div className="card bg-white shadow-xl">
            <div className="card-body space-y-4 text-gray-800">
              <div>
                <h3 className="font-bold text-lg mb-1">見つけた虫の種類</h3>
                <p>
                  ムカデとヤスデは見た目が似ていますが、ムカデは体の各節から1対、ヤスデは2対の脚が出ています。ヤスデは咬むなどの危害はありませんが、川崎市は、発生源が周辺の山林や畑など範囲が不特定の場合は「完全な駆除は困難です」と案内しています。依頼前に、見つけた虫の種類と場所を確認しておくと、相談がスムーズです。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">発生場所と建物の周りの状況</h3>
                <p>
                  ムカデは草むらや落ち葉の下、石垣の間など暗く湿った場所に潜み、エサを求めて屋内に侵入します。建物の周りの落ち葉・雑草・廃材の状況を確認し、清掃で改善できる点がないかを事前にご確認ください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">見積もりの内容</h3>
                <p>
                  使用する薬剤、散布場所、施工回数、追加料金の条件を事前にご確認ください。自治体によっては衛生害虫に関する相談窓口を設けているため、お住まいの市区町村にもご確認ください。ご利用前に、各業者の公式サイトにて最新情報をご確認ください。
                </p>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-bold text-base mb-2">出典</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><a href={KAWASAKI_INDEX_URL} target="_blank" rel="nofollow noopener" className="underline">川崎市「くらしに身近な虫たち」</a>（2026年10月17日確認）</li>
                  <li><a href={KAWASAKI_MUKADE_URL} target="_blank" rel="nofollow noopener" className="underline">川崎市「くらしに身近な虫たち」掲載資料「ムカデ」（PDF）</a>（2026年10月17日確認）</li>
                  <li><a href={KAWASAKI_YASUDE_URL} target="_blank" rel="nofollow noopener" className="underline">川崎市「くらしに身近な虫たち」掲載資料「ヤスデ」（PDF）</a>（2026年10月17日確認）</li>
                  <li><a href={TOKYO_RUIBETSU_URL} target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「類別一覧」</a>（2026年10月17日確認）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 業者選びのポイント */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者選びのポイント</h2>
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
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のムカデ・ゲジゲジ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でムカデ・ゲジゲジ駆除</h3>
                  <p className="text-gray-700 text-sm">地域の業者情報</p>
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
      <section className="py-16 px-4 bg-[#66FFFF] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{backgroundColor: "#2B3A50", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "2rem"}}>
            <h2 className="heading-primary text-white">
              ムカデ駆除のご相談について
            </h2>
          </div>
          <p className="text-lg mb-8 text-gray-900">
            お住まいの地域の料金相場をご確認のうえ、業者選びにお役立てください。
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
  );
}
