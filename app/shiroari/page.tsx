import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "シロアリ駆除の完全ガイド | 料金相場・業者の選び方 - 害虫駆除110番",
  description: "シロアリ駆除の料金相場、業者の選び方、駆除方法を徹底解説。バリア工法とベイト工法の違い、見積もり時のチェックポイントをわかりやすく紹介します。",
};

export default function ShiroariPage() {
  const methods = [
    {
      name: "バリア工法",
      description: "薬剤を土壌や木部に散布してシロアリの侵入を防ぐ従来型の工法",
      pros: ["即効性が高い", "費用が比較的安い", "広範囲に対応可能"],
      cons: ["定期的な再処理が必要", "薬剤の臭いが気になる場合がある"],
      price: "8,000〜12,000円/坪",
    },
    {
      name: "ベイト工法",
      description: "毒餌を設置してシロアリの巣ごと駆除する最新工法",
      pros: ["巣ごと根絶できる", "薬剤散布不要で安全", "環境にやさしい"],
      cons: ["効果が出るまで時間がかかる", "費用がやや高い"],
      price: "15,000〜25,000円/坪",
    },
  ];

  const priceTable = [
    { area: "全国平均", price: "10,000〜15,000円/坪", note: "一般的な木造住宅の場合" },
    { area: "東京", price: "12,000〜18,000円/坪", note: "都心部はやや高め" },
    { area: "大阪", price: "10,000〜16,000円/坪", note: "標準的な相場" },
    { area: "名古屋", price: "9,000〜14,000円/坪", note: "比較的リーズナブル" },
  ];

  const checklist = [
    "日本しろあり対策協会に加盟しているか",
    "5年以上の保証があるか",
    "見積もりは無料か・詳細な内訳があるか",
    "施工実績が豊富か（写真付きで確認）",
    "アフターフォロー体制は整っているか",
  ];

  const faqs = [
    {
      q: "シロアリ駆除の費用はどのくらいかかりますか？",
      a: "一般的な木造住宅（30坪）の場合、バリア工法で30万円〜40万円、ベイト工法で50万円〜70万円程度が相場です。建物の状態や被害の程度によって変動します。",
    },
    {
      q: "シロアリ駆除の効果はどのくらい持続しますか？",
      a: "バリア工法の場合は約5年、ベイト工法の場合は継続的な監視により長期的な効果が期待できます。多くの業者が5年保証を提供しています。",
    },
    {
      q: "シロアリ駆除は自分でできますか？",
      a: "市販の薬剤を使った応急処置は可能ですが、完全な駆除には専門知識と技術が必要です。特に建物の構造部分への被害がある場合は、必ず専門業者に依頼してください。",
    },
    {
      q: "シロアリ駆除に最適な時期はありますか？",
      a: "シロアリは一年中活動しますが、活動が活発になる4月〜6月が発見しやすい時期です。ただし、被害を発見したらすぐに対処することをおすすめします。",
    },
  ];

  const areas = [
    { name: "東京", href: "/area/tokyo" },
    { name: "大阪", href: "/area/osaka" },
    { name: "名古屋", href: "/area/nagoya" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-amber-600 to-amber-800 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-m9WIzi5i6Mc?w=1920&h=1080&fit=crop"
          alt="シロアリ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🐜</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              シロアリ駆除の完全ガイド
            </h1>
            <p className="text-xl mb-8">
              料金相場から業者の選び方まで、シロアリ駆除に必要な情報をすべて解説します
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* おすすめ業者比較 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center">おすすめシロアリ駆除業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="bg-base-200">項目</th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop" alt="害獣プロテック" className="w-20 h-20 rounded-full object-cover" />
                      <strong>害獣プロテック</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop" alt="駆除ザウルス" className="w-20 h-20 rounded-full object-cover" />
                      <strong>駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                      <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop" alt="街角害虫駆除相談所" className="w-20 h-20 rounded-full object-cover" />
                      <strong>街角害虫駆除相談所</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">4</span>
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop" alt="サンキョークリーンサービス" className="w-20 h-20 rounded-full object-cover" />
                      <strong>サンキョークリーンサービス</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">5</span>
                      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100&h=100&fit=crop" alt="キャッツ" className="w-20 h-20 rounded-full object-cover" />
                      <strong>キャッツ</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-base-200">対応エリア</th>
                  <td className="text-center">◎ 全国対応</td>
                  <td className="text-center">◎ 全国対応</td>
                  <td className="text-center">◎ 全国対応</td>
                  <td className="text-center">○ 関東6県</td>
                  <td className="text-center">◎ 全国対応</td>
                </tr>
                <tr>
                  <th className="bg-base-200">電話受付時間</th>
                  <td className="text-center">24時間365日</td>
                  <td className="text-center">24時間365日</td>
                  <td className="text-center">6:00〜20:00</td>
                  <td className="text-center">8:00〜20:00</td>
                  <td className="text-center">9:00〜18:00（365日）</td>
                </tr>
                <tr>
                  <th className="bg-base-200">対応害虫・害獣</th>
                  <td className="text-center">害獣・害虫全般</td>
                  <td className="text-center">害獣・害虫全般</td>
                  <td className="text-center">害虫全般</td>
                  <td className="text-center">シロアリ専門</td>
                  <td className="text-center">シロアリ専門</td>
                </tr>
                <tr>
                  <th className="bg-base-200">無料診断</th>
                  <td className="text-center">◎ 完全無料</td>
                  <td className="text-center">◎ 完全無料</td>
                  <td className="text-center">◎ 完全無料</td>
                  <td className="text-center">◎ 完全無料</td>
                  <td className="text-center">◎ 完全無料</td>
                </tr>
                <tr>
                  <th className="bg-base-200">キャンセル</th>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">○ 可能</td>
                  <td className="text-center">○ 可能</td>
                  <td className="text-center">△ 記載なし</td>
                  <td className="text-center">△ 記載なし</td>
                </tr>
                <tr>
                  <th className="bg-base-200">公式サイト</th>
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
        </div>
      </section>

      {/* おすすめ業者詳細 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center mb-12">おすすめシロアリ駆除業者詳細</h2>

          {/* 害獣プロテック */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-warning badge-lg">👑 1</span>
                <h3 className="text-2xl font-bold">害獣プロテック（シロアリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop" alt="害獣プロテック" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">害獣プロテックの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>「コールセンターでの相談→調査見積り→駆除作業」まで自社スタッフがワンストップで担当</li>
                <li>20年以上続くリフォーム会社が母体となっているため、住宅構造を理解した施工技術も◎</li>
                <li>弊社施工箇所が破損した場合、保証期間内であれば無償対応ですぐに駆けつけ</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">◆害獣プロテックの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <tbody>
                    <tr>
                      <th className="bg-base-200">対応エリア</th>
                      <td>全国対応</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">電話受付時間</th>
                      <td>24時間365日・通話無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">対応可能な害獣・害虫</th>
                      <td>ネズミ・イタチ・ハクビシン・アライグマ・コウモリ・害鳥・ムササビ・アナグマ・シロアリ・ハチ・その他害獣害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">保証期間</th>
                      <td>最長10年間</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">無料診断の有無</th>
                      <td>相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">支払い方法</th>
                      <td>現金払い・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg">◆害獣プロテックの口コミ</h4>
                <a href="https://www.google.com/search?q=害獣プロテック+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    1週間前に、シロアリの駆除を害獣プロテックさんにお願いしました。多くの駆除業者の中から口コミの評価やその内容を確認して、電話で相談したら、とても丁寧な対応だったので、その場で打合せ日を決めました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    依頼した当日に対応してくださり本当に助かりました。予算が厳しいと伝えると予算内でできる範囲の対策をしっかりと教えてくださり、ほぼ通常の駆除対策と変わらないレベルの対応をしてくれました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    インターネットで調べた電話番号に相談したら翌日すぐに見積もりと現場確認に来てくれました。心強かったです。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 駆除ザウルス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-lg" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                <h3 className="text-2xl font-bold">駆除ザウルス（シロアリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop" alt="駆除ザウルス" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>創業19年の長年にわたり蓄積された専門知識と実績</li>
                <li>自治体、施設、企業向けに専門講習を提供する経験豊かなプロフェッショナル集団</li>
                <li>国家資格を含む様々な資格を持つ専門家が多数在籍</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼相談・調査・見積もり完全無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">◆駆除ザウルスの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <tbody>
                    <tr>
                      <th className="bg-base-200">対応エリア</th>
                      <td>全国対応</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">電話受付時間</th>
                      <td>24時間365日・通話無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">対応可能な害獣・害虫</th>
                      <td>イタチ・テン・ネズミ・ハクビシン・アライグマ・コウモリ・アナグマ・トコジラミ・シロアリ・その他害獣害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">駆除最低料金</th>
                      <td>ネズミ 9,680円〜／コウモリ 9,680円〜／ハクビシン 9,680円〜など</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">保証期間</th>
                      <td>最長10年間（施工内容により異なる）</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">無料診断の有無</th>
                      <td>相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">支払い方法</th>
                      <td>銀行振込・クレジットカード・電子マネー・QRコード決済</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg">◆駆除ザウルスの口コミ</h4>
                <a href="https://www.google.com/search?q=駆除ザウルス+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    4月から、１階の天井裏に凄い音がしました。電話の予約も、担当して頂いた方も迅速な対応でした。写真と映像で確認しながら施工して下さって安心でした。精神面でもサポートしてもらえました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    とても親切で、対応も迅速で助かりました。屋根裏の害獣のせいで寝不足が続いていましたが、初めてのことなので色んな業者に話を聞いてみようと思い見積もりをお願いしましたが、担当の方がとても感じが良く親切だったためその日に契約しました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    コウモリの駆除をお願いしました。見積もりの現地調査で、ネズミの被害も見つかり驚きましたが、とても丁寧に説明をしていただいたので駆除を依頼することにしました。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼相談・調査・見積もり完全無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* 街角害虫駆除相談所 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                <h3 className="text-2xl font-bold">街角害虫駆除相談所（シロアリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=200&fit=crop" alt="街角害虫駆除相談所" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">街角害虫駆除相談所の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>天井や床下の詳細な撮影を伴う、無料の現地調査と見積もりを提供</li>
                <li>ムカデ、クモなど、あらゆる種類の害獣駆除に対応可能</li>
                <li>関東エリア内での現地への到着を最短30分で実現し、素早く対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">◆街角害虫駆除相談所の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <tbody>
                    <tr>
                      <th className="bg-base-200">対応エリア</th>
                      <td>全国対応</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">電話受付時間</th>
                      <td>6時〜20時・通話無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">対応可能な害獣・害虫</th>
                      <td>シロアリ・ゴキブリ・ハチ・ムカデ・クモ など害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">駆除最低料金</th>
                      <td>駆除基本料金1,100円/㎡～</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">保証期間</th>
                      <td>最長5年間（施工1年度に無料点検実施）</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">無料診断の有無</th>
                      <td>相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg">◆街角害虫駆除相談所の口コミ</h4>
                <a href="https://www.google.com/search?q=街角害虫駆除相談所+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    迅速な対応で、見積もりも丁寧に説明していただきました。駆除作業も手際よく、アフターフォローもしっかりしていて安心できました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    床下の写真を撮って見せてくれたので、被害状況がよく分かりました。説明も分かりやすく、信頼してお任せできました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    電話してから30分以内に来てくれました。急いでいたので本当に助かりました。料金も明確で安心しました。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* サンキョークリーンサービス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-lg">4</span>
                <h3 className="text-2xl font-bold">サンキョークリーンサービス（シロアリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop" alt="サンキョークリーンサービス" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">サンキョークリーンサービスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>創業から28年の経験と実績、高い信頼性と透明性が魅力の完全自社施工業者</li>
                <li>駆除を担当するスタッフのプロフィールや保有資格、施工事例や口コミを多数掲載</li>
                <li>日本ペストコントロール協会と日本しろあり対策協会の両方に加盟しており、施工品質の高さはお墨付き</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼年中無休・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">◆サンキョークリーンサービスの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <tbody>
                    <tr>
                      <th className="bg-base-200">対応エリア</th>
                      <td>東京都、埼玉県、千葉県、神奈川県、茨城県、栃木県</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">電話受付時間</th>
                      <td>8:00〜20:00・年中無休</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">対応可能な害獣・害虫</th>
                      <td>シロアリ専門</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">駆除最低料金</th>
                      <td>2,566円〜／㎡</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">保証期間</th>
                      <td>最長5年間（定期点検1・3・5年目）</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">無料診断の有無</th>
                      <td>相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">支払い方法</th>
                      <td>現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg">◆サンキョークリーンサービスの口コミ</h4>
                <a href="https://www.google.com/search?q=サンキョークリーンサービス+シロアリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    事前の説明が丁寧で、スタッフの方の専門知識も豊富でした。シロアリ駆除の施工も丁寧で、アフターフォローもしっかりしていて安心できました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    公式サイトで施工事例を見て依頼しました。実際に来てくださった方も写真で見たスタッフの方で、安心してお任せできました。作業も期待以上に丁寧でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    創業28年の実績に惹かれて依頼しました。現地調査も無料で、見積もりも明確。施工後の定期点検も含めて、長く付き合えそうな業者さんだと感じました。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼年中無休・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* キャッツ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-lg">5</span>
                <h3 className="text-2xl font-bold">キャッツ（シロアリ駆除専門）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop" alt="キャッツ" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">キャッツの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>シロアリの生態を徹底的に理解しているため、どんな状況下でも効果的な駆除が可能</li>
                <li>シロアリの発生場所や被害状況を詳細に分析し、最適な工法と薬剤を選択</li>
                <li>事前に建物の構造を詳細に調査し、その特性に合わせた適切な処理を行う</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼365日対応・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">◆キャッツの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <tbody>
                    <tr>
                      <th className="bg-base-200">対応エリア</th>
                      <td>全国対応</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">電話受付時間</th>
                      <td>365日対応・9時〜18時・通話無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">対応可能な害獣・害虫</th>
                      <td>シロアリ専門</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">駆除最低料金</th>
                      <td>880円/㎡～</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">保証期間</th>
                      <td>最長5年間（年に一度無料点検実施）</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">無料診断の有無</th>
                      <td>相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">支払い方法</th>
                      <td>HPに記載なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg">◆キャッツの口コミ</h4>
                <a href="https://www.google.com/search?q=キャッツ+シロアリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    調査・工事とも親切丁寧にしていただきました。工事前日の確認電話連絡も適切に行なっていただきました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    事前説明もいただき、時間も正確で信頼してお任せできました。作業も丁寧です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-base-content/80">
                    工事の説明を明確にしてくれているので安心して任せられると感じます。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">
                ＼365日対応・通話無料／<br />
                無料相談はこちら
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* シロアリとは */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary">シロアリとは？見分け方と被害の実態</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">ヤマトシロアリ</h3>
                <p className="text-base-content/70">
                  日本全国に分布する最も一般的なシロアリ。湿った木材を好み、
                  床下や浴室周辺で被害が多い。
                </p>
                <div className="badge badge-warning">全国に分布</div>
              </div>
            </div>
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">イエシロアリ</h3>
                <p className="text-base-content/70">
                  主に温暖な地域に分布。巨大な巣を作り、被害が深刻化しやすい。
                  水を運ぶ能力があり、建物全体に被害が広がる。
                </p>
                <div className="badge badge-error">被害が深刻</div>
              </div>
            </div>
          </div>
          <div className="alert alert-warning mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>
              <strong>注意：</strong>シロアリ被害を放置すると、建物の倒壊リスクが高まります。
              少しでも疑わしい場合は、すぐに専門業者に相談してください。
            </span>
          </div>
        </div>
      </section>

      {/* 駆除方法 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">シロアリ駆除の方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((method) => (
              <div key={method.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl text-primary">{method.name}</h3>
                  <p className="text-base-content/70 mb-4">{method.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-lg mb-2 text-success">メリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {method.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm">{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-lg mb-2 text-error">デメリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {method.cons.map((con, idx) => (
                        <li key={idx} className="text-sm">{con}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="divider"></div>
                  <div className="text-center">
                    <p className="text-sm text-base-content/60">料金目安</p>
                    <p className="text-2xl font-bold text-primary">{method.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">料金相場（2026年最新版）</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-white shadow-xl">
              <thead>
                <tr>
                  <th>地域</th>
                  <th>料金相場（坪単価）</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row) => (
                  <tr key={row.area}>
                    <td className="font-bold">{row.area}</td>
                    <td className="text-primary font-semibold">{row.price}</td>
                    <td className="text-sm text-base-content/70">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-base-content/60 mt-4 text-center">
            ※ 30坪の住宅で計算すると、全国平均で30万円〜45万円程度が目安です。
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
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のシロアリ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でシロアリ駆除</h3>
                  <p className="text-base-content/70 text-sm">地域の料金相場と業者情報</p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-primary btn-sm">詳しく見る →</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="collapse collapse-plus bg-white shadow-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">{faq.q}</div>
                <div className="collapse-content">
                  <p className="text-base-content/70">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary">
            シロアリ駆除のご相談は今すぐ
          </h2>
          <p className="text-lg mb-8">
            お住まいの地域の料金相場を確認して、最適な業者を見つけましょう
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を見る
            </Link>
            <Link href="/guide" className="btn btn-lg btn-outline btn-neutral">
              業者選びガイド
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
