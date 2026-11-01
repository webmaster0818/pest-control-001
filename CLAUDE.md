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

---
## 作業ログ 2026-11-01 (jiro) — ハチ × 市 第1弾（網羅表 projects/okina-coverage-20261101/gaichu.md 5章 #3〜#13）
- 新設10ページ: /pest/wasp/{saitama-city,kyoto-city,shizuoka-city,maebashi,takasaki,yokosuka,mito,himeji,nagasaki-city,oita-city}。テンプレートは既存の app/pest/[pest]/[area]/page.tsx（pestAreas.ts に1件=1ページ）。市ごとに metaTitle・FAQ3問・相談窓口（govContacts）・municipalSupport 1行。
- 各市の公式ページを 2026-11-01 に curl で開き直して確認（pestAreas.ts の既存行は 9/28〜10/12 確認分）。生成 `scripts/gen_hachi_cities1.py`、「」引用の原文照合 `scripts/verify_hachi_cities1.py`（176件・不一致0）。
- 保留: 岡崎市（city.okazaki.lg.jp が Incapsula で curl・headless Chrome・WebFetch とも本文を取得できず、当日確認できないため）。旭川市は確認済み・次回分。
- 1市のページで municipalSupport を2行にすると「掲載自治体 2件」と出るため、同じ市の補足ページは govContacts に入れた。
- 既存の重複44組・osaka スラッグは触っていない（新スラッグは既存と重複なしを確認）。sitemap 462→472。

---
## 作業ログ 2026-11-01 (jiro) — 第2弾（網羅表 5章 #14・#16・#18〜#22・#1・#2）
- 新設9ページ: /pest/wasp/{asahikawa,chiba-city,kagawa,tottori,shimane,tokushima,miyazaki}、/pest/araiguma/tokyo、/pest/hakubishin/tokyo。旭川市は scripts/gen_hachi_cities2.py、他は当日取得した公式ページ本文から作った JSON を scripts/merge_pest_batch2.py で pestAreas.ts 末尾と sitemap に追加。「」引用は scripts/verify_pest_batch2.py で公式本文と照合（不一致0）。
- 保留: 福岡市（駆除しない＋区の窓口のみで、助成・貸出・委託業者の記載なし＝最低3項目に届かず）、岡崎市（bot遮断）、名古屋市 #15（旧形式の作り直し＝既存ページの削除を伴うため要承認）。県ページで公式ページを特定できなかった市町村は各ページの cautions に列挙（高松市・倉吉市・延岡市など。日向市・西都市は当日サイト障害/メンテ）。
- companySlugs: ハチは duskin/hachi-otasuke/taiyo、東京のアライグマ・ハクビシンは神奈川の同種ページと同じ8社（新規の社なし）。sitemap 472→481。

---
## 作業ログ 2026-11-01 (jiro) — 第3弾（網羅表 5章 #23・#24 ＋ 政令市・中核市のハチ）
- 新設10ページ: /pest/wasp/{sapporo,hamamatsu,hiroshima-city,kumamoto-city,okayama-city,fukushima-city,nagano-city,matsue}、/pest/araiguma/osaka-city、/pest/hakubishin/setagaya。生成 `scripts/gen_pest_batch3.py`、マージ `scripts/merge_pest_batch3.py`、「」引用の照合 `scripts/verify_pest_batch3.py`（レコードごとに自分の出典本文だけと照合・206件・不一致0。「！」は引用内のみ＝札幌市のページ名「ハチに注意！～…」）。証拠テキストは scratchpad b3/raw。
- 市の選定は pestAreas.ts の既存自治体行（57市）から、当日の公式ページで最低3項目（駆除の可否／助成／窓口／貸出／業者案内）が確認できた市。助成の記載がない市は「記載がない（制度がないと市が明記しているわけではない）」と書き分けた（浜松・岡山・長野・松江は「なし」と市が明記）。
- 保留: 仙台市（市が駆除しない旨の明記なし・助成の記載なし＝窓口と業者案内の2項目）、新潟市（/pest/wasp/niigata を 10/31 に「新潟市 蜂の巣駆除 助成金」向けに改訂済み＝食い合いを避ける。判断待ち）、名古屋市・岡崎市・福岡市（前回どおり）。業者×エリア #25〜#30 は今回は未着手（蜂バスター /area-list/tokyo は市区町村の列挙と全国共通文のみで拠点・料金の地域差なし）。
- 気づいた既存ページの誤り（触っていない）: /pest/araiguma/osaka（大阪府）の govContacts は鶴見区ページの旧記載「大阪市では原則としてアライグマの捕獲は行っておりません。また、捕獲檻の貸し出しも行っておりません。」を載せているが、健康局 0000687502（2026-09-30）・鶴見区 0000664985（2026-10-15）とも現在は捕獲檻の貸出ありに変わっている。
- sitemap 481→491。

