export const ASSETS = '/assets/';

export const members = [
  //      .-------.  [==]
  //     / /////  | /
  //    | / .  .  ||
  //    |\|   _   /|
  //    ||'-----'||
  //    || /|_|\ ||
  // Hitori Gotoh / Lead guitar
  {
    id: 'hitori',
    name: 'Hitori Gotoh',
    short: 'Bocchi',
    jp: '後藤ひとり',
    role: 'Solo gitara · Qo‘shiq matni',
    instrument: 'LEAD GUITAR',
    color: '#f184b5',
    cv: 'Yoshino Aoyama',
    label: 'PUSHTI / 01',
    traits: ['Introvert', 'Iste’dodli', 'Gitara qahramoni'],
    intro:
      'Guruhning pushti rangli yuragi. Hitori juda tortinchoq, lekin gitara qo‘liga tushsa, uning o‘rniga musiqa gapiradi.',
    bio: 'U guruhga qo‘shilish orzusi bilan gitara chalishni o‘rgangan. Internetda “guitarhero” nomi bilan ijrolarini ulashadi. Nijika bilan kutilmagan uchrashuv uni xonasidan STARRY sahnasiga olib chiqadi.',
    extra:
      'Kessoku Band’da solo gitara chaladi va qo‘shiq matnlarini yozadi. Uning yo‘li — birdan o‘zgarish emas, kichik qadamlar bilan odamlarga yaqinlashish haqidagi hikoya.',
  },

  //      /\
  //     /__\ .-----.
  //        \/ / / |==.
  //        || ^ ^ |   )
  //         \  U /   /
  //          '---'
  // Nijika Ijichi / Drums
  {
    id: 'nijika',
    name: 'Nijika Ijichi',
    short: 'Nijika',
    jp: '伊地知虹夏',
    role: 'Baraban · Guruh yetakchisi',
    instrument: 'DRUMS',
    color: '#f7d758',
    cv: 'Sayumi Suzushiro',
    label: 'SARIQ / 02',
    traits: ['Quvnoq', 'G‘amxo‘r', 'Birlashtiruvchi'],
    intro:
      'Guruhning ritmi va kayfiyati. Nijika to‘rt xil xarakter orasidan umumiy yo‘l topa oladigan quvnoq yetakchi.',
    bio: 'Barabanchi Nijika Hitori’ni guruh bilan ijro etishga taklif qiladi. U tashkiliy ishlar va a’zolar o‘rtasidagi iliq muhitni saqlashda muhim o‘rin tutadi.',
    extra:
      'Uning qo‘llab-quvvatlashi Bocchi uchun yangi muhitga moslashishni yengillashtiradi. Ryo bilan yaqin do‘st; Kessoku Band uning orzulari atrofida birlashadi.',
  },

  //       .------.
  //      / /////  \
  //     | /// -  - |
  //      \||  ___ /
  //       '------'
  //         /||\
  // Ryo Yamada / Bass
  {
    id: 'ryo',
    name: 'Ryo Yamada',
    short: 'Ryo',
    jp: '山田リョウ',
    role: 'Bas gitara · Bastakor',
    instrument: 'BASS',
    color: '#7b9eea',
    cv: 'Saku Mizuno',
    label: 'KO‘K / 03',
    traits: ['Sokin', 'O‘ziga xos', 'Musiqaga berilgan'],
    intro:
      'Kam gap, kuchli bas. Ryo — guruhning noodatiy, xotirjam va musiqaga o‘z qarashi bilan yondashadigan a’zosi.',
    bio: 'U bas gitara chaladi va guruhning kuylarini yaratadi. Nijika bilan yaqin do‘st. Uning o‘ziga xos qiziqishlari va sokin hazili guruhga alohida xarakter beradi.',
    extra:
      'Hitori yozgan matnlar Ryo yaratgan kuylar bilan qo‘shilib, Kessoku Band’ning ovoziga aylanadi. U jamoada har kimning o‘ziga xos bo‘lib qolishi mumkinligini ko‘rsatadi.',
  },

  //      .----.__
  //     / ////\  \
  //    / / ^ ^ |  )
  //    \|   U / \/
  //     '----'
  //      /\_/\
  // Ikuyo Kita / Vocals & rhythm guitar
  {
    id: 'ikuyo',
    name: 'Ikuyo Kita',
    short: 'Kita',
    jp: '喜多郁代',
    role: 'Vokal · Ritm gitara',
    instrument: 'VOCAL & GUITAR',
    color: '#f2786d',
    cv: 'Ikumi Hasegawa',
    label: 'QIZIL / 04',
    traits: ['Ochiqko‘ngil', 'G‘ayratli', 'Yorqin vokal'],
    intro:
      'Sahnadagi yorqin tabassum va tanish ovoz. Kita — guruhning vokalisti va gitara chaladigan quvnoq a’zosi.',
    bio: 'U odamlar bilan tez chiqishib ketadi va yangi tanishlarga ochiq yuz bilan murojaat qila oladi. Uning energiyasi Hitori’ning tortinchoqligiga qiziqarli qarama-qarshilik yaratadi.',
    extra:
      'Ritm gitara va vokal orqali qo‘shiqlarni tinglovchiga yetkazadi. To‘rt qizning turlicha xarakteri birgalikda Kessoku Band’ning o‘ziga xosligini yaratadi.',
  },
];

