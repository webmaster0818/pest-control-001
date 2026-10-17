// 業者の画像の出し分け（2026-10-17 デザイン刷新）。キーは /images/companies/{key}.(png|jpg) のファイル名部分。
//
// 1) アフィリエイトのある業者 … ASP のバナー（app/data/affiliateCodes.ts のコードをそのまま出す）。ここには書かない。
// 2) アフィリエイトのない業者 … 公式サイトの利用規約で転載・二次利用が禁止されていないことを確認できた画像だけを登録する。
//    取得元URL・規約URL・確認日は growth/okina/company-images-20261017.md に記録。
// 3) 登録のない業者 … 画像なし（社名表記）。画像の利用を確認できたら、ここに1行足すだけで全ページに反映される。
export interface OfficialVisual {
  src: string;
  width: number;
  height: number;
  /** ロゴ（余白をとって contain）か写真（cover）か */
  kind: "logo" | "photo";
}

export const officialVisuals: Record<string, OfficialVisual> = {
  // EMEAO!：https://emeao.jp/ のヘッダーロゴ。/agreement/・/policy/ に転載・複製を禁じる記載なし（2026-10-17確認）
  emeao: { src: "/images/companies/official/emeao.svg", width: 217, height: 69, kind: "logo" },
};

/** 画像キー → アフィリエイトコードの slug（キーと slug が同じものは省略可） */
export const affSlugByImageKey: Record<string, string> = {};

/** "/images/companies/kujyo-zaurus.png" → "kujyo-zaurus" */
export const imageKeyFromPath = (path: string): string =>
  path.replace(/^.*\//, "").replace(/\.(png|jpe?g|svg|webp)$/i, "");
