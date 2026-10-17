// TOP「エリア（都道府県）で選ぶ」用。ビルド時に実在するページだけを拾う（404 へのリンクを作らない）。
import fs from "node:fs";
import path from "node:path";
import { pestAreas } from "@/app/data/pestAreas";

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

const REGIONS: { name: string; prefs: [string, string][] }[] = [
  { name: "北海道・東北", prefs: [["北海道", "hokkaido"], ["青森", "aomori"], ["岩手", "iwate"], ["宮城", "miyagi"], ["秋田", "akita"], ["山形", "yamagata"], ["福島", "fukushima"]] },
  { name: "関東", prefs: [["茨城", "ibaraki"], ["栃木", "tochigi"], ["群馬", "gunma"], ["埼玉", "saitama"], ["千葉", "chiba"], ["東京", "tokyo"], ["神奈川", "kanagawa"]] },
  { name: "中部", prefs: [["新潟", "niigata"], ["富山", "toyama"], ["石川", "ishikawa"], ["福井", "fukui"], ["山梨", "yamanashi"], ["長野", "nagano"], ["岐阜", "gifu"], ["静岡", "shizuoka"], ["愛知", "aichi"]] },
  { name: "近畿", prefs: [["三重", "mie"], ["滋賀", "shiga"], ["京都", "kyoto"], ["大阪", "osaka"], ["兵庫", "hyogo"], ["奈良", "nara"], ["和歌山", "wakayama"]] },
  { name: "中国・四国", prefs: [["鳥取", "tottori"], ["島根", "shimane"], ["岡山", "okayama"], ["広島", "hiroshima"], ["山口", "yamaguchi"], ["徳島", "tokushima"], ["香川", "kagawa"], ["愛媛", "ehime"], ["高知", "kochi"]] },
  { name: "九州・沖縄", prefs: [["福岡", "fukuoka"], ["佐賀", "saga"], ["長崎", "nagasaki"], ["熊本", "kumamoto"], ["大分", "oita"], ["宮崎", "miyazaki"], ["鹿児島", "kagoshima"], ["沖縄", "okinawa"]] },
];

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
