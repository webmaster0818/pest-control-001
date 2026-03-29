#!/bin/bash
cd ~/.openclaw/workspace/pest-control-001

echo "=== 業者画像チェック ==="
echo ""

# 小さいサイズの画像（50KB未満）をリストアップ
echo "【SVGから変換された可能性のある画像（50KB未満）】"
cd public/images/companies
ls -lh *.png | awk '$5 ~ /K$/ && $5+0 < 50 {print "- " $9 " (" $5 ")"}'
echo ""

# 実画像サイズ（100KB以上）
echo "【実画像（100KB以上）】"
ls -lh *.png | awk '$5 ~ /K$/ && $5+0 >= 100 || $5 ~ /M$/ {print "- " $9 " (" $5 ")"}'
echo ""

echo "=== 差し替えが必要な業者 ==="
echo "- ダスキン (duskin.png - 5.3K)"
echo "- ハウスプロテクト (house-protect.png - 17K)"
echo "- 株式会社こだま (kodama.png - 26K)"
echo "- 株式会社アサンテ (asante.png - 27K)"
echo "- EMEAO! (emeao.png - 52K) - ※ギリギリ"
