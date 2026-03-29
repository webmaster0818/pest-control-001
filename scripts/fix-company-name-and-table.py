#!/usr/bin/env python3
import glob
import re

# 全ページのファイルパスを取得
page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

modified_count = 0

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # タスク①: 業者名「害虫・害獣駆除プロ比較ナビ」→「害虫駆除110番」
    # 比較表や業者紹介の業者名として表示されている箇所のみ
    content = re.sub(
        r'<strong>害虫・害獣駆除プロ比較ナビ</strong>',
        '<strong>害虫駆除110番</strong>',
        content
    )
    content = re.sub(
        r'alt="害虫・害獣駆除プロ比較ナビ"',
        'alt="害虫駆除110番"',
        content
    )
    content = re.sub(
        r'（害虫・害獣駆除プロ比較ナビ）',
        '（害虫駆除110番）',
        content
    )
    
    # タスク②: 比較表の表項目の視認性向上
    # bg-base-200 text-white md:bg-gray-800 → bg-gray-800 text-white（常に濃いグレー）
    content = re.sub(
        r'className="bg-base-200 text-white md:bg-gray-800 border border-gray-300"',
        'className="bg-gray-800 text-white border border-gray-300"',
        content
    )
    
    # モバイル用の設定も統一
    content = re.sub(
        r'bg-base-200 text-white md:bg-gray-800',
        'bg-gray-800 text-white',
        content
    )
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1
        print(f'✓ {file_path} を更新しました')

print(f'\n完了！ {modified_count}ファイルを更新しました')
