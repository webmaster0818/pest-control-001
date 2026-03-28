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
    
    # 既に★がある場合はスキップ
    if '★★★★★ 5.0' in content:
        continue
    
    # 口コミセクションに★を追加
    # パターン1: 5.0評価
    content = re.sub(
        r'<div className="flex items-center gap-2 mb-2">\s*<div className="rating rating-sm">([^<]*)</div>\s*</div>',
        r'<div className="flex items-center gap-2 mb-2">\n                          <div className="rating rating-sm">\1</div>\n                          <span className="text-sm text-gray-300">★★★★★ 5.0</span>\n                        </div>',
        content,
        count=1
    )
    
    # パターン2: 4.0評価（4つ星）
    content = re.sub(
        r'(<input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />\s*){4}\s*<input type="radio" className="mask mask-star-2 bg-gray-300" />\s*</div>\s*</div>',
        lambda m: m.group(0).replace('</div>\n                      </div>', '</div>\n                          <span className="text-sm text-gray-300">★★★★☆ 4.0</span>\n                        </div>', 1),
        content
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ {file_path} を更新しました')

print('\n完了！')
