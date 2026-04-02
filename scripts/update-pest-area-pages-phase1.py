#!/usr/bin/env python3
"""
フェーズ1の9ページをエリアページと同様の構造に修正
- 業者詳細情報を追加（8業者）
- 料金相場を害虫別に変更
- 害虫カレンダーを当該害虫に特化
- 多い害虫TOP5を削除
- エリア別ドリルダウンリンクを追加
"""

import os
from typing import Dict, List

# 各ページの情報
pages_info = [
    {"pest_en": "termite", "area_en": "tokyo", "pest_ja": "シロアリ", "area_ja": "東京", "area_detail": "東京23区、多摩地域"},
    {"pest_en": "cockroach", "area_en": "tokyo", "pest_ja": "ゴキブリ", "area_ja": "東京", "area_detail": "東京23区、多摩地域"},
    {"pest_en": "termite", "area_en": "osaka", "pest_ja": "シロアリ", "area_ja": "大阪", "area_detail": "大阪市、堺市、北摂エリア"},
    {"pest_en": "cockroach", "area_en": "osaka", "pest_ja": "ゴキブリ", "area_ja": "大阪", "area_detail": "大阪市、堺市、北摂エリア"},
    {"pest_en": "termite", "area_en": "yokohama", "pest_ja": "シロアリ", "area_ja": "横浜", "area_detail": "横浜市全域、川崎市"},
    {"pest_en": "wasp", "area_en": "tokyo", "pest_ja": "ハチ", "area_ja": "東京", "area_detail": "東京23区、多摩地域"},
    {"pest_en": "cockroach", "area_en": "yokohama", "pest_ja": "ゴキブリ", "area_ja": "横浜", "area_detail": "横浜市全域、川崎市"},
    {"pest_en": "termite", "area_en": "nagoya", "pest_ja": "シロアリ", "area_ja": "名古屋", "area_detail": "名古屋市、愛知県内"},
    {"pest_en": "cockroach", "area_en": "nagoya", "pest_ja": "ゴキブリ", "area_ja": "名古屋", "area_detail": "名古屋市、愛知県内"},
]

# エリア別の区リスト（将来のドリルダウン用）
area_districts: Dict[str, List[str]] = {
    "tokyo": ["新宿区", "渋谷区", "港区", "世田谷区", "大田区", "練馬区", "江戸川区", "足立区"],
    "osaka": ["北区", "中央区", "西区", "天王寺区", "浪速区", "阿倍野区", "東住吉区", "平野区"],
    "yokohama": ["西区", "中区", "南区", "港北区", "鶴見区", "神奈川区", "保土ケ谷区", "緑区"],
    "nagoya": ["中村区", "中区", "熱田区", "千種区", "東区", "北区", "西区", "港区"],
}

# 害虫別の料金相場
price_data: Dict[str, Dict] = {
    "termite": {
        "tokyo": {"area": "東京23区", "price": "12,000〜18,000円/坪", "note": "都心部は高め"},
        "osaka": {"area": "大阪市内", "price": "10,000〜16,000円/坪", "note": "標準的"},
        "yokohama": {"area": "横浜市内", "price": "11,000〜17,000円/坪", "note": "やや高め"},
        "nagoya": {"area": "名古屋市内", "price": "9,000〜14,000円/坪", "note": "比較的安価"},
    },
    "cockroach": {
        "tokyo": {"area": "東京23区", "price": "20,000〜35,000円/件", "note": "飲食店多く高め"},
        "osaka": {"area": "大阪市内", "price": "15,000〜30,000円/件", "note": "標準的"},
        "yokohama": {"area": "横浜市内", "price": "18,000〜32,000円/件", "note": "やや高め"},
        "nagoya": {"area": "名古屋市内", "price": "15,000〜28,000円/件", "note": "比較的安価"},
    },
    "wasp": {
        "tokyo": {"area": "東京23区", "price": "15,000〜35,000円/件", "note": "高所作業多く高め"},
        "osaka": {"area": "大阪市内", "price": "15,000〜30,000円/件", "note": "標準的"},
        "yokohama": {"area": "横浜市内", "price": "15,000〜33,000円/件", "note": "やや高め"},
        "nagoya": {"area": "名古屋市内", "price": "12,000〜28,000円/件", "note": "比較的安価"},
    },
}

