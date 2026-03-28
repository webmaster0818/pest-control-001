#!/usr/bin/env python3
import os
import re

# 害虫マッピング
pests = {
    'shiroari': 'シロアリ',
    'gokiburi': 'ゴキブリ',
    'nezumi': 'ネズミ',
    'koumori': 'コウモリ',
    'dani': 'ダニ',
    'tokojirami': 'トコジラミ',
    'chougai': '鳥害',
}

for pest_en, pest_ja in pests.items():
    file_path = f'app/{pest_en}/page.tsx'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Breadcrumb import追加
    if 'import Breadcrumb' not in content:
        content = content.replace(
            'import type { Metadata } from "next";',
            'import type { Metadata } from "next";\nimport Breadcrumb from "@/app/components/Breadcrumb";'
        )
    
    # メタデータ最適化（既存のtitleとdescriptionは維持し、openGraphのみ追加）
    if 'openGraph:' not in content:
        content = re.sub(
            r'(export const metadata: Metadata = \{[^\}]+)(description: "[^"]+",)(\s*\};)',
            rf'\1\2\n  openGraph: {{\n    title: "{pest_ja}駆除業者比較 | 料金相場・口コミ・おすすめ業者",\n    description: "{pest_ja}駆除業者を料金・サービス・口コミで徹底比較。",\n    url: "https://pest-control-001.pages.dev/{pest_en}",\n  }},\3',
            content,
            flags=re.DOTALL
        )
    
    # パンくずリスト追加（ヒーローセクションの直前に挿入）
    if 'Breadcrumb items' not in content:
        # パターン1: <div className="min-h-screen bg-base-200"> の直後
        content = re.sub(
            r'(<div className="min-h-screen bg-base-200">\s*)(      \{/\* ヒーローセクション \*/\})',
            rf'\1      {{/* パンくずリスト */}}\n      <Breadcrumb items={{[\n        {{ label: "害虫駆除110番", href: "/" }},\n        {{ label: "{pest_ja}" }}\n      ]}} />\n\n\2',
            content
        )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ {pest_ja}ページを更新しました')

print('完了！')
