// ブランド × エリアの店舗／対応エリアページ用データ。
//
// 【編集ルール（厳守）】
// - 値はすべて「公式サイトの表記」または「公的機関の記載」を転記したもののみ。
//   住所・電話番号・料金・対応可否を推測で書き足さないこと。
//   公式に記載が無い項目は null または「公式サイトに記載なし」と正直に書く。
// - 1件足すと /agents/{brandSlug}/{areaSlug}/ が1ページ増える（app/agents/[slug]/[area]/page.tsx）。
// - brandSlug は app/agents/agentsData.ts の slug と一致させること（ブランド本体ページへの導線に使う）。

export interface BrandAreaOffice {
  name: string;
  /** 公式表記の住所をそのまま。複数表記がある場合は両方を併記して addressNote に事情を書く。 */
  address: string;
  /** 拠点直通番号が公式に無い場合は「全社共通フリーダイヤル」等、公式表記のまま書く。 */
  phone: string;
  /** 公式が掲げる管轄エリア表記。 */
  jurisdiction: string;
  /** 住所表記が公式サイト内で食い違う等の注記。 */
  addressNote?: string;
}

export interface BrandArea {
  brandSlug: string;
  brandName: string;
  areaSlug: string;
  areaName: string;
  /** 公式のエリアページURL。無ければ null。 */
  officialAreaPage: string | null;
  offices: BrandAreaOffice[];
  /** 事業所一覧そのものに関する注記（公式サイト内の表記ゆれなど）。 */
  officesNote?: string;
  /** 公式エリアページの見出し・リード文をそのまま引用したもの。 */
  areaStatements: string[];
  /** 公式が対応対象として列挙している市区町村。列挙順は公式のまま。 */
  municipalities: string[];
  municipalitiesNote?: string;
  services: {
    /** 主な対応害獣（公式表記） */
    main: string;
    /** その他の対応（公式表記） */
    others: string | null;
    /** 作業内容（公式表記） */
    work: string;
  };
  price: {
    /** 公式の料金表記。金額の掲示が無い場合はその旨をそのまま書く。 */
    text: string;
    /** 料金方針・追加費用に関する公式の注記。 */
    note: string | null;
    /** 公式が掲示している金額。掲示が無ければ null（推測で入れない）。 */
    listedPrice: string | null;
  };
  guarantee: {
    headline: string;
    text: string;
    condition: string | null;
    afterSupport: string | null;
  };
  survey: {
    cost: string;
    speed: string | null;
  };
  hours: string;
  /** 公式が掲示しているキャンペーン表記。無ければ null。 */
  campaign: string | null;
  qualifications: string[];
  qualificationsNote?: string;
  operator: {
    name: string;
    address: string;
  };
  /** 公式サイトを確認した日（YYYY-MM-DD） */
  confirmedDate: string;
  /** 出典URL一覧 */
  sources: string[];
  /** 公式サイト上で確認できなかった項目。ページ下部に正直に出す。 */
  notFound?: string[];
}

