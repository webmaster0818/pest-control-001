#!/usr/bin/env python3
import os
import re

# 対象ファイル
areas = ['tokyo', 'osaka', 'nagoya', 'saitama', 'chiba', 'kanagawa', 'yokohama', 'fukuoka', 'ibaraki', 'tochigi', 'kagoshima', 'miyazaki', 'okinawa']
pests = ['shiroari', 'hachi', 'gokiburi', 'nezumi', 'koumori', 'dani', 'tokojirami', 'chougai']

# 地域ページ処理
for area in areas:
    file_path = f'app/area/{area}/page.tsx'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # ヘッダー部分を削除（headerタグ全体）
        content = re.sub(
            r'\s*{/\* サイト名ヘッダー \*/}\s*<header[^>]*>.*?</header>\s*',
            '\n',
            content,
            flags=re.DOTALL
        )
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'✓ {area}ページのヘッダーを削除しました')
    except Exception as e:
        print(f'✗ {area}ページでエラー: {e}')

# 害虫ページ処理
for pest in pests:
    file_path = f'app/{pest}/page.tsx'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # ヘッダー部分を削除（存在する場合のみ）
        if '{/* サイト名ヘッダー */}' in content or '<header style={{backgroundColor:' in content:
            content = re.sub(
                r'\s*{/\* サイト名ヘッダー \*/}\s*<header[^>]*>.*?</header>\s*',
                '\n',
                content,
                flags=re.DOTALL
            )
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f'✓ {pest}ページのヘッダーを削除しました')
        else:
            print(f'- {pest}ページにはヘッダーがありません')
    except Exception as e:
        print(f'✗ {pest}ページでエラー: {e}')

print('\n完了！')
