import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import { AffBanner, AffText } from "@/app/components/AffLink";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "/chougai" },
  title: "鳥害対策の基礎知識 | ハト・カラス駆除",
  description: "ハト・カラス・ムクドリなどの鳥害について、鳥獣保護管理法上の注意点、巣の撤去の考え方、糞の清掃時の注意、業者の選び方を公的機関の情報にもとづいてご説明します。",
  openGraph: {
    title: "鳥害対策の基礎知識 | ハト・カラス駆除業者比較",
    description: "鳥害駆除業者9社を、対応エリア・受付時間の観点から比較しています。鳥獣保護管理法上の注意点もご説明します。",
    url: "https://gaichu-pro.com/chougai",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ChougaiPage() {
  const LAW_URL = "https://laws.e-gov.go.jp/law/414AC0000000088";
  const ENV_CAPTURE_URL = "https://www.env.go.jp/nature/choju/capture/capture1.html";
  const TOKYO_CAPTURE_URL = "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/birds/capture";
  const TOKYO_FAQ_URL = "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/birds/faq";
  const TOKYO_CROW_URL = "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/crow/crow_measure";
  const TOKYO_FEEDING_URL = "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/birds/please";

  const birdTypes = [
    {
      name: "ドバト",
      danger: "鳥獣保護管理法の対象",
      description: "ベランダなどに巣を作ることがあります。東京都環境局は、巣を作り始めた時点で取り除くか、巣を作らせないことが大切であり、卵を産んでしまっている場合は許可なく撤去できないと案内しています。",
      features: ["巣立ちまでの期間: 1か月ほど（東京都環境局）", "ベランダに入る際、いったん手すりなどに止まる習性があります", "数が増えすぎると、鳴き声や糞などで生活環境に被害が生じます"],
      color: "badge-warning",
    },
    {
      name: "カラス",
      danger: "鳥獣保護管理法の対象",
      description: "ハシブトガラス・ハシボソガラスは、繁殖期に巣やヒナの近くを通る人を威嚇したり、攻撃したりすることがあります（東京都環境局）。",
      features: ["繁殖期: およそ3月下旬から7月上旬ごろ（東京都環境局）", "針金ハンガーを使って巣を作ることがあります", "ごみ集積所のごみを荒らします"],
      color: "badge-error",
    },
    {
      name: "ムクドリ",
      danger: "鳥獣保護管理法の対象",
      description: "東京都環境局は、ハシボソガラス、ハシブトガラス、ドバト、ムクドリなどを、生活環境などへ恒常的に被害を与える野生鳥獣として、有害鳥獣捕獲の対象としています。",
      features: ["許可なく捕獲・殺傷することはできません", "捕獲には都道府県知事等の許可が必要です", "対策の進め方はお住まいの自治体にご確認ください"],
      color: "badge-info",
    },
  ];

  const cleaningPoints = [
    {
      step: "1",
      title: "使い捨ての手袋とマスクを着用する",
      description: "野鳥は様々な細菌や寄生虫を持っているおそれがあるため、清掃の際は使い捨てのビニール手袋やマスクを着用します。",
    },
    {
      step: "2",
      title: "糞に直接触れない",
      description: "巣の跡や糞を片付ける際は、糞に直接触れないよう注意してください。",
    },
    {
      step: "3",
      title: "死んだ野鳥は管理者・清掃部署へ",
      description: "道路や公園では各施設の管理者へ、ご自宅の庭などではお住まいの清掃部署へご相談ください。死骸や糞には直接触れないでください。",
    },
  ];

  const priceTable = [
    { size: "小規模の作業", price: "8,000〜15,000円", note: "作業範囲・防除資材により変動" },
    { size: "中規模の作業", price: "15,000〜30,000円", note: "作業範囲・防除資材により変動" },
    { size: "大規模の作業", price: "30,000〜50,000円+", note: "作業範囲・防除資材により変動" },
    { size: "高所作業（2階以上など）", price: "+10,000〜20,000円", note: "追加料金" },
  ];

  const seasonCalendar = [
    {
      season: "3月下旬〜7月上旬ごろ",
      target: "カラス",
      activity: "カラスの繁殖期",
      advice: "カラスは巣を作り、卵を産んでヒナを育てます。この時期は巣やヒナに近づかないことが基本です。卵やヒナを捕獲・処分する場合は事前に許可が必要です（東京都環境局）。",
    },
    {
      season: "4〜6月",
      target: "野鳥のヒナ",
      activity: "巣立ったばかりのヒナが地面に落ちやすい時期",
      advice: "東京都環境局は、巣立ったばかりのヒナ（特に4月から6月）は大半が元気なヒナであり、拾って保護する必要はないと案内しています。カラスのヒナの近くでは親鳥が威嚇することがあるため、なるべく近づかないでください。",
    },
    {
      season: "巣作りを確認したとき",
      target: "ドバト",
      activity: "卵を産む前の対応",
      advice: "巣を作り始めた時点で取り除くか、巣を作らせないことが大切です。卵を産んでしまった場合は許可なく撤去できないため、ヒナが巣立つのを待ってから撤去します（東京都環境局）。",
    },
    {
      season: "日常の対策",
      target: "カラス・ハト",
      activity: "エサになるものを置かない",
      advice: "ごみは防鳥ネットでしっかり覆い、地域のごみ出しルールを守ります。カラスやハトにエサを与えないでください（東京都環境局）。",
    },
  ];

  const checklist = [
    "卵やヒナの有無を確認し、許可が必要な場合の手続きについて説明があるか",
    "施工する防除資材（ネット・ワイヤーなど）と施工範囲が見積書に明記されているか",
    "巣の撤去後の糞の清掃が作業に含まれているか",
    "高所作業など追加料金が発生する条件が事前に示されているか",
    "施工後に再び飛来した場合の対応（保証の有無・期間）が書面で示されているか",
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
        { label: "鳥害" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <Image
          src="/images/hero-animal-new.jpg"
          alt="鳥害駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              鳥害駆除の基礎知識と業者比較
            </h1>
            <p className="text-xl mb-8">
              ハト・カラス・ムクドリなどの鳥害について、法律上の注意点と対策をご説明します
            </p>
            </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ハト・カラスの鳥害対策と業者比較
          </h2>
          <p className="text-lg text-gray-700">
            野鳥は鳥獣保護管理法の対象です。巣の撤去や捕獲の前に確認すべき点を、公的機関の情報にもとづいてご説明します
          </p>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">鳥害駆除業者の比較</h2>
          
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300"></th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-1">1</span>
                      <img src="/images/hero-animal-new.jpg" alt="害鳥根絶の匠" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">害鳥根絶の匠</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-2">2</span>
                      <img src="/images/hero-animal-new.jpg" alt="日本鳩対策センター" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">日本鳩対策センター</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-3">3</span>
                      <img src="/images/hero-animal-new.jpg" alt="みんなのハト対策屋さん" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">みんなのハト対策屋さん</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">4</span>
                      <CompanyVisual id="/images/companies/protec.png" name="害獣プロテック" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">害獣プロテック</strong>
                      <AffText slug="protec" variant="small" label="公式サイト" />
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">5</span>
                      <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="thumb" />
                      <strong className="text-lg font-bold text-gray-900">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">6</span>
                      <img src="/images/hero-animal-new.jpg" alt="トータルクリーン" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">トータルクリーン</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">7</span>
                      <img src="/images/hero-animal-new.jpg" alt="スピナ" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">スピナ</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">8</span>
                      <img src="/images/hero-animal-new.jpg" alt="鳩110番" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">鳩110番</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">9</span>
                      <img src="/images/hero-animal-new.jpg" alt="プロテクト" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">プロテクト</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center">◎ 関東・関西・東海</td>
                  <td className="text-center">◎ 関東・東海</td>
                  <td className="text-center">○ 北陸4県</td>
                  <td className="text-center">○ 北九州・福岡・下関</td>
                  <td className="text-center">◎ 全国（北海道・沖縄除く）</td>
                  <td className="text-center">○ 三重・愛知・静岡・岐阜</td>
                  <td className="text-center">◎ 関西・関東・中部</td>
                  <td className="text-center">○ 福井県</td>
                  <td className="text-center">◎ 全国対応</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center">24時間365日</td>
                  <td className="text-center">8:30〜19:30</td>
                  <td className="text-center">8:30〜17:30</td>
                  <td className="text-center">8:00〜20:00</td>
                  <td className="text-center">24時間365日</td>
                  <td className="text-center">8:00〜17:00</td>
                  <td className="text-center">9:00〜17:00</td>
                  <td className="text-center">9:00〜17:00</td>
                  <td className="text-center">24時間365日</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応害虫・害獣</th>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害鳥獣全般</td>
                  <td className="text-center">害虫全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">鳥害専門</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">無料診断</th>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
                  <td className="text-center">◎ 無料</td>
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
                  <td className="text-center">○ 可能</td>
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
          <h2 className="heading-primary text-center mt-16 mb-8">鳥害駆除業者の詳細</h2>

          {/* 害鳥根絶の匠 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-1">1</span>
                <h3 className="text-2xl font-bold text-black">害鳥根絶の匠（鳥害駆除）</h3>
              </div>
              <img src="/images/hero-animal-new.jpg" alt="害鳥根絶の匠" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害鳥根絶の匠の特徴</h4>
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
              <h4 className="font-bold text-lg text-black mb-3">◆害鳥根絶の匠の基本情報</h4>
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
                      <td>鳥害・シロアリ・ネズミなど害虫・害獣全般</td>
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
                <h4 className="font-bold text-lg text-black">◆害鳥根絶の匠の口コミ</h4>
                <a href="https://www.google.com/search?q=害鳥根絶の匠+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 日本鳩対策センター */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-2">2</span>
                <h3 className="text-2xl font-bold text-black">日本鳩対策センター（鳥害駆除）</h3>
              </div>
              <img src="/images/hero-animal-new.jpg" alt="日本鳩対策センター" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">日本鳩対策センターの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>累計60万件以上の施工実績</li>
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
              <h4 className="font-bold text-lg text-black mb-3">◆日本鳩対策センターの基本情報</h4>
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
                      <td>鳥害・シロアリ・ゴキブリなど害虫・害獣全般</td>
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
                <h4 className="font-bold text-lg text-black">◆日本鳩対策センターの口コミ</h4>
                <a href="https://www.google.com/search?q=日本鳩対策センター+鳥害駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* みんなのハト対策屋さん */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-3">3</span>
                <h3 className="text-2xl font-bold text-black">みんなのハト対策屋さん（鳥害駆除）</h3>
              </div>
              <img src="/images/hero-animal-new.jpg" alt="みんなのハト対策屋さん" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">みんなのハト対策屋さんの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>人体・環境に優しい薬剤を使用</li>
                <li>最短即日の対応について相談可能、当日の現地調査にも対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                土日祝日・時間外も対応<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆みんなのハト対策屋さんの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>富山県、石川県、新潟県、岐阜県</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:30〜17:30・土日祝日・時間外も対応</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>鳥害・ネズミなど不快害虫・害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>1〜3ヵ月間の保証あり</td>
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
                <h4 className="font-bold text-lg text-black">◆みんなのハト対策屋さんの口コミ</h4>
                <a href="https://www.google.com/search?q=みんなのハト対策屋さん+鳥害駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 害獣プロテック */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">4</span>
                <h3 className="text-2xl font-bold text-black">害獣プロテック（鳥害駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/protec.png" name="害獣プロテック" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣プロテックの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>最短30分で現場に到着</li>
                <li>自社施工、シーズン内に再発した場合は無料で再施工</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <AffBanner slug="protec" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害獣プロテックの基本情報</h4>
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
                      <td>鳥害・ネズミなど害虫・害獣全般</td>
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
                <h4 className="font-bold text-lg text-black">◆害獣プロテックの口コミ</h4>
                <a href="https://www.google.com/search?q=害獣プロテック+鳥害駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
              <AffText slug="protec" variant="button" label="害獣プロテックの公式サイトで無料相談" />
            </div>
          </div>

          {/* 駆除ザウルス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">5</span>
                <h3 className="text-2xl font-bold text-black">駆除ザウルス（鳥害駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>公式サイトで「全国対応（北海道、沖縄県、一部地域を除く）」「完全自社施工」と案内しています</li>
                <li>「お見積り」「現地調査」無料、電話は24時間365日受付（公式表記）</li>
                <li>公式表記で「国家資格含む有資格者多数在籍」</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆駆除ザウルスの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>全国（北海道・沖縄県・一部地域を除く。公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>24時間365日受付（公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>鳥害・シロアリなど害虫・害鳥獣全般</td>
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
              <p className="text-xs text-gray-600 mt-2">出典：駆除ザウルス 公式サイト（https://kujyo-zaurus.com/ ・ https://kujyo-zaurus.com/company/）2026年10月16日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆駆除ザウルスの口コミ</h4>
                <a href="https://www.google.com/search?q=駆除ザウルス+鳥害駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* トータルクリーン */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">6</span>
                <h3 className="text-2xl font-bold text-black">トータルクリーン（鳥害駆除）</h3>
              </div>
              <img src="/images/hero-animal-new.jpg" alt="トータルクリーン" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">トータルクリーンの特徴</h4>
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
              <h4 className="font-bold text-lg text-black mb-3">◆トータルクリーンの基本情報</h4>
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
                      <td>鳥害など害虫全般</td>
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
                <h4 className="font-bold text-lg text-black">◆トータルクリーンの口コミ</h4>
                <a href="https://www.google.com/search?q=トータルクリーン+鳥害駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* スピナ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">7</span>
                <h3 className="text-2xl font-bold text-black">スピナ（鳥害駆除）</h3>
              </div>
              <img src="/images/hero-animal-new.jpg" alt="スピナ" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">スピナの特徴</h4>
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
              <h4 className="font-bold text-lg text-black mb-3">◆スピナの基本情報</h4>
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
                      <td>鳥害など害虫・害獣全般</td>
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
                <h4 className="font-bold text-lg text-black">◆スピナの口コミ</h4>
                <a href="https://www.google.com/search?q=スピナ+鳥害駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 鳩110番 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">8</span>
                <h3 className="text-2xl font-bold text-black">鳩110番（鳥害駆除）</h3>
              </div>
              <img src="/images/hero-animal-new.jpg" alt="鳩110番" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">鳩110番の特徴</h4>
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
              <h4 className="font-bold text-lg text-black mb-3">◆鳩110番の基本情報</h4>
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
                      <td>鳥害など害虫全般</td>
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
                <h4 className="font-bold text-lg text-black">◆鳩110番の口コミ</h4>
                <a href="https://www.google.com/search?q=鳩110番+鳥害駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* プロテクト */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">9</span>
                <h3 className="text-2xl font-bold text-black">プロテクト（鳥害駆除専門）</h3>
              </div>
              <img src="/images/hero-animal-new.jpg" alt="プロテクト" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">プロテクトの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>当サイトでは、本業者の特徴について公式情報を確認中です。ご利用前に、公式サイトにて最新情報をご確認ください。</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆プロテクトの基本情報</h4>
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
                      <td>鳥害専門</td>
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
                <h4 className="font-bold text-lg text-black">◆プロテクトの口コミ</h4>
                <a href="https://www.google.com/search?q=プロテクト+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

      {/* 主な鳥の種類と法的な扱い */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">鳥害の原因となる主な鳥と法的な扱い</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {birdTypes.map((bird) => (
              <div key={bird.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">{bird.name}</h3>
                  <div className={`badge ${bird.color} badge-lg`}>{bird.danger}</div>
                  <p className="text-gray-700 mt-4">{bird.description}</p>
                  <div className="divider"></div>
                  <ul className="space-y-2">
                    {bird.features.map((feature, idx) => (
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
          <div className="alert alert-warning mt-8 shadow-lg">
            <div>
              <h3 className="font-bold">鳥獣保護管理法による規制</h3>
              <p className="text-sm">
                鳥獣保護管理法では、「鳥獣」を「鳥類又は哺乳類に属する野生動物」と定義し、「鳥獣及び鳥類の卵は、捕獲等又は採取等（採取又は損傷をいう。以下同じ。）をしてはならない。」と定めています（第2条・第8条）。ハト・カラス・ムクドリなどの野鳥も対象であり、捕獲や卵の採取には環境大臣または都道府県知事等の許可が必要です。違反した場合は、1年以下の拘禁刑または100万円以下の罰金が科せられます（第83条）。
              </p>
              <p className="text-xs mt-2">
                出典：<a href={LAW_URL} target="_blank" rel="nofollow noopener" className="underline">e-Gov法令検索「鳥獣の保護及び管理並びに狩猟の適正化に関する法律」</a>（2026年10月17日確認）、
                <a href={ENV_CAPTURE_URL} target="_blank" rel="nofollow noopener" className="underline">環境省「捕獲許可制度の概要」</a>（2026年10月17日確認）、
                <a href={TOKYO_CAPTURE_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「野生鳥獣の捕獲について」</a>（2026年10月17日確認）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 糞の清掃時の注意 */}
      <section className="py-16 px-4 bg-error/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center text-error">
            糞の清掃時の注意
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cleaningPoints.map((point) => (
              <div key={point.step} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="badge badge-error badge-lg mb-4">ポイント {point.step}</div>
                  <h3 className="card-title text-xl">{point.title}</h3>
                  <p className="text-gray-700">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700 mt-8">
            東京都環境局は「野鳥は様々な細菌や寄生虫を持っているおそれがありますので、清掃の際は使い捨てのビニール手袋やマスクを着用するなど、糞に直接触れないよう注意してください。」と案内しています。
          </p>
          <p className="text-xs text-gray-600 mt-2">
            出典：<a href={TOKYO_FAQ_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「野生鳥獣との接し方について」</a>（2026年10月17日確認）
          </p>
        </div>
      </section>

      {/* 巣や侵入を見つけたら */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">巣や侵入を見つけたときの対応</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-error text-error-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">避けるべき行動</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>卵やヒナがいる巣を許可なく撤去する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>野鳥を許可なく捕獲する、傷つける</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>カラスやハトにエサを与える</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>糞や死骸に素手で触れる</span>
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
                    <span>ドバトの巣は、作り始めた時点で取り除く</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>卵がある場合は、ヒナの巣立ちを待つか、自治体の担当窓口に相談する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>カラスの巣は、巣のある場所（樹木・電柱など）の管理者に撤去を依頼する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>ベランダの物を片付け、室外機などの隙間をふさぐ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-6">
            東京都環境局は「巣のみを撤去することについては特別な許可は必要ありませんが、卵またはヒナを含めた野生鳥獣は許可なく捕獲・殺傷することができません。」と案内しています。取り扱いは都道府県により異なる場合があるため、お住まいの自治体にご確認ください。
          </p>
          <p className="text-xs text-gray-600 mt-2">
            出典：<a href={TOKYO_FAQ_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「野生鳥獣との接し方について」</a>（2026年10月17日確認）、
            <a href={TOKYO_CROW_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「カラスに関するQ&amp;A」</a>（2026年10月17日確認）、
            <a href={TOKYO_FEEDING_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「野生動物への餌付け防止のお願い」</a>（2026年10月17日確認）
          </p>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">鳥害駆除の料金相場</h2>
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
              <strong>カラスの巣の撤去費用と自治体の補助：</strong>東京都環境局は、カラスの巣の撤去費用について「費用は、巣の場所や高さなど条件によって変わりますが、およそ1件あたり、20,000円から30,000円程度です。」と案内しています。また「お住まいの区や市で、巣の撤去や、巣の撤去にかかわる費用の補助を実施しているところがあります。」としています。お住まいの市区町村にご確認ください。
              （出典：<a href={TOKYO_CROW_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「カラスに関するQ&amp;A」</a>（2026年10月17日確認））
            </span>
          </div>
        </div>
      </section>

      {/* 季節ごとの注意点 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">時期ごとの注意点と予防対策</h2>
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
            出典：<a href={TOKYO_CROW_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「カラスに関するQ&amp;A」</a>（2026年10月17日確認）、
            <a href={TOKYO_FAQ_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「野生鳥獣との接し方について」</a>（2026年10月17日確認）、
            <a href={TOKYO_FEEDING_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「野生動物への餌付け防止のお願い」</a>（2026年10月17日確認）
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
                <h3 className="font-bold text-lg mb-1">卵・ヒナの有無</h3>
                <p>
                  卵やヒナがいる巣の撤去、野鳥の捕獲には、鳥獣保護管理法にもとづく許可が必要です。許可の権限は環境大臣または都道府県知事にあり、多くの都道府県では権限の一部を市町村長に移譲していると環境省は案内しています。許可の要否と申請先は、お住まいの都道府県・市区町村の担当窓口にご確認ください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">巣のある場所の管理者</h3>
                <p>
                  東京都環境局は、カラスの巣の撤去について、巣のある場所（樹木、電柱など）の管理者を確認し、管理者に撤去を依頼するよう案内しています。個人宅の敷地内の場合は、土地所有者が民間事業者等へ直接依頼します。集合住宅の場合は、住宅管理者や管理組合にご相談ください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">自治体の補助・相談窓口</h3>
                <p>
                  巣の撤去や撤去費用の補助を実施している区市があります（東京都環境局）。業者に依頼する前に、お住まいの市区町村の環境担当部署にご確認ください。ご利用前に、各業者の公式サイトにて最新情報をご確認ください。
                </p>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-bold text-base mb-2">出典</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><a href={LAW_URL} target="_blank" rel="nofollow noopener" className="underline">e-Gov法令検索「鳥獣の保護及び管理並びに狩猟の適正化に関する法律」</a>（2026年10月17日確認）</li>
                  <li><a href={ENV_CAPTURE_URL} target="_blank" rel="nofollow noopener" className="underline">環境省「捕獲許可制度の概要」</a>（2026年10月17日確認）</li>
                  <li><a href={TOKYO_CAPTURE_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「野生鳥獣の捕獲について」</a>（2026年10月17日確認）</li>
                  <li><a href={TOKYO_FAQ_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「野生鳥獣との接し方について」</a>（2026年10月17日確認）</li>
                  <li><a href={TOKYO_CROW_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「カラスに関するQ&amp;A」</a>（2026年10月17日確認）</li>
                  <li><a href={TOKYO_FEEDING_URL} target="_blank" rel="nofollow noopener" className="underline">東京都環境局「野生動物への餌付け防止のお願い」</a>（2026年10月17日確認）</li>
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
          <h2 className="heading-primary text-center">地域別の鳥害駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}で鳥害駆除</h3>
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
              鳥害対策のご相談について
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
