import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AreaAccordion from "./components/AreaAccordion";
import { AffText } from "@/app/components/AffLink";

// canonical は metadata で "/" を渡すと末尾スラッシュが落ちるため、<link> を直接置く（React 19 が head へ移す）。
export const metadata: Metadata = {};

export default function Home() {
  const pests = [
    { name: "シロアリ", href: "/shiroari", icon: "🐜", color: "bg-amber-100 hover:bg-amber-200" },
    { name: "ハチ", href: "/hachi", icon: "🐝", color: "bg-yellow-100 hover:bg-yellow-200" },
    { name: "ゴキブリ", href: "/gokiburi", icon: "🪳", color: "bg-red-100 hover:bg-red-200" },
    { name: "ネズミ", href: "/nezumi", icon: "🐭", color: "bg-gray-100 hover:bg-gray-200" },
    { name: "コウモリ", href: "/koumori", icon: "🦇", color: "bg-purple-100 hover:bg-purple-200" },
    { name: "ダニ", href: "/dani", icon: "🦠", color: "bg-green-100 hover:bg-green-200" },
    { name: "トコジラミ", href: "/tokojirami", icon: "🐛", color: "bg-orange-100 hover:bg-orange-200" },
    { name: "鳥害", href: "/chougai", icon: "🐦", color: "bg-blue-100 hover:bg-blue-200" },
    { name: "アリ", href: "/ari", icon: "🐜", color: "bg-amber-100 hover:bg-amber-200" },
    { name: "カメムシ", href: "/kamemushi", icon: "🐛", color: "bg-green-100 hover:bg-green-200" },
    { name: "ムカデ/ゲジゲジ", href: "/mukade", icon: "🐛", color: "bg-red-100 hover:bg-red-200" },
    { name: "シバンムシ", href: "/shibanmushi", icon: "🐛", color: "bg-orange-100 hover:bg-orange-200" },
    { name: "毛虫", href: "/kemushi", icon: "🐛", color: "bg-yellow-100 hover:bg-yellow-200" },
    { name: "ハクビシン", href: "/hakubishin", icon: "🦝", color: "bg-purple-100 hover:bg-purple-200" },
    { name: "イタチ", href: "/itachi", icon: "🦦", color: "bg-blue-100 hover:bg-blue-200" },
    { name: "アライグマ", href: "/araiguma", icon: "🦝", color: "bg-gray-100 hover:bg-gray-200" },
    { name: "テン", href: "/ten", icon: "🦊", color: "bg-orange-100 hover:bg-orange-200" },
    { name: "アナグマ", href: "/anaguma", icon: "🦡", color: "bg-amber-100 hover:bg-amber-200" },
    { name: "タヌキ", href: "/tanuki", icon: "🦝", color: "bg-yellow-100 hover:bg-yellow-200" },
  ];

  // areas moved to AreaAccordion component

  const features = [
    { title: "害虫・害獣の種類別に情報を掲載", description: "シロアリ、ハチ、ゴキブリ、ネズミ、コウモリ、ダニ、トコジラミ、鳥害などの駆除情報を、種類別に比較できます。" },
    { title: "地域別の情報", description: "お住まいの地域に対応する駆除業者と料金相場を掲載しています。" },
    { title: "料金相場の掲載", description: "各社が公表している料金をもとに、料金の目安を掲載しています。" },
  ];

  // 構造化データ（WebSiteスキーマ）
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "害虫・害獣駆除プロ比較ナビ",
    "url": "https://pest-control-001.pages.dev",
    "description": "全国の害虫・害獣駆除業者を、料金・サービス内容・口コミの観点から比較できる情報サイトです。",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pest-control-001.pages.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <link rel="canonical" href="https://gaichu-pro.com/" />
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ヒーローセクション */}
      <section className="hero h-[400px] md:h-[550px] bg-white relative overflow-hidden">
        <Image
          src="/images/hero-main.png"
          alt="害虫駆除サービス"
          fill
          className="object-contain object-center"
          priority
        />
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            全国の害虫・害獣駆除業者を料金・口コミで比較
          </h1>
          <p className="text-lg text-gray-700">
            シロアリ、ハチ、ゴキブリ、ネズミ、コウモリなどの駆除業者の情報を掲載し、業者選びを支援します。
          </p>
        </div>
      </section>

      {/* おすすめ業者比較 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">主な害虫駆除業者の比較</h2>
          
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black">
              <thead>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300"></th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="/images/companies/kujyo-zaurus.png" alt="駆除ザウルス" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-lg font-bold text-gray-900">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                      <img src="/images/companies/house-protect.png" alt="ハウスプロテクト" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-lg font-bold text-gray-900">ハウスプロテクト</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                      <img src="/images/companies/gaichu110.png" alt="害虫駆除110番" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-lg font-bold text-gray-900">害虫駆除110番</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">4</span>
                      <img src="/images/companies/protec.png" alt="害獣プロテック" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-lg font-bold text-gray-900">害獣プロテック</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">5</span>
                      <img src="/images/companies/sankyo.png" alt="サンキョークリーンサービス" className="w-20 h-20 rounded-full object-cover" />
                      <strong className="text-lg font-bold text-gray-900">サンキョークリーンサービス</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">料金目安</th>
                  <td className="text-center bg-white text-black border border-gray-300">15,000円〜</td>
                  <td className="text-center bg-white text-black border border-gray-300">要見積</td>
                  <td className="text-center bg-white text-black border border-gray-300">8,800円〜</td>
                  <td className="text-center bg-white text-black border border-gray-300">要見積</td>
                  <td className="text-center bg-white text-black border border-gray-300">要見積</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                  <td className="text-center bg-white text-black border border-gray-300">全国（北海道・沖縄除く）</td>
                  <td className="text-center bg-white text-black border border-gray-300">関東・関西・東海・中四国・九州</td>
                  <td className="text-center bg-white text-black border border-gray-300">全国</td>
                  <td className="text-center bg-white text-black border border-gray-300">関東・東北・関西・東海・北陸・中国・九州</td>
                  <td className="text-center bg-white text-black border border-gray-300">全国</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">受付時間</th>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">保証期間</th>
                  <td className="text-center bg-white text-black border border-gray-300">最長10年</td>
                  <td className="text-center bg-white text-black border border-gray-300">最長10年</td>
                  <td className="text-center bg-white text-black border border-gray-300">最長5年</td>
                  <td className="text-center bg-white text-black border border-gray-300">最長10年</td>
                  <td className="text-center bg-white text-black border border-gray-300">要確認</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">即日対応</th>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">公式サイト</th>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <a href="https://kujyo-zaurus.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">詳細を見る</a>
                  </td>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <AffText slug="house-protect" variant="tablebtn" label="詳細を見る" />
                  </td>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <a href="https://www.sharing-tech.co.jp/gaichu/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">詳細を見る</a>
                  </td>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <AffText slug="protec" variant="tablebtn" label="詳細を見る" />
                  </td>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <a href="https://sankyo-clean.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">詳細を見る</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              ※料金は目安です。被害状況・建物の構造により変動します。ご依頼の前に、現地調査・見積もりをお受けください。
            </p>
          </div>
        </div>
      </section>

      {/* 地域から探す */}
      <section className="py-12 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">地域から探す</h2>
          <AreaAccordion />
        </div>
      </section>


      {/* 害虫の種類から探す */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center">害虫の種類から探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pests.map((pest) => (
              <Link
                key={pest.name}
                href={pest.href}
                className="bg-white hover:bg-amber-50 border-2 border-gray-200 hover:border-amber-500 rounded-lg py-6 px-4 text-center transition-all shadow-sm hover:shadow-md"
              >
                <p className="text-lg font-semibold text-gray-900">{pest.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* なぜ選ばれるのか */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center">
            害虫・害獣駆除プロ比較ナビの特長
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#66FFFF] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{backgroundColor: "#2B3A50", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "2rem"}}>
            <h2 className="heading-primary text-white">
              害虫駆除のご相談について
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
