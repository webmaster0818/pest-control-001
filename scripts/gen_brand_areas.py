#!/usr/bin/env python3
"""調査JSON（公式サイト一次確認）から brandAreas.ts のエントリを生成する。
値は調査JSONの文字列をそのまま転記する。推測での補完は一切しない。"""
import json, glob, os, re

D = '/private/tmp/claude-501/-Users-jiro-hasegawa/833d5533-5eb8-4fb6-ba69-ec00321e6dbf/scratchpad/gaichu2'
PREF = {'aichi':'愛知県','chiba':'千葉県','fukuoka':'福岡県','hamamatsu':'浜松市','hiroshima':'広島県',
        'hokkaido':'北海道','hyogo':'兵庫県','ibaraki':'茨城県','kagoshima':'鹿児島県','kanagawa':'神奈川県',
        'kawasaki':'川崎市','kitakyushu':'北九州市','kobe':'神戸市','kumamoto':'熊本県','kyoto':'京都府',
        'miyagi':'宮城県','miyazaki':'宮崎県','nagoya':'名古屋市','niigata':'新潟県','okinawa':'沖縄県',
        'osaka':'大阪府','saitama':'埼玉県','saitama-city':'さいたま市','sapporo':'札幌市','sendai':'仙台市',
        'shizuoka':'静岡県','tochigi':'栃木県','tokyo':'東京都','yokohama':'横浜市'}
KEY = {k: v.replace('県','').replace('府','').replace('都','').replace('市','') for k, v in PREF.items()}

def ts(v, indent=6):
    """Python値をTSリテラルへ。文字列はJSONエスケープ（日本語はそのまま）。"""
    pad = ' ' * indent
    if v is None:
        return 'null'
    if isinstance(v, str):
        return json.dumps(v, ensure_ascii=False)
    if isinstance(v, list):
        if not v:
            return '[]'
        items = ',\n'.join(f'{pad}  {ts(x, indent + 2)}' for x in v)
        return '[\n' + items + f',\n{pad}]'
    if isinstance(v, dict):
        items = ',\n'.join(f'{pad}  {k}: {ts(x, indent + 2)}' for k, x in v.items())
        return '{\n' + items + f',\n{pad}}}'
    raise TypeError(type(v))

def first_str(*vals):
    for v in vals:
        if isinstance(v, str) and v.strip():
            return v.strip()
        if isinstance(v, list) and v:
            joined = ' / '.join(str(x) for x in v if x)
            if joined.strip():
                return joined.strip()
        if isinstance(v, dict) and v:
            joined = ' / '.join(f'{k}: {x}' for k, x in v.items() if x)
            if joined.strip():
                return joined.strip()
    return None

brands = []
for f in sorted(glob.glob(os.path.join(D, 'brands-*.json'))):
    brands.extend(json.load(open(f)))

SKIP = {('house-protect', 'tokyo')}  # 手作業で作成済みのサンプルは温存する
entries, thin, skipped = [], [], []

