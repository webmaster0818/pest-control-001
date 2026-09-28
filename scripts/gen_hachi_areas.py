#!/usr/bin/env python3
"""ハチ（スズメバチ・アシナガバチ）× エリアの調査JSONから pestAreas.ts のエントリを生成する。

ハチは鳥獣保護管理法（対象＝鳥類・哺乳類）の対象ではないため、他の害獣ページと違って
「捕獲許可」は論点にならない。主題は自治体ごとの対応差（駆除の可否／費用の助成／
防護服・器具の貸出／対象種の条件）で、これを municipalSupport として出す。

【厳守】
- 助成金額は自治体公式ページに書かれているものだけ。書かれていなければ null（ページ上は「記載なし」）。
- 自治体・業者の評価、順位づけ、「1番」「最安」は書かない。事実の並列のみ。
- 応急手当の具体的手順は書かない（医療行為の指示になるため）。刺された場合は医療機関へ、にとどめる。

使い方:
    python3 scripts/gen_hachi_areas.py >> app/data/pestAreas.ts   # ではなく、
    python3 scripts/gen_hachi_areas.py                            # で出力を確認してから差し込む
"""
import glob
import json
import os
import re
import sys

SRC = ('/private/tmp/claude-501/-Users-jiro-hasegawa/'
       '833d5533-5eb8-4fb6-ba69-ec00321e6dbf/scratchpad/gaichu3')
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PEST_SLUG = 'wasp'
PEST_NAME = 'ハチ'
# 単体ページの実在を確認してから設定する（無ければ None → テンプレート側で /{pestSlug} にフォールバック）
PEST_PAGE_PATH = '/hachi' if os.path.isdir(os.path.join(REPO, 'app', 'hachi')) else None


def existing_static_areas():
    """app/pest/wasp/ 配下のディレクトリ＝既にベタ書きの静的ページがある組み合わせ。"""
    d = os.path.join(REPO, 'app', 'pest', PEST_SLUG)
    if not os.path.isdir(d):
        return set()
    return {n for n in os.listdir(d) if os.path.isdir(os.path.join(d, n))}


def hachi_company_slugs():
    """agentsData.ts で「ハチ」対応を公表している社だけを拾う。

    指示は servicesPests / servicesAnimals を見ることだったが、その2フィールドに
    「ハチ」を書いている社は1社も無い（この2フィールドは害獣系の社にしか無い）。
    ハチ対応を公表している社は serviceTags に書いているため、serviceTags も見る。
    掲載順はページ側が partnerTier 順に並べ替える（順位づけはしない）。
    """
    src = open(os.path.join(REPO, 'app', 'agents', 'agentsData.ts'), encoding='utf-8').read()
    out = []
    for block in re.split(r'\n    slug: "', src)[1:]:
        slug = block.split('"')[0]
        body = block.split('\n    slug:')[0]
        fields = []
        for key in ('servicesAnimals', 'servicesPests'):
            m = re.search(key + r': "(.*?)",\n', body, re.S)
            if m:
                fields.append(m.group(1))
        m = re.search(r'serviceTags: \[(.*?)\]', body, re.S)
        if m:
            fields.append(m.group(1))
        if any('ハチ' in f for f in fields):
            out.append(slug)
    return out


# ---- 被害の記述 -------------------------------------------------------------
# 自治体公式ページからの引用のうち、危険性に触れているものだけを拾う。
DANGER_KW = ('刺され', '攻撃性', '危険')
# 自己駆除を勧める文・助成の条件文・ページタイトルは被害の説明ではないので除外する。
DROP_KW = ('助成', '補助', '負担', '可能です', 'できます', '受付け', '申請',
           'ために', '対象', '円')


def damage_quotes(area):
    """その自治体の公式ページに書かれている、危険性に関する引用を集める。"""
    out, seen = [], set()
    for m in area['municipal']:
        for field in ('policy', 'note'):
            for q in re.findall(r'「([^」]{20,160})」', m.get(field) or ''):
                if not any(k in q for k in DANGER_KW):
                    continue
                if any(k in q for k in DROP_KW):
                    continue
                key = q[:40]
                if key in seen:
                    continue
                seen.add(key)
                out.append(f'{q}（{m["name"]}）')
    return out[:4]


SAFETY_LINE = (
    'ハチに刺された場合は、症状の程度にかかわらず医療機関を受診してください。'
    '本ページでは応急手当の手順は扱いません。（編集部）'
)
GENERIC_DAMAGE = (
    '住宅の軒下・屋根裏・壁の中・庭木などに巣が作られると、'
    '出入りのたびに刺される危険が生じます。（編集部）'
)

# ---- 業者選びの確認項目 -----------------------------------------------------
BASE_CHECK_POINTS = [
    '自治体の助成制度を使う場合、申請の前に業者へ依頼してよいか（事前申請の要否、'
    '市が承認した業者に限るかどうか）を、依頼前に自治体の担当課へ確認する。',
    '見積もりは複数社から取り、巣の数・巣の場所・高所作業で追加費用が発生する条件を、'
    '作業前に書面で確認する。',
    '「○○円〜」という表示金額に何が含まれるか（出張費・薬剤費・高所作業費・'
    '巣の撤去と後片付け）を確認する。',
    '対応できるハチの種類（スズメバチ／アシナガバチ／ミツバチ）と、'
    '巣のある場所（屋根裏・床下・壁の中・高い場所）に対応できるかを確認する。',
    '駆除後に同じ場所へ巣が作られた場合の保証の有無と期間を確認する。',
    '作業日・作業時間帯と、当日の立ち会いが必要かどうかを確認する。',
]
CONSUMER_CENTER_POINT = (
    'ハチ駆除では、広告の表示金額と実際の請求額が大きく異なるという相談が'
    '消費生活センターに寄せられています。金額に納得できない場合は、'
    '作業を始める前に一度止めて、お住まいの自治体の消費生活センターに相談する。'
)


