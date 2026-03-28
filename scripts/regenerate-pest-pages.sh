#!/bin/bash
# 新規12ページにハチページの構造をコピーして個別カスタマイズ

cd ~/.openclaw/workspace/pest-control-001

# アリ
cp app/hachi/page.tsx app/ari/page.tsx
sed -i '' 's/ハチ駆除業者比較 | スズメバチ・アシナガバチの料金相場と緊急対処法/アリ駆除業者比較 | イエヒメアリ・ルリアリの料金相場と対策方法/g' app/ari/page.tsx
sed -i '' 's/ハチ駆除業者10社を料金・対応速度・実績で徹底比較。スズメバチ、アシナガバチ、ミツバチの駆除料金相場（8,000円〜50,000円）、緊急時の対処法、季節別ハチ対策カレンダーを詳しく解説。即日対応可能な業者も掲載。/アリ駆除業者10社を料金・実績・対応速度で徹底比較。イエヒメアリ、ルリアリの駆除料金相場（10,000円〜30,000円）、侵入経路対策、季節別アリ対策カレンダーを詳しく解説。/g' app/ari/page.tsx
sed -i '' 's/"hachi"/"ari"/g' app/ari/page.tsx
sed -i '' 's/ハチ/アリ/g' app/ari/page.tsx
sed -i '' 's/HachiPage/AriPage/g' app/ari/page.tsx
sed -i '' 's/🐝/🐜/g' app/ari/page.tsx

# カメムシ
cp app/hachi/page.tsx app/kamemushi/page.tsx
sed -i '' 's/ハチ駆除業者比較 | スズメバチ・アシナガバチの料金相場と緊急対処法/カメムシ駆除業者比較 | 大量発生時の料金相場と対策方法/g' app/kamemushi/page.tsx
sed -i '' 's/ハチ駆除業者10社を料金・対応速度・実績で徹底比較。スズメバチ、アシナガバチ、ミツバチの駆除料金相場（8,000円〜50,000円）、緊急時の対処法、季節別ハチ対策カレンダーを詳しく解説。即日対応可能な業者も掲載。/カメムシ駆除業者10社を料金・実績・対応速度で徹底比較。カメムシ駆除料金相場（15,000円〜50,000円）、大量発生時の対処法、侵入防止対策を詳しく解説。/g' app/kamemushi/page.tsx
sed -i '' 's/"hachi"/"kamemushi"/g' app/kamemushi/page.tsx
sed -i '' 's/ハチ/カメムシ/g' app/kamemushi/page.tsx
sed -i '' 's/HachiPage/KamemushiPage/g' app/kamemushi/page.tsx
sed -i '' 's/🐝/🐛/g' app/kamemushi/page.tsx

# ムカデ
cp app/hachi/page.tsx app/mukade/page.tsx
sed -i '' 's/ハチ駆除業者比較 | スズメバチ・アシナガバチの料金相場と緊急対処法/ムカデ・ゲジゲジ駆除業者比較 | 料金相場と侵入防止対策/g' app/mukade/page.tsx
sed -i '' 's/ハチ駆除業者10社を料金・対応速度・実績で徹底比較。スズメバチ、アシナガバチ、ミツバチの駆除料金相場（8,000円〜50,000円）、緊急時の対処法、季節別ハチ対策カレンダーを詳しく解説。即日対応可能な業者も掲載。/ムカデ・ゲジゲジ駆除業者10社を料金・実績・対応速度で徹底比較。駆除料金相場（20,000円〜50,000円）、侵入経路封鎖、毒対策を詳しく解説。/g' app/mukade/page.tsx
sed -i '' 's/"hachi"/"mukade"/g' app/mukade/page.tsx
sed -i '' 's/ハチ/ムカデ・ゲジゲジ/g' app/mukade/page.tsx
sed -i '' 's/HachiPage/MukadePage/g' app/mukade/page.tsx
sed -i '' 's/🐝/🐛/g' app/mukade/page.tsx

# シバンムシ
cp app/hachi/page.tsx app/shibanmushi/page.tsx
sed -i '' 's/ハチ駆除業者比較 | スズメバチ・アシナガバチの料金相場と緊急対処法/シバンムシ駆除業者比較 | 畳・木材食害の料金相場と対策/g' app/shibanmushi/page.tsx
sed -i '' 's/ハチ駆除業者10社を料金・対応速度・実績で徹底比較。スズメバチ、アシナガバチ、ミツバチの駆除料金相場（8,000円〜50,000円）、緊急時の対処法、季節別ハチ対策カレンダーを詳しく解説。即日対応可能な業者も掲載。/シバンムシ駆除業者10社を料金・実績・対応速度で徹底比較。シバンムシ駆除料金相場（15,000円〜40,000円）、畳・木材の食害対策、発生源特定方法を詳しく解説。/g' app/shibanmushi/page.tsx
sed -i '' 's/"hachi"/"shibanmushi"/g' app/shibanmushi/page.tsx
sed -i '' 's/ハチ/シバンムシ/g' app/shibanmushi/page.tsx
sed -i '' 's/HachiPage/ShibanmushiPage/g' app/shibanmushi/page.tsx
sed -i '' 's/🐝/🐛/g' app/shibanmushi/page.tsx

