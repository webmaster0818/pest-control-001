#!/usr/bin/env python3
"""既存のハチ×県エントリ（pestAreas.ts）に、追加調査した自治体をマージする（2026-10-12）。

入力: <SRC>/add-<slug>.json
  {slug, name, confirmed_date, municipal[...], summary_addition, note, pref_page}
処理:
  - municipalSupport の末尾に新しい自治体を追加（既存行は変更しない）
  - intro の自治体数・確認日の表記を更新
  - supportSummary の末尾に summary_addition を追記
  - cautions の「確認できなかったこと：…」を note で置き換え
  - pref_page があり govContacts が空なら追加し、「県全体の公式ページは確認できなかった」旨の注記を外す
"""
import glob, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gen_hachi_areas3 import ts, SRC  # noqa: E402

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(REPO, 'app', 'data', 'pestAreas.ts')


def block_range(s, slug):
    i = s.find(f'pestSlug: "wasp",\n    pestName: "ハチ",\n    areaSlug: "{slug}",')
    assert i > 0, slug
    j = s.find('\n  },', i)
    return i, j


def main():
    s = open(PATH, encoding='utf-8').read()
    for f in sorted(glob.glob(os.path.join(SRC, 'add-*.json'))):
        d = json.load(open(f, encoding='utf-8'))
        slug, name, date = d['slug'], d['name'], d['confirmed_date']
        i, j = block_range(s, slug)
        b = s[i:j]
        ms = b[b.find('    municipalSupport: ['):]
        have = re.findall(r'\n        name: "([^"]+)",', ms)
        old_n = len(have)
        new = [m for m in d['municipal'] if m.get('url') and m['name'] not in have]
        items = ''.join(
            '      ' + ts({
                'name': m['name'], 'url': m['url'], 'policy': m['policy'],
                'subsidy': m.get('subsidy'), 'lending': m.get('lending'),
                'note': m.get('note'), 'confirmedDate': date,
            }, 6) + ',\n' for m in new)
        k = b.rfind('    ],\n    confirmedDate:')
        b = b[:k] + items + b[k:]
        n = old_n + len(new)
        b = b.replace(f'{name}内{old_n}自治体', f'{name}内{n}自治体', 1)
        b = re.sub(r'（確認日：(\d{4}-\d\d-\d\d)）',
                   lambda m: f'（確認日：{m.group(1)}。{date}に{len(new)}自治体を追加）', b, 1)
        m = re.search(r'    supportSummary: (".*?"),\n', b)
        summ = json.loads(m.group(1)) + d['summary_addition']
        b = b.replace(m.group(0), f'    supportSummary: {ts(summ)},\n')
        m = re.search(r'      ("確認できなかったこと.*?"),\n', b)
        b = b.replace(m.group(0), f'      {ts(d["note"])},\n')
        pp = d.get('pref_page')
        if pp and pp.get('url') and '    govContacts: [],' in b:
            gov = [{'name': pp['name'], 'url': pp['url'], 'text': pp.get('text') or '',
                    'confirmedDate': date}]
            b = b.replace('    govContacts: [],', f'    govContacts: {ts(gov, 4)},')
            b = re.sub(r'      "[^"\n]*県全体のハチ駆除に関する公式ページは、今回の調査では確認できませんでした。",\n', '', b)
        b = re.sub(r'\n    confirmedDate: "[\d-]+",$', f'\n    confirmedDate: "{date}",', b)
        s = s[:i] + b + s[j:]
        print(f'{slug}: {old_n} -> {n} (+{len(new)})', file=sys.stderr)
    open(PATH, 'w', encoding='utf-8').write(s)


if __name__ == '__main__':
    main()
