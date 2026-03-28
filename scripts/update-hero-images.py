#!/usr/bin/env python3
import os
import re

# 害虫ページ（hero-pest.jpg使用）
pest_pages = [
    'shiroari', 'hachi', 'gokiburi', 'ari', 'kamemushi', 
    'dani', 'dani2', 'tokojirami', 'mukade', 'shibanmushi', 'kemushi'
]

# 害獣・害鳥ページ（hero-animal.jpg使用）
animal_pages = [
    'nezumi', 'koumori', 'chougai', 'hakubishin', 'itachi', 
    'araiguma', 'ten', 'anaguma', 'tanuki'
]

# 害虫ページの画像を更新
for page in pest_pages:
    file_path = f'app/{page}/page.tsx'
    
    if not os.path.exists(file_path):
        print(f'- {page}ページが見つかりません')
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # ヒーローセクションの画像を変更
    content = re.sub(
        r'src="[^"]*"(\s+alt="[^"]*駆除")',
        r'src="/images/hero-pest.jpg"\1',
        content
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ {page}ページの画像を更新しました（害虫用）')

# 害獣・害鳥ページの画像を更新
for page in animal_pages:
    file_path = f'app/{page}/page.tsx'
    
    if not os.path.exists(file_path):
        print(f'- {page}ページが見つかりません')
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # ヒーローセクションの画像を変更
    content = re.sub(
        r'src="[^"]*"(\s+alt="[^"]*駆除")',
        r'src="/images/hero-animal.jpg"\1',
        content
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ {page}ページの画像を更新しました（害獣用）')

print('\n完了！')
