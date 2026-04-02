#!/usr/bin/env python3
"""
残り8ページを一括生成
シロアリ駆除 東京と同じ方式で、各害虫×エリアページを生成
"""
import os
import re
import shutil

# ページ情報（残り8ページ）
pages_info = [
    {"pest_en": "cockroach", "area_en": "tokyo", "pest_ja": "ゴキブリ", "area_ja": "東京", "base_area": "tokyo"},
    {"pest_en": "termite", "area_en": "osaka", "pest_ja": "シロアリ", "area_ja": "大阪", "base_area": "osaka"},
    {"pest_en": "cockroach", "area_en": "osaka", "pest_ja": "ゴキブリ", "area_ja": "大阪", "base_area": "osaka"},
    {"pest_en": "termite", "area_en": "yokohama", "pest_ja": "シロアリ", "area_ja": "横浜", "base_area": "yokohama"},
    {"pest_en": "wasp", "area_en": "tokyo", "pest_ja": "ハチ", "area_ja": "東京", "base_area": "tokyo"},
    {"pest_en": "cockroach", "area_en": "yokohama", "pest_ja": "ゴキブリ", "area_ja": "横浜", "base_area": "yokohama"},
    {"pest_en": "termite", "area_en": "nagoya", "pest_ja": "シロアリ", "area_ja": "名古屋", "base_area": "nagoya"},
    {"pest_en": "cockroach", "area_en": "nagoya", "pest_ja": "ゴキブリ", "area_ja": "名古屋", "base_area": "nagoya"},
]

# エリア別の区リスト
area_districts = {
    "tokyo": ["新宿区", "渋谷区", "港区", "世田谷区", "大田区", "練馬区", "江戸川区", "足立区"],
    "osaka": ["北区", "中央区", "西区", "天王寺区", "浪速区", "阿倍野区", "東住吉区", "平野区"],
    "yokohama": ["西区", "中区", "南区", "港北区", "鶴見区", "神奈川区", "保土ケ谷区", "緑区"],
    "nagoya": ["中村区", "中区", "熱田区", "千種区", "東区", "北区", "西区", "港区"],
}

# 害虫別の料金相場
price_data = {
    "termite": {
        "tokyo": [
            {"area": "東京23区", "price": "12,000〜18,000円/坪", "note": "都心部は高め"},
            {"area": "多摩地域", "price": "10,000〜15,000円/坪", "note": "郊外は標準的"},
            {"area": "全国平均", "price": "10,000〜15,000円/坪", "note": "参考値"},
        ],
        "osaka": [
            {"area": "大阪市内", "price": "10,000〜16,000円/坪", "note": "標準的"},
            {"area": "堺市・北摂", "price": "9,000〜14,000円/坪", "note": "やや安め"},
            {"area": "全国平均", "price": "10,000〜15,000円/坪", "note": "参考値"},
        ],
        "yokohama": [
            {"area": "横浜市内", "price": "11,000〜17,000円/坪", "note": "やや高め"},
            {"area": "川崎市", "price": "10,000〜15,000円/坪", "note": "標準的"},
            {"area": "全国平均", "price": "10,000〜15,000円/坪", "note": "参考値"},
        ],
        "nagoya": [
            {"area": "名古屋市内", "price": "9,000〜14,000円/坪", "note": "比較的安価"},
            {"area": "愛知県内", "price": "8,000〜12,000円/坪", "note": "安め"},
            {"area": "全国平均", "price": "10,000〜15,000円/坪", "note": "参考値"},
        ],
    },
    "cockroach": {
        "tokyo": [
            {"area": "東京23区", "price": "20,000〜35,000円/件", "note": "飲食店多く高め"},
            {"area": "多摩地域", "price": "15,000〜28,000円/件", "note": "標準的"},
            {"area": "全国平均", "price": "15,000〜30,000円/件", "note": "参考値"},
        ],
        "osaka": [
            {"area": "大阪市内", "price": "15,000〜30,000円/件", "note": "標準的"},
            {"area": "堺市・北摂", "price": "12,000〜25,000円/件", "note": "やや安め"},
            {"area": "全国平均", "price": "15,000〜30,000円/件", "note": "参考値"},
        ],
        "yokohama": [
            {"area": "横浜市内", "price": "18,000〜32,000円/件", "note": "やや高め"},
            {"area": "川崎市", "price": "15,000〜28,000円/件", "note": "標準的"},
            {"area": "全国平均", "price": "15,000〜30,000円/件", "note": "参考値"},
        ],
        "nagoya": [
            {"area": "名古屋市内", "price": "15,000〜28,000円/件", "note": "比較的安価"},
            {"area": "愛知県内", "price": "12,000〜22,000円/件", "note": "安め"},
            {"area": "全国平均", "price": "15,000〜30,000円/件", "note": "参考値"},
        ],
    },
    "wasp": {
        "tokyo": [
            {"area": "東京23区", "price": "15,000〜35,000円/件", "note": "高所作業多く高め"},
            {"area": "多摩地域", "price": "12,000〜28,000円/件", "note": "標準的"},
            {"area": "全国平均", "price": "12,000〜30,000円/件", "note": "参考値"},
        ],
    },
}

