import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import RelatedLinkList from "@/app/components/RelatedLinkList";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import { AffBanner, AffText } from "@/app/components/AffLink";

import CompanyVisual from "@/app/components/CompanyVisual";
export const metadata: Metadata = {
  alternates: { canonical: "/hakubishin" },
  title: "ハクビシン駆除の基礎知識 | 駆除方法と再発防止",
  description: "ハクビシン駆除の料金相場と業者の比較に加え、ハクビシンの特徴、屋根裏への侵入などの被害、鳥獣保護管理法上の扱い、業者に依頼する前に確認することを公的機関の資料をもとにご説明します。",
  openGraph: {
    title: "ハクビシン駆除業者比較 | 料金相場・特徴・法律上の扱い",
    description: "ハクビシン駆除業者を料金・保証・対応エリアの観点から比較し、ハクビシンの特徴や鳥獣保護管理法上の扱いもご説明します。",
    url: "https://gaichu-pro.com/hakubishin",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function HakubishinPage() {
  const types = [
    {
      name: "外見・大きさ",
      description: "鼻先から尾の先までの長さは1m程度で、頭から胴体と同程度の長い尾をもちます。体は茶褐色から灰褐色で、黒い頭部に鼻筋が白いのが特徴です。",
      habitat: "外来種（ジャコウネコ科）",
      features: ["体長（成獣）：40〜60cm", "体重（成獣）：2.0〜5.5kg", "足：前後肢とも丸形の5本指で、分厚い肉球をもつ"],
      color: "badge-error",
    },
    {
      name: "生息環境・行動",
      description: "高標高地から農地周辺、都市部までさまざまな環境に生息し、東京都では23区のほぼ全域に分布しています。夜行性で、木登りなど立体的な移動が得意です。",
      habitat: "都市部から山地まで",
      features: ["活動：夜間に偏る（冬は活動が低下し半休眠状態）", "移動：細い電線の上や、雨樋のような滑りやすい柱も登る", "食べ物：雑食性で、特に果実を好む"],
      color: "badge-warning",
    },
    {
      name: "繁殖・子育て",
      description: "繁殖期は1月〜9月、出産期は3月〜11月と推定されており、ほとんど年間を通して繁殖します。樹洞や家屋の天井裏などを、ねぐらや出産・子育ての場として利用します。",
      habitat: "ほぼ年間を通して繁殖",
      features: ["妊娠期間：約2か月", "産仔数：1〜4頭", "子：生後3か月で成獣と同程度の体重になる"],
      color: "badge-info",
    },
  ];

  const damages = [
    {
      category: "家屋への侵入",
      icon: "",
      examples: [
        "家屋をねぐらや子育ての場として利用し、足音や子の鳴き声などの騒音が報告されています",
        "夏場は涼しい床下を、気温が下がると暖かい天井裏を日中の休憩場所として利用します",
        "ねぐら内で排泄するため糞尿が堆積し、天井板が落ちる被害に至った事例もあります",
      ],
    },
    {
      category: "農作物などの被害",
      icon: "",
      examples: [
        "ぶどう、かき、トマトなど、甘く汁気の多い作物を好みます",
        "とうもろこしは軸に登って皮を剥き、実の部分を食べます",
        "飼育している鶏を食べられたという被害も報告されています",
      ],
    },
    {
      category: "健康への影響",
      icon: "",
      examples: [
        "ハクビシンにはノミやダニが付いており、それらが媒介する病気や、糞尿などを経由して伝わる感染症があるとされています",
        "人だけでなく、ペットに感染するおそれがある病気も媒介します",
        "ハクビシンなどからSFTS（重症熱性血小板減少症候群）ウイルスの抗体が見つかっています",
      ],
    },
  ];

  const difficulties = [
    {
      title: "法律上の制約",
      description: "ハクビシンは鳥獣保護管理法の対象となる野生動物で、同法施行規則の別表第二に狩猟鳥獣として掲げられています。鳥獣の捕獲等は原則として禁止されており、被害防止のために捕獲する場合は都道府県知事等の許可を、狩猟として捕獲する場合は狩猟免許の取得と狩猟者登録を受け、定められた区域・期間（北海道以外は原則11月15日〜翌年2月15日）・猟法を守る必要があります。なお、ハクビシンは外来生物法の特定外来生物には指定されていません（アライグマは特定外来生物です）。",
    },
    {
      title: "立体的な移動能力",
      description: "分厚い肉球を押し付けて挟むように上り下りするため、雨樋のような滑りやすい柱でも登ることができます。細い電線の上も移動できるため、地上からの対策だけでは侵入を防げません。",
    },
    {
      title: "わずかな隙間からの侵入",
      description: "農林水産省のマニュアルでは6cm×12cmの隙間があれば侵入できるとされ、東京都環境局は8センチメートル四方の隙間にも入り込むと説明しています。中型動物の侵入は床下の通風口からが最も多く、上部では軒の破損部分、瓦屋根の隙間、増築した継ぎ目などが狙われます。",
    },
    {
      title: "夜行性で姿を確認しにくい",
      description: "活動時間帯は夜間に偏っており、日中は天井裏などで休んでいるため、姿を直接確認することが難しい動物です。屋根裏の物音や天井のシミなどの痕跡から判断します。",
    },
  ];

  const methods = [
    {
      name: "捕獲（許可捕獲・狩猟）",
      description: "鳥獣保護管理法では、狩猟による場合を除き、鳥獣の捕獲等は原則として禁止されています。ハクビシンによる被害を防ぐために捕獲する場合は、都道府県知事等の許可を受けて行います。東京都では、区市町が「東京都アライグマ・ハクビシン防除実施計画」に基づき捕獲を実施しています。",
      tag: "許可・免許が必要",
      pros: ["許可を受けたうえで、被害を起こしている個体に対処できる", "中型獣類の捕獲には小型の箱わなが使われる"],
      cons: ["許可の申請と、許可された期間・区域・方法の遵守が必要", "狩猟として行う場合は免許・登録・猟期の制約がある"],
    },
    {
      name: "追い出し（忌避剤）",
      description: "屋根裏に侵入した場合、くん蒸式・くん煙式の殺虫剤などの忌避剤で、その場から追い出せる可能性があります。ただし、逃げた個体が別の家に入り込んで被害を起こすことが考えられ、数を減らす根本的な解決にはつながらないとされています。",
      tag: "一時的な対処",
      pros: ["捕獲を伴わない対処である", "その場から動物を追い出せる可能性がある"],
      cons: ["密閉空間でないと煙が行き渡らず効果がないことがある", "追い出した個体が近隣に移る可能性がある"],
    },
    {
      name: "侵入口の封鎖・清掃消毒",
      description: "侵入口を確認したら、中にいないことを確かめたうえで、金属や板など丈夫な資材で塞ぎます。樹脂ネットや薄い合板は破壊される可能性があるため使用しません。家屋への侵入経路となる木の枝を切ることも対策の一つです。糞尿の処理に使った衣類や機材は洗浄・消毒します。",
      tag: "再発防止",
      pros: ["再侵入の防止につながる", "天井裏の衛生状態を回復できる"],
      cons: ["侵入口の特定に建物全体の点検が必要", "封鎖の前に中に残っていないことの確認が必要"],
    },
  ];

  const beforeRequest = [
    {
      title: "動物の種類の確認",
      description: "東京都環境局は、屋根裏で大きな音がする、天井にシミができた、庭木の果実（柿やビワなど）が食べられている、雨どいやベランダの一角にまとまって糞がある、といった場合にアライグマやハクビシンが住み着いている可能性があるとしています。ハクビシンは前後肢とも丸形の5本指の足跡を残します。顔つきが似ているタヌキやアナグマ、アライグマと見間違えられることがあるため、種類を確かめたうえで対策を選ぶ必要があります。",
    },
    {
      title: "自治体の窓口への相談",
      description: "捕獲許可の権限は都道府県知事にあり、多くの都道府県では権限の一部を市町村長に移譲しています。東京都の場合、被害にあった際はまず各区市町の環境部署や清掃部署等に問い合わせるよう案内されています。東京都環境局の問い合わせ先は、23区内が自然環境部計画課鳥獣保護管理担当（03-5388-3505）、多摩地区が多摩環境事務所自然環境課鳥獣保護管理担当（042-521-2948）です（2026年10月17日確認）。そのほかの地域では、お住まいの市区町村の担当窓口にご確認ください。",
    },
    {
      title: "捕獲許可の要否と申請者",
      description: "捕獲を伴う駆除では、鳥獣保護管理法に基づく許可が必要になる場合があります。依頼者と業者のどちらが許可を申請するのか、許可の対象となる期間・区域・方法、捕獲したハクビシンをどのように扱うのかを、契約前にご確認ください。",
    },
    {
      title: "見積もりの内訳",
      description: "調査、追い出し、侵入口の封鎖、清掃・消毒、捕獲、再訪問などの作業ごとに費用が示されているかをご確認ください。侵入口を塞ぐ前に、中に動物が残っていないことを確認する手順があるかも確認事項です。",
    },
  ];

  const priceTable = [
    { type: "戸建て（侵入口封鎖含む）", price: "80,000〜150,000円", note: "1〜2回の施工" },
    { type: "マンション（1室）", price: "50,000〜100,000円", note: "1回の施工" },
    { type: "店舗・飲食店", price: "100,000〜200,000円", note: "定期メンテナンス含む" },
    { type: "追加作業（清掃・消毒）", price: "+20,000〜50,000円", note: "被害状況により" },
  ];

  const checklist = [
    "足跡・糞・食痕などの痕跡から、ハクビシンであることを確認したうえで提案しているか",
    "捕獲を伴う場合、捕獲許可の申請を依頼者と業者のどちらが行うか",
    "お住まいの自治体の相談窓口や、捕獲器の貸出制度の有無を確認したか",
    "侵入口の調査を建物全体（床下の通風口・軒・屋根の隙間など）で行うか",
    "見積もりに侵入口封鎖・清掃・消毒の費用が含まれているか",
    "保証の対象範囲と期間が書面で示されているか",
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
        { label: "ハクビシン" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-gray-700 to-gray-900 text-white relative overflow-hidden">
        <Image
          src="/images/hero-animal-new.jpg"
          alt="ハクビシン駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ハクビシン駆除の基礎知識と業者比較
            </h1>
            <p className="text-xl mb-8">
              ハクビシンの特徴・被害・法律上の扱いと、業者選びのポイントをご説明します
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ハクビシンの被害と対策の基本
          </h2>
          <p className="text-lg text-gray-700">
            ハクビシンは鳥獣保護管理法の対象となる野生動物で、屋根裏への侵入や農作物への被害が報告されています。当サイトでは、ハクビシンの特徴や被害の傾向、捕獲に関する法律上の扱い、業者に依頼する前に確認することを、官公庁・自治体の資料をもとにご説明します。
          </p>
        </div>
      </section>

      {/* おすすめ業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">ハクビシン駆除業者の比較</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">項目</th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-1">1</span>
                      <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="thumb" />
                      <strong className="text-black">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-2">2</span>
                      <CompanyVisual id="/images/companies/roy.png" name="害獣駆除のROY" size="thumb" />
                      <strong className="text-black">害獣駆除のROY</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank rank-3">3</span>
                      <CompanyVisual id="/images/companies/buzz.png" name="害獣BUZZ" size="thumb" />
                      <strong className="text-black">害獣BUZZ</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">4</span>
                      <CompanyVisual id="/images/companies/sankyo.png" name="サンキョークリーンサービス" size="thumb" />
                      <strong className="text-black">サンキョークリーンサービス</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">5</span>
                      <CompanyVisual id="/images/companies/house-protect.png" name="ハウスプロテクト" size="thumb" />
                      <strong className="text-black">ハウスプロテクト</strong>
                      <AffText slug="house-protect" variant="small" label="公式サイト" />
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">6</span>
                      <img src="/images/hero-animal-new.jpg" alt="害獣駆除110番" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">害獣駆除110番</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">7</span>
                      <CompanyVisual id="/images/companies/protec.png" name="害獣プロテック" size="thumb" />
                      <strong className="text-black">害獣プロテック</strong>
                      <AffText slug="protec" variant="small" label="公式サイト" />
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="rank">8</span>
                      <CompanyVisual id="/images/companies/ratter.png" name="ラッター" size="thumb" />
                      <strong className="text-black">ラッター</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center border border-gray-300">全国（北海道・沖縄除く）</td>
                  <td className="text-center border border-gray-300">全国（一部不可）</td>
                  <td className="text-center border border-gray-300">関東・関西・東海・中国・九州</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">関東・関西・東海・中国・四国</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">関東・東北・関西・東海・北陸・中国・九州</td>
                  <td className="text-center border border-gray-300">関東・東海・関西・中国・九州</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">要確認</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">要確認</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">料金目安</th>
                  <td className="text-center text-primary font-bold border border-gray-300">25,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">4,730円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">要見積もり</td>
                  <td className="text-center text-primary font-bold border border-gray-300">22,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">要見積もり</td>
                  <td className="text-center text-primary font-bold border border-gray-300">22,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">状況により変動</td>
                  <td className="text-center text-primary font-bold border border-gray-300">10,000円〜</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長5年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長2年保証</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">施工業者による</td>
                  <td className="text-sm border border-gray-300">最長10年保証</td>
                  <td className="text-sm border border-gray-300">最長5年保証</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="heading-primary text-center mt-16 mb-8">ハクビシン駆除業者の詳細</h2>

          {/* 1. 駆除ザウルス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-1">1</span>
                <h3 className="text-2xl font-bold text-black">駆除ザウルス（ハクビシン駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業20年、累計相談3万件以上の実績</li>
                <li>日本ペストコントロール協会加盟</li>
                <li>最長10年保証</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆駆除ザウルスの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国（北海道・沖縄県・一部地域を除く）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">ネズミ・コウモリ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">25,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長10年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆駆除ザウルスの口コミ</h4>
                <a href="https://www.google.com/search?q=駆除ザウルス+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 2. 害獣駆除のROY */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-2">2</span>
                <h3 className="text-2xl font-bold text-black">害獣駆除のROY（ハクビシン駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/roy.png" name="害獣駆除のROY" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣駆除のROYの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>4,730円から対応可能</li>
                <li>24時間365日受付</li>
                <li>最長5年保証</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害獣駆除のROYの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国（一部対応不可エリアあり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">ネズミ・コウモリ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">4,730円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長5年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害獣駆除のROYの口コミ</h4>
                <a href="https://www.google.com/search?q=害獣駆除のROY+ハクビシン駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 3. 害獣BUZZ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank rank-3">3</span>
                <h3 className="text-2xl font-bold text-black">害獣BUZZ（ハクビシン駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/buzz.png" name="害獣BUZZ" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣BUZZの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>口コミ多数公開</li>
                <li>日本有害鳥獣駆除防除管理協会加盟</li>
                <li>最短30分で対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害獣BUZZの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東・関西・東海・中国・九州</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">ネズミ・コウモリ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長10年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害獣BUZZの口コミ</h4>
                <a href="https://www.google.com/search?q=害獣BUZZ+ハクビシン駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 4. サンキョークリーンサービス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">4</span>
                <h3 className="text-2xl font-bold text-black">サンキョークリーンサービス（ハクビシン駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/sankyo.png" name="サンキョークリーンサービス" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">サンキョークリーンサービスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>創業28年の業者</li>
                <li>日本ペストコントロール協会加盟</li>
                <li>全国対応で地域を問わず利用可能</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆サンキョークリーンサービスの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">要確認</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">ネズミ・コウモリ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">22,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長2年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆サンキョークリーンサービスの口コミ</h4>
                <a href="https://www.google.com/search?q=サンキョークリーンサービス+ハクビシン駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 5. ハウスプロテクト */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">5</span>
                <h3 className="text-2xl font-bold text-black">ハウスプロテクト（ハクビシン駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/house-protect.png" name="ハウスプロテクト" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ハウスプロテクトの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Google口コミの評価が高い</li>
                <li>2300件以上の実績掲載</li>
                <li>最短即日対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <AffBanner slug="house-protect" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆ハウスプロテクトの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東・関西・東海・中国・四国</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">ネズミ・コウモリ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長10年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆ハウスプロテクトの口コミ</h4>
                <a href="https://www.google.com/search?q=ハウスプロテクト+ハクビシン駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
              <AffText slug="house-protect" variant="button" label="ハウスプロテクトの公式サイトで無料相談" />
            </div>
          </div>

          {/* 6. 害獣駆除110番 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">6</span>
                <h3 className="text-2xl font-bold text-black">害獣駆除110番（ハクビシン駆除）</h3>
              </div>
              <img src="/images/hero-animal-new.jpg" alt="害獣駆除110番" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣駆除110番の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>東証上場企業運営</li>
                <li>累計相談500万件以上の実績</li>
                <li>全国対応で地域を問わず利用可能</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害獣駆除110番の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">ネズミ・コウモリ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">22,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">施工業者による</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害獣駆除110番の口コミ</h4>
                <a href="https://www.google.com/search?q=害獣駆除110番+ハクビシン駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 7. 害獣プロテック */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">7</span>
                <h3 className="text-2xl font-bold text-black">害獣プロテック（ハクビシン駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/protec.png" name="害獣プロテック" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣プロテックの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>50年以上の経験を持つ業者</li>
                <li>工務店歴50年、建物の構造を踏まえた施工</li>
                <li>最短30分で対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <AffBanner slug="protec" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害獣プロテックの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東・東北・関西・東海・北陸・中国・九州</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">ネズミ・コウモリ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">状況に応じて変動</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長10年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害獣プロテックの口コミ</h4>
                <a href="https://www.google.com/search?q=害獣プロテック+ハクビシン駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 8. ラッター */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="rank">8</span>
                <h3 className="text-2xl font-bold text-black">ラッター（ハクビシン駆除）</h3>
              </div>
              <CompanyVisual id="/images/companies/ratter.png" name="ラッター" size="wide" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ラッターの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>累計3万件以上の実績</li>
                <li>最短10分で対応</li>
                <li>経験のあるスタッフによる施工</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆ラッターの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東・東海・関西・中国・九州</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">要確認</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣</th>
                      <td className="bg-white text-black border border-gray-300">ネズミ・コウモリ・イタチなど害獣全般</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">10,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">最長5年保証</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆ラッターの口コミ</h4>
                <a href="https://www.google.com/search?q=ラッター+ハクビシン駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
        </div>
      </section>

      {/* ハクビシンの特徴 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ハクビシンの特徴</h2>
          <p className="text-gray-700 mb-6">ハクビシンは東南アジアや中国南東部などに自然分布するジャコウネコ科の動物で、日本には外来種として持ち込まれました。現在は東北地方から中国地方の一部、四国全域で分布が確認されており、関東地方から近畿地方では市街地でも目撃されています。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((type) => (
              <div key={type.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">{type.name}</h3>
                  <div className={`badge ${type.color} badge-lg h-auto py-1`}>{type.habitat}</div>
                  <p className="text-gray-700 mt-4">{type.description}</p>
                  <div className="divider"></div>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
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
          <p className="text-xs text-gray-600 mt-4">出典：<a href="https://www.maff.go.jp/j/seisan/tyozyu/higai/manyuaru/R5_tyuugata/r5_tyuugata_0.pdf" target="_blank" rel="nofollow noopener" className="underline">農林水産省「野生鳥獣被害防止マニュアル［中型獣類編］」（令和6年3月）</a>（2026年10月17日確認） 2-2 ハクビシン（7〜9ページ）、<a href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon/habit" target="_blank" rel="nofollow noopener" className="underline">東京都環境局「アライグマ・ハクビシンについて」</a>（2026年10月17日確認）</p>
        </div>
      </section>

      {/* 被害事例 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ハクビシンによる被害</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {damages.map((damage, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-center justify-center">{damage.category}</h3>
                  <ul className="space-y-3 mt-4">
                    {damage.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mark mark-warn" aria-hidden="true"></span>
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-4">出典：<a href="https://www.maff.go.jp/j/seisan/tyozyu/higai/manyuaru/R5_tyuugata/r5_tyuugata_0.pdf" target="_blank" rel="nofollow noopener" className="underline">農林水産省「野生鳥獣被害防止マニュアル［中型獣類編］」（令和6年3月）</a>（2026年10月17日確認） 2-2 ハクビシン（7〜9ページ）、コラム「人獣共通感染症への注意」（38ページ）、<a href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon/habit" target="_blank" rel="nofollow noopener" className="underline">東京都環境局「アライグマ・ハクビシンについて」</a>（2026年10月17日確認）</p>
          <div className="alert alert-error mt-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold">ハクビシンを見かけた場合の対応</h3>
              <p className="text-sm">ハクビシンは鳥獣保護管理法の狩猟鳥獣です。狩猟可能区域以外や狩猟期間外に、許可を受けずに捕獲した場合は、1年以下の拘禁刑または100万円以下の罰金の対象となります（同法第83条）。垣や柵で囲まれた住宅の敷地内で銃器を使わずに行う捕獲など、許可を要しない場合も法律に定められていますが（同法第11条）、狩猟期間内に限られるなどの条件があります。自己判断で捕獲せず、まずはお住まいの市区町村または都道府県の担当窓口にご相談ください。東京都環境局は、ハクビシンなどの被害にあった場合は、まず各区市町の環境部署や清掃部署等に問い合わせるよう案内しています。</p>
              <p className="text-xs mt-1">出典：<a href="https://laws.e-gov.go.jp/law/414AC0000000088" target="_blank" rel="nofollow noopener" className="underline">e-Gov法令検索「鳥獣の保護及び管理並びに狩猟の適正化に関する法律」</a>（2026年10月17日確認）、<a href="https://www.env.go.jp/nature/choju/capture/capture1.html" target="_blank" rel="nofollow noopener" className="underline">環境省「捕獲許可制度の概要」</a>（2026年10月17日確認）</p>
            </div>
          </div>
        </div>
      </section>

      {/* ハクビシン駆除が難しい理由 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ハクビシン駆除が難しい理由</h2>
          <div className="space-y-6">
            {difficulties.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="badge badge-error badge-lg">{idx + 1}</div>
                    <h3 className="card-title text-xl">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-4">出典：<a href="https://laws.e-gov.go.jp/law/414AC0000000088" target="_blank" rel="nofollow noopener" className="underline">e-Gov法令検索「鳥獣の保護及び管理並びに狩猟の適正化に関する法律」</a>（2026年10月17日確認）、<a href="https://laws.e-gov.go.jp/law/414M60001000028" target="_blank" rel="nofollow noopener" className="underline">e-Gov法令検索「鳥獣の保護及び管理並びに狩猟の適正化に関する法律施行規則」（別表第二 狩猟鳥獣）</a>（2026年10月17日確認）、<a href="https://www.env.go.jp/nature/choju/capture/capture1.html" target="_blank" rel="nofollow noopener" className="underline">環境省「捕獲許可制度の概要」</a>（2026年10月17日確認）、<a href="https://www.env.go.jp/nature/choju/hunt/hunt2.html" target="_blank" rel="nofollow noopener" className="underline">環境省「狩猟制度の概要」</a>（2026年10月17日確認）、<a href="https://www.env.go.jp/nature/intro/2outline/list.html" target="_blank" rel="nofollow noopener" className="underline">環境省「特定外来生物等一覧」</a>（2026年10月17日確認）、<a href="https://www.maff.go.jp/j/seisan/tyozyu/higai/manyuaru/R5_tyuugata/r5_tyuugata_0.pdf" target="_blank" rel="nofollow noopener" className="underline">農林水産省「野生鳥獣被害防止マニュアル［中型獣類編］」（令和6年3月）</a>（2026年10月17日確認）、<a href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon/habit" target="_blank" rel="nofollow noopener" className="underline">東京都環境局「アライグマ・ハクビシンについて」</a>（2026年10月17日確認）</p>
        </div>
      </section>

      {/* 駆除方法 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ハクビシン駆除の方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {methods.map((method) => (
              <div key={method.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-primary">{method.name}</h3>
                  <div className="badge badge-lg badge-neutral h-auto py-1">{method.tag}</div>
                  <p className="text-gray-700 mt-4">{method.description}</p>

                  <div className="mt-4">
                    <h4 className="font-bold text-sm mb-2 text-success">メリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {method.pros.map((pro, i) => (
                        <li key={i} className="text-xs">{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-bold text-sm mb-2 text-error">デメリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {method.cons.map((con, i) => (
                        <li key={i} className="text-xs">{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-success shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold">対策の組み合わせ</h3>
              <p className="text-sm">東京都環境局は、捕獲して数を減らすこと、餌資源をなくすこと、繁殖場所をなくすことを徹底して行うことが、確実に被害を減らすことにつながると説明しています。庭木の果実やペットの餌の食べ残し、生ごみを屋外に放置しないことも、餌資源をなくす対策の例として挙げられています。</p>
              <p className="text-xs mt-1">出典：<a href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon/prevention" target="_blank" rel="nofollow noopener" className="underline">東京都環境局「被害を防ぐために」</a>（2026年10月17日確認）、<a href="https://www.maff.go.jp/j/seisan/tyozyu/higai/manyuaru/R5_tyuugata/r5_tyuugata_0.pdf" target="_blank" rel="nofollow noopener" className="underline">農林水産省「野生鳥獣被害防止マニュアル［中型獣類編］」（令和6年3月）</a>（2026年10月17日確認） 3-1-2 潜み場所の対策（27ページ）・コラム「人獣共通感染症への注意」（38ページ）、<a href="https://www.env.go.jp/nature/choju/capture/capture1.html" target="_blank" rel="nofollow noopener" className="underline">環境省「捕獲許可制度の概要」</a>（2026年10月17日確認）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 業者に依頼する前に確認すること */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者に依頼する前に確認すること</h2>
          <div className="space-y-6">
            {beforeRequest.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="badge badge-primary badge-lg">{idx + 1}</div>
                    <h3 className="card-title text-xl">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-4">出典：<a href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon/prevention" target="_blank" rel="nofollow noopener" className="underline">東京都環境局「被害を防ぐために」</a>（2026年10月17日確認）、<a href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon" target="_blank" rel="nofollow noopener" className="underline">東京都環境局「アライグマ・ハクビシン対策について」</a>（2026年10月17日確認）、<a href="https://www.maff.go.jp/j/seisan/tyozyu/higai/manyuaru/R5_tyuugata/r5_tyuugata_0.pdf" target="_blank" rel="nofollow noopener" className="underline">農林水産省「野生鳥獣被害防止マニュアル［中型獣類編］」（令和6年3月）</a>（2026年10月17日確認） 2-2 ハクビシン、<a href="https://www.env.go.jp/nature/choju/capture/capture1.html" target="_blank" rel="nofollow noopener" className="underline">環境省「捕獲許可制度の概要」</a>（2026年10月17日確認）</p>
          <div className="card bg-white shadow-xl mt-8">
            <div className="card-body">
              <h3 className="card-title text-lg">ハクビシンの特徴・被害・法律に関する出典</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-900">
                <li><a href="https://laws.e-gov.go.jp/law/414AC0000000088" target="_blank" rel="nofollow noopener" className="underline">e-Gov法令検索「鳥獣の保護及び管理並びに狩猟の適正化に関する法律」</a>（2026年10月17日確認）</li>
                <li><a href="https://laws.e-gov.go.jp/law/414M60001000028" target="_blank" rel="nofollow noopener" className="underline">e-Gov法令検索「鳥獣の保護及び管理並びに狩猟の適正化に関する法律施行規則」（別表第二 狩猟鳥獣）</a>（2026年10月17日確認）</li>
                <li><a href="https://www.env.go.jp/nature/choju/capture/capture1.html" target="_blank" rel="nofollow noopener" className="underline">環境省「捕獲許可制度の概要」</a>（2026年10月17日確認）</li>
                <li><a href="https://www.env.go.jp/nature/choju/hunt/hunt2.html" target="_blank" rel="nofollow noopener" className="underline">環境省「狩猟制度の概要」</a>（2026年10月17日確認）</li>
                <li><a href="https://www.maff.go.jp/j/seisan/tyozyu/higai/manyuaru/R5_tyuugata/r5_tyuugata_0.pdf" target="_blank" rel="nofollow noopener" className="underline">農林水産省「野生鳥獣被害防止マニュアル［中型獣類編］」（令和6年3月）</a>（2026年10月17日確認）</li>
                <li><a href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon/habit" target="_blank" rel="nofollow noopener" className="underline">東京都環境局「アライグマ・ハクビシンについて」</a>（2026年10月17日確認）</li>
                <li><a href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon/prevention" target="_blank" rel="nofollow noopener" className="underline">東京都環境局「被害を防ぐために」</a>（2026年10月17日確認）</li>
                <li><a href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon" target="_blank" rel="nofollow noopener" className="underline">東京都環境局「アライグマ・ハクビシン対策について」</a>（2026年10月17日確認）</li>
                <li><a href="https://www.env.go.jp/nature/intro/2outline/list.html" target="_blank" rel="nofollow noopener" className="underline">環境省「特定外来生物等一覧」</a>（2026年10月17日確認）</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">制度や窓口は自治体によって異なります。ご利用前に、お住まいの都道府県・市区町村の公式サイトにて最新情報をご確認ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ハクビシン駆除の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table bg-white text-black shadow-xl border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">物件タイプ</th>
                  <th className="bg-gray-800 text-white border border-gray-300">料金相場</th>
                  <th className="bg-gray-800 text-white border border-gray-300">備考</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold border border-gray-300">{row.type}</td>
                    <td className="text-primary font-semibold border border-gray-300">{row.price}</td>
                    <td className="text-sm border border-gray-300">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-300 mt-4 text-center">
            ※ 被害の程度や建物の構造、侵入口の数によって料金は変動します。捕獲を伴う場合の許可申請や、捕獲後の対応にかかる費用の扱いは業者によって異なるため、見積もりの際にご確認ください。
          </p>
        </div>
      </section>

      {/* 業者選びのポイント */}
      <section className="py-16 px-4 bg-base-100">
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
              <div className="alert alert-warning mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-bold text-sm">保証内容の確認</h4>
                  <p className="text-xs">ハクビシンの再侵入時の対応範囲や保証期間は、業者ごとに異なります。保証の対象（封鎖した箇所のみか、建物全体か）と期間を、書面でご確認ください。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のハクビシン駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でハクビシン駆除</h3>
                  <p className="text-gray-700 text-sm">地域の料金相場と業者情報</p>
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
              ハクビシン駆除のご相談について
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
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <RelatedLinkList title="業者ごとの口コミ・評判（料金・保証を公式表記で確認）" links={[{ href: "/agents/house-guard-24", label: "ハウスガード24の口コミ・評判" }, { href: "/agents/gaiju-safe-guard", label: "害獣セーフガードの口コミ・評判" }, { href: "/agents/kujo-oh", label: "害獣害虫駆除王の口コミ・評判" }, { href: "/agents/machikado-gaiju-kujo", label: "街角害獣駆除相談所の口コミ・評判" }]} />
      </section>
    </div>
  );
}
