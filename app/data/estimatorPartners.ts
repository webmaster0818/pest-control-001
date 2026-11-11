// 見積機能で表示する提携業者（affiliateCodes.ts にコードがある9社）。
// 値はすべて各社公式サイトの表記（確認日は checked）。公式で確認できない項目は null にして、画面に「公式に記載なし」と出す。
// 料金の目安はここの prices だけから出す。数値（min/max）は公式表記の数字をそのまま入れ、推測で補わない。
import type { PestCat } from "./estimatorQuestions";
import { REGIONS } from "./regions";

export type BuildingKind = "kodate" | "shugo" | "tenpo" | "office";

export interface EstPrice {
  cat: PestCat;
  /** 公式の項目名 */
  label: string;
  /** 公式表記のまま */
  price: string;
  tax: "税込" | "税抜" | "税の表記なし";
  /** 表記の下限・上限（円）。「〜」だけなら max は無し */
  min?: number;
  max?: number;
  note?: string;
  /** false=料金の目安（見出しの金額）の計算に使わない（1㎡・1坪あたり、単位の記載がない基本料金など） */
  inSummary?: boolean;
  /** 追加費用の行（「追加になりやすい費用」に出す） */
  extra?: boolean;
  /** 規模の回答と合う行を強調する（sizeKey -> choice keys） */
  match?: Record<string, string[]>;
  url: string;
}

export interface EstPartner {
  slug: string;
  name: string;
  cats: PestCat[];
  /** "all" または都道府県 slug（app/data/regions.ts） */
  prefs: "all" | string[];
  areaText: string;
  /** true=公式に対応の記載あり / false=対象外の記載あり / null=公式に記載なし */
  buildings: Record<BuildingKind, boolean | null>;
  prices: EstPrice[];
  /** 料金表が無い社の説明（公式表記） */
  priceNote?: string;
  freeEstimate: boolean | null;
  freeText: string;
  reception24h: boolean | null;
  receptionText: string;
  warranty: string;
  sourceUrl: string;
  checked: string;
}

export const ESTIMATOR_CHECKED = "2026年11月11日";

const MP = "https://mushi-protec.info/question/index.html";
const EB = "https://okwave-solution.com/lp/gaichu_e_buster/";