def ts(v, indent=6):
    """pestAreas.ts に貼れる TypeScript リテラルへ整形する。"""
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


def main():
    skip = existing_static_areas()
    companies = hachi_company_slugs()
    entries, excluded, no_pref = [], [], []

    for f in sorted(glob.glob(os.path.join(SRC, 'hachi-*.json'))):
        d = json.load(open(f, encoding='utf-8'))
        aslug, aname = d['slug'], d['name']
        if aslug in skip:
            excluded.append(aslug)
            continue
        confirmed = d.get('confirmed_date') or '2026-09-28'
        muni = d.get('municipal') or []

        support = [{
            'name': m['name'],
            'url': m['url'],
            'policy': m['policy'],
            'subsidy': m.get('subsidy'),
            'lending': m.get('lending'),
            'note': m.get('note'),
            'confirmedDate': confirmed,
        } for m in muni if m.get('url')]

        # 県の公式ページ。ハチは鳥獣保護管理法の対象外なので legalNotes（＝捕獲許可の節）には
        # 入れない。中身も保健所・衛生研究所・消費生活センターの相談案内なので govContacts に置く。
        pref = d.get('pref_page') or {}
        gov = []
        if pref.get('url'):
            gov.append({
                'name': pref.get('name') or f'{aname}の公式ページ',
                'url': pref['url'],
                'text': pref.get('text') or '',
                'confirmedDate': confirmed,
            })
        else:
            no_pref.append(aslug)

        intro = [
            f'{aname}でハチ（スズメバチ・アシナガバチ）の巣に困っている方向けに、'
            f'{aname}内{len(support)}自治体の公式ページに書かれている対応と、'
            f'ハチ対応の記載がある駆除業者を整理しました。',
            'ハチは鳥獣保護管理法が対象とする鳥類・哺乳類にあたらないため、'
            'イタチやハクビシンのような捕獲許可の手続きは論点になりません。'
            'かわりに問題になるのが自治体ごとの対応の違いで、'
            '自治体が駆除するかどうか、駆除費用の助成があるかどうか、'
            '防護服や駆除器具を貸し出すかどうかは、同じ県内でも分かれます。',
            f'本ページの自治体に関する記述は、各自治体の公式ページに書かれている内容の'
            f'範囲にとどめています。公式ページに記載が無い項目は「記載なし」としており、'
            f'編集部が制度の有無や金額を推測して補うことはしていません'
            f'（確認日：{confirmed}）。',
        ]

        damage = damage_quotes(d) or [GENERIC_DAMAGE]
        damage.append(SAFETY_LINE)

        checks = list(BASE_CHECK_POINTS)
        if '消費生活' in (pref.get('name') or '') or '消費生活' in (pref.get('text') or ''):
            checks.insert(1, CONSUMER_CENTER_POINT)

        cautions = [
            '当サイトは市区町村ごとの業者の対応可否を判定していません。'
            f'{aname}内の個別の地域に対応できるかは、各社へ直接ご確認ください。',
            f'掲載しているのは{aname}内の一部の自治体です。'
            '掲載が無い自治体に制度が無いという意味ではありません。',
            '助成制度は年度ごとに要件・予算が変わり、廃止されることもあります。'
            '申請の前に必ず各自治体の最新の案内をご確認ください。',
        ]
        if not gov:
            cautions.append(
                f'{aname}として県全体のハチ駆除に関する公式ページは、'
                '今回の調査では確認できませんでした。'
            )
        if d.get('note'):
            cautions.append(str(d['note']))

        entry = {
            'pestSlug': PEST_SLUG,
            'pestName': PEST_NAME,
            'areaSlug': aslug,
            'areaName': aname,
        }
        if PEST_PAGE_PATH:
            entry['pestPagePath'] = PEST_PAGE_PATH
        entry.update({
            'intro': intro,
            'legalNotes': [],
            'govContacts': gov,
            'damage': damage,
            'companySlugs': companies,
            'checkPoints': checks,
            'cautions': cautions,
            'supportSummary': d.get('summary') or None,
            'municipalSupport': support,
            'confirmedDate': confirmed,
        })
        if entry['supportSummary'] is None:
            del entry['supportSummary']
        entries.append(entry)

    out = [
        '',
        '  // ここから下はハチ（スズメバチ・アシナガバチ）× エリアの調査JSONから',
        '  // scripts/gen_hachi_areas.py で生成（2026-09-28）。',
        '  // ハチは鳥獣保護管理法の対象外のため legalNotes は空で、',
        '  // 主題は municipalSupport（自治体ごとの駆除の可否・助成・貸出）。',
        '  // 公式ページに記載が無い項目は null のままにする（ページ上は「記載なし」）。',
    ]
    for e in entries:
        out.append('  {')
        for k, v in e.items():
            out.append(f'    {k}: {ts(v, 4)},')
        out.append('  },')
    print('\n'.join(out))

    total = sum(len(e['municipalSupport']) for e in entries)
    print(f'\n// generated={len(entries)} excluded={sorted(excluded)} '
          f'municipal={total} companies={companies} no_pref_page={sorted(no_pref)}',
          file=sys.stderr)


if __name__ == '__main__':
    main()
