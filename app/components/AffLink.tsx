import { getAff } from "@/app/data/affiliateCodes";

// アフィリエイトのバナー／テキストリンクを、ASP 提供の HTML のまま描画する。
// コードは app/data/affiliateCodes.ts の1か所だけに置く（href/src・計測用1x1 img は不変）。
// 表示文言（label）だけ差し替え可。見た目は globals.css の .aff-* で指定（タグに属性を足さない）。

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function hasAff(slug: string): boolean {
  return Boolean(getAff(slug));
}

export function hasAffBanner(slug: string): boolean {
  return Boolean(getAff(slug)?.bannerHtml);
}

/** 画像バナー（バナーが無いブランドは何も出さない） */
export function AffBanner({ slug, className = "" }: { slug: string; className?: string }) {
  const c = getAff(slug);
  if (!c?.bannerHtml) return null;
  return (
    <div className={`aff-banner ${className}`}>
      <span className="aff-pr">PR</span>
      <div className="aff-banner-body" dangerouslySetInnerHTML={{ __html: c.bannerHtml }} />
    </div>
  );
}

/** テキストリンク。variant: button=CTAボタン / tablebtn=表内の小ボタン / small=表・カード内の小リンク / inline=本文中 */
export function AffText({
  slug,
  label,
  variant = "inline",
  className = "",
}: {
  slug: string;
  label?: string;
  variant?: "button" | "tablebtn" | "small" | "inline";
  className?: string;
}) {
  const c = getAff(slug);
  if (!c) return null;
  const html = label ? c.textHtml.replace(`>${c.textLabel}</a>`, `>${esc(label)}</a>`) : c.textHtml;
  return <span className={`aff-text aff-${variant} ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
