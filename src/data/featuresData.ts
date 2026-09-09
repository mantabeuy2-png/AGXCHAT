import { ComparisonRow, FaqItem, FeatureItem } from '../types';

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'unlimited-chat',
    title: 'Unlimited Chat Keluar & Masuk',
    category: 'chat',
    highlightBadge: 'Tanpa Batas Kuota',
    iconName: 'MessageSquare',
    description: 'Terima dan kirim percakapan tanpa batas kepada ribuan pelanggan Anda setiap hari tanpa khawatir kehabisan kuota kupon pesan.',
    details: [
      'Kirim pesan broadcast dan obrolan 1-on-1 sepuasnya',
      'Respons tanpa jeda pada jam sibuk dan event promo',
      'Multi-agent kolaborasi dalam satu nomor'
    ]
  },
  {
    id: 'free-media',
    title: 'Bebas Kirim Gambar & File',
    category: 'chat',
    highlightBadge: 'High Quality',
    iconName: 'FileText',
    description: 'Kirim foto produk resolusi tinggi, video demo, brosur PDF, katalog harga, hingga dokumen resi tanpa kompresi buram.',
    details: [
      'Dukungan format PDF, JPEG, PNG, Excel, dan Docx',
      'Pengiriman instan langsung di jendela percakapan',
      'Pratinjau media yang responsif di aplikasi penerima'
    ]
  },
  {
    id: 'chat-history',
    title: 'Riwayat Percakapan 1 Tahun',
    category: 'chat',
    highlightBadge: '365 Hari Aman',
    iconName: 'History',
    description: 'Semua jejak percakapan, komplain, riwayat order, dan kesepakatan tersimpan rapi dan dapat dicari secara instan selama 1 tahun.',
    details: [
      'Pencarian cerdas berdasarkan kata kunci, tanggal, & nama',
      'Data tersimpan aman di cloud terenkripsi',
      'Mudah untuk audit pelayanan dan follow-up repeat order'
    ]
  },
  {
    id: 'no-per-message-fee',
    title: 'Tidak Ada Biaya Per Pesan',
    category: 'chat',
    highlightBadge: 'Rp 0 / Pesan',
    iconName: 'DollarSign',
    description: 'Tinggalkan skema lama yang menguras kantong dengan tagihan argo per pesan. Di AgxChat, nikmati tarif flat yang transparan.',
    details: [
      'Bebas dari tagihan tak terduga di akhir bulan',
      'Tidak perlu isi ulang saldo pulsa pesan (top-up credit)',
      'Perkiraan biaya operasional bisnis menjadi sangat pasti'
    ]
  },
  {
    id: 'no-hidden-fee',
    title: 'Tidak Ada Biaya Tambahan',
    category: 'chat',
    highlightBadge: '100% Transparan',
    iconName: 'ShieldCheck',
    description: 'Harga langganan yang Anda bayarkan sudah mencakup seluruh infrastruktur, update sistem berkala, dan pemeliharaan server.',
    details: [
      'Bebas biaya setup dan aktivasi awal',
      'Tidak ada biaya tambahan untuk kontak aktif pelanggan',
      'Gratis pemeliharaan server 24/7'
    ]
  },
  {
    id: 'biteship-integration',
    title: 'Hitung Ongkir Otomatis (Biteship)',
    category: 'commerce',
    highlightBadge: 'Integrasi Resmi',
    iconName: 'Truck',
    description: 'Cek tarif pengiriman semua kurir nasional (JNE, J&T, SiCepat, Anteraja, GoSend, dll.) secara akurat langsung di dalam chat.',
    details: [
      'Otomatis deteksi kecamatan & kode pos tujuan',
      'Pilihan opsi reguler, kargo, instan, maupun same-day',
      'Generate resi dan tracking pengiriman terpusat'
    ]
  },
  {
    id: 'instant-invoice',
    title: 'Buat Invoice & Kirim Invoice',
    category: 'commerce',
    highlightBadge: '1 Klik Terkirim',
    iconName: 'Receipt',
    description: 'Susun rincian pesanan pelanggan, total belanjaan, diskon, dan ongkir dalam bentuk invoice digital elegan yang langsung terkirim ke chat.',
    details: [
      'Format invoice profesional dengan branding tokomu',
      'Rincian otomatis dari katalog produk',
      'Status pelunasan otomatis terupdate secara real-time'
    ]
  },
  {
    id: 'teman-qris',
    title: 'Buat QR Pembayaran (TemanQRIS)',
    category: 'commerce',
    highlightBadge: 'QRIS Dinamis',
    iconName: 'QrCode',
    description: 'Buat QRIS dinamis unik per transaksi via TemanQRIS. Pelanggan bayar dari BCA, Mandiri, BRI, GoPay, OVO, atau ShopeePay.',
    details: [
      'Verifikasi pembayaran otomatis tanpa kirim bukti transfer',
      'Mencegah bukti transfer palsu atau editan',
      'Notifikasi lunas otomatis menyala di layar kasir'
    ]
  },
  {
    id: 'agx-pos-api',
    title: 'Tersambung via API ke AgxPOS',
    category: 'commerce',
    highlightBadge: 'API Terbuka',
    iconName: 'TerminalSquare',
    description: 'Hubungkan obrolan online di WhatsApp langsung dengan aplikasi kasir AgxPOS. Stok gudang dan data pesanan toko fisik sinkron 2 arah.',
    details: [
      'Pengurangan stok otomatis saat transaksi chat berhasil',
      'Katalog produk terpusat antara toko online & offline',
      'Laporan omzet harian terkonsolidasi dalam satu sistem'
    ]
  },
  {
    id: 'unlimited-ai-agent',
    title: 'Unlimited AI Chat Agent',
    category: 'ai',
    highlightBadge: 'Generasi Baru',
    iconName: 'Sparkles',
    description: 'AI Chat Agent cerdas yang mampu memahami pertanyaan pelanggan dalam bahasa Indonesia yang luwes, tanpa batas kuota interaksi.',
    details: [
      'Bisa dilatih dengan FAQ, SOP, & katalog bisnismu',
      'Mampu melayani ratusan pelanggan secara bersamaan',
      'Membantu meningkatkan konversi leads hingga 3x lipat'
    ]
  },
  {
    id: 'moderation-mode',
    title: 'Mode Moderasi & Langsung Tayang',
    category: 'ai',
    highlightBadge: 'Kontrol Penuh',
    iconName: 'ToggleRight',
    description: 'Pilih alur kerja ideal: CS mereview draf jawaban AI sebelum dikirim (Mode Moderasi), atau biarkan AI merespons autopilot 24/7 (Langsung Tayang).',
    details: [
      'Mode Moderasi: AI bikin draf, admin klik setuju atau edit',
      'Mode Langsung Tayang: Balas instan saat malam hari & libur',
      'Beralih mode kapan saja dengan satu sentuhan sakelar'
    ]
  },
  {
    id: 'ai-analytics',
    title: 'AI Analisis Percakapan',
    category: 'ai',
    highlightBadge: 'Insight Cerdas',
    iconName: 'BarChart3',
    description: 'AI secara otomatis membedah isi percakapan, membaca sentimen pelanggan (puas, ragu, komplain), dan merangkum minat beli produk.',
    details: [
      'Scoring lead otomatis: Mengetahui prospek yang siap beli',
      'Rangkuman poin penting percakapan panjang dalam 3 detik',
      'Rekomendasi tindakan follow-up untuk tim sales'
    ]
  },
  {
    id: 'early-access',
    title: 'Akses Fitur Baru Lebih Dulu',
    category: 'support',
    highlightBadge: 'VIP Prioritas',
    iconName: 'Rocket',
    description: 'Sebagai pengguna AgxChat, Anda mendapatkan keistimewaan mencoba modul teknologi dan integrasi mutakhir sebelum dirilis ke publik.',
    details: [
      'Akses beta ke fitur automasi AI terbaru',
      'Undangan langsung ke webinar product roadmap agenX',
      'Pengaruh langsung dalam usulan fitur baru'
    ]
  },
  {
    id: 'priority-support',
    title: 'Dukungan Prioritas',
    category: 'support',
    highlightBadge: 'Fast Response',
    iconName: 'Headphones',
    description: 'Tim teknis dan Customer Success kami siap mendampingi proses integrasi WhatsApp, setup bot, hingga troubleshooting operasional.',
    details: [
      'Jalur WhatsApp VIP dengan respons hitungan menit',
      'Sesi onboarding panduan teknis langsung 1-on-1',
      'Jaminan uptime server SLA 99.9%'
    ]
  },
  {
    id: 'chat-and-ai-unlimited',
    title: 'Chat & AI Unlimited',
    category: 'ai',
    highlightBadge: 'All-in-One',
    iconName: 'Infinity',
    description: 'Kombinasi pamungkas: Kebebasan obrolan pesan tanpa batas berpadu dengan kecerdasan AI tanpa kuota. Efisiensi maksimal untuk bisnis Anda.',
    details: [
      'Tidak ada batasan pengguna, kontak, maupun percakapan',
      'Satu platform terpadu untuk tim sales, CS, dan AI Bot',
      'Pertumbuhan bisnis tanpa hambatan kenaikan biaya per pesan'
    ]
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Biaya Pesan Keluar & Masuk',
    agxChat: 'Flat Rp 0 (Unlimited Sepuasnya)',
    competitors: 'Dikenakan biaya Rp 250 - Rp 600 / pesan',
    highlight: true
  },
  {
    feature: 'Batas Kuota AI Chat Agent',
    agxChat: 'Unlimited AI Chat Agent (Tanpa kuota token)',
    competitors: 'Dibatasi kuota pesan AI / kredit bulanan',
    highlight: true
  },
  {
    feature: 'Pilihan Mode Interaksi AI',
    agxChat: 'Mode Moderasi (Draf CS) & Langsung Tayang',
    competitors: 'Hanya bot kaku atau auto-reply manual',
    highlight: false
  },
  {
    feature: 'Integrasi Ongkir Otomatis',
    agxChat: 'Terintegrasi Biteship (Semua Kurir Nasional)',
    competitors: 'Harus cek manual di web logistik terpisah',
    highlight: true
  },
  {
    feature: 'Pembuatan Invoice & QRIS',
    agxChat: '1 Klik Invoice + TemanQRIS Otomatis Terverifikasi',
    competitors: 'Manual screenshot & cek mutasi bank ribet',
    highlight: true
  },
  {
    feature: 'Koneksi ke POS Kasir Toko',
    agxChat: 'Tersambung via API ke AgxPOS (Stok & Transaksi)',
    competitors: 'Terpisah dari sistem kasir toko fisik',
    highlight: false
  },
  {
    feature: 'Kirim Gambar, File & Dokumen',
    agxChat: 'Bebas & Resolusi Tinggi (Tanpa kompresi buram)',
    competitors: 'Dibatasi ukuran atau ada tarif tambahan',
    highlight: false
  },
  {
    feature: 'Riwayat Percakapan',
    agxChat: 'Tersimpan 1 Tahun Penuh (365 Hari)',
    competitors: 'Biasanya hanya 30 - 90 hari',
    highlight: false
  },
  {
    feature: 'Dukungan Teknis & Layanan',
    agxChat: 'Dukungan Prioritas Jalur VIP & Onboarding',
    competitors: 'Tiket antrean lambat via email umum',
    highlight: false
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Umum & Harga',
    question: 'Benarkah AgxChat benar-benar tidak mengenakan biaya per pesan?',
    answer: 'Ya, benar 100%! AgxChat tidak memberlakukan tarif argo atau per-message fee. Anda bebas mengirim dan menerima chat, gambar, maupun file dalam jumlah tak terbatas tanpa takut tagihan membengkak.'
  },
  {
    category: 'AI Chat Agent',
    question: 'Bagaimana cara kerja Mode Moderasi vs Mode Langsung Tayang?',
    answer: 'Pada Mode Moderasi, AI Agent akan membaca pesan pelanggan lalu menyusun draf jawaban lengkap (termasuk saran produk atau rincian ongkir). Tim CS Anda tinggal meninjau, mengedit jika perlu, dan menekan tombol kirim. Pada Mode Langsung Tayang, AI langsung membalas pelanggan secara mandiri 24/7, sangat ideal untuk malam hari atau libur operasional.'
  },
  {
    category: 'Integrasi',
    question: 'Bagaimana integrasi hitung ongkir Biteship bekerja di AgxChat?',
    answer: 'AgxChat terhubung langsung dengan API Biteship. Saat pelanggan menyebutkan alamat atau kota tujuan, sistem atau agen CS dapat memunculkan daftar tarif real-time dari puluhan ekspedisi (JNE, J&T, SiCepat, Anteraja, dll.) dan langsung memasukkannya ke invoice pembeli.'
  },
  {
    category: 'Integrasi',
    question: 'Apa keunggulan integrasi TemanQRIS di dalam chat?',
    answer: 'Dengan TemanQRIS, invoice otomatis menyertakan QRIS dinamis dengan nominal pas. Begitu pelanggan melakukan scan bayar dari m-banking atau e-wallet apa pun, sistem AgxChat otomatis mendeteksi status "Lunas" tanpa Anda harus meminta foto bukti transfer yang rawan dipalsukan.'
  },
  {
    category: 'Integrasi',
    question: 'Apakah AgxChat bisa dihubungkan dengan kasir AgxPOS?',
    answer: 'Bisa! AgxChat menyediakan API 2 arah ke aplikasi kasir AgxPOS. Setiap pesanan yang disetujui di chat akan otomatis mengurangi stok barang di kasir fisik toko, dan riwayat pelanggan tersinkronisasi sempurna.'
  },
  {
    category: 'Keamanan & Riwayat',
    question: 'Berapa lama riwayat chat pelanggan disimpan?',
    answer: 'Semua riwayat percakapan, media, dan transaksi pelanggan disimpan dengan aman selama minimal 1 tahun (365 hari) di cloud terenkripsi, memudahkan Anda melihat histori pembelian atau rekap komplain.'
  }
];
