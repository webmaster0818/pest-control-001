# -*- coding: utf-8 -*-
# 2026-11-01: 名古屋市ハチ（/pest/wasp/nagoya）を市ページ形式で pestAreas.ts 末尾に追加し、sitemap の lastmod を更新する。
# 旧ベタ書きページ app/pest/wasp/nagoya/ の削除と、app/pest/[pest]/[area]/page.tsx の EXISTING_STATIC_PATHS.wasp からの
# "nagoya" 除外は、このスクリプトの前に手で行う（静的ページが残っていれば止まる）。
# 使い方: python3 scripts/merge_pest_nagoya_wasp.py rec.json
import json, os, re, sys
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TS = os.path.join(REPO, "app/data/pestAreas.ts")
SM = os.path.join(REPO, "public/sitemap.xml")
recs = json.load(open(sys.argv[1]))
t = open(TS, encoding="utf-8").read()
have = set(re.findall(r'"?pestSlug"?:\s*"([\w-]+)",\s*"?pestName"?:\s*"[^"]*",\s*"?areaSlug"?:\s*"([\w-]+)"', t))
for r in recs:
    k = (r["pestSlug"], r["areaSlug"])
    if k in have or os.path.isdir(os.path.join(REPO, "app/pest", *k)):
        sys.exit(f"duplicate/static: {k}")
body = "".join(",\n" + "\n".join("  " + l for l in json.dumps(r, ensure_ascii=False, indent=2).split("\n")) for r in recs)
end = t.rindex("\n];")
t = t[:end] + ",\n  // 名古屋市ハチ 旧形式からの作り直し 2026-11-01（scripts/gen_pest_nagoya_wasp.py・merge_pest_nagoya_wasp.py）" + body[1:] + t[end:]
open(TS, "w", encoding="utf-8").write(t)
s = open(SM, encoding="utf-8").read()
for r in recs:
    loc = f"<loc>https://gaichu-pro.com/pest/{r['pestSlug']}/{r['areaSlug']}</loc>"
    s, n = re.subn(re.escape(loc) + r"(\s*)<lastmod>[^<]*</lastmod>", loc + r"\g<1><lastmod>2026-11-01</lastmod>", s)
    assert n == 1, loc
open(SM, "w", encoding="utf-8").write(s)
print("merged", [f"{r['pestSlug']}/{r['areaSlug']}" for r in recs])
