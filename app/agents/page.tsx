import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { agentsByPriority as agents, hasSourcedReviews } from "./agentsData";
import { AffText, hasAff } from "@/app/components/AffLink";
import CompanyVisual from "@/app/components/CompanyVisual";

const SITE = "https://gaichu-pro.com";

export const metadata: Metadata = {
  title: { absolute: "害獣・害虫駆除業者の一覧｜料金・対応害獣・保証を業者別に調査｜害虫・害獣駆除プロ比較ナビ" },
  description:
    "害獣・害虫駆除業者の料金・対応害獣・保証内容を業者別にまとめた一覧です。駆除ザウルスをはじめ各社のメリット・デメリットを、各社のページで確認いただけます。",
  alternates: { canonical: `${SITE}/agents` },
};

export default function AgentsIndexPage() {
  return (
    <article className="agents-index">
      <Breadcrumb items={[{ label: "害虫・害獣駆除プロ比較ナビ", href: "/" }, { label: "駆除業者の一覧" }]} />
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <p className="eyebrow">駆除業者の一覧</p>
        <h1 className="agents-title">害獣・害虫駆除業者の一覧</h1>
        <p className="agents-lead">
          主要な害獣・害虫駆除業者の料金・対応害獣・保証内容を、編集部が中立的な立場で調査し、まとめています。出典をたどれる口コミがある業者は、各社のページで出典つきで紹介しています。依頼前の比較にお役立てください。
        </p>
        <div className="agents-grid rv-auto">
          {agents.map((a) => (
            <div key={a.slug} className="agent-card">
              <div className="agent-card-visual">
                <CompanyVisual id={a.image} name={a.name} size="thumb" monogram />
              </div>
              <Link href={`/agents/${a.slug}`} className="agent-card-link">
                <p className="agent-card-name">{a.name}</p>
                <p className="agent-card-more">{hasSourcedReviews(a) ? "口コミ・料金を見る" : "料金・サービス内容を見る"}</p>
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
