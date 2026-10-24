/**
 * DATA RISET ILMIAH GIZI & MEDIS BUAH
 * Disusun berdasarkan riset nutrisi klinis: USDA FoodData Central, WHO, Kemenkes RI, Harvard Health
 * Menggunakan Palet Solid: #1E5128, #FF6B35, #F7C04A, #FAF8F1, #191A19
 */

const FRUITS_DATABASE = [
  {
    id: 'apel',
    name: 'Apel Fuji / Manalagi',
    scientificName: 'Malus domestica',
    tagline: 'Sang Pelindung Jantung & Pengatur Gula Darah',
    category: 'Pome',
    themeColor: '#FF6B35',
    accentColor: '#1E5128',
    flavorProfile: 'Manis renyah dengan sedikit asam segar',
    calories: '52 kkal / 100g',
    nutrition: {
      fiber: '2.4 g',
      vitaminC: '4.6 mg (8% AKG)',
      potassium: '107 mg',
      water: '85.6%',
      glycemicIndex: 36,
      antioxidantScore: 'Tinggi (Quercetin & Pektin)'
    },
    activeCompounds: [
      { name: 'Quercetin', role: 'Flavonoid anti-inflamasi alami yang melindungi endotel pembuluh darah dan organ pernapasan.' },
      { name: 'Pektin (Serat Larut)', role: 'Mengikat asam empedu di usus halus untuk menurunkan kolesterol LDL dan mencegah lonjakan glukosa.' },
      { name: 'Asam Malat', role: 'Membantu metabolisme siklus Krebs dan mencegah penumpukan asam laktat penyebab pegal otot.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Dengan Kulit)',
      points: [
        'Serat tidak larut pada kulit memperlambat pengosongan lambung, memberikan rasa kenyang bertahan lama (efektif untuk defisit kalori).',
        'Mengunyah apel menstimulasi sekresi air liur saliva yang menurunkan keasaman mulut dan mencegah gigi berlubang.',
        'Pektin utuh sampai ke usus besar untuk difermentasi oleh mikrobiota menjadi asam lemak rantai pendek (SCFA) pelindung kanker usus.',
        'Lonjakan gula darah sangat terkontrol karena matriks serat seluler memperlambat absorpsi fruktosa.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus / Diblender',
      points: [
        'Jika diblender menjadi smoothie kental tanpa disaring: hidrasi seluler cepat dan antioksidan mudah diserap saat tubuh lemas.',
        'Sangat ramah bagi lansia atau pasien yang kesulitan mengunyah makanan keras.',
        'PERINGATAN: Jangan pernah menyaring ampasnya! Jus apel murni yang disaring ampasnya memicu kenaikan Indeks Glikemik dari 36 melonjak ke 48.',
        'Sangat pas dipadukan dengan sayuran berdaun hijau untuk menetralkan rasa langu pahit.'
      ]
    },
    bestTime: 'Pagi hari 30 menit sebelum sarapan atau camilan sore jam 15:30',
    precautions: 'Bagi penderita maag akut, hindari apel hijau asam (Granny Smith); pilih apel Fuji matang yang manis.'
  },
  {
    id: 'jeruk',
    name: 'Jeruk Manis & Sunkist',
    scientificName: 'Citrus sinensis',
    tagline: 'Benteng Imunitas & Sintesis Kolagen Alami',
    category: 'Citrus',
    themeColor: '#FF6B35',
    accentColor: '#F7C04A',
    flavorProfile: 'Sangat segar, perpaduan manis dan citrus zest semerbak',
    calories: '47 kkal / 100g',
    nutrition: {
      fiber: '2.4 g',
      vitaminC: '53.2 mg (89% AKG)',
      potassium: '181 mg',
      water: '86.7%',
      glycemicIndex: 40,
      antioxidantScore: 'Sangat Tinggi (Hesperidin & Flavonoid)'
    },
    activeCompounds: [
      { name: 'Hesperidin', role: 'Bioflavonoid sitrus yang meredakan inflamasi vaskular dan menjaga kelenturan pembuluh darah.' },
      { name: 'Asam Askorbat (Vit C)', role: 'Kofaktor esensial bagi enzim lisil hidroksilase pembentuk serat kolagen kulit dan tulang.' },
      { name: 'Asam Sitrat', role: 'Mengalkalisasi pH urin pasca metabolisme untuk mencegah kristalisasi batu ginjal kalsium oksalat.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Termasuk Lapisan Putih)',
      points: [
        'Lapisan putih (albedo) di bawah kulit jeruk mengandung konsentrasi hesperidin 4x lipat lebih tinggi dari bulir sarinya.',
        'Serat albedo memperlambat penyerapan fruktosa sehingga sangat aman bagi penderita pradiabetes.',
        'Sensasi mengunyah bulir jeruk memicu produksi enzim pencernaan lambung secara bertahap.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus (Peras Segar)',
      points: [
        'Penyerapan vitamin C super cepat ke dalam peredaran darah, sangat efektif meredakan gejala awal flu dan letih fisik.',
        'Mengembalikan elektrolit seketika sehabis berkeringat deras atau dehidrasi cuaca terik.',
        'PERINGATAN: Jus peras segar harus diminum maksimal dalam 15 menit agar vitamin C tidak rusak teroksidasi oleh oksigen udara.'
      ]
    },
    bestTime: 'Pagi setelah sarapan atau siang hari sebagai penambah energi',
    precautions: 'Penderita GERD aktif hindari meminum perasan jeruk saat perut kosong.'
  },
  {
    id: 'pisang',
    name: 'Pisang Cavendish / Raja',
    scientificName: 'Musa acuminata',
    tagline: 'Bahan Bakar Otot & Penenang Saraf Alami',
    category: 'Tropical',
    themeColor: '#F7C04A',
    accentColor: '#1E5128',
    flavorProfile: 'Manis legit, tekstur pulen lembut dan mengenyangkan',
    calories: '89 kkal / 100g',
    nutrition: {
      fiber: '2.6 g',
      vitaminC: '8.7 mg',
      potassium: '358 mg (Raja Elektrolit)',
      water: '74.9%',
      glycemicIndex: 51,
      antioxidantScore: 'Sedang (Dopamin & Katekin)'
    },
    activeCompounds: [
      { name: 'Kalium / Potassium', role: 'Mengatur pompa natrium-kalium selular jantung dan mencegah kejang kram otot.' },
      { name: 'Vitamin B6 (Piridoksin)', role: 'Memfasilitasi sintesis neurotransmiter serotonin dan melatonin pengatur mood serta tidur.' },
      { name: 'Resistant Starch (Pati Resisten)', role: 'Pati prebiotik pada pisang mengkal yang memicu pertumbuhan bakteri Bifidobacteria usus.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh',
      points: [
        'Memiliki efek antasida alami yang melapisi mukosa lambung, meredakan sensasi perih pada penderita maag ringan.',
        'Pati resisten pada pisang yang belum terlalu matang mengontrol nafsu makan tanpa lonjakan insulin tajam.',
        'Bahan bakar stamina alami terbaik dimakan 40 menit sebelum berolahraga.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus / Dibuat Smoothie',
      points: [
        'Memberikan tekstur creamy laksana krimer alami tanpa perlu susu kental manis atau krimer buatan.',
        'Kombinasi juara pasca olahraga bersama susu kedelai atau susu almond untuk memulihkan cadangan glikogen otot yang terkuras habis.',
        'Mudah dicerna bagi yang sedang mengalami pemulihan radang saluran cerna (bagian dari diet BRAT).'
      ]
    },
    bestTime: '40 menit sebelum olahraga atau sarapan pagi praktis',
    precautions: 'Pasien penyakit ginjal kronis stadium akhir wajib membatasi asupan kalium pisang.'
  },
  {
    id: 'alpukat',
    name: 'Alpukat Mentega',
    scientificName: 'Persea americana',
    tagline: 'Lemak Tak Jenuh Emas untuk Otak & Hormon',
    category: 'Berry',
    themeColor: '#1E5128',
    accentColor: '#F7C04A',
    flavorProfile: 'Gurih creamy mentega, nutty lembut berlemak sehat',
    calories: '160 kkal / 100g',
    nutrition: {
      fiber: '6.7 g (Sangat Tinggi)',
      vitaminC: '10 mg',
      potassium: '485 mg (Lebih tinggi dari pisang)',
      water: '73.2%',
      glycemicIndex: 15,
      antioxidantScore: 'Tinggi (Lutein & Zeaxanthin)'
    },
    activeCompounds: [
      { name: 'Asam Oleat (MUFA)', role: 'Asam lemak tak jenuh tunggal yang menurunkan kolesterol LDL jahat dan meningkatkan HDL.' },
      { name: 'Lutein & Zeaxanthin', role: 'Karotenoid pelindung retina mata dari bahaya paparan sinar biru gadget dan katarak.' },
      { name: 'Asam Folat (Vit B9)', role: 'Krusial untuk regenerasi DNA seluler dan kesehatan sistem saraf.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Potong Dadu)',
      points: [
        'Melipatgandakan penyerapan vitamin larut lemak (A, D, E, K) hingga 400% jika disantap bersama salad sayur/buah.',
        'Memicu pelepasan hormon kenyang leptin dan peptide YY, menahan rasa lapar hingga 5 jam ke depan.',
        'Indeks glikemik sangat rendah (<15), pilihan emas nomor satu bagi pejuang diabetes dan diet rendah karbohidrat.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus / Smoothie Alpukat',
      points: [
        'Menghasilkan emulsi kaya glutation yang membantu proses detoksifikasi organ hepar (hati).',
        'PERINGATAN: Jangan tambahkan kental manis cokelat atau gula berlebih karena akan merusak profil lemak baiknya.',
        'Cukup haluskan bersama sedikit air kelapa atau susu almond dan sejumput madu murni.'
      ]
    },
    bestTime: 'Siang hari saat makan siang atau makan malam rendah karbohidrat',
    precautions: 'Padat kalori alami, cukup konsumsi 1/2 hingga 1 buah ukuran sedang per hari.'
  },
  {
    id: 'semangka',
    name: 'Semangka Merah Segar',
    scientificName: 'Citrullus lanatus',
    tagline: 'Raja Hidrasi, Pompa Oksigen Arteri & L-Citrulline',
    category: 'Melon',
    themeColor: '#FF6B35',
    accentColor: '#1E5128',
    flavorProfile: 'Manis berair melimpah ruah, kesegaran instan',
    calories: '30 kkal / 100g',
    nutrition: {
      fiber: '0.4 g',
      vitaminC: '8.1 mg',
      potassium: '112 mg',
      water: '91.5% (Juara Air Alami)',
      glycemicIndex: 72,
      antioxidantScore: 'Sangat Tinggi (Likopen Melimpah)'
    },
    activeCompounds: [
      { name: 'L-Citrulline', role: 'Prekursor L-Arginine yang merangsang pelepasan gas Nitrit Oksida (NO) pelebar dinding arteri pembuluh darah.' },
      { name: 'Likopen Alami', role: 'Antioksidan karotenoid 40% lebih banyak dari tomat merah, pencegah kanker prostat.' },
      { name: 'Kukurbitasin E', role: 'Senyawa triterpenoid anti-inflamasi alami pelindung sel-sel organ.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Termasuk Lapisan Putih)',
      points: [
        'Lapisan putih dekat kulit semangka menyimpan konsentrasi L-Citrulline tertinggi untuk meredakan nyeri otot pasca olahraga.',
        'Kandungan air seluler 92% dan elektrolit alami merehidrasi tubuh lebih cepat daripada air minum biasa.',
        'Membantu pembilasan garam dan asam urat berlebih lewat ginjal.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus (Cold-Pressed)',
      points: [
        'Minuman pemulihan stamina kardiovaskular nomor satu di dunia. Efek vasodilatasi instan memperlancar aliran oksigen ke seluruh otot.',
        'Sangat mudah diolah tanpa memerlukan tambahan air sama sekali.',
        'Paduan sempurna bersama daun mint dan perasan lemon segar.'
      ]
    },
    bestTime: 'Siang hari saat cuaca terik atau 1 jam sebelum olahraga kardio',
    precautions: 'Penderita diabetes batasi porsi 1 potong sedang karena beban glikemik cepat diserap jika berlebihan.'
  },
  {
    id: 'pepaya',
    name: 'Pepaya California',
    scientificName: 'Carica papaya',
    tagline: 'Sahabat Sejati Lambung & Enzim Pelunak Usus',
    category: 'Tropical',
    themeColor: '#FF6B35',
    accentColor: '#1E5128',
    flavorProfile: 'Manis legit tanpa asam sama sekali, daging buah pulen',
    calories: '43 kkal / 100g',
    nutrition: {
      fiber: '1.7 g',
      vitaminC: '60.9 mg (100% AKG)',
      potassium: '182 mg',
      water: '88%',
      glycemicIndex: 60,
      antioxidantScore: 'Tinggi (Enzim Papain & Beta-Karoten)'
    },
    activeCompounds: [
      { name: 'Enzim Papain', role: 'Enzim proteolitik pemecah protein keras di lambung yang meredakan perut begah dan iritasi dinding lambung.' },
      { name: 'Beta-Karoten & Likopen', role: 'Meregenerasi mukosa pelapis dinding usus yang meradang.' },
      { name: 'Karpaina', role: 'Alkaloid alami yang membantu menyeimbangkan ekosistem mikrobiota saluran cerna.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Potong Dingin)',
      points: [
        'Solusi emas nomor satu untuk mengatasi sembelit kronis dan wasir berkat kombinasi enzim papain dan serat hidrofilik.',
        'Meredakan rasa begah setelah mengonsumsi santapan kaya daging atau berlemak tebal.',
        'Kaya vitamin A dan C yang mempercepat regenerasi jaringan luka kulit dan epitel dalam.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus / Dibuat Puree',
      points: [
        'Puree pepaya dingin sangat nyaman di tenggorokan bagi pasien radang tenggorokan atau sariawan parah.',
        'Sangat mudah diserap tubuh saat saluran pencernaan sedang dalam fase pemulihan infeksi.',
        'Dapat dipadukan dengan air kelapa muda untuk penyeimbang cairan tubuh.'
      ]
    },
    bestTime: 'Pagi hari saat perut kosong atau 20 menit setelah makan siang',
    precautions: 'Ibu hamil trimester awal hindari pepaya yang masih mengkal/bergetah putih.'
  },
  {
    id: 'naga',
    name: 'Buah Naga Merah',
    scientificName: 'Hylocereus polyrhizus',
    tagline: 'Pembersih Toksin & Peningkat Sel Darah Merah',
    category: 'Cactus',
    themeColor: '#FF6B35',
    accentColor: '#1E5128',
    flavorProfile: 'Manis lembut, berair segar dengan krenyes biji halus',
    calories: '60 kkal / 100g',
    nutrition: {
      fiber: '2.9 g',
      vitaminC: '3 mg',
      potassium: '190 mg',
      water: '87%',
      glycemicIndex: 48,
      antioxidantScore: 'Ekstrem (Betasianin Ungu-Merah)'
    },
    activeCompounds: [
      { name: 'Betasianin', role: 'Pigmen ungu merah antioksidan langka pelindung sel organ hati dan penangkal karsinogen.' },
      { name: 'Biji Hitam Halus', role: 'Menyimpan asam lemak esensial tak jenuh omega-3 dan omega-6 untuk elastisitas membran sel.' },
      { name: 'Oligosakarida Prebiotik', role: 'Nutrisi bagi koloni bakteri baik Lactobacillus di usus besar.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh',
      points: [
        'Biji hitam halus yang terkunyah melepaskan asam lemak tak jenuh ganda yang menyehatkan dinding pembuluh darah.',
        'Serat oligosakarida melunakkan massa feses secara alami tanpa efek mulas melilit.',
        'Menyuplai zat besi nabati yang mendukung produksi sel darah merah bagi penderita anemia.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus / Smoothie Bowl',
      points: [
        'Menjadi basis smoothie bowl alami dengan warna ungu memukau tanpa pewarna kimia sintetis.',
        'Sinergis jika di-blend bersama nanas untuk memadukan rasa manis lembutnya dengan keasaman tropis.',
        'Sangat mudah dinikmati untuk mendongkrak nafsu makan anak-anak yang pucat/kurang darah.'
      ]
    },
    bestTime: 'Sarapan pagi atau camilan sore hari',
    precautions: 'Dapat menyebabkan urine atau feses berwarna kemerahan (betalainuria) yang sepenuhnya normal dan aman.'
  },
  {
    id: 'nanas',
    name: 'Nanas Madu Subang',
    scientificName: 'Ananas comosus',
    tagline: 'Penghancur Lendir, Lemak & Anti-Radang Sendi Bromelain',
    category: 'Tropical',
    themeColor: '#F7C04A',
    accentColor: '#1E5128',
    flavorProfile: 'Manis asam tajam menggigit, aroma harum eksotis',
    calories: '50 kkal / 100g',
    nutrition: {
      fiber: '1.4 g',
      vitaminC: '47.8 mg (79% AKG)',
      potassium: '109 mg',
      water: '86%',
      glycemicIndex: 59,
      antioxidantScore: 'Tinggi (Bromelain & Asam Fenolat)'
    },
    activeCompounds: [
      { name: 'Enzim Bromelain', role: 'Enzim proteolitik pereda radang sendi arthritis, pembengkakan jaringan, dan pemecah lendir pernapasan.' },
      { name: 'Mangan (Trace Mineral)', role: 'Mineral esensial untuk enzim superoxide dismutase (SOD) dan kepadatan struktur tulang.' },
      { name: 'Asam Malat & Sitrat', role: 'Memicu aliran asam empedu untuk memecah timbunan lipid trigliserida.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Termasuk Hati/Bonggol Tengah)',
      points: [
        'Bagian tengah (bonggol nanas) menyimpan konsentrasi bromelain paling tinggi di seluruh bagian buah; jangan dibuang!',
        'Membantu mengencerkan dahak kental di saluran napas saat batuk berdahak atau flu berkepanjangan.',
        'Meredakan pembengkakan dan memar otot sehabis terbentur atau berolahraga intens.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus Murni',
      points: [
        'Elixir pencernaan nomor 1 diminum 15 menit setelah santapan berlemak tinggi (seperti rendang, sate, atau santan) untuk memotong kolesterol.',
        'Kombinasi legendaris nanas + jahe + kunyit sebagai obat anti-radang sendi alami.',
        'Membersihkan plak protein di rongga mulut dan membunuh kuman anaerob.'
      ]
    },
    bestTime: 'Siang hari setelah makan berat atau sore hari',
    precautions: 'Rendam sebentar dalam air garam encer sebelum dikonsumsi untuk menonaktifkan kristal kalsium oksalat pemicu rasa gatal di lidah.'
  },
  {
    id: 'kiwi',
    name: 'Kiwi Emas / Hijau',
    scientificName: 'Actinidia deliciosa',
    tagline: 'Ratu Vitamin C 2x Jeruk & Kualitas Tidur Lepas Stres',
    category: 'Berry',
    themeColor: '#1E5128',
    accentColor: '#F7C04A',
    flavorProfile: 'Manis tropis, sedikit asam segar dengan biji renyah',
    calories: '61 kkal / 100g',
    nutrition: {
      fiber: '3.0 g',
      vitaminC: '92.7 mg (154% AKG - 2x Jeruk!)',
      potassium: '312 mg',
      water: '83%',
      glycemicIndex: 52,
      antioxidantScore: 'Sangat Tinggi (Lutein & Tokoferol)'
    },
    activeCompounds: [
      { name: 'Actinidin', role: 'Enzim protease spesifik yang mencerna protein daging, gluten, dan kasein susu di lambung.' },
      { name: 'Serotonin Alami', role: 'Prekursor hormon melatonin yang meregulasi ritme sirkadian dan memicu tidur lelap (REM sleep).' },
      { name: 'Folat & Vitamin E', role: 'Sinergi anti-penuaan dini yang merangsang regenerasi sel basal kulit.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Bahkan dengan Kulit jika dicuci bersih)',
      points: [
        'Uji klinis Taipei Medical University membuktikan konsumsi 2 buah kiwi 1 jam sebelum tidur mempercepat onset tidur 42% lebih cepat.',
        'Vitamin C 2x lipat lebih tinggi dari jeruk menjamin proteksi kolagen dari degradasi paparan sinar ultraviolet.',
        'Serat actinidin melunakkan feses tanpa menyebabkan kram perut berlebih.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus / Dibuat Mocktail Segar',
      points: [
        'Infus vitamin C cair berenergi tinggi yang membangkitkan fokus otak di tengah kelelahan kerja siang hari.',
        'Sangat nikmat dipadukan dengan daun mint dan madu murni.',
        'PERINGATAN: Jangan mencampur jus kiwi dengan susu sapi karena enzim actinidin akan memecah protein susu menjadi pahit dalam waktu 10 menit.'
      ]
    },
    bestTime: '1 jam sebelum tidur malam (untuk kualitas tidur) atau pagi hari',
    precautions: 'Individu dengan riwayat alergi getah lateks terkadang memiliki sensitivitas silang terhadap kiwi.'
  },
  {
    id: 'delima',
    name: 'Delima Merah (Pomegranate)',
    scientificName: 'Punica granatum',
    tagline: 'Mahkota Awet Muda & Pelindung Arteri Jantung',
    category: 'Balustine',
    themeColor: '#FF6B35',
    accentColor: '#1E5128',
    flavorProfile: 'Manis pekat, sepat elegan dengan semburan jus aril',
    calories: '83 kkal / 100g',
    nutrition: {
      fiber: '4.0 g',
      vitaminC: '10.2 mg',
      potassium: '236 mg',
      water: '77.9%',
      glycemicIndex: 53,
      antioxidantScore: 'Tertinggi di Dunia Buah (Punicalagin)'
    },
    activeCompounds: [
      { name: 'Punicalagin', role: 'Polifenol super antioksidan dengan kekuatan 3 kali lipat mengungguli teh hijau dalam meredakan inflamasi vaskular.' },
      { name: 'Asam Punisat (Punicic Acid)', role: 'Asam linolenat terkonjugasi unik di dalam biji delima yang membakar lemak visceral.' },
      { name: 'Antosianin & Ellagitannin', role: 'Menghambat oksidasi kolesterol jahat LDL yang menjadi plak keras di dinding arteri jantung.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Aril Beserta Biji Halusnya)',
      points: [
        'Mengunyah biji delima menyuplai serat kasar tinggi dan asam punisat yang menyehatkan organ reproduksi pria dan wanita.',
        'Menurunkan tekanan darah tinggi dalam uji klinis berkat modulasi enzim ACE (Angiotensin-Converting Enzyme).',
        'Menghambat penuaan dini sel dengan merangsang proses peremajaan mitokondria (mitophagy via Urolithin A).'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus Murni (Cold-Pressed Delima)',
      points: [
        'Konsentrasi polifenol antioksidan punicalagin terlarut secara maksimal, memberikan perlindungan endotel instan.',
        'Meningkatkan performa sirkulasi darah mikro dan stamina fisik.',
        'Sangat direkomendasikan bagi pasien pasca-stent jantung atau hipertensi kronis.'
      ]
    },
    bestTime: 'Pagi hari setelah sarapan ringan atau 1 jam sebelum beraktivitas berat',
    precautions: 'Dapat berinteraksi dengan obat pengencer darah golongan warfarin dan obat penurun kolesterol statin, konsultasikan dosis.'
  },
  {
    id: 'blueberry',
    name: 'Blueberry & Blackberry',
    scientificName: 'Vaccinium sect. Cyanococcus',
    tagline: 'Nutrisi Emas Memori Otak & Penglihatan Tajam',
    category: 'Berry',
    themeColor: '#1E5128',
    accentColor: '#F7C04A',
    flavorProfile: 'Manis asam lembut, aroma semerbak berry hutan',
    calories: '57 kkal / 100g',
    nutrition: {
      fiber: '2.4 g',
      vitaminC: '9.7 mg',
      potassium: '77 mg',
      water: '84%',
      glycemicIndex: 53,
      antioxidantScore: 'Sangat Tinggi (Antosianin Anthocyanidin)'
    },
    activeCompounds: [
      { name: 'Antosianin', role: 'Pigmen biru gelap yang menembus sawar darah otak (blood-brain barrier) untuk merevitalisasi koneksi sinaptik memori.' },
      { name: 'Pterostilbene', role: 'Analog resveratrol yang mengaktifkan gen sirtuin anti-penuaan dan sensitivitas insulin.' },
      { name: 'Flavonol (Myricetin)', role: 'Menurunkan risiko penyakit neurodegeneratif seperti Alzheimer dan kepikunan dini.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Segar / Beku)',
      points: [
        'Penelitian Harvard Nurses’ Health Study menunjukkan konsumsi berry mingguan menunda penuaan kognitif otak hingga 2.5 tahun.',
        'Meredakan kelelahan mata digital akibat paparan layar monitor dengan meregenerasi rhodopsin retina.',
        'Menstabilkan kadar gula darah jika dimakan bersama oatmeal hangat.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus / Smoothie Otak',
      points: [
        'Campuran smoothie blueberry + bayam + chia seed menjadi ramuan booster fokus kerja terbaik tanpa kafein.',
        'Antioksidannya dengan cepat masuk ke mikrosirkulasi kapiler mata dan otak.',
        'Pilihan prima untuk menjaga ketajaman konsentrasi saat rapat atau belajar padat.'
      ]
    },
    bestTime: 'Pagi hari saat belajar / bekerja atau camilan di sela rapat',
    precautions: 'Cukup konsumsi segenggam (sekitar 75-100 gram) setiap hari.'
  },
  {
    id: 'jambu',
    name: 'Jambu Biji Merah (Guava)',
    scientificName: 'Psidium guajava',
    tagline: 'Juara Tertinggi Vitamin C Bumi & Anti-Trombositopenia',
    category: 'Myrtaceae',
    themeColor: '#1E5128',
    accentColor: '#FF6B35',
    flavorProfile: 'Aroma wangi sangat khas, manis ranum daging tebal',
    calories: '68 kkal / 100g',
    nutrition: {
      fiber: '5.4 g (Sangat Tinggi)',
      vitaminC: '228.3 mg (380% AKG - Raja Segala Buah!)',
      potassium: '417 mg',
      water: '80.8%',
      glycemicIndex: 31,
      antioxidantScore: 'Melonjak Tinggi (Likopen & Asam Askorbat)'
    },
    activeCompounds: [
      { name: 'Asam Askorbat Megadosis', role: 'Kandungan Vit C 4x lipat lebih tinggi dari jeruk; merangsang proliferasi megakariosit sumsum tulang pembuat trombosit.' },
      { name: 'Likopen Terlarut', role: 'Konsentrasi likopen 2x lipat lebih tinggi dari tomat matang; agen kemopreventif selular.' },
      { name: 'Quercetin & Guaijaverin', role: 'Menghambat replikasi RNA virus dan bakteri patogen penyebab diare.' }
    ],
    wholeFruitBenefits: {
      title: 'Khasiat Dimakan Utuh (Tanpa Biji Keras)',
      points: [
        'Serat 5.4 gram per 100g membantu membersihkan dinding usus dan menyerap garam kolesterol secara masif.',
        'Membantu menstabilkan resistensi insulin dengan indeks glikemik sangat rendah (31).',
        'Menguatkan gusi berdarah dan jaringan periodontal gigi berkat dosis vitamin C yang sangat padat.'
      ]
    },
    juicedBenefits: {
      title: 'Khasiat Apabila Dijus (Jus Jambu Merah Tersaring Halus)',
      points: [
        'Terapi medis komplementer terpopuler di Indonesia untuk pasien Demam Berdarah Dengue (DBD) guna mendongkrak trombosit dan memperkuat permeabilitas kapiler.',
        'Memisahkan biji kerasnya yang berisiko memicu peradangan pada penderita usus buntu atau divertikulitis.',
        'Penyerapan vitamin C dalam bentuk cairan segar sangat cepat dan tidak mengiritasi lambung jika dipilih jambu matang.'
      ]
    },
    bestTime: 'Siang hari setelah makan atau sore hari sebagai pelindung daya tahan tubuh',
    precautions: 'Bagi yang memiliki radang usus buntu atau divertikulum, biji keras jambu biji wajib disaring bersih saat dijus.'
  }
];

/**
 * REKOMENDASI MEDIS BERDASARKAN PENYAKIT & GANGGUAN KESEHATAN
 */
const MEDICAL_CONDITIONS = [
  {
    id: 'hipertensi',
    name: 'Hipertensi (Tekanan Darah Tinggi)',
    summary: 'Kondisi tekanan darah di atas 130/80 mmHg yang membebani kerja jantung dan elastisitas arteri pembuluh darah.',
    targetNutrition: 'Tinggi Kalium (Potassium), L-Citrulline, Nitrit Oksida alami, dan Polifenol vasodilatator.',
    recommendedFruits: [
      { fruitId: 'semangka', reason: 'Kaya L-Citrulline yang merangsang sintesis Nitrit Oksida untuk melebarkan arteri.' },
      { fruitId: 'pisang', reason: 'Tinggi kalium (358mg) untuk menetralisir kelebihan natrium garam lewat urine.' },
      { fruitId: 'delima', reason: 'Menghambat enzim ACE alami yang menyebabkan penyempitan pembuluh darah.' },
      { fruitId: 'kiwi', reason: 'Konsumsi rutin kiwi terbukti menurunkan tekanan darah sistolik rata-rata 3.6 mmHg.' }
    ],
    consumptionMethod: 'Jus Segar Semangka & Delima diminum pagi/siang, atau pisang Cavendish utuh sebelum beraktivitas.',
    avoidFruits: [
      { name: 'Durian & Nangka Terlalu Matang', reason: 'Mengandung alkohol alami dan gas fermentasi tinggi yang dapat memicu takikardia dan lonjakan tensi seketika.' },
      { name: 'Buah Kaleng dalam Sirup Asin/Manis', reason: 'Mengandung natrium benzoat pengawet dan kadar sodium tersembunyi.' }
    ],
    clinicalTip: 'Kurangi konsumsi garam harian < 2000mg dan minum jus semangka tanpa gula dingin di siang terik.'
  },
  {
    id: 'diabetes',
    name: 'Diabetes Mellitus Tipe 2 & Pradiabetes',
    summary: 'Gangguan metabolisme glukosa akibat resistensi insulin atau defisiensi sekresi insulin pankreas.',
    targetNutrition: 'Indeks Glikemik Rendah (<55), Beban Glikemik Rendah (GL <10), Tinggi Serat Pektin & Antosianin.',
    recommendedFruits: [
      { fruitId: 'apel', reason: 'Indeks Glikemik rendah (36). Pektin memperlambat absorpsi gula darah pasca-makan.' },
      { fruitId: 'alpukat', reason: 'Hampir bebas gula sederhana, kaya lemak MUFA yang memulihkan sensitivitas insulin.' },
      { fruitId: 'jambu', reason: 'Indeks glikemik 31 dengan serat 5.4g sangat efektif mencegah lonjakan gula darah.' },
      { fruitId: 'blueberry', reason: 'Antosianin memicu transporter GLUT4 pada sel otot untuk menyerap glukosa tanpa kerja keras insulin.' }
    ],
    consumptionMethod: 'WAJIB DIMAKAN UTUH! Dilarang keras meminum jus buah saring manis karena serat terbuang dan memicu spike glukosa tajam.',
    avoidFruits: [
      { name: 'Jus Buah Saring / Kemasan', reason: 'Serat dibuang menyisakan fruktosa bebas cair yang langsung diserap 100% oleh liver menjadi lemak dan gula darah.' },
      { name: 'Kurma Kering Porsi Banyak & Semangka Porsi Besar', reason: 'Beban glikemik tinggi jika dimakan melebihi 1 potong sedang.' },
      { name: 'Mangga & Sawo Sangat Matang', reason: 'Kadar sukrosa dan glukosa sederhana sangat tinggi saat buah terlalu matang/lembek.' }
    ],
    clinicalTip: 'Makanlah buah bersama sumber protein/lemak sehat (seperti segenggam kacang almond) untuk meratakan kurva gula darah.'
  },
  {
    id: 'gerd',
    name: 'Asam Lambung Kronis, GERD & Maag (Gastritis)',
    summary: 'Refluks asam lambung ke esofagus dan iritasi mukosa lambung yang memicu sensasi terbakar (heartburn) & mual.',
    targetNutrition: 'pH Netral / Basa (pH > 5), Tinggi Enzim Proteolitik Lembut, Pektin Mukoprotektif.',
    recommendedFruits: [
      { fruitId: 'pepaya', reason: 'Enzim papain menenangkan iritasi lambung dan melancarkan pemecahan makanan tanpa asam berlebih.' },
      { fruitId: 'pisang', reason: 'Antasida alami yang menempel di dinding mukosa esofagus, menetralkan rasa perih asam lambung.' },
      { fruitId: 'alpukat', reason: 'Tekstur lembut ramah lambung tanpa memicu refluks (konsumsi dalam porsi sedang).' },
      { fruitId: 'apel', reason: 'Pilih apel manis non-asam (Fuji/Manalagi matang). Kandungan kalsium dan kaliumnya bersifat alkali.' }
    ],
    consumptionMethod: 'Makan utuh yang dikunyah sangat lembut atau dibuat puree/smoothie kental tanpa pemanis buatan. Konsumsi 30 menit setelah makan atau saat perut mulai perih ringan.',
    avoidFruits: [
      { name: 'Jeruk Nipis, Lemon & Sunkist Asam', reason: 'Kandungan asam sitrat pekat mengikis erosi lambung dan mengendurkan katup sfingter esofagus bawah (LES).' },
      { name: 'Nanas Mentah & Belimbing', reason: 'Kadar asam oksalat dan bromelain aktif pada lambung kosong dapat memperparah tukak lambung.' },
      { name: 'Tomat & Buah Asam Liar', reason: 'Asam malat dan sitrat tingginya menjadi pemicu refluks asam lambung instan.' }
    ],
    clinicalTip: 'Jangan pernah memakan buah dingin bersuhu es langsung dari kulkas saat asam lambung sedang bergejolak.'
  },
  {
    id: 'kolesterol',
    name: 'Kolesterol Tinggi & Jantung Koroner (Aterosklerosis)',
    summary: 'Peningkatan kadar kolesterol jahat (LDL) dan trigliserida yang membentuk plak keras di arteri kardiovaskular.',
    targetNutrition: 'Asam Lemak Tak Jenuh Tunggal (MUFA), Fitosterol, Pektin Pengikat Empedu, Polifenol Punicalagin.',
    recommendedFruits: [
      { fruitId: 'alpukat', reason: 'Kaya asam oleat dan beta-sitosterol yang secara ilmiah menurunkan LDL hingga 17% dan menaikkan HDL.' },
      { fruitId: 'delima', reason: 'Antioksidan punicalagin terbukti membersihkan deposit plak lemak pada arteri karotis leher.' },
      { fruitId: 'apel', reason: 'Pektin apel mengikat asam empedu di usus, memaksa liver menyedot kolesterol darah untuk membuat empedu baru.' },
      { fruitId: 'jambu', reason: 'Kaya likopen larut dan serat kasar penurun rasio trigliserida/HDL.' }
    ],
    consumptionMethod: 'Bisa dimakan segar utuh atau jus alpukat murni (tanpa susu kental manis dan gula). Jus delima merah murni tiap pagi.',
    avoidFruits: [
      { name: 'Olahan Buah Santan & Gorengan (Pisang Goreng/Cempedak)', reason: 'Mengandung lemak trans dan lemak jenuh yang langsung menaikkan LDL.' },
      { name: 'Jus Buah yang Ditambah Kental Manis & Sirup Gula', reason: 'Gula fruktosa berlebih diubah oleh hati menjadi trigliserida baru.' }
    ],
    clinicalTip: 'Ganti mentega hewani atau olesan roti sarapan Anda dengan lumat alpukat murni berpadu sejumput garam laut.'
  },
  {
    id: 'asam_urat',
    name: 'Asam Urat (Gout Hyperuricemia)',
    summary: 'Penumpukan kristal monosodium urat pada persendian jempol kaki, lutut, atau pergelangan akibat gangguan ekskresi ginjal.',
    targetNutrition: 'Tinggi Vitamin C pemicu urikosurik (pembuangan asam urat lewat urine), Antosianin anti-inflamasi, Asam Malat.',
    recommendedFruits: [
      { fruitId: 'kiwi', reason: 'Dosis megavitamin C meningkatkan laju filtrasi glomerulus ginjal untuk membuang asam urat.' },
      { fruitId: 'apel', reason: 'Asam malat di dalam apel membantu melarutkan kristal asam urat yang mengendap di jaringan persendian.' },
      { fruitId: 'blueberry', reason: 'Antosianin terbukti menghambat enzim xanthine oxidase (mekanisme mirip obat allopurinol).' },
      { fruitId: 'nanas', reason: 'Bromelain meredakan pembengkakan panas dan nyeri berdenyut pada sendi yang meradang.' }
    ],
    consumptionMethod: 'Dianjurkan makan segar utuh atau infused water apel dan lemon (sitrat mengalkalisasi urin sehingga asam urat larut).',
    avoidFruits: [
      { name: 'Durian & Nangka Matang', reason: 'Kandungan alkohol alami dan purin tertentu yang memperparah serangan gout akut.' },
      { name: 'Jus Buah Tinggi Sirup Fruktosa Tinggi (HFCS)', reason: 'Fruktosa tinggi dalam metabolisme ATP seluler memproduksi sisa asam urat ekstra.' }
    ],
    clinicalTip: 'Minum 2.5 liter air putih setiap hari bersama konsumsi kiwi untuk memaksimalkan pembilasan kristal asam urat lewat ginjal.'
  },
  {
    id: 'sembelit',
    name: 'Sembelit, Konstipasi & Wasir (Ambeien)',
    summary: 'Gerak peristaltik usus lambat yang menyebabkan feses keras, kering, dan sulit dievakuasi.',
    targetNutrition: 'Serat Larut (Soluble) & Tidak Larut (Insoluble), Sorbitol alami, Enzim Pelunak Feses.',
    recommendedFruits: [
      { fruitId: 'pepaya', reason: 'Juara nomor 1 pelunak feses! Enzim papain dan serat gelatinusnya mempercepat transit bolus makanan.' },
      { fruitId: 'naga', reason: 'Biji hitam halusnya mengandung minyak alami yang melumasi dinding usus besar secara mekanis.' },
      { fruitId: 'kiwi', reason: 'Dua buah kiwi sehari terbukti seefektif obat pencahar laktulosa tanpa menimbulkan kram perut.' },
      { fruitId: 'apel', reason: 'Pektin mengikat air di dalam kolon sehingga feses menjadi lebih bervolume dan empuk.' }
    ],
    consumptionMethod: 'MAKAN UTUH DENGAN AIR CUKUP. Bila dijus, jangan disaring sedikitpun ampasnya.',
    avoidFruits: [
      { name: 'Pisang Mentah / Hijau Sepat', reason: 'Kaya tanin dan pati amilosa yang menyerap air feses dan justru memperparah sembelit.' },
      { name: 'Salak Berlebih (Jika Kulit Ari Dibuang)', reason: 'Kandungan tanin tinggi dapat memadatkan massa feses.' }
    ],
    clinicalTip: 'Makanlah semangkuk potongan pepaya california dingin dan buah naga merah saat perut kosong di pagi hari.'
  },
  {
    id: 'anemia',
    name: 'Anemia & Kurang Darah (Defisiensi Besi / Pucat)',
    summary: 'Penurunan kadar hemoglobin pembawa oksigen yang memicu gejala 5L (Lesu, Lemah, Letih, Lelah, Lalai) & pusing.',
    targetNutrition: 'Vitamin C Dosis Tinggi (Katalis Penyerapan Zat Besi Non-Heme), Folat (B9), Zat Besi Organik.',
    recommendedFruits: [
      { fruitId: 'jambu', reason: 'Vitamin C tertinggi (228mg) melipatgandakan penyerapan zat besi dari makanan nabati hingga 300%.' },
      { fruitId: 'naga', reason: 'Mengandung zat besi nabati alami yang mendukung sintesis rantai heme pada sel darah merah.' },
      { fruitId: 'jeruk', reason: 'Asam sitrat dan asam askorbat mereduksi ion feri (Fe3+) menjadi fero (Fe2+) yang mudah diserap usus.' },
      { fruitId: 'delima', reason: 'Meningkatkan hitung eritrosit dan pasokan oksigen ke seluruh jaringan organ.' }
    ],
    consumptionMethod: 'Jus jambu merah segar atau jus jeruk diminum bersamaan saat memakan sayur bayam atau lauk hewani kaya zat besi.',
    avoidFruits: [
      { name: 'Buah yang Dikonsumsi Berbarengan Teh Pekat / Kopi', reason: 'Bukan buahnya yang salah, tetapi polifenol tannin teh akan mengikat zat besi buah menjadi senyawa tak larut.' }
    ],
    clinicalTip: 'Jangan minum teh manis bersamaan dengan jus jambu atau jeruk; beri jeda minimal 2 jam.'
  },
  {
    id: 'fatty_liver',
    name: 'Perlemakan Hati Non-Alkoholik (NAFLD)',
    summary: 'Penimbunan trigliserida berlebih di sel hepatosit hati yang memicu peradangan dan penurunan fungsi detoksifikasi.',
    targetNutrition: 'Glutation Endogen, Kolin, Antioksidan Betasianin & Likopen, Lemak Rantai Tunggal Sehat.',
    recommendedFruits: [
      { fruitId: 'alpukat', reason: 'Memproduksi glutation, master antioksidan yang melindungi mitokondria sel hepatosit hati.' },
      { fruitId: 'naga', reason: 'Betasianin membersihkan radikal bebas dan mengurangi akumulasi lemak hepatik pada uji klinis.' },
      { fruitId: 'apel', reason: 'Asam malat melarutkan deposit kolesterol dan membantu pengeluaran racun empedu.' },
      { fruitId: 'blueberry', reason: 'Pterostilbene memicu oksidasi asam lemak di dalam hepar sehingga lemak tidak menumpuk.' }
    ],
    consumptionMethod: 'Makan segar atau jus kombinasi apel hijau + buah naga merah tanpa tambahan gula sedikitpun.',
    avoidFruits: [
      { name: 'Jus Buah Manis Kemasan & Sirup Fruktosa', reason: 'Fruktosa cair tanpa serat langsung diubah hepar menjadi de novo lipogenesis (lemak hati).' },
      { name: 'Buah Kering Berlebihan (Kismis/Manisan Mangga)', reason: 'Konsentrasi fruktosa per gram sangat padat.' }
    ],
    clinicalTip: 'Hindari segala bentuk fruktosa cair kemasan; pilih buah segar utuh dengan serat alami.'
  }
];

/**
 * REKOMENDASI KEBUGARAN SEHARI-HARI (DAILY WELLNESS)
 */
const WELLNESS_GOALS = [
  {
    id: 'pre_workout',
    title: 'Pre-Workout Energy Boost',
    subtitle: 'Bahan Bakar Stamina & Pompa Otot Tanpa Begah',
    targetTime: '30 - 45 Menit Sebelum Olahraga',
    targetNutrients: 'Glukosa Cepat Serap, L-Citrulline Alami, Elektrolit Kalium',
    bestFormula: {
      title: 'Power Surge Pre-Ignition',
      combo: ['pisang', 'semangka'],
      description: 'Pisang memberi glikogen cepat untuk kontraksi otot, sedangkan semangka menyuplai L-Citrulline yang memperlebar pembuluh darah (vasodilatasi) untuk performa angkat beban atau lari maksimal.'
    },
    actionGuide: 'Blender 1 buah pisang Cavendish matang bersama 1 slice besar semangka merah tanpa gula. Minum 40 menit sebelum sesi gym/kardio dimulai.'
  },
  {
    id: 'post_workout',
    title: 'Post-Workout Muscle Recovery',
    subtitle: 'Pemulihan Glikogen & Redam Nyeri Otot (DOMS)',
    targetTime: 'Maksimal 45 Menit Pasca Latihan',
    targetNutrients: 'Enzim Bromelain Anti-Radang, Asam Lemak Sehat, Elektrolit Lengkap',
    bestFormula: {
      title: 'Anabolic Muscle Repair Elixir',
      combo: ['nanas', 'alpukat', 'pisang'],
      description: 'Bromelain nanas memecah peradangan mikroskopis pada serat otot yang sobek, lemak sehat alpukat menstabilkan hormon anabolik, dan pisang mengisi ulang tangki glikogen yang terkuras habis.'
    },
    actionGuide: 'Buat smoothie kental alpukat + nanas matang + pisang. Bisa ditambahkan susu almond atau whey protein bubuk.'
  },
  {
    id: 'glowing_skin',
    title: 'Glowing Skin & Anti-Aging',
    subtitle: 'Sintesis Kolagen Alami & Perisai Sinar UV',
    targetTime: 'Pagi Hari Jam 08:00 - 10:00',
    targetNutrients: 'Megadosis Vitamin C, Likopen, Vitamin E, Hidrasi Seluler',
    bestFormula: {
      title: 'Glow Collagen Synthesizer',
      combo: ['jambu', 'delima', 'kiwi'],
      description: 'Vitamin C jambu dan kiwi adalah kofaktor mutlak bagi enzim prolyl hidroksilase pembentuk serat kolagen baru, sedangkan antioksidan delima melindungi elastin kulit dari kerutan dini.'
    },
    actionGuide: 'Konsumsi salad mangkuk buah kiwi potong, biji delima merah, dan jus jambu merah murni setiap pagi selama 21 hari.'
  },
  {
    id: 'brain_focus',
    title: 'Mental Focus & Deep Work',
    subtitle: 'Ketajaman Kognitif & Anti Brain-Fog Bebas Kafein',
    targetTime: 'Siang Hari Jam 13:00 - 15:00',
    targetNutrients: 'Antosianin Pelindung Neuron, Glukosa Terkontrol, Vitamin B6',
    bestFormula: {
      title: 'Neuro-Cognitive Clarity Blend',
      combo: ['blueberry', 'apel', 'alpukat'],
      description: 'Antosianin blueberry memperlancar transmisi sinyal antar sinaps otak, quercetin apel menekan radikal bebas neurotoksik, dan alpukat menyuplai asam lemak pembungkus selubung mielin saraf.'
    },
    actionGuide: 'Ngemil segenggam blueberry segar bersama irisan apel fuji tipis yang diolesi selai alpukat dingin di sela jam kerja padat.'
  },
  {
    id: 'immunity_shield',
    title: 'Daily Immunity & Anti-Flu',
    subtitle: 'Benteng Sel Darah Putih & Pelindung Musim Pancaroba',
    targetTime: 'Pagi Hari Bersama Sarapan',
    targetNutrients: 'Bioflavonoid Sitrus, Enzim Papain, Vitamin C Spektrum Luas',
    bestFormula: {
      title: 'Immuno-Shield Bio-Defense',
      combo: ['jeruk', 'pepaya', 'nanas'],
      description: 'Sinergi vitamin C jeruk dan pepaya mengaktifkan limfosit T dan sel Natural Killer (NK), sementara bromelain nanas membasmi lendir dahak di saluran napas.'
    },
    actionGuide: 'Jus peras jeruk sunkist dicampur dengan potongan pepaya manis dan sentuhan nanas segar. Tanpa gula, minum 3x seminggu.'
  },
  {
    id: 'deep_sleep',
    title: 'Deep Sleep & Anti-Stress',
    subtitle: 'Regulasi Ritme Sirkadian & Relaksasi Saraf Otot',
    targetTime: '60 - 90 Menit Sebelum Tidur Malam',
    targetNutrients: 'Serotonin Alami, Melatonin Alami, Magnesium & Kalium Penenang',
    bestFormula: {
      title: 'Somnus Dream Inducer',
      combo: ['kiwi', 'pisang'],
      description: 'Kiwi mengandung serotonin alami dan antioksidan yang menenangkan hiperaktivitas sistem saraf simpatik, sedangkan magnesium pisang mengendurkan ketegangan serat otot leher dan pundak.'
    },
    actionGuide: 'Kupas 2 buah kiwi emas dan makan bersama 1/2 buah pisang Cavendish 1 jam sebelum lampu tidur dimatikan. Rasakan tidur lelap tanpa sering terbangun.'
  }
];

/**
 * DATABASE RESEP SINKRONISASI LAB BLENDER (FRUIT FUSIONS)
 */
const FRUIT_FUSIONS = [
  {
    id: 'fusion_collagen_shield',
    name: 'Mega Collagen & Iron Shield',
    ingredients: ['jambu', 'jeruk', 'kiwi'],
    category: 'Kulit & Imunitas',
    headline: 'Sinergi Vitamin C Tertinggi di Muka Bumi (>350mg)',
    biochemicalSynergy: 'Asam askorbat spektrum penuh dari ketiga buah berpadu dengan bioflavonoid hesperidin meningkatkan absorpsi vitamin C intraseluler hingga 140%. Merangsang sel fibroblas memproduksi kolagen tipe 1 & 3 sekaligus melipatgandakan penyerapan zat besi.',
    benefits: [
      'Kulit tampak lebih kenyal, kencang, dan lembap alami',
      'Mempercepat penyembuhan sariawan dan gusi berdarah',
      'Mengurangi garis halus tanda penuaan akibat paparan radikal bebas'
    ],
    tasteProfile: 'Sangat segar, manis buah jambu berpadu citrus zesty dan kiwi tang yang menggigit nikmat.',
    bestConsumed: 'Pagi hari 30 menit setelah sarapan sehat.'
  },
  {
    id: 'fusion_cardio_relaxer',
    name: 'Cardio Vasodilator & Tensi Relaxer',
    ingredients: ['semangka', 'delima'],
    category: 'Jantung & Sirkulasi',
    headline: 'Duet Maut Nitrit Oksida & Pembersih Endotel Arteri',
    biochemicalSynergy: 'L-Citrulline semangka diubah enzim hepar menjadi L-Arginine, memicu sintesis gas Nitrit Oksida (NO) yang melenturkan otot polos pembuluh darah. Polifenol punicalagin delima secara bersamaan menghalangi perusakan NO oleh radikal bebas superoksida.',
    benefits: [
      'Menurunkan resistensi vaskular perifer (meredakan tensi tinggi)',
      'Memperlancar ereksi dan stamina aliran darah tubuh',
      'Mencegah kram betis saat beraktivitas berat atau tidur'
    ],
    tasteProfile: 'Super segar, manis berair dengan sensasi semburan manis-sepat eksotis delima merah.',
    bestConsumed: 'Siang hari saat cuaca gerah atau 1 jam sebelum olahraga kardio.'
  },
  {
    id: 'fusion_gut_cleanse',
    name: 'Digestive Detox & Gut Healer',
    ingredients: ['pepaya', 'nanas', 'naga'],
    category: 'Pencernaan Total',
    headline: 'Kombinasi Enzim Ganda (Papain + Bromelain) & Prebiotik',
    biochemicalSynergy: 'Papain dan Bromelain bekerja sinergis memotong rantai polipeptida protein sisa makanan yang tertahan di lambung. Biji buah naga merah menyuplai serat prebiotik oligosakarida yang memberi makan koloni Lactobacillus di usus besar.',
    benefits: [
      'Mengatasi perut kembung, begah, dan gas berlebih seketika',
      'Melunakkan feses keras dan membersihkan divertikulum usus',
      'Mengurangi peradangan pada dinding mukosa saluran cerna'
    ],
    tasteProfile: 'Manis tropis lembut beraroma harum nanas eksotis dengan tekstur creamy buah naga.',
    bestConsumed: 'Sore hari atau 30 menit sesudah santapan makan siang berlemak.'
  },
  {
    id: 'fusion_anabolic_fuel',
    name: 'Neuro-Muscular Power Sustainer',
    ingredients: ['pisang', 'alpukat'],
    category: 'Otot & Pemulihan',
    headline: 'Kombinasi Kalium Elektrolit & Lemak Sehat Pelindung Membran',
    biochemicalSynergy: 'Asam lemak tak jenuh tunggal (MUFA) alpukat memperlambat pengosongan lambung, sehingga karbohidrat dan glukosa pisang diserap secara stabil (sustained-release) tanpa memicu crash insulin. Kalium 800mg+ meredakan kontraksi otot tegang.',
    benefits: [
      'Bahan bakar stamina tahan lama untuk aktivitas seharian',
      'Mencegah kelelahan mendadak dan kram otot saat bekerja/olahraga',
      'Mendukung kestabilan mood dan neurotransmiter bahagia serotonin'
    ],
    tasteProfile: 'Super creamy laksana es krim lembut alami, manis legit alami yang sangat mengenyangkan.',
    bestConsumed: 'Sarapan pagi praktis atau camilan sehat sore jam 15:30.'
  },
  {
    id: 'fusion_brain_antioxidant',
    name: 'Neuro-Vascular Cognitive Shield',
    ingredients: ['apel', 'blueberry', 'delima'],
    category: 'Otak & Memori',
    headline: 'Trio Antioksidan Penembus Blood-Brain Barrier',
    biochemicalSynergy: 'Antosianin blueberry dan punicalagin delima menembus sawar darah otak untuk mengurangi stres oksidatif di hipokampus pusat ingatan. Quercetin apel mencegah agregasi protein amyloid yang memicu kepikunan dini.',
    benefits: [
      'Meningkatkan daya konsentrasi, kecepatan recall memori kerja',
      'Melindungi sel retina dari degenerasi akibat radiasi layar komputer/HP',
      'Memberikan energi mental jernih tanpa deg-degan'
    ],
    tasteProfile: 'Manis segar berkelas dengan aroma berry mewah dan kelembutan manis apel merah.',
    bestConsumed: 'Pagi hari saat memulai pekerjaan analisis atau belajar intensif.'
  }
];
