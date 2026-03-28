import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pest-control-001.pages.dev'),
  title: {
    default: "害虫駆除110番 | 全国の害虫駆除業者を料金・口コミで比較",
    template: "%s | 害虫駆除110番"
  },
  description: "害虫駆除業者を料金・サービス・口コミで徹底比較。シロアリ、ハチ、ゴキブリ、ネズミ、コウモリ、ダニ、トコジラミ、鳥害など8種類の害虫・害獣に対応。地域別の料金相場と信頼できる業者選びのポイントを詳しく解説します。",
  keywords: ['害虫駆除', '害獣駆除', 'シロアリ駆除', 'ハチ駆除', 'ゴキブリ駆除', 'ネズミ駆除', 'コウモリ駆除', 'ダニ駆除', 'トコジラミ駆除', '鳥害対策', '料金相場', '業者比較'],
  authors: [{ name: '害虫駆除110番' }],
  creator: '害虫駆除110番',
  publisher: '害虫駆除110番',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://pest-control-001.pages.dev',
    siteName: '害虫駆除110番',
    title: '害虫駆除110番 | 全国の害虫駆除業者を料金・口コミで比較',
    description: '害虫駆除業者を料金・サービス・口コミで徹底比較。シロアリ、ハチ、ゴキブリ、ネズミ、コウモリなど8種類の害虫・害獣に対応。地域別の料金相場と信頼できる業者選びのポイントを詳しく解説。',
    images: [
      {
        url: '/images/hero-pest-control.jpg',
        width: 1200,
        height: 630,
        alt: '害虫駆除110番 - 全国の害虫駆除業者比較サイト',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '害虫駆除110番 | 全国の害虫駆除業者を料金・口コミで比較',
    description: '害虫駆除業者を料金・サービス・口コミで徹底比較。地域別の料金相場と信頼できる業者選びのポイント。',
    images: ['/images/hero-pest-control.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
