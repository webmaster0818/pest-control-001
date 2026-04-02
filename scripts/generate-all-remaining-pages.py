#!/usr/bin/env python3
"""
残り52ページを一括生成
- 害虫×エリアページ: 41ページ
- 新規エリアページ: 11ページ
"""
import os
import re
import shutil

# 害虫×エリアページ（41ページ）
pest_area_pages = [
    {"pest_en": "termite", "area_en": "fukuoka", "pest_ja": "シロアリ", "area_ja": "福岡", "base_area": "fukuoka"},
    {"pest_en": "wasp", "area_en": "osaka", "pest_ja": "ハチ", "area_ja": "大阪", "base_area": "osaka"},
    {"pest_en": "cockroach", "area_en": "fukuoka", "pest_ja": "ゴキブリ", "area_ja": "福岡", "base_area": "fukuoka"},
    {"pest_en": "nezumi", "area_en": "tokyo", "pest_ja": "ネズミ", "area_ja": "東京", "base_area": "tokyo"},
    {"pest_en": "termite", "area_en": "kanagawa", "pest_ja": "シロアリ", "area_ja": "神奈川", "base_area": "kanagawa"},
    {"pest_en": "cockroach", "area_en": "kanagawa", "pest_ja": "ゴキブリ", "area_ja": "神奈川", "base_area": "kanagawa"},
    {"pest_en": "termite", "area_en": "chiba", "pest_ja": "シロアリ", "area_ja": "千葉", "base_area": "chiba"},
    {"pest_en": "cockroach", "area_en": "chiba", "pest_ja": "ゴキブリ", "area_ja": "千葉", "base_area": "chiba"},
    {"pest_en": "termite", "area_en": "saitama", "pest_ja": "シロアリ", "area_ja": "埼玉", "base_area": "saitama"},
    {"pest_en": "cockroach", "area_en": "saitama", "pest_ja": "ゴキブリ", "area_ja": "埼玉", "base_area": "saitama"},
    {"pest_en": "wasp", "area_en": "yokohama", "pest_ja": "ハチ", "area_ja": "横浜", "base_area": "yokohama"},
    {"pest_en": "termite", "area_en": "sapporo", "pest_ja": "シロアリ", "area_ja": "札幌", "base_area": "sapporo"},
    {"pest_en": "wasp", "area_en": "nagoya", "pest_ja": "ハチ", "area_ja": "名古屋", "base_area": "nagoya"},
    {"pest_en": "cockroach", "area_en": "sapporo", "pest_ja": "ゴキブリ", "area_ja": "札幌", "base_area": "sapporo"},
    {"pest_en": "nezumi", "area_en": "osaka", "pest_ja": "ネズミ", "area_ja": "大阪", "base_area": "osaka"},
    {"pest_en": "termite", "area_en": "kyoto", "pest_ja": "シロアリ", "area_ja": "京都", "base_area": "kyoto"},
    {"pest_en": "cockroach", "area_en": "kyoto", "pest_ja": "ゴキブリ", "area_ja": "京都", "base_area": "kyoto"},
    {"pest_en": "termite", "area_en": "kobe", "pest_ja": "シロアリ", "area_ja": "神戸", "base_area": "kobe"},
    {"pest_en": "cockroach", "area_en": "kobe", "pest_ja": "ゴキブリ", "area_ja": "神戸", "base_area": "kobe"},
    {"pest_en": "wasp", "area_en": "fukuoka", "pest_ja": "ハチ", "area_ja": "福岡", "base_area": "fukuoka"},
    {"pest_en": "termite", "area_en": "sendai", "pest_ja": "シロアリ", "area_ja": "仙台", "base_area": "sendai"},
    {"pest_en": "cockroach", "area_en": "sendai", "pest_ja": "ゴキブリ", "area_ja": "仙台", "base_area": "sendai"},
    {"pest_en": "nezumi", "area_en": "yokohama", "pest_ja": "ネズミ", "area_ja": "横浜", "base_area": "yokohama"},
    {"pest_en": "termite", "area_en": "hiroshima", "pest_ja": "シロアリ", "area_ja": "広島", "base_area": "hiroshima"},
    {"pest_en": "cockroach", "area_en": "hiroshima", "pest_ja": "ゴキブリ", "area_ja": "広島", "base_area": "hiroshima"},
    {"pest_en": "wasp", "area_en": "chiba", "pest_ja": "ハチ", "area_ja": "千葉", "base_area": "chiba"},
    {"pest_en": "termite", "area_en": "kitakyushu", "pest_ja": "シロアリ", "area_ja": "北九州", "base_area": "kitakyushu"},
    {"pest_en": "cockroach", "area_en": "kitakyushu", "pest_ja": "ゴキブリ", "area_ja": "北九州", "base_area": "kitakyushu"},
    {"pest_en": "termite", "area_en": "kawasaki", "pest_ja": "シロアリ", "area_ja": "川崎", "base_area": "kawasaki"},
    {"pest_en": "cockroach", "area_en": "kawasaki", "pest_ja": "ゴキブリ", "area_ja": "川崎", "base_area": "kawasaki"},
    {"pest_en": "dani", "area_en": "tokyo", "pest_ja": "ダニ", "area_ja": "東京", "base_area": "tokyo"},
    {"pest_en": "wasp", "area_en": "saitama", "pest_ja": "ハチ", "area_ja": "埼玉", "base_area": "saitama"},
    {"pest_en": "nezumi", "area_en": "nagoya", "pest_ja": "ネズミ", "area_ja": "名古屋", "base_area": "nagoya"},
    {"pest_en": "termite", "area_en": "saitama-city", "pest_ja": "シロアリ", "area_ja": "さいたま", "base_area": "saitama-city"},
    {"pest_en": "cockroach", "area_en": "saitama-city", "pest_ja": "ゴキブリ", "area_ja": "さいたま", "base_area": "saitama-city"},
    {"pest_en": "termite", "area_en": "niigata", "pest_ja": "シロアリ", "area_ja": "新潟", "base_area": "niigata"},
    {"pest_en": "cockroach", "area_en": "niigata", "pest_ja": "ゴキブリ", "area_ja": "新潟", "base_area": "niigata"},
    {"pest_en": "termite", "area_en": "hamamatsu", "pest_ja": "シロアリ", "area_ja": "浜松", "base_area": "hamamatsu"},
    {"pest_en": "cockroach", "area_en": "hamamatsu", "pest_ja": "ゴキブリ", "area_ja": "浜松", "base_area": "hamamatsu"},
    {"pest_en": "termite", "area_en": "kumamoto", "pest_ja": "シロアリ", "area_ja": "熊本", "base_area": "kumamoto"},
    {"pest_en": "cockroach", "area_en": "kumamoto", "pest_ja": "ゴキブリ", "area_ja": "熊本", "base_area": "kumamoto"},
]

