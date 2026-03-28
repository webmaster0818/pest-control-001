#!/usr/bin/env python3
import os
import re
import glob

# 全ページのファイルパスを取得
page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 口コミセクションに★の数を追加（3パターン）
    # パターン1: 5つ星の口コミ
    content = re.sub(
        r'(<div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">)\s*(<p className="text-sm text-gray-900">)',
        r'\1\n                  <div className="flex items-center gap-2 mb-2">\n                    <span className="text-yellow-500">★★★★★</span>\n                    <span className="text-sm text-gray-600">5.0</span>\n                  </div>\n                  \2',
        content,
        count=1  # 最初の1件のみ
    )
    
    # パターン2: 4つ星の口コミ
    content = re.sub(
        r'(<div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">)\s*(<p className="text-sm text-gray-900">)',
        r'\1\n                  <div className="flex items-center gap-2 mb-2">\n                    <span className="text-yellow-500">★★★★☆</span>\n                    <span className="text-sm text-gray-600">4.0</span>\n                  </div>\n                  \2',
        content,
        count=1  # 2件目
    )
    
    # パターン3: 5つ星の口コミ（3件目）
    content = re.sub(
        r'(<div className="border-2 border-base-200 p-4 rounded-lg bg-base-50">)\s*(<p className="text-sm text-gray-900">)',
        r'\1\n                  <div className="flex items-center gap-2 mb-2">\n                    <span className="text-yellow-500">★★★★★</span>\n                    <span className="text-sm text-gray-600">5.0</span>\n                  </div>\n                  \2',
        content,
        count=1  # 3件目
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ {file_path} を更新しました')

print('\n完了！')
