import Estimator from "@/app/components/Estimator";
import { estimatorLinks } from "@/app/lib/estimatorLinks";
import { getCategory, type PestCat } from "@/app/data/estimatorQuestions";

// 各害虫・害獣ページの見積機能（依頼内容を選んだ状態で始める。okina 2026-11-11 承認）
export default function EstimatorSection({ pest }: { pest: PestCat }) {
  const { helpLinks, areaLinks } = estimatorLinks();
  const name = getCategory(pest)?.name ?? "";
  return (
    <section id="estimate" className="top-section est-section est-section-sub" data-no-reveal>
      <div className="top-container">
        <h2 id="estimate-title" className="heading-primary text-center">かんたん料金診断</h2>
        <p className="est-lead">{name}について、建物・場所・地域を選ぶと、料金の目安（提携業者の公式表記）と、条件に合う業者がわかります。入力は選ぶだけで、個人情報の入力はありません。</p>
        <Estimator initialPest={pest} helpLinks={helpLinks} areaLinks={areaLinks} />
      </div>
    </section>
  );
}
