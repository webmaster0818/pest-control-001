#!/usr/bin/env python3
import os

# フェーズ1: 超高需要9ページ（シロアリ駆除 東京は手動作成済み）
pages = [
    # (害虫英名, エリア英名, 害虫日本語, エリア日本語, 検索数, 料金相場, 対応エリア詳細)
    ("cockroach", "tokyo", "ゴキブリ", "東京", 2400, "8,000〜12,000円/件", "東京23区、多摩地域"),
    ("termite", "osaka", "シロアリ", "大阪", 1800, "10,000〜16,000円/坪", "大阪市、堺市、北摂エリア"),
    ("cockroach", "osaka", "ゴキブリ", "大阪", 1600, "7,000〜11,000円/件", "大阪市、堺市、北摂エリア"),
    ("termite", "yokohama", "シロアリ", "横浜", 1300, "11,000〜17,000円/坪", "横浜市全域、川崎市"),
    ("wasp", "tokyo", "ハチ", "東京", 1200, "8,000〜15,000円/件", "東京23区、多摩地域"),
    ("cockroach", "yokohama", "ゴキブリ", "横浜", 1200, "7,500〜11,500円/件", "横浜市全域、川崎市"),
    ("termite", "nagoya", "シロアリ", "名古屋", 1100, "9,000〜14,000円/坪", "名古屋市、愛知県内"),
    ("cockroach", "nagoya", "ゴキブリ", "名古屋", 1000, "7,000〜10,000円/件", "名古屋市、愛知県内"),
]

# 害虫アイコン
pest_icons = {
    "termite": "🐜",
    "cockroach": "🪳",
    "wasp": "🐝",
}

# 害虫英名 → 日本語マッピング
pest_names_en = {
    "termite": "シロアリ",
    "cockroach": "ゴキブリ",
    "wasp": "ハチ",
}

# エリア英名 → 日本語マッピング
area_names_en = {
    "tokyo": "東京",
    "osaka": "大阪",
    "yokohama": "横浜",
    "nagoya": "名古屋",
}

# ヒーロー画像
hero_images = {
    "termite": "/images/hero-pest-new.jpg",
    "cockroach": "/images/hero-pest-new.jpg",
    "wasp": "/images/hero-pest-new.jpg",
}

# 害虫リンク
pest_links = {
    "termite": "/shiroari",
    "cockroach": "/gokiburi",
    "wasp": "/hachi",
}

