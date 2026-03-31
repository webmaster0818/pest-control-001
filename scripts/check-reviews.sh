#!/bin/bash
cd ~/.openclaw/workspace/pest-control-001

echo "=== 口コミチェック ==="
echo ""

# 全ページの口コミ数をカウント
total_reviews=0
reviews_with_stars=0

for file in app/*/page.tsx app/area/*/page.tsx; do
    # 口コミ見出しの数
    review_count=$(grep -o "の口コミ</h" "$file" | wc -l | tr -d ' ')
    
    if [ "$review_count" -gt 0 ]; then
        # 星付き口コミの数
        star_count=$(grep -A 20 "の口コミ</h" "$file" | grep -o "★★★★★\|★★★★☆" | wc -l | tr -d ' ')
        
        total_reviews=$((total_reviews + review_count))
        reviews_with_stars=$((reviews_with_stars + star_count))
        
        if [ "$star_count" -lt "$review_count" ]; then
            page_name=$(echo "$file" | sed 's/app\///' | sed 's/\/page.tsx//')
            echo "⚠ $page_name: 口コミ${review_count}件中、星付き${star_count}件"
        fi
    fi
done

echo ""
echo "総計: 口コミ${total_reviews}件、星付き${reviews_with_stars}件"
