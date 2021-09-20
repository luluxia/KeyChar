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
let products = ['Kanon', 'AIR', 'CLANNAD', '智代After ~It\'s a Wonderful Life~', 'Little Busters!', 'Kud Wafter', 'Rewrite', 'Summer Pockets', 'Summer Pockets REFLECTION BLUE', '成神之日', 'LOOPERS']
let data = [
  {
    name: ['冈崎朋也', '岡崎 朋也', 'おかさき ともや', 'Okazaki Tomoya'],
    cg: ['okazaki_tomoya_0.png', '', '', ''],
    month: 10,
    day: 30,
    color: '#6c6c9a',
    from: ['CLANNAD', '智代After ~It\'s a Wonderful Life~'],
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
    from: ['CLANNAD', '智代After ~It\'s a Wonderful Life~'],
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
    name: ['坂上鹰文', '坂上 鷹文', 'さかがみ たかふみ', 'Sakagami Takafumi'],
    cg: ['sakagami_takafumi_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#5e5e7c',
    from: ['智代After ~It\'s a Wonderful Life~'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['河南子', '河南子', 'かなこ', 'Katako'],
    cg: ['kanako_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#d98259',
    from: ['智代After ~It\'s a Wonderful Life~'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['三岛智', '三島 とも', 'みしま とも', 'Mishima Tomo'],
    cg: ['mishima_tomo_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#c63c3f',
    from: ['智代After ~It\'s a Wonderful Life~'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['国崎往人', '国崎 往人', 'くにさき ゆきと', 'Kunisaki Yukito'],
    cg: ['kunisaki_yukito_0.png', 'kunisaki_yukito_1.jpg', 'kunisaki_yukito_2.png', 'kunisaki_yukito_3.png'],
    month: 13,
    day: 32,
    color: '#5A4180',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['神尾观铃', '神尾 観鈴', 'かみお みすず', 'Kamio Misuzu'],
    cg: ['kamio_misuzu_0.png', 'kamio_misuzu_1.jpg', 'kamio_misuzu_2.jpg', 'kamio_misuzu_3.png'],
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
    cg: ['kirishima_kano_0.png', 'kirishima_kano_1.jpg', 'kirishima_kano_2.jpg', 'kirishima_kano_3.png'],
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
    cg: ['tohno_minagi_0.png', 'tohno_minagi_1.jpg', 'tohno_minagi_2.jpg', 'tohno_minagi_3.png'],
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
    cg: ['kamio_haruko_0.png', 'kamio_haruko_1.jpg', 'kamio_haruko_2.png', 'kamio_haruko_3.png'],
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
    cg: ['kirishima_hijiri_0.png', 'kirishima_hijiri_1.jpg', 'kirishima_hijiri_2.png', 'kirishima_hijiri_3.png'],
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
    cg: ['michiru_0.png', 'tohno_minagi_2.jpg', 'michiru_1.png', 'michiru_2.png'],
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
    cg: ['potato_0.png', 'potato_1.jpg', 'potato_2.png', 'kirishima_hijiri_3.png'],
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
    cg: ['kannabi_no_mikoto_0.png', 'kannabi_no_mikoto_1.jpg', 'kannabi_no_mikoto_2.jpg', 'kannabi_no_mikoto_3.jpg'],
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
    cg: ['uraha_0.png', 'uraha_1.jpg', 'uraha_2.jpg', 'uraha_3.jpg'],
    month: 13,
    day: 32,
    color: '#667770',
    from: ['AIR'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['相泽祐一', '相泽 祐一', 'あいざわ ゆういち', 'Aizawa Yuuichi'],
    cg: ['aizawa_yuuichi_0.png', 'aizawa_yuuichi_1.jpg', 'aizawa_yuuichi_2.png', 'aizawa_yuuichi_3.jpg'],
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
    cg: ['tsukimiya_ayu_0.png', 'tsukimiya_ayu_1.jpg', 'tsukimiya_ayu_2.jpg', 'tsukimiya_ayu_3.jpg'],
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
    cg: ['minase_nayuki_0.png', 'minase_nayuki_1.jpg', 'minase_akiko_1.jpg', 'minase_nayuki_2.jpg'],
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
    cg: ['sawatari_makoto_0.png', 'sawatari_makoto_1.jpg', 'sawatari_makoto_2.jpg', 'sawatari_makoto_3.jpg'],
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
    cg: ['misaka_shiori_0.png', 'misaka_shiori_1.jpg', 'misaka_shiori_2.jpg', 'misaka_shiori_3.jpg'],
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
    cg: ['kawasumi_mai_0.png', 'kawasumi_mai_1.jpg', 'kawasumi_mai_2.jpg', 'kawasumi_mai_3.jpg'],
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
    cg: ['misaka_kaori_0.png', 'misaka_kaori_1.jpg', 'misaka_kaori_2.jpg', 'misaka_kaori_3.jpg'],
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
    cg: ['kurata_sayuri_0.png', 'kurata_sayuri_1.jpg', 'kurata_sayuri_2.jpg', 'kurata_sayuri_3.jpg'],
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
    cg: ['amano_mishio_0.png', 'amano_mishio_1.jpg', 'amano_mishio_2.jpg', 'amano_mishio_3.jpg'],
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
    cg: ['minase_akiko_0.png', 'minase_akiko_1.jpg', 'minase_akiko_2.jpg', 'minase_akiko_3.jpg'],
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
    cg: ['kitagawa_jun_0.png', 'kitagawa_jun_1.png', 'kitagawa_jun_2.png', 'kitagawa_jun_3.jpg'],
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
    from: ['Little Busters!', 'Kud Wafter'],
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
    from: ['Little Busters!', 'Kud Wafter'],
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
    from: ['Little Busters!', 'Kud Wafter'],
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
    color: '#d3a981',
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
  {
    name: ['有月椎菜', '有月 椎菜', 'ありづき しいな', 'Arizuki Shiina'],
    cg: ['arizuki_shiina_0.png', ' ', ' ', ' '],
    month: 3,
    day: 25,
    color: '#df6c93',
    from: ['Kud Wafter'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['冰室忧希', '氷室 憂希', 'ひむろ ゆうき', 'Himuro Yuuki'],
    cg: ['himuro_yuuki_0.png', ' ', ' ', ' '],
    month: 11,
    day: 3,
    color: '#797997',
    from: ['Kud Wafter'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['阿酱前辈', 'あーちゃん先辈', 'あーちゃんせんぱい', 'A-chan Senpai'],
    cg: ['achan_senpai_0.png', ' ', ' ', ' '],
    month: 4,
    day: 1,
    color: '#8c4e58',
    from: ['Kud Wafter'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['有月初', '有月 初', 'ありづき うい', 'Arizuki Ui'],
    cg: ['arizuki_ui_0.png', ' ', ' ', ' '],
    month: 7,
    day: 16,
    color: '#a07776',
    from: ['Kud Wafter'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['天王寺瑚太朗', '天王寺 瑚太朗', 'てんのうじ こたろう', 'Tennouji Kotarou'],
    cg: ['tennouji_kotarou_0.png', ' ', ' ', ' '],
    month: 5,
    day: 2,
    color: '#c65815',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['神户小鸟', '神戸 小鳥', 'かんべ ことり', 'Kanbe Kotori'],
    cg: ['kanbe_kotori_0.png', ' ', ' ', ' '],
    month: 7,
    day: 26,
    color: '#aa1c3e',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['凤千早', '鳳 ちはや', 'おおとり ちはや', 'Ohtori chihaya'],
    cg: ['ohtori_chihaya_0.png', ' ', ' ', ' '],
    month: 8,
    day: 24,
    color: '#faa578',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['千里朱音', '千里 朱音', 'せんり あかね', 'Senri Akane'],
    cg: ['senri_akane_0.png', ' ', ' ', ' '],
    month: 2,
    day: 17,
    color: '#a4746a',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['中津静流', '中津 静流', 'なかつ しずる', 'Nakatsu Sizuru'],
    cg: ['nakatsu_sizuru_0.png', ' ', ' ', ' '],
    month: 6,
    day: 18,
    color: '#da9c3f',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['此花露西娅', '此花 ルチア', 'このはな ルチア', 'Konohana Lucia'],
    cg: ['konohana_lucia_0.png', ' ', ' ', ' '],
    month: 12,
    day: 23,
    color: '#8e79a2',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['篝', '篝', 'かがり', 'Kagari'],
    cg: ['kagari_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#dfcfd8',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['吉野晴彦', '吉野 晴彦', 'よしの はるひこ', 'Yoshino Haruhiko'],
    cg: ['yoshino_haruhiko_0.png', ' ', ' ', ' '],
    month: 11,
    day: 7,
    color: '#716461',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['凤咲夜', '鳳 咲夜', 'おおとり さくや', 'Ohtori Sakuya'],
    cg: ['ohtori_sakuya_0.png', ' ', ' ', ' '],
    month: 3,
    day: 27,
    color: '#565875',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['井上晶', '井上 晶', 'いのうえ あきら', 'Inoue Akira'],
    cg: ['inoue_akira_0.png', ' ', ' ', ' '],
    month: 3,
    day: 6,
    color: '#9c1f07',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['江坂宗源', '江坂 宗源', 'えさか そうげん', 'Esaka Sougen'],
    cg: ['esaka_sougen_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#4d3b36',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['西九条灯花', '西九条 灯花', 'にしくじょう とうか', 'Nishikujou Touka'],
    cg: ['nishikijou_touka_0.png', ' ', ' ', ' '],
    month: 7,
    day: 12,
    color: '#8e8db5',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['御堂', 'ミドウ', 'Midow'],
    cg: ['midow_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#cc2124',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['今宫新', '今宮 新', 'いまみや あらた', 'Imamiya Arata'],
    cg: ['imamiya_arata_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#fc9239',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['志麻子', 'しまこ', 'Shimako'],
    cg: ['shimako_0.png', ' ', ' ', ' '],
    month: 6,
    day: 13,
    color: '#616161',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['琪比摩斯', 'ちびもす', 'Chibi-Moth'],
    cg: ['chibi_moth_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#f699a0',
    from: ['Rewrite'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['鸣濑白羽', '鳴瀬 しろは', 'なるせ しろは', 'Naruse Shiroha'],
    cg: ['naruse_shiroha_0.png', ' ', ' ', ' '],
    month: 6,
    day: 8,
    color: '#69489d',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['空门苍', '空門 蒼', 'そらかど あお', 'Sorakado Ao'],
    cg: ['sorakado_ao_0.png', ' ', ' ', ' '],
    month: 9,
    day: 20,
    color: '#e8547b',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['久岛鸥', '久島 鴎', 'くしま かもめ', 'Kushima Kamome'],
    cg: ['kushima_kamome_0.png', ' ', ' ', ' '],
    month: 4,
    day: 4,
    color: '#e3a118',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['䌷文德斯', '紬 ヴェンダース', 'つむぎ ヴェンダース', 'Tsumugi Wenders'],
    cg: ['tsumugi_wenders_0.png', ' ', ' ', ' '],
    month: 8,
    day: 31,
    color: '#389e0e',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['野村美希', '野村 美希', 'のむら みき', 'Nomura Miki'],
    cg: ['nomura_miki_0.png', ' ', ' ', ' '],
    month: 2,
    day: 2,
    color: '#30b043',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['水织静久', '水織 静久', 'みずおり しずく', 'Mizuori Shizuku'],
    cg: ['mizuori_shizuku_0.png', ' ', ' ', ' '],
    month: 4,
    day: 29,
    color: '#ab47a1',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['加藤羽未', '加藤 うみ', 'かとう うみ', 'Kato Umi'],
    cg: ['kato_umi_0.png', ' ', ' ', ' '],
    month: 9,
    day: 1,
    color: '#c9358b',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['神山识', '神山 識', 'かみやま しき', 'Kamiyama Shiki'],
    cg: ['kamiyama_shiki_0.png', ' ', ' ', ' '],
    month: 7,
    day: 4,
    color: '#d32258',
    from: ['Summer Pockets REFLECTION BLUE'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['三谷良一', '三谷 良一', 'みたに りょういち', 'Mitani Ryoichi'],
    cg: ['mitani_ryoichi_0.png', ' ', ' ', ' '],
    month: 2,
    day: 9,
    color: '#fbb14a',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['加纳天善', '加納 天善', 'かのう てんざん', 'Kano Tenzen'],
    cg: ['kano_tenzen_0.png', ' ', ' ', ' '],
    month: 10,
    day: 10,
    color: '#86d1d7',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['鸣濑小鸠', '鳴瀬 小鳩', 'なるせ こばと', 'Naruse Kobato'],
    cg: ['naruse_kobato_0.png', ' ', ' ', ' '],
    month: 12,
    day: 2,
    color: '#e8c09a',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['岬镜子', '岬 鏡子', 'みさき きょうこ', 'Misaki Kyoko'],
    cg: ['misaki_kyoko_0.png', ' ', ' ', ' '],
    month: 10,
    day: 18,
    color: '#99575c',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['鹰原羽依里', '鷹原 羽依里', 'たかはら はいり', 'Takahara Hairi'],
    cg: ['takahara_hairi_0.png', ' ', ' ', ' '],
    month: 5,
    day: 21,
    color: '#858584',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['稻荷', 'イナリ', 'Inari'],
    cg: ['inari_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#0645ad',
    from: ['Summer Pockets'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['佐藤雏', '佐藤 ひな', 'さとう ひな', 'Satou Hina'],
    cg: ['hina_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#ffadce',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['成神阳太', '成神 陽太', 'なるかみ ようた', 'Narukami Youta'],
    cg: ['narukami_youta_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#534f4e',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['伊座并杏子', '伊座並 杏子', 'いざなみ きょうこ', 'Iginami Kyouko'],
    cg: ['iginami_kyouko_0.png', ' ', ' ', ' '],
    month: 8,
    day: 29,
    color: '#44466c',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['国宝阿修罗', '国宝 阿修羅', 'こくほう あしゅら', 'Kokuhou Asyura'],
    cg: ['kokuhou_asyura_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#d5b382',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['成神空', '成神 空', 'なるかみ そら', 'Narukami Sora'],
    cg: ['narukami_sora_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#c33456',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['神宫司光', '神宮司 ひかり', 'じんぐうじ ひかり', 'Zinguuzi Hikari'],
    cg: ['zinguuzi_hikari_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#89204d',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['天愿贺子', '天願 賀子', 'てんがん かこ', 'Tengan Kako'],
    cg: ['tengan_kako_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#994e75',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['成神时子', '成神 時子', 'なるかみ ときこ', 'Narukami Tokiko'],
    cg: ['narukami_tokiko_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#846272',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['成神大地', '成神 大地', 'なるかみ だいち', 'Narukami Daichi'],
    cg: ['narukami_daichi_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#4a5161',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['铃木央人', '鈴木 央人', 'すずき ひろと', 'Suzuki Hiroto'],
    cg: ['suzuki_hiroto_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#8f95a6',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['CEO', 'しーいーおー', 'Shi-i-o'],
    cg: ['ceo_0.png', ' ', ' ', ' '],
    month: 13,
    day: 32,
    color: '#6d4b5a',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['尾熊雷太', '尾熊 雷太', 'おぐま らいた', 'Oguma Raita'],
    cg: ['oguma_raita_0.png', 'oguma_raita_1.png', ' ', ' '],
    month: 13,
    day: 32,
    color: '#45454f',
    from: ['成神之日'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['藤川美亚·Mia', '藤川 みあ', 'ふじかわ みあ', 'Fujikawa Mia'],
    cg: ['fujikawa_mia_0.png', 'fujikawa_mia_1.png', ' ', ' '],
    month: 4,
    day: 2,
    color: '#d7308f',
    from: ['LOOPERS'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['平良明·Tyler', '平良 明', 'たいら あきら', 'Taira Akira'],
    cg: ['taira_akira_0.png', 'taira_akira_1.png', ' ', ' '],
    month: 7,
    day: 21,
    color: '#d7308f',
    from: ['LOOPERS'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['昼田贵理子·Hilda', '昼田 貴理子', 'ひるだ きりこ', 'Hiruda Kiriko'],
    cg: ['hiruda_kiriko_0.png', 'hiruda_kiriko_1.png', ' ', ' '],
    month: 9,
    day: 13,
    color: '#d7308f',
    from: ['LOOPERS'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['町村玲央奈·Leona', '町村 玲央奈', 'まちむら れおな', 'Machimura Reona'],
    cg: ['machimura_reona_0.png', 'machimura_reona_1.png', ' ', ' '],
    month: 2,
    day: 24,
    color: '#d7308f',
    from: ['LOOPERS'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['西门贵明·Simon', '西門 貴明', 'さいもん たかあき', 'Saimon Takaaki'],
    cg: ['saimon_takaaki_0.png', 'saimon_takaaki_1.png', ' ', ' '],
    month: 3,
    day: 5,
    color: '#d7308f',
    from: ['LOOPERS'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['雾岛让·Joe', '霧島 譲', 'きりしま じょう', 'Kirijima Jyoo'],
    cg: ['kirijima_jyoo_0.png', 'kirijima_jyoo_1.png', ' ', ' '],
    month: 6,
    day: 6,
    color: '#d7308f',
    from: ['LOOPERS'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['堀井佐奈·Holly', '堀井 佐奈', 'ほりい さな', 'Horii Sana'],
    cg: ['horii_sana_0.png', 'horii_sana_1.png', ' ', ' '],
    month: 12,
    day: 27,
    color: '#d7308f',
    from: ['LOOPERS'],
    other: [
      '待补充'
    ]
  },
  {
    name: ['利田美咲·Ritapon', '利田 美咲', 'りた みさき', 'Rita Misaki'],
    cg: ['rita_misaki_0.png', 'rita_misaki_1.png', ' ', ' '],
    month: 5,
    day: 8,
    color: '#d7308f',
    from: ['LOOPERS'],
    other: [
      '待补充'
    ]
  }
]