# 害虫別のカレンダー
calendar_data: Dict[str, List[Dict]] = {
    "termite": [
        {"season": "春（3月〜5月）", "activity": "羽アリ発生ピーク", "advice": "羽アリを見かけたら即座に点検を。この時期の発見が最も多い。"},
        {"season": "夏（6月〜8月）", "activity": "活動活発化", "advice": "梅雨時期の湿気で活動が活発化。被害拡大に注意。"},
        {"season": "秋（9月〜11月）", "activity": "巣の拡大期", "advice": "冬に向けて巣を拡大する時期。早期発見・駆除が重要。"},
        {"season": "冬（12月〜2月）", "activity": "活動低下", "advice": "活動は鈍化するが、駆除には最適な時期。予防対策も効果的。"},
    ],
    "cockroach": [
        {"season": "春（3月〜5月）", "activity": "活動開始", "advice": "気温上昇で活動開始。早期対策が重要。"},
        {"season": "夏（6月〜8月）", "activity": "繁殖ピーク", "advice": "最も活発な時期。徹底的な駆除が必要。"},
        {"season": "秋（9月〜11月）", "activity": "越冬準備", "advice": "暖かい場所に集まる。侵入経路の封鎖が効果的。"},
        {"season": "冬（12月〜2月）", "activity": "暖房エリアで活動", "advice": "暖房のある場所では年中活動。油断禁物。"},
    ],
    "wasp": [
        {"season": "春（3月〜5月）", "activity": "巣作り開始", "advice": "女王バチが巣作りを開始。小さい巣のうちに駆除を。"},
        {"season": "夏（6月〜8月）", "activity": "巣の拡大期", "advice": "働きバチが増加し、巣が急速に拡大。専門業者に依頼を。"},
        {"season": "秋（9月〜11月）", "activity": "攻撃性ピーク", "advice": "最も危険な時期。巣に近づかず、プロに任せるべき。"},
        {"season": "冬（12月〜2月）", "activity": "活動休止", "advice": "働きバチが死滅。空き巣の撤去と来春の予防対策を。"},
    ],
}

