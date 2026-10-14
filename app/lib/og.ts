// サイト共通の既定OG画像（1200×630）。ページ側で openGraph を書くと layout の openGraph は丸ごと置き換わるため、
// 各ページの openGraph.images にもこれを入れる。ページ固有の画像があるページはそちらを優先する。
export const SITE_URL = "https://gaichu-pro.com";

export const DEFAULT_OG_IMAGE = {
  url: "/og-default.png?v=20261014",
  width: 1200,
  height: 630,
  alt: "害虫・害獣駆除プロ比較ナビ",
};
