import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap, MessageSquare, Truck, QrCode, Store } from 'lucide-react';
import { AgxChatLogo } from './AgxChatLogo';

interface HeroProps {
  onExploreSimulasi: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSimulasi }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#F4F7F4] to-[#FAF9F5]">
      {/* Brevo subtle background geometry */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#E0F3EA] blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#D4EFE3] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ddf3ff] border border-[#BDE7D3] text-[#004838] text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-4 h-4 text-[#05A065]" />
            <span>Platform Omnichannel & AI Chat Agent Indonesia</span>
            <span className="hidden sm:inline-block text-[#004838]/40">•</span>
            <span className="hidden sm:inline-block text-[#004838]">agenx.id</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#11241C] tracking-tight leading-[1.15]">
            Chat Pelanggan & AI Agent Cerdas,{' '}
            <span className="text-[#004838] underline decoration-[#05A065]/50 decoration-wavy decoration-2 underline-offset-8">
              Sepuasnya Tanpa Biaya Per Pesan.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-[#3D5247] leading-relaxed max-w-3xl mx-auto font-normal">
            Satu platform untuk mengelola ribuan percakapan pelanggan 24/7. Lengkap dengan 
            <strong> Unlimited AI Chat Agent</strong>, <strong>hitung ongkir Biteship otomatis</strong>, 
            <strong> invoice instan</strong>, <strong>TemanQRIS</strong>, dan <strong>tersambung langsung ke AgxPOS</strong>.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://agxchat.agenx.id/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0972e3] hover:bg-[#0863c5] text-white text-base font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all active:scale-98 group"
            >
              <span>Mulai Coba Gratis di agxchat.agenx.id</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={onExploreSimulasi}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2F5F2] text-[#1F342B] border border-[#CAD4CD] text-base font-semibold px-7 py-4 rounded-full shadow-xs transition-colors"
            >
              <Zap className="w-4 h-4 text-[#05A065]" />
              <span>Lihat Simulasi Fitur Interaktif</span>
            </button>
          </div>

          {/* User requirements checkmarks list */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F342B] bg-white/80 backdrop-blur-xs border border-[#DFE6E1] p-2.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#05A065] shrink-0" />
              <span>Unlimited Chat Masuk/Keluar</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F342B] bg-white/80 backdrop-blur-xs border border-[#DFE6E1] p-2.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#05A065] shrink-0" />
              <span>Rp 0 Biaya Per Pesan</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F342B] bg-white/80 backdrop-blur-xs border border-[#DFE6E1] p-2.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#05A065] shrink-0" />
              <span>Hitung Ongkir Biteship</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F342B] bg-white/80 backdrop-blur-xs border border-[#DFE6E1] p-2.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#05A065] shrink-0" />
              <span>QRIS Otomatis & POS API</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Preview Card (Brevo-style high-craft product frame) */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
          <div className="bg-[#11231B] p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-2xl border border-[#233B2F]">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#233B2F] text-xs text-[#89A897]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                <div className="flex items-center gap-1.5 ml-2">
                  <div className="w-4 h-4 bg-white/10 rounded p-0.5 flex items-center justify-center">
                    <AgxChatLogo className="w-full h-full" />
                  </div>
                  <span className="font-mono text-[11px] text-[#A2C2B1] hidden sm:inline">agxchat.agenx.id - Workspace Dashboard</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[11px] bg-[#05A065]/20 text-[#3EE69F] px-2 py-0.5 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3EE69F] animate-pulse"></span>
                  AI Agent Aktif: Mode Moderasi
                </span>
              </div>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="bg-[#F8FAF8] rounded-xl sm:rounded-2xl p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 text-[#162920]">
              {/* Left Column: Chat Conversation */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-[#DEE5E0] shadow-xs p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#EAEFEA]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#E5F5EC] text-[#004838] font-bold flex items-center justify-center text-sm">
                        RP
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-[#14261E]">Rani Permata (Pelanggan)</h2>
                        <p className="text-[11px] text-[#556D60]">Via WhatsApp • 0812-8921-XXXX</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#deffff] text-[#05A065]">
                      Riwayat Tersimpan 1 Thn
                    </span>
                  </div>

                  {/* Messages */}
                  <div className="py-4 space-y-3">
                    {/* Customer Message */}
                    <div className="flex items-start gap-2 max-w-[85%]">
                      <div className="bg-[#F0F4F1] p-3 rounded-2xl rounded-tl-xs text-xs sm:text-sm text-[#1B2F25] leading-snug">
                        Halo kak, saya mau order <strong>Kemeja Linen Sage Green L (2 pcs)</strong> kirim ke Coblong, Kota Bandung. Ada stok dan berapa total plus ongkirnya?
                        <span className="block text-[10px] text-[#71877C] mt-1 text-right">10:14 WIB</span>
                      </div>
                    </div>

                    {/* AI Draft in Moderation Mode */}
                    <div className="bg-[#EDF8F2] border border-[#BFE6D2] rounded-2xl p-3.5 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#004838]">
                          <Sparkles className="w-3.5 h-3.5 text-[#05A065]" />
                          <span>Draf AI Chat Agent (Mode Moderasi)</span>
                        </div>
                        <span className="text-[10px] font-semibold bg-[#05A065] text-white px-2 py-0.5 rounded-full">
                          Siap Kirim
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#183125] leading-relaxed">
                        Halo Kak Rani! Stok <strong>Kemeja Linen Sage Green L</strong> tersedia di AgxPOS (sisa 14 pcs). Total belanja Rp 298.000 + ongkir Biteship Bandung (J&T Rp 12.000). Total <strong>Rp 310.000</strong>.
                      </p>

                      {/* Embedded dynamic attachments */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        <div className="bg-white p-2.5 rounded-lg border border-[#CCE8D9] flex items-center gap-2 text-xs">
                          <Truck className="w-4 h-4 text-[#05A065] shrink-0" />
                          <div>
                            <p className="font-bold text-[#14261E]">Ongkir Biteship</p>
                            <p className="text-[10px] text-[#556D60]">J&T Reguler (1-2 Hari) • Rp 12.000</p>
                          </div>
                        </div>

                        <div className="bg-white p-2.5 rounded-lg border border-[#CCE8D9] flex items-center gap-2 text-xs">
                          <QrCode className="w-4 h-4 text-[#004838] shrink-0" />
                          <div>
                            <p className="font-bold text-[#14261E]">TemanQRIS Dinamis</p>
                            <p className="text-[10px] text-[#556D60]">Verifikasi Otomatis • Rp 310.000</p>
                          </div>
                        </div>
                      </div>

                      {/* Admin action buttons */}
                      <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#CCE8D9]">
                        <button className="text-[11px] font-semibold text-[#486355] px-2.5 py-1 hover:bg-[#D8EDE2] rounded-md transition-colors">
                          Edit Draf
                        </button>
                        <button className="text-[11px] font-bold bg-[#177bb3] hover:bg-[#136694] text-white px-3.5 py-1.5 rounded-md transition-colors shadow-xs flex items-center gap-1">
                          <span>Setujui & Kirim Pesan</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#5E796C] flex items-center justify-between border-t border-[#EAEFEA]">
                  <span>✓ Tarif Pesan: <strong>Rp 0 (Unlimited)</strong></span>
                  <span>✓ Media & Dokumen: <strong>Bebas Kirim</strong></span>
                </div>
              </div>

              {/* Right Column: Integrated Panel (Biteship, TemanQRIS, AgxPOS) */}
              <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
                {/* AgxPOS Sync Status */}
                <div className="bg-white rounded-xl border border-[#DEE5E0] p-3.5 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-[#193226] mb-2">
                    <span className="flex items-center gap-1.5">
                      <Store className="w-4 h-4 text-[#05A065]" />
                      Sinkronisasi API AgxPOS
                    </span>
                    <span className="text-[10px] text-[#05A065] font-semibold">Terkoneksi Real-time</span>
                  </div>
                  <div className="text-[11px] text-[#486355] space-y-1">
                    <div className="flex justify-between">
                      <span>SKU: KMN-SAGE-L</span>
                      <span className="font-semibold text-[#14261E]">14 unit di Kasir Utama</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Harga Satuan:</span>
                      <span className="font-semibold text-[#14261E]">Rp 149.000</span>
                    </div>
                  </div>
                </div>

                {/* Biteship Shipping Preview */}
                <div className="bg-white rounded-xl border border-[#DEE5E0] p-3.5 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-[#193226] mb-2">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-[#05A065]" />
                      Tarif Biteship (Kota Bandung)
                    </span>
                    <span className="text-[10px] bg-[#EAF7F0] text-[#05A065] px-1.5 py-0.5 rounded font-bold">Otomatis</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-[#F8FAF8] border border-[#E3ECE6] flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#14261E]">J&T Express</span>
                        <span className="text-[10px] text-[#556D60] block">EZ Reguler • 1-2 Hari</span>
                      </div>
                      <span className="font-extrabold text-[#004838]">Rp 12.000</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#F8FAF8] border border-[#E3ECE6] flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#14261E]">SiCepat REG</span>
                        <span className="text-[10px] text-[#556D60] block">Best Tarif • 1-2 Hari</span>
                      </div>
                      <span className="font-extrabold text-[#004838]">Rp 13.000</span>
                    </div>
                  </div>
                </div>

                {/* AI Sentiment Analysis Box */}
                <div className="bg-[#F0F8F4] border border-[#CFEADB] rounded-xl p-3 text-xs">
                  <div className="flex items-center justify-between font-bold text-[#004838] mb-1">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#05A065]" />
                      AI Analisis Percakapan
                    </span>
                    <span className="text-[10px] bg-[#05A065] text-white px-2 py-0.5 rounded-full font-semibold">
                      Probabilitas Beli: 95%
                    </span>
                  </div>
                  <p className="text-[11px] text-[#375244]">
                    <strong>Sentimen:</strong> Antusias & Siap Beli. Rekomendasi aksi: Kirim QRIS instan sebelum 10 menit untuk penutupan order instan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