# テンプレート生成
def generate_page_content(page_info: Dict) -> str:
    pest_en = page_info["pest_en"]
    area_en = page_info["area_en"]
    pest_ja = page_info["pest_ja"]
    area_ja = page_info["area_ja"]
    area_detail = page_info["area_detail"]
    
    # 料金相場データ
    price_info = price_data.get(pest_en, {}).get(area_en, {"area": area_ja, "price": "要見積もり", "note": ""})
    
    # カレンダーデータ
    calendar = calendar_data.get(pest_en, [])
    
    # 区リスト
    districts = area_districts.get(area_en, [])
    
    # 業者数を8社に
    companies = [
        {"rank": 1, "name": "駆除ザウルス", "img": "kujyo-zaurus.png", "badge": "warning"},
        {"rank": 2, "name": "害獣駆除のROY", "img": "roy.png", "badge": "C0C0C0"},
        {"rank": 3, "name": "害獣BUZZ", "img": "buzz.png", "badge": "CD7F32"},
        {"rank": 4, "name": "サンキョークリーンサービス", "img": "sankyo.png", "badge": "none"},
        {"rank": 5, "name": "ハウスプロテクト", "img": "house-protect.png", "badge": "none"},
        {"rank": 6, "name": "害虫駆除110番", "img": "gaichu110.png", "badge": "none"},
        {"rank": 7, "name": "害獣プロテック", "img": "protec.png", "badge": "none"},
        {"rank": 8, "name": "ラッター", "img": "ratter.png", "badge": "none"},
    ]
    
    content = f'''import Link from "next/link";
import Image from "next/image";
import type {{ Metadata }} from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {{
  title: "{area_ja}の{pest_ja}駆除業者おすすめ8社｜料金相場・口コミ比較 - 害虫・害獣駆除プロ比較ナビ",
  description: "{area_ja}で{pest_ja}駆除業者をお探しなら当サイト。料金相場{price_info['price']}。{area_detail}対応の優良業者を口コミ・実績で徹底比較。見積もり無料。",
  openGraph: {{
    title: "{area_ja}の{pest_ja}駆除業者おすすめ8社｜料金相場・口コミ比較",
    description: "{area_ja}の{pest_ja}駆除業者を料金・サービス・口コミで徹底比較。{area_detail}対応。",
    url: "https://pest-control-001.pages.dev/pest/{pest_en}/{area_en}",
  }},
}};

export default function {pest_en.capitalize()}{area_en.capitalize()}Page() {{
  return (
    <div className="min-h-screen bg-base-200">
      {{/* パンくずリスト */}}
      <Breadcrumb items={{[
        {{ label: "害虫・害獣駆除プロ比較ナビ", href: "/" }},
        {{ label: "{area_ja}", href: "/area/{area_en}" }},
        {{ label: "{pest_ja}駆除 {area_ja}" }}
      ]}} />

      {{/* ヒーローセクション */}}
      <section className="hero min-h-[50vh] bg-white relative overflow-hidden">
        <Image
          src="/images/hero-pest-control.jpg"
          alt="{area_ja}の{pest_ja}駆除サービス"
          fill
          className="object-contain"
          priority
        />
      </section>

      {{/* キャッチコピー */}}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {area_ja}の{pest_ja}駆除 完全ガイド
          </h2>
          <p className="text-lg text-gray-700">
            {area_ja}の{pest_ja}駆除業者と料金相場を徹底比較。{area_detail}の特徴と信頼できる業者の選び方をご紹介します。
          </p>
        </div>
      </section>

      {{/* おすすめ業者比較表（8社） */}}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">{area_ja}のおすすめ{pest_ja}駆除業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">項目</th>'''
    
    # 業者ヘッダー（8社）
    for company in companies:
        badge_style = ""
        if company["badge"] == "warning":
            badge_class = "badge-warning"
        elif company["badge"] in ["C0C0C0", "CD7F32"]:
            badge_class = "badge-lg"
            badge_style = f' style={{{{backgroundColor: "#{company["badge"]}", color: "#000" if company["badge"] == "C0C0C0" else "#fff"}}}}'
        else:
            badge_class = "badge-lg"
        
        crown = "👑 " if company["rank"] <= 3 else ""
        
        content += f'''
                  <th className="text-center border border-gray-300">
                    <div className="flex flex-col items-center gap-2">
                      <span className="{badge_class}"{badge_style}>{crown}{company["rank"]}</span>
                      <img src="/images/companies/{company["img"]}" alt="{company["name"]}" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-black">{company["name"]}</strong>
                    </div>
                  </th>'''
    
    content += f'''
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>'''
    
    for _ in companies:
        content += f'''
                  <td className="text-center border border-gray-300">{area_detail}</td>'''
    
    content += f'''
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">料金目安</th>'''
    
    for _ in companies:
        content += f'''
                  <td className="text-center text-primary font-bold border border-gray-300">{price_info["price"]}</td>'''
    
    content += f'''
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="heading-primary text-center mt-16 mb-8">{area_ja}のおすすめ{pest_ja}駆除業者 詳細紹介</h2>

          {{/* 業者詳細（簡易版・8社） */}}
          {" ".join([f'''
          <div className="mb-16 bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="badge badge-{'warning' if c['rank'] == 1 else 'lg'}">{('👑 ' if c['rank'] <= 3 else '')}{c['rank']}</span>
                <h3 className="text-2xl font-bold text-black">{c['name']}（{area_ja}）</h3>
              </div>
              <img src="/images/companies/{c['img']}" alt="{c['name']}" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="text-center">
              <a href="#" className="btn btn-primary btn-lg">無料相談はこちら</a>
            </div>
          </div>''' for c in companies])}
        </div>
      </section>

      {{/* {area_ja}の{pest_ja}駆除料金相場 */}}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">{area_ja}の{pest_ja}駆除料金相場</h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">エリア</th>
                  <th className="bg-gray-800 text-white border border-gray-300">料金相場</th>
                  <th className="bg-gray-800 text-white border border-gray-300">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300">{price_info['area']}</td>
                  <td className="text-primary font-bold border border-gray-300">{price_info['price']}</td>
                  <td className="border border-gray-300">{price_info['note']}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {{/* {area_ja}の{pest_ja}カレンダー */}}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">{area_ja}の{pest_ja}カレンダー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" ".join([f'''
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-black">{cal['season']}</h3>
                <p className="text-primary font-bold">{cal['activity']}</p>
                <p className="text-gray-700">{cal['advice']}</p>
              </div>
            </div>''' for cal in calendar])}
          </div>
        </div>
      </section>

      {{/* {area_ja}都内の{pest_ja}駆除業者エリア */}}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">{area_ja}都内の{pest_ja}駆除業者エリア</h2>
          <p className="text-center text-gray-700 mb-8">
            {area_ja}都内でエリア別に{pest_ja}駆除業者を探す
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {" ".join([f'''
            <div className="bg-base-100 hover:bg-amber-50 border-2 border-gray-200 rounded-lg py-4 px-2 text-center transition-all">
              <p className="text-gray-900 font-semibold">{district}</p>
              <p className="text-xs text-gray-600">準備中</p>
            </div>''' for district in districts])}
          </div>
        </div>
      </section>

      {{/* 害虫相談窓口 */}}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">害虫相談窓口</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-black">{area_ja}都福祉保健局</h3>
                <p className="text-gray-700">害虫相談窓口</p>
              </div>
            </div>
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-black">各区保健所</h3>
                <p className="text-gray-700">地域ごとの相談・指導</p>
              </div>
            </div>
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-black">{area_ja}都ペストコントロール協会</h3>
                <p className="text-gray-700">業者紹介・相談</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* CTA */}}
      <section className="py-16 px-4 bg-[#66FFFF] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{{{backgroundColor: "#2B3A50", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "2rem"}}}}>
            <h2 className="heading-primary text-white">
              {area_ja}の{pest_ja}駆除のご相談は今すぐ
            </h2>
          </div>
          <p className="text-lg mb-8 text-gray-900">
            お住まいの地域の料金相場を確認して、最適な業者を見つけましょう
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を見る
            </Link>
            <Link href="/guide" className="btn btn-lg btn-outline" style={{{{backgroundColor: "#2F4F4F", borderColor: "orange", color: "white"}}}}>
              業者選びガイド
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}}
'''
    
    return content

# 各ページを生成
updated_pages = []
for page_info in pages_info:
    pest_en = page_info["pest_en"]
    area_en = page_info["area_en"]
    pest_ja = page_info["pest_ja"]
    area_ja = page_info["area_ja"]
    
    file_path = f'app/pest/{pest_en}/{area_en}/page.tsx'
    content = generate_page_content(page_info)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    updated_pages.append(f'{pest_ja}駆除 {area_ja} ({pest_en}/{area_en})')
    print(f'✓ {file_path} を更新しました')

print(f'\n=== フェーズ1更新完了: {len(updated_pages)}ページ ===')
for page in updated_pages:
    print(f'- {page}')
