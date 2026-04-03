"use client";

import Link from "next/link";
import { useState } from "react";

interface City {
  name: string;
  href: string;
}

interface Prefecture {
  name: string;
  href: string;
  cities?: City[];
}

const prefectures: Prefecture[] = [
  {
    name: "東京",
    href: "/area/tokyo",
    cities: [
      { name: "新宿区", href: "/area/tokyo/shinjuku" },
      { name: "渋谷区", href: "/area/tokyo/shibuya" },
      { name: "港区", href: "/area/tokyo/minato" },
      { name: "世田谷区", href: "/area/tokyo/setagaya" },
      { name: "大田区", href: "/area/tokyo/ota" },
      { name: "練馬区", href: "/area/tokyo/nerima" },
      { name: "江戸川区", href: "/area/tokyo/edogawa" },
      { name: "足立区", href: "/area/tokyo/adachi" },
    ],
  },
  {
    name: "大阪",
    href: "/area/osaka",
    cities: [
      { name: "北区", href: "/area/osaka/kita" },
      { name: "中央区", href: "/area/osaka/chuo" },
      { name: "西区", href: "/area/osaka/nishi" },
      { name: "天王寺区", href: "/area/osaka/tennoji" },
      { name: "浪速区", href: "/area/osaka/naniwa" },
      { name: "阿倍野区", href: "/area/osaka/abeno" },
      { name: "東住吉区", href: "/area/osaka/higashisumiyoshi" },
      { name: "平野区", href: "/area/osaka/hirano" },
    ],
  },
  {
    name: "愛知",
    href: "/area/aichi",
    cities: [
      { name: "名古屋市", href: "/area/nagoya" },
    ],
  },
  {
    name: "埼玉",
    href: "/area/saitama",
    cities: [
      { name: "さいたま市", href: "/area/saitama-city" },
      { name: "大宮区", href: "/area/saitama/omiya" },
      { name: "浦和区", href: "/area/saitama/urawa" },
      { name: "南区", href: "/area/saitama/minami" },
      { name: "見沼区", href: "/area/saitama/minuma" },
      { name: "緑区", href: "/area/saitama/midori" },
      { name: "岩槻区", href: "/area/saitama/iwatsuki" },
      { name: "桜区", href: "/area/saitama/sakura" },
      { name: "西区", href: "/area/saitama/nishi" },
    ],
  },
  {
    name: "千葉",
    href: "/area/chiba",
    cities: [
      { name: "中央区", href: "/area/chiba/chuo" },
      { name: "花見川区", href: "/area/chiba/hanamigawa" },
      { name: "稲毛区", href: "/area/chiba/inage" },
      { name: "若葉区", href: "/area/chiba/wakaba" },
      { name: "緑区", href: "/area/chiba/midori" },
      { name: "美浜区", href: "/area/chiba/mihama" },
    ],
  },
  {
    name: "神奈川",
    href: "/area/kanagawa",
    cities: [
      { name: "横浜市", href: "/area/yokohama" },
      { name: "川崎市", href: "/area/kawasaki" },
      { name: "相模原市", href: "/area/kanagawa/sagamihara" },
      { name: "横須賀市", href: "/area/kanagawa/yokosuka" },
      { name: "藤沢市", href: "/area/kanagawa/fujisawa" },
      { name: "小田原市", href: "/area/kanagawa/odawara" },
      { name: "茅ヶ崎市", href: "/area/kanagawa/chigasaki" },
      { name: "厚木市", href: "/area/kanagawa/atsugi" },
    ],
  },
  {
    name: "福岡",
    href: "/area/fukuoka",
    cities: [
      { name: "北九州市", href: "/area/kitakyushu" },
      { name: "博多区", href: "/area/fukuoka/hakata" },
      { name: "中央区", href: "/area/fukuoka/chuo" },
      { name: "南区", href: "/area/fukuoka/minami" },
      { name: "西区", href: "/area/fukuoka/nishi" },
      { name: "東区", href: "/area/fukuoka/higashi" },
      { name: "城南区", href: "/area/fukuoka/jonan" },
      { name: "早良区", href: "/area/fukuoka/sawara" },
    ],
  },
  { name: "茨城", href: "/area/ibaraki" },
  { name: "栃木", href: "/area/tochigi" },
  { name: "鹿児島", href: "/area/kagoshima" },
  { name: "宮崎", href: "/area/miyazaki" },
  { name: "沖縄", href: "/area/okinawa" },
  {
    name: "北海道",
    href: "/area/hokkaido",
    cities: [
      { name: "札幌市", href: "/area/sapporo" },
    ],
  },
  {
    name: "京都",
    href: "/area/kyoto",
    cities: [
      { name: "北区", href: "/area/kyoto/kita" },
      { name: "上京区", href: "/area/kyoto/kamigyo" },
      { name: "左京区", href: "/area/kyoto/sakyo" },
      { name: "中京区", href: "/area/kyoto/nakagyo" },
      { name: "東山区", href: "/area/kyoto/higashiyama" },
      { name: "下京区", href: "/area/kyoto/shimogyo" },
      { name: "南区", href: "/area/kyoto/minami" },
      { name: "右京区", href: "/area/kyoto/ukyo" },
    ],
  },
  {
    name: "兵庫",
    href: "/area/hyogo",
    cities: [
      { name: "神戸市", href: "/area/kobe" },
    ],
  },
  {
    name: "宮城",
    href: "/area/miyagi",
    cities: [
      { name: "仙台市", href: "/area/sendai" },
    ],
  },
  {
    name: "広島",
    href: "/area/hiroshima",
    cities: [
      { name: "中区", href: "/area/hiroshima/naka" },
      { name: "東区", href: "/area/hiroshima/higashi" },
      { name: "南区", href: "/area/hiroshima/minami" },
      { name: "西区", href: "/area/hiroshima/nishi" },
      { name: "安佐南区", href: "/area/hiroshima/asaminami" },
      { name: "安佐北区", href: "/area/hiroshima/asakita" },
      { name: "安芸区", href: "/area/hiroshima/aki" },
      { name: "佐伯区", href: "/area/hiroshima/saeki" },
    ],
  },
  {
    name: "新潟",
    href: "/area/niigata",
    cities: [
      { name: "北区", href: "/area/niigata/kita" },
      { name: "東区", href: "/area/niigata/higashi" },
      { name: "中央区", href: "/area/niigata/chuo" },
      { name: "江南区", href: "/area/niigata/konan" },
      { name: "秋葉区", href: "/area/niigata/akiha" },
      { name: "南区", href: "/area/niigata/minami" },
      { name: "西区", href: "/area/niigata/nishi" },
      { name: "西蒲区", href: "/area/niigata/nishikan" },
    ],
  },
  {
    name: "静岡",
    href: "/area/shizuoka",
    cities: [
      { name: "浜松市", href: "/area/hamamatsu" },
    ],
  },
  {
    name: "熊本",
    href: "/area/kumamoto",
    cities: [
      { name: "中央区", href: "/area/kumamoto/chuo" },
      { name: "東区", href: "/area/kumamoto/higashi" },
      { name: "西区", href: "/area/kumamoto/nishi" },
      { name: "南区", href: "/area/kumamoto/minami" },
      { name: "北区", href: "/area/kumamoto/kita" },
    ],
  },
];

export default function FooterAreaAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="space-y-2">
      {prefectures.map((pref, index) => (
        <li key={pref.name}>
          <div className="flex items-center justify-between">
            <Link href={pref.href} className="text-gray-300 hover:text-white hover:underline transition-colors block py-1">
              {pref.name}
            </Link>
            {pref.cities && (
              <button
                onClick={() => toggleAccordion(index)}
                className="ml-2 text-gray-400 hover:text-white"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
          {pref.cities && openIndex === index && (
            <ul className="pl-4 mt-2 space-y-1">
              {pref.cities.map((city) => (
                <li key={city.name}>
                  <Link
                    href={city.href}
                    className="text-gray-400 hover:text-white hover:underline text-sm block py-1"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
