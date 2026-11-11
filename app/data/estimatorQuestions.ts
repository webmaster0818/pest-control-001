// TOP の見積機能（app/components/Estimator.tsx）の設問。okina 2026-11-11 承認の仕様。
// 料金の目安は app/data/estimatorPartners.ts の「提携業者の公式表記」だけから出す（独自の相場は出さない）。

export type PestCat =
  | "shiroari"
  | "gokiburi"
  | "hachi"
  | "nezumi"
  | "hakubishin"
  | "koumori"
  | "tokojirami"
  | "dani"
  | "ari"
  | "mukade"
  | "kemushi"
  | "other";

export type Building = "kodate" | "shugo-own" | "shugo-rent" | "tenpo" | "office" | "unknown";

export interface Choice {
  key: string;
  label: string;
}

/** 規模の設問（料金が変わる要素）。1ステップに最大2問 */
export interface SizeQuestion {
  key: string;
  title: string;
  choices: Choice[];
}

export interface PestCategory {
  id: PestCat;
  name: string;
  /** /images/pests/{icon}.svg */
  icon: string;
  /** 害虫・害獣ごとの解説ページ */
  hubHref: string;
  locations: Choice[];
  sizes?: SizeQuestion[];
}

const UNKNOWN: Choice = { key: "unknown", label: "わからない" };

