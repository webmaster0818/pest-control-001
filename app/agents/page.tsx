import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { agents } from "./agentsData";

const SITE = "https://gaichu-pro.com";

export const metadata: Metadata = {
  title: { absolute: "害獣・害虫駆除業者の口コミ・評判まとめ｜料金・対応を徹底比較｜害虫・害獣駆除プロ比較ナビ" },
  description:
    "害獣・害虫駆除業者の口コミ・評判・料金を業者別に徹底調査。駆除ザウルスをはじめ各社のメリット・デメリット、対応害獣、保証内容を比較して、あなたに合う駆除業者を見つけられます。",
  alternates: { canonical: `${SITE}/agents/` },
};

export default function AgentsIndexPage() {
  return (
    <article className="bg-white">
      <Breadcrumb items={[{ label: "害虫・害獣駆除プロ比較ナビ", href: "/" }, { label: "駆除業者の口コミ・評判" }]} />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">害獣・害虫駆除業者の口コミ・評判まとめ</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          主要な害獣・害虫駆除業者の料金・対応害獣・保証内容・利用者の口コミを、編集部が中立的に調査してまとめました。気になる業者を選んで、依頼前の比較にお役立てください。
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {agents.map((a) => (
            <Link key={a.slug} href={`/agents/${a.slug}/`} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 hover:shadow-md hover:border-amber-300 transition">
              <Image src={a.image} alt={a.name} width={72} height={72} className="w-16 h-16 rounded-xl object-cover shrink-0" />
              <div>
                <p className="font-bold text-slate-800">{a.name}</p>
                <p className="text-xs text-slate-500 mt-1">口コミ・評判・料金を見る</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
