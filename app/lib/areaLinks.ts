// TOP「エリア（都道府県）で選ぶ」用。ビルド時に実在するページだけを拾う（404 へのリンクを作らない）。
import fs from "node:fs";
import path from "node:path";
import { pestAreas } from "@/app/data/pestAreas";
import { REGIONS } from "@/app/data/regions";

export interface PrefLink {
  name: string;
  slug: string;
  /** 都道府県の比較ページ（/area/{slug}）があれば */
  areaHref?: string;
  /** ハチ×都道府県のページ（/pest/wasp/{slug}）があれば */
  waspHref?: string;
  /** 県内の市のページ（/area/{city}）で実在するもの */
  cities: { name: string; href: string }[];
}


// 県内の市のエリアページ（存在チェックは下で行う）
const CITY_PAGES: Record<string, [string, string][]> = {
  hokkaido: [["札幌市", "sapporo"]],
  miyagi: [["仙台市", "sendai"]],
  saitama: [["さいたま市", "saitama-city"]],
  kanagawa: [["横浜市", "yokohama"], ["川崎市", "kawasaki"]],
  shizuoka: [["浜松市", "hamamatsu"]],
  aichi: [["名古屋市", "nagoya"]],
  hyogo: [["神戸市", "kobe"]],
  fukuoka: [["北九州市", "kitakyushu"]],
};

const areaDir = (slug: string) => path.join(process.cwd(), "app", "area", slug, "page.tsx");
const hasArea = (slug: string) => fs.existsSync(areaDir(slug));
const waspSlugs = new Set([
  ...pestAreas.filter((p) => p.pestSlug === "wasp").map((p) => p.areaSlug),
  ...fs.readdirSync(path.join(process.cwd(), "app", "pest", "wasp")).filter((d) => fs.existsSync(path.join(process.cwd(), "app", "pest", "wasp", d, "page.tsx"))),
]);

export function prefectureRegions(): { name: string; prefs: PrefLink[] }[] {
  return REGIONS.map((r) => ({
    name: r.name,
    prefs: r.prefs.map(([name, slug]) => ({
      name,
      slug,
      areaHref: hasArea(slug) ? `/area/${slug}` : undefined,
      waspHref: waspSlugs.has(slug) ? `/pest/wasp/${slug}` : undefined,
      cities: (CITY_PAGES[slug] ?? []).filter(([, s]) => hasArea(s)).map(([n, s]) => ({ name: n, href: `/area/${s}` })),
    })),
  }));
}