export const PEST_CATEGORIES: PestCategory[] = [
  {
    id: "shiroari",
    name: "シロアリ",
    icon: "shiroari",
    hubHref: "/shiroari",
    locations: [
      { key: "yukashita", label: "床下" },
      { key: "hashira", label: "柱・壁・窓枠" },
      { key: "haari", label: "羽アリを見た" },
      { key: "niwa", label: "庭・ウッドデッキ" },
      UNKNOWN,
    ],
    sizes: [
      {
        key: "tsubo",
        title: "1階の広さを教えてください。",
        choices: [
          { key: "s", label: "15坪（約50㎡）未満" },
          { key: "m", label: "15〜25坪（約50〜80㎡）" },
          { key: "l", label: "25坪（約80㎡）以上" },
          UNKNOWN,
        ],
      },
    ],
  },
  {
    id: "gokiburi",
    name: "ゴキブリ",
    icon: "gokiburi",
    hubHref: "/gokiburi",
    locations: [
      { key: "kitchen", label: "キッチン・水回り" },
      { key: "room", label: "部屋の中" },
      { key: "chubo", label: "店舗の厨房" },
      { key: "soto", label: "玄関・ベランダ" },
      UNKNOWN,
    ],
    sizes: [
      {
        key: "madori",
        title: "間取りを教えてください。",
        choices: [
          { key: "s", label: "1K〜1LDK" },
          { key: "m", label: "2LDK〜3LDK" },
          { key: "l", label: "4LDK以上" },
          { key: "shop", label: "店舗・事業所" },
          UNKNOWN,
        ],
      },
    ],
  },
  {
    id: "hachi",
    name: "ハチ・ハチの巣",
    icon: "hachi",
    hubHref: "/hachi",
    locations: [
      { key: "nokishita", label: "軒下・ベランダ" },
      { key: "ki", label: "木の枝・生け垣" },
      { key: "yaneura", label: "屋根裏・壁の中" },
      { key: "tsuchi", label: "土の中" },
      { key: "kanki", label: "換気口・室外機" },
      UNKNOWN,
    ],
    sizes: [
      {
        key: "su",
        title: "巣の大きさを教えてください。",
        choices: [
          { key: "s", label: "15cm未満" },
          { key: "m", label: "15〜40cm" },
          { key: "l", label: "40cm以上" },
          { key: "none", label: "巣が見当たらない" },
          UNKNOWN,
        ],
      },
      {
        key: "takasa",
        title: "巣の高さを教えてください。",
        choices: [
          { key: "low", label: "手が届く高さ" },
          { key: "high", label: "2階・屋根などの高所" },
          UNKNOWN,
        ],
      },
    ],
  },
  {
    id: "nezumi",
    name: "ネズミ",
    icon: "nezumi",
    hubHref: "/nezumi",
    locations: [
      { key: "tenjo", label: "天井裏" },
      { key: "yukashita", label: "床下" },
      { key: "kabe", label: "壁の中" },
      { key: "kitchen", label: "キッチン・室内" },
      UNKNOWN,
    ],
  },
  {
    id: "hakubishin",
    name: "ハクビシン・アライグマ・イタチ",
    icon: "hakubishin",
    hubHref: "/hakubishin",
    locations: [
      { key: "tenjo", label: "天井裏" },
      { key: "yukashita", label: "床下" },
      { key: "kabe", label: "壁の中" },
      { key: "niwa", label: "庭・屋外" },
      UNKNOWN,
    ],
  },
  {
    id: "koumori",
    name: "コウモリ",
    icon: "koumori",
    hubHref: "/koumori",
    locations: [
      { key: "yaneura", label: "屋根裏・天井裏" },
      { key: "tobukuro", label: "戸袋・シャッターの中" },
      { key: "kanki", label: "換気口・外壁のすき間" },
      { key: "nokishita", label: "ベランダ・軒下" },
      UNKNOWN,
    ],
  },
  {
    id: "tokojirami",
    name: "トコジラミ",
    icon: "tokojirami",
    hubHref: "/tokojirami",
    locations: [
      { key: "shinshitsu", label: "寝室・ベッド" },
      { key: "sofa", label: "ソファ・家具" },
      { key: "zentai", label: "部屋全体" },
      { key: "kyakushitsu", label: "宿泊施設の客室" },
      UNKNOWN,
    ],
    sizes: [
      {
        key: "heya",
        title: "被害がある部屋の数を教えてください。",
        choices: [
          { key: "1", label: "1部屋" },
          { key: "2", label: "2〜3部屋" },
          { key: "4", label: "4部屋以上" },
          UNKNOWN,
        ],
      },
    ],
  },
  {
    id: "dani",
    name: "ダニ・ノミ",
    icon: "dani",
    hubHref: "/dani",
    locations: [
      { key: "shingu", label: "寝室・寝具" },
      { key: "tatami", label: "畳・カーペット" },
      { key: "pet", label: "ペットの周り" },
      UNKNOWN,
    ],
  },
  {
    id: "ari",
    name: "アリ",
    icon: "ari",
    hubHref: "/ari",
    locations: [
      { key: "room", label: "室内" },
      { key: "kitchen", label: "キッチン・水回り" },
      { key: "niwa", label: "庭・外壁" },
      UNKNOWN,
    ],
  },
  {
    id: "mukade",
    name: "ムカデ・クモ",
    icon: "mukade",
    hubHref: "/mukade",
    locations: [
      { key: "room", label: "室内" },
      { key: "mizumawari", label: "浴室・水回り" },
      { key: "niwa", label: "庭・家の外周り" },
      UNKNOWN,
    ],
  },
  {
    id: "kemushi",
    name: "毛虫",
    icon: "kemushi",
    hubHref: "/kemushi",
    locations: [
      { key: "niwaki", label: "庭木" },
      { key: "ikegaki", label: "生け垣" },
      { key: "gaiheki", label: "外壁・ベランダ" },
      UNKNOWN,
    ],
    sizes: [
      {
        key: "ki",
        title: "毛虫がいる木の本数を教えてください。",
        choices: [
          { key: "1", label: "1本" },
          { key: "2", label: "2〜3本" },
          { key: "4", label: "4本以上・広い範囲" },
          UNKNOWN,
        ],
      },
    ],
  },
  {
    id: "other",
    name: "わからない・その他",
    icon: "other",
    hubHref: "/faq",
    locations: [
      { key: "room", label: "室内" },
      { key: "yaneura", label: "天井裏・床下" },
      { key: "soto", label: "屋外・庭" },
      UNKNOWN,
    ],
  },
];

export const BUILDINGS: { key: Building; label: string }[] = [
  { key: "kodate", label: "戸建て" },
  { key: "shugo-own", label: "マンション・アパート（持ち家）" },
  { key: "shugo-rent", label: "マンション・アパート（賃貸）" },
  { key: "tenpo", label: "店舗・飲食店" },
  { key: "office", label: "オフィス・施設" },
  { key: "unknown", label: "わからない" },
];

export const getCategory = (id: string) => PEST_CATEGORIES.find((c) => c.id === id);
