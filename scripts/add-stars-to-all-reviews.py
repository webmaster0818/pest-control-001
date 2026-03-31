#!/usr/bin/env python3
import glob
import re

page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

implemented_pages = []

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # パターン1: 星がない口コミブロックを検出
    # <div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">
    #   <p className="text-sm text-gray-900"> （星なし）
    
    # パターン2: 星がある口コミブロックはスキップ
    # <div className="flex items-center gap-2 mb-2">
    #   <span className="text-yellow-500">★★★★★</span>
    
    # 口コミブロック内で星がない場合を検出して追加
    def add_star_rating(match):
        block = match.group(0)
        # 既に星がある場合はスキップ
        if '★' in block or 'text-yellow-500' in block:
            return block
        
        # <p className="text-sm text-gray-900"> の前に星を挿入
        block = re.sub(
            r'(<p className="text-sm text-gray-900">)',
            r'<div className="flex items-center gap-2 mb-2"><span className="text-yellow-500">★★★★★</span><span className="text-sm text-gray-600">5.0</span></div>\n                  \1',
            block,
            count=1
        )
        return block
    
    # 口コミブロックを検索（border-2からpタグまで）
    content = re.sub(
        r'(<div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">[\s\S]*?<p className="text-sm text-gray-900">[\s\S]*?</p>\s*</div>)',
        add_star_rating,
        content
    )
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        page_name = file_path.replace('app/', '').replace('/page.tsx', '')
        implemented_pages.append(page_name)
        print(f'✓ {file_path} を更新しました')

print(f'\n=== 実装完了ページ一覧 ===')

# 害虫、害獣、地域に分類
pest_pages = []
animal_pages = []
area_pages = []

for page in sorted(implemented_pages):
    if 'area/' in page:
        area_pages.append(page.replace('area/', ''))
    elif page in ['shiroari', 'hachi', 'gokiburi', 'ari', 'kamemushi', 'mukade', 'shibanmushi', 'kemushi', 'dani', 'dani2', 'tokojirami']:
        pest_pages.append(page)
    else:
        animal_pages.append(page)

print('\n【害虫ページ】')
for page in pest_pages:
    print(f'- {page}')

print('\n【害獣ページ】')
for page in animal_pages:
    print(f'- {page}')

print('\n【地域ページ】')
for page in area_pages:
    print(f'- {page}')

print(f'\n総計: 害虫{len(pest_pages)}ページ + 害獣{len(animal_pages)}ページ + 地域{len(area_pages)}ページ = {len(implemented_pages)}ページ')