export const estimatorPartners: EstPartner[] = [
  {
    slug: "hachi-buster",
    name: "蜂バスター",
    cats: ["hachi"],
    prefs: "all",
    areaText: "全国（離島を除く）",
    buildings: { kodate: true, shugo: null, tenpo: null, office: true },
    prices: [
      { cat: "hachi", label: "ミツバチ（基本料金）", price: "2,900円〜（税込）", tax: "税込", min: 2900, url: "https://hachibuster.jp/" },
      { cat: "hachi", label: "アシナガバチ（基本料金）", price: "4,000円〜（税込）", tax: "税込", min: 4000, url: "https://hachibuster.jp/" },
      { cat: "hachi", label: "スズメバチ類（基本料金）", price: "15,000円〜（税込）", tax: "税込", min: 15000, url: "https://hachibuster.jp/" },
      { cat: "hachi", label: "作業代金・追加料金", price: "別途", tax: "税の表記なし", extra: true, note: "記載価格は基本料金で、作業代金は巣の規模・現場の状況で変わる。巣が40cm以上になると追加料金が加算されるケースがほとんど（公式の料金ページ）", url: "https://hachibuster.jp/hachikujofee/", match: { su: ["l"], takasa: ["high"] } },
    ],
    freeEstimate: true,
    freeText: "見積もり無料",
    reception24h: true,
    receptionText: "24時間365日（電話）",
    warranty: "公式に記載なし",
    sourceUrl: "https://hachibuster.jp/",
    checked: "2026-11-11",
  },
  {
    slug: "mushi-protec",
    name: "ムシプロテック",
    cats: ["shiroari", "gokiburi", "hachi", "nezumi", "tokojirami", "dani", "mukade", "kemushi"],
    prefs: "all",
    areaText: "全国（一部の離島を除く）",
    buildings: { kodate: true, shugo: true, tenpo: true, office: true },
    prices: [
      { cat: "gokiburi", label: "ゴキブリ駆除（基本料金）", price: "8,000円（税抜）〜", tax: "税抜", min: 8000, url: MP },
      { cat: "shiroari", label: "シロアリ駆除（基本料金）", price: "4,000円（税抜）〜", tax: "税抜", min: 4000, inSummary: false, note: "単位の記載なし", url: MP },
      { cat: "shiroari", label: "シロアリ駆除（1階床面積20坪の例）", price: "おおむね80,000円（外税）", tax: "税抜", min: 80000, url: MP, match: { tsubo: ["m"] } },
      { cat: "dani", label: "ダニ・ノミ駆除（基本料金）", price: "15,000円（税抜）〜", tax: "税抜", min: 15000, url: MP },
      { cat: "hachi", label: "ハチ駆除（基本料金）", price: "8,000円（税抜）〜", tax: "税抜", min: 8000, url: MP },
      { cat: "hachi", label: "巣が見当たらない場合", price: "出張費と必要経費", tax: "税の表記なし", extra: true, url: MP, match: { su: ["none"] } },
    ],
    freeEstimate: true,
    freeText: "見積もり無料",
    reception24h: true,
    receptionText: "電話・メールは24時間365日（作業は朝8時〜夜10時）",
    warranty: "改善しなかった場合は無料で再施工（期間は害虫の種類で異なる）",
    sourceUrl: "https://mushi-protec.info/",
    checked: "2026-11-11",
  },
  {
    slug: "e-buster",
    name: "イーバスター",
    cats: ["shiroari", "gokiburi", "hachi", "tokojirami", "dani", "ari", "mukade", "kemushi"],
    // 本文は「全国」、対応エリアの地図画像は「沖縄・北海道除く」。厳しいほうに合わせる
    prefs: REGIONS.flatMap((r) => r.prefs.map(([, s]) => s)).filter((s) => s !== "hokkaido" && s !== "okinawa"),
    areaText: "全国（対応エリアの地図では北海道・沖縄を除く）",
    buildings: { kodate: true, shugo: true, tenpo: true, office: true },
    prices: [
      { cat: "gokiburi", label: "ゴキブリ 一般家庭（1K〜3LDK）", price: "6,600円〜25,000円前後", tax: "税の表記なし", min: 6600, max: 25000, note: "再発防止処理を含むと＋5,000〜10,000円ほど", url: EB, match: { madori: ["s", "m"] } },
      { cat: "gokiburi", label: "ゴキブリ 飲食店や店舗", price: "6,600円〜50,000円前後", tax: "税の表記なし", min: 6600, max: 50000, url: EB, match: { madori: ["shop"] } },
      { cat: "hachi", label: "アシナガバチ", price: "6,600円〜20,000円前後", tax: "税の表記なし", min: 6600, max: 20000, note: "巣の大きさ・場所（屋根裏や高所）で変動", url: EB },
      { cat: "hachi", label: "スズメバチ", price: "6,600円〜35,000円前後", tax: "税の表記なし", min: 6600, max: 35000, url: EB },
      { cat: "hachi", label: "ミツバチ", price: "6,600円〜30,000円前後", tax: "税の表記なし", min: 6600, max: 30000, url: EB },
      { cat: "mukade", label: "クモ・ムカデ 1回施工", price: "6,600円〜20,000円前後", tax: "税の表記なし", min: 6600, max: 20000, url: EB },
      { cat: "mukade", label: "クモ・ムカデ 年間管理プラン（定期防除）", price: "30,000円〜60,000円前後", tax: "税の表記なし", min: 30000, max: 60000, inSummary: false, url: EB },
      { cat: "shiroari", label: "シロアリ・クロアリ 1坪あたり", price: "1,580円〜6,000円前後", tax: "税の表記なし", min: 1580, max: 6000, inSummary: false, url: EB },
      { cat: "shiroari", label: "シロアリ・クロアリ 一般家庭（20坪の場合）", price: "80,000円〜120,000円前後", tax: "税の表記なし", min: 80000, max: 120000, url: EB, match: { tsubo: ["m"] } },
      { cat: "ari", label: "シロアリ・クロアリ 1坪あたり", price: "1,580円〜6,000円前後", tax: "税の表記なし", min: 1580, max: 6000, inSummary: false, url: EB },
      { cat: "tokojirami", label: "トコジラミ・ダニ 1部屋（6畳）あたり", price: "6,600円〜35,000円前後", tax: "税の表記なし", min: 6600, max: 35000, url: EB, match: { heya: ["1"] } },
      { cat: "dani", label: "トコジラミ・ダニ 1部屋（6畳）あたり", price: "6,600円〜35,000円前後", tax: "税の表記なし", min: 6600, max: 35000, url: EB },
      { cat: "kemushi", label: "ケムシ 1本の木・1箇所あたり", price: "6,680円〜15,000円前後", tax: "税の表記なし", min: 6680, max: 15000, note: "広範囲・高木は作業費が加算", url: EB, match: { ki: ["1"] } },
      ...(["shiroari", "gokiburi", "hachi", "tokojirami", "dani", "ari", "mukade", "kemushi"] as PestCat[]).flatMap((c): EstPrice[] => [
        { cat: c, label: "高所作業（屋根裏・軒先など）", price: "3,300円〜", tax: "税の表記なし", extra: true, url: EB, ...(c === "hachi" ? { match: { takasa: ["high"] } } : {}) },
        { cat: c, label: "原因調査・現地診断料", price: "8,800円〜", tax: "税の表記なし", extra: true, note: "同じページに「現地調査・見積もりまで全て無料」とも記載。依頼前に確認を", url: EB },
      ]),
    ],
    freeEstimate: true,
    freeText: "現地調査・見積もりまで無料と記載（料金表には原因調査・現地診断料 8,800円〜の記載もあり）",
    reception24h: true,
    receptionText: "24時間365日",
    warranty: "最高10年の無料再発保証（公式ページの画像の表記）",
    sourceUrl: EB,
    checked: "2026-11-11",
  },
  {
    slug: "kujo-oh",
    name: "害獣害虫駆除王",
    cats: ["shiroari", "gokiburi", "hachi", "nezumi", "hakubishin", "koumori"],
    prefs: ["osaka", "kyoto", "hyogo", "shiga", "nara", "wakayama", "mie", "gifu", "aichi", "saitama", "kanagawa", "tokyo"],
    areaText: "関西（大阪・京都・兵庫・滋賀・奈良・和歌山）、東海（三重・岐阜・愛知）、関東（埼玉・神奈川・東京）",
    buildings: { kodate: true, shugo: true, tenpo: true, office: true },
    prices: [
      { cat: "nezumi", label: "ネズミ駆除 定額パッケージ（新規のみ）", price: "29,800円（税込・工賃含む）", tax: "税込", min: 29800, note: "侵入口の封鎖は別見積もり。点検口の作成・コインパーキング代・部材の増加は追加の場合あり", url: "https://kujo-oh.com/nezumikujopac/" },
      { cat: "shiroari", label: "シロアリ駆除", price: "1平米1,000円〜", tax: "税の表記なし", min: 1000, inSummary: false, url: "https://kujo-oh.com/gaichukujo/" },
    ],
    freeEstimate: true,
    freeText: "見積もり・調査無料",
    reception24h: null,
    receptionText: "公式に記載なし",
    warranty: "害獣は封鎖した施工箇所の永久保証（諸条件あり）、シロアリ防除は5年",
    sourceUrl: "https://kujo-oh.com/",
    checked: "2026-11-11",
  },
  {
    slug: "house-guard-24",
    name: "ハウスガード24",
    cats: ["nezumi", "hakubishin", "koumori"],
    prefs: ["tokyo", "kanagawa", "saitama", "chiba", "gunma", "tochigi", "ibaraki", "yamanashi", "shizuoka"],
    areaText: "東京・神奈川・埼玉・千葉・群馬・栃木・茨城・山梨・静岡（離島を除く）",
    // 公式本文「戸建て住宅を対象に」・賃貸物件は対象外
    buildings: { kodate: true, shugo: false, tenpo: null, office: null },
    prices: (["nezumi", "hakubishin", "koumori"] as PestCat[]).map((c): EstPrice => ({
      cat: c,
      label: "害獣駆除料金（公式サイトからの申込み・対応エリアの戸建て）",
      price: "8,000円（税込）から",
      tax: "税込",
      min: 8000,
      url: "https://houseguard24.saki-x.jp/",
    })),
    freeEstimate: true,
    freeText: "現地調査・見積もり無料（見積もり後に断っても費用はかからない）",
    reception24h: true,
    receptionText: "24時間365日（電話）",
    warranty: "施工箇所に限り永年保証（条件あり）",
    sourceUrl: "https://houseguard24.saki-x.jp/",
    checked: "2026-11-11",
  },
  {
    slug: "gaiju-safe-guard",
    name: "害獣セーフガード",
    cats: ["nezumi", "hakubishin", "koumori"],
    prefs: ["aichi", "shizuoka", "gifu", "mie", "shiga"],
    areaText: "愛知・静岡・岐阜・三重・滋賀の公式サイト掲載の市町村（静岡は浜松市の一部・磐田・掛川・袋井・湖西、滋賀は大津市・高島市を含まないなど）",
    buildings: { kodate: null, shugo: null, tenpo: null, office: null },
    prices: (["nezumi", "hakubishin", "koumori"] as PestCat[]).map((c): EstPrice => ({
      cat: c,
      label: "駆除料金",
      price: "9,000円～",
      tax: "税の表記なし",
      min: 9000,
      url: "https://gaiju-safe-guard.com/",
    })),
    freeEstimate: true,
    freeText: "出張・調査・見積もり無料（作業内容によっては調査費がかかる場合あり）",
    reception24h: true,
    receptionText: "24時間365日（電話）",
    warranty: "最長10年（半年から選べる）",
    sourceUrl: "https://gaiju-safe-guard.com/",
    checked: "2026-11-11",
  },
  {
    slug: "house-protect",
    name: "ハウスプロテクト",
    cats: ["shiroari", "hachi", "nezumi", "hakubishin", "koumori"],
    prefs: ["tokyo", "kanagawa", "saitama", "gunma", "chiba", "tochigi", "yamanashi", "osaka", "kyoto", "hyogo", "shiga", "nara", "wakayama", "aichi", "gifu", "mie", "shizuoka", "nagano", "okayama", "hiroshima", "yamaguchi", "tottori", "shimane", "kagawa", "ehime", "tokushima", "kochi", "fukuoka", "kumamoto", "nagasaki", "saga", "oita"],
    areaText: "関東（茨城を除く6都県）・山梨・関西・東海・長野・中国・四国・九州の一部（32府県）",
    buildings: { kodate: true, shugo: null, tenpo: null, office: null },
    prices: [],
    priceNote: "公式に料金表なし（現地調査のうえで見積もり）",
    freeEstimate: true,
    freeText: "現場調査・見積もり・出張費すべて0円",
    reception24h: true,
    receptionText: "年中無休・24時間受付",
    warranty: "10年保証（築年数・施工内容で変動）",
    sourceUrl: "https://house-protect.net/",
    checked: "2026-11-11",
  },
  {
    slug: "protec",
    name: "害獣プロテック",
    cats: ["shiroari", "hachi", "nezumi", "hakubishin", "koumori"],
    prefs: ["chiba", "saitama", "tokyo", "tochigi", "kanagawa", "gunma", "ibaraki", "mie", "kyoto", "hyogo", "wakayama", "osaka", "nara", "shiga", "gifu", "aichi", "shizuoka", "saga", "oita", "yamaguchi", "kumamoto", "fukuoka", "nagasaki", "toyama", "yamanashi", "niigata", "ishikawa", "fukui", "nagano", "fukushima"],
    areaText: "関東・関西・東海・北陸・中部・九州の一部と山口・福島（30府県）",
    buildings: { kodate: true, shugo: null, tenpo: null, office: null },
    prices: [],
    priceNote: "公式に料金表なし（現地調査のうえで見積もり）",
    freeEstimate: true,
    freeText: "相談・現地調査・見積もり・出張費すべて0円",
    reception24h: true,
    receptionText: "24時間365日（コールセンター）",
    warranty: "最長10年の破損保証（条件あり）",
    sourceUrl: "https://gaiju-kujo.co.jp/",
    checked: "2026-11-11",
  },
  {
    slug: "machikado-gaiju-kujo",
    name: "街角害獣駆除相談所",
    cats: ["shiroari", "gokiburi", "hachi", "nezumi", "hakubishin", "koumori", "ari", "mukade"],
    prefs: ["tokyo", "kanagawa", "saitama", "chiba", "ibaraki", "tochigi", "gunma"],
    areaText: "関東1都6県",
    // 公式の申込みフォームの建物の選択肢（一戸建て・マンション・アパート等・オフィス・寺院・店舗）
    buildings: { kodate: true, shugo: true, tenpo: true, office: true },
    prices: [],
    priceNote: "公式に料金表なし（紹介先の業者が見積もり）",
    freeEstimate: true,
    freeText: "現地調査0円・見積もり無料（作業車等が必要な場合を除く）",
    reception24h: null,
    receptionText: "6:00〜20:00（公式ページ本文の表記）",
    warranty: "最長5年（公式ページのよくある質問）",
    sourceUrl: "https://kujo.machikado-sodan.com/ab/jYpwRJkgpYvlZTaUA",
    checked: "2026-11-11",
  },
];
