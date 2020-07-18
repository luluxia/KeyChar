let demo = [
  {
    name: ['中文名', '日文名', '平假名', '罗马音'],
    cg: ['立绘', 'CG1', 'CG2', 'CG3'],
    month: '出生月，未知为13（因为方便排序）',
    day: '出生日，未知为32（因为方便排序）',
    from: ['登场作品'],
    other: [
      '补充信息，一行一个',
      '补充信息，一行一个'
    ]
  }
]
let data = [
  {
    name: ['冈崎朋也', '岡崎 朋也', 'おかさき ともや', 'Okazaki Tomoya'],
    cg: ['okazaki_tomoya_0.png', '', '', ''],
    month: 10,
    day: 30,
    color: '#6c6c9a',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['古河渚', '古河 渚', 'ふるかわ なぎさ', 'Furukawa Nagisa'],
    cg: ['furukawa_nagisa_0.png', ' ', ' ', ' '],
    month: 12,
    day: 24,
    color: '#dc3c78',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['藤林杏', '藤林 杏', 'ふじばやし きょう', 'Fujibayashi Kyo'],
    cg: ['fujibayashi_kyo_0.png', ' ', ' ', ' '],
    month: 9,
    day: 9,
    color: '#8241a5',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['一之濑琴美', '一ノ瀨 ことみ', 'いちのせ ことみ', 'Ichinose Kotomi'],
    cg: ['ichinose_kotomi_0.png', ' ', ' ', ' '],
    month: 5,
    day: 13,
    color: '#4646aa',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['坂上智代', '坂上 智代', 'さかがみ ともよ', 'Sakagami Tomoyo'],
    cg: ['sakagami_tomoyo_0.png', ' ', ' ', ' '],
    month: 10,
    day: 14,
    color: '#3ca0b4',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['伊吹风子', '伊吹 風子', 'いぶき ふうこ', 'Ibuki Fuko'],
    cg: ['ibuki_fuko_0.png', ' ', ' ', ' '],
    month: 7,
    day: 20,
    color: '#3C6E3C',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['宫泽有纪宁', '宮沢 有紀寧', 'みやざわ ゆきね', 'Miyazawa Yukine'],
    cg: ['miyazawa_yukine_0.png', ' ', ' ', ' '],
    month: 8,
    day: 7,
    color: '#826432',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['藤林椋', '藤林 椋', 'ふじばやし りょう', 'Fujibayashi Ryo'],
    cg: ['fujibayashi_ryo_0.png', ' ', ' ', ' '],
    month: 9,
    day: 9,
    color: '#B450C8',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['春原阳平', '春原 阳平', 'すのはら ようへい', 'Sunohara Youhei'],
    cg: ['sunohara_youhei_0.png', ' ', ' ', ' '],
    month: 2,
    day: 17,
    color: '#996a4b',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['相乐美佐枝', '相楽 美佐枝', 'さがら みさえ', 'Sagara Misae'],
    cg: ['sagara_misae_0.png', ' ', ' ', ' '],
    month: 4,
    day: 3,
    color: '#4888C5',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['古河秋生', '古河 秋生', 'ふるかわ あきお', 'Furukawa Akio'],
    cg: ['furukawa_akio_0.png', ' ', ' ', ' '],
    month: 7,
    day: 20,
    color: '#96283C',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['古河早苗', '古河 早苗', 'ふるかわ さなえ', 'Furukawa Sanae'],
    cg: ['furukawa_sanae_0.png', ' ', ' ', ' '],
    month: 10,
    day: 5,
    color: '#DC821E',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['伊吹公子', '伊吹 公子', 'いぶき こうこ', 'Ibuki Kouko'],
    cg: ['ibuki_kouko_0.png', ' ', ' ', ' '],
    month: 1,
    day: 18,
    color: '#42AA82',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['幸村俊夫', '幸村 俊夫', 'こうむら としお', 'Koumura Toshio'],
    cg: ['koumura_toshio_0.png', ' ', ' ', ' '],
    month: 8,
    day: 27,
    color: '#939D52',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['春原芽衣', '春原 芽衣', 'すのはら めい', 'Sunohara Mei'],
    cg: ['sunohara_mei_0.png', ' ', ' ', ' '],
    month: 6,
    day: 11,
    color: '#FFC000',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['芳野祐介', '芳野 祐介', 'よしの ゆうすけ', 'Yoshino Yusuke'],
    cg: ['yoshino_yusuke_0.png', ' ', ' ', ' '],
    month: 12,
    day: 5,
    color: '#4866A6',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['柊胜平', '柊 胜平', 'ひいらぎ かっぺい', 'Hiiragi Kappei'],
    cg: ['hiiragi_kappei_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#3AC4B9',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['冈崎直幸', '岡崎 直幸', 'おかざき なおゆき', 'Okazaki Naoyuki'],
    cg: ['okazaki_naoyuki_0.png', ' ', ' ', ' '],
    month: 5,
    day: 1,
    color: '#7F7F7F',
    from: ['CLANNAD'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['国崎往人', '国崎 往人', 'くにさき ゆきと', 'Kunisaki Yukito'],
    cg: ['kunisaki_yukito_0.png', ' ', ' ', ' '],
    month: 9,
    day: 14,
    color: '#5A4180',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['神尾观铃', '神尾 観鈴', 'かみお みすず', 'Kamio Misuzu'],
    cg: ['kamio_misuzu_0.png', ' ', ' ', ' '],
    month: 7,
    day: 23,
    color: '#E7BD68',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['雾岛佳乃', '霧島 佳乃', 'きりしま かの', 'Kirishima Kano'],
    cg: ['kirishima_kano_0.png', ' ', ' ', ' '],
    month: 6,
    day: 12,
    color: '#222558',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['远野美凪', '遠野 美凪', 'とおの みなぎ', 'Tohno Minagi'],
    cg: ['tohno_minagi_0.png', ' ', ' ', ' '],
    month: 12,
    day: 22,
    color: '#654F4F',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['神尾晴子', '神尾 晴子', 'かみお はるこ', 'Kamio Haruko'],
    cg: ['kamio_haruko_0.png', ' ', ' ', ' '],
    month: 11,
    day: 3,
    color: '#772C35',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['雾岛圣', '霧島 聖', 'きりしま ひじり', 'Kirishima Hijiri'],
    cg: ['kirishima_hijiri_0.png', ' ', ' ', ' '],
    month: 1,
    day: 3,
    color: '#1D204C',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['小满', 'みちる', 'Michiru'],
    cg: ['michiru_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#993446',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['土豆', 'ポテト', 'Potato'],
    cg: ['potato_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#D6C892',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['神奈备命', '神奈備命', 'かんなびのみこと', 'Kannabi no Mikoto'],
    cg: ['kannabi_no_mikoto_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#45427A',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['里叶', '裏葉', 'うらは', 'Uraha'],
    cg: ['uraha_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#0D130E',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['相泽祐一', '相泽 祐一', 'あいざわ ゆういち', 'Aizawa Yuuichi'],
    cg: ['aizawa_yuuichi_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#905E38',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['月宫亚由', '月宮 あゆ', 'つきみや あゆ', 'Tsukimiya Ayu'],
    cg: ['tsukimiya_ayu_0.png', ' ', ' ', ' '],
    month: 1,
    day: 7,
    color: '#b86735',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['水濑名雪', '水瀬 名雪', 'みなせ なゆき', 'Minase Nayuki'],
    cg: ['minase_nayuki_0.png', ' ', ' ', ' '],
    month: 12,
    day: 23,
    color: '#626BB8',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['泽渡真琴', '沢渡 真琴', 'さわたり まこと', 'Sawatari Makoto'],
    cg: ['sawatari_makoto_0.png', ' ', ' ', ' '],
    month: 1,
    day: 6,
    color: '#F77D33',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['美坂栞', '美坂 栞', 'みさか しおり', 'Misaka Shiori'],
    cg: ['misaka_shiori_0.png', ' ', ' ', ' '],
    month: 2,
    day: 1,
    color: '#78653B',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['川澄舞', '川澄 舞', 'かわすみ　まい', 'Kawasumi Mai'],
    cg: ['kawasumi_mai_0.png', ' ', ' ', ' '],
    month: 1,
    day: 29,
    color: '#5F6099',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['美坂香里', '美坂 香里', 'みさか かおり', 'Misaka Kaori'],
    cg: ['misaka_kaori_0.png', ' ', ' ', ' '],
    month: 3,
    day: 1,
    color: '#AF8B64',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['仓田佐祐理', '倉田 佐祐理', 'くらた さゆり', 'Kurata Sayuri'],
    cg: ['kurata_sayuri_0.png', ' ', ' ', ' '],
    month: 5,
    day: 5,
    color: '#726D59',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['天野美汐', '天野 美汐', 'あまの みしお', 'Amano Mishio'],
    cg: ['amano_mishio_0.png', ' ', ' ', ' '],
    month: 12,
    day: 6,
    color: '#A85D7E',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['水瀬秋子', '水瀬 秋子', 'みなせ あきこ', 'Minase Akiko'],
    cg: ['minase_akiko_0.png', ' ', ' ', ' '],
    month: 9,
    day: 23,
    color: '#6A62AD',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['北川润', '北川 潤', 'きたがわ　じゅん', 'Kitagawa Jun'],
    cg: ['kitagawa_jun_0.png', ' ', ' ', ' '],
    month: 4,
    day: 18,
    color: '#EDAB5D',
    from: ['Kanon'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['直枝理树', '直枝 理樹', 'なおえ りき', 'Naoe Riki'],
    cg: ['naoe_riki_0.png', ' ', ' ', ' '],
    month: 1,
    day: 17,
    color: '#876e58',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['神北小毬', '神北 小毬', 'かみきた こまり', 'Kamikita Komari'],
    cg: ['kamikita_komari_0.png', ' ', ' ', ' '],
    month: 4,
    day: 5,
    color: '#b87b6f',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['枣铃', '棗 鈴', 'なつめ りん', 'Natsume Rin'],
    cg: ['natsume_rin_0.png', ' ', ' ', ' '],
    month: 9,
    day: 2,
    color: '#9a5c4d',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['三枝叶留佳', '三枝 葉留佳', 'さいぐさ はるか', 'Saigusa Haruka'],
    cg: ['saigusa_haruka_0.png', ' ', ' ', ' '],
    month: 10,
    day: 13,
    color: '#d06ea1',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['能美库特莉亚芙卡', '能美 クドリャフカ', 'のうみ クドリャフカ', 'Noumi Kudryavka'],
    cg: ['noumi_kudryavka_0.png', ' ', ' ', ' '],
    month: 6,
    day: 12,
    color: '#d1b5cc',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['来谷唯湖', '来ヶ谷 唯湖', 'くるがや ゆいこ', 'Kurugaya Yuiko'],
    cg: ['kuruguya_yuiko_0.png', ' ', ' ', ' '],
    month: 3,
    day: 13,
    color: '#5D5B66',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['西园美鱼', '西園 美魚', 'にしぞの みお', 'Nishizono Mio'],
    cg: ['nishizono_mio_0.png', ' ', ' ', ' '],
    month: 8,
    day: 22,
    color: '#78aeeb',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['二木佳奈多', '二木 加奈多', 'ふたき かなた', 'Futaki Kanata'],
    cg: ['futaki_kanata_0.png', ' ', ' ', ' '],
    month: 10,
    day: 13,
    color: '#d06ea1',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['笹濑川佐佐美', '笹瀬川 佐々美', 'ささせがわ ささみ', 'Sasasegawa Sasami'],
    cg: ['sasasegawa_sasami_0.png', ' ', ' ', ' '],
    month: 12,
    day: 3,
    color: '#9179ae',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['朱鹭户沙耶', '朱鷺戸 沙耶', 'ときど さや', 'Tokido Saya'],
    cg: ['tokido_saya_0.png', ' ', ' ', ' '],
    month: 10,
    day: 21,
    color: '#f1d1a0',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['枣恭介', '棗 恭介', 'なつめ きょうすけ', 'Natume Kyousuke'],
    cg: ['natume_kyousuke_0.png', ' ', ' ', ' '],
    month: 5,
    day: 4,
    color: '#c17c6c',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['井之原真人', '井ノ原 真人', 'いのはら まさと', 'Inohara Masato'],
    cg: ['inohara_masato_0.png', ' ', ' ', ' '],
    month: 11,
    day: 6,
    color: '#5e616c',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['宫泽谦吾', '宮沢 謙吾', 'みやざわ けんご', 'Miyazawa kengo'],
    cg: ['miyazawa_kengo_0.png', ' ', ' ', ' '],
    month: 4,
    day: 30,
    color: '#a4a097',
    from: ['Little Busters!'],
    other: [
      '待补充'
    ]
  },
]