#!/usr/bin/env python3
import os
import re
import glob

# 害虫・害獣ページのみ対象
pest_pages = glob.glob('app/*/page.tsx')
# エリアページとTOPページを除外
pest_pages = [p for p in pest_pages if '/area/' not in p and 'app/page.tsx' not in p and '/guide/' not in p and '/price/' not in p and '/faq/' not in p and '/terms/' not in p and '/privacy/' not in p]

for file_path in pest_pages:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # ページ名を取得
    page_name_match = re.search(r'app/([^/]+)/page\.tsx', file_path)
    if not page_name_match:
        continue
    
    page_name = page_name_match.group(1)
    
    # 日本語名を取得（メタデータから）
    title_match = re.search(r'title: "([^"]+)駆除', content)
    if title_match:
        jp_name = title_match.group(1)
    else:
        continue
    
    # キービジュアル部分を確認（既にキャッチコピーセクションがあるかチェック）
    if '{/* キャッチコピー */}' in content:
        continue
    
    # ヒーローセクションの後にキャッチコピーセクションを追加
    pattern = r'(</section>\s*{/\* ヒーローセクション \*/})'
    replacement = rf'''</section>

      {{/* キャッチコピー */}}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {jp_name}駆除の完全ガイド
          </h2>
          <p className="text-lg text-gray-700">
            {jp_name}の特徴・被害状況から駆除方法まで、適切な対処法をご紹介します
          </p>
        </div>
      </section>'''
    
    # ヒーローセクションの構造を確認
    hero_pattern = r'{/\* ヒーローセクション \*/}\s*<section[^>]*>.*?</section>'
    
    if re.search(hero_pattern, content, re.DOTALL):
        # ヒーローセクションの直後にキャッチコピーを挿入
        content = re.sub(
            r'({/\* ヒーローセクション \*/}\s*<section[^>]*>.*?</section>)',
            rf'''\1

      {{/* キャッチコピー */}}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {jp_name}駆除の完全ガイド
          </h2>
          <p className="text-lg text-gray-700">
            {jp_name}の特徴・被害状況から駆除方法まで、適切な対処法をご紹介します
          </p>
        </div>
      </section>''',
            content,
            flags=re.DOTALL,
            count=1
        )
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'✓ {file_path} ({jp_name}) を更新しました')

print('\n完了！')
