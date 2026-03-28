#!/usr/bin/env python3
import os
import re
import glob

# 業者名と対応する画像ファイル名のマッピング
company_images = {
    '駆除ザウルス': '/images/companies/kujyo-zaurus.jpg',
    '害獣駆除のROY': '/images/companies/roy.jpg',
    '害獣BUZZ': '/images/companies/buzz.jpg',
    'サンキョークリーンサービス': '/images/companies/sankyo.jpg',
    'ハウスプロテクト': '/images/companies/house-protect.jpg',
    '害虫駆除110番': '/images/companies/gaichu110.jpg',
    '害獣プロテック': '/images/companies/protec.jpg',
    'ラッター': '/images/companies/ratter.jpg',
    'EMEAO!': '/images/companies/emeao.jpg',
    'ダスキン': '/images/companies/duskin.jpg',
    '株式会社三共消毒': '/images/companies/sankyo-shoudoku.jpg',
    '株式会社アサンテ': '/images/companies/asante.jpg',
    '有限会社北日本消毒': '/images/companies/kita-nihon.jpg',
    '株式会社あい営繕': '/images/companies/ai-eizen.jpg',
    '株式会社ミヤコ消毒': '/images/companies/miyako.jpg',
    '株式会社こだま': '/images/companies/kodama.jpg',
    '大洋防疫研究所': '/images/companies/taiyo.jpg',
    '株式会社第一環研': '/images/companies/daiichi.jpg',
    'ハチお助け本舗': '/images/companies/hachi-otasuke.jpg',
}

# 全ページのファイルパスを取得
page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # 各業者の画像パスを更新
    for company_name, image_path in company_images.items():
        # Imageタグのsrcを更新
        pattern = rf'<Image\s+src="[^"]*"\s+alt="{re.escape(company_name)}"'
        replacement = f'<Image src="{image_path}" alt="{company_name}"'
        
        if re.search(pattern, content):
            content = re.sub(pattern, replacement, content)
            modified = True
        
        # imgタグのsrcを更新
        pattern2 = rf'<img\s+src="[^"]*"\s+alt="{re.escape(company_name)}"'
        replacement2 = f'<img src="{image_path}" alt="{company_name}"'
        
        if re.search(pattern2, content):
            content = re.sub(pattern2, replacement2, content)
            modified = True
    
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'✓ {file_path} を更新しました')

print('\n完了！')
