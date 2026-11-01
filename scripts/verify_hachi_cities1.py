# -*- coding: utf-8 -*-
# gen_hachi_cities1.py の出力で「」内の文が公式ページの本文に含まれるか照合する。
import json, re, sys
W = sys.argv[2]
recs = json.load(open(sys.argv[1]))
SRC = {"saitama-city":["saitama"],"kyoto-city":["kyoto"],"shizuoka-city":["shizuoka"],"maebashi":["maebashi"],
       "takasaki":["takasaki"],"yokosuka":["yokosuka","yokosuka2"],"mito":["mito"],"himeji":["himeji"],
       "nagasaki-city":["nagasaki"],"oita-city":["oita"]}
def norm(s): return re.sub(r'[\s　​]+','',s)
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
def walk(o):
    if isinstance(o,str): yield o
    elif isinstance(o,list):
        for x in o: yield from walk(x)
    elif isinstance(o,dict):
        for k,v in o.items():
            if k not in ('url','source','org','name'): yield from walk(v)
bad=0;n=0
for r in recs:
    src=norm(''.join(open(f"{W}/{k}.txt").read() for k in SRC[r['areaSlug']]))
    for s in walk(r):
        for q in spans(s):
            if q in ('○○円〜',): continue
            n+=1
            if norm(q) not in src:
                bad+=1; print(r['areaSlug'],'NG:',q[:100])
print('checked',n,'mismatch',bad)
