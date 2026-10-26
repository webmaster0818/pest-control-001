import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "/kemushi" },
  title: "毛虫駆除業者比較 | チャドクガ・イラガの発生時期と対策",
  description: "毛虫駆除業者9社を、料金・対応エリア・受付時間の観点から比較しています。チャドクガ・イラガなどの発生時期、毒毛に触れた場合の対処法、庭木の予防方法を自治体の公表情報にもとづいてご説明します。",
  openGraph: {
    title: "毛虫駆除業者比較 | チャドクガ・イラガの発生時期と対策",
    description: "毛虫駆除業者9社を、料金・対応エリア・受付時間の観点から比較しています。チャドクガ・イラガの発生時期と対処法もご説明します。",
    url: "https://gaichu-pro.com/kemushi",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function KemushiPage() {
  const SUGINAMI_URL = "https://www.city.suginami.tokyo.jp/s102/846.html";
  const MEGURO_URL = "https://www.city.meguro.tokyo.jp/seikatsueisei/kenkoufukushi/eisei/cyadokuga.html";
  const KYOTO_URL = "https://www.city.kyoto.lg.jp/hokenfukushi/page/0000042469.html";

  const kemushiTypes = [
    {
      name: "チャドクガ",
      danger: "皮膚炎に注意",
      description: "ツバキ、サザンカなどのツバキ科の植物に発生する毒のある毛虫です。幼虫（毛虫）・成虫（ガ）のいずれも、毒毛に触れると皮膚炎を起こします。卵、抜け殻、死んだ毛虫でもかぶれることがあります（目黒区）。",
      features: ["主な発生樹木: ツバキ、サザンカ、チャなど", "発生回数: 年2回（目黒区・京都市）", "初期は葉の裏側に集団で発生します（杉並区）"],
      color: "badge-error",
    },
    {
      name: "イラガ",
      danger: "痛みに注意",
      description: "サクラ、ウメ、カキなどに発生します。幼虫はトゲを持ち、触れると激しい痛みがあります（杉並区）。",
      features: ["主な発生樹木: サクラ、ウメ、カキなど", "発生回数: 年2回（夏から秋）", "冬にはまゆが見られます"],
      color: "badge-warning",
    },
    {
      name: "タケノホソクロバ",
      danger: "痛み・湿疹に注意",
      description: "竹やササなどに発生します。幼虫に触れると激しい痛みがあり、湿疹ができます（杉並区）。",
      features: ["主な発生植物: 竹、ササなど", "発生回数: 年2回（初夏と秋）", "初期は葉の裏側に集団で発生します"],
      color: "badge-warning",
    },
  ];

  const emergencySteps = [
    {
      step: "1",
      title: "こすらない・かかない",
      description: "かくと被害が広がるため、毒毛が付いたと思われる部位をこすったり、かいたりしないでください。",
    },
    {
      step: "2",
      title: "粘着テープで毒毛を取り除く",
      description: "セロハンテープなどで、毒毛が付いたと思われる周辺をそっと押さえて取り除きます。",
    },
    {
      step: "3",
      title: "流水で洗い流す",
      description: "水道やシャワーの流水で洗い流します。目に入った場合は特に注意が必要です。",
    },
  ];


  const seasonCalendar = [
    {
      season: "春〜初夏（4〜6月頃）",
      target: "チャドクガ",
      activity: "チャドクガ幼虫の1回目の発生時期",
      advice: "目黒区は5月から6月頃、京都市は4月〜5月を発生時期として案内しています。ツバキ・サザンカなどの葉の裏側を点検し、毛虫が小さく集団でいるうちに葉や枝ごと切り取ることが効果的です。",
    },
    {
      season: "夏〜秋（8〜9月頃）",
      target: "チャドクガ・イラガ",
      activity: "チャドクガ幼虫の2回目の発生時期",
      advice: "チャドクガは8月から9月頃に再び発生します（目黒区・京都市）。イラガはサクラ・ウメ・カキなどに、夏から秋にかけて年2回発生します（杉並区）。",
    },
    {
      season: "秋",
      target: "サクラケムシ",
      activity: "サクラケムシの発生時期",
      advice: "杉並区では、サクラケムシは秋ごろサクラなどに大量発生し、葉を食べてふんを大量に落とすと案内しています。人を刺すことはありません。",
    },
    {
      season: "冬",
      target: "イラガ",
      activity: "イラガのまゆが見られる時期",
      advice: "杉並区では、イラガは冬にまゆが見られると案内しています。翌シーズンに備え、樹木を高くしない・枝葉を茂らせすぎないなど、日常の樹木の管理を行うことが大切です（目黒区）。",
    },
  ];

  const checklist = [
    "対象の樹木・本数・高さと作業内容が見積書に明記されているか",
    "切り取った枝葉や毛虫の処分まで作業に含まれているか",
    "薬剤を使用する場合、薬剤の種類と近隣への配慮について説明があるか",
    "高所作業など追加料金が発生する条件が事前に示されているか",
    "作業後に再発した場合の対応（保証の有無・期間）が書面で示されているか",
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
        { label: "毛虫" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-new.jpg"
          alt="毛虫駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              毛虫駆除の基礎知識と業者比較
            </h1>
            <p className="text-xl mb-8">
              チャドクガ・イラガなどの発生時期と、毒毛に触れた場合の対処法をご説明します
            </p>
            </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            毛虫駆除の基礎知識と業者比較
          </h2>
          <p className="text-lg text-gray-700">
            自治体の公表情報にもとづき、毛虫の種類・被害・駆除時の注意点をご説明します
          </p>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">毛虫駆除業者の比較</h2>
          
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
                  <td className="text-center">○ 営業所：関東・静岡・愛知・大阪・京都</td>
                  <td className="text-center">◎ 28府県（地域により対応不可あり）</td>
                  <td className="text-center">○ 富山・石川・新潟・岐阜</td>
                  <td className="text-center">○ 北九州中心に福岡県全域・山口県西部ほか</td>
                  <td className="text-center">◎ 関東・長野・新潟</td>
                  <td className="text-center">○ 三重・愛知・静岡（岐阜は一部）</td>
                  <td className="text-center">◎ 関西・関東・中部</td>
                  <td className="text-center">○ 福井県</td>
                  <td className="text-center">◎ 全国（沖縄・離島除く）</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">8:30〜19:30</td>
                  <td className="text-center">8:30〜17:30（土日祝・時間外も対応）</td>
                  <td className="text-center">8:00〜20:00</td>
                  <td className="text-center">平日9:00〜18:00</td>
                  <td className="text-center">8:00〜17:00（日祝休み）</td>
                  <td className="text-center">平日9:00〜17:00・土曜9:00〜12:00</td>
                  <td className="text-center">9:00〜17:00（土日祝休み）</td>
                  <td className="text-center">24時間365日</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応害虫・害獣</th>
                  <td className="text-center">毛虫：公式に記載なし</td>
                  <td className="text-center">毛虫：公式に掲載</td>
                  <td className="text-center">毛虫：公式に記載なし</td>
                  <td className="text-center">毛虫：公式に記載なし</td>
                  <td className="text-center">毛虫：公式に掲載</td>
                  <td className="text-center">毛虫：公式に記載なし</td>
                  <td className="text-center">毛虫：公式に記載なし</td>
                  <td className="text-center">毛虫：公式に記載なし</td>
                  <td className="text-center">毛虫：公式に記載なし</td>
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
                  <td className="text-center">○ 無料（土日祝・夜間は有料）</td>
                  <td className="text-center">○ 無料（条件あり）</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">キャンセル</th>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">○ 調査後に断っても費用なし</td>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
                  <td className="text-center">公式に記載なし</td>
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
          <h2 className="heading-primary text-center mt-16 mb-8">毛虫駆除業者の詳細</h2>

          {/* 株式会社三共消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-1">1</span>
                <h3 className="text-2xl font-bold text-black">株式会社三共消毒（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/sankyo-shoudoku.png" name="株式会社三共消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社三共消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業 大正14年4月の害虫・害獣駆除業者です（公式の会社概要）</li>
                <li>営業所は東京都・神奈川県・千葉県・埼玉県・栃木県・群馬県・静岡県・愛知県・大阪府・京都府にあります（公式の営業所一覧）</li>
                <li>出張調査・見積もりは無料と案内しています。駆除の種類により無料保証があり、保証期間中の再発は無料で再施工するとしています（期間の記載なし）</li>
                <li>公式サイトに毛虫の駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                出張調査・見積もり無料<br />
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
                      <td>営業所：東京都・神奈川県・千葉県・埼玉県・栃木県・群馬県・静岡県・愛知県・大阪府・京都府（対応エリアの記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>公式に記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>個人向け：シロアリ・ねずみ・ゴキブリ・トコジラミ・ハチ（毛虫の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（毛虫の駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>駆除の種類により無料保証あり（期間の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>出張調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式に記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社三共消毒 公式サイト（https://sankyo-shodoku.com/company/overview/ ・ /company/area/ ・ /service/personal/ ・ /service/personal/price/） 2026年10月18日確認</p>
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
                出張調査・見積もり無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社アサンテ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-2">2</span>
                <h3 className="text-2xl font-bold text-black">株式会社アサンテ（毛虫駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/asante.png" name="株式会社アサンテ" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社アサンテの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>害虫・害獣対策は1986年から行い、累計12万件と案内しています（公式表記）</li>
                <li>受付時間は8:30〜19:30（夏期休暇・年末年始除く）で、受付時間内であれば当日対応も可能としています</li>
                <li>現地調査・見積もりは無料で、調査の結果施工を断っても費用はかからないとしています</li>
                <li>毛虫については、公式サイトで毛虫（樹木害虫）を掲載しています</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                受付 8:30〜19:30<br />
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
                      <td>山形・宮城・福島・群馬・栃木・茨城・埼玉・東京・神奈川・千葉・静岡・山梨・長野・新潟・愛知・三重・岐阜・滋賀・京都・奈良・和歌山・大阪・岡山・広島・愛媛・高知・佐賀・鹿児島（地域により対応できない場合あり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:30〜19:30（夏期休暇・年末年始除く）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ネズミ・アライグマ・ハクビシン・ハト・ハチ・トコジラミ・ダニ・ゴキブリ・食品害虫・チョウバエ／チカイエカ・毛虫（樹木害虫）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>保証制度なし（一般住宅のネズミ防除・小動物追い出しは1〜6ヶ月の契約期間制度）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>現地調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>請求書払い・クレジットカード・分割払い</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社アサンテ 公式サイト（https://www.asante.co.jp/vermin/ ・ /area/ ・ /company/c06.html） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社アサンテの口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社アサンテ+毛虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                受付 8:30〜19:30<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 有限会社北日本消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-3">3</span>
                <h3 className="text-2xl font-bold text-black">有限会社北日本消毒（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kita-nihon.png" name="有限会社北日本消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">有限会社北日本消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>有限会社北日本消毒は富山県富山市に所在し、公式サイトでは「富山県の専門業者として40年以上の実績」と案内しています（設立 昭和51年9月）</li>
                <li>対応エリアは富山県・石川県・新潟県・岐阜県、営業時間は8:30〜17:30（土日祝・時間外も対応と公式表記）</li>
                <li>公式サイトのサービス一覧に毛虫の駆除の記載はありません（2026年10月18日確認）</li>
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
                      <td>シロアリ・ハチ・ゴキブリ・ネズミ・クモ・ハクビシン・カメムシ・鳩などの鳥獣・コウモリ、その他としてムカデ・ハエ・ダニ・ノミ・ヤスデ・ゲジゲジ（毛虫の記載なし）</td>
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
              <p className="text-xs text-gray-600 mt-2">出典：有限会社北日本消毒 公式サイト（https://kitanihonshoudoku.co.jp/company/ ・ /service/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆有限会社北日本消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=有限会社北日本消毒+毛虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                <h3 className="text-2xl font-bold text-black">株式会社あい営繕（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/ai-eizen.png" name="株式会社あい営繕" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社あい営繕の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>北九州を中心に福岡県全域・山口県西部・大分県北部・佐賀県東部に対応しています（公式表記）</li>
                <li>電話受付は8:00〜20:00で、土日祝も営業しています</li>
                <li>見積もりは無料で相見積もりも可としています。ハチ駆除は12月までのシーズン保証（同じ場所・同じ種類の再営巣は無料で再施工）、ムカデ駆除は5年保証です</li>
                <li>公式サイトに毛虫の駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                受付 8:00〜20:00・土日祝も営業<br />
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
                      <td>北九州を中心に福岡県全域、山口県西部、大分県北部、佐賀県東部</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:00〜20:00（土日祝も営業）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>シロアリ・ムカデ・屋根裏動物（イタチ、アライグマ）・コウモリ・ネズミ・ハト・ハチ（毛虫の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（毛虫の駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>ハチ：その年の12月までのシーズン保証／ムカデ：5年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>見積もり無料（自社対応エリア内は出張費なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>クレジットカード・分割払い（最長60回・審査あり）ほか</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社あい営繕 公式サイト（https://www.shiroarikujyo.com/ ・ /bee ・ https://www.gaijyuukujyo.com/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社あい営繕の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社あい営繕+毛虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                受付 8:00〜20:00・土日祝も営業<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社ミヤコ消毒 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">5</span>
                <h3 className="text-2xl font-bold text-black">株式会社ミヤコ消毒（毛虫駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/miyako.png" name="株式会社ミヤコ消毒" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社ミヤコ消毒の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>1973年に創立。公式サイトで「アフターフォローが強み、リピート率80％以上」と案内しています。</li>
                <li>薬剤は「厚生労働省に認可された医薬品、医薬部外品を中心に」使用（公式のよくある質問）</li>
                <li>2022年3月に日本ペストコントロール協会の優良事業所認証を取得、東京都の建築物ねずみ昆虫等防除業に登録（公式の会社概要）</li>
                <li>毛虫については、公式サイトでチャドクガ等ケムシ類を掲載しています</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                平日9:00〜18:00受付<br />
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
                      <td>ネズミ・ゴキブリ・シロアリ・有害鳥獣・アリ・ケムシ類・ダニ・ハチ・ハエ・蚊・トコジラミ・ゲジゲジ ほか</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>公式に記載なし</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>事前調査・見積もりは無料（高所など一部例外あり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式に記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：ミヤコ消毒 公式サイト（https://www.kkmiyako.com/ ・ https://www.kkmiyako.com/company/overview ・ https://www.kkmiyako.com/faq）2026年10月16日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社ミヤコ消毒の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社ミヤコ消毒+毛虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                平日9:00〜18:00受付<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社こだま */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">6</span>
                <h3 className="text-2xl font-bold text-black">株式会社こだま（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kodama.png" name="株式会社こだま" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社こだまの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>三重県津市の会社で、創業は昭和51年2月です（公式の会社案内）</li>
                <li>施工エリアは三重県・愛知県（岐阜県の一部を含む）・静岡県を中心とし、営業時間は8:00〜17:00（日曜・祝日休み）です</li>
                <li>見積もり・相談・現地調査は無料と案内しています</li>
                <li>公式サイトに毛虫の駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                受付 8:00〜17:00<br />
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
                      <td>三重県・愛知県（岐阜県の一部を含む）・静岡県を中心（取り扱い商品により対応できない地域あり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>8:00〜17:00（定休日 日曜・祝日）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>シロアリ・ネズミ・ハチ・イタチ・ハクビシン・アライグマ・コウモリ・ハト・ムカデ・ヤスデ・黒アリ ほか（毛虫の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（毛虫の駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>公式に記載なし（ムカデ対策SCキーパーは機材保証5年）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>見積もり・相談・現地調査は無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式に記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社こだま 公式サイト（https://kankyo-kodama.co.jp/company/ ・ /vermin/ ・ /centipede_sc/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社こだまの口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社こだま+毛虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                受付 8:00〜17:00<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 大洋防疫研究所 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">7</span>
                <h3 className="text-2xl font-bold text-black">大洋防疫研究所（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/taiyo.png" name="大洋防疫研究所" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">大洋防疫研究所の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業は昭和50年11月です（公式の会社概要）</li>
                <li>対応エリアは関西・関東・中部（その他地域は要相談）、電話受付は平日9:00〜17:00・土曜9:00〜12:00、施工は24時間年中無休（年末年始除く）です</li>
                <li>相談・現地調査・見積もりは無料で、見積もり後に追加費用は発生しないと案内しています</li>
                <li>公式サイトに毛虫の駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                現地調査・見積もり無料<br />
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
                      <td>関西・関東・中部（その他地域は要相談）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>平日9:00〜17:00・土曜9:00〜12:00（4〜6月は平日・土曜とも9:00〜17:00）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ゴキブリ・ネズミ・トコジラミ・シロアリ・ハエ・イタチ・ノミ・ハチ・ハト・アリ・ムカデ・タカラダニ・シバンムシ ほか（毛虫の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（毛虫の駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>シロアリ駆除のみ5年保証（その他の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・現地調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>公式に記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：大洋防疫研究所 公式サイト（https://taiyouboueki.co.jp/ ・ /info/ ・ /charge_list/ ・ /other/） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆大洋防疫研究所の口コミ</h4>
                <a href="https://www.google.com/search?q=大洋防疫研究所+毛虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                現地調査・見積もり無料<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 株式会社第一環研 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">8</span>
                <h3 className="text-2xl font-bold text-black">株式会社第一環研（害虫・害獣駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/daiichi.png" name="株式会社第一環研" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">株式会社第一環研の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>福井県内に対応する害虫駆除業者で、設立は昭和48年です（公式の会社概要）</li>
                <li>営業時間は9:00〜17:00（休業日 土曜・日曜・祝日）です</li>
                <li>見積もり・相談は無料（土日祝日・夜間の現場調査は有料）と案内しています</li>
                <li>公式サイトに毛虫の駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                受付 9:00〜17:00<br />
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
                      <td>福井県内（福井市・坂井市・あわら市・勝山市・大野市・鯖江市・越前市・敦賀市・小浜市 ほか）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>9:00〜17:00（休業日 土曜・日曜・祝日）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>シロアリ・ゴキブリ・トコジラミ・ハチ・ムカデ・ネズミ・ダニ・ノミ・害獣・ハト（毛虫の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（毛虫の駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>大型害獣1年・シロアリ5年（ハチ等の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>見積もり・相談は無料（土日祝日・夜間の現場調査は有料）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：株式会社第一環研 公式サイト（https://d-kanken.com/ ・ /company ・ /pest） 2026年10月18日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆株式会社第一環研の口コミ</h4>
                <a href="https://www.google.com/search?q=株式会社第一環研+毛虫駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
                受付 9:00〜17:00<br />
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
                <li>ハチ（スズメバチ・アシナガバチ・ミツバチ）駆除の受付サービスで、作業は提携する加盟店が行います（運営 BEST株式会社）</li>
                <li>24時間365日受付で、日本全国（沖縄・離島を除く）に対応しています</li>
                <li>作業後1週間以内に同じ場所に再発した場合は0円で対応するとしています</li>
                <li>公式サイトに毛虫の駆除の記載はありません（2026年10月18日確認）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日受付<br />
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
                      <td>日本全国（沖縄・離島を除く）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>24時間365日受付</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ハチ（スズメバチ・アシナガバチ・ミツバチ）のみ（毛虫の記載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>公式に記載なし（毛虫の駆除の掲載なし）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>作業後1週間以内に同じ場所に再発した場合は0円</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>現地調査・事前見積もり無料（地域・加盟店・現場状況により費用がかかる場合あり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・クレジットカード・後払い</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：ハチお助け本舗 公式サイト（https://hachi.otasuke-honpo.com/ ・ https://best24.co.jp/company/） 2026年10月18日確認</p>
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
                24時間365日受付<br />
                無料相談はこちら
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 毛虫の種類と被害 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">主な毛虫の種類と被害</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kemushiTypes.map((item) => (
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
          <p className="text-xs text-gray-600 mt-6">
            出典：<a href={SUGINAMI_URL} target="_blank" rel="nofollow noopener" className="underline">杉並区「樹木に発生する毛虫」</a>（2026年10月17日確認）、
            <a href={MEGURO_URL} target="_blank" rel="nofollow noopener" className="underline">目黒区「チャドクガにご注意」</a>（2026年10月17日確認）、
            <a href={KYOTO_URL} target="_blank" rel="nofollow noopener" className="underline">京都市「チャドクガについて」</a>（2026年10月17日確認）。発生時期は地域や年により異なります。
          </p>
        </div>
      </section>

      {/* 毒毛に触れた場合の対処法 */}
      <section className="py-16 px-4 bg-error/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center text-error">
            毛虫の毒毛に触れた場合の対処法
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
              <h3 className="font-bold">薬の使用と受診について</h3>
              <p className="text-sm">
                目黒区は「『虫刺され軟こう（抗ヒスタミン入り）』が効きます。薬局に相談してください。」「かぶれが広範囲の場合は、皮膚科を受診してください。」と案内しています。京都市は、毒針毛に刺された場合は専門医に相談するよう案内しています。
              </p>
              <p className="text-xs mt-2">
                出典：<a href={MEGURO_URL} target="_blank" rel="nofollow noopener" className="underline">目黒区「チャドクガにご注意」</a>（2026年10月17日確認）、
                <a href={KYOTO_URL} target="_blank" rel="nofollow noopener" className="underline">京都市「チャドクガについて」</a>（2026年10月17日確認）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 毛虫の発生を見つけたら */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">毛虫の発生を見つけたときの対応</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-error text-error-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">避けるべき行動</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>肌を露出した服装で近づく、素手で触れる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>殺虫剤の散布だけで駆除を終える（毛虫が死んでも毒針毛は残るためです）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>枝を揺らす（毛虫が糸を吐いて垂れ下がってくるためです）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ng" aria-hidden="true"></span>
                    <span>地面に落ちた毛虫を乾いたまま掃く（毒毛が飛ぶおそれがあるためです）</span>
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
                    <span>帽子・眼鏡・長袖・長ズボン・手袋・マスクを着用し、首にタオルを巻いて肌を覆う</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>風上から近づく</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>毛虫が付いた葉や枝ごと切り取り、ビニール袋などに入れる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mark mark-ok" aria-hidden="true"></span>
                    <span>ご自身での駆除が難しい場合は、業者に依頼する</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-6">
            出典：<a href={MEGURO_URL} target="_blank" rel="nofollow noopener" className="underline">目黒区「チャドクガにご注意」</a>（2026年10月17日確認）、
            <a href={KYOTO_URL} target="_blank" rel="nofollow noopener" className="underline">京都市「チャドクガについて」</a>（2026年10月17日確認）、
            <a href={SUGINAMI_URL} target="_blank" rel="nofollow noopener" className="underline">杉並区「樹木に発生する毛虫」</a>（2026年10月17日確認）
          </p>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">毛虫駆除の料金の確かめ方</h2>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <p className="text-gray-700">
                駆除の作業内容や料金は、建物の大きさや構造、被害の状況によって異なります。広告の「〇〇円から」「基本料金□□円」といった表示の料金で依頼できるとは限らないため、作業の前に見積書を受け取り、作業内容と金額を確認してから依頼してください。複数の業者から見積もりを取って比べること、納得できない請求はその場で支払わずに消費者ホットライン「188」に相談することが勧められています。
              </p>
              <p className="text-xs text-gray-600 mt-2">
                出典：<a href="https://www.kokusen.go.jp/news/data/n-20250304_1.html" target="_blank" rel="nofollow noopener" className="underline">国民生活センター「【広告の格安料金に要注意！】作業後に高額請求する害虫駆除トラブル」（2025年3月4日公表）</a>（2026年10月26日確認）
              </p>
            </div>
          </div>
          <div className="alert alert-info mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>
              <strong>費用について：</strong>費用は発生範囲・樹木の本数・作業の高さなどにより変わります。
              正確な金額は、複数の業者の見積もりで比較されることをおすすめします。
            </span>
          </div>
        </div>
      </section>

      {/* 季節別対策カレンダー */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">季節別毛虫対策カレンダー</h2>
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
            出典：<a href={MEGURO_URL} target="_blank" rel="nofollow noopener" className="underline">目黒区「チャドクガにご注意」</a>（2026年10月17日確認）、
            <a href={KYOTO_URL} target="_blank" rel="nofollow noopener" className="underline">京都市「チャドクガについて」</a>（2026年10月17日確認）、
            <a href={SUGINAMI_URL} target="_blank" rel="nofollow noopener" className="underline">杉並区「樹木に発生する毛虫」</a>（2026年10月17日確認）。発生時期は地域や年により異なります。
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
                <h3 className="font-bold text-lg mb-1">自治体の対応範囲</h3>
                <p>
                  個人の敷地内の樹木に発生した毛虫は、原則として所有者が対処します。杉並区は「区では個人の敷地にある樹木について、消毒作業は一切行っていません。」、目黒区は「保健所では、個人の敷地内の害虫の駆除は行っていません。ご自分で駆除できない方には、駆除業者を紹介しています。」と案内しています。対応は自治体により異なるため、お住まいの市区町村にご確認ください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">発生している樹木と範囲</h3>
                <p>
                  樹木の種類（ツバキ・サザンカ・サクラなど）、毛虫が付いている範囲、樹木の高さを確認しておくと、見積もりの比較がしやすくなります。生垣などに発生した場合は、通行する方が知らずに被害にあうことがあると目黒区は案内しています。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">見積もりの内容</h3>
                <p>
                  作業範囲、薬剤使用の有無、切り取った枝葉の処分、追加料金の条件を事前にご確認ください。ご利用前に、各業者の公式サイトにて最新情報をご確認ください。
                </p>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-bold text-base mb-2">出典</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><a href={SUGINAMI_URL} target="_blank" rel="nofollow noopener" className="underline">杉並区「樹木に発生する毛虫」</a>（2026年10月17日確認）</li>
                  <li><a href={MEGURO_URL} target="_blank" rel="nofollow noopener" className="underline">目黒区「チャドクガにご注意」</a>（2026年10月17日確認）</li>
                  <li><a href={KYOTO_URL} target="_blank" rel="nofollow noopener" className="underline">京都市「チャドクガについて」</a>（2026年10月17日確認）</li>
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
          <h2 className="heading-primary text-center">地域別の毛虫駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}で毛虫駆除</h3>
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
              毛虫駆除のご相談について
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
