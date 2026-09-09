import React, { useState } from 'react';
import { 
  Sparkles, 
  Truck, 
  Receipt, 
  Store, 
  Send, 
  CheckCircle2, 
  QrCode, 
  ArrowRight, 
  RefreshCw,
  Sliders,
  Clock,
  ShieldCheck,
  Check
} from 'lucide-react';
import { CourierOption } from '../types';
import { AgxChatLogo } from './AgxChatLogo';

export const InteractiveSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai_modes' | 'biteship' | 'invoice_qris' | 'agxpos'>('ai_modes');

  // AI Modes state
  const [aiMode, setAiMode] = useState<'moderation' | 'direct'>('moderation');
  const [approvedDraft, setApprovedDraft] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('Apakah kemeja flannel navy ukuran XL masih ready dan bisa dikirim hari ini?');

  // Biteship state
  const [destinationCity, setDestinationCity] = useState('Kota Bandung (Coblong)');
  const [packageWeight, setPackageWeight] = useState(1);
  const [selectedCourier, setSelectedCourier] = useState<string>('jnt');

  const courierOptions: CourierOption[] = [
    { id: 'jnt', name: 'J&T Express', service: 'EZ Reguler', fee: 12000 * packageWeight, etd: '1 - 2 Hari', popular: true },
    { id: 'sicepat', name: 'SiCepat', service: 'REG Standard', fee: 13000 * packageWeight, etd: '1 - 2 Hari' },
    { id: 'jne', name: 'JNE', service: 'CTC / Reguler', fee: 11500 * packageWeight, etd: '2 - 3 Hari' },
    { id: 'anteraja', name: 'Anteraja', service: 'Next Day', fee: 18000 * packageWeight, etd: '1 Hari' }
  ];

  // Invoice & TemanQRIS state
  const [buyerName, setBuyerName] = useState('Dimas Prasetyo');
  const [itemPrice, setItemPrice] = useState(189000);
  const [shippingFee, setShippingFee] = useState(12000);
  const [paymentStatus, setPaymentStatus] = useState<'unpaid' | 'paid'>('unpaid');

  // POS State
  const [posStock, setPosStock] = useState(28);
  const [posSalesCount, setPosSalesCount] = useState(142);
  const [syncedLog, setSyncedLog] = useState<string[]>([
    'Stok awal: 30 unit (AgxPOS Server)',
    'Order #AGX-9011: -1 unit via WhatsApp Chat',
    'Order #AGX-9012: -1 unit via WhatsApp Chat'
  ]);

  const simulatePosOrder = () => {
    if (posStock > 0) {
      setPosStock(prev => prev - 1);
      setPosSalesCount(prev => prev + 1);
      setSyncedLog(prev => [
        `Order baru terverifikasi: -1 unit (Tersisa ${posStock - 1} pcs)`,
        ...prev.slice(0, 3)
      ]);
    }
  };

  return (
    <section id="simulasi" className="py-16 md:py-24 bg-[#F5F8F5] border-t border-b border-[#E2EAE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F5EC] text-[#004838] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#05A065]" />
            Simulasi Interaktif Langsung
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241C] tracking-tight">
            Coba Langsung Alur Kerja AgxChat
          </h2>
          <p className="text-base sm:text-lg text-[#475C51]">
            Rasakan kemudahan switch mode AI, kalkulasi tarif ekspedisi Biteship, buat QRIS otomatis, dan sinkronisasi ke sistem kasir.
          </p>
        </div>

        {/* Simulator Tabs */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="bg-white p-1.5 rounded-2xl border border-[#DCE4DD] shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-1">
            <button
              onClick={() => setActiveTab('ai_modes')}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'ai_modes'
                  ? 'bg-[#0972e3] text-white shadow-xs'
                  : 'text-[#3E564A] hover:bg-[#F3F6F3]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Mode AI Agent</span>
            </button>

            <button
              onClick={() => setActiveTab('biteship')}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'biteship'
                  ? 'bg-[#0972e3] text-white shadow-xs'
                  : 'text-[#3E564A] hover:bg-[#F3F6F3]'
              }`}
            >
              <Truck className="w-4 h-4 text-[#05A065]" />
              <span>Ongkir Biteship</span>
            </button>

            <button
              onClick={() => setActiveTab('invoice_qris')}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'invoice_qris'
                  ? 'bg-[#0972e3] text-white shadow-xs'
                  : 'text-[#3E564A] hover:bg-[#F3F6F3]'
              }`}
            >
              <Receipt className="w-4 h-4 text-[#05A065]" />
              <span>Invoice & TemanQRIS</span>
            </button>

            <button
              onClick={() => setActiveTab('agxpos')}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'agxpos'
                  ? 'bg-[#0972e3] text-white shadow-xs'
                  : 'text-[#3E564A] hover:bg-[#F3F6F3]'
              }`}
            >
              <Store className="w-4 h-4 text-[#05A065]" />
              <span>API AgxPOS Kasir</span>
            </button>
          </div>
        </div>

        {/* Tab 1: AI MODES */}
        {activeTab === 'ai_modes' && (
          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-2xl border border-[#DDE5DE] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EAEFEA]">
              <div>
                <h3 className="text-xl font-bold text-[#13261E] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#05A065]" />
                  Eksplorasi: Mode Moderasi vs. Mode Langsung Tayang
                </h3>
                <p className="text-xs sm:text-sm text-[#50685B] mt-1">
                  Kendalikan sepenuhnya bagaimana AI berinteraksi dengan pelanggan bisnis Anda.
                </p>
              </div>

              {/* Mode Switcher */}
              <div className="bg-[#F0F5F1] p-1 rounded-xl flex items-center border border-[#D5E2D8] shrink-0">
                <button
                  onClick={() => {
                    setAiMode('moderation');
                    setApprovedDraft(false);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    aiMode === 'moderation'
                      ? 'bg-[#0972e3] text-white shadow-xs'
                      : 'text-[#3E5649] hover:text-[#11241C]'
                  }`}
                >
                  Mode Moderasi (Human-in-the-loop)
                </button>
                <button
                  onClick={() => {
                    setAiMode('direct');
                    setApprovedDraft(true);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    aiMode === 'direct'
                      ? 'bg-[#0972e3] text-white shadow-xs'
                      : 'text-[#3E5649] hover:text-[#11241C]'
                  }`}
                >
                  Mode Langsung Tayang (Auto-pilot 24/7)
                </button>
              </div>
            </div>

            {/* Simulation Canvas */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left: Chat Simulator */}
              <div className="md:col-span-7 bg-[#FAFBF9] rounded-xl border border-[#DFE6E0] p-4 flex flex-col justify-between min-h-[340px]">
                <div className="space-y-3">
                  <div className="text-[11px] font-semibold text-[#668073] flex items-center justify-between pb-2 border-b border-[#EAEFEA]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 bg-white border border-[#D9E1DA] rounded p-0.5 flex items-center justify-center">
                        <AgxChatLogo className="w-full h-full" />
                      </div>
                      <span>Chat WhatsApp Pelanggan</span>
                    </div>
                    <span className="text-[#004838] font-bold">Status: {aiMode === 'moderation' ? 'Review Admin Diperlukan' : 'Otomatis Dibalas AI'}</span>
                  </div>

                  {/* Customer Message */}
                  <div className="bg-white p-3 rounded-xl rounded-tl-xs border border-[#DFE6DF] max-w-[85%] text-xs sm:text-sm text-[#1A2D23] shadow-2xs">
                    {customPrompt}
                    <span className="block text-[10px] text-[#7A9084] mt-1 text-right">Baru saja</span>
                  </div>

                  {/* AI Output */}
                  {aiMode === 'moderation' ? (
                    <div className={`p-3.5 rounded-xl border transition-all ${
                      approvedDraft 
                        ? 'bg-white border-[#05A065] shadow-xs' 
                        : 'bg-[#EDF8F2] border-[#BCE7D0]'
                    }`}>
                      <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                        <span className="text-[#004838] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#05A065]" />
                          {approvedDraft ? 'Pesan Terkirim ke Pelanggan' : 'Draf Jawaban AI Cerdas'}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          approvedDraft 
                            ? 'bg-[#05A065] text-white' 
                            : 'bg-[#FEEFC3] text-[#B45309]'
                        }`}>
                          {approvedDraft ? 'Sudah Terkirim' : 'Menunggu Approval CS'}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-[#1B3226] leading-relaxed">
                        Halo Kak! Stok <strong>Kemeja Flannel Navy ukuran XL</strong> masih tersedia 8 pcs di toko kami. Jika pemesanan diselesaikan sebelum jam 15.00 WIB, paket bisa langsung kami kirim hari ini via Biteship (J&T / SiCepat). Apakah ingin kami buatkan invoice & QRIS sekarang?
                      </p>

                      {!approvedDraft ? (
                        <div className="mt-3 pt-2.5 border-t border-[#CCE8D9] flex items-center justify-end gap-2">
                          <button 
                            onClick={() => setApprovedDraft(true)}
                            className="text-xs font-bold bg-[#0972e3] hover:bg-[#0863c5] text-white px-3.5 py-1.5 rounded-lg shadow-2xs flex items-center gap-1.5 transition-all"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Setujui & Kirim ke WhatsApp</span>
                          </button>
                        </div>
                      ) : (
                        <div className="mt-2 text-[11px] text-[#05A065] font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Draf telah divalidasi oleh Agen CS dan terkirim ke customer.</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-white p-3.5 rounded-xl border border-[#05A065]/40 shadow-xs space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-[#004838]">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#05A065]" />
                          Respon AI Langsung Tayang (Autopilot 24/7)
                        </span>
                        <span className="text-[10px] bg-[#05A065] text-white px-2 py-0.5 rounded-full">
                          Terbalas &lt; 2 Detik
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#193025] leading-relaxed">
                        Halo Kak! Kemeja Flannel Navy size XL ready 8 pcs di gudang. Pesanan sebelum jam 15.00 dikirim hari ini via ekspedisi Biteship. Silakan ketik nama dan alamat pengiriman agar kami hitungkan total beserta QRIS pembayarannya ya!
                      </p>
                    </div>
                  )}
                </div>

                {/* Reset or test prompt */}
                <div className="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#5D776A]">
                  <span>AI Agent Unlimited (Tanpa Batas Kuota Token)</span>
                  {approvedDraft && aiMode === 'moderation' && (
                    <button 
                      onClick={() => setApprovedDraft(false)} 
                      className="text-[#0972e3] underline font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" /> Reset Draf
                    </button>
                  )}
                </div>
              </div>

              {/* Right: Explanatory Card */}
              <div className="md:col-span-5 bg-[#F9FAF8] rounded-xl border border-[#DFE6E0] p-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#14261E]">
                    <Sliders className="w-4 h-4 text-[#05A065]" />
                    <span>Keuntungan Sistem Ini</span>
                  </div>

                  <div className="space-y-2.5 text-xs text-[#3C5245]">
                    <div className="p-2.5 rounded-lg bg-white border border-[#E0E7E1]">
                      <span className="font-bold text-[#11241C] block">🛡️ Mode Moderasi</span>
                      Admin tidak perlu mengetik panjang dari nol. AI menuliskan draf akurat lengkap dengan stok & sopan santun, admin tinggal klik 1 tombol.
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-[#E0E7E1]">
                      <span className="font-bold text-[#11241C] block">⚡ Mode Langsung Tayang</span>
                      Sangat cocok saat toko tutup pukul 21.00 ke atas atau hari libur. Calon pembeli tidak kabur ke kompetitor karena chat terbalas instan.
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-[#E0E7E1]">
                      <span className="font-bold text-[#11241C] block">📊 AI Analisis Percakapan</span>
                      Sistem membaca riwayat chat, mengenali produk yang sering ditanyakan, dan mencatat sentimen pelanggan (Positif / Siap Beli).
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-[#DFE6E0]">
                  <a
                    href="https://agxchat.agenx.id/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center py-2 px-3 text-xs font-bold rounded-lg bg-[#0972e3] hover:bg-[#0863c5] text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Aktifkan AI Agent di Bisnis Anda</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: BITESHIP */}
        {activeTab === 'biteship' && (
          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-2xl border border-[#DDE5DE] p-6 sm:p-8 shadow-sm">
            <div className="pb-6 border-b border-[#EAEFEA]">
              <h3 className="text-xl font-bold text-[#13261E] flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#05A065]" />
                Kalkulator Ongkir Otomatis Biteship di Jendela Chat
              </h3>
              <p className="text-xs sm:text-sm text-[#50685B] mt-1">
                Agen CS atau AI Agent mengecek tarif puluhan ekspedisi nasional tanpa membuka tab browser atau aplikasi terpisah.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Form Input */}
              <div className="md:col-span-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#162A20] mb-1">
                    Kota / Kecamatan Tujuan Pembeli:
                  </label>
                  <select
                    value={destinationCity}
                    onChange={(e) => setDestinationCity(e.target.value)}
                    className="w-full text-xs font-medium border border-[#CAD4CD] rounded-lg p-2.5 bg-white text-[#162920] focus:outline-[#004838]"
                  >
                    <option value="Kota Bandung (Coblong)">Kota Bandung (Coblong)</option>
                    <option value="Kota Surabaya (Gubeng)">Kota Surabaya (Gubeng)</option>
                    <option value="Kota Medan (Medan Baru)">Kota Medan (Medan Baru)</option>
                    <option value="Kota Semarang (Banyumanik)">Kota Semarang (Banyumanik)</option>
                    <option value="Kota Denpasar (Denpasar Selatan)">Kota Denpasar (Denpasar Selatan)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#162A20] mb-1">
                    Berat Paket: {packageWeight} kg
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={packageWeight}
                    onChange={(e) => setPackageWeight(Number(e.target.value))}
                    className="w-full accent-[#004838]"
                  />
                  <div className="flex justify-between text-[11px] text-[#556D60]">
                    <span>1 kg (Kemeja/Baju)</span>
                    <span>3 kg (Sepatu/Paket)</span>
                    <span>5 kg (Karton)</span>
                  </div>
                </div>

                <div className="p-3 bg-[#F0F8F4] border border-[#BEE5D1] rounded-xl text-xs text-[#2A4437] space-y-1">
                  <p className="font-bold text-[#004838]">✓ Fitur Bawaan AgxChat:</p>
                  <p>• API resmi terhubung ke sistem Biteship</p>
                  <p>• Request pick-up kurir otomatis dari dashboard</p>
                  <p>• Resi otomatis terkirim langsung ke chat WhatsApp</p>
                </div>
              </div>

              {/* Courier List Display */}
              <div className="md:col-span-7 bg-[#FAFBF9] rounded-xl border border-[#DFE6E0] p-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-[#193226] pb-2 border-b border-[#EAEFEA]">
                  <span>Hasil Pengecekan Tarif Biteship Real-time</span>
                  <span className="text-[#05A065]">Status: API Aktif</span>
                </div>

                <div className="space-y-2">
                  {courierOptions.map((courier) => (
                    <div
                      key={courier.id}
                      onClick={() => setSelectedCourier(courier.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedCourier === courier.id
                          ? 'bg-[#EDF8F2] border-[#05A065] shadow-2xs'
                          : 'bg-white border-[#E2E8E2] hover:border-[#CAD5CC]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                          selectedCourier === courier.id ? 'bg-[#004838] text-white' : 'bg-[#EAEFEA] text-[#2F4A3D]'
                        }`}>
                          <Truck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-[#11241C]">{courier.name}</span>
                            {courier.popular && (
                              <span className="text-[10px] bg-[#E8F8F0] text-[#05A065] font-bold px-1.5 py-0.5 rounded">
                                Pilihan Tercepat
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-[#556D60]">{courier.service} • Estimasi {courier.etd}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-extrabold text-[#004838]">
                          Rp {courier.fee.toLocaleString('id-ID')}
                        </span>
                        <span className="block text-[10px] text-[#71877C]">per {packageWeight} kg</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between text-xs">
                  <span className="text-[#4E675A]">Kurir terpilih otomatis disematkan ke draft pesan / invoice.</span>
                  <span className="font-bold text-[#004838]">1 Klik Kirim</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: INVOICE & TEMANQRIS */}
        {activeTab === 'invoice_qris' && (
          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-2xl border border-[#DDE5DE] p-6 sm:p-8 shadow-sm">
            <div className="pb-6 border-b border-[#EAEFEA]">
              <h3 className="text-xl font-bold text-[#13261E] flex items-center gap-2">
                <Receipt className="w-5 h-5 text-[#05A065]" />
                Buat Invoice & QRIS Dinamis (TemanQRIS) Tanpa Keluar Chat
              </h3>
              <p className="text-xs sm:text-sm text-[#50685B] mt-1">
                Pelanggan membayar dengan memindai kode QRIS unik. Sistem langsung mendeteksi mutasi dan mengubah status order menjadi LUNAS.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Controls */}
              <div className="md:col-span-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#162A20] mb-1">
                    Nama Pembeli:
                  </label>
                  <input
                    type="text"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full text-xs font-medium border border-[#CAD4CD] rounded-lg p-2.5 bg-white text-[#162920] focus:outline-[#004838]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#162A20] mb-1">
                    Harga Produk:
                  </label>
                  <select
                    value={itemPrice}
                    onChange={(e) => setItemPrice(Number(e.target.value))}
                    className="w-full text-xs font-medium border border-[#CAD4CD] rounded-lg p-2.5 bg-white text-[#162920] focus:outline-[#004838]"
                  >
                    <option value={149000}>Kemeja Linen (Rp 149.000)</option>
                    <option value={189000}>Sepatu Sneakers Canvas (Rp 189.000)</option>
                    <option value={320000}>Paket Bundle Perawatan (Rp 320.000)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#162A20] mb-1">
                    Ongkir Terpilih (Biteship):
                  </label>
                  <select
                    value={shippingFee}
                    onChange={(e) => setShippingFee(Number(e.target.value))}
                    className="w-full text-xs font-medium border border-[#CAD4CD] rounded-lg p-2.5 bg-white text-[#162920] focus:outline-[#004838]"
                  >
                    <option value={12000}>J&T Reguler - Rp 12.000</option>
                    <option value={13000}>SiCepat Standard - Rp 13.000</option>
                    <option value={18000}>Anteraja Next Day - Rp 18.000</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setPaymentStatus(paymentStatus === 'unpaid' ? 'paid' : 'unpaid')}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      paymentStatus === 'paid'
                        ? 'bg-[#E5F5EC] text-[#004838] border border-[#A7DEC0]'
                        : 'bg-[#004838] hover:bg-[#00382B] text-white shadow-xs'
                    }`}
                  >
                    {paymentStatus === 'paid' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#05A065]" />
                        <span>Reset Simulasi (Ubah ke Belum Bayar)</span>
                      </>
                    ) : (
                      <>
                        <QrCode className="w-4 h-4" />
                        <span>Simulasikan Customer Scan & Bayar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Digital Invoice Preview */}
              <div className="md:col-span-7 bg-[#FAFBF9] rounded-2xl border-2 border-dashed border-[#CFD9D1] p-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#E3EBE4]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white border border-[#D9E1DA] rounded-lg p-1 flex items-center justify-center shadow-2xs">
                      <AgxChatLogo className="w-full h-full" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#05A065] block">
                        Invoice Resmi AgxChat
                      </span>
                      <h4 className="text-sm font-extrabold text-[#11241C]">#INV-AGX-2026-088</h4>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    paymentStatus === 'paid'
                      ? 'bg-[#05A065] text-white'
                      : 'bg-[#FEF3C7] text-[#92400E]'
                  }`}>
                    {paymentStatus === 'paid' ? '✓ LUNAS OTOMATIS' : 'MENUNGGU PEMBAYARAN'}
                  </span>
                </div>

                {/* Items breakdown */}
                <div className="py-3 text-xs space-y-1.5 text-[#374E41]">
                  <div className="flex justify-between">
                    <span>Pelanggan:</span>
                    <span className="font-semibold text-[#14261E]">{buyerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Produk:</span>
                    <span className="font-semibold text-[#14261E]">Rp {itemPrice.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ongkos Kirim (Biteship):</span>
                    <span className="font-semibold text-[#14261E]">Rp {shippingFee.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#E3EBE4] text-sm font-extrabold text-[#004838]">
                    <span>Total Tagihan:</span>
                    <span>Rp {(itemPrice + shippingFee).toLocaleString('id-ID')}</span>
                  </div>
                </div>

                {/* TemanQRIS Box */}
                <div className="mt-3 p-3.5 bg-white rounded-xl border border-[#DCE4DD] flex items-center gap-4">
                  <div className="w-20 h-20 bg-[#F3F6F3] rounded-lg border border-[#CAD5CC] flex items-center justify-center shrink-0">
                    <QrCode className="w-14 h-14 text-[#162D22]" />
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#14261E]">TemanQRIS Dinamis</span>
                      <span className="text-[10px] bg-[#E8F8F0] text-[#05A065] font-bold px-1.5 rounded">Real-time</span>
                    </div>
                    <p className="text-[11px] text-[#556D60]">
                      Dapat di-scan dengan GoPay, OVO, ShopeePay, BCA Mobile, Livin Mandiri, BRImo, dll.
                    </p>
                    <p className="text-[10px] text-[#05A065] font-semibold">
                      {paymentStatus === 'paid' 
                        ? 'Mutasi rekening berhasil diverifikasi oleh TemanQRIS.' 
                        : 'Menunggu transfer masuk dari nasabah...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: AGXPOS API */}
        {activeTab === 'agxpos' && (
          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-2xl border border-[#DDE5DE] p-6 sm:p-8 shadow-sm">
            <div className="pb-6 border-b border-[#EAEFEA]">
              <h3 className="text-xl font-bold text-[#13261E] flex items-center gap-2">
                <Store className="w-5 h-5 text-[#05A065]" />
                Tersambung via API ke Aplikasi POS (AgxPOS)
              </h3>
              <p className="text-xs sm:text-sm text-[#50685B] mt-1">
                Katalog produk, harga, dan kuantitas inventori toko fisik langsung sinkron dua arah dengan chat WhatsApp pelanggan.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Controls */}
              <div className="md:col-span-5 space-y-4">
                <div className="bg-[#FAFBF9] p-4 rounded-xl border border-[#DFE6E0] space-y-2">
                  <span className="text-xs font-bold text-[#004838] uppercase">Koneksi API Terhubung</span>
                  <h4 className="text-base font-extrabold text-[#11241C]">Terminal Kasir: Toko Pusat</h4>
                  <p className="text-xs text-[#526A5D]">
                    Endpoint: <code className="text-[11px] bg-white px-1.5 py-0.5 rounded border border-[#D4DED6]">https://api.agxpos.agenx.id/v1/sync</code>
                  </p>
                </div>

                <div className="p-4 bg-[#EDF8F2] border border-[#BCE7D0] rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#3E5649]">Sisa Stok di Gudang / Toko:</span>
                    <span className="text-base font-extrabold text-[#004838]">{posStock} Unit</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#3E5649]">Total Penjualan Hari Ini:</span>
                    <span className="font-bold text-[#11241C]">{posSalesCount} Transaksi</span>
                  </div>
                </div>

                <button
                  onClick={simulatePosOrder}
                  disabled={posStock <= 0}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-[#004838] hover:bg-[#00382B] disabled:bg-gray-400 text-white shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Simulasikan Transaksi Chat Mengurangi Stok POS</span>
                </button>
              </div>

              {/* Logs */}
              <div className="md:col-span-7 bg-[#14261E] rounded-xl p-4 text-[#D8E6DE] font-mono text-xs space-y-2.5 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-[#7E9F8E] border-b border-[#254234] pb-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
                    AgxPOS Event Listener
                  </span>
                  <span>Sinkronisasi Otomatis</span>
                </div>

                <div className="space-y-1.5 py-1">
                  {syncedLog.map((log, index) => (
                    <div key={index} className="flex items-start gap-2 text-[11px]">
                      <span className="text-[#3EE69F]">➜</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#254234] text-[10px] text-[#86A896]">
                  Tidak ada konflik stok antara kasir offline dan pesanan chat online.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
