#!/usr/bin/env python3
"""公的機関の調査JSON（種別 × エリア別）から pestAreas.ts のエントリを生成する。
法令の記述は公的機関ページの文言をそのまま転記し、org と source を必ず持たせる。"""
import json, glob, os, re, sys

D = '/private/tmp/claude-501/-Users-jiro-hasegawa/833d5533-5eb8-4fb6-ba69-ec00321e6dbf/scratchpad/gaichu2'
SPECIES = {'itachi': 'イタチ', 'hakubishin': 'ハクビシン', 'araiguma': 'アライグマ',
           'koumori': 'コウモリ', 'nezumi': 'ネズミ'}
COMPANIES = {
    'itachi': ['kujo-zaurus', 'house-protect', 'protec', 'duskin', 'buzz', 'roy'],
    'hakubishin': ['kujo-zaurus', 'house-protect', 'protec', 'duskin', 'buzz', 'roy', 'hachi-otasuke', 'miyako'],
    'araiguma': ['kujo-zaurus', 'house-protect', 'protec', 'duskin', 'buzz', 'roy', 'hachi-otasuke', 'miyako'],
    'koumori': ['kujo-zaurus', 'house-protect', 'protec', 'duskin', 'buzz', 'roy', 'hachi-otasuke', 'miyako'],
    'nezumi': ['kujo-zaurus', 'house-protect', 'protec', 'duskin', 'buzz', 'roy', 'hachi-otasuke', 'miyako', 'ratter'],
}
# 既存の手作業エントリ（温存）
SKIP = {('itachi', 'tokyo')}

def ts(v, indent=6):
    pad = ' ' * indent
    if v is None:
        return 'null'
    if isinstance(v, str):
        return json.dumps(v, ensure_ascii=False)
    if isinstance(v, list):
        if not v:
            return '[]'
        return '[\n' + ',\n'.join(f'{pad}  {ts(x, indent + 2)}' for x in v) + f',\n{pad}]'
    if isinstance(v, dict):
        return '{\n' + ',\n'.join(f'{pad}  {k}: {ts(x, indent + 2)}' for k, x in v.items()) + f',\n{pad}}}'
    raise TypeError(type(v))

def flat(t):
    """調査JSONの text は str / list / dict の揺れがあるため必ず文字列へ畳む。"""
    if t is None:
        return None
    if isinstance(t, str):
        return t
    if isinstance(t, list):
        parts = [flat(x) for x in t]
        return ' '.join(p for p in parts if p)
    if isinstance(t, dict):
        return flat(t.get('text')) or ' '.join(str(v) for v in t.values() if isinstance(v, str))
    return str(t)

def note(d, key):
    """{text, org, source} 形式の配列を正規化。"""
    out = []
    for x in (d.get(key) or []):
        if not isinstance(x, dict):
            continue
        t, o, s = flat(x.get('text')), x.get('org'), x.get('source')
        if t and s:
            out.append({'text': t, 'org': o or '公的機関', 'source': s, 'confirmedDate': x.get('confirmed_date') or '2026-09-25'})
    return out

species = {}
for f in glob.glob(os.path.join(D, 'species-*.json')):
    d = json.load(open(f))
    species[d['slug']] = d
areas = {}
for f in glob.glob(os.path.join(D, 'area-*.json')):
    d = json.load(open(f))
    areas[d['slug']] = d

entries = []
for ss, sname in SPECIES.items():
    sp = species.get(ss)
    if not sp:
        continue
    s_legal = note(sp, 'legal_status') + note(sp, 'capture_permission')
    s_damage = [f"{flat(x['text'])}（{x.get('org','公的機関')}）" for x in (sp.get('damage') or []) if isinstance(x, dict) and x.get('text')]
    s_prevent = [f"{flat(x['text'])}（{x.get('org','公的機関')}）" for x in (sp.get('prevention') or []) if isinstance(x, dict) and x.get('text')]
    for aslug, ad in sorted(areas.items()):
        if (ss, aslug) in SKIP:
            continue
        aname = ad['name']
        a_legal = note(ad, 'capture_permit')
        pref_page = ad.get('pref_page') or {}
        if pref_page.get('text') and pref_page.get('url'):
            a_legal.insert(0, {'text': flat(pref_page['text']), 'org': f"{aname}（{pref_page.get('name') or '公式ページ'}）",
                               'source': pref_page['url'], 'confirmedDate': ad.get('confirmed_date') or '2026-09-25'})
        gov = [{'name': c.get('name') or '', 'url': c.get('url') or '', 'text': flat(c.get('text')) or '',
                'confirmedDate': ad.get('confirmed_date') or '2026-09-25'}
               for c in (ad.get('municipal_contacts') or []) if c.get('url')]

        intro = [
            f"{aname}で{sname}の被害に困っている方向けに、公的機関が公開している情報と、当サイトに掲載している駆除業者のうち{sname}対応の記載がある会社を整理しました。",
            f"{sname}の扱いは種によって根拠となる法令が異なります。このページでは、まず法令と{aname}・市区町村の相談窓口を案内し、そのうえで業者の比較情報を掲載しています。",
            "本ページの法令に関する記述は、環境省・自治体の公式ページに書かれている内容の範囲にとどめています。編集部による法解釈は行っていません。",
        ]
        extra = []
        if ss == 'araiguma' and ad.get('araiguma_note'):
            extra.append({'text': flat(ad['araiguma_note']), 'org': f'{aname}（特定外来生物に関する記載）',
                          'source': (pref_page.get('url') or (gov[0]['url'] if gov else '')), 'confirmedDate': '2026-09-25'})
        if ss == 'nezumi' and ad.get('nezumi_note'):
            extra.append({'text': flat(ad['nezumi_note']), 'org': f'{aname}（家ネズミの相談先に関する記載）',
                          'source': (pref_page.get('url') or (gov[0]['url'] if gov else '')), 'confirmedDate': '2026-09-25'})
        legal = s_legal + a_legal + [e for e in extra if e.get('source')]

        cautions = [
            f"当サイトは市区町村ごとの対応可否を判定していません。{aname}内の個別の地域に対応できるかは、各社へ直接ご確認ください。",
            "捕獲や追い出しの可否・手続きは自治体によって異なります。実際の手続きは上記の窓口にご確認ください。",
        ]
        if sp.get('note'):
            cautions.append(str(sp['note']))

        entries.append({
            'pestSlug': ss,
            'pestName': sname,
            'areaSlug': aslug,
            'areaName': aname,
            'pestPagePath': f'/{ss}',
            'intro': intro,
            'legalNotes': legal,
            'govContacts': gov,
            'damage': s_damage,
            'companySlugs': COMPANIES[ss],
            'checkPoints': (s_prevent[:6] or ['公式サイトに侵入防止に関する記載があるかを確認する']),
            'cautions': cautions,
            'confirmedDate': '2026-09-25',
        })

out = ['', '  // ここから下は公的機関の調査JSONから scripts/gen_pest_areas.py で生成（2026-09-25）',
       '  // legalNotes / govContacts は公的機関ページの文言と出典URLをそのまま保持している。']
for e in entries:
    out.append('  {')
    for k, v in e.items():
        out.append(f'    {k}: {ts(v, 4)},')
    out.append('  },')
print('\n'.join(out))
print(f'\n// generated={len(entries)} species={len(species)} areas={len(areas)}', file=sys.stderr)
