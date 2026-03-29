#!/bin/bash
cd ~/.openclaw/workspace/pest-control-001

OLD_NAME="害虫駆除110番"
NEW_NAME="害虫・害獣駆除プロ比較ナビ"

echo "=== サイト名変更: $OLD_NAME → $NEW_NAME ==="
echo ""

# app/ 配下の全.tsxファイルを置換
find app -name "*.tsx" -type f | while read file; do
    if grep -q "$OLD_NAME" "$file"; then
        sed -i '' "s/$OLD_NAME/$NEW_NAME/g" "$file"
        echo "✓ $file を更新しました"
    fi
done

# app/ 配下の全.tsファイルを置換
find app -name "*.ts" -type f | while read file; do
    if grep -q "$OLD_NAME" "$file"; then
        sed -i '' "s/$OLD_NAME/$NEW_NAME/g" "$file"
        echo "✓ $file を更新しました"
    fi
done

# public/sitemap.xml を置換
if grep -q "$OLD_NAME" "public/sitemap.xml"; then
    sed -i '' "s/$OLD_NAME/$NEW_NAME/g" "public/sitemap.xml"
    echo "✓ public/sitemap.xml を更新しました"
fi

# README.md があれば置換
if [ -f "README.md" ] && grep -q "$OLD_NAME" "README.md"; then
    sed -i '' "s/$OLD_NAME/$NEW_NAME/g" "README.md"
    echo "✓ README.md を更新しました"
fi

echo ""
echo "完了！"
