#!/bin/bash
cd ~/.openclaw/workspace/pest-control-001/public/images/companies

# 既に取得済み
# 1. 駆除ザウルス
echo "✓ 駆除ザウルス（取得済み）"

# 2. 害獣駆除のROY
curl -L -o roy.png "https://gaichu-kujyo-roy.com/wp-content/themes/roy/assets/images/common/logo.png" 2>/dev/null && echo "✓ 害獣駆除のROY" || echo "✗ 害獣駆除のROY（失敗）"

# 3. 害獣BUZZ
curl -L -o buzz.png "https://gaichu-buzz.com/img/logo.png" 2>/dev/null && echo "✓ 害獣BUZZ" || echo "✗ 害獣BUZZ（失敗）"

# 5. ハウスプロテクト（ロゴまたはメインビジュアル）
curl -L -o house-protect.png "https://house-protect.net/wp-content/themes/hp/assets/img/common/logo.svg" 2>/dev/null && echo "✓ ハウスプロテクト" || echo "✗ ハウスプロテクト（失敗）"

# 6. 害虫駆除110番
curl -L -o gaichu110.png "https://www.sharing-tech.co.jp/gaichu/img/common/logo.svg" 2>/dev/null && echo "✓ 害虫駆除110番" || echo "✗ 害虫駆除110番（失敗）"

# 7. 害獣プロテック
curl -L -o protec.png "https://gaichu-protec.jp/img/logo.png" 2>/dev/null && echo "✓ 害獣プロテック" || echo "✗ 害獣プロテック（失敗）"

# 8. ラッター
curl -L -o ratter.png "https://ratter.jp/assets/img/common/logo.svg" 2>/dev/null && echo "✓ ラッター" || echo "✗ ラッター（失敗）"

# 9. EMEAO!
curl -L -o emeao.png "https://emeao.jp/img/logo.svg" 2>/dev/null && echo "✓ EMEAO!" || echo "✗ EMEAO!（失敗）"

# 10. ダスキン
curl -L -o duskin.png "https://www.duskin.jp/common/images/logo.png" 2>/dev/null && echo "✓ ダスキン" || echo "✗ ダスキン（失敗）"

# 11. 株式会社三共消毒
curl -L -o sankyo-shoudoku.png "https://www.sankyo-shodoku.com/images/logo.png" 2>/dev/null && echo "✓ 株式会社三共消毒" || echo "✗ 株式会社三共消毒（失敗）"

# 12. 株式会社アサンテ
curl -L -o asante.png "https://www.asante.co.jp/img/common/logo.svg" 2>/dev/null && echo "✓ 株式会社アサンテ" || echo "✗ 株式会社アサンテ（失敗）"

# 13. 有限会社北日本消毒
curl -L -o kita-nihon.png "https://www.kita-nihon.co.jp/img/logo.png" 2>/dev/null && echo "✓ 有限会社北日本消毒" || echo "✗ 有限会社北日本消毒（失敗）"

# 14. 株式会社あい営繕
curl -L -o ai-eizen.png "https://www.ai-eizen.com/img/logo.png" 2>/dev/null && echo "✓ 株式会社あい営繕" || echo "✗ 株式会社あい営繕（失敗）"

# 15. 株式会社ミヤコ消毒
curl -L -o miyako.png "https://www.miyako-shodoku.co.jp/img/logo.png" 2>/dev/null && echo "✓ 株式会社ミヤコ消毒" || echo "✗ 株式会社ミヤコ消毒（失敗）"

# 16. 株式会社こだま
curl -L -o kodama.png "https://www.kodama-inc.jp/img/logo.png" 2>/dev/null && echo "✓ 株式会社こだま" || echo "✗ 株式会社こだま（失敗）"

# 17. 大洋防疫研究所
curl -L -o taiyo.png "https://www.taiyo-boueki.jp/img/logo.png" 2>/dev/null && echo "✓ 大洋防疫研究所" || echo "✗ 大洋防疫研究所（失敗）"

# 18. 株式会社第一環研
curl -L -o daiichi.png "https://www.daiichi-kanken.co.jp/img/logo.png" 2>/dev/null && echo "✓ 株式会社第一環研" || echo "✗ 株式会社第一環研（失敗）"

# 19. ハチお助け本舗
curl -L -o hachi-otasuke.png "https://hachi-otasuke.jp/img/logo.png" 2>/dev/null && echo "✓ ハチお助け本舗" || echo "✗ ハチお助け本舗（失敗）"

echo ""
echo "完了！取得した画像一覧："
ls -lh *.png 2>/dev/null | tail -20
