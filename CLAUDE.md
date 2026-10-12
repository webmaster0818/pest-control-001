# CLAUDE.md - pest-control-001

**最終更新:** 2026-04-08

---

## Bot役割・体制

| Bot | 役割 | Tailscale IP | ユーザー名 |
|-----|------|-------------|-----------|
| **tomomi** | 管理者・統括 | 100.68.144.128 | takashi.hasegawa |
| **taro** | 開発・記事作成 | 100.122.26.7 | taro.hasegawa |
| **jiro** | 開発・記事作成 | 100.112.156.89 | jiro.hasegawa |
| **saburo** | 開発・記事作成 | 100.82.52.10 | saburo.hasegawa |

## SSH接続情報

ssh tomomi: ssh takashi.hasegawa@100.68.144.128
ssh taro: ssh taro.hasegawa@100.122.26.7
ssh saburo: ssh saburo.hasegawa@100.82.52.10

## ルール

- **作業開始時にこのファイルを必ず読み込むこと**
- **作業完了後は実施内容・学んだことを必ずこのファイルに追記すること**
- タスクを引き受けたら必ず実行し、完了報告すること
- 5分以上かかるタスクは途中経過を報告すること
- 費用が発生する作業は事前にMediaXAIに相談すること
- 修正後は必ずGitHubにプッシュし、ビルド成功を確認すること

## リアクションルール

- メッセージを受信したら👀をつける
- 作業中は⚙️をつける
- 完了したら✅をつける
- エラーが起きたら❌をつける

---
## 作業ログ 2026-06-10 (jiro)
- 業者×口コミ・評判記事を量産(okina依頼)。`/agents/[slug]` データ駆動テンプレ + `app/agents/agentsData.ts` + `/agents/` 一覧を新設。
- 各社を個別Web調査し実情報・口コミ要約で14社作成(+駆除ザウルス=計15社公開):
  house-protect/protec/sankyo/sankyo-shoudoku/asante/duskin/buzz/roy/hachi-otasuke/miyako/ratter/taiyo/ai-eizen/kita-nihon。
- 要件: 画像2枚以上/絵文字なし/競合調査title/最終更新日/目次/h1-3/FAQ/Article+FAQPage構造化データ/口コミは出典明記で要約(架空なし)。
- Headerロゴを h1→span に変更し全ページのh1重複を是正。
- 未作成2社: daiichi(第一環研)・kodama(こだま)は公開情報なし→okinaに確認中(架空作成しない方針)。
- デプロイ: CF Pagesがソース(webmaster0818/pest-control-001)から自動ビルド。remoteのembeddedトークンが失効する場合あり→CLAUDE.md sec16のトークンで set-url。

---
## 作業ログ 2026-07-19 (jiro) — アフィリエイトSEO拡張 P0（okina依頼・ch 1498329367904780440）
- 依頼: Fable5×フルフュージョンでSEO拡張方針策定＋業者網羅＋エリア拡張。提携済>提携候補>他業者の順で掲載。既紹介×未リンク業者をリストアップしokinaにリンク取得依頼。添付7ASP PDF(A8×3/felmat×3/rentracks×1)=提携候補。
- 実施:
  - フルフュージョン(Claude+GPT+Gemini)で拡張方針策定(runs保存)。P0収益基盤→P1業者15→60社→P2害獣×県→P3内部リンク&/ariリライト。
  - 7ASP全数照合→業者3分類確定。既存15社中ASP掲載7社=提携候補(house-protect/protec/sankyo/asante/duskin/buzz/roy)、残8社=他業者。提携済(rentracks提携中)7ブランドはサイト未掲載(ハウスガード24/街角相談所/害獣セーフガード/害獣害虫駆除王/蜂バスター/虫駆除ドットコム/ムシプロテック)。
  - **P0実装(commit 61c11ad)**: agentsData interfaceに partnerTier/asp/affiliateUrl 追加、15社にtier付与、agentsByPriority(提携済>候補>他ソート)追加。/agents一覧を優先順表示。[slug]ページにsponsored CTA(ヒーロー+記事末、rel=sponsored nofollow+PR開示)実装。affiliateUrl入力時のみ表示=リンク1行で全ページ反映。
