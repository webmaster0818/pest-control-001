"use client";

import Link from "next/link";
import { useState } from "react";

interface District {
  name: string;
  href: string;
}

interface Area {
  name: string;
  href: string;
  districts?: District[];
}

const areas: Area[] = [
  {
    name: "東京",
    href: "/area/tokyo",
    districts: [
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
    districts: [
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
    name: "名古屋",
    href: "/area/nagoya",
    districts: [
      { name: "中村区", href: "/area/nagoya/nakamura" },
      { name: "中区", href: "/area/nagoya/naka" },
      { name: "熱田区", href: "/area/nagoya/atsuta" },
      { name: "千種区", href: "/area/nagoya/chikusa" },
      { name: "東区", href: "/area/nagoya/higashi" },
      { name: "北区", href: "/area/nagoya/kita" },
      { name: "西区", href: "/area/nagoya/nishi" },
      { name: "港区", href: "/area/nagoya/minato" },
    ],
  },
  {
    name: "横浜",
    href: "/area/yokohama",
    districts: [
      { name: "西区", href: "/area/yokohama/nishi" },
      { name: "中区", href: "/area/yokohama/naka" },
      { name: "南区", href: "/area/yokohama/minami" },
      { name: "港北区", href: "/area/yokohama/kohoku" },
      { name: "鶴見区", href: "/area/yokohama/tsurumi" },
      { name: "神奈川区", href: "/area/yokohama/kanagawa" },
      { name: "保土ケ谷区", href: "/area/yokohama/hodogaya" },
      { name: "緑区", href: "/area/yokohama/midori" },
    ],
  },
  {
    name: "埼玉",
    href: "/area/saitama",
    districts: [
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
    districts: [
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
    districts: [
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
    districts: [
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
    name: "札幌",
    href: "/area/sapporo",
    districts: [
      { name: "中央区", href: "/area/sapporo/chuo" },
      { name: "北区", href: "/area/sapporo/kita" },
      { name: "東区", href: "/area/sapporo/higashi" },
      { name: "白石区", href: "/area/sapporo/shiroishi" },
      { name: "豊平区", href: "/area/sapporo/toyohira" },
      { name: "南区", href: "/area/sapporo/minami" },
      { name: "西区", href: "/area/sapporo/nishi" },
      { name: "厚別区", href: "/area/sapporo/atsubetsu" },
    ],
  },
  {
    name: "京都",
    href: "/area/kyoto",
    districts: [
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
    name: "神戸",
    href: "/area/kobe",
    districts: [
      { name: "東灘区", href: "/area/kobe/higashinada" },
      { name: "灘区", href: "/area/kobe/nada" },
      { name: "兵庫区", href: "/area/kobe/hyogo" },
      { name: "長田区", href: "/area/kobe/nagata" },
      { name: "須磨区", href: "/area/kobe/suma" },
      { name: "垂水区", href: "/area/kobe/tarumi" },
      { name: "北区", href: "/area/kobe/kita" },
      { name: "中央区", href: "/area/kobe/chuo" },
    ],
  },
  {
    name: "仙台",
    href: "/area/sendai",
    districts: [
      { name: "青葉区", href: "/area/sendai/aoba" },
      { name: "宮城野区", href: "/area/sendai/miyagino" },
      { name: "若林区", href: "/area/sendai/wakabayashi" },
      { name: "太白区", href: "/area/sendai/taihaku" },
      { name: "泉区", href: "/area/sendai/izumi" },
    ],
  },
  {
    name: "広島",
    href: "/area/hiroshima",
    districts: [
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
    name: "北九州",
    href: "/area/kitakyushu",
    districts: [
      { name: "門司区", href: "/area/kitakyushu/moji" },
      { name: "若松区", href: "/area/kitakyushu/wakamatsu" },
      { name: "戸畑区", href: "/area/kitakyushu/tobata" },
      { name: "小倉北区", href: "/area/kitakyushu/kokurakita" },
      { name: "小倉南区", href: "/area/kitakyushu/kokuraminami" },
      { name: "八幡東区", href: "/area/kitakyushu/yahatahigashi" },
      { name: "八幡西区", href: "/area/kitakyushu/yahatanishi" },
    ],
  },
  {
    name: "川崎",
    href: "/area/kawasaki",
    districts: [
      { name: "川崎区", href: "/area/kawasaki/kawasaki" },
      { name: "幸区", href: "/area/kawasaki/saiwai" },
      { name: "中原区", href: "/area/kawasaki/nakahara" },
      { name: "高津区", href: "/area/kawasaki/takatsu" },
      { name: "多摩区", href: "/area/kawasaki/tama" },
      { name: "宮前区", href: "/area/kawasaki/miyamae" },
      { name: "麻生区", href: "/area/kawasaki/asao" },
    ],
  },
  {
    name: "さいたま",
    href: "/area/saitama-city",
    districts: [
      { name: "西区", href: "/area/saitama-city/nishi" },
      { name: "北区", href: "/area/saitama-city/kita" },
      { name: "大宮区", href: "/area/saitama-city/omiya" },
      { name: "見沼区", href: "/area/saitama-city/minuma" },
      { name: "中央区", href: "/area/saitama-city/chuo" },
      { name: "桜区", href: "/area/saitama-city/sakura" },
      { name: "浦和区", href: "/area/saitama-city/urawa" },
      { name: "南区", href: "/area/saitama-city/minami" },
      { name: "緑区", href: "/area/saitama-city/midori" },
      { name: "岩槻区", href: "/area/saitama-city/iwatsuki" },
    ],
  },
  {
    name: "新潟",
    href: "/area/niigata",
    districts: [
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
    name: "浜松",
    href: "/area/hamamatsu",
    districts: [
      { name: "中央区", href: "/area/hamamatsu/chuo" },
      { name: "浜名区", href: "/area/hamamatsu/hamana" },
      { name: "天竜区", href: "/area/hamamatsu/tenryu" },
    ],
  },
  {
    name: "熊本",
    href: "/area/kumamoto",
    districts: [
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
      {areas.map((area, index) => (
        <li key={area.name}>
          <div className="flex items-center justify-between">
            <Link href={area.href} className="text-gray-300 hover:text-white hover:underline transition-colors block py-1">
              {area.name}
            </Link>
            {area.districts && (
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
          {area.districts && openIndex === index && (
            <ul className="pl-4 mt-2 space-y-1">
              {area.districts.map((district) => (
                <li key={district.name}>
                  <Link
                    href={district.href}
                    className="text-gray-400 hover:text-white hover:underline text-sm block py-1"
                  >
                    {district.name}
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
