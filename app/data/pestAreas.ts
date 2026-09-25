// エリア × 害虫・害獣種別の比較ページ用データ。
//
// 【編集ルール（厳守）】
// - legalNotes は「公的機関のページに書かれている文章」をそのまま転記し、必ず org（機関名）と source（URL）を付ける。
//   編集部による法解釈・要約での断定は書かない。
// - damage も公的機関の記載に基づくもののみ。出典の機関名を文末に併記する。
// - companySlugs は app/agents/agentsData.ts の servicesAnimals に当該害獣の記載がある社だけを選ぶ。
//   並び順はページ側で partnerTier 順（affiliated → candidate → other）にソートする。順位づけはしない。
// - 1件足すと /pest/{pestSlug}/{areaSlug}/ が1ページ増える（app/pest/[pest]/[area]/page.tsx）。
//   既存の静的ページ（app/pest/cockroach|dani|nezumi|termite|wasp 配下）と同じ組み合わせは
//   ページ側の除外ロジックで自動的にスキップされる。

export interface PestAreaLegalNote {
  /** 公的機関ページの記載をそのまま転記 */
  text: string;
  /** 機関名 */
  org: string;
  /** 出典URL */
  source: string;
  /** 確認日（YYYY-MM-DD） */
  confirmedDate: string;
}

export interface PestAreaGovContact {
  name: string;
  url: string;
  text: string;
  confirmedDate: string;
}

export interface PestArea {
  pestSlug: string;
  pestName: string;
  areaSlug: string;
  areaName: string;
  intro: string[];
  legalNotes: PestAreaLegalNote[];
  govContacts: PestAreaGovContact[];
  /** 被害の種類。出典機関名を文末に併記する。 */
  damage: string[];
  /** agentsData.ts の slug。servicesAnimals に当該害獣の記載がある社のみ。 */
  companySlugs: string[];
  /** 業者を選ぶときの確認項目 */
  checkPoints: string[];
  /** 今回の調査で裏付けが取れなかったこと。ページ上に正直に出す。 */
  cautions: string[];
  /** 単体の害獣ページへのパス（/itachi など）。省略時は /{pestSlug} を使う。 */
  pestPagePath?: string;
  confirmedDate: string;
}

