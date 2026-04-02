'use client';

import Link from "next/link";
import { useState } from "react";
import FooterAreaAccordion from "./FooterAreaAccordion";

export default function Footer() {
  const [isPestsOpen, setIsPestsOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  const pests = [
    { name: "シロアリ", href: "/shiroari" },
    { name: "ハチ", href: "/hachi" },
    { name: "ゴキブリ", href: "/gokiburi" },
    { name: "ネズミ", href: "/nezumi" },
    { name: "コウモリ", href: "/koumori" },
    { name: "ダニ", href: "/dani" },
    { name: "トコジラミ", href: "/tokojirami" },
    { name: "鳥害", href: "/chougai" },
    { name: "アリ", href: "/ari" },
    { name: "カメムシ", href: "/kamemushi" },
    { name: "ムカデ/ゲジゲジ", href: "/mukade" },
    { name: "シバンムシ", href: "/shibanmushi" },
    { name: "毛虫", href: "/kemushi" },
    { name: "ハクビシン", href: "/hakubishin" },
    { name: "イタチ", href: "/itachi" },
    { name: "アライグマ", href: "/araiguma" },
    { name: "テン", href: "/ten" },
    { name: "アナグマ", href: "/anaguma" },
    { name: "タヌキ", href: "/tanuki" },
  ];

  const staticPages = [
    { name: "料金相場", href: "/price" },
    { name: "害虫駆除業者の選び方", href: "/guide" },
    { name: "よくある質問", href: "/faq" },
  ];

  return (
    <footer style={{backgroundColor: '#2B3A50'}} className="text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* PC版 */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* 害虫から探す */}
          <div>
            <h3 className="font-bold text-lg mb-4">害虫から探す</h3>
            <ul className="space-y-2 pl-4">
              {pests.map((pest) => (
                <li key={pest.href}>
                  <Link href={pest.href} className="text-gray-300 hover:text-white hover:underline transition-colors">
                    {pest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* エリアから探す */}
          <div>
            <h3 className="font-bold text-lg mb-4">エリアから探す</h3>
            <FooterAreaAccordion />
          </div>

          {/* その他 */}
          <div>
            <h3 className="font-bold text-lg mb-4">その他</h3>
            <ul className="space-y-2 pl-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  TOP
                </Link>
              </li>
              {staticPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-gray-300 hover:text-white hover:underline transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* モバイル版（アコーディオン） */}
        <div className="md:hidden space-y-4">
          {/* 害虫から探す */}
          <div className="border-b border-gray-600">
            <button
              onClick={() => setIsPestsOpen(!isPestsOpen)}
              className="w-full flex items-center justify-between py-3 text-left font-bold text-lg"
            >
              害虫から探す
              <svg
                className={`w-5 h-5 transition-transform ${isPestsOpen ? 'rotate-180' : ''}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isPestsOpen && (
              <ul className="pb-4 space-y-2 pl-4">
                {pests.map((pest) => (
                  <li key={pest.href}>
                    <Link href={pest.href} className="text-gray-300 hover:text-white hover:underline transition-colors block py-1">
                      {pest.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* エリアから探す */}
          <div className="border-b border-gray-600">
            <button
              onClick={() => setIsAreasOpen(!isAreasOpen)}
              className="w-full flex items-center justify-between py-3 text-left font-bold text-lg"
            >
              エリアから探す
              <svg
                className={`w-5 h-5 transition-transform ${isAreasOpen ? 'rotate-180' : ''}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isAreasOpen && (
              <div className="pb-4 pl-4">
                <FooterAreaAccordion />
              </div>
            )}
          </div>

          {/* その他 */}
          <div>
            <h3 className="font-bold text-lg mb-3">その他</h3>
            <ul className="space-y-2 pl-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white hover:underline transition-colors block py-1">
                  TOP
                </Link>
              </li>
              {staticPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-gray-300 hover:text-white hover:underline transition-colors block py-1">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-400 text-sm">
          <p>&copy; 2026 害虫・害獣駆除プロ比較ナビ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