export const brandAreas: BrandArea[] = [
  {
    // 出典: scratchpad/gaichu/house-protect.json（公式サイト調査 2026-09-25）
    brandSlug: "house-protect",
    brandName: "ハウスプロテクト",
    areaSlug: "tokyo",
    areaName: "東京都",
    officialAreaPage: "https://house-protect.net/kanto/tokyo/",
    offices: [
      {
        name: "東京本社",
        address: "〒160-0023 東京都新宿区西新宿7-22-29 エスポワール富士402",
        phone: "0120-987-282（全社共通フリーダイヤル）",
        jurisdiction:
          "東京都、埼玉県、群馬県、千葉県、栃木県、茨城県（公式 /about 事業所一覧の表記）",
        addressNote:
          "東京都内の拠点は東京本社のみ。東京本社単独の支店ページは公式サイト上に存在せず、住所はトップページ「会社概要」セクションと /about の事業所一覧に掲載されている。拠点直通の電話番号は公式サイトに記載がなく、掲載されているのは全社共通のフリーダイヤルのみ。なお2024年2月1日付の「本社移転のお知らせ」により、移転前の住所は埼玉県蕨市中央3-7-1 ジェイホームビル6F（電話番号の変更はなし）。",
      },
      {
        name: "関東支社",
        address:
          "〒252-0004 神奈川県座間市東原1-11-10-1（公式 /about 事業所一覧の表記）／〒227-0044 神奈川県横浜市青葉区もえぎ野22−41 藤ヶ丘テラスハウスもえぎ野B（トップページ「会社概要」の表記）",
        phone: "0120-987-282（全社共通フリーダイヤル）",
        jurisdiction:
          "神奈川県、山梨県、東京都の一部、静岡県東部（公式 /about 事業所一覧の表記）",
        addressNote:
          "公式サイト内で関東支社の住所が2種類あり食い違っている（座間市／横浜市青葉区）。どちらも公式表記のため、編集部では一方に断定せず両方をそのまま掲載している。管轄エリアに「東京都の一部」と書かれているため、東京都に関わる拠点として併記した。",
      },
    ],
    officesNote:
      "公式サイト内に事業所一覧が2種類併記されている（トップページ「会社概要」の7拠点リストと、/about ページの9拠点リスト）。両者で関東支社の住所が異なる。編集部ではどちらが最新かを公式サイト上で確認できなかったため、両方の表記をそのまま記載している。",
    areaStatements: [
      "ハウスプロテクトは東京都全域対応の害獣駆除専門業者です。",
      "当社、「ハウスプロテクト」では、東京都の害獣を徹底駆除！再発も徹底的に防止します！",
      "東京都全域対応！出張費０円！",
      "-現地調査・お見積り無料-",
      "-最長10年の保証付きで安心！",
      "最短即日30分で駆けつけ！現場調査・お見積り・出張費用すべて０円です。",
    ],
    municipalities: [
      "千代田区",
      "中央区",
      "港区",
      "新宿区",
      "文京区",
      "台東区",
      "墨田区",
      "江東区",
      "品川区",
      "目黒区",
      "大田区",
      "世田谷区",
      "渋谷区",
      "中野区",
      "杉並区",
      "豊島区",
      "北区",
      "荒川区",
      "板橋区",
      "練馬区",
      "足立区",
      "葛飾区",
      "江戸川区",
      "八王子市",
      "立川市",
      "武蔵野市",
      "三鷹市",
      "青梅市",
      "府中市",
      "昭島市",
      "調布市",
      "町田市",
      "小金井市",
      "小平市",
      "日野市",
      "東村山市",
      "国分寺市",
      "国立市",
      "福生市",
      "狛江市",
      "東大和市",
      "清瀬市",
      "東久留米市",
      "武蔵村山市",
      "多摩市",
      "稲城市",
      "羽村市",
      "あきる野市",
      "西東京市",
      "西多摩郡 (瑞穂町 / 日の出町 / 檜原村 / 奥多摩町)",
    ],
    municipalitiesNote:
      "上記は公式サイトの東京都ページに列挙されている市区町村をそのまま転記したもの。島嶼部（三宅村など）については、公式ページ上に対応可否の記載がない。また、東京都内の市区町村ごとの個別ページは公式サイトに存在しない（公式 page-sitemap.xml 上で市区町村単位のページが存在するのは横浜市・さいたま市・所沢市・京都市・福岡市のみ）。",
    services: {
      main: "ネズミ / イタチ / ハクビシン / アライグマ / コウモリ",
      others:
        "これらの害獣のほか、ムササビやアナグマ、シロアリ、ハチなど、幅広い害獣・害虫駆除に対応しています。",
      work:
        "追い出し（自社開発を含む3種類の薬剤）/ 侵入口の封鎖 / 除菌消臭 / 忌避剤設置 / 糞清掃 / 建物の修繕（天井の修繕等）",
    },
    price: {
      listedPrice: null,
      text:
        "ハウスプロテクトでは無料で調査・お見積もりを実施しています。具体的な見積もり要件には以下のような項目がございます。／料金を決める3つの要素 → 施工代金の算出／※その他オプション、保証内容、サービス日時等によって料金が変動する場合があります。詳しくはお問い合わせください。",
      note:
        "公式サイトは「誇大広告にNO！／安すぎる料金や根拠のない数字は記載しません！」「『駆除代金9,800円〜』といった、人件費、交通費などのコストを考えればあり得ない料金表示を行っている業者には十分にご注意ください。」と明記し、自社の駆除料金の金額を掲示しない方針をとっている。追加費用については「当社でも追加で修繕などのご提案を行うことはありますが、原則として最初の見積もり以外には一切追加費用は掛かりません」と記載。",
    },
    guarantee: {
      headline: "アフターフォローも安心の10年保証 / 最長10年の安心保証付き！",
      text:
        "「再発防止」は口約束だけではありません。お客様に本当の意味での安心を提供するため、ハウスプロテクトでは、業界最長クラスの保証期間を設けております。万が一再発した場合も期間内であれば無償で対応いたします。",
      condition:
        "※保証期間は築年数や施工内容などによって変動します。詳しくは現場調査時にご説明致します。",
      afterSupport: "保証期間中は無償にて点検・補修作業を行います。",
    },
    survey: {
      cost: "現場調査・お見積り・出張費用すべて０円（調査・見積もり0円）",
      speed: "最短即日30分で駆けつけ！（東京都ページの表記）",
    },
    hours: "年中無休 24時間受付 / 24時間365日、お電話受付中！（電話 0120-987-282）",
    campaign:
      "当サイトをご覧の方限定！駆除代金20％OFFキャンペーン実施中！（公式サイトの東京都ページ内バナー表記）",
    qualifications: [
      "わな猟狩猟免状（大わな 第03228号 / 大わな 第04209号 / 大わな 第05112号 ほか、会社概要には第040149201号・第200087号・第200088号・第200016号・第200003号・第200112号・福農わな猟22第0081〜0083号を掲載）",
      "第1041012号",
      "第3951号",
      "防第16708号 / 防第16638号 / 防第16676号",
      "危険物取扱者免状乙種2類00205",
      "危険物取扱者免状乙種4類12344",
      "しろあり防除施工士9704",
      "蟻害・腐朽検査士 神奈川県-14-0062",
      "第二種電気工事士 大阪府第108657号",
    ],
    qualificationsNote:
      "公式 /about に「所有資格一覧／免許一覧」として番号のみが列挙されており、各番号がどの資格・許可に対応するかの説明は公式サイト上にない。編集部では資格名の推定を行わず、掲載されている表記をそのまま転記している。建設業許可番号や法人登記番号の記載は公式サイト上に見当たらなかった。",
    operator: {
      name: "株式会社GROWTH",
      address: "〒160-0023 東京都新宿区西新宿7-22-29 エスポワール富士402",
    },
    confirmedDate: "2026-09-25",
    sources: [
      "https://house-protect.net/",
      "https://house-protect.net/about",
      "https://house-protect.net/kanto/tokyo/",
      "https://house-protect.net/kanto/tokyo/mouse/",
      "https://house-protect.net/kanto/tokyo/itachi/",
      "https://house-protect.net/kanto/tokyo/hakubishin/",
      "https://house-protect.net/kanto/tokyo/araiguma/",
      "https://house-protect.net/kanto/tokyo/bat/",
      "https://house-protect.net/gaijuu/",
      "https://house-protect.net/page-sitemap.xml",
    ],
    notFound: [
      "駆除料金の具体的な金額（公式サイトに一切の掲示なし。方針として非掲示）",
      "東京都内拠点の直通電話番号（全社共通フリーダイヤル 0120-987-282 のみ）",
      "東京本社の支店個別ページ（存在しない）",
      "東京都の市区町村ごとの個別ページ（存在しない）",
      "設立年月日・資本金・代表者名（公式 /about の代表メッセージは「代表取締役 / 名前 名前」とプレースホルダーのままで実名記載なし）",
      "法人登記番号・建設業許可番号（記載なし。掲載されているのは狩猟免状等の免許番号のみ）",
      "島嶼部（三宅村など）の対応可否（公式の市区町村列挙に記載なし）",
    ],
  },
];

export function getBrandArea(
  brandSlug: string,
  areaSlug: string
): BrandArea | undefined {
  return brandAreas.find(
    (b) => b.brandSlug === brandSlug && b.areaSlug === areaSlug
  );
}
