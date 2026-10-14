import Link from "next/link";

// 関連ページの一覧（同じエリアの別ページ・同じ種別の別エリアなど）。
// 空なら何も出さない。href は本番の正規URL（末尾スラッシュ無し）で渡す。
export default function RelatedLinkList({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <div className="mt-8">
      <h3 className="font-bold text-lg text-slate-800 mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-block rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-700 hover:border-amber-400 hover:text-amber-700 transition"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
