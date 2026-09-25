import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { pestAreas } from "@/app/data/pestAreas";

const SITE = "https://gaichu-pro.com";

export const metadata: Metadata = {
  title: {
    absolute:
      "害虫・害獣から探す｜種類別の駆除ガイドとエリア別ページ一覧｜害虫・害獣駆除プロ比較ナビ",
  },
  description:
    "ゴキブリ・シロアリ・ネズミ・イタチ・ハクビシン・コウモリなど、害虫・害獣の種類別の駆除ガイドと、エリア別の比較ページをまとめた一覧です。被害の種類から該当のページを探せます。",
  alternates: { canonical: `${SITE}/pest/` },
};

// app 直下に実在する単体ページのみを列挙している（ディレクトリを ls して作成）。
// ページを追加・削除したらこの配列も更新すること。
const animals: { href: string; name: string; note: string }[] = [
  { href: "/nezumi", name: "ネズミ", note: "天井裏の物音・糞尿・配線のかじり" },
  { href: "/itachi", name: "イタチ", note: "屋根裏への棲みつき・獣臭" },
  { href: "/hakubishin", name: "ハクビシン", note: "屋根裏・天井裏の棲みつき" },
  { href: "/araiguma", name: "アライグマ", note: "特定外来生物・家屋侵入" },
  { href: "/koumori", name: "コウモリ", note: "軒下・戸袋への棲みつき" },
  { href: "/tanuki", name: "タヌキ", note: "床下への棲みつき・ため糞" },
  { href: "/anaguma", name: "アナグマ", note: "床下の掘り返し・棲みつき" },
  { href: "/ten", name: "テン", note: "屋根裏への侵入・食害" },
  { href: "/chougai", name: "鳥害（ハト・カラス）", note: "糞害・巣作り・騒音" },
];

const insects: { href: string; name: string; note: string }[] = [
  { href: "/gokiburi", name: "ゴキブリ", note: "飲食店・住宅での発生と予防" },
  { href: "/shiroari", name: "シロアリ", note: "木部の食害・羽アリ" },
  { href: "/hachi", name: "ハチ", note: "スズメバチ・アシナガバチの巣" },
  { href: "/ari", name: "アリ", note: "イエヒメアリ・ルリアリ" },
  { href: "/dani", name: "ダニ", note: "ダニ・マダニ・ツツガムシ" },
  { href: "/tokojirami", name: "トコジラミ", note: "南京虫・吸血被害" },
  { href: "/mukade", name: "ムカデ・ゲジゲジ", note: "屋内侵入・咬傷" },
  { href: "/kemushi", name: "毛虫", note: "チャドクガ・イラガ" },
  { href: "/kamemushi", name: "カメムシ", note: "大量発生時の対策" },
  { href: "/shibanmushi", name: "シバンムシ", note: "畳・木材・乾物の食害" },
];

export default function PestIndexPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "害虫・害獣駆除プロ比較ナビ", href: "/" },
          { label: "害虫・害獣から探す" },
        ]}
      />

      <article className="bg-white">
        <header className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
            <p className="text-sm tracking-widest text-amber-300 mb-3">
              種類から探す
            </p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">
              害虫・害獣から探す
            </h1>
            <p className="text-slate-200 leading-relaxed">
              害獣・害虫の種類ごとの駆除ガイドと、エリア別の比較ページをまとめました。被害の内容から該当するページを選んでください。
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <section id="animals" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              害獣から探す
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {animals.map((a) => (
                <Link
                  key={a.href}
                  href={`${a.href}/`}
                  className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
                >
                  <p className="font-bold text-slate-800">{a.name}駆除</p>
                  <p className="text-xs text-slate-500 mt-1">{a.note}</p>
                </Link>
              ))}
            </div>
          </section>

          <section id="insects" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              害虫から探す
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {insects.map((a) => (
                <Link
                  key={a.href}
                  href={`${a.href}/`}
                  className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
                >
                  <p className="font-bold text-slate-800">{a.name}駆除</p>
                  <p className="text-xs text-slate-500 mt-1">{a.note}</p>
                </Link>
              ))}
            </div>
          </section>

          <section id="area" className="scroll-mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              エリア × 種別で探す
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              法令・自治体窓口・対応業者をエリア単位で整理したページです。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {pestAreas.map((p) => (
                <Link
                  key={`${p.pestSlug}-${p.areaSlug}`}
                  href={`/pest/${p.pestSlug}/${p.areaSlug}/`}
                  className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
                >
                  <p className="font-bold text-slate-800">
                    {p.areaName}の{p.pestName}駆除
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    捕獲の許可・相談窓口・対応業者
                  </p>
                </Link>
              ))}
              <Link
                href="/pest/cockroach/tokyo/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">
                  東京都のゴキブリ駆除
                </p>
                <p className="text-xs text-slate-500 mt-1">料金相場・業者比較</p>
              </Link>
              <Link
                href="/pest/nezumi/tokyo/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">東京都のネズミ駆除</p>
                <p className="text-xs text-slate-500 mt-1">料金相場・業者比較</p>
              </Link>
              <Link
                href="/pest/termite/tokyo/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">
                  東京都のシロアリ駆除
                </p>
                <p className="text-xs text-slate-500 mt-1">料金相場・業者比較</p>
              </Link>
              <Link
                href="/pest/wasp/tokyo/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">東京都のハチ駆除</p>
                <p className="text-xs text-slate-500 mt-1">料金相場・業者比較</p>
              </Link>
            </div>
          </section>

          <section id="related" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4 mb-5">
              関連ページ
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/agents/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">駆除業者を比較</p>
                <p className="text-xs text-slate-500 mt-1">
                  掲載業者の口コミ・料金
                </p>
              </Link>
              <Link
                href="/price/"
                className="rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition"
              >
                <p className="font-bold text-slate-800">料金相場</p>
                <p className="text-xs text-slate-500 mt-1">種類別の費用の目安</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