- 待ち: okinaからアフィリンク取得(①rentracks提携中7ブランド ②既存7社の提携申請+リンク)。届き次第 agentsData に差込→P1業者ページ作成。P2(害獣×県)はリンク非依存で並行可。
- 既存の /pest/termite/{都市} ・ /pest/wasp/{都市} クロスページは既存(害虫×エリアはシロアリ・ハチで実装済＝fusion方針と整合)。

---
## 作業ログ 2026-09-30 (jiro) — ハチ×エリア 第2弾（okina「どんどん続けて」）
- ハチ（スズメバチ・アシナガバチ）× 都道府県を9県追加（福島・群馬・長野・岐阜・三重・滋賀・奈良・岡山・長崎）。計53自治体の公式ページを一次確認。サイト全体425URL。
- 調査JSON: scratchpad/gaichu5/hachi-*.json（9件）。生成: `scripts/gen_hachi_areas2.py`（gen_hachi_areas.py のSRC/確認日違い）。
- 自治体ページの探索は検索エンジンが不安定（Bing=トップページしか返さない／DDG=403）。**市公式サイトのトップまたは /sitemap.html から幅優先クロール（scratchpad/gaichu4/crawl2.py）が最も確実**。JSナビの市サイトはヒットしないため、そこは未調査として明記した。
- 分かったこと: 群馬(前橋=指定業者・巣1個6,100円補助/高崎=委託業者・全額補助)が県内で突出。奈良は補助金4市町(御所1万/香芝1万/広陵1.2万/王寺1/2)。三重は防護服貸出5市(亀山・鈴鹿=無料、名張=1着1,000円有料)。滋賀は貸出ゼロで滋賀県ペストコントロール協会が共通窓口、愛荘町のみ補助1万。
- 注意: 生成テキストに "null" などの開発用語を混ぜない（初回混入→修正済）。

---
## 作業ログ 2026-10-12 (jiro) — ハチ×エリア 第3弾（okina「続けて」）
- 新規7県: 愛媛13・石川12・山口11・大分10・和歌山10・富山8・山形8（計72自治体）。香川は5市町（高松市のページが見つからず）で薄いため見送り。
- 既存6県に大きな市を追加: 群馬4→15（太田・伊勢崎・桐生など）、福島4→11（福島市・いわき・会津若松など）、長野5→13（松本・上田・飯田など）、岐阜5→12（岐阜市・各務原・可児など）、岡山5→9（倉敷・赤磐など）、長崎4→7（佐世保など）。計+40自治体。
- 調査JSON: scratchpad/hachi/json（hachi-*.json=新規、add-*.json=追加）、証拠テキスト scratchpad/hachi/raw。生成 `scripts/gen_hachi_areas3.py`、既存県へのマージ `scripts/merge_hachi_additions.py`、「」引用の原文照合 `scripts/verify_hachi_quotes.py`（804件・不一致0）。
- 探索: Yahoo!検索（curl）は最初は使えたが並列で叩くとすぐブロックされる。WebSearchも上限200回に到達。最終的には市サイトの sitemap / カテゴリページのクロールが主力。並列エージェントは共有scratchpadのスクリプトを上書きし合うので、名前を分けること。
- ついでに修正: (1) /pest/[pest]/[area] と /agents/[slug](/[area]) の canonical が末尾スラッシュ付き（本番は308でスラッシュ無しへ転送）だったのをスラッシュ無しの自己参照に修正。(2) 県ページの関連リンク /area/{slug}/ が、エリアページの無い県（福島など）で404になっていたため、実在するエリアだけに出すよう修正（AREA_PAGES）。
- sitemap 425→432URL。
