#!/usr/bin/env python3
import glob
import re

# タスク1: TOPページにエリアリンクセクションを追加
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    top_content = f.read()

# エリアリンクセクションを挿入する位置を探す
area_section = '''
      {/* 地域から探す */}
      <section className="py-12 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center">地域から探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-500 rounded-lg py-6 px-4 text-center transition-all shadow-sm hover:shadow-md"
              >
                <p className="text-lg font-semibold text-gray-900">{area.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
'''

# 「害虫の種類から探す」の後に挿入
if '地域から探す' not in top_content:
    top_content = top_content.replace(
        '      {/* なぜ選ばれるのか */',
        area_section + '\n      {/* なぜ選ばれるのか */'
    )
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(top_content)
    print('✓ TOPページにエリアリンクを追加しました')

# タスク2: 比較表の画像を円形→四角形に変更
# タスク3: 比較表の業者名を太字にして視認性向上

page_files = []
page_files.extend(glob.glob('app/*/page.tsx'))
page_files.extend(glob.glob('app/area/*/page.tsx'))

modified_count = 0

for file_path in page_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # タスク2: rounded-full → rounded-lg（四角形）
    content = re.sub(
        r'className="w-20 h-20 rounded-full object-cover"',
        'className="w-20 h-20 rounded-lg object-cover"',
        content
    )
    
    # タスク3: 業者名を太字・大きく・濃く
    # <strong>業者名</strong> → <strong className="text-lg font-bold text-gray-900">業者名</strong>
    content = re.sub(
        r'<strong>([^<]+)</strong>(\s*</div>\s*</th>)',
        r'<strong className="text-lg font-bold text-gray-900">\1</strong>\2',
        content
    )
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1
        print(f'✓ {file_path} を更新しました')

print(f'\n完了！ {modified_count}ファイルを更新しました')