# 毛虫
cp app/hachi/page.tsx app/kemushi/page.tsx
sed -i '' 's/ハチ駆除業者比較 | スズメバチ・アシナガバチの料金相場と緊急対処法/毛虫駆除業者比較 | チャドクガ・イラガの料金相場と対策/g' app/kemushi/page.tsx
sed -i '' 's/ハチ駆除業者10社を料金・対応速度・実績で徹底比較。スズメバチ、アシナガバチ、ミツバチの駆除料金相場（8,000円〜50,000円）、緊急時の対処法、季節別ハチ対策カレンダーを詳しく解説。即日対応可能な業者も掲載。/毛虫駆除業者10社を料金・実績・対応速度で徹底比較。チャドクガ、イラガの駆除料金相場（10,000円〜30,000円）、皮膚炎対策、庭木の予防方法を詳しく解説。/g' app/kemushi/page.tsx
sed -i '' 's/"hachi"/"kemushi"/g' app/kemushi/page.tsx
sed -i '' 's/ハチ/毛虫/g' app/kemushi/page.tsx
sed -i '' 's/HachiPage/KemushiPage/g' app/kemushi/page.tsx
sed -i '' 's/🐝/🐛/g' app/kemushi/page.tsx

# ハクビシン
cp app/nezumi/page.tsx app/hakubishin/page.tsx
sed -i '' 's/ネズミ駆除業者比較/ハクビシン駆除業者比較/g' app/hakubishin/page.tsx
sed -i '' 's/80,000円〜200,000円/100,000円〜300,000円/g' app/hakubishin/page.tsx
sed -i '' 's/"nezumi"/"hakubishin"/g' app/hakubishin/page.tsx
sed -i '' 's/ネズミ/ハクビシン/g' app/hakubishin/page.tsx
sed -i '' 's/NezumiPage/HakubishinPage/g' app/hakubishin/page.tsx
sed -i '' 's/🐭/🦝/g' app/hakubishin/page.tsx

# イタチ
cp app/nezumi/page.tsx app/itachi/page.tsx
sed -i '' 's/ネズミ駆除業者比較/イタチ駆除業者比較/g' app/itachi/page.tsx
sed -i '' 's/80,000円〜200,000円/80,000円〜250,000円/g' app/itachi/page.tsx
sed -i '' 's/"nezumi"/"itachi"/g' app/itachi/page.tsx
sed -i '' 's/ネズミ/イタチ/g' app/itachi/page.tsx
sed -i '' 's/NezumiPage/ItachiPage/g' app/itachi/page.tsx
sed -i '' 's/🐭/🦦/g' app/itachi/page.tsx

# アライグマ
cp app/nezumi/page.tsx app/araiguma/page.tsx
sed -i '' 's/ネズミ駆除業者比較/アライグマ駆除業者比較/g' app/araiguma/page.tsx
sed -i '' 's/80,000円〜200,000円/120,000円〜350,000円/g' app/araiguma/page.tsx
sed -i '' 's/"nezumi"/"araiguma"/g' app/araiguma/page.tsx
sed -i '' 's/ネズミ/アライグマ/g' app/araiguma/page.tsx
sed -i '' 's/NezumiPage/AraigumaPage/g' app/araiguma/page.tsx
sed -i '' 's/🐭/🦝/g' app/araiguma/page.tsx

# テン
cp app/nezumi/page.tsx app/ten/page.tsx
sed -i '' 's/ネズミ駆除業者比較/テン駆除業者比較/g' app/ten/page.tsx
sed -i '' 's/80,000円〜200,000円/90,000円〜280,000円/g' app/ten/page.tsx
sed -i '' 's/"nezumi"/"ten"/g' app/ten/page.tsx
sed -i '' 's/ネズミ/テン/g' app/ten/page.tsx
sed -i '' 's/NezumiPage/TenPage/g' app/ten/page.tsx
sed -i '' 's/🐭/🦊/g' app/ten/page.tsx

# アナグマ
cp app/nezumi/page.tsx app/anaguma/page.tsx
sed -i '' 's/ネズミ駆除業者比較/アナグマ駆除業者比較/g' app/anaguma/page.tsx
sed -i '' 's/80,000円〜200,000円/80,000円〜250,000円/g' app/anaguma/page.tsx
sed -i '' 's/"nezumi"/"anaguma"/g' app/anaguma/page.tsx
sed -i '' 's/ネズミ/アナグマ/g' app/anaguma/page.tsx
sed -i '' 's/NezumiPage/AnagumaPage/g' app/anaguma/page.tsx
sed -i '' 's/🐭/🦡/g' app/anaguma/page.tsx

# タヌキ
cp app/nezumi/page.tsx app/tanuki/page.tsx
sed -i '' 's/ネズミ駆除業者比較/タヌキ駆除業者比較/g' app/tanuki/page.tsx
sed -i '' 's/80,000円〜200,000円/70,000円〜230,000円/g' app/tanuki/page.tsx
sed -i '' 's/"nezumi"/"tanuki"/g' app/tanuki/page.tsx
sed -i '' 's/ネズミ/タヌキ/g' app/tanuki/page.tsx
sed -i '' 's/NezumiPage/TanukiPage/g' app/tanuki/page.tsx
sed -i '' 's/🐭/🦝/g' app/tanuki/page.tsx

# dani2（新ダニページ）
cp app/dani/page.tsx app/dani2/page.tsx
sed -i '' 's/"dani"/"dani2"/g' app/dani2/page.tsx

echo "完了！"
