# -*- coding: utf-8 -*-
# 第12弾（2026-11-07）: アライグマ・ハクビシン × 北区・渋谷区・荒川区（東京都）。
# 第11弾の gen_pest_batch11.py と同じ共通部（環境省・東京都の文は 2026-11-07 に再取得して照合）。
# 公式ページを 2026-11-07 に開いて確認した内容のみ。「」内は公式ページの原文
# （scripts/verify_pest_batch12.py で照合）。
# 使い方: python3 scripts/gen_pest_batch12.py <out.json>
import json, sys
D = "2026-11-07"
DJ = "2026年11月7日確認"
CO_ANIMAL = ["kujo-zaurus", "house-protect", "protec", "duskin", "buzz",
             "roy", "hachi-otasuke", "miyako"]
PCO_TEL = "03-3254-0014"
TOKYO_RC = "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/raccoon"
TOKYO_PLAN = "https://www.kankyo.metro.tokyo.lg.jp/documents/d/kankyo/r8keikaku-1"
TOKYO_CAP = "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/birds/capture"


def faq(q, a, org, src):
    return {"q": q, "a": a, "org": org, "source": src, "confirmedDate": D}


# ===== 共通（環境省・東京都）: 第8〜11弾と同じ文・同じ出典（2026-11-07 に再取得して照合） =====
ENV_CAP = {"text": "「鳥獣の保護及び管理並びに狩猟の適正化に関する法律では、鳥獣又は鳥類の卵については、"
                   "狩猟により捕獲する場合を除いて、原則としてその捕獲、殺傷又は採取（以下「捕獲等」という）"
                   "が禁止されています。」",
           "org": "環境省「捕獲許可制度の概要」",
           "source": "https://www.env.go.jp/nature/choju/capture/capture1.html", "confirmedDate": D}
ENV_LIST = {"text": "特定外来生物等一覧（哺乳類）のアライグマ属に「カニクイアライグマ（P. cancrivorus）」と"
                    "「アライグマ（P. lotor）」が掲げられています。",
            "org": "環境省（日本の外来種対策／特定外来生物等一覧）",
            "source": "https://www.env.go.jp/nature/intro/2outline/list.html", "confirmedDate": D}
ENV_REG = {"text": "特定外来生物に指定されたものは、「飼育、栽培、保管及び運搬することが原則禁止されます。」"
                   "「たとえば、特定外来生物を野外において捕まえた場合、持って帰ることは禁止されていますが"
                   "（運搬することに該当）、その場ですぐに放すことは規制の対象とはなりません」",
           "org": "環境省「何が禁止されているの？｜日本の外来種対策｜外来生物法」",
           "source": "https://www.env.go.jp/nature/intro/1law/regulation.html", "confirmedDate": D}
PLAN_A = {"text": "都の計画は「本計画に参加している区市町村及び都は、特定外来生物であるアライグマに関しては"
                  "鳥獣保護管理法によらず、外来生物法に基づく防除として自らアライグマの捕獲を行うことができる。」"
                  "と記載しています。",
          "org": "東京都「東京都アライグマ・ハクビシン防除実施計画（令和８年度改定）」",
          "source": TOKYO_PLAN, "confirmedDate": D}
PLAN_H = {"text": "都の計画は捕獲の法手続きについて「特定外来生物ではないハクビシンの捕獲については、"
                  "鳥獣保護管理法に基づく捕獲許可が必要である。」と記載しています。",
          "org": "東京都「東京都アライグマ・ハクビシン防除実施計画（令和８年度改定）」",
          "source": TOKYO_PLAN, "confirmedDate": D}
GENERIC_CAUT = ("捕獲や追い出しの可否・手続きは自治体によって異なり、受付状況も変わることがあります。"
                "実際の手続きは上記の窓口にご確認ください。")
ANIMAL_CHECK_EST = ("業者に追い出しや侵入口の封鎖を依頼する場合は、作業範囲（追い出し・封鎖・清掃・消毒）と、"
                    "それぞれの費用、再侵入時の保証の有無を見積もりの段階で書面でご確認ください。（編集部）")
LAW_INTRO = ("本ページの法令に関する記述は、環境省・東京都・{c}の公式ページに記載されている内容の範囲に"
             "とどめています。編集部による法解釈は行っていません。")
SPECIES_INTRO = {
    "araiguma": "アライグマは外来生物法の特定外来生物です。都の防除実施計画に参加する区市町村は、"
                "外来生物法に基づく防除としてアライグマを捕獲できるとされています。",
    "hakubishin": "ハクビシンは特定外来生物ではなく、捕獲には鳥獣保護管理法に基づく許可が必要です。",
}
NAMES = {"araiguma": "アライグマ", "hakubishin": "ハクビシン"}


def contact_tokyo(tama=False):
    if tama:
        t = ("「アライグマ・ハクビシン対策について」のページは、多摩地区のお問い合わせ先を"
             "多摩環境事務所自然環境課鳥獣保護管理担当（電話 042-521-2948）としています。")
    else:
        t = ("「アライグマ・ハクビシン対策について」のページは、23区内のお問い合わせ先を"
             "自然環境部計画課鳥獣保護管理担当（電話 03-5388-3505）としています。")
    return {"name": "東京都環境局（アライグマ・ハクビシン対策）", "url": TOKYO_RC,
            "text": t, "confirmedDate": D}


def caut_x(c):
    return ("当サイトは市区町村ごとの対応可否を判定していません。" + c
            + "内の個別の地域に対応できるかは、各社へ直接ご確認ください。"
            "掲載業者は" + c + "の委託業者ではありません。")


def make(pest, slug, area, w):
    n = NAMES[pest]
    legal = ([ENV_LIST, ENV_REG, PLAN_A, ENV_CAP] if pest == "araiguma" else [ENV_CAP, PLAN_H])
    return {
        "pestSlug": pest, "pestName": n,
        "areaSlug": slug, "areaName": area,
        "pestPagePath": "/" + pest,
        "metaTitle": w["title"].format(n=n),
        "metaDescription": w["desc"].format(n=n),
        "faqs": [w["faq1"](n)] + w["faqs"],
        "intro": [
            w["short"] + "で" + n + "の被害でお困りの方に向けて、" + w["short"]
            + "・東京都・環境省が公開している情報と、当サイトに掲載している駆除業者のうち"
            + n + "対応の記載がある業者を整理しています。",
        ] + w["intro"] + [SPECIES_INTRO[pest], LAW_INTRO.format(c=w["short"])],
        "legalNotes": legal + w["law"],
        "govContacts": w["contacts"],
        "damage": w["damage"] + [w["feat"][pest]],
        "companySlugs": CO_ANIMAL,
        "checkPoints": w["check"] + [ANIMAL_CHECK_EST],
        "cautions": [caut_x(w["short"]), GENERIC_CAUT, w["caut"]],
        "confirmedDate": D,
    }


out = []
exec(open(__file__.replace("gen_pest_batch12.py", "gen_pest_batch12_areas.py"), encoding="utf-8").read())
json.dump(out, open(sys.argv[1], "w"), ensure_ascii=False, indent=2)
print(len(out))
