# -*- coding: utf-8 -*-
# 第18弾（2026-11-13）のレコード JSON を app/data/pestAreas.ts の末尾に追加し、public/sitemap.xml に URL を足す。
# 使い方: python3 scripts/merge_pest_batch18.py rec1.json [rec2.json ...]
# - 既存の (pestSlug, areaSlug) と重複するもの、ベタ書きの静的ページ（app/pest/<pest>/<area>/）と同じパスは追加しない。
import json, os, re, sys
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TS = os.path.join(REPO, "app/data/pestAreas.ts")
SM = os.path.join(REPO, "public/sitemap.xml")
recs = []
for f in sys.argv[1:]:
    o = json.load(open(f))
    recs += o if isinstance(o, list) else [o]
t = open(TS, encoding="utf-8").read()
have = set(re.findall(r'"?pestSlug"?:\s*"([\w-]+)",\s*"?pestName"?:\s*"[^"]*",\s*"?areaSlug"?:\s*"([\w-]+)"', t))
add = []
for r in recs:
    k = (r["pestSlug"], r["areaSlug"])
    if k in have or os.path.isdir(os.path.join(REPO, "app/pest", *k)):
        sys.exit(f"duplicate/static: {k}")
    have.add(k); add.append(r)
body = "".join(",\n" + "\n".join("  " + l for l in json.dumps(r, ensure_ascii=False, indent=2).split("\n")) for r in add)
end = t.rindex("\n];")
t = t[:end] + ",\n  // 第18弾 2026-11-13（scripts/gen_pest_batch18.py・merge_pest_batch18.py）" + body[1:] + t[end:]
open(TS, "w", encoding="utf-8").write(t)
s = open(SM, encoding="utf-8").read()
urls = "".join(f"  <url>\n    <loc>https://gaichu-pro.com/pest/{r['pestSlug']}/{r['areaSlug']}</loc>\n    <lastmod>2026-11-13</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n" for r in add)
for r in add:
    assert f"/pest/{r['pestSlug']}/{r['areaSlug']}<" not in s
s = s.replace("</urlset>", urls + "</urlset>")
open(SM, "w", encoding="utf-8").write(s)
print("added", len(add), [f"{r['pestSlug']}/{r['areaSlug']}" for r in add])
