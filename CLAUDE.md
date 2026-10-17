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

---
## 作業ログ 2026-10-14 (jiro-2) — 公開前チェック（site-precheck.py）全項目OK化
- **デプロイ方式A**: GitHub `webmaster0818/pest-control-001` の main に push → CF Pages がソースから自動ビルド。deployリポは無い。
- **URLは末尾スラッシュ無しが正**（`output: export`・trailingSlash 無し。本番は `/x/` → `/x` に308）。site-precheck.py は `x/index.html` 前提なので、そのまま out/ に掛けると「ページ1件」になる。`out` を `x/index.html` 形式に写し、内部パスに一律で `/` を付けたミラーに掛けて判定した（対応は1対1なので判定は同等）。
- 直したもの: canonical 欠落79件（旧ベタ書きの /area/* と /pest/{cockroach,termite,wasp,nezumi,dani}/*）、トップの canonical（metadata だと末尾 `/` が落ちるので page.tsx に `<link rel="canonical">` 直書き）、/agents・/pest の canonical が末尾スラッシュ付き（308先）だったのを修正、og:image 全ページ（`public/og-default.png?v=20261014`、`app/lib/og.ts` の DEFAULT_OG_IMAGE。ページ側で openGraph を書くと layout の openGraph は丸ごと上書きされるので各ページにも入れる）、og:url が pages.dev／別ページを指していたのを自URLに、favicon（app/icon.jpg → app/icon.png）、h1 欠落82件（キャッチコピーの h2 を h1 に）、/faq・/guide に metadata、構造化データ0の6ページにパンくず、/agents/{slug}/{area} の description 160字超（運営会社の括弧書きが長い社は外す）、sitemap 漏れ17件追加、/dani2（/dani の完全複製・被リンク0）を削除し `_redirects` で /dani へ301。
- 被リンク: /pest/[pest]/[area]・/agents/[slug]/[area]・/agents/[slug] に関連リンク（同エリアの別害虫・同害虫の別エリア・同エリアの業者ページ等）を `app/components/RelatedLinkList.tsx` で追加。
- 未対応（要判断）: 旧ベタ書きの /pest/*/{都市} ページの本文に事実誤り（例 /pest/nezumi/yokohama に「横浜都」「23区・多摩地域」、東京都の電話番号、title「8社」と og:title「10社」の食い違い）。本文は触っていない。

---
## 作業ログ 2026-10-17 (jiro) — アフィリエイトリンク設置（okina提供）
- コードは `app/data/affiliateCodes.ts` に1か所（提供HTMLをそのまま保持・改変禁止）。描画は `app/components/AffLink.tsx`（AffBanner/AffText、装飾は globals.css の .aff-*）。新しいコードはここに足すだけで /agents/{slug} などに出る。
- 記録: growth/okina/aff/placement-20261017.md。rentracks の img は alt が無く site-precheck [13] が落ちるが、コード改変になるため例外扱い。

---
## 作業ログ 2026-10-17 (jiro) — ハチ×エリア 第4弾（okina「続けて」）
- 新規7県: 青森24・岩手14・佐賀12・山梨10・福井10・高知9・秋田7（計86自治体）。保留（7未満）: 鳥取5・徳島5・宮崎5・香川4・島根2（JSONは作成済み・"hold": true）。
- 既存5県に追加: 富山+高岡市・砺波市、岐阜+多治見市・大垣市、石川+津幡町、大分+由布市、岡山+笠岡市。山口・和歌山・長野・長崎の対象市（岩国・田辺・佐久・島原など）は sitemap 走査でも見つからず。
- 調査JSON: scratchpad/h4/json（hachi-*.json=新規、add-*.json=追加）、証拠テキスト scratchpad/h4/raw。生成 `scripts/gen_hachi_areas4.py`（hold を除外。被害の記述の自治体原文は「」で囲む＝copy-audit の「しましょう」対策）、マージ `scripts/merge_hachi_additions4.py`（「確認できなかった事項」を置換・確認日に追加日を追記）。
- 探索: Yahoo!検索は30件ほどでブロック（以後10分単位で断続的に解除）。Wikidata（P856）で市町村の公式トップURLを一括取得→各サイトをキーワード優先の幅優先クロール（1サイト220ページ）→不足分は sitemap.xml 全件走査、が有効だった。並列で同じ県の市町サイトを叩くと 403 になる（佐賀で発生）。
- 市のドメイン移転に注意: 久慈市 city.kuji.lg.jp・伊万里市 city.imari.lg.jp・砺波市 city.tonami.lg.jp・鹿角市 city.kazuno.lg.jp・さぬき市 city.sanuki.lg.jp・鳴門市 city.naruto.lg.jp。
- sitemap 455→462URL。precheck の不合格は /agents 系9ページの img alt 欠落のみ（アフィリエイトの計測画像・別作業分で未変更）。

