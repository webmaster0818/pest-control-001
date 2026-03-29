#!/usr/bin/env python3
import glob
import re

# 対象ページと害虫名のマッピング
target_pages = {
    'ari': 'アリ',
    'kamemushi': 'カメムシ',
    'mukade': 'ムカデ・ゲジゲジ',
    'shibanmushi': 'シバンムシ',
    'dani': 'ダニ',
    'dani2': 'ダニ',
    'tokojirami': 'トコジラミ',
    'kemushi': '毛虫'
}

# 実装したページのリスト
implemented_pages = []

for page_dir, pest_name in target_pages.items():
    file_path = f'app/{page_dir}/page.tsx'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # キービジュアルのテキストを置き換え
        # 「スズメバチ・アシナガバチの危険性から駆除方法まで、安全な対処法をご紹介します」
        # → 「確実な駆除方法と再発防止策で、{害虫名}のいない快適な生活を実現します」
        
        new_text = f'確実な駆除方法と再発防止策で、{pest_name}のいない快適な生活を実現します'
        
        content = re.sub(
            r'スズメバチ・アシナガバチの危険性から駆除方法まで、安全な対処法をご紹介します',
            new_text,
            content
        )
        
        # より広い範囲でマッチ（.が改行を含まない場合もある）
        content = re.sub(
            r'スズメバチ・アシナガバチの危険性から[\s\S]*?ご紹介します',
            new_text,
            content
        )
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            implemented_pages.append((page_dir, pest_name))
            print(f'✓ {file_path} を更新しました（{pest_name}）')
    
    except FileNotFoundError:
        print(f'⚠ {file_path} が見つかりませんでした')

print(f'\n=== 実装完了ページ一覧 ===')
for page_dir, pest_name in sorted(implemented_pages):
    print(f'- {pest_name} ({page_dir})')

print(f'\n総計: {len(implemented_pages)}ページ')
