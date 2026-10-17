import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import RelatedLinkList from "@/app/components/RelatedLinkList";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

export const metadata: Metadata = {
  alternates: { canonical: "/dani" },
  title: "ダニ駆除の基礎知識 | ダニ・マダニ・ツツガムシ対策",
  description: "家の中のダニ（チリダニ・ヒョウヒダニ類、ツメダニ、イエダニ）と野外のマダニ・ツツガムシについて、アレルギーや刺咬の被害、刺された場合の対応、予防対策、業者に依頼する前に確認することを、自治体の公開情報にもとづいてご説明します。",
  openGraph: {
    title: "ダニ駆除業者比較 | 料金相場・口コミ・主要業者",
    description: "ダニ駆除業者を、料金・サービス・口コミの観点から比較しています。",
    url: "https://gaichu-pro.com/dani",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function DaniPage() {
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
        { label: "ダニ" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-new.jpg"
          alt="ダニ駆除の専門業者"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ダニ駆除の基礎知識と業者比較
            </h1>
            <p className="text-xl mb-8">
              ダニの駆除方法と再発防止策をご説明します
            </p>
            </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            家の中のダニと野外のダニの特徴と対策
          </h2>
          <p className="text-lg text-gray-700">
            ダニの種類ごとの被害と予防対策、業者に依頼する前に確認することをご説明します
          </p>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">ダニ駆除業者の比較</h2>
          
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300"></th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="/images/hero-pest-new.jpg" alt="衛生害虫110番" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">衛生害虫110番</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                      <img src="/images/companies/duskin.png" alt="ダスキン" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">ダスキン</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                      <img src="/images/companies/kujyo-zaurus.png" alt="駆除ザウルス" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">4</span>
                      <img src="/images/companies/protec.png" alt="害獣プロテック" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">害獣プロテック</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">5</span>
                      <img src="/images/hero-pest-new.jpg" alt="ムシプロテック" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">ムシプロテック</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">6</span>
                      <img src="/images/companies/sankyo.png" alt="サンキョークリーンサービス" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">サンキョークリーンサービス</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">7</span>
                      <img src="/images/hero-pest-new.jpg" alt="街角害虫駆除相談所" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">街角害虫駆除相談所</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">8</span>
                      <img src="/images/hero-pest-new.jpg" alt="害虫駆除対策センター" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">害虫駆除対策センター</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">9</span>
                      <img src="/images/hero-pest-new.jpg" alt="Qujolia" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">Qujolia</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center">◎ 関東・関西・東海</td>
                  <td className="text-center">◎ 関東・東海</td>
                  <td className="text-center">◎ 全国（北海道・沖縄除く）</td>
                  <td className="text-center">○ 北九州・福岡・下関</td>
                  <td className="text-center">◎ 全国対応</td>
                  <td className="text-center">○ 三重・愛知・静岡・岐阜</td>
                  <td className="text-center">◎ 関西・関東・中部</td>
                  <td className="text-center">○ 福井県</td>
                  <td className="text-center">◎ 全国対応</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                  <td className="text-center">24時間365日</td>
                  <td className="text-center">8:30〜19:30</td>
                  <td className="text-center">24時間365日</td>
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
                  <td className="text-center">害虫・ネズミ</td>
                  <td className="text-center">害虫全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害獣全般</td>
                  <td className="text-center">害虫・害獣・害鳥</td>
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
          <h2 className="heading-primary text-center mt-16 mb-8">ダニ駆除業者の詳細</h2>

          {/* 衛生害虫110番 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-warning badge-lg text-base">👑 1</span>
                <h3 className="text-2xl font-bold text-black">衛生害虫110番（ダニ駆除）</h3>
              </div>
              <img src="/images/hero-pest-new.jpg" alt="衛生害虫110番" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">衛生害虫110番の特徴</h4>
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
              <h4 className="font-bold text-lg text-black mb-3">◆衛生害虫110番の基本情報</h4>
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
                      <td>シロアリ・ネズミなど害虫・害獣全般</td>
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
                <h4 className="font-bold text-lg text-black">◆衛生害虫110番の口コミ</h4>
                <a href="https://www.google.com/search?q=衛生害虫110番+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* ダスキン */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg text-base" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                <h3 className="text-2xl font-bold text-black">ダスキン（ダニ駆除）</h3>
              </div>
              <img src="/images/companies/duskin.png" alt="ダスキン" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ダスキンの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>累計60万件以上の施工実績</li>
                <li>最短即日対応も可能</li>
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
              <h4 className="font-bold text-lg text-black mb-3">◆ダスキンの基本情報</h4>
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
                      <td>シロアリ・ゴキブリなど害虫・害獣全般</td>
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
                <h4 className="font-bold text-lg text-black">◆ダスキンの口コミ</h4>
                <a href="https://www.google.com/search?q=ダスキン+ダニ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 駆除ザウルス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg text-base" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                <h3 className="text-2xl font-bold text-black">駆除ザウルス（ダニ駆除）</h3>
              </div>
              <img src="/images/companies/kujyo-zaurus.png" alt="駆除ザウルス" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">駆除ザウルスの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>公式サイトで「全国対応（北海道、沖縄県、一部地域を除く）」「完全自社施工」と案内しています</li>
                <li>「お見積り」「現地調査」無料、電話は24時間365日受付（公式表記）</li>
                <li>公式表記で「創業21年」「最長10年 安心の再発保証」</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                24時間365日受付<br />
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
                      <td>害獣・害虫全般（公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>要見積もり</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>最長10年の再発保証（公式表記）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>相談・調査・見積もりは無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>クレジットカード・電子マネーに対応（公式FAQ）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">出典：駆除ザウルス 公式サイト（https://kujyo-zaurus.com/ ・ https://kujyo-zaurus.com/company/）2026年10月17日確認</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆駆除ザウルスの口コミ</h4>
                <a href="https://www.google.com/search?q=駆除ザウルス+ダニ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 害獣プロテック */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg text-base">4</span>
                <h3 className="text-2xl font-bold text-black">害獣プロテック（ダニ駆除）</h3>
              </div>
              <img src="/images/companies/protec.png" alt="害獣プロテック" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害獣プロテックの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>最短30分で現場に到着</li>
                <li>自社施工、シーズン内に再発した場合は無料で再施工</li>
                <li>大手ホームセンターや家電量販店との取引経歴あり</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                年中無休・通話無料<br />
                無料相談はこちら
              </a>
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
                      <td>ネズミなど害虫・害獣全般</td>
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
                <a href="https://www.google.com/search?q=害獣プロテック+ダニ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* ムシプロテック */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg text-base">5</span>
                <h3 className="text-2xl font-bold text-black">ムシプロテック（ダニ駆除）</h3>
              </div>
              <p className="text-sm mb-3"><Link href="/agents/mushi-protec" className="text-amber-700 underline">ムシプロテックの口コミ・評判と公式の料金表記はこちら</Link></p>
              <img src="/images/hero-pest-new.jpg" alt="ムシプロテック" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">ムシプロテックの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>全国の登録加盟店を紹介する受付サービスです（運営：株式会社アシスト）。訪問・作業は加盟店のスタッフが行います。</li>
                <li>出張費・見積もり無料、作業依頼前のキャンセル料は無料（公式のよくある質問）</li>
                <li>施工後に改善しなかった場合は無料で再施工（期間は害虫の種類で異なる）</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <a href="#" className="btn btn-primary btn-lg">
                通話無料<br />
                無料相談はこちら
              </a>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">◆ムシプロテックの基本情報</h4>
              <div className="overflow-x-auto">
                <table className="table w-full bg-white text-black">
                  <tbody>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                      <td>全国（公式表記「日本全国に対応」）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">電話受付時間</th>
                      <td>電話受付24時間365日（作業は朝8時〜夜10時）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">対応可能な害獣・害虫</th>
                      <td>ダニ・ノミ・トコジラミ・シロアリ・ハチ・ゴキブリなどの害虫、ネズミ</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">駆除最低料金</th>
                      <td>ダニ・ノミ駆除 15,000円（税抜）〜（公式のよくある質問・実際の料金は加盟店の見積もり）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                      <td>改善しなかった場合は無料で再施工（期間は害虫の種類で異なる）</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">無料診断の有無</th>
                      <td>見積もり・出張費無料</td>
                    </tr>
                    <tr>
                      <th className="bg-gray-800 text-white border border-gray-300">支払い方法</th>
                      <td>現金・クレジットカード（一部の加盟店はカード不可）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-black">◆ムシプロテックの口コミ</h4>
                <a href="https://www.google.com/search?q=ムシプロテック+ダニ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* サンキョークリーンサービス */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg text-base">6</span>
                <h3 className="text-2xl font-bold text-black">サンキョークリーンサービス（ダニ駆除）</h3>
              </div>
              <img src="/images/companies/sankyo.png" alt="サンキョークリーンサービス" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">サンキョークリーンサービスの特徴</h4>
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
              <h4 className="font-bold text-lg text-black mb-3">◆サンキョークリーンサービスの基本情報</h4>
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
                      <td>害虫全般</td>
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
                <h4 className="font-bold text-lg text-black">◆サンキョークリーンサービスの口コミ</h4>
                <a href="https://www.google.com/search?q=サンキョークリーンサービス+ダニ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 街角害虫駆除相談所 */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg text-base">7</span>
                <h3 className="text-2xl font-bold text-black">街角害虫駆除相談所（ダニ駆除）</h3>
              </div>
              <img src="/images/hero-pest-new.jpg" alt="街角害虫駆除相談所" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">街角害虫駆除相談所の特徴</h4>
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
              <h4 className="font-bold text-lg text-black mb-3">◆街角害虫駆除相談所の基本情報</h4>
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
                      <td>害虫・害獣全般</td>
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
                <h4 className="font-bold text-lg text-black">◆街角害虫駆除相談所の口コミ</h4>
                <a href="https://www.google.com/search?q=街角害虫駆除相談所+ダニ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* 害虫駆除対策センター */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg text-base">8</span>
                <h3 className="text-2xl font-bold text-black">害虫駆除対策センター（ダニ駆除）</h3>
              </div>
              <img src="/images/hero-pest-new.jpg" alt="害虫駆除対策センター" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">害虫駆除対策センターの特徴</h4>
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
              <h4 className="font-bold text-lg text-black mb-3">◆害虫駆除対策センターの基本情報</h4>
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
                      <td>害虫全般</td>
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
                <h4 className="font-bold text-lg text-black">◆害虫駆除対策センターの口コミ</h4>
                <a href="https://www.google.com/search?q=害虫駆除対策センター+ダニ駆除+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

          {/* Qujolia */}
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8 company-detail">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="badge badge-lg text-base">9</span>
                <h3 className="text-2xl font-bold text-black">Qujolia（ダニ駆除）</h3>
              </div>
              <img src="/images/hero-pest-new.jpg" alt="Qujolia" className="w-full h-48 object-cover rounded-lg" />
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg text-black mb-3">Qujoliaの特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>公式サイトで「千葉・茨城の害虫駆除・防除・対策専門」と案内しています</li>
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
              <h4 className="font-bold text-lg text-black mb-3">◆Qujoliaの基本情報</h4>
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
                      <td>害虫・害獣・害鳥（公式サイトのサービス一覧にノミ・ダニ、トコジラミを掲載）</td>
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
                <h4 className="font-bold text-lg text-black">◆Qujoliaの口コミ</h4>
                <a href="https://www.google.com/search?q=Qujolia+口コミ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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

      {/* ダニの種類と被害 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ダニの種類と被害</h2>
<p className="text-gray-700 mb-6">屋内にいるダニは0.3mm程度と大変小さく、通常は肉眼では見えません。屋内性のダニは家のどこにでも存在しており、大半のダニは人に影響を与えることはないとされています。屋内にいるダニで人を刺すのは、イエダニとツメダニの2種類です（さいたま市）。</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">チリダニ（ヒョウヒダニ類）</h3>
<p className="text-gray-700 mt-2">家の中に普通にいるダニで、ヤケヒョウヒダニとコナヒョウヒダニが代表的な種類です。人を刺すことはありませんが、糞や虫体が吸入性・接触性のアレルギー疾患の原因物質となります。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">大きさ：約0.25〜0.5mm（さいたま市）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">畳やじゅうたん、布団などにいて、フケやカビ、食べかすなどを食べます</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">1年中生息し、温度と湿度の高い夏から秋にかけて多くなります</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">気管支ぜん息の原因の一つとされています（大阪府）</span></li>
</ul>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">ツメダニ</h3>
<p className="text-gray-700 mt-2">チリダニやコナダニ、小型昆虫を捕食するダニです。数が増えると偶発的に人を刺し、数日後にかゆみが出ることがあります。吸血はしません。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">大きさ：0.3〜1mm程度で、通常は肉眼で見えません</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">じゅうたんや畳にいます</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">布団や畳などに接した部分を刺されることが多いとされています</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">梅雨時期や秋口に増えます（さいたま市）</span></li>
</ul>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">イエダニ</h3>
<p className="text-gray-700 mt-2">ネズミや鳥に寄生する吸血性のダニです。宿主の動物が死んだり、大量発生したりすると、人からも吸血します。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">体長：1mm程度</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">腹や脇、太ももの内側などを刺されることが多いとされています</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">6〜9月に一番多くなります</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">通常はネズミの体表や巣に寄生しているため、ネズミがいなければイエダニもいないと考えてよいとされています（さいたま市）</span></li>
</ul>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">マダニ・ツツガムシ（野外のダニ）</h3>
<p className="text-gray-700 mt-2">マダニは山林や草むら、ヤブなどに生息し、近づいた動物や人に寄生して吸血します。ツツガムシは野外にいるダニで、つつが虫病を媒介します。</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">マダニの体長：成ダニで吸血前3〜8mm、吸血後10〜20mm程度（東京都）</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">マダニが媒介する感染症には、日本紅斑熱やライム病、重症熱性血小板減少症候群（SFTS）などがあります</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">ツツガムシの幼虫は野ねずみなどに寄生し、野山、河川敷などにいます</span></li>
<li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-sm">予防の基本は、野外で肌の露出を少なくすることです（東京都）</span></li>
</ul>
</div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.city.saitama.lg.jp/002/002/011/002/p084017.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市「住まいの衛生害虫について」</a>（2026年10月17日確認）、<a href="https://www.city.saitama.lg.jp/sciencenavi/kenkou/003/p041407.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市健康科学研究センター「どの家庭にも生息している『ヒョウヒダニ類』」</a>（2026年10月17日確認）、<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/iyanamusi_syosassi.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「身のまわり ちょっと気になる いやな虫（小冊子）」</a>（2026年10月17日確認）、<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/madani" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「マダニ」</a>（2026年10月17日確認）、<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/tsutsugamushi" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「ツツガムシ」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 刺された・咬まれた場合の対処法 */}
      <section className="py-16 px-4 bg-error/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center text-error">ダニに刺された・咬まれた場合の対処法</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body"><div className="badge badge-error badge-lg mb-4">ステップ 1</div><h3 className="card-title text-xl">屋内で刺された場合は医療機関に相談する</h3><p className="text-gray-700">皮膚のかゆみや腫れは、ダニ以外の様々な疾患が原因のこともあります。専門医に相談してから薬剤等の使用を検討するとよいとされています（さいたま市）。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><div className="badge badge-error badge-lg mb-4">ステップ 2</div><h3 className="card-title text-xl">吸血中のマダニは無理に引き抜かない</h3><p className="text-gray-700">無理に引き抜こうとするとマダニの一部が皮膚内に残り、炎症を起こすことがあります。できるだけ医療機関（皮膚科）で処置を受けてください（東京都）。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><div className="badge badge-error badge-lg mb-4">ステップ 3</div><h3 className="card-title text-xl">野外活動後の発熱等は医師の診察を受ける</h3><p className="text-gray-700">マダニに吸血されて1週間ぐらい後に刺し口周辺の紅斑や発熱などがあった場合や、野山などに行った後でつつが虫病に思い当たる症状がある場合は、医師の診察を受けてください（東京都）。</p></div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.city.saitama.lg.jp/002/002/011/002/p084017.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市「住まいの衛生害虫について」</a>（2026年10月17日確認）、<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/madani" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「マダニ」</a>（2026年10月17日確認）、<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/tsutsugamushi" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「ツツガムシ」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* ダニの発生を見つけたら */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ダニの発生を見つけたら</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="card bg-error text-error-content shadow-xl"><div className="card-body">
<h3 className="card-title text-2xl">❌ 避けるべき行動</h3>
<ul className="space-y-3 mt-4">
<li className="flex items-start gap-2"><span className="text-2xl">🚫</span><span>布団を干してたたくだけで済ませる（干してたたくだけでは、ダニは取れないとされています）</span></li>
<li className="flex items-start gap-2"><span className="text-2xl">🚫</span><span>屋内のダニを完全になくそうとする（屋内のダニをゼロにすることは現実的ではなく、神経質になりすぎないことも必要とされています）</span></li>
<li className="flex items-start gap-2"><span className="text-2xl">🚫</span><span>原因を確かめずに薬剤を使う（ダニ以外の疾患の可能性もあるため、専門医への相談が勧められています）</span></li>
</ul>
</div></div>
<div className="card bg-success text-success-content shadow-xl"><div className="card-body">
<h3 className="card-title text-2xl">✅ すべきこと</h3>
<ul className="space-y-3 mt-4">
<li className="flex items-start gap-2"><span className="text-2xl">✅</span><span>シーツを外して寝具に掃除機をかける（週に1回を目標に、布団1枚に約1分30秒かけることが勧められています）</span></li>
<li className="flex items-start gap-2"><span className="text-2xl">✅</span><span>風通しをよくして湿度を下げる（ヒョウヒダニ類の対策として湿度60％以下が挙げられています）</span></li>
<li className="flex items-start gap-2"><span className="text-2xl">✅</span><span>開封した粉製品は冷蔵庫で保管する（コナダニの対策）</span></li>
<li className="flex items-start gap-2"><span className="text-2xl">✅</span><span>イエダニが疑われる場合はネズミ対策を行う</span></li>
</ul>
</div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/iyanamusi_syosassi.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「身のまわり ちょっと気になる いやな虫（小冊子）」</a>（2026年10月17日確認）、<a href="https://www.city.saitama.lg.jp/002/002/011/002/p084017.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市「住まいの衛生害虫について」</a>（2026年10月17日確認）、<a href="https://www.city.saitama.lg.jp/sciencenavi/kenkou/003/p041407.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市健康科学研究センター「どの家庭にも生息している『ヒョウヒダニ類』」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 料金相場 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ダニ駆除の料金相場</h2>
<div className="overflow-x-auto">
<table className="table w-full bg-white text-black shadow-xl">
<thead><tr><th>発生状況・作業内容</th><th>料金相場</th><th>備考</th></tr></thead>
<tbody>
<tr><td className="font-bold">発生範囲が狭い場合</td><td className="text-primary font-semibold">8,000〜15,000円</td><td className="text-sm text-gray-700">施工範囲・回数により変わります</td></tr>
<tr><td className="font-bold">発生範囲が中程度の場合</td><td className="text-primary font-semibold">15,000〜30,000円</td><td className="text-sm text-gray-700">施工範囲・回数により変わります</td></tr>
<tr><td className="font-bold">発生範囲が広い場合</td><td className="text-primary font-semibold">30,000〜50,000円+</td><td className="text-sm text-gray-700">施工範囲・回数により変わります</td></tr>
<tr><td className="font-bold">追加作業がある場合</td><td className="text-primary font-semibold">+10,000〜20,000円</td><td className="text-sm text-gray-700">追加料金（内容は業者により異なります）</td></tr>
</tbody>
</table>
</div>
<div className="alert alert-info mt-8">
<span>表の金額は当サイトが掲載している目安で、公的な基準ではありません。ダニ駆除の費用は発生範囲・被害状況・施工回数で変わるため、複数業者の無料見積もりで比較することをおすすめします。</span>
</div>
        </div>
      </section>
      {/* 発生時期 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">ダニの発生時期</h2>
<p className="text-gray-700 mb-6">自治体の資料にもとづく目安です。室内の温度・湿度などの環境により異なります。</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">チリダニ（ヒョウヒダニ類）</h3>
<p className="text-gray-700 mt-2">ほぼ1年中見られ、温度と湿度の高い夏から秋にかけて多くなります（さいたま市）。</p>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">コナダニ・ツメダニ</h3>
<p className="text-gray-700 mt-2">梅雨時期や秋口に増えます（さいたま市）。</p>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">イエダニ</h3>
<p className="text-gray-700 mt-2">6〜9月に一番多くなります（さいたま市）。</p>
</div></div>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl">マダニ</h3>
<p className="text-gray-700 mt-2">活動が盛んな春から秋にかけて、野外での吸血に注意が必要です（東京都）。</p>
</div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.city.saitama.lg.jp/002/002/011/002/p084017.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市「住まいの衛生害虫について」</a>（2026年10月17日確認）、<a href="https://www.city.saitama.lg.jp/sciencenavi/kenkou/003/p041407.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市健康科学研究センター「どの家庭にも生息している『ヒョウヒダニ類』」</a>（2026年10月17日確認）、<a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/madani" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「マダニ」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 業者に依頼する前に確認すること */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者に依頼する前に確認すること</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">発生源の特定</h3><p className="text-gray-700">屋内で人を刺すダニはイエダニとツメダニの2種類とされています。イエダニの場合はネズミ対策が、ツメダニの場合はエサとなるチリダニやコナダニの対策が必要になります（さいたま市）。皮膚の症状はダニ以外の疾患が原因のこともあるため、医療機関での確認もあわせてご検討ください。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">保健所の相談窓口</h3><p className="text-gray-700">さいたま市保健所は、住居内でお困りの虫を窓口に持参すれば可能な範囲で同定し、対策を助言するとしています。一方で、保健所では防除作業や駆除は行っていないと明記しています。窓口の有無や連絡先は、お住まいの自治体の公式サイトでご確認ください。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">施工方法の説明</h3><p className="text-gray-700">ツメダニの被害が激しい場合について、大阪府は畳の高周波処理を挙げています。薬剤を使う場合は、成分と処理する範囲、寝具や畳への処理方法について事前に説明を受けてください。</p></div></div>
<div className="card bg-white shadow-xl"><div className="card-body"><h3 className="card-title text-xl">見積もりの内訳</h3><p className="text-gray-700">調査費、施工費、施工回数、追加費用の条件が分けて記載されているかを確認します。イエダニの場合は、ネズミの駆除や侵入口の対策が別料金になるかどうかもご確認ください。</p></div></div>
</div><p className="text-sm text-gray-600 mt-6">出典：<a href="https://www.city.saitama.lg.jp/002/002/011/002/p084017.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市「住まいの衛生害虫について」</a>（2026年10月17日確認）、<a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/iyanamusi_syosassi.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「身のまわり ちょっと気になる いやな虫（小冊子）」</a>（2026年10月17日確認）</p>
        </div>
      </section>
      {/* 業者選びのポイント */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">業者選びのポイント</h2>
<div className="card bg-white shadow-xl"><div className="card-body">
<h3 className="card-title text-xl mb-4">見積もり時のチェックリスト</h3>
<div className="space-y-3">
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">刺されの原因となるダニの種類（ツメダニ・イエダニ等）を調査したうえで見積もりを出すか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">イエダニの場合、ネズミ対策を含めた提案と費用が示されるか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">薬剤や畳の処理方法（高周波処理等）の内容について説明があるか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">見積もりの内訳（調査費・施工費・追加費用）が書面で示されるか</span></div>
<div className="flex items-start gap-3"><input type="checkbox" className="checkbox checkbox-primary mt-1" /><span className="text-lg">再発時の保証の範囲と期間が明記されているか</span></div>
</div>
</div></div>
        </div>
      </section>
      {/* 出典 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">出典</h2>
<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
<li><a href="https://www.city.saitama.lg.jp/002/002/011/002/p084017.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市「住まいの衛生害虫について」</a>（2026年10月17日確認）</li>
<li><a href="https://www.city.saitama.lg.jp/sciencenavi/kenkou/003/p041407.html" target="_blank" rel="nofollow noopener" className="underline">さいたま市健康科学研究センター「どの家庭にも生息している『ヒョウヒダニ類』」</a>（2026年10月17日確認）</li>
<li><a href="https://www.pref.osaka.lg.jp/o100090/kankyoeisei/kininarumusi/iyanamusi_syosassi.html" target="_blank" rel="nofollow noopener" className="underline">大阪府「身のまわり ちょっと気になる いやな虫（小冊子）」</a>（2026年10月17日確認）</li>
<li><a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/madani" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「マダニ」</a>（2026年10月17日確認）</li>
<li><a href="https://www.hokeniryo.metro.tokyo.lg.jp/kankyo/eisei/yomimono/nezukon/tsutsugamushi" target="_blank" rel="nofollow noopener" className="underline">東京都保健医療局「ツツガムシ」</a>（2026年10月17日確認）</li>
</ul>
<p className="text-sm text-gray-600 mt-4">当サイトでは、生態・被害・相談窓口について、官公庁・自治体の公開情報で確認できた内容のみを掲載しています。ご利用前に、各機関の公式サイトにて最新情報をご確認ください。</p>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center">地域別のダニ駆除業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-base-300 hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{area.name}でダニ駆除</h3>
                  <p className="text-gray-700 text-sm">地域の害虫駆除業者の情報</p>
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
              ダニ駆除のご相談について
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
        <RelatedLinkList title="業者ごとの口コミ・評判（料金・保証を公式表記で確認）" links={[{ href: "/agents/mushi-protec", label: "ムシプロテックの口コミ・評判" }, { href: "/agents/e-buster", label: "イーバスターの口コミ・評判" }]} />
      </section>
    </div>
  );
}
