import Link from "next/link";
import Image from "next/image";
import type { SiteStats } from "@/app/lib/siteStats";

// TOP のファーストビュー（3案）。数字はすべて app/lib/siteStats.ts でビルド時に数えた値。
export type HeroVariant = "1" | "2" | "3";

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

function Copy({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <p className="fv-eyebrow">実際の口コミと評判で選ぶ！</p>
      <h1 className="fv-title">
        全国の害虫・害獣駆除業者を<br className="hidden sm:block" />料金・口コミで比較
      </h1>
      <p className="fv-lead">
        シロアリ、ハチ、ゴキブリ、ネズミ、コウモリなどの駆除業者の情報を掲載し、業者選びを支援します。
      </p>
      {!compact && (
        <ul className="fv-points">
          {HERO_POINTS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
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

// アイコンのセット：a=塗りつぶしのシルエット / b=線だけ（同じ形の輪郭）。単色（文字色）の SVG。
export type IconSet = "a" | "b";

function Icons({ icons, layout, set }: { icons: PestIcon[]; layout: "grid" | "row" | "chips"; set: IconSet }) {
  return (
    <ul className={`fv-icons fv-icons-${layout} fv-icons-set-${set}`}>
      {icons.map((i) => (
        <li key={i.slug}>
          <Link href={i.href} className="fv-icon">
            <span className="fv-icon-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/pests/${set}/${i.slug}.svg`} alt="" width={100} height={100} />
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

export default function TopHero({ variant, stats, icons, iconSet = "a" }: { variant: HeroVariant; stats: SiteStats; icons: PestIcon[]; iconSet?: IconSet }) {
  if (variant === "1") {
    // FV-1：コピー｜写真｜害虫アイコンのグリッド、下に数字の帯
    return (
      <section className="fv fv1" data-no-reveal>
        <div className="fv1-main">
          <div className="fv1-copy">
            <Copy />
            <Actions />
          </div>
          <Photo className="fv1-photo" />
          <div className="fv1-side">
            <p className="fv-side-title">害虫・害獣から探す</p>
            <Icons icons={icons} layout="grid" set={iconSet} />
          </div>
        </div>
        <div className="fv1-band">
          <Stats s={stats} />
        </div>
      </section>
    );
  }
  if (variant === "2") {
    // FV-2：横長の写真＋コピー、その下に数字の帯と害虫アイコンの横並び
    return (
      <section className="fv fv2" data-no-reveal>
        <div className="fv2-top">
          <Photo className="fv2-photo" />
          <div className="fv2-inner">
            <div className="fv2-copy">
              <Copy />
              <Actions />
            </div>
          </div>
        </div>
        <div className="fv2-band">
          <div className="fv2-band-inner">
            <Stats s={stats} />
            <Icons icons={icons} layout="row" set={iconSet} />
          </div>
        </div>
      </section>
    );
  }
  // FV-3：色面を強めに使う案（左に淡い黄の面＋数字、右に写真、下に緑の帯とアイコン）
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
          <Icons icons={icons} layout="chips" set={iconSet} />
        </div>
      </div>
    </section>
  );
}
