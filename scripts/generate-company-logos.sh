#!/bin/bash
cd ~/.openclaw/workspace/pest-control-001/public/images/companies

# SVG形式で業者名ロゴを生成（ImageMagickを使用）
# 各業者の色とフォントを変えて差別化

# 1. 駆除ザウルス（緑系）
cat > kujyo-zaurus.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#2d7c3f"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">駆除ザウルス</text>
</svg>
EOF

# 2. 害獣駆除のROY（青系）
cat > roy.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#1e3a8a"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">害獣駆除のROY</text>
</svg>
EOF

# 3. 害獣BUZZ（オレンジ系）
cat > buzz.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#ea580c"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">害獣BUZZ</text>
</svg>
EOF

# 4. サンキョークリーンサービス（紺系）
cat > sankyo.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#1e40af"/>
  <text x="200" y="90" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">サンキョー</text>
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">クリーンサービス</text>
</svg>
EOF

# 5. ハウスプロテクト（赤系）
cat > house-protect.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#dc2626"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">ハウスプロテクト</text>
</svg>
EOF

# 6. 害虫駆除110番（黄系）
cat > gaichu110.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#ca8a04"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">害虫駆除110番</text>
</svg>
EOF

# 7. 害獣プロテック（緑青系）
cat > protec.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#0d9488"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">害獣プロテック</text>
</svg>
EOF

# 8. ラッター（茶系）
cat > ratter.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#92400e"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">ラッター</text>
</svg>
EOF

# 9. EMEAO!（紫系）
cat > emeao.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#7c3aed"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">EMEAO!</text>
</svg>
EOF

# 10. ダスキン（ピンク系）
cat > duskin.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#db2777"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">ダスキン</text>
</svg>
EOF

# 11. 株式会社三共消毒（濃緑系）
cat > sankyo-shoudoku.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#166534"/>
  <text x="200" y="90" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">株式会社</text>
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">三共消毒</text>
</svg>
EOF

# 12. 株式会社アサンテ（水色系）
cat > asante.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#0891b2"/>
  <text x="200" y="90" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">株式会社</text>
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">アサンテ</text>
</svg>
EOF

# 13. 有限会社北日本消毒（青緑系）
cat > kita-nihon.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#0e7490"/>
  <text x="200" y="90" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">有限会社</text>
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">北日本消毒</text>
</svg>
EOF

# 14. 株式会社あい営繕（ライム系）
cat > ai-eizen.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#65a30d"/>
  <text x="200" y="90" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">株式会社</text>
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">あい営繕</text>
</svg>
EOF

# 15. 株式会社ミヤコ消毒（深緑系）
cat > miyako.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#14532d"/>
  <text x="200" y="90" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">株式会社</text>
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">ミヤコ消毒</text>
</svg>
EOF

# 16. 株式会社こだま（紺系）
cat > kodama.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#1e3a8a"/>
  <text x="200" y="90" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">株式会社</text>
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">こだま</text>
</svg>
EOF

# 17. 大洋防疫研究所（濃青系）
cat > taiyo.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#172554"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">大洋防疫研究所</text>
</svg>
EOF

# 18. 株式会社第一環研（緑系）
cat > daiichi.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#15803d"/>
  <text x="200" y="90" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">株式会社</text>
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">第一環研</text>
</svg>
EOF

# 19. ハチお助け本舗（黄色系）
cat > hachi-otasuke.svg << 'EOF'
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#eab308"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">ハチお助け本舗</text>
</svg>
EOF

# SVGをJPGに変換（ImageMagickが必要）
# macOSの場合: brew install imagemagick
if command -v convert &> /dev/null; then
    for svg in *.svg; do
        convert -background transparent "$svg" "${svg%.svg}.jpg"
        echo "✓ ${svg%.svg}.jpg を生成しました"
    done
    rm *.svg
else
    echo "⚠ ImageMagickがインストールされていないため、SVGファイルのみ生成しました"
    echo "手動でJPGに変換してください"
fi

echo "完了！"
