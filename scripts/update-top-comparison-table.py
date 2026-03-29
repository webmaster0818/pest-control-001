#!/usr/bin/env python3
import re

# TOPページのファイルパス
file_path = 'app/page.tsx'

# 既存の比較表セクションを削除して新しい比較表を挿入
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 比較表セクションの開始位置を探す
comparison_start = content.find('      {/* おすすめ業者比較 */')
comparison_end = content.find('      {/* 害虫の種類から探す */')

if comparison_start == -1 or comparison_end == -1:
    print('比較表セクションが見つかりませんでした')
    exit(1)

# 新しい比較表HTML
new_comparison_table = '''      {/* おすすめ業者比較 */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">おすすめ害虫駆除業者比較</h2>
          
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black">
              <thead>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300"></th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="/images/companies/kujyo-zaurus.png" alt="駆除ザウルス" className="w-20 h-20 rounded-full object-cover" />
                      <strong>駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base" style={{backgroundColor: '#C0C0C0', color: '#000'}}>👑 2</span>
                      <img src="/images/companies/house-protect.png" alt="ハウスプロテクト" className="w-20 h-20 rounded-full object-cover" />
                      <strong>ハウスプロテクト</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base" style={{backgroundColor: '#CD7F32', color: '#fff'}}>👑 3</span>
                      <img src="/images/companies/gaichu110.png" alt="害虫駆除110番" className="w-20 h-20 rounded-full object-cover" />
                      <strong>害虫駆除110番</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">4</span>
                      <img src="/images/companies/protec.png" alt="害獣プロテック" className="w-20 h-20 rounded-full object-cover" />
                      <strong>害獣プロテック</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base">5</span>
                      <img src="/images/companies/sankyo.png" alt="サンキョークリーンサービス" className="w-20 h-20 rounded-full object-cover" />
                      <strong>サンキョークリーンサービス</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">料金目安</th>
                  <td className="text-center bg-white text-black border border-gray-300">15,000円〜</td>
                  <td className="text-center bg-white text-black border border-gray-300">要見積</td>
                  <td className="text-center bg-white text-black border border-gray-300">8,800円〜</td>
                  <td className="text-center bg-white text-black border border-gray-300">要見積</td>
                  <td className="text-center bg-white text-black border border-gray-300">要見積</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">対応エリア</th>
                  <td className="text-center bg-white text-black border border-gray-300">全国（北海道・沖縄除く）</td>
                  <td className="text-center bg-white text-black border border-gray-300">関東・関西・東海・中四国・九州</td>
                  <td className="text-center bg-white text-black border border-gray-300">全国</td>
                  <td className="text-center bg-white text-black border border-gray-300">関東・東北・関西・東海・北陸・中国・九州</td>
                  <td className="text-center bg-white text-black border border-gray-300">全国</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">受付時間</th>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                  <td className="text-center bg-white text-black border border-gray-300">24時間365日</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">保証期間</th>
                  <td className="text-center bg-white text-black border border-gray-300">最長10年</td>
                  <td className="text-center bg-white text-black border border-gray-300">最長10年</td>
                  <td className="text-center bg-white text-black border border-gray-300">最長5年</td>
                  <td className="text-center bg-white text-black border border-gray-300">最長10年</td>
                  <td className="text-center bg-white text-black border border-gray-300">要確認</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">即日対応</th>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                  <td className="text-center bg-white text-black border border-gray-300">⭕</td>
                </tr>
                <tr>
                  <th className="bg-base-200 text-white md:bg-gray-800 border border-gray-300">公式サイト</th>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <a href="https://kujyo-zaurus.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">詳細を見る</a>
                  </td>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <a href="https://house-protect.net/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">詳細を見る</a>
                  </td>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <a href="https://www.sharing-tech.co.jp/gaichu/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">詳細を見る</a>
                  </td>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <a href="https://gaichu-protec.jp/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">詳細を見る</a>
                  </td>
                  <td className="text-center bg-white text-black border border-gray-300">
                    <a href="https://sankyo-clean.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">詳細を見る</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              ※料金は目安です。被害状況・建物の構造により変動します。必ず現地調査・見積もりをご依頼ください。
            </p>
          </div>
        </div>
      </section>

'''

# 置き換え
new_content = content[:comparison_start] + new_comparison_table + content[comparison_end:]

# ファイルに書き込み
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('✓ TOPページの比較表を更新しました')
