import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ゴキブリ駆除の完全ガイド | 確実な駆除方法と予防策 - 害虫駆除110番",
  description: "ゴキブリ駆除の料金相場、業者の選び方、自力駆除との比較を徹底解説。再発防止策と予防方法で、ゴキブリのいない快適な生活を実現します。",
  openGraph: {
    title: "ゴキブリ駆除業者比較 | 料金相場・口コミ・おすすめ業者",
    description: "ゴキブリ駆除業者を料金・サービス・口コミで徹底比較。",
    url: "https://pest-control-001.pages.dev/gokiburi",
  },
};

export default function GokiburiPage() {
  const types = [
    {
      name: "クロゴキブリ",
      description: "日本で最も一般的な大型ゴキブリ。体長3〜4cm。屋外から侵入することが多い。",
      habitat: "一般住宅、マンション",
      features: ["体長: 3〜4cm", "色: 黒褐色", "活動: 屋外・屋内"],
      color: "badge-neutral",
    },
    {
      name: "チャバネゴキブリ",
      description: "小型で繁殖力が高い。飲食店やビルに多く、駆除が困難。",
      habitat: "飲食店、ビル、集合住宅",
      features: ["体長: 1〜1.5cm", "色: 茶褐色", "活動: 屋内中心"],
      color: "badge-warning",
    },
    {
      name: "ワモンゴキブリ",
      description: "日本最大級のゴキブリ。主に温暖な地域に分布。",
      habitat: "沖縄、九州南部",
      features: ["体長: 4〜5cm", "色: 赤褐色", "活動: 温暖地域"],
      color: "badge-error",
    },
  ];

  const comparison = [
    {
      method: "自力駆除（市販グッズ）",
      cost: "数千円〜1万円",
      effectiveness: "軽度な被害には効果的",
      pros: ["コストが安い", "手軽に始められる", "自分のペースで対処可能"],
      cons: ["根絶は困難", "侵入口の特定が難しい", "再発しやすい"],
      recommended: "1〜2匹見かけた程度の初期段階",
    },
    {
      method: "業者駆除（プロの施工）",
      cost: "1.5万円〜5万円",
      effectiveness: "根本的な解決が可能",
      pros: ["侵入口を徹底封鎖", "薬剤の効果が高い", "保証期間あり"],
      cons: ["費用がかかる", "施工日程の調整が必要"],
      recommended: "頻繁に見かける、飲食店、確実に駆除したい場合",
    },
  ];

  const priceTable = [
    { type: "1R・1K（〜30㎡）", price: "15,000〜25,000円", note: "1回施工" },
    { type: "1DK・1LDK（30〜50㎡）", price: "20,000〜30,000円", note: "1回施工" },
    { type: "2LDK以上（50㎡〜）", price: "30,000〜50,000円", note: "1回施工" },
    { type: "飲食店（厨房あり）", price: "50,000〜100,000円", note: "定期メンテナンス含む" },
  ];

  const prevention = [
    {
      category: "掃除",
      tips: [
        "食べカスやゴミをすぐに片付ける",
        "シンク周りの水気を拭き取る",
        "冷蔵庫や家具の裏を定期的に掃除",
      ],
    },
    {
      category: "侵入経路の遮断",
      tips: [
        "排水口に網をかぶせる",
        "換気扇にフィルターを取り付ける",
        "玄関や窓の隙間をパテで埋める",
      ],
    },
    {
      category: "環境整備",
      tips: [
        "ダンボールは放置しない（産卵場所になる）",
        "ペットフードは密閉容器に保管",
        "ゴミは密閉して毎日捨てる",
      ],
    },
  ];

  const checklist = [
    "侵入口の特定・封鎖技術があるか",
    "使用薬剤の安全性（ペット・子供への配慮）",
    "保証期間は何ヶ月か（6ヶ月〜1年推奨）",
    "定期メンテナンスプランはあるか",
    "施工実績と口コミ評価は良好か",
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
        { label: "害虫駆除110番", href: "/" },
        { label: "ゴキブリ" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-red-700 to-red-900 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-2iNv2jXonQw?w=1920&h=1080&fit=crop"
          alt="ゴキブリ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">🪳</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ゴキブリ駆除の完全ガイド
            </h1>
            <p className="text-xl mb-8">
              確実な駆除方法と再発防止策で、ゴキブリのいない快適な生活を実現します
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* おすすめ業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">おすすめゴキブリ駆除業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">項目</th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop" alt="害虫の生活救急車" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害虫の生活救急車</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop" alt="すまサポ" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">すまサポ</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                      <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop" alt="害虫獣SOS" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害虫獣SOS</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">4</span>
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop" alt="害虫駆除屋" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害虫駆除屋</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">5</span>
                      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100&h=100&fit=crop" alt="リベルタコントロール" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">リベルタコントロール</strong>
                    </div>
                  </th>
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg">6</span>
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop" alt="害虫駆除110番" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-black">害虫駆除110番</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">全国（一部除く）</td>
                  <td className="text-center border border-gray-300">関東</td>
                  <td className="text-center border border-gray-300">全国</td>
                  <td className="text-center border border-gray-300">関東</td>
                  <td className="text-center border border-gray-300">全国</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">電話受付時間</th>
                  <td className="text-center border border-gray-300">6時〜25時</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                  <td className="text-center border border-gray-300">24時間365日</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">料金目安</th>
                  <td className="text-center text-primary font-bold border border-gray-300">4,200円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">初回5,000円</td>
                  <td className="text-center text-primary font-bold border border-gray-300">5,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">8,800円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">12,000円〜</td>
                  <td className="text-center text-primary font-bold border border-gray-300">14,300円〜</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">特徴</th>
                  <td className="text-sm border border-gray-300">東証1部上場企業<br/>年中無休<br/>即日対応可能</td>
                  <td className="text-sm border border-gray-300">戸建て住宅専用<br/>築10年以上対象<br/>24時間受付</td>
                  <td className="text-sm border border-gray-300">最短15分到着<br/>関東最安値保証<br/>即日対応</td>
                  <td className="text-sm border border-gray-300">年間3万件実績<br/>見積無料<br/>全国対応</td>
                  <td className="text-sm border border-gray-300">2カ月保証<br/>侵入口封鎖<br/>関東専門</td>
                  <td className="text-sm border border-gray-300">1年保証<br/>追加料金なし<br/>24時間対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="heading-primary text-center mt-16 mb-8">おすすめゴキブリ駆除業者 詳細紹介</h2>

          {/* 1. 害虫の生活救急車 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-warning badge-lg">👑 1</span>
                <h3 className="text-2xl font-bold text-black">害虫の生活救急車（ゴキブリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop" alt="害虫の生活救急車" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害虫の生活救急車の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>東証1部上場企業が運営する大手駆除サービス</li>
                <li>全国対応で即日施工が可能、年中無休</li>
                <li>業界最安値に挑戦、コストパフォーマンスに優れている</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼年中無休・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害虫の生活救急車の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">6時〜25時・年中無休</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応可能な害虫</th>
                      <td className="bg-white text-black border border-gray-300">ゴキブリ・シロアリ・ハチなど害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">4,200円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">保証あり（詳細は要確認）</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害虫の生活救急車の口コミ</h4>
                <a href="https://www.google.com/search?q=害虫の生活救急車+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    東証1部上場企業だけあって、対応が迅速で丁寧でした。ゴキブリの侵入口を特定して徹底的に封鎖していただき、再発もありません。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    年中無休で即日対応していただけました。見積もりも明確で、追加料金もなく安心してお任せできました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    業界最安値に挑戦しているだけあって、コスパが最高でした。施工後のアフターフォローもしっかりしています。
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

          {/* 2. すまサポ */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                <h3 className="text-2xl font-bold text-black">すまサポ（ゴキブリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop" alt="すまサポ" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">すまサポの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>戸建て住宅に特化した駆除サービス</li>
                <li>築10年以上の住宅が対象、初回5,000円からの明確な料金設定</li>
                <li>24時間365日受付で緊急時にも対応可能</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆すまサポの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国（一部対象外）</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応可能な害虫</th>
                      <td className="bg-white text-black border border-gray-300">ゴキブリ・シロアリ・ハチなど害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">初回5,000円</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">要確認</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆すまサポの口コミ</h4>
                <a href="https://www.google.com/search?q=すまサポ+ゴキブリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    戸建て住宅専用ということで、我が家の構造に合わせた対策をしてくれました。初回5,000円で明確な料金設定も安心でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    24時間365日受付で、夜中に発見したゴキブリにも翌朝すぐに対応していただけました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    築15年の我が家でしたが、専門スタッフが丁寧に調査・駆除してくれました。再発防止のアドバイスも助かりました。
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

          {/* 3. 害虫獣SOS */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                <h3 className="text-2xl font-bold text-black">害虫獣SOS（ゴキブリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=200&fit=crop" alt="害虫獣SOS" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害虫獣SOSの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>関東エリアに特化した駆除専門業者</li>
                <li>最短15分での到着を実現、緊急時の対応に強み</li>
                <li>関東最安値保証で価格面でも安心</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害虫獣SOSの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東（東京・神奈川・千葉・埼玉）</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応可能な害虫</th>
                      <td className="bg-white text-black border border-gray-300">ゴキブリ・シロアリ・ハチなど害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">5,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">要確認</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害虫獣SOSの口コミ</h4>
                <a href="https://www.google.com/search?q=害虫獣SOS+ゴキブリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    最短15分で来ていただけて本当に助かりました。緊急時の対応が素早く、即日駆除していただけました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    関東最安値保証ということで、他社と比較しても価格が安かったです。施工の質も高く満足しています。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    関東エリアに特化しているだけあって、地域の特性を理解した対策をしてくれました。アフターケアも丁寧でした。
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

          {/* 4. 害虫駆除屋 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">4</span>
                <h3 className="text-2xl font-bold text-black">害虫駆除屋（ゴキブリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop" alt="害虫駆除屋" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害虫駆除屋の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>年間3万件以上の施工実績を誇る大手駆除業者</li>
                <li>全国対応で見積もりは無料</li>
                <li>豊富な経験に基づく確実な施工が魅力</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害虫駆除屋の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応可能な害虫</th>
                      <td className="bg-white text-black border border-gray-300">ゴキブリ・シロアリ・ハチなど害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">8,800円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">要確認</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害虫駆除屋の口コミ</h4>
                <a href="https://www.google.com/search?q=害虫駆除屋+ゴキブリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    年間3万件の施工実績があるだけあって、経験豊富なスタッフが来てくれました。的確な診断と施工で安心できました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    全国対応で見積もりも無料でした。料金も明確で、追加費用もなく信頼できる業者でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    豊富な実績に基づいた確実な施工で、ゴキブリが完全にいなくなりました。アフターフォローも丁寧でした。
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

          {/* 5. リベルタコントロール */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">5</span>
                <h3 className="text-2xl font-bold text-black">リベルタコントロール（ゴキブリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop" alt="リベルタコントロール" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">リベルタコントロールの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>関東エリアに特化した駆除専門業者</li>
                <li>2カ月間の再発防止保証付き</li>
                <li>侵入口の徹底封鎖を含む根本的な解決を提供</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆リベルタコントロールの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">関東（東京・神奈川・千葉・埼玉）</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応可能な害虫</th>
                      <td className="bg-white text-black border border-gray-300">ゴキブリ・シロアリ・ハチなど害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">12,000円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">2カ月間の再発防止保証</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆リベルタコントロールの口コミ</h4>
                <a href="https://www.google.com/search?q=リベルタコントロール+ゴキブリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    2カ月間の再発防止保証があり、安心してお願いできました。侵入口の徹底封鎖で、その後ゴキブリを見ていません。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    関東エリア専門ということで、地域の気候や建物の特性に合わせた対策をしてくれました。根本的な解決ができました。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    侵入口の封鎖技術が高く、薬剤だけに頼らない総合的な駆除をしてくれました。保証期間中のフォローも手厚かったです。
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

          {/* 6. 害虫駆除110番 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg">6</span>
                <h3 className="text-2xl font-bold text-black">害虫駆除110番（ゴキブリ駆除）</h3>
              </div>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop" alt="害虫駆除110番" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害虫駆除110番の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>全国対応の大手駆除業者</li>
                <li>1年間の長期保証付き</li>
                <li>追加料金は一切なしの明朗会計、24時間365日対応</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                ＼24時間365日・通話無料／<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆害虫駆除110番の基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                      <td className="bg-white text-black border border-gray-300">全国</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">電話受付時間</th>
                      <td className="bg-white text-black border border-gray-300">24時間365日</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応可能な害虫</th>
                      <td className="bg-white text-black border border-gray-300">ゴキブリ・シロアリ・ハチなど害虫全般</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">駆除最低料金</th>
                      <td className="bg-white text-black border border-gray-300">14,300円〜</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">保証期間</th>
                      <td className="bg-white text-black border border-gray-300">1年間の長期保証</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">無料診断の有無</th>
                      <td className="bg-white text-black border border-gray-300">相談・調査・見積もり完全無料</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">支払い方法</th>
                      <td className="bg-white text-black border border-gray-300">現金・銀行振込・クレジットカード</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆害虫駆除110番の口コミ</h4>
                <a href="https://www.google.com/search?q=害虫駆除110番+ゴキブリ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Google口コミを見る →
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    1年間の長期保証があり、長期的に安心できました。追加料金もなく、明朗会計で信頼できる業者でした。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    24時間365日対応で、深夜に発見したゴキブリにも翌日すぐに対応していただけました。全国対応なので安心です。
                  </p>
                </div>
                <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
                  <p className="text-sm text-gray-900">
                    大手業者ならではの安心感がありました。施工後のフォローも丁寧で、1年保証期間中は何度でも相談できました。
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
        </div>
      </section>

      {/* ゴキブリの種類と生態 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ゴキブリの種類と生態</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((type) => (
              <div key={type.name} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">{type.name}</h3>
                  <div className={`badge ${type.color} badge-lg`}>{type.habitat}</div>
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
        </div>
      </section>

      {/* 自力駆除 vs 業者駆除 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">自力駆除 vs 業者駆除</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comparison.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl text-primary">{item.method}</h3>
                  <div className="badge badge-lg badge-outline">{item.cost}</div>
                  <p className="text-gray-700 mt-4 font-semibold">{item.effectiveness}</p>
                  
                  <div className="mt-4">
                    <h4 className="font-bold text-lg mb-2 text-success">メリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {item.pros.map((pro, i) => (
                        <li key={i} className="text-sm">{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-bold text-lg mb-2 text-error">デメリット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {item.cons.map((con, i) => (
                        <li key={i} className="text-sm">{con}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="divider"></div>
                  <div className="alert alert-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-sm">おすすめ：</h4>
                      <p className="text-xs">{item.recommended}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ゴキブリ駆除の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table bg-white text-black shadow-xl border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">物件タイプ</th>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">料金相場</th>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">備考</th>
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
            ※ 被害の程度や建物の構造によって料金は変動します。複数の業者から見積もりを取ることをおすすめします。
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

      {/* 再発防止の予防策 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">再発させないための予防策</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prevention.map((item, idx) => (
              <div key={idx} className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-primary">{item.category}</h3>
                  <ul className="space-y-3 mt-4">
                    {item.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-success text-xl">✓</span>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-warning mt-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-bold">重要：1匹見たら数十匹いる</h3>
              <p className="text-sm">ゴキブリは夜行性で隠れて生活しています。1匹見かけたら、すでに数十匹〜数百匹が潜んでいる可能性があります。早めの対策が重要です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のゴキブリ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でゴキブリ駆除</h3>
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
      <section className="py-16 px-4 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary">
            ゴキブリ駆除は早めの対策が重要
          </h2>
          <p className="text-lg mb-8">
            1匹見かけたら、すでに数十匹が潜んでいる可能性があります。
            お住まいの地域の料金相場を確認して、最適な業者を見つけましょう。
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
