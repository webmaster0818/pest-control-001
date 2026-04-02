#!/usr/bin/env python3
import os

pages_info = [
    {"pest_en": "termite", "area_en": "tokyo", "pest_ja": "シロアリ", "area_ja": "東京", "area_detail": "東京23区、多摩地域"},
    {"pest_en": "cockroach", "area_en": "tokyo", "pest_ja": "ゴキブリ", "area_ja": "東京", "area_detail": "東京23区、多摩地域"},
    {"pest_en": "termite", "area_en": "osaka", "pest_ja": "シロアリ", "area_ja": "大阪", "area_detail": "大阪市、堺市、北摂エリア"},
    {"pest_en": "cockroach", "area_en": "osaka", "pest_ja": "ゴキブリ", "area_ja": "大阪", "area_detail": "大阪市、堺市、北摂エリア"},
    {"pest_en": "termite", "area_en": "yokohama", "pest_ja": "シロアリ", "area_ja": "横浜", "area_detail": "横浜市全域、川崎市"},
    {"pest_en": "wasp", "area_en": "tokyo", "pest_ja": "ハチ", "area_ja": "東京", "area_detail": "東京23区、多摩地域"},
    {"pest_en": "cockroach", "area_en": "yokohama", "pest_ja": "ゴキブリ", "area_ja": "横浜", "area_detail": "横浜市全域、川崎市"},
    {"pest_en": "termite", "area_en": "nagoya", "pest_ja": "シロアリ", "area_ja": "名古屋", "area_detail": "名古屋市、愛知県内"},
    {"pest_en": "cockroach", "area_en": "nagoya", "pest_ja": "ゴキブリ", "area_ja": "名古屋", "area_detail": "名古屋市、愛知県内"},
]

# エリア別の区リスト
area_districts = {
    "tokyo": ["新宿区", "渋谷区", "港区", "世田谷区", "大田区", "練馬区", "江戸川区", "足立区"],
    "osaka": ["北区", "中央区", "西区", "天王寺区", "浪速区", "阿倍野区", "東住吉区", "平野区"],
    "yokohama": ["西区", "中区", "南区", "港北区", "鶴見区", "神奈川区", "保土ケ谷区", "緑区"],
    "nagoya": ["中村区", "中区", "熱田区", "千種区", "東区", "北区", "西区", "港区"],
}

# 料金相場
price_data = {
    "termite": {
        "tokyo": "12,000〜18,000円/坪",
        "osaka": "10,000〜16,000円/坪",
        "yokohama": "11,000〜17,000円/坪",
        "nagoya": "9,000〜14,000円/坪",
    },
    "cockroach": {
        "tokyo": "20,000〜35,000円/件",
        "osaka": "15,000〜30,000円/件",
        "yokohama": "18,000〜32,000円/件",
        "nagoya": "15,000〜28,000円/件",
    },
    "wasp": {
        "tokyo": "15,000〜35,000円/件",
        "osaka": "15,000〜30,000円/件",
        "yokohama": "15,000〜33,000円/件",
        "nagoya": "12,000〜28,000円/件",
    },
}

# カレンダーデータ
calendar_data = {
    "termite": [
        ("春（3月〜5月）", "羽アリ発生ピーク", "羽アリを見かけたら即座に点検を。"),
        ("夏（6月〜8月）", "活動活発化", "梅雨時期の湿気で活動が活発化。"),
        ("秋（9月〜11月）", "巣の拡大期", "冬に向けて巣を拡大する時期。"),
        ("冬（12月〜2月）", "活動低下", "駆除には最適な時期。予防対策も効果的。"),
    ],
    "cockroach": [
        ("春（3月〜5月）", "活動開始", "気温上昇で活動開始。早期対策が重要。"),
        ("夏（6月〜8月）", "繁殖ピーク", "最も活発な時期。徹底的な駆除が必要。"),
        ("秋（9月〜11月）", "越冬準備", "暖かい場所に集まる。"),
        ("冬（12月〜2月）", "暖房エリアで活動", "暖房のある場所では年中活動。"),
    ],
    "wasp": [
        ("春（3月〜5月）", "巣作り開始", "女王バチが巣作りを開始。小さいうちに駆除を。"),
        ("夏（6月〜8月）", "巣の拡大期", "働きバチが増加し、巣が急速に拡大。"),
        ("秋（9月〜11月）", "攻撃性ピーク", "最も危険な時期。プロに任せるべき。"),
        ("冬（12月〜2月）", "活動休止", "空き巣の撤去と来春の予防対策を。"),
    ],
}

companies = [
    ("駆除ザウルス", "kujyo-zaurus.png"),
    ("害獣駆除のROY", "roy.png"),
    ("害獣BUZZ", "buzz.png"),
    ("サンキョークリーンサービス", "sankyo.png"),
    ("ハウスプロテクト", "house-protect.png"),
    ("害虫駆除110番", "gaichu110.png"),
    ("害獣プロテック", "protec.png"),
    ("ラッター", "ratter.png"),
]

updated_pages = []
for page_info in pages_info:
    pest_en = page_info["pest_en"]
    area_en = page_info["area_en"]
    pest_ja = page_info["pest_ja"]
    area_ja = page_info["area_ja"]
    area_detail = page_info["area_detail"]
    
    price = price_data.get(pest_en, {}).get(area_en, "要見積もり")
    calendar = calendar_data.get(pest_en, [])
    districts = area_districts.get(area_en, [])
    
    # ファイル生成（長いので省略し、既存ファイルから読み込んで部分修正する方式に変更）
    file_path = f'app/pest/{pest_en}/{area_en}/page.tsx'
    
    # 既存ファイルを読み込み
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        print(f'⚠ {file_path} が見つかりません')
        continue
    
    # タイトルを8社に変更
    content = content.replace('おすすめ10社', 'おすすめ8社')
    content = content.replace('業者10社', '業者8社')
    
    # メタデータを更新（簡易版）
    # 実際の詳細な更新は次のステップで実施
    
    updated_pages.append(f'{pest_ja}駆除 {area_ja} ({pest_en}/{area_en})')
    print(f'✓ {file_path} を更新しました（簡易版）')

print(f'\n=== フェーズ1簡易更新完了: {len(updated_pages)}ページ ===')
for page in updated_pages:
    print(f'- {page}')

print('\n次のステップ: 詳細な業者情報、料金相場、カレンダー、エリアリストを追加')
