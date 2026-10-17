import { getAff } from "@/app/data/affiliateCodes";
import { officialVisuals, affSlugByImageKey, imageKeyFromPath } from "@/app/data/companyVisuals";
import { AffBanner } from "@/app/components/AffLink";

// 業者の画像枠。アフィリエイトあり=ASPバナー／公式画像の利用確認済み=その画像／それ以外=社名表記。
// size: thumb=比較表の見出し・一覧 / wide=業者紹介の横長枠 / mini=表のセル内
export default function CompanyVisual({
  id,
  name,
  size = "wide",
  monogram = false,
}: {
  /** 画像キー（例 "kujyo-zaurus"）または画像パス */
  id: string;
  name: string;
  size?: "thumb" | "wide" | "mini";
  /** 社名表記を頭文字1字で出す（社名が隣に並ぶ一覧用） */
  monogram?: boolean;
}) {
  const key = id.includes("/") ? imageKeyFromPath(id) : id;
  const affSlug = affSlugByImageKey[key] ?? key;
  const aff = getAff(affSlug);
  if (aff?.bannerHtml) {
    // 業者紹介カード（wide）には既存の <AffBanner> が同じカード内に置かれているため、二重に出さない
    if (size === "wide") return null;
    return (
      <div className={`cv cv-${size} cv-banner`}>
        <AffBanner slug={affSlug} />
      </div>
    );
  }
  const v = officialVisuals[key];
  if (v) {
    return (
      <div className={`cv cv-${size} cv-${v.kind}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={v.src} alt={name} width={v.width} height={v.height} loading="lazy" decoding="async" />
      </div>
    );
  }
  return (
    <div className={`cv cv-${size} cv-plate${monogram ? " cv-mono" : ""}`} data-company-image="pending">
      {monogram ? (
        <span className="cv-plate-mono" aria-hidden="true">{name.replace(/^(株式会社|有限会社|ネズミ完全退治専門)\s*/, "").slice(0, 1)}</span>
      ) : (
        <span className="cv-plate-name">{name}</span>
      )}
    </div>
  );
}
