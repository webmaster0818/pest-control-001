import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DEFAULT_OG_IMAGE } from "./lib/og";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gaichu-pro.com'),
  title: {
    default: "害虫・害獣駆除プロ比較ナビ | 全国の害虫駆除業者を料金・口コミで比較",
    template: "%s | 害虫・害獣駆除プロ比較ナビ"
  },
  description: "全国の害虫・害獣駆除業者を、料金・サービス内容・口コミの観点から比較できる情報サイトです。シロアリ、ハチ、ゴキブリ、ネズミ、コウモリ、ダニ、トコジラミ、鳥害などの害虫・害獣について、地域別の料金相場と業者選びの確認事項をご説明します。",
  keywords: ['害虫駆除', '害獣駆除', 'シロアリ駆除', 'ハチ駆除', 'ゴキブリ駆除', 'ネズミ駆除', 'コウモリ駆除', 'ダニ駆除', 'トコジラミ駆除', '鳥害対策', '料金相場', '業者比較'],
  authors: [{ name: '害虫・害獣駆除プロ比較ナビ' }],
  creator: '害虫・害獣駆除プロ比較ナビ',
  publisher: '害虫・害獣駆除プロ比較ナビ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '害虫・害獣駆除プロ比較ナビ',
    title: '害虫・害獣駆除プロ比較ナビ | 全国の害虫駆除業者を料金・口コミで比較',
    description: '全国の害虫・害獣駆除業者を、料金・サービス内容・口コミの観点から比較できる情報サイトです。地域別の料金相場と業者選びの確認事項をご説明します。',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: '害虫・害獣駆除プロ比較ナビ | 全国の害虫駆除業者を料金・口コミで比較',
    description: '全国の害虫・害獣駆除業者を、料金・サービス内容・口コミの観点から比較できる情報サイトです。',
    images: [DEFAULT_OG_IMAGE.url],
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
    google: 'YY79Lplm_V51AlyHO2bqhV76HbHa8tzMcn7c1-1lIJc', // Google Search Console verification code
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
      ><div style={{background:'#f4f4f4',borderBottom:'1px solid #e2e2e2',fontSize:'11px',lineHeight:1.6,color:'#666',textAlign:'center',padding:'3px 8px'}}>本サイトはプロモーション(PR)を含みます。</div>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E3TWZZT421"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E3TWZZT421');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
