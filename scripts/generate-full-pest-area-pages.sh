#!/bin/bash
# 全9ページをエリアページと同様の構造で一括生成

# 作業用ディレクトリ
cd /Users/jiro.hasegawa/.openclaw/workspace/pest-control-001

# ベーステンプレート（東京エリアページ）を読み込み
BASE_TEMPLATE="app/area/tokyo/page.tsx"

# ページ情報（害虫英名 エリア英名 害虫日本語 エリア日本語 エリア詳細）
declare -a PAGES=(
  "termite:tokyo:シロアリ:東京:東京23区、多摩地域"
  "cockroach:tokyo:ゴキブリ:東京:東京23区、多摩地域"
  "termite:osaka:シロアリ:大阪:大阪市、堺市、北摂エリア"
  "cockroach:osaka:ゴキブリ:大阪:大阪市、堺市、北摂エリア"
  "termite:yokohama:シロアリ:横浜:横浜市全域、川崎市"
  "wasp:tokyo:ハチ:東京:東京23区、多摩地域"
  "cockroach:yokohama:ゴキブリ:横浜:横浜市全域、川崎市"
  "termite:nagoya:シロアリ:名古屋:名古屋市、愛知県内"
  "cockroach:nagoya:ゴキブリ:名古屋:名古屋市、愛知県内"
)

echo "=== エリアページベースの害虫×エリアページ生成開始 ==="

for PAGE_INFO in "${PAGES[@]}"; do
  IFS=':' read -r PEST_EN AREA_EN PEST_JA AREA_JA AREA_DETAIL <<< "$PAGE_INFO"
  
  OUTPUT_FILE="app/pest/${PEST_EN}/${AREA_EN}/page.tsx"
  
  echo "生成中: ${PEST_JA}駆除 ${AREA_JA} → ${OUTPUT_FILE}"
  
  # ベーステンプレートをコピーして置換
  # この方法では複雑すぎるため、Pythonスクリプトに切り替え
  
done

echo "=== Bashスクリプトでは複雑すぎるため、Pythonスクリプトで実装します ==="