export const pictures = [
  {
    src: 'bocchi-guitar.jpg',
    title: 'Musiqa gapirsin',
    tag: 'BOCCHI / GUITAR',
    type: 'bocchi',
  },
  {
    src: 'band-streetwear.jpg',
    title: 'Sahnadan tashqarida',
    tag: 'KESSOKU / STREET STYLE',
    type: 'band',
  },
  {
    src: 'bocchi-sticker.jpg',
    title: 'Little guitar hero',
    tag: 'BOCCHI / FAN EDIT',
    type: 'bocchi',
  },
  {
    src: 'band-walk.jpg',
    title: 'Bir yo‘ldagi to‘rt qadam',
    tag: 'KESSOKU / GOLDEN HOUR',
    type: 'band',
  },
  {
    src: 'ryo-seaside.jpg',
    title: 'Ryo bilan quyosh botishi',
    tag: 'RYO / FAN-ART',
    type: 'ryo',
  },
  {
    src: 'band-sunset.jpg',
    title: 'Eng yaxshi guruh fotosi',
    tag: 'KESSOKU / TOGETHER',
    type: 'band',
  },
  {
    src: 'nijika-official.webp',
    title: 'Nijika Ijichi',
    tag: 'NIJIKA / DRUMS',
    type: 'nijika',
    official: true,
    color: '#f7d758',
  },
  {
    src: 'ryo-official.webp',
    title: 'Ryo Yamada',
    tag: 'RYO / BASS',
    type: 'ryo',
    official: true,
    color: '#7b9eea',
  },
  {
    src: 'ikuyo-official.webp',
    title: 'Ikuyo Kita',
    tag: 'KITA / VOCAL & GUITAR',
    type: 'kita',
    official: true,
    color: '#f2786d',
  },
  {
    src: 'nav-bocchi.jpg',
    title: 'Pushti kayfiyat',
    tag: 'BOCCHI / CLOSE-UP',
    type: 'bocchi',
    wide: true,
  },
];
export const links = [
  ['band', 'Jamoa'],
  ['story', 'Hikoya'],
  ['live', 'Live & Music'],
  ['gallery', 'Galereya'],
];
export const faq = [
  [
    'Jamoada nechta odam bor?',
    'Kessoku Band’da to‘rt a’zo bor: Hitori Gotoh — solo gitara, Nijika Ijichi — baraban va yetakchilik, Ryo Yamada — bas, Ikuyo Kita — vokal va gitara.',
  ],
  [
    'Bocchi va Hitori bir odammi?',
    'Ha. Hitori Gotoh — uning ismi, “Bocchi” esa laqabi. Guruhdagi pushti sochli, tortinchoq gitarachi aynan u.',
  ],
  [
    'Qo‘shiqlarni kim yozadi?',
    'Anime hikoyasida qo‘shiq matnlarini Hitori, kuylarni esa Ryo yaratadi. Haqiqiy musiqiy relizlarda esa professional ijodiy jamoa ishlaydi; bu ikki tushunchani farqlash kerak.',
  ],
  [
    'Animeni kim yaratgan?',
    'Asl manga muallifi — Aki Hamaji. 2022-yilgi TV animeni CloverWorks studiyasi Keiichiro Saito rejissyorligida yaratgan. Birinchi mavsum 12 qismdan iborat.',
  ],
  [
    'Bu rasmiy saytmi?',
    'Bu mustaqil muxlislar sayti. Anime personajlari va rasmiy materiallar tegishli huquq egalariga qarashli. Fan-art va yuborilgan rasmlar galereyada alohida ko‘rsatilgan.',
  ],
];
