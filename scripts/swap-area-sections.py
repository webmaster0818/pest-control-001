#!/usr/bin/env python3
import glob
import re

# 全エリアページ
area_files = glob.glob('app/area/*/page.tsx')

implemented_pages = []

for file_path in area_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 「で多い害虫トップ5」セクションを抽出
    pest_section_match = re.search(
        r'{/\* \w+で多い害虫トップ5 \*/}[\s\S]*?(?={/\* おすすめ業者比較表 \*/})',
        content
    )
    
    # 「おすすめ業者比較表」セクションを抽出（次のセクションまで）
    # CTAセクションまでを範囲とする
    comparison_section_match = re.search(
        r'{/\* おすすめ業者比較表 \*/}[\s\S]*?(?={/\* CTA \*/})',
        content
    )
    
    if pest_section_match and comparison_section_match:
        pest_section = pest_section_match.group(0)
        comparison_section = comparison_section_match.group(0)
        
        # 両セクションを削除
        temp_content = content.replace(pest_section, '<<COMPARISON_PLACEHOLDER>>')
        temp_content = temp_content.replace(comparison_section, '<<PEST_PLACEHOLDER>>')
        
        # 逆順で挿入
        temp_content = temp_content.replace('<<COMPARISON_PLACEHOLDER>>', comparison_section)
        temp_content = temp_content.replace('<<PEST_PLACEHOLDER>>', pest_section)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(temp_content)
        
        area_name = file_path.replace('app/area/', '').replace('/page.tsx', '')
        implemented_pages.append(area_name)
        print(f'✓ {area_name} を更新しました')

print(f'\n=== 実装完了エリア一覧 ===')
for area in sorted(implemented_pages):
    print(f'- {area}')
print(f'\n総計: {len(implemented_pages)}エリア')
print('\n新しい順番: おすすめ業者比較表 → エリアで多い害虫トップ5')