# 新規エリアページ（11ページ）
# これらは既存のエリアページをベースにコピー
new_area_pages = [
    {"area_en": "sapporo", "area_ja": "札幌", "base_area": "tokyo"},
    {"area_en": "kyoto", "area_ja": "京都", "base_area": "osaka"},
    {"area_en": "kobe", "area_ja": "神戸", "base_area": "osaka"},
    {"area_en": "sendai", "area_ja": "仙台", "base_area": "tokyo"},
    {"area_en": "hiroshima", "area_ja": "広島", "base_area": "fukuoka"},
    {"area_en": "kitakyushu", "area_ja": "北九州", "base_area": "fukuoka"},
    {"area_en": "kawasaki", "area_ja": "川崎", "base_area": "yokohama"},
    {"area_en": "saitama-city", "area_ja": "さいたま", "base_area": "saitama"},
    {"area_en": "niigata", "area_ja": "新潟", "base_area": "tokyo"},
    {"area_en": "hamamatsu", "area_ja": "浜松", "base_area": "nagoya"},
    {"area_en": "kumamoto", "area_ja": "熊本", "base_area": "fukuoka"},
]

# エリア別の区リスト（新規エリア用）
area_districts = {
    "tokyo": ["新宿区", "渋谷区", "港区", "世田谷区", "大田区", "練馬区", "江戸川区", "足立区"],
    "osaka": ["北区", "中央区", "西区", "天王寺区", "浪速区", "阿倍野区", "東住吉区", "平野区"],
    "yokohama": ["西区", "中区", "南区", "港北区", "鶴見区", "神奈川区", "保土ケ谷区", "緑区"],
    "nagoya": ["中村区", "中区", "熱田区", "千種区", "東区", "北区", "西区", "港区"],
    "fukuoka": ["博多区", "中央区", "南区", "西区", "東区", "城南区", "早良区", "西区"],
    "chiba": ["中央区", "花見川区", "稲毛区", "若葉区", "緑区", "美浜区"],
    "saitama": ["大宮区", "浦和区", "南区", "見沼区", "緑区", "岩槻区", "桜区", "西区"],
    "kanagawa": ["横浜市", "川崎市", "相模原市", "横須賀市", "藤沢市", "小田原市", "茅ヶ崎市", "厚木市"],
    "sapporo": ["中央区", "北区", "東区", "白石区", "豊平区", "南区", "西区", "厚別区"],
    "kyoto": ["北区", "上京区", "左京区", "中京区", "東山区", "下京区", "南区", "右京区"],
    "kobe": ["東灘区", "灘区", "兵庫区", "長田区", "須磨区", "垂水区", "北区", "中央区"],
    "sendai": ["青葉区", "宮城野区", "若林区", "太白区", "泉区"],
    "hiroshima": ["中区", "東区", "南区", "西区", "安佐南区", "安佐北区", "安芸区", "佐伯区"],
    "kitakyushu": ["門司区", "若松区", "戸畑区", "小倉北区", "小倉南区", "八幡東区", "八幡西区"],
    "kawasaki": ["川崎区", "幸区", "中原区", "高津区", "多摩区", "宮前区", "麻生区"],
    "saitama-city": ["西区", "北区", "大宮区", "見沼区", "中央区", "桜区", "浦和区", "南区", "緑区", "岩槻区"],
    "niigata": ["北区", "東区", "中央区", "江南区", "秋葉区", "南区", "西区", "西蒲区"],
    "hamamatsu": ["中央区", "浜名区", "天竜区"],
    "kumamoto": ["中央区", "東区", "西区", "南区", "北区"],
}

