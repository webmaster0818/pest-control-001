import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "毛虫駆除業者比較 | チャドクガ・イラガの料金相場と対策",
  description: "毛虫駆除業者10社を料金・実績・対応速度で徹底比較。チャドクガ、イラガの駆除料金相場（10,000円〜30,000円）、皮膚炎対策、庭木の予防方法を詳しく解説。",
  openGraph: {
    title: "毛虫駆除業者比較 | チャドクガ・イラガの料金相場と対策",
    description: "毛虫駆除業者10社を料金・実績・対応速度で徹底比較。チャドクガ、イラガの駆除料金相場（10,000円〜30,000円）、皮膚炎対策、庭木の予防方法を詳しく解説。",
    url: "https://pest-control-001.pages.dev/kemushi",
  },
};

export default function KemushiPage() {

  const companies = [
    {
      rank: 1,
      name: "駆除ザウルス",
      price: "25,000円〜",
      area: "全国（北海道・沖縄除く）",
      phone: "0120-6494-01",
      hours: "24時間365日",
      features: ["最長10年保証", "即日対応可能", "自社施工"],
      warranty: "最長10年",
      website: "https://kujyo-zaurus.jp/",
    },
    {
      rank: 2,
      name: "害獣駆除のROY",
      price: "4,730円〜",
      area: "全国（一部対応不可）",
      phone: "0120-988-084",
      hours: "24時間365日",
      features: ["最長5年保証", "自社施工", "明朗会計"],
      warranty: "最長5年",
      website: "https://gaichu-kujyo-roy.com/",
    },
    {
      rank: 3,
      name: "害獣BUZZ",
      price: "要見積もり",
      area: "関東・関西・東海・中国・九州",
      phone: "0120-987-601",
      hours: "24時間365日",
      features: ["最長10年保証", "即日対応", "無料調査"],
      warranty: "最長10年",
      website: "https://gaichu-buzz.com/",
    },
    {
      rank: 4,
      name: "サンキョークリーンサービス",
      price: "22,000円〜",
      area: "全国",
      phone: "0800-555-0949",
      hours: "要確認",
      features: ["最長2年保証", "豊富な実績", "自社施工"],
      warranty: "最長2年",
      website: "https://sankyo-clean.com/",
    },
    {
      rank: 5,
      name: "ハウスプロテクト",
      price: "要見積もり",
      area: "関東・関西・東海・中国・四国",
      phone: "0120-688-671",
      hours: "24時間365日",
      features: ["最長10年保証", "即日対応", "リフォーム対応"],
      warranty: "最長10年",
      website: "https://house-protect.net/",
    },
    {
      rank: 6,
      name: "害虫駆除110番",
      price: "22,000円〜",
      area: "全国",
      phone: "0120-949-186",
      hours: "24時間365日",
      features: ["施工業者による", "加盟店多数", "即日対応可"],
      warranty: "施工業者による",
      website: "https://www.sharing-tech.co.jp/gaichu/",
    },
    {
      rank: 7,
      name: "害獣プロテック",
      price: "状況により変動",
      area: "関東・東北・関西・東海・北陸・中国・九州",
      phone: "0120-978-146",
      hours: "24時間365日",
      features: ["最長10年保証", "即日対応", "無料調査"],
      warranty: "最長10年",
      website: "https://gaichu-protec.jp/",
    },
    {
      rank: 8,
      name: "ラッター",
      price: "10,000円〜",
      area: "関東・東海・関西・中国・九州",
      phone: "0120-8800-46",
      hours: "要確認",
      features: ["最長5年保証", "自社施工", "無料調査"],
      warranty: "最長5年",
      website: "https://ratter.jp/",
    },
    {
      rank: 9,
      name: "EMEAO!",
      price: "施工業者による",
      area: "全国",
      phone: "0120-710-026",
      hours: "24時間365日",
      features: ["施工業者による", "業者紹介サービス", "完全無料"],
      warranty: "施工業者による",
      website: "https://emeao.jp/",
    },
    {
      rank: 10,
      name: "ダスキン",
      price: "16,500円〜",
      area: "全国",
      phone: "店舗による",
      hours: "要確認",
      features: ["最長5年保証", "大手の安心感", "全国展開"],
      warranty: "最長5年",
      website: "https://www.duskin.jp/terminix/",
    },
  ];


  return (
    <div className="min-h-screen bg-base-200">
      {/* パンくずリスト */}
      <Breadcrumb items={[
        { label: "害虫駆除110番", href: "/" },
        { label: "毛虫" }
      ]} />

      {/* ヒーローセクション */}
      <section className="hero min-h-[50vh] bg-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-control.jpg"
          alt="毛虫駆除"
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* キャッチコピー */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            毛虫駆除の完全ガイド
          </h2>
          <p className="text-lg text-gray-700">
            毛虫の特徴・被害状況から駆除方法まで、適切な対処法をご紹介します
          </p>
        </div>
      </section>

      {/* 業者比較セクション */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">毛虫駆除業者の比較</h2>
          
          <div className="space-y-12">
            {companies.map((company) => (
              <div key={company.rank} className="card bg-white shadow-xl">
                <div className="card-body">
                  {/* ランキングバッジと業者名 */}
                  <div className="flex items-center gap-4 mb-4">
                    {company.rank === 1 && (
                      <span className="badge badge-warning badge-lg">👑 1位</span>
                    )}
                    {company.rank === 2 && (
                      <span className="badge badge-lg text-base" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2位</span>
                    )}
                    {company.rank === 3 && (
                      <span className="badge badge-lg text-base" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3位</span>
                    )}
                    {company.rank > 3 && (
                      <span className="badge badge-lg text-base">{company.rank}位</span>
                    )}
                    <h3 className="card-title text-black text-2xl">{company.name}</h3>
                  </div>

                  {/* 画像 */}
                  <Image
                    src="/images/hero-pest-control.jpg"
                    alt={company.name}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />

                  {/* 特徴 */}
                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                    {company.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  {/* 無料相談ボタン */}
                  <div className="flex gap-4 mb-4">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg flex-1"
                    >
                      無料相談・見積もり
                    </a>
                    <a
                      href={`tel:${company.phone}`}
                      className="btn btn-primary btn-lg flex-1"
                    >
                      📞 {company.phone}
                    </a>
                  </div>

                  {/* 基本情報表 */}
                  <table className="table w-full bg-white text-black border-collapse">
                    <tbody>
                      <tr>
                        <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">料金目安</th>
                        <td className="bg-white text-black border border-gray-300">{company.price}</td>
                      </tr>
                      <tr>
                        <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                        <td className="bg-white text-black border border-gray-300">{company.area}</td>
                      </tr>
                      <tr>
                        <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">電話受付</th>
                        <td className="bg-white text-black border border-gray-300">{company.hours}</td>
                      </tr>
                      <tr>
                        <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">保証期間</th>
                        <td className="bg-white text-black border border-gray-300">{company.warranty}</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* 口コミ（仮データ） */}
                  <div className="mt-6">
                    <h4 className="font-bold text-lg mb-2 text-black">利用者の口コミ</h4>
                    <div className="space-y-3">
                      <div className="bg-base-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="rating rating-sm">
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                          </div>
                          <span className="text-sm text-gray-300">★★★★★ 5.0</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          迅速に対応していただき、毛虫の被害がすぐに解決しました。料金も明確で安心できました。
                        </p>
                      </div>
                      <div className="bg-base-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="rating rating-sm">
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-gray-300" />
                          </div>
                          <span className="text-sm text-gray-300">★★★★☆ 4.0</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          プロの技術で徹底的に駆除してくれました。再発防止のアドバイスも丁寧でした。
                        </p>
                      </div>
                      <div className="bg-base-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="rating rating-sm">
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                          </div>
                          <span className="text-sm text-gray-300">★★★★★ 5.0</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          見積もりが無料で、作業も丁寧でした。保証期間も長く安心です。
                        </p>
                      </div>
                    </div>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm mt-4"
                    >
                      Googleで口コミを見る →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center mb-8">毛虫駆除の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black">
              <thead>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">作業内容</th>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">料金相場</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-white text-black border border-gray-300">基本的な駆除作業</td>
                  <td className="bg-white text-black border border-gray-300">10,000〜30,000円</td>
                </tr>
                <tr>
                  <td className="bg-white text-black border border-gray-300">侵入経路封鎖</td>
                  <td className="bg-white text-black border border-gray-300">+10,000〜30,000円</td>
                </tr>
                <tr>
                  <td className="bg-white text-black border border-gray-300">清掃・消毒</td>
                  <td className="bg-white text-black border border-gray-300">+5,000〜20,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm mt-4">
            ※料金は被害状況や建物の広さにより変動します。必ず複数社から見積もりを取ることをおすすめします。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">毛虫駆除のご相談は今すぐ無料で</h2>
          <p className="text-xl mb-8">
            専門業者があなたの毛虫被害を解決します
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/price" className="btn btn-lg bg-white text-green-600 hover:bg-gray-100">
              料金相場を見る
            </Link>
            <Link href="/guide" className="btn btn-lg bg-white text-green-600 hover:bg-gray-100">
              業者選びガイド
            </Link>
          </div>
        </div>
      </section>

      {/* 地域別リンク */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-center mb-8">お住まいの地域から探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/area/tokyo" className="btn btn-outline">東京</Link>
            <Link href="/area/osaka" className="btn btn-outline">大阪</Link>
            <Link href="/area/nagoya" className="btn btn-outline">名古屋</Link>
            <Link href="/area/fukuoka" className="btn btn-outline">福岡</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
