#!/bin/bash
# 東京エリアページ → シロアリ駆除 東京ページに変換

INPUT="app/pest/termite/tokyo/page-new.tsx"
OUTPUT="app/pest/termite/tokyo/page.tsx"

# 1. メタデータ修正
sed -i '' 's/東京の害虫駆除業者比較/東京のシロアリ駆除業者比較/g' "$INPUT"
sed -i '' 's/東京都内の害虫駆除業者10社/東京のシロアリ駆除業者8社/g' "$INPUT"
sed -i '' 's/おすすめ10社/おすすめ8社/g' "$INPUT"
sed -i '' 's|area/tokyo|pest/termite/tokyo|g' "$INPUT"

# 2. パンくず修正
sed -i '' 's/{ label: "東京" }/{ label: "東京", href: "\/area\/tokyo" },\n        { label: "シロアリ駆除 東京" }/g' "$INPUT"

# 3. タイトル・見出し修正
sed -i '' 's/東京の害虫駆除 完全ガイド/東京のシロアリ駆除 完全ガイド/g' "$INPUT"
sed -i '' 's/東京のおすすめ害虫駆除業者比較/東京のおすすめシロアリ駆除業者比較/g' "$INPUT"
sed -i '' 's/東京のおすすめ害虫駆除業者 詳細紹介/東京のおすすめシロアリ駆除業者 詳細紹介/g' "$INPUT"
sed -i '' 's/東京の害虫駆除料金相場/東京のシロアリ駆除料金相場/g' "$INPUT"
sed -i '' 's/東京の害虫カレンダー/東京のシロアリカレンダー/g' "$INPUT"
sed -i '' 's/東京都内の害虫駆除業者エリア/東京都内のシロアリ駆除業者エリア/g' "$INPUT"
sed -i '' 's/東京都の害虫相談窓口/東京都の害虫相談窓口/g' "$INPUT"

# 4. CTA修正
sed -i '' 's/東京害虫駆除のご相談は今すぐ/東京のシロアリ駆除のご相談は今すぐ/g' "$INPUT"

# 完成版として保存
mv "$INPUT" "$OUTPUT"

echo "✓ シロアリ駆除 東京ページの基本変換完了"
echo "次: 業者10社→8社に削減、料金相場・カレンダーをシロアリ特化に変更"
