import Link from "next/link";
import Image from "next/image";
import type { SiteStats } from "@/app/lib/siteStats";

// TOP のファーストビュー（okina 10/18 採用：FV-3＋線だけのアイコン）。数字はすべて app/lib/siteStats.ts でビルド時に数えた値。

export interface PestIcon {
  slug: string;
  name: string;
  href: string;
}

// 旧ヒーロー画像（hero-main.png）に入っていた文言をそのままテキストで表示
const HERO_POINTS = [
  "全国から厳選！害虫駆除業者多数掲載",
  "リアルな声がわかる！利用者の口コミ・評価",
  "24時間365日対応の業者多数",
  "明朗会計・無料見積りも可能",
];

function Copy() {
  return (
    <>
      <p className="fv-eyebrow">実際の口コミと評判で選ぶ！</p>
      <h1 className="fv-title">
        全国の害虫・害獣駆除業者を<br className="hidden sm:block" />料金・口コミで比較
      </h1>
      <p className="fv-lead">
        シロアリ、ハチ、ゴキブリ、ネズミ、コウモリなどの駆除業者の情報を掲載し、業者選びを支援します。
      </p>
      <ul className="fv-points">
        {HERO_POINTS.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
}

function Actions() {
  return (
    <div className="fv-actions">
      <a href="#area" className="btn btn-neutral btn-arrow">地域から探す</a>
      <a href="#pests" className="btn btn-outline btn-arrow">種類から探す</a>
    </div>
  );
}

function Stats({ s }: { s: SiteStats }) {
  const items = [
    { n: s.companies, unit: "社", label: "駆除業者の口コミ・評判を掲載" },
    { n: s.prefectures, unit: "都道府県", label: "の地域情報" },
    { n: s.municipalities, unit: "件", label: "の自治体の公式情報" },
    { n: s.pestKinds, unit: "種類", label: "の害虫・害獣を解説" },
  ];
  return (
    <dl className="fv-stats">
      {items.map((it) => (
        <div key={it.unit} className="fv-stat">
          <dt className="fv-stat-label">{it.label}</dt>
          <dd className="fv-stat-num">
            {it.n.toLocaleString("ja-JP")}
            <span className="fv-stat-unit">{it.unit}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

// アイコンは線だけのシルエット（単色・文字色の SVG）。
function Icons({ icons }: { icons: PestIcon[] }) {
  return (
    <ul className="fv-icons fv-icons-chips">
      {icons.map((i) => (
        <li key={i.slug}>
          <Link href={i.href} className="fv-icon">
            <span className="fv-icon-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/pests/${i.slug}.svg`} alt="" width={100} height={100} />
            </span>
            <span className="fv-icon-name">{i.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Photo({ className }: { className: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/hero-person.jpg"
        alt="害虫駆除サービス"
        fill
        sizes="(min-width: 900px) 50vw, 100vw"
        className="fv-photo-img"
        priority
      />
    </div>
  );
}

export default function TopHero({ stats, icons }: { stats: SiteStats; icons: PestIcon[] }) {
  // 左に淡い黄の面＋数字、右に写真、下に緑の帯とアイコン
  return (
    <section className="fv fv3" data-no-reveal>
      <div className="fv3-main">
        <div className="fv3-panel">
          <div className="fv3-copy">
            <Copy />
            <Stats s={stats} />
            <Actions />
          </div>
        </div>
        <Photo className="fv3-photo" />
      </div>
      <div className="fv3-band">
        <div className="fv3-band-inner">
          <p className="fv3-band-title">害虫・害獣から探す</p>
          <Icons icons={icons} />
        </div>
      </div>
    </section>
  );
}