for b in brands:
    if b.get('status') != 'verified':
        skipped.append((b.get('slug'), b.get('status')))
        continue
    slug = b['slug']
    areas_text = first_str(b.get('areas_official_text'))
    offices_all = b.get('offices') or []
    area_pages = b.get('area_pages') or []
    muni_map = b.get('municipalities_by_area') or {}
    svc = b.get('services')
    price = b.get('price_policy')
    guar = b.get('guarantee')
    survey = b.get('survey')
    hours = b.get('hours')
    op = b.get('operator') or {}

    for a in (b.get('matched_area_slugs') or []):
        if a not in PREF or (slug, a) in SKIP:
            continue
        k = KEY[a]
        ap = [p for p in area_pages if k in (str(p.get('area', '')) + str(p.get('url', '')))]
        off = [o for o in offices_all
               if k in (str(o.get('address', '')) + str(o.get('jurisdiction', '')) + str(o.get('name', '')))]
        if not ap and not off:
            thin.append((slug, a))
            continue

        statements = []
        if areas_text:
            statements.append(f'対応エリアの公式表記: {areas_text}')
        for p in ap:
            t = first_str(p.get('text'), p.get('title'))
            if t:
                statements.append(t)

        muni_raw = muni_map.get(PREF[a]) or muni_map.get(k) or ''
        municipalities = [m.strip() for m in re.split(r'[、,/／]', muni_raw) if m.strip()] if muni_raw else []

        not_found = []
        if not off:
            not_found.append(f'{PREF[a]}内の拠点（住所）は公式サイトで確認できませんでした。')
        if not municipalities:
            not_found.append('公式サイトに市区町村単位の対応エリア一覧の掲載はありませんでした。')
        if not price or '確認' in str(price):
            not_found.append('駆除料金の具体的な金額は公式サイトに掲示がありませんでした。')

        entries.append({
            'brandSlug': slug,
            'brandName': b.get('name'),
            'areaSlug': a,
            'areaName': PREF[a],
            'officialAreaPage': (ap[0].get('url') if ap else None),
            'offices': [{
                'name': o.get('name') or '拠点',
                'address': o.get('address') or '公式サイトに記載なし',
                'phone': o.get('phone') or '公式サイトに拠点直通番号の記載なし',
                'jurisdiction': o.get('jurisdiction') or '公式サイトに管轄エリアの記載なし',
            } for o in off],
            # 調査メモ（内部向け表記を含む）はページに出さない
            'officesNote': None,
            'areaStatements': statements,
            'municipalities': municipalities,
            'municipalitiesNote': ('公式サイトに市区町村単位の一覧掲載がないため、当サイトでは市区町村ごとの対応可否を判定していません。'
                                  if not municipalities else None),
            'services': {
                'main': first_str(svc) or '公式サイトに記載なし',
                'others': None,
                'work': first_str(b.get('work_content')) or '公式サイトに記載なし',
            },
            'price': {
                'text': first_str(price) or '公式サイトに料金の記載なし',
                'note': None,
                'listedPrice': None,
            },
            'guarantee': {
                'headline': '公式サイトの保証に関する記載',
                'text': first_str(guar) or '公式サイトに保証の記載なし',
                'condition': None,
                'afterSupport': None,
            },
            'survey': {
                'cost': first_str(survey) or '公式サイトに記載なし',
                'speed': None,
            },
            'hours': first_str(hours) or '公式サイトに記載なし',
            'campaign': None,
            'qualifications': (b.get('qualifications') if isinstance(b.get('qualifications'), list) else
                               ([b['qualifications']] if b.get('qualifications') else [])),
            'operator': {
                'name': op.get('name') or '公式サイトに記載なし',
                'address': op.get('address') or '公式サイトに記載なし',
            },
            'confirmedDate': b.get('confirmed_date') or '2026-09-25',
            'sources': (b.get('sources') or []) + ([ap[0]['url']] if ap and ap[0].get('url') else []),
            'notFound': not_found,
        })

out = ['', '  // ここから下は調査JSON（公式サイト一次確認 2026-09-25）から scripts/gen_brand_areas.py で生成',
       '  // 値は公式サイトの表記をそのまま転記。推測での補完はしていない。']
for e in entries:
    out.append('  {')
    OPTIONAL = {'officesNote', 'municipalitiesNote'}
    for k, v in e.items():
        if v is None and k in OPTIONAL:
            continue
        out.append(f'    {k}: {ts(v, 4)},')
    out.append('  },')
print('\n'.join(out))
import sys
print(f'\n// generated={len(entries)} thin_skipped={len(thin)} unverified={len(skipped)}', file=sys.stderr)
json.dump({'generated': [(e['brandSlug'], e['areaSlug']) for e in entries], 'thin': thin},
          open(os.path.join(D, 'gen-report.json'), 'w'), ensure_ascii=False, indent=1)
