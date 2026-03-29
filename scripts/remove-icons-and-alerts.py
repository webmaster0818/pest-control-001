#!/usr/bin/env python3
import glob
import re

# 害虫・害獣ページのみ対象
page_files = glob.glob('app/*/page.tsx')
# 地域ページと固定ページを除外
page_files = [f for f in page_files if '/area/' not in f and '/guide' not in f and '/price' not in f and '/faq' not in f and '/terms' not in f and '/privacy' not in f]

# 実装したページのリスト
implemented_pages = []

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 1. 絵文字アイコン（🐝、🐜、🦇など）を削除
    # <div className="text-6xl mb-6">🐝</div> のようなパターン
    content = re.sub(
        r'<div className="text-\d+xl mb-\d+">[\U0001F300-\U0001F9FF]+</div>\s*',
        '',
        content
    )
    
    # 2. 緊急警告（alert alert-error）を削除
    # <div className="alert alert-error shadow-lg ... 全体を削除
    content = re.sub(
        r'<div className="alert alert-error shadow-lg[^>]*>[\s\S]*?</div>\s*',
        '',
        content
    )
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        implemented_pages.append(file_path)
        print(f'✓ {file_path} を更新しました')

print(f'\n=== 実装完了ページ一覧 ===')
pest_pages = []
animal_pages = []

for page in sorted(implemented_pages):
    page_name = page.replace('app/', '').replace('/page.tsx', '')
    
    # 害虫と害獣を分類
    if page_name in ['shiroari', 'hachi', 'gokiburi', 'ari', 'kamemushi', 'mukade', 'shibanmushi', 'kemushi', 'dani', 'dani2', 'tokojirami']:
        pest_pages.append(page_name)
    else:
        animal_pages.append(page_name)

print('\n【害虫ページ】')
for page in pest_pages:
    print(f'- {page}')

print('\n【害獣ページ】')
for page in animal_pages:
    print(f'- {page}')

print(f'\n総計: 害虫{len(pest_pages)}ページ + 害獣{len(animal_pages)}ページ = {len(implemented_pages)}ページ')