export const pestAreas: PestArea[] = [
  {
    // 出典: scratchpad/gaichu/itachi-tokyo.json（公的機関サイト調査 2026-09-25）
    pestSlug: "itachi",
    pestName: "イタチ",
    areaSlug: "tokyo",
    areaName: "東京都",
    pestPagePath: "/itachi",
    intro: [
      "東京都でイタチの被害に困っている方向けに、公的機関が公開している情報と、当サイトに掲載している駆除業者のうちイタチ対応の記載がある会社を整理しました。",
      "イタチは鳥獣保護管理法の対象で、捕獲には許可が必要です。まず知っておくべき法令の話と、都・区市の相談窓口を先に案内し、そのうえで業者の比較情報を掲載しています。",
      "本ページの法令に関する記述は、環境省・東京都・区市の公式ページに書かれている内容の範囲にとどめています。編集部による法解釈は行っていません。",
    ],
    legalNotes: [
      {
        text: "鳥獣又は鳥類の卵については、狩猟により捕獲する場合を除いて、原則としてその捕獲、殺傷又は採取が禁止されています。",
        org: "環境省（捕獲許可制度の概要）",
        source: "https://www.env.go.jp/nature/choju/capture/capture1.html",
        confirmedDate: "2026-09-25",
      },
      {
        text: "生態系や農林水産業に対して、鳥獣による被害等が生じている場合や学術研究上の必要性が認められる場合などには、環境大臣又は都道府県知事の許可を受けて、鳥獣又は鳥類の卵を捕獲等することが認められています。",
        org: "環境省（捕獲許可制度の概要）",
        source: "https://www.env.go.jp/nature/choju/capture/capture1.html",
        confirmedDate: "2026-09-25",
      },
      {
        text: "環境大臣の許可の対象は「国指定鳥獣保護区内、希少鳥獣の捕獲等の場合及びかすみ網を用いた捕獲の場合」、都道府県知事の許可の対象は「大臣許可の対象となるもの以外の鳥獣の捕獲等の場合」（多くの都道府県で市町村長に一部権限を移譲）。",
        org: "環境省（捕獲許可制度の概要）",
        source: "https://www.env.go.jp/nature/choju/capture/capture1.html",
        confirmedDate: "2026-09-25",
      },
      {
        text: "狩猟鳥獣の一覧に「イタチ（雄）、シベリアイタチ（長崎県対馬市の個体群を除く。）」と記載。すなわちイタチは雄のみが狩猟鳥獣であり、雌は狩猟鳥獣ではない。狩猟を行うには「狩猟免許を受ける」ことと「狩猟をしようとする都道府県に登録し、所定の狩猟税を納付する」ことが必要。狩猟期間は本州以南で毎年11月15日～翌年2月15日が基本。",
        org: "環境省（狩猟制度の概要）",
        source: "https://www.env.go.jp/nature/choju/hunt/hunt2.html",
        confirmedDate: "2026-09-25",
      },
      {
        text: "全ての野生鳥獣は捕獲することができません。ただし、狩猟制度に基づき、狩猟鳥獣を捕獲する場合、学術研究の目的などで、法による許可を受けた場合を除きます。",
        org: "東京都環境局（野生鳥獣の捕獲について）",
        source: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/birds/capture",
        confirmedDate: "2026-09-25",
      },
      {
        text: "有害鳥獣捕獲は「被害が現に生じているか又はそのおそれのある場合に、その防止及び軽減を図るために行うもの」であり、「原則として被害防除対策によっても被害等が防止できないと認められるときに行うもの」。",
        org: "東京都環境局（野生鳥獣の捕獲について）",
        source: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/birds/capture",
        confirmedDate: "2026-09-25",
      },
      {
        text: "鳥獣保護管理法（鳥獣の保護及び管理並びに狩猟の適正化に関する法律）により許可なく鳥獣を捕獲・殺傷すること、飼うことは禁止されている。",
        org: "練馬区（野生鳥獣との接し方）",
        source: "https://www.city.nerima.tokyo.jp/kurashi/sumai/machibika/yaseidoubutu.html",
        confirmedDate: "2026-09-25",
      },
      {
        text: "野生鳥獣は、「鳥獣の保護及び狩猟の適正化に関する法律（鳥獣保護法）」により保護されており、原則として捕獲や飼育が禁止されています。",
        org: "町田市（野生鳥獣に関する相談先）",
        source: "https://www.city.machida.tokyo.jp/iryo/hokenjo/pet/tori/yaseichoju.html",
        confirmedDate: "2026-09-25",
      },
      {
        text: "イタチ等の野生鳥獣を捕獲することは、『鳥獣の保護及び管理並びに狩猟の適正化に関する法律』により禁止されています。（自身で捕獲する場合は有害鳥獣捕獲許可が必要）",
        org: "北九州市（よくある相談と対策【イタチ】）※東京都以外の自治体。イタチを名指しした公的記載として参考掲載",
        source: "https://www.city.kitakyushu.lg.jp/contents/27500011.html",
        confirmedDate: "2026-09-25",
      },
      {
        text: "イタチを捕獲するには鳥獣保護法に基づく許可が必要で、許可を取らずに捕まえることはできません。",
        org: "東大阪市（イタチの被害にお困りの方へ）※東京都以外の自治体。参考掲載",
        source: "https://www.city.higashiosaka.lg.jp/0000022078.html",
        confirmedDate: "2026-09-25",
      },
      {
        text: "イタチ捕獲するには、市町村長の捕獲許可が必要ですので（お住まいの市町村窓口にご相談ください）",
        org: "大阪府（イタチでお困りの方へ）※東京都以外の自治体。許可権者の記載は自治体により異なる点に注意",
        source: "https://www.pref.osaka.lg.jp/o120140/doubutu/yaseidoubutu/itachi.html",
        confirmedDate: "2026-09-25",
      },
    ],
    govContacts: [
      {
        name: "東京都環境局 自然環境部計画課 鳥獣保護管理担当（23区内の捕獲申請窓口）",
        url: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/birds/capture",
        text: "23区内の申請窓口は「東京都環境局自然環境部計画課 鳥獣保護管理担当」（東京都新宿区西新宿2-8-1 東京都庁第二本庁舎19階／電話 03-5388-3505）。多摩地区は「東京都多摩環境事務所自然環境課 鳥獣保護管理担当」（東京都立川市錦町4-6-3 東京都立川合同庁舎3階／電話 042-521-2948）。ページには「全ての野生鳥獣は捕獲することができません」「有害鳥獣捕獲は原則として被害防除対策によっても被害等が防止できないと認められるときに行うもの」と記載。なおページ本文にイタチの記載はなく、掲載されている有害鳥獣はニホンジカ、イノシシ、ニホンザル、カラス類、ドバト、ムクドリ、アライグマ、ハクビシン。",
        confirmedDate: "2026-09-25",
      },
      {
        name: "東京都環境局「野生鳥獣による被害にお困りの方へ」",
        url: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/400100a20230418133155014",
        text: "「ニホンジカ、イノシシ、ニホンザル、ハシボソガラス、ハシブトガラス、ドバト、ムクドリなどを有害鳥獣捕獲の対象としています。また、アライグマ、ハクビシンについても、外来生物として有害鳥獣捕獲の対象としています。」イタチはこの列挙に含まれていない。有害鳥獣捕獲許可事業者リストが掲載されている。",
        confirmedDate: "2026-09-25",
      },
      {
        name: "練馬区「野生鳥獣との接し方」",
        url: "https://www.city.nerima.tokyo.jp/kurashi/sumai/machibika/yaseidoubutu.html",
        text: "「家の床下に住み着いている場合は、動物がいなくなった後に侵入口をふさぐなど、対処を行ってください」と記載。相談先として「東京都環境局自然環境部計画課 鳥獣保護管理担当 電話：03-5388-3505」、駆除業者の相談先として「公益社団法人東京都ペストコントロール協会 電話：03-3254-0014」を案内。本文はタヌキ・キツネ等が中心で、イタチの名指しの記載はない。",
        confirmedDate: "2026-09-25",
      },
      {
        name: "町田市「野生鳥獣に関する相談先」",
        url: "https://www.city.machida.tokyo.jp/iryo/hokenjo/pet/tori/yaseichoju.html",
        text: "「家屋基礎のコンクリートにある通風口や、屋根と屋根が重なりあっている所の奥が十分に塞がれていない場合、家屋内に侵入される恐れがあります。」「屋根裏等に住み着かれて追い払いたい場合、市販の煙による害虫忌避剤・殺虫剤等が、役にたつとされています。」相談先は多摩環境事務所自然環境課鳥獣保護管理担当（042-521-2948）、保健所 生活衛生課 愛護動物係（042-722-6727）。対象として挙げられているのはアライグマ、タヌキ、ハクビシンで、イタチの記載はない。",
        confirmedDate: "2026-09-25",
      },
      {
        name: "八王子市「市街地の生活環境被害防止に係る有害獣捕獲事業の実施について」",
        url: "https://www.city.hachioji.tokyo.jp/kurashi/sangyo/004/jyugai/p037104.html",
        text: "対象は「有害獣（アライグマ・ハクビシン・タヌキ・アナグマ）」と列挙され、イタチは含まれていない。「箱わなの設置をご希望される場合は、農林振興・獣害対策課（獣害対策担当）へご相談ください。」",
        confirmedDate: "2026-09-25",
      },
    ],
    damage: [
      "生活環境被害(敷地内におけるふん尿・臭気・騒音等や建築物の破損・棲みつき等、及び敷地内の飼育動物又は庭木果実等の被害)（八王子市／イタチを名指しした記載ではなく、有害獣一般の生活環境被害の定義）",
      "天井裏を走り回ってうるさい、尿や糞の臭いがひどい、車に侵入され配線を噛まれて故障した（北九州市「よくある相談と対策【イタチ】」）",
      "天井裏で子育てをして、糞や尿の臭いがひどい／天井裏を走り回ってうるさい／台所や店の中へ侵入し、食品や商品を荒らしたり、まわりを汚したりする（大阪府「イタチでお困りの方へ」）",
      "すでにある穴や隙間を巣に使い、都市部では屋根裏や床下に住み着かれるなどの被害があります（東大阪市「イタチの被害にお困りの方へ」）",
      "ニホンイタチとの競合、地域の貴重種・希少種への捕食圧。農業被害。家屋への侵入。寄生虫の媒介（国立環境研究所 侵入生物データベース／チョウセンイタチの影響として）",
      "追い払い後に、侵入口となりうる場所(3センチメートル四方より大きな隙間など)を金属製のネットなどで塞ぎ、侵入されることを防ぎましょう（東大阪市／侵入防止に関する公的記載）",
    ],
    // 選定理由: app/agents/agentsData.ts の servicesAnimals に「イタチ」の記載がある社のみを選定した。
    //   kujo-zaurus  … "イタチ、アライグマ、ハクビシン、コウモリ、ネズミ など。" → 記載あり
    //   house-protect … "ネズミ、イタチ、ハクビシン、アライグマ、コウモリ など。" → 記載あり
    //   protec        … "ネズミ、イタチ、ハクビシン、アライグマ、コウモリ など。" → 記載あり
    //   buzz          … "ネズミ、イタチ、ハクビシン、アライグマ、コウモリ など。" → 記載あり
    //   roy           … "ネズミ、イタチ、ハクビシン、アライグマ、コウモリ など。" → 記載あり
    // 除外した社と理由:
    //   miyako  … servicesAnimals は「ネズミ、アライグマ、ハクビシン、コウモリ、害鳥」でイタチの記載なし
    //   ratter  … 「ネズミ駆除に特化」でイタチの記載なし
    //   sankyo / sankyo-shoudoku / asante / duskin / hachi-otasuke / taiyo / ai-eizen / kita-nihon
    //           … servicesAnimals フィールド自体が未設定のため、イタチ対応の裏付けが取れず除外
    companySlugs: ["kujo-zaurus", "house-protect", "protec", "buzz", "roy"],
    checkPoints: [
      "捕獲を伴う作業を行う場合、どの許可に基づいて行うのかを事前に説明してもらえるか",
      "追い出しだけで終わらず、侵入口の封鎖まで作業範囲に含まれているか",
      "見積もりが総額表示か、追加費用が発生する条件が書面で示されているか",
      "再発した場合の保証期間と、保証の適用条件（建物の築年数・施工内容による変動の有無）",
      "糞尿の清掃・除菌消臭、断熱材や天井の修繕が必要な場合の扱い",
      "対応エリアに自宅が含まれるか（23区と多摩地域で拠点・管轄が分かれる業者がある）",
    ],
    cautions: [
      "東京都および都内自治体の公式サイトに「イタチ」を名指しした被害相談・捕獲許可の案内ページは、今回の調査範囲では見つけられませんでした。東京都環境局・練馬区・町田市・八王子市などの野生鳥獣ページはいずれもアライグマ・ハクビシン（一部でタヌキ・アナグマ）が対象で、イタチは列挙に含まれていません。そのため「都内の自治体がイタチの捕獲許可申請を案内している」という書き方は、現時点では裏付けが取れていません。",
      "東京都におけるイタチの具体的な許可権者・申請手続きは、公式ページに記載がないため未確認です。実際に申請できるかどうかは、東京都環境局（03-5388-3505）または多摩環境事務所（042-521-2948）にご確認ください。",
      "「追い出しや侵入口の封鎖は許可不要」と明示した公的ページは見つかりませんでした。本ページでは「捕獲には許可が必要」という公的記載のみを事実として扱い、追い出しの許可の要否については断定していません。",
      "鳥獣保護管理法の罰則規定については、環境省・東京都の公式ページ本文で直接確認できなかったため、本ページには記載していません。",
      "断熱材の被害について、公的機関の記載は確認できませんでした（八王子市の「建築物の破損」が最も近い記載です）。",
      "イタチ駆除の料金相場の数値は、今回の公的機関調査の対象外です。下記の比較表の金額は各社が公表している料金であり、相場を示すものではありません。",
    ],
    confirmedDate: "2026-09-25",
  },
];

export function getPestArea(
  pestSlug: string,
  areaSlug: string
): PestArea | undefined {
  return pestAreas.find(
    (p) => p.pestSlug === pestSlug && p.areaSlug === areaSlug
  );
}
