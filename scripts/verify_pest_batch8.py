# 第8弾（2026-11-02）: 公式ページ本文 txt と「」引用の照合（レコードごとに、そのページの出典だけと照合）。
# 使い方: python3 scripts/verify_pest_batch8.py <records.json> <rawdir>
#   <rawdir>/<dir>/*.txt に当日取得した公式ページ本文（HTMLからテキスト化・コメント除去、PDFは pdftotext）を置く。
# - url/source/org/name 以外の文字列の「」内が、そのレコードの出典本文に含まれるか（空白・ゼロ幅空白は無視）。
# - 「！」「!」は「」の引用内にだけ許可（引用外にあれば NG）。
import json, re, sys, glob
recs = json.load(open(sys.argv[1]))
RAW = sys.argv[2]
DIRS = {(p, w): [w, "env"] for p in ("araiguma", "hakubishin") for w in ("bunkyo", "edogawa", "meguro", "adachi")}
def norm(s): return re.sub(r'[\s　​]+', '', s)
def spans(t):
    out = []; d = 0; st = 0
    for i, ch in enumerate(t):
        if ch == '「':
            if d == 0: st = i + 1
            d += 1
        elif ch == '」' and d > 0:
            d -= 1
            if d == 0: out.append((st, i))
    return out
def walk(o, k=None):
    if isinstance(o, str):
        yield k, o
    elif isinstance(o, list):
        for x in o: yield from walk(x, k)
    elif isinstance(o, dict):
        for kk, v in o.items(): yield from walk(v, kk)
bad = n = bang_out = bang_in = 0
VERBATIM_LEGAL = ('鳥獣保護管理法では、',)  # 「」を含むが全文が原文どおりの法令の記述
LEGAL_TEXTS = {x['text'] for r in recs for x in r['legalNotes']}
for r in recs:
    key = (r["pestSlug"], r["areaSlug"])
    src = norm(''.join(open(f).read() for d in DIRS[key] for f in glob.glob(f"{RAW}/{d}/*.txt")))
    for k, s in walk(r):
        sp = spans(s)
        for i, ch in enumerate(s):
            if ch in '！!':
                if any(a <= i < b for a, b in sp): bang_in += 1
                else: bang_out += 1; print('BANG outside quote:', key, k, s[max(0, i-30):i+5])
        if k in ('url', 'source', 'org', 'name'):
            continue
        if k == 'text' and s in LEGAL_TEXTS and ('「' not in s or s.startswith(VERBATIM_LEGAL)):
            n += 1
            if norm(s) not in src: bad += 1; print('NG(legal whole):', key, s[:120])
        for a, b in sp:
            q = s[a:b]
            if q in ('○○円〜',): continue
            n += 1
            if norm(q) not in src:
                bad += 1; print('NG:', key, k, q[:120])
print('records', len(recs), 'checked', n, 'mismatch', bad, 'bang_in_quotes', bang_in, 'bang_outside', bang_out)
