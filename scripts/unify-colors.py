#!/usr/bin/env python3
import glob
import re

# 全ページのファイルパスを取得
page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

# 実装したページのリスト
implemented_pages = []

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    modified = False
    
    # 1. 「○○駆除のご相談は今すぐ」の帯: ダークブルー (#2B3A50)
    # bg-base-300 や bg-orange などを #2B3A50 に統一
    if re.search(r'駆除のご相談は今すぐ|のご相談は今すぐ', content):
        # セクション全体の背景色を変更
        content = re.sub(
            r'(<section[^>]*className="[^"]*)(bg-orange-500|bg-base-300|bg-primary)([^"]*"[^>]*>[\s\S]*?駆除のご相談は今すぐ)',
            r'\1bg-[#2B3A50]\3',
            content
        )
        # style属性で直接指定
        content = re.sub(
            r'(駆除のご相談は今すぐ[\s\S]{0,500}?<section[^>]*)(>)',
            r'\1 style={{backgroundColor: "#2B3A50"}}\2',
            content
        )
        modified = True
    
    # 2. 料金相場を見るボタン: 黒を維持（変更なし）
    
    # 3. 業者選びガイドボタン: #2F4F4F
    content = re.sub(
        r'(業者選びガイド|業者選び方ガイド)([^<]*</a>)',
        lambda m: m.group(0).replace('btn-warning', 'btn-[#2F4F4F]').replace('btn-primary', 'btn-[#2F4F4F]'),
        content
    )
    if '業者選びガイド' in content or '業者選び方ガイド' in content:
        # style属性で直接指定
        content = re.sub(
            r'(<a[^>]*href="/guide"[^>]*className="[^"]*btn[^"]*")([^>]*>)',
            r'\1 style={{backgroundColor: "#2F4F4F", borderColor: "#2F4F4F", color: "white"}}\2',
            content
        )
        modified = True
    
    # 4. CTA背景カラー: #66FFFF
    if re.search(r'駆除のご相談は今すぐ|のご相談は今すぐ', content):
        # bg-orange-500 などを #66FFFF に変更
        content = re.sub(
            r'(<section[^>]*)(駆除のご相談は今すぐ[\s\S]{0,1000}?</section>)',
            lambda m: m.group(0).replace('bg-orange-500', 'bg-[#66FFFF]').replace('bg-base-300', 'bg-[#66FFFF]'),
            content
        )
        modified = True
    
    # 5. フッター背景: #2B3A50（よくある質問の帯と同色）
    # app/components/Footer.tsx で対応（後で個別修正）
    
    if content != original_content or modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        implemented_pages.append(file_path)
        print(f'✓ {file_path} を更新しました')

print(f'\n=== 実装完了ページ一覧 ===')
for page in implemented_pages:
    print(f'- {page}')
print(f'\n総計: {len(implemented_pages)}ページ')
