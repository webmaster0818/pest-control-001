#!/usr/bin/env python3
import os
import re

# 地域マッピング
areas = {
    'saitama': '埼玉',
    'chiba': '千葉',
    'kanagawa': '神奈川',
    'yokohama': '横浜',
    'fukuoka': '福岡',
    'ibaraki': '茨城',
    'tochigi': '栃木',
    'kagoshima': '鹿児島',
    'miyazaki': '宮崎',
    'okinawa': '沖縄',
}

base_dir = 'app/area'

for area_en, area_ja in areas.items():
    file_path = f'{base_dir}/{area_en}/page.tsx'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Breadcrumb import追加
    if 'import Breadcrumb' not in content:
        content = content.replace(
            'import type { Metadata } from "next";',
            'import type { Metadata } from "next";\nimport Breadcrumb from "@/app/components/Breadcrumb";'
        )
    
    # メタデータ最適化
    content = re.sub(
        r'export const metadata: Metadata = \{[^}]+\};',
        f'''export const metadata: Metadata = {{
  title: "{area_ja}の害虫駆除業者比較 | 料金相場・口コミ・おすすめ10社",
  description: "{area_ja}の害虫駆除業者10社を料金・サービス・口コミで徹底比較。地域別の料金相場、害虫カレンダー、信頼できる業者の選び方を詳しく解説。即日対応可能な業者も掲載。",
  openGraph: {{
    title: "{area_ja}の害虫駆除業者比較 | 料金相場・口コミ・おすすめ10社",
    description: "{area_ja}の害虫駆除業者10社を料金・サービス・口コミで徹底比較。",
    url: "https://pest-control-001.pages.dev/area/{area_en}",
  }},
}};''',
        content,
        flags=re.DOTALL
    )
    
    # パンくずリスト追加
    if 'Breadcrumb items' not in content:
        content = content.replace(
            '</header>\n\n      {/* ヒーローセクション */',
            f'''</header>

      {{/* パンくずリスト */}}
      <Breadcrumb items={{[
        {{ label: "害虫駆除110番", href: "/" }},
        {{ label: "{area_ja}" }}
      ]}} />

      {{/* ヒーローセクション */'''
        )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ {area_ja}ページを更新しました')

print('完了！')