---
## 作業ログ 2026-11-01 (jiro) — 第4弾（政令市・中核市のハチ ＋ 相模原・八王子・練馬の害獣）
- 新設10ページ: /pest/wasp/{sagamihara,koriyama,iwaki,toyota,utsunomiya,ichinomiya}、/pest/araiguma/sagamihara、/pest/hakubishin/{sagamihara,hachioji,nerima}。生成 `scripts/gen_pest_batch4.py`、マージ `scripts/merge_pest_batch4.py`、「」引用の照合 `scripts/verify_pest_batch4.py`（(種,エリア)ごとに自分の出典本文だけと照合・150件・不一致0。わざと1語変えた負のテストで NG が出ることも確認。「！」は引用内のみ＝郡山市のページ名「スズメバチにご注意を！」）。証拠テキストは scratchpad b4/raw（HTMLコメントは除去してからテキスト化）。
- ハチ: 相模原（防護服貸出・業者団体紹介・駆除/助成なし明記）、郡山・いわき（駆除/助成なし明記・保健所の登録業者一覧。業者名は転記しない）、豊田（駆除・費用補助なし明記・愛知県PCO案内）、宇都宮（所有者除去・衛生害虫防除等相談室。助成は記載なし＝「制度なし」とは書かない）、一宮（駆除なし・市のスズメバチ等駆除事業は平成31年度で廃止。助成は記載なし）。
- 害獣: 相模原市はアライグマ=市が委託業者のはこわなで捕獲（約2週間）、ハクビシン=自衛策で防げない個人所有家屋の生活被害は市が捕獲。八王子市=箱わな設置事業（年度1回・自己所有かつ居住の家屋、集合住宅除く。要領・チラシ PDF は画像で未照合と明記）。練馬区=無料の現地調査・わな設置（原則1週間・最長2週間・年度内1回）、捕獲実績表（R7 222件・18頭）。
- 保留: 名古屋市（要承認）、岡崎市（bot遮断）、新潟市（食い合い）、仙台・福岡（新事実なし）、堺市（アライグマ箱わな貸出は農地限定＝生活被害の環境共生課ページ未確認）、富山・岐阜・盛岡・高知（駆除なし＋業者探しのみで更新日が古い。次回候補）。WebSearch は上限200回に到達、Yahoo!検索（curl）で探索。
- sitemap 491→501。

---
## 作業ログ 2026-11-01 (jiro) — 第5弾（中核市・県庁所在地のハチ ＋ 中核市のアライグマ・ハクビシン）
- 新設11ページ: /pest/wasp/{toyama-city,gifu-city,morioka,matsumoto,kofu,akita-city}、/pest/araiguma/{funabashi,kurume,nishinomiya,kawaguchi}、/pest/hakubishin/funabashi。生成 `scripts/gen_pest_batch5.py`、マージ `scripts/merge_pest_batch5.py`、「」引用の照合 `scripts/verify_pest_batch5.py`（(種,エリア)ごとに自分の出典本文だけと照合・170件・不一致0。1語変更・架空引用・引用外の「！」を入れた負のテストで NG が出ることを確認）。証拠テキストは scratchpad b5/raw（当日 curl・HTMLコメント除去、PDF は pdftotext）。
- 県スラッグと重なる市は -city（toyama/gifu/akita は県ページが既存）。
- ハチ: 富山（撤去・助成なし明記・街路樹/公園の窓口）、岐阜（保健所は駆除せず・補助制度なし明記）、盛岡（駆除・助成なし明記・岩手県PCO・公園は市が駆除）、松本（公費負担・補助金なし明記・市内防除事業者一覧7者＝業者名は転記しない）、甲府（駆除なし・補助金制度は平成31年3月31日で廃止）、秋田（保健所は駆除・助成なし明記・駆除方法の助言あり）。
- 害獣: 船橋（アライグマ・ハクビシンとも無料の捕獲用ワナ・委託業者が設置/回収・屋外地上のみ最大8週間・要綱 R8.4.1 は文字PDFで照合）、久留米（捕獲従事者登録＋無料貸出 原則1基1か月・捕獲実績 2025年度264頭）、西宮（捕獲箱 原則1か月/手引きは最長3か月・現地講習・手引きの電話番号がページと違う点を明記）、川口（市が敷地内に罠設置・設置費用は市負担）。
- 保留: 高知市（ハチのページは 2012年更新で、駆除の可否と窓口の2項目のみ・助成の記載なし＝最低3項目に届かず）。名古屋・岡崎・新潟・仙台・福岡・堺は前回どおり。
- sitemap 501→512。

