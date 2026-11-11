// 見積機能の「該当業者が無いとき」の案内先。ビルド時に実在するページだけを拾う（404 へのリンクを作らない）。
import fs from "node:fs";
import path from "node:path";
import { pestAreas } from "@/app/data/pestAreas";
import { REGIONS } from "@/app/data/regions";
import type { PestCat } from "@/app/data/estimatorQuestions";

// 見積の区分 → /pest/{slug}/{都道府県} の slug（自治体の相談窓口・制度をまとめたページ）
const PEST_ROUTE: Partial<Record<PestCat, string[]>> = {
  hachi: ["wasp"],
  nezumi: ["nezumi"],
  hakubishin: ["hakubishin", "araiguma", "itachi"],
  koumori: ["koumori"],
  shiroari: ["termite"],
  gokiburi: ["cockroach"],
  dani: ["dani"],
};

const exists = (pest: string, area: string) =>
  pestAreas.some((p) => p.pestSlug === pest && p.areaSlug === area) ||
  fs.existsSync(path.join(process.cwd(), "app", "pest", pest, area, "page.tsx"));

export function estimatorLinks(): { helpLinks: Record<string, string>; areaLinks: Record<string, string> } {
  const helpLinks: Record<string, string> = {};
  const areaLinks: Record<string, string> = {};
  for (const r of REGIONS) {
    for (const [, pref] of r.prefs) {
      if (fs.existsSync(path.join(process.cwd(), "app", "area", pref, "page.tsx"))) areaLinks[pref] = `/area/${pref}`;
      for (const [cat, routes] of Object.entries(PEST_ROUTE)) {
        const hit = routes!.find((slug) => exists(slug, pref));
        if (hit) helpLinks[`${cat}:${pref}`] = `/pest/${hit}/${pref}`;
      }
    }
  }
  return { helpLinks, areaLinks };
}