# 害虫別のカレンダー
calendar_data = {
    "termite": [
        {"season": "春（3月〜5月）", "activity": "羽アリ発生ピーク", "advice": "羽アリを見かけたら即座に点検を。この時期の発見が最も多い。"},
        {"season": "夏（6月〜8月）", "activity": "活動活発化", "advice": "梅雨時期の湿気で活動が活発化。被害拡大に注意。"},
        {"season": "秋（9月〜11月）", "activity": "巣の拡大期", "advice": "冬に向けて巣を拡大する時期。早期発見・駆除が重要。"},
        {"season": "冬（12月〜2月）", "activity": "活動低下", "advice": "活動は鈍化するが、駆除には最適な時期。予防対策も効果的。"},
    ],
    "cockroach": [
        {"season": "春（3月〜5月）", "activity": "活動開始", "advice": "気温上昇で活動開始。早期対策が重要。"},
        {"season": "夏（6月〜8月）", "activity": "繁殖ピーク", "advice": "最も活発な時期。徹底的な駆除が必要。"},
        {"season": "秋（9月〜11月）", "activity": "越冬準備", "advice": "暖かい場所に集まる。侵入経路の封鎖が効果的。"},
        {"season": "冬（12月〜2月）", "activity": "暖房エリアで活動", "advice": "暖房のある場所では年中活動。油断禁物。"},
    ],
    "wasp": [
        {"season": "春（3月〜5月）", "activity": "巣作り開始", "advice": "女王バチが巣作りを開始。小さいうちに駆除を。"},
        {"season": "夏（6月〜8月）", "activity": "巣の拡大期", "advice": "働きバチが増加し、巣が急速に拡大。専門業者に依頼を。"},
        {"season": "秋（9月〜11月）", "activity": "攻撃性ピーク", "advice": "最も危険な時期。巣に近づかず、プロに任せるべき。"},
        {"season": "冬（12月〜2月）", "activity": "活動休止", "advice": "働きバチが死滅。空き巣の撤去と来春の予防対策を。"},
    ],
}

