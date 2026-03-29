#!/usr/bin/env python3
import glob
import re

# 全ページのファイルパスを取得
page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

# 実装したページのリスト
implemented_pages = []

# CTAセクションのテンプレート
cta_template = '''
      {/* CTA */}
      <section className="py-16 px-4 bg-[#66FFFF] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{backgroundColor: "#2B3A50", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "2rem"}}>
            <h2 className="heading-primary text-white">
              {page_title}のご相談は今すぐ
            </h2>
          </div>
          <p className="text-lg mb-8 text-gray-900">
            お住まいの地域の料金相場を確認して、最適な業者を見つけましょう
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を見る
            </Link>
            <Link href="/guide" className="btn btn-lg btn-outline" style={{backgroundColor: "#2F4F4F", borderColor: "orange", color: "white"}}>
              業者選びガイド
            </Link>
          </div>
        </div>
      </section>
'''

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # ページタイトルを取得（シロアリ、ハチ、東京など）
    page_name = file_path.split('/')[-2]
    if '/area/' in file_path:
        # 地域ページ
        area_names = {
            'tokyo': '東京', 'osaka': '大阪', 'nagoya': '名古屋', 'saitama': '埼玉',
            'chiba': '千葉', 'kanagawa': '神奈川', 'yokohama': '横浜', 'fukuoka': '福岡',
            'ibaraki': '茨城', 'tochigi': '栃木', 'kagoshima': '鹿児島', 
            'miyazaki': '宮崎', 'okinawa': '沖縄'
        }
        page_title = area_names.get(page_name, page_name) + '害虫駆除'
    else:
        # 害虫・害獣ページ
        pest_names = {
            'shiroari': 'シロアリ駆除', 'hachi': 'ハチ駆除', 'gokiburi': 'ゴキブリ駆除',
            'nezumi': 'ネズミ駆除', 'koumori': 'コウモリ駆除', 'dani': 'ダニ駆除',
            'dani2': 'ダニ駆除', 'tokojirami': 'トコジラミ駆除', 'chougai': '鳥害対策',
            'ari': 'アリ駆除', 'kamemushi': 'カメムシ駆除', 'mukade': 'ムカデ駆除',
            'shibanmushi': 'シバンムシ駆除', 'kemushi': '毛虫駆除',
            'hakubishin': 'ハクビシン駆除', 'itachi': 'イタチ駆除',
            'araiguma': 'アライグマ駆除', 'ten': 'テン駆除',
            'anaguma': 'アナグマ駆除', 'tanuki': 'タヌキ駆除'
        }
        page_title = pest_names.get(page_name, '害虫駆除')
    
    cta_section = cta_template.replace('{page_title}', page_title)
    
    # 既存のCTAセクションを置き換え、またはフッター前に挿入
    if re.search(r'{/\* CTA \*/}', content):
        # 既存のCTAセクションを置き換え
        content = re.sub(
            r'{/\* CTA \*/}[\s\S]*?</section>',
            cta_section.strip(),
            content,
            count=1
        )
    else:
        # CTAセクションがない場合、</div> の最後に挿入
        content = re.sub(
            r'(    </div>\s*</div>\s*$)',
            cta_section + r'\1',
            content
        )
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        implemented_pages.append(file_path)
        print(f'✓ {file_path} を更新しました')

# フッターの色を変更
footer_path = 'app/components/Footer.tsx'
with open(footer_path, 'r', encoding='utf-8') as f:
    footer_content = f.read()

# フッター背景: #2B3A50
if 'bg-[#2B3A50]' not in footer_content:
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
