'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "料金相場", href: "/price" },
    { label: "害虫駆除業者の選び方", href: "/guide" },
    { label: "よくある質問", href: "/faq" },
  ];

  return (
    <header style={{backgroundColor: '#2B3A50'}} className="py-4 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* ロゴエリア */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <h1 className="text-xl md:text-2xl font-bold text-white">害虫駆除110番</h1>
          <Image
            src="/images/header-icon.png"
            alt="害虫駆除110番"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* ハンバーガーメニューボタン */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-gray-300 transition-colors z-50"
          aria-label="メニュー"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ドロップダウンメニュー */}
      {isMenuOpen && (
        <>
          {/* 背景オーバーレイ */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* メニュー */}
          <nav className="absolute top-full right-0 mt-2 mr-4 bg-white rounded-lg shadow-xl z-50 min-w-[250px]">
            <ul className="py-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
