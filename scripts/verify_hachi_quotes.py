"""調査JSON（<dir>/json/*.json）の「」引用が、保存した公式ページ本文（<dir>/raw/*.txt）に含まれるかを照合する。
使い方: python3 scripts/verify_hachi_quotes.py <調査ディレクトリ>
"""
import json,glob,re,os,sys,unicodedata
D=sys.argv[1]
def norm(s):
    s=unicodedata.normalize('NFKC',s)
    return re.sub(r'[\s「」『』]','',s)
allraw={os.path.basename(f)[:-4]:norm(open(f,errors='replace').read()) for f in glob.glob(D+'/raw/*.txt')}
bad=tot=0
for f in sorted(glob.glob(D+'/json/*.json')):
    d=json.load(open(f)); slug=d['slug']
    prefraw=''.join(v for k,v in allraw.items() if k.startswith(slug))
    for m in d.get('municipal',[]):
        if not m.get('raw') or m['raw'] not in allraw: print('NO RAW',slug,m['name'],m.get('raw')); bad+=1
        for fld in ('policy','subsidy','lending','note'):
            for q in re.findall(r'「([^「」]+)」',m.get(fld) or ''):
                tot+=1;nq=norm(q)
                if len(nq)<6 or nq in prefraw: continue
                print(f'MISS {slug} {m["name"]} {fld}: {q[:60]}'); bad+=1
    for fld in ('summary','summary_addition'):
        for q in re.findall(r'「([^「」]+)」',d.get(fld) or ''):
            tot+=1;nq=norm(q)
            if len(nq)<8 or nq in prefraw: continue
            print(f'MISS {slug} {fld}: {q[:60]}'); bad+=1
print('quotes',tot,'problems',bad)
