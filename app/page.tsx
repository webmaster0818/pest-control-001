import type { Metadata } from "next";
import Link from "next/link";
import { AffText } from "@/app/components/AffLink";
import CompanyVisual from "@/app/components/CompanyVisual";
import { prefectureRegions } from "@/app/lib/areaLinks";
import { siteStats } from "@/app/lib/siteStats";
import TopHero, { type HeroVariant, type PestIcon } from "@/app/components/TopHero";

// canonical は metadata で "/" を渡すと末尾スラッシュが落ちるため、<link> を直接置く（React 19 が head へ移す）。
export const metadata: Metadata = {};

export default function Home() {
  const pests = [
    { name: "シロアリ", href: "/shiroari" },
    { name: "ハチ", href: "/hachi" },
    { name: "ゴキブリ", href: "/gokiburi" },
    { name: "ネズミ", href: "/nezumi" },
    { name: "コウモリ", href: "/koumori" },
    { name: "ダニ", href: "/dani" },
    { name: "トコジラミ", href: "/tokojirami" },
    { name: "鳥害", href: "/chougai" },
    { name: "アリ", href: "/ari" },
    { name: "カメムシ", href: "/kamemushi" },
    { name: "ムカデ/ゲジゲジ", href: "/mukade" },
    { name: "シバンムシ", href: "/shibanmushi" },
    { name: "毛虫", href: "/kemushi" },
    { name: "ハクビシン", href: "/hakubishin" },
    { name: "イタチ", href: "/itachi" },
    { name: "アライグマ", href: "/araiguma" },
    { name: "テン", href: "/ten" },
    { name: "アナグマ", href: "/anaguma" },
    { name: "タヌキ", href: "/tanuki" },
  ];

  // ファーストビューの害虫・害獣アイコン（各ハブページへ。実在するページのみ）
  const pestIcons: PestIcon[] = [
    { slug: "hachi", name: "ハチ", href: "/hachi" },
    { slug: "shiroari", name: "シロアリ", href: "/shiroari" },
    { slug: "gokiburi", name: "ゴキブリ", href: "/gokiburi" },
    { slug: "nezumi", name: "ネズミ", href: "/nezumi" },
    { slug: "koumori", name: "コウモリ", href: "/koumori" },
    { slug: "hakubishin", name: "ハクビシン", href: "/hakubishin" },
    { slug: "araiguma", name: "アライグマ", href: "/araiguma" },
    { slug: "dani", name: "ダニ", href: "/dani" },
  ];
  const stats = siteStats(pests);
  const v = process.env.FV_VARIANT;
  const heroVariant: HeroVariant = v === "1" || v === "3" ? v : "2";

  const regions = prefectureRegions();

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
    <div className="top">
      <link rel="canonical" href="https://gaichu-pro.com/" />
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ファーストビュー（3案。FV_VARIANT=1|2|3 でビルド時に切り替え。採用案が決まったら固定する） */}
      <TopHero variant={heroVariant} stats={stats} icons={pestIcons} />

      {/* おすすめ業者比較（料金を含むためアニメーションなし） */}
      <section className="top-section" data-no-reveal>
        <div className="top-container">
          <h2 className="heading-primary text-center">主な害虫駆除業者の比較</h2>
          <div className="overflow-x-auto cmp-wrap">
              <table className="table cmp-table w-full">
                <thead>
                  <tr>
                    <th className="cmp-label"></th>
                    <th className="cmp-head">
                      <div className="cmp-company">
                        <span className="rank rank-1">1</span>
                        <CompanyVisual id="/images/companies/kujyo-zaurus.png" name="駆除ザウルス" size="thumb" />
                        <strong className="cmp-name">駆除ザウルス</strong>
                      </div>
                    </th>
                    <th className="cmp-head">
                      <div className="cmp-company">
                        <span className="rank rank-2">2</span>
                        <CompanyVisual id="/images/companies/house-protect.png" name="ハウスプロテクト" size="thumb" />
                        <strong className="cmp-name">ハウスプロテクト</strong>
                      </div>
                    </th>
                    <th className="cmp-head">
                      <div className="cmp-company">
                        <span className="rank rank-3">3</span>
                        <CompanyVisual id="/images/companies/gaichu110.png" name="害虫駆除110番" size="thumb" />
                        <strong className="cmp-name">害虫駆除110番</strong>
                      </div>
                    </th>
                    <th className="cmp-head">
                      <div className="cmp-company">
                        <span className="rank">4</span>
                        <CompanyVisual id="/images/companies/protec.png" name="害獣プロテック" size="thumb" />
                        <strong className="cmp-name">害獣プロテック</strong>
                      </div>
                    </th>
                    <th className="cmp-head">
                      <div className="cmp-company">
                        <span className="rank">5</span>
                        <CompanyVisual id="/images/companies/sankyo.png" name="サンキョークリーンサービス" size="thumb" />
                        <strong className="cmp-name">サンキョークリーンサービス</strong>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="cmp-label">料金目安</th>
                    <td className="cmp-cell">15,000円〜</td>
                    <td className="cmp-cell">要見積</td>
                    <td className="cmp-cell">8,800円〜</td>
                    <td className="cmp-cell">要見積</td>
                    <td className="cmp-cell">要見積</td>
                  </tr>
                  <tr>
                    <th className="cmp-label">対応エリア</th>
                    <td className="cmp-cell">全国（北海道・沖縄除く）</td>
                    <td className="cmp-cell">関東・関西・東海・中四国・九州</td>
                    <td className="cmp-cell">全国</td>
                    <td className="cmp-cell">関東・東北・関西・東海・北陸・中国・九州</td>
                    <td className="cmp-cell">全国</td>
                  </tr>
                  <tr>
                    <th className="cmp-label">受付時間</th>
                    <td className="cmp-cell">24時間365日</td>
                    <td className="cmp-cell">24時間365日</td>
                    <td className="cmp-cell">24時間365日</td>
                    <td className="cmp-cell">24時間365日</td>
                    <td className="cmp-cell">24時間365日</td>
                  </tr>
                  <tr>
                    <th className="cmp-label">保証期間</th>
                    <td className="cmp-cell">最長10年</td>
                    <td className="cmp-cell">最長10年</td>
                    <td className="cmp-cell">最長5年</td>
                    <td className="cmp-cell">最長10年</td>
                    <td className="cmp-cell">要確認</td>
                  </tr>
                  <tr>
                    <th className="cmp-label">即日対応</th>
                    <td className="cmp-cell">○</td>
                    <td className="cmp-cell">○</td>
                    <td className="cmp-cell">○</td>
                    <td className="cmp-cell">○</td>
                    <td className="cmp-cell">○</td>
                  </tr>
                  <tr>
                    <th className="cmp-label">公式サイト</th>
                    <td className="cmp-cell">
                      <a href="https://kujyo-zaurus.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm btn-arrow">詳細を見る</a>
                    </td>
                    <td className="cmp-cell">
                      <AffText slug="house-protect" variant="tablebtn" label="詳細を見る" />
                    </td>
                    <td className="cmp-cell">
                      <a href="https://www.sharing-tech.co.jp/gaichu/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm btn-arrow">詳細を見る</a>
                    </td>
                    <td className="cmp-cell">
                      <AffText slug="protec" variant="tablebtn" label="詳細を見る" />
                    </td>
                    <td className="cmp-cell">
                      <a href="https://sankyo-clean.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm btn-arrow">詳細を見る</a>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
          <p className="top-note">
            ※料金は目安です。被害状況・建物の構造により変動します。ご依頼の前に、現地調査・見積もりをお受けください。
          </p>
        </div>
      </section>

      {/* 地域から探す（都道府県） */}
      <section id="area" className="top-section top-section-surface">
        <div className="top-container">
          <h2 className="heading-primary text-center">地域から探す</h2>
          <div className="pref-grid rv-auto">
            {regions.map((r) => (
              <div key={r.name} className="pref-region">
                <h3 className="pref-region-name">{r.name}</h3>
                <ul className="pref-list">
                  {r.prefs.map((p) => {
                    const main = p.areaHref ?? p.waspHref;
                    return (
                      <li key={p.slug} className={main ? "pref-item" : "pref-item is-empty"}>
                        {main ? (
                          <Link href={main} className="pref-name">{p.name}</Link>
                        ) : (
                          <span className="pref-name">{p.name}</span>
                        )}
                        <span className="pref-subs">
                          {p.cities.map((c) => (
                            <Link key={c.href} href={c.href}>{c.name}</Link>
                          ))}
                          {p.waspHref && (
                            <Link href={p.waspHref}>ハチ</Link>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 害虫の種類から探す */}
      <section id="pests" className="top-section">
        <div className="top-container">
          <h2 className="heading-primary text-center">害虫の種類から探す</h2>
          <div className="pest-grid rv-auto">
            {pests.map((pest) => (
              <Link key={pest.name} href={pest.href} className="pest-tile">
                <span>{pest.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* なぜ選ばれるのか */}
      <section className="top-section top-section-surface">
        <div className="top-container">
          <h2 className="heading-primary text-center">
            害虫・害獣駆除プロ比較ナビの特長
          </h2>
          <div className="feature-grid rv-auto">
            {features.map((feature, index) => (
              <div key={index} className="feature">
                <div className="feature-no">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA（アニメーションなし） */}
      <section className="top-cta" data-no-reveal>
        <div className="top-container top-cta-inner">
          <h2 className="heading-primary text-center text-white">
            害虫駆除のご相談について
          </h2>
          <p className="top-cta-text">
            お住まいの地域の料金相場をご確認のうえ、業者選びにお役立てください。
          </p>
          <div className="top-cta-actions">
            <Link href="/price" className="btn btn-lg btn-neutral btn-arrow">
              料金相場を見る
            </Link>
            <Link href="/guide" className="btn btn-lg btn-outline btn-arrow" style={{backgroundColor: "#2F4F4F", borderColor: "orange", color: "white"}}>
              業者選びガイド
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
