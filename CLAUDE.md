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