# 害虫別の料金相場（既存エリア + 新規エリア）
price_data = {
    "termite": {
        "tokyo": [
            {"area": "東京23区", "price": "12,000〜18,000円/坪", "note": "都心部は高め"},
            {"area": "多摩地域", "price": "10,000〜15,000円/坪", "note": "郊外は標準的"},
            {"area": "全国平均", "price": "10,000〜15,000円/坪", "note": "参考値"},
        ],
        # 他のエリアも同様に定義（省略）
    },
    # 他の害虫も同様に定義（省略）
}

# 新規エリアページの基本情報
area_info = {
    "sapporo": {"prefecture": "北海道", "description": "北海道札幌市"},
    "kyoto": {"prefecture": "京都府", "description": "京都府京都市"},
    "kobe": {"prefecture": "兵庫県", "description": "兵庫県神戸市"},
    "sendai": {"prefecture": "宮城県", "description": "宮城県仙台市"},
    "hiroshima": {"prefecture": "広島県", "description": "広島県広島市"},
    "kitakyushu": {"prefecture": "福岡県", "description": "福岡県北九州市"},
    "kawasaki": {"prefecture": "神奈川県", "description": "神奈川県川崎市"},
    "saitama-city": {"prefecture": "埼玉県", "description": "埼玉県さいたま市"},
    "niigata": {"prefecture": "新潟県", "description": "新潟県新潟市"},
    "hamamatsu": {"prefecture": "静岡県", "description": "静岡県浜松市"},
    "kumamoto": {"prefecture": "熊本県", "description": "熊本県熊本市"},
}

