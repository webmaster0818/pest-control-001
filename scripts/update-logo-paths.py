#!/usr/bin/env python3
import os
import re
import glob

# 業者名と対応するSVGファイル名のマッピング
company_images = {
    '駆除ザウルス': '/images/companies/kujyo-zaurus.svg',
    '害獣駆除のROY': '/images/companies/roy.svg',
    '害獣BUZZ': '/images/companies/buzz.svg',
    'サンキョークリーンサービス': '/images/companies/sankyo.svg',
    'ハウスプロテクト': '/images/companies/house-protect.svg',
    '害虫駆除110番': '/images/companies/gaichu110.svg',
    '害獣プロテック': '/images/companies/protec.svg',
    'ラッター': '/images/companies/ratter.svg',
    'EMEAO!': '/images/companies/emeao.svg',
    'ダスキン': '/images/companies/duskin.svg',
    '株式会社三共消毒': '/images/companies/sankyo-shoudoku.svg',
    '株式会社アサンテ': '/images/companies/asante.svg',
    '有限会社北日本消毒': '/images/companies/kita-nihon.svg',
    '株式会社あい営繕': '/images/companies/ai-eizen.svg',
    '株式会社ミヤコ消毒': '/images/companies/miyako.svg',
    '株式会社こだま': '/images/companies/kodama.svg',
    '大洋防疫研究所': '/images/companies/taiyo.svg',
    '株式会社第一環研': '/images/companies/daiichi.svg',
    'ハチお助け本舗': '/images/companies/hachi-otasuke.svg',
}

# 全ページのファイルパスを取得
page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # 各業者の画像パスを.jpgから.svgに更新
    for company_name, svg_path in company_images.items():
        jpg_path = svg_path.replace('.svg', '.jpg')
        
        # .jpgを.svgに置換
        if jpg_path in content:
            content = content.replace(jpg_path, svg_path)
            modified = True
    
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'✓ {file_path} を更新しました')

print('\n完了！')
