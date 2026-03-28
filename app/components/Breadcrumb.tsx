import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // 構造化データ（JSON-LD）
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://pest-control-001.pages.dev${item.href}` })
    }))
  };

  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* パンくずリストUI */}
      <nav aria-label="パンくずリスト" className="py-4 px-4 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-gray-400" aria-hidden="true">›</span>
                )}
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-700 font-semibold">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
