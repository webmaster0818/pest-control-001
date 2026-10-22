import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { agentsByPriority as agents } from "./agentsData";
import { AffText, hasAff } from "@/app/components/AffLink";
import CompanyVisual from "@/app/components/CompanyVisual";

const SITE = "https://gaichu-pro.com";

export const metadata: Metadata = {
  title: { absolute: "害獣・害虫駆除業者の口コミ・評判一覧｜料金・対応の比較｜害虫・害獣駆除プロ比較ナビ" },
  description:
    "害獣・害虫駆除業者の口コミ・評判・料金を業者別にまとめています。駆除ザウルスをはじめ各社のメリット・デメリット、対応害獣、保証内容を比較いただけます。",
  alternates: { canonical: `${SITE}/agents` },
};

export default function AgentsIndexPage() {
  return (
    <article className="agents-index">
      <Breadcrumb items={[{ label: "害虫・害獣駆除プロ比較ナビ", href: "/" }, { label: "駆除業者の口コミ・評判" }]} />
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <p className="eyebrow">駆除業者の口コミ・評判</p>
        <h1 className="agents-title">害獣・害虫駆除業者の口コミ・評判一覧</h1>
        <p className="agents-lead">
          主要な害獣・害虫駆除業者の料金・対応害獣・保証内容・利用者の口コミを、編集部が中立的な立場で調査し、まとめています。依頼前の比較にお役立てください。
        </p>
        <div className="agents-grid rv-auto">
          {agents.map((a) => (
            <div key={a.slug} className="agent-card">
              <div className="agent-card-visual">
                <CompanyVisual id={a.image} name={a.name} size="thumb" monogram />
              </div>
              <Link href={`/agents/${a.slug}`} className="agent-card-link">
                <p className="agent-card-name">{a.name}</p>
                <p className="agent-card-more">口コミ・評判・料金を見る</p>
              </Link>
              {hasAff(a.slug) && (
                <p className="agent-card-aff">
                  <AffText slug={a.slug} variant="small" label={`${a.name}の公式サイト`} />
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