---
## 作業ログ 2026-10-17 (jiro) — デザイン刷新案（ブランチ redesign-20261017・未push／okina確認待ち）
- 方針: 紙の地色＋白い面＋細い罫、見出し=しっぽり明朝 B1・本文=Noto Sans JP（next/font）。共通部品は globals.css の「デザイン刷新 2026-10-17」以降に集約（.heading-primary/.btn/.table/.card を上書き）。ボタンは色を変えず形・寸法・hoverのみ統一。
- 絵文字を全ページから除去（王冠→.rank、✅🚫⚠→CSSの線の印 .mark、⭕→○、飾りの絵文字ブロック削除）。引用内の ☎ は原文のまま。
- 業者画像は app/components/CompanyVisual.tsx に一本化（旧 <img src="/images/companies/…"> 1,817 か所を置換）。アフィリエイトあり=ASPバナー（affiliateCodes.ts は不変）、公式画像の利用確認済み=app/data/companyVisuals.ts に登録（現状 EMEAO! のみ）、それ以外=社名表記。確認記録 growth/okina/company-images-20261017.md。
- TOP: ヒーローを人物写真（Nano Banana Pro・public/images/hero-person.jpg）＋HTMLテキストに。旧 hero-main.png の文言はテキストで残した。「地域から探す」は 47都道府県×地方の一覧（app/lib/areaLinks.ts がビルド時に実在ページだけ拾う）。旧 AreaAccordion の区ページ（/area/tokyo/shinjuku 等）は存在しない URL だった。
- スクロール演出: app/components/RevealObserver.tsx（0.5秒・時間差・ファーストビュー/料金/CTA/表は除外・reduced-motion 無効・JS無効でも全表示）。
- 確認: before/after 464ページで canonical・title・description・robots・JSON-LD 一致、本文テキストの削除は ⭕→○ と TOP 地域一覧の差し替えのみ。
- 10/18 okina指摘「FVがすっきりしすぎ・明朝は使わない・害虫らしさと数字を」に対応：明朝を全廃（見出しもNoto Sans JP 700/800・字間を詰めた）、FV 3案（app/components/TopHero.tsx・`FV_VARIANT=1|2|3` でビルド時に切替・既定2）、害虫アイコン8種（Nano Banana Pro・グリーンバック→クロマキー・public/images/pests/*.webp・各ハブへリンク）、数字帯（app/lib/siteStats.ts がビルド時に数える：業者22・都道府県43・自治体400・種類19）。
- 10/18 2回目（okina「アイコンがポップすぎ・シルエットと文字だけに・塗りと線の2種・『害虫の種類から探す』→『種類から探す』」）：アイコンを単色シルエットの SVG に作り直し（Nano Banana Pro で白地に黒のシルエットを生成→potracer でベクター化。A=塗り public/images/pests/a/*.svg、B=同じ輪郭の線だけ（線幅3/100・小さな穴は埋めて輪郭を単純化）public/images/pests/b/*.svg、色 #1d2733）。`ICON_SET=a|b` でビルド時に切替（既定 a）。FVのボタンを「種類から探す」に（同じ文言のボタン・リンクはほかに無し。TOPの見出し h2「害虫の種類から探す」はそのまま）。
- 10/18 本番反映（97f64fc・okina 採用＝FV-3＋線だけのアイコン）：表・一覧のサムネイルには ASP バナーを置かない（素材の縮小改変・計測画像の表示回数増を避ける。置くかどうかは okina 判断待ち）。公開前に origin/main ビルドと全464ページ比較（head・sitemap 一致、本文差分は TOP のみ）、aff-set-diff 一致（1930件・ページごとの件数も一致）、ng-lint/heading-lint/site-precheck は main と同じ結果、内部リンク切れ0。本番 HTML 464 ページを取得して aff-set-diff 一致を再確認。copy-audit の「しましょう」20件は main 時点から同じ（自治体資料の引用内）。
