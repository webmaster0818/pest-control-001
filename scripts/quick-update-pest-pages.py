#!/usr/bin/env python3
import re

pages = [
    ("termite", "tokyo", "シロアリ", "東京"),
    ("cockroach", "tokyo", "ゴキブリ", "東京"),
    ("termite", "osaka", "シロアリ", "大阪"),
    ("cockroach", "osaka", "ゴキブリ", "大阪"),
    ("termite", "yokohama", "シロアリ", "横浜"),
    ("wasp", "tokyo", "ハチ", "東京"),
    ("cockroach", "yokohama", "ゴキブリ", "横浜"),
    ("termite", "nagoya", "シロアリ", "名古屋"),
    ("cockroach", "nagoya", "ゴキブリ", "名古屋"),
]

for pest_en, area_en, pest_ja, area_ja in pages:
    file_path = f'app/pest/{pest_en}/{area_en}/page.tsx'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        print(f'⚠ {file_path} が見つかりません')
        continue
    
    # 1. タイトルに害虫名を追加
    content = re.sub(
        r'title: "(.+?)の害虫駆除',
        f'title: "{area_ja}の{pest_ja}駆除',
        content
    )
    content = re.sub(
        r'{area_ja}のおすすめ害虫駆除業者',
        f'{area_ja}のおすすめ{pest_ja}駆除業者',
        content
    )
    content = re.sub(
        r'{area_ja}の害虫駆除 完全ガイド',
        f'{area_ja}の{pest_ja}駆除 完全ガイド',
        content
    )
    
    # 2. 「多い害虫TOP5」セクションを完全削除
    content = re.sub(
        r'{/\* {area_ja}で多い害虫TOP5 \*/}[\s\S]*?</section>[\s\S]*?(?={/\* CTA \*/})',
        '',
        content
    )
    
    # 保存
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ {pest_ja}駆除 {area_ja} を更新しました')

print('\n=== 簡易修正完了 ===')
print('次のステップ: エリアページテンプレートを基に全面的に作り直す必要があります')
