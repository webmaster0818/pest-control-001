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
    <header className="site-header">
      <div className="site-header-inner">
        {/* ロゴエリア */}
        <Link href="/" className="site-logo">
          <span className="site-logo-text">害虫・害獣駆除プロ比較ナビ</span>
          <Image
            src="/images/header-icon.png"
            alt="害虫・害獣駆除プロ比較ナビ"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* PC：横並びメニュー */}
        <nav className="site-nav" aria-label="サイト内メニュー">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ハンバーガーメニューボタン */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="site-menu-btn"
          aria-label="メニュー"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ドロップダウンメニュー */}
      {isMenuOpen && (
        <>
          {/* 背景オーバーレイ */}
          <div
            className="fixed inset-0 z-40"
            style={{ background: "rgba(29,39,51,.35)" }}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* メニュー */}
          <nav className="site-drawer">
            <ul>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
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
