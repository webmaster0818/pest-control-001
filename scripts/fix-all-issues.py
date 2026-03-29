#!/usr/bin/env python3
import glob
import re

# 全ページのファイルパスを取得
page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

# 害虫ページリスト
pest_pages = ['shiroari', 'hachi', 'gokiburi', 'ari', 'kamemushi', 'mukade', 'shibanmushi', 'kemushi', 'dani', 'dani2', 'tokojirami']
# 害獣ページリスト
animal_pages = ['nezumi', 'koumori', 'chougai', 'hakubishin', 'itachi', 'araiguma', 'ten', 'anaguma', 'tanuki']

modified_count = 0

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # タスク②: よくある質問のボタン色を濃いグレーに変更
    # bg-base-200 → bg-gray-700 または bg-gray-800
    if 'よくある質問' in content or 'FAQ' in content:
        content = re.sub(
            r'className="btn btn-outline btn-block text-left justify-start h-auto py-4 px-6 bg-base-200',
            'className="btn btn-outline btn-block text-left justify-start h-auto py-4 px-6 bg-gray-700 text-white hover:bg-gray-600',
            content
        )
    
    # タスク③: キービジュアル差し替え
    page_name = file_path.split('/')[-2] if '/area/' not in file_path else None
    
    if page_name in pest_pages:
        # 害虫ページ: hero-pest-new.jpg に差し替え
        content = re.sub(
            r'src="/images/hero-pest\.jpg"',
            'src="/images/hero-pest-new.jpg"',
            content
        )
        content = re.sub(
            r'src="https://images\.unsplash\.com/[^"]*"',
            'src="/images/hero-pest-new.jpg"',
            content
        )
    elif page_name in animal_pages:
        # 害獣ページ: hero-animal-new.jpg に差し替え
        content = re.sub(
            r'src="/images/hero-animal\.jpg"',
            'src="/images/hero-animal-new.jpg"',
            content
        )
        content = re.sub(
            r'src="https://images\.unsplash\.com/[^"]*"',
            'src="/images/hero-animal-new.jpg"',
            content
        )
    
    # タスク④: 比較表・業者紹介の表項目の背景色修正
    # bg-base-200 → bg-gray-800（PC）、モバイルはそのまま
    # モバイル用の bg-base-200 text-white md:bg-gray-800 は維持
    content = re.sub(
        r'className="bg-gray-800 text-white border border-gray-300"',
        'className="bg-base-200 text-white md:bg-gray-800 border border-gray-300"',
        content
    )
    
    # タスク⑤はCSSの変更が必要（レスポンシブ対応済み）
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1
        print(f'✓ {file_path} を更新しました')

print(f'\n完了！ {modified_count}ファイルを更新しました')
