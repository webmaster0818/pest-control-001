#!/usr/bin/env python3
import glob
import re

# タスク1: TOPページの比較表業者名の色修正
print("=== タスク1: TOPページの比較表業者名の色修正 ===")
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 比較表のstrong要素に色を追加
content = re.sub(
    r'(<strong>)([^<]+)(</strong>\s*</div>\s*</th>)',
    r'<strong className="text-lg font-bold text-gray-900">\2\3',
    content
)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('✓ app/page.tsx を更新しました')

# タスク2: 全ページの口コミに星を追加
print("\n=== タスク2: 全ページの口コミに星を追加 ===")

page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

implemented_pages = []

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 口コミセクションを検索
    # パターン1: 口コミがあるが星がない場合
    # <h4 className="font-bold text-lg text-black mb-3">◆業者名の口コミ</h4>
    # の後に星がない場合を検出
    
    # 口コミブロックを探す
    review_pattern = r'(<h4[^>]*>◆[^<]+の口コミ</h4>[\s\S]{0,500}?<div[^>]*>[\s\S]{0,200}?<p[^>]*>)'
    
    # 星がない口コミを検出して追加
    def add_stars(match):
        block = match.group(0)
        # 既に星がある場合はスキップ
        if '★' in block or 'text-yellow-500' in block:
            return block
        
        # 星を追加（口コミテキストの前に）
        # <p className="text-sm text-gray-900"> の前に星を挿入
        block = re.sub(
            r'(<p className="text-sm text-gray-900">)',
            r'<div class="flex items-center gap-2 mb-2"><span class="text-yellow-500">★★★★★</span><span class="text-sm text-gray-600">5.0</span></div>\1',
            block,
            count=1
        )
        return block
    
    content = re.sub(review_pattern, add_stars, content)
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        page_name = file_path.replace('app/', '').replace('/page.tsx', '')
        implemented_pages.append(page_name)
        print(f'✓ {file_path} を更新しました')

print(f'\n=== 実装完了ページ一覧 ===')
for page in sorted(implemented_pages):
    print(f'- {page}')
print(f'\n総計: {len(implemented_pages)}ページ')