def create_pest_area_page(page_info):
    """害虫×エリアページを生成"""
    pest_en = page_info["pest_en"]
    area_en = page_info["area_en"]
    pest_ja = page_info["pest_ja"]
    area_ja = page_info["area_ja"]
    base_area = page_info["base_area"]
    
    # ベースとなるエリアページが存在しない場合は東京をベースにする
    base_file = f'app/area/{base_area}/page.tsx'
    if not os.path.exists(base_file):
        base_file = 'app/area/tokyo/page.tsx'
    
    # 出力先ディレクトリを作成
    output_dir = f'app/pest/{pest_en}/{area_en}'
    os.makedirs(output_dir, exist_ok=True)
    output_file = f'{output_dir}/page.tsx'
    
    # エリアページを読み込み
    with open(base_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. メタデータ修正
    content = re.sub(
        r'title: ".*?"',
        f'title: "{area_ja}の{pest_ja}駆除業者おすすめ8社｜料金相場・口コミ比較 - 害虫・害獣駆除プロ比較ナビ"',
        content,
        count=1
    )
    content = re.sub(
        r'description: ".*?"',
        f'description: "{area_ja}で{pest_ja}駆除業者をお探しなら当サイト。おすすめ業者8社を料金・サービス・口コミで徹底比較。見積もり無料。"',
        content,
        count=1
    )
    
    # 2. パンくず修正
    content = re.sub(
        r'{{ label: "' + area_ja + '" }}',
        f'{{ label: "{area_ja}", href: "/area/{area_en}" }},\n        {{ label: "{pest_ja}" }}',
        content
    )
    
    # 3. タイトル・見出しを害虫名に変更
    content = content.replace(f'{area_ja}の害虫駆除', f'{area_ja}の{pest_ja}駆除')
    content = content.replace(f'{area_ja}害虫駆除', f'{area_ja}の{pest_ja}駆除')
    
    # 4. 「多い害虫TOP5」セクションを削除
    content = re.sub(
        r'{/\* ' + area_ja + 'で多い害虫トップ5 \*/}[\s\S]*?(?={/\* CTA \*/})',
        '',
        content
    )
    
    # 5. 関数名を変更
    content = re.sub(
        r'export default function \w+Page\(\)',
        f'export default function {pest_en.capitalize()}{area_en.capitalize()}Page()',
        content
    )
    
    # 保存
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ {pest_ja}駆除 {area_ja} ({pest_en}/{area_en}) を生成しました')
    return f'{pest_ja}駆除 {area_ja}'

def create_area_page(page_info):
    """新規エリアページを生成"""
    area_en = page_info["area_en"]
    area_ja = page_info["area_ja"]
    base_area = page_info["base_area"]
    
    # ベースとなるエリアページをコピー
    base_file = f'app/area/{base_area}/page.tsx'
    output_dir = f'app/area/{area_en}'
    os.makedirs(output_dir, exist_ok=True)
    output_file = f'{output_dir}/page.tsx'
    
    # エリアページを読み込み
    with open(base_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. メタデータ修正
    content = re.sub(
        r'title: ".*?"',
        f'title: "{area_ja}の害虫駆除業者比較 | 料金相場・口コミ・おすすめ8社 - 害虫・害獣駆除プロ比較ナビ"',
        content,
        count=1
    )
    content = re.sub(
        r'description: ".*?"',
        f'description: "{area_ja}で害虫駆除業者をお探しなら当サイト。おすすめ業者8社を料金・サービス・口コミで徹底比較。見積もり無料。"',
        content,
        count=1
    )
    
    # 2. パンくず修正
    base_area_ja = page_info.get("base_area_ja", "東京")
    content = re.sub(
        r'{{ label: "' + base_area_ja + '" }}',
        f'{{ label: "{area_ja}" }}',
        content
    )
    
    # 3. タイトル・見出しをエリア名に変更
    content = content.replace(base_area_ja, area_ja)
    
    # 4. 関数名を変更
    content = re.sub(
        r'export default function \w+Page\(\)',
        f'export default function {area_en.capitalize()}Page()',
        content
    )
    
    # 保存
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ 害虫駆除 {area_ja} (area/{area_en}) を生成しました')
    return f'害虫駆除 {area_ja}'

# 各ページを処理
print('=== 害虫×エリアページ生成開始（41ページ） ===')
pest_completed = []
for page_info in pest_area_pages:
    try:
        page_name = create_pest_area_page(page_info)
        pest_completed.append(page_name)
    except Exception as e:
        print(f'⚠ エラー: {page_info} - {e}')

print(f'\n=== 新規エリアページ生成開始（11ページ） ===')
area_completed = []
for page_info in new_area_pages:
    try:
        page_name = create_area_page(page_info)
        area_completed.append(page_name)
    except Exception as e:
        print(f'⚠ エラー: {page_info} - {e}')

print(f'\n=== 全52ページ生成完了 ===')
print(f'害虫×エリアページ: {len(pest_completed)}ページ')
print(f'新規エリアページ: {len(area_completed)}ページ')
print(f'総計: {len(pest_completed) + len(area_completed)}ページ')