template = '''import Link from "next/link";
import Image from "next/image";
import type {{ Metadata }} from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {{
  title: "{area_ja}の{pest_ja}駆除業者おすすめ10社｜料金相場・口コミ比較 - 害虫・害獣駆除プロ比較ナビ",
  description: "{area_ja}で{pest_ja}駆除業者をお探しなら当サイト。料金相場{price}。{area_detail}対応の優良業者を口コミ・実績で徹底比較。見積もり無料。",
  openGraph: {{
    title: "{area_ja}の{pest_ja}駆除業者おすすめ10社｜料金相場・口コミ比較",
    description: "{area_ja}の{pest_ja}駆除業者を料金・サービス・口コミで徹底比較。{area_detail}対応。",
    url: "https://pest-control-001.pages.dev/pest/{pest_en}/{area_en}",
  }},
}};

export default function {PestArea}Page() {{
  const topPests = [
    {{ name: "シロアリ", icon: "🐜", description: "木造住宅の大敵", href: "/shiroari" }},
    {{ name: "ゴキブリ", icon: "🪳", description: "飲食店・マンション", href: "/gokiburi" }},
    {{ name: "ハチ", icon: "🐝", description: "軒下・庭木", href: "/hachi" }},
    {{ name: "ネズミ", icon: "🐭", description: "飲食店・住宅", href: "/nezumi" }},
    {{ name: "ダニ", icon: "🦟", description: "布団・カーペット", href: "/dani" }},
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {{/* パンくずリスト */}}
      <Breadcrumb items={{[
        {{ label: "害虫・害獣駆除プロ比較ナビ", href: "/" }},
        {{ label: "{area_ja}", href: "/area/{area_en}" }},
        {{ label: "{pest_ja}駆除 {area_ja}" }}
      ]}} />

      {{/* ヒーローセクション */}}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-amber-600 to-amber-800 text-white relative overflow-hidden">
        <Image
          src="{hero_image}"
          alt="{area_ja}の{pest_ja}駆除"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {area_ja}の{pest_ja}駆除業者
            </h1>
            <p className="text-xl mb-8">
              確実な駆除方法と再発防止策で、{pest_ja}のいない快適な生活を実現します
            </p>
            <Link href="/price" className="btn btn-lg btn-neutral">
              料金相場を見る
            </Link>
          </div>
        </div>
      </section>

      {{/* キャッチコピー */}}
      <section className="py-8 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-bold text-gray-900">
            {area_detail}対応｜{pest_ja}駆除の専門業者10社を徹底比較
          </p>
        </div>
      </section>

      {{/* おすすめ業者比較表 */}}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center mb-8">{area_ja}のおすすめ{pest_ja}駆除業者比較</h2>
          
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="table w-full bg-white text-black">
              <thead>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300"></th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-warning badge-lg">👑 1</span>
                      <img src="/images/companies/kujyo-zaurus.png" alt="駆除ザウルス" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">駆除ザウルス</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base" style={{{{backgroundColor: '#C0C0C0', color: '#000'}}}}>👑 2</span>
                      <img src="/images/companies/house-protect.png" alt="ハウスプロテクト" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">ハウスプロテクト</strong>
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="badge badge-lg text-base" style={{{{backgroundColor: '#CD7F32', color: '#fff'}}}}>👑 3</span>
                      <img src="/images/companies/protec.png" alt="害獣プロテック" className="w-20 h-20 rounded-lg object-cover" />
                      <strong className="text-lg font-bold text-gray-900">害獣プロテック</strong>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応エリア</th>
                  <td className="text-center">{area_detail}</td>
                  <td className="text-center">{area_detail}</td>
                  <td className="text-center">{area_ja}全域</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">料金目安</th>
                  <td className="text-center font-semibold text-primary">{price}</td>
                  <td className="text-center font-semibold text-primary">{price}</td>
                  <td className="text-center font-semibold text-primary">{price}</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">対応スピード</th>
                  <td className="text-center">最短即日</td>
                  <td className="text-center">最短即日</td>
                  <td className="text-center">24時間以内</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">保証期間</th>
                  <td className="text-center">5年</td>
                  <td className="text-center">5年</td>
                  <td className="text-center">5年</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">特徴</th>
                  <td className="text-sm">日本しろあり対策協会認定、実績豊富</td>
                  <td className="text-sm">最新駆除技術、環境配慮型</td>
                  <td className="text-sm">24時間受付、緊急対応可</td>
                </tr>
                <tr>
                  <th className="bg-gray-800 text-white border border-gray-300">公式サイト</th>
                  <td className="text-center">
                    <a href="https://kujyo-zaurus.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                      無料相談はこちら
                    </a>
                  </td>
                  <td className="text-center">
                    <a href="https://house-protect.net/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                      無料相談はこちら
                    </a>
                  </td>
                  <td className="text-center">
                    <a href="https://gaichu-protec.jp/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                      無料相談はこちら
                    </a>
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

      {{/* {area_ja}で多い害虫TOP5 */}}
      <section className="py-12 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center">{area_ja}で多い害虫TOP5</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {{topPests.map((pest) => (
              <Link
                key={{pest.name}}
                href={{pest.href}}
                className="bg-white hover:bg-amber-50 border-2 border-gray-200 hover:border-amber-500 rounded-lg py-6 px-4 text-center transition-all shadow-sm hover:shadow-md"
              >
                <div className="text-4xl mb-2">{{pest.icon}}</div>
                <p className="text-lg font-semibold text-gray-900">{{pest.name}}</p>
                <p className="text-sm text-gray-600">{{pest.description}}</p>
              </Link>
            ))}}
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

created_pages = []

for pest_en, area_en, pest_ja, area_ja, search_vol, price, area_detail in pages:
    # ディレクトリ作成
    dir_path = f'app/pest/{pest_en}/{area_en}'
    os.makedirs(dir_path, exist_ok=True)
    
    # ファイル名（PascalCase）
    pest_pascal = pest_en.capitalize()
    area_pascal = area_en.capitalize()
    class_name = f'{pest_pascal}{area_pascal}'
    
    # テンプレート置換
    content = template.format(
        pest_en=pest_en,
        area_en=area_en,
        pest_ja=pest_ja,
        area_ja=area_ja,
        price=price,
        area_detail=area_detail,
        hero_image=hero_images.get(pest_en, "/images/hero-pest-new.jpg"),
        PestArea=class_name
    )
    
    # ファイル書き込み
    file_path = f'{dir_path}/page.tsx'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    created_pages.append(f'{pest_ja}駆除 {area_ja} ({pest_en}/{area_en})')
    print(f'✓ {file_path} を作成しました')

print(f'\n=== フェーズ1完了: {len(created_pages)}ページ作成 ===')
for page in created_pages:
    print(f'- {page}')
