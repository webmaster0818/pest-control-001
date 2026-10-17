#!/usr/bin/env python3
"""既存のハチ×県エントリ（pestAreas.ts）に、追加調査した自治体をマージする（第4弾 2026-10-17）。

入力: <SRC>/add-<slug>.json
  {slug, name, confirmed_date, municipal[...], summary_addition, note}
処理:
  - municipalSupport の末尾に新しい自治体を追加（既存行は変更しない）
  - intro の自治体数と確認日の表記を更新（「…に N自治体を追加」を追記）
  - supportSummary の末尾に summary_addition を追記
  - cautions の「確認できなかった事項：…」を note で置き換え
  - エントリ末尾の confirmedDate を更新
"""
import glob, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gen_hachi_areas4 import ts, SRC, REPO  # noqa: E402

PATH = os.path.join(REPO, 'app', 'data', 'pestAreas.ts')


def block_range(s, slug):
    i = s.find(f'pestSlug: "wasp",\n    pestName: "ハチ",\n    areaSlug: "{slug}",')
    assert i > 0, slug
    return i, s.find('\n  },', i)


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
        if not new:
            print(f'{slug}: no new', file=sys.stderr)
            continue
        items = ''.join(
            '      ' + ts({
                'name': m['name'], 'url': m['url'], 'policy': m['policy'],
                'subsidy': m.get('subsidy'), 'lending': m.get('lending'),
                'note': m.get('note'), 'confirmedDate': date,
            }, 6) + ',\n' for m in new)
        k = b.rfind('    ],\n    confirmedDate:')
        b = b[:k] + items + b[k:]
        n = old_n + len(new)
        assert f'{name}内{old_n}自治体' in b, (slug, old_n)
        b = b.replace(f'{name}内{old_n}自治体', f'{name}内{n}自治体', 1)
        b, c = re.subn(r'（確認日：([^）]*?)）。",',
                       lambda m: (f'（確認日：{m.group(1)}、{date}に{len(new)}自治体を追加）。",'
                                  if '追加' in m.group(1) else
                                  f'（確認日：{m.group(1)}。{date}に{len(new)}自治体を追加）。",'), b, 1)
        assert c == 1, slug
        m = re.search(r'    supportSummary: (".*?"),\n', b)
        summ = json.loads(m.group(1)) + d['summary_addition']
        b = b.replace(m.group(0), f'    supportSummary: {ts(summ)},\n')
        m = re.search(r'      ("確認できなかった事項：.*?"),\n', b)
        assert m, slug
        b = b.replace(m.group(0), f'      {ts(d["note"])},\n')
        b = re.sub(r'\n    confirmedDate: "[\d-]+",$', f'\n    confirmedDate: "{date}",', b)
        s = s[:i] + b + s[j:]
        print(f'{slug}: {old_n} -> {n} (+{len(new)})', file=sys.stderr)
    open(PATH, 'w', encoding='utf-8').write(s)


if __name__ == '__main__':
    main()