---
## 作業ログ 2026-11-01 (jiro) — 第6弾（23区・中核市のネズミ ＋ 千葉市・大田区・杉並区のアライグマ・ハクビシン）
- 新設10ページ: /pest/nezumi/{chiyoda,chuo-ku,shinjuku,minato-ku,funabashi}、/pest/araiguma/{chiba-city,ota-ku}、/pest/hakubishin/{chiba-city,ota-ku,suginami}。生成 `scripts/gen_pest_batch6.py`、マージ `scripts/merge_pest_batch6.py`、照合 `scripts/verify_pest_batch6.py`（「」引用159件・不一致0。legalNotes の環境省の文は全文を原文と照合。1語変更・架空引用・引用外「！」・法令文の改変の負のテストで NG を確認）。証拠テキストは scratchpad b6/raw（当日 curl・e-Gov は API の XML）。
- スラッグ: 他自治体と紛れる区は -ku（chuo-ku・minato-ku・ota-ku）。areaName は「中央区（東京都）」「港区（東京都）」。
- ネズミ: 千代田（保健所で殺鼠剤・粘着シート配布、路地の巣穴対策助成 4分の3・上限10万円、マンション助成 上限30万円）、中央（無料の個別相談会 各回24組・出張講習会・駆除業者団体の紹介・町会等への補助3分の2）、新宿（粘着シート1人1回・殺そ剤1人1袋のサンプル、区で駆除なし、PCO 案内、死骸・巣穴の連絡先）、港（区は駆除作業なし・助言・PCO・自己負担・死体処理）、船橋（殺そ剤配布場所・職員の駆除なし・千葉県害虫防除協同組合・蓄積毒剤）。companySlugs は既存ネズミと同じ9社。
- 害獣: 千葉市（生活被害の箱ワナ 原則1か月・委託事業者が届けて回収・無料は FAQ 2022年の記載と明記）、大田区（無料・2週間・1基、R7 設置130件・アライグマ6・ハクビシン16）、杉並区（要件・餌代と見回り・回収は営業時間内）。
- 保留: ネズミ×京都市（/pest/nezumi/kyoto が京都市の医療衛生センターを既に掲載＝食い合い）、豊島区・台東区（助言＋PCO 紹介のみで配布・貸出・助成なし＝薄い）、ゴキブリ・トコジラミ・ハト（データ駆動ページと同種の既存掲載業者が無い＝新規業者を足さない方針のため見送り。トコジラミは船橋市にページあり）、熊本市のアライグマ（2022年の報道資料のみ）、京都市のアライグマ（伏見区のみ確認・市全体の案内未確認）。
- sitemap 512→522。

---
## 作業ログ 2026-11-01 (jiro) — 第7弾（23区のネズミ ＋ 中野区・墨田区のアライグマ・ハクビシン）
- 新設10ページ: /pest/nezumi/{bunkyo,sumida,koto,nakano,arakawa,kita-ku}、/pest/araiguma/{nakano,sumida}、/pest/hakubishin/{nakano,sumida}。生成 `scripts/gen_pest_batch7.py`、マージ `scripts/merge_pest_batch7.py`、照合 `scripts/verify_pest_batch7.py`（「」引用159件・不一致0。1語変更・架空引用・引用外「！」の負のテストで NG を確認）。証拠テキストは scratchpad b7/raw（当日 curl・HTMLコメント除去。環境省・e-Gov は第6弾の当日取得分）。
- スラッグ: 北区は kita-ku・areaName「北区（東京都）」（他市の北区と紛れるため）。
- ネズミ: 文京（専門業者の訪問診断・費用無料と明記・駆除はしない・ネズミ捕りシート1人1回）、墨田（毒エサ配布・申込不要・個別相談・PCO 有料）、江東（殺そ剤の窓口配付・業界団体紹介・公共施設の管理者表・死骸は清掃事務所）、中野（粘着シートと毒餌を無料配布 1家庭1回・区の駆除と助成はなしと明記・死骸の窓口）、荒川（バネ式/かご式トラップ貸出・冬季の殺鼠剤配付）、北（捕獲器貸し出し・サンプル配布は R3.3.31 終了・PCO）。
- 害獣: 中野（都の防除実施計画に基づく箱わな・戸建てのみ・1週間・屋外地上のみ。費用の記載なし＝「無料」と書かない）、墨田（都の許可業者に委託・「費用負担はありません」・個人依頼の補助金なしと明記）。
- 保留・未着手: 品川（PCO 案内＋町会向け支援のみ＝個人向け3項目に届かず）、目黒（保健所の侵入口探しの助言のみ）、渋谷（町会向け相談会・飲食店向け容器貸与。個人向けは業者紹介のみ）、板橋・足立（本文に配布・貸出・助成の記載が見当たらず）。多摩の市・他の23区のアライグマ／ハクビシンは Yahoo!検索がブロックされ未探索（WebSearch は上限到達）。
- sitemap 522→532。
