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
    
    # CTAセクションを検索
    if re.search(r'駆除のご相談は今すぐ|のご相談は今すぐ', content):
        # 1. CTAセクション全体の背景色: #66FFFF
        # bg-amber-600, bg-orange-500, bg-base-300 などを bg-[#66FFFF] に統一
        content = re.sub(
            r'(<section className="[^"]*)(bg-amber-600|bg-orange-500|bg-base-300|bg-primary)([^"]*">[\s\S]{0,100}駆除のご相談は今すぐ)',
            r'\1bg-[#66FFFF]\3',
            content
        )
        
        # 2. CTAセクション内のh2タイトル（帯）: #2B3A50
        # heading-primary の後にstyle追加
        content = re.sub(
            r'(<h2 className="heading-primary">[\s\S]{0,50}駆除のご相談は今すぐ[\s\S]{0,50}</h2>)',
            r'<div style={{backgroundColor: "#2B3A50", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "2rem"}}>\1</div>',
            content
        )
        
        # 3. テキスト色を調整（背景が明るいため黒文字に）
        content = re.sub(
            r'(<section className="[^"]*bg-\[#66FFFF\][^"]*) text-white',
            r'\1 text-gray-900',
            content
        )
        
        # 4. 業者選びガイドボタン: #2F4F4F + 枠線オレンジ
        content = re.sub(
            r'(<Link href="/guide" className="btn btn-lg )(btn-outline btn-neutral|btn-warning|btn-outline)(")',
            r'\1\3 style={{backgroundColor: "#2F4F4F", borderColor: "orange", color: "white"}}',
            content
        )
        
        # 5. 料金相場ボタン: 黒を維持（btn-neutral）
        content = re.sub(
            r'(<Link href="/price" className="btn btn-lg )(btn-neutral|btn-primary)(")',
            r'\1btn-neutral\3',
            content
        )
        
        implemented_pages.append(file_path)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'✓ {file_path} を更新しました')

# フッターの色を変更
footer_path = 'app/components/Footer.tsx'
with open(footer_path, 'r', encoding='utf-8') as f:
    footer_content = f.read()

# フッター背景: #2B3A50
footer_content = re.sub(
    r'(<footer[^>]*className="[^"]*)(bg-\[#22c55e\]|bg-green-500|bg-primary)([^"]*")',
    r'\1bg-[#2B3A50]\3',
    footer_content
)

with open(footer_path, 'w', encoding='utf-8') as f:
    f.write(footer_content)
print(f'✓ {footer_path} を更新しました')

print(f'\n=== 実装完了ページ一覧 ===')
for page in sorted(implemented_pages):
    page_name = page.replace('app/', '').replace('/page.tsx', '')
    print(f'- {page_name}')
print(f'\n総計: {len(implemented_pages)}ページ + フッター')
