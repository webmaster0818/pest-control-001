# 第2弾（2026-11-01）: 公式ページ本文 txt と「」引用の照合。
# 使い方: python3 verify.py <record.json> <srcdir>
# レコード内の文字列（url/source/org/name 以外）の「」内の文が <srcdir>/*.txt の本文に含まれるか照合（空白は無視）。
import json,re,sys,glob
rec=json.load(open(sys.argv[1]))
recs=rec if isinstance(rec,list) else [rec]
def norm(s): return re.sub(r'[\s　​]+','',s)
src=norm(''.join(open(f).read() for f in glob.glob(sys.argv[2]+'/*.txt')))
def spans(t):
    out=[];d=0;st=0
    for i,ch in enumerate(t):
        if ch=='「':
            if d==0: st=i+1
            d+=1
        elif ch=='」' and d>0:
            d-=1
            if d==0: out.append(t[st:i])
    return out
def walk(o,k=None):
    if isinstance(o,str):
        if k not in ('url','source','org','name'): yield o
    elif isinstance(o,list):
        for x in o: yield from walk(x,k)
    elif isinstance(o,dict):
        for kk,v in o.items(): yield from walk(v,kk)
bad=n=0
for r in recs:
    for s in walk(r):
        for q in spans(s):
            if q in ('○○円〜','記載なし'): continue
            n+=1
            if norm(q) not in src: bad+=1; print('NG:',q[:120])
bangs=[s for r in recs for s in walk(r) if '！' in s or '!' in s]
print('checked',n,'mismatch',bad,'bang',len(bangs))
