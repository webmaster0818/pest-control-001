"use client";

import { useEffect } from "react";

// スクロールで下から浮かび上がる演出（約0.5秒・同じ親の中は時間差）。
// - JS が動いたときだけ働く（JS無効・クローラーでは最初から全部見える）
// - 読み込み時に画面内にあるもの（ファーストビュー）は動かさない
// - 料金・CTA（ASPリンク・ボタン・金額）を含む要素と [data-no-reveal] の中は対象外
// - prefers-reduced-motion では何もしない
// - opacity/transform だけを使うのでレイアウトはずれない（CLS 0）
const TARGETS = [
  "[data-reveal]",
  "main h2",
  "article h2",
  ".heading-primary",
  ".card",
  ".company-detail",
  ".rv-auto > *",
].join(",");

const EXCLUDE = ".aff-banner, .aff-text, .btn, [data-no-reveal], table";

export default function RevealObserver() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const vh = window.innerHeight;
    const cand = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter((el) => {
      if (el.closest("[data-no-reveal], header, footer, nav")) return false;
      if (el.querySelector(EXCLUDE)) return false;
      if (/[0-9０-９,，]円/.test(el.textContent ?? "")) return false;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95) return false; // ファーストビュー
      return true;
    });

    // 入れ子の二重指定を避ける（外側だけ動かす）
    const set = new Set(cand);
    const els = cand.filter((el) => {
      for (let p = el.parentElement; p; p = p.parentElement) if (set.has(p)) return false;
      return true;
    });

    const groups = new Map<Element | null, number>();
    els.forEach((el) => {
      const n = groups.get(el.parentElement) ?? 0;
      groups.set(el.parentElement, n + 1);
      el.style.setProperty("--rv-delay", `${Math.min(n, 5) * 80}ms`);
      el.setAttribute("data-rv", "");
    });
    document.documentElement.classList.add("rv-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
