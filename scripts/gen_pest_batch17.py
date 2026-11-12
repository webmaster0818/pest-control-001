# -*- coding: utf-8 -*-
# 第17弾（2026-11-12）: ハチ × 八王子市・船橋市・寝屋川市・川口市・川越市（いずれも中核市）。
# 公式ページを 2026-11-12 に開いて確認した内容のみ。「」内は公式ページの原文（scripts/verify_pest_batch17.py で照合）。
# 共通文は gen_pest_batch16.py と同一。料金（協定料金・出張調査費用・業者一覧の費用目安）は転記しない。
# 使い方: python3 scripts/gen_pest_batch17.py <out.json>
import json, sys
D = "2026-11-12"
DJ = "2026年11月12日確認"
CO = ["duskin", "hachi-otasuke", "taiyo"]
LAW = ("ハチは鳥獣保護管理法が対象とする鳥類・哺乳類にあたらないため、"
       "イタチやハクビシンのような捕獲許可の手続きは必要ありません。"
       "市が駆除するかどうか、費用の助成の有無と条件は市ごとに異なるため、"
       "本ページでは{c}の公式ページの記載をそのまま整理しています（確認日：{d}）。")
CHECK = [
    None,
    "見積もりは複数社から取り、巣の数・巣の場所・高所作業で追加費用が発生する条件を、"
    "作業前に書面でご確認ください。",
    "「○○円〜」という表示金額に何が含まれるか（出張費・薬剤費・高所作業費・"
    "巣の撤去と後片付け）をご確認ください。",
    "対応できるハチの種類（スズメバチ／アシナガバチ／ミツバチ）と、巣のある場所"
    "（屋根裏・床下・壁の中・高い場所）に対応できるかをご確認ください。",
    "駆除後に同じ場所へ巣が作られた場合の保証の有無と期間をご確認ください。",
    "作業日・作業時間帯と、当日の立ち会いが必要かどうかをご確認ください。",
]
CAUT_COMMON = [
    "当サイトは市区町村ごとの業者の対応可否を判定していません。"
    "下記の掲載業者が{c}内の個別の地域に対応できるかは、各社へ直接ご確認ください。"
    "掲載業者は{c}の指定業者・委託業者ではありません。",
    "助成制度は年度ごとに要件・予算が変わり、廃止されることもあります。"
    "申請の前に必ず{c}の最新の案内をご確認ください。",
]
STING = ("ハチに刺された場合は、症状の程度にかかわらず医療機関を受診してください。"
         "本ページでは応急手当の手順は扱いません。（編集部）")


def faq(q, a, org, src):
    return {"q": q, "a": a, "org": org, "source": src, "confirmedDate": D}


cities = []
for f in ["hachioji", "funabashi", "neyagawa", "kawaguchi", "kawagoe"]:
    exec(open(__file__.replace("gen_pest_batch17.py", f"gen_pest_batch17_{f}.py"),
              encoding="utf-8").read())

out = []
for c in cities:
    name = c["areaName"]
    out.append({
        "pestSlug": "wasp", "pestName": "ハチ",
        "areaSlug": c["areaSlug"], "areaName": name,
        "pestPagePath": "/hachi",
        "metaTitle": c["metaTitle"], "metaDescription": c["metaDescription"],
        "faqs": c["faqs"],
        "intro": c["intro"],
        "legalNotes": [],
        "govContacts": c["govContacts"],
        "damage": [STING],
        "companySlugs": CO,
        "checkPoints": [c["check0"]] + CHECK[1:],
        "cautions": [x.format(c=name) for x in CAUT_COMMON] + c["cautions_extra"],
        "supportSummary": c["supportSummary"],
        "municipalSupport": c["municipalSupport"],
        "confirmedDate": D,
    })

json.dump(out, open(sys.argv[1], "w"), ensure_ascii=False, indent=2)
print(len(out), "records")