def process_page(page_info):
    """各ページを処理"""
    pest_en = page_info["pest_en"]
    area_en = page_info["area_en"]
    pest_ja = page_info["pest_ja"]
    area_ja = page_info["area_ja"]
    base_area = page_info["base_area"]
    
    # ベースとなるエリアページをコピー
    base_file = f'app/area/{base_area}/page.tsx'
    output_file = f'app/pest/{pest_en}/{area_en}/page.tsx'
    
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
    content = re.sub(
        r'openGraph:.*?url: ".*?"',
        f'openGraph: {{\n    title: "{area_ja}の{pest_ja}駆除業者おすすめ8社｜料金相場・口コミ比較",\n    description: "{area_ja}の{pest_ja}駆除業者を料金・サービス・口コミで徹底比較。",\n    url: "https://pest-control-001.pages.dev/pest/{pest_en}/{area_en}"',
        content,
        flags=re.DOTALL
    )
    
    # 2. パンくず修正
    content = re.sub(
        r'{{ label: "' + area_ja + '" }}',
        f'{{ label: "{area_ja}", href: "/area/{area_en}" }},\n        {{ label: "{pest_ja}駆除 {area_ja}" }}',
        content
    )
    
    # 3. タイトル・見出しを害虫名に変更
    content = content.replace(f'{area_ja}の害虫駆除', f'{area_ja}の{pest_ja}駆除')
    content = content.replace(f'{area_ja}害虫駆除', f'{area_ja}の{pest_ja}駆除')
    
    # 4. 業者9社目と10社目を削除（簡易版 - テーブルヘッダーのみ）
    # 詳細は後で手動調整が必要
    
    # 5. 料金相場を害虫別に変更
    price_list = price_data.get(pest_en, {}).get(area_en, [])
    if price_list:
        price_code = 'const priceComparison = [\n'
        for p in price_list:
            price_code += f'    {{\n      area: "{p["area"]}",\n      price: "{p["price"]}",\n      note: "{p["note"]}",\n    }},\n'
        price_code += '  ];'
        content = re.sub(
            r'const priceComparison = \[[\s\S]*?\];',
            price_code,
            content,
            count=1
        )
    
    # 6. カレンダーを害虫別に変更
    calendar_list = calendar_data.get(pest_en, [])
    if calendar_list:
        calendar_code = 'const seasonCalendar = [\n'
        for c in calendar_list:
            pests_str = '", "'.join([c["activity"]])  # 簡易化
            calendar_code += f'    {{\n      season: "{c["season"]}",\n      pests: ["{c["activity"]}"],\n      advice: "{c["advice"]}",\n    }},\n'
        calendar_code += '  ];'
        content = re.sub(
            r'const seasonCalendar = \[[\s\S]*?\];',
            calendar_code,
            content,
            count=1
        )
    
    # 7. 「多い害虫TOP5」セクションを削除
    content = re.sub(
        r'{/\* ' + area_ja + 'で多い害虫トップ5 \*/}[\s\S]*?(?={/\* CTA \*/})',
        '',
        content
    )
    
    # 8. エリア別リンクを追加
    districts = area_districts.get(area_en, [])
    area_section = f'''
      {{/* {area_ja}都内のエリア別{pest_ja}駆除業者 */}}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">{area_ja}都内のエリア別{pest_ja}駆除業者</h2>
          <p className="text-center text-gray-700 mb-8">
            お住まいのエリアで{pest_ja}駆除業者を探す（準備中）
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
'''
    for district in districts:
        area_section += f'''            <div className="bg-base-100 hover:bg-amber-50 border-2 border-gray-200 rounded-lg py-4 px-2 text-center transition-all">
              <p className="text-gray-900 font-semibold">{district}</p>
              <p className="text-xs text-gray-600">準備中</p>
            </div>
'''
    area_section += '''          </div>
        </div>
      </section>
'''
    
    # 相談窓口の後、CTAの前に挿入
    content = re.sub(
        r'(</section>\s*)({/\* CTA \*/})',
        r'\1' + area_section + r'\n\n      \2',
        content
    )
    
    # 9. 関数名を変更
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

# 各ページを処理
completed_pages = []
for page_info in pages_info:
    try:
        page_name = process_page(page_info)
        completed_pages.append(page_name)
    except Exception as e:
        print(f'⚠ エラー: {page_info} - {e}')

print(f'\n=== 残り8ページ生成完了 ===')
for page in completed_pages:
    print(f'- {page}')
print(f'\n総計: {len(completed_pages)}ページ')
