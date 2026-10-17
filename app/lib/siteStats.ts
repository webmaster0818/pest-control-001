// TOP の数字帯。すべてビルド時にデータから数える（手書きの数字は置かない）。
import fs from "node:fs";
import path from "node:path";
import { agents } from "@/app/agents/agentsData";
import { pestAreas } from "@/app/data/pestAreas";
import { prefectureRegions } from "@/app/lib/areaLinks";

export interface SiteStats {
  /** 口コミ・評判ページを掲載している業者数（/agents/{slug} の数＝agents 配列の件数） */
  companies: number;
  /** 当サイトに地域ページ（/area/{県} または /pest/wasp/{県}）がある都道府県の数 */
  prefectures: number;
  /** 公式ページを確認して掲載している自治体の数（pestAreas の municipalSupport を出典URLで重複除去） */
  municipalities: number;
  /** 種類別ハブページ（実在するもの）の数 */
  pestKinds: number;
}

export function siteStats(pestHubs: { href: string }[]): SiteStats {
  const prefectures = prefectureRegions()
    .flatMap((r) => r.prefs)
    .filter((p) => p.areaHref || p.waspHref).length;
  const muniUrls = new Set<string>();
  for (const p of pestAreas) for (const m of p.municipalSupport ?? []) muniUrls.add(m.url);
  const pestKinds = pestHubs.filter((h) =>
    fs.existsSync(path.join(process.cwd(), "app", h.href.replace(/^\//, ""), "page.tsx"))
  ).length;
  return { companies: agents.length, prefectures, municipalities: muniUrls.size, pestKinds };
}
