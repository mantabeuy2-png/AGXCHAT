import React from 'react';
import { Sparkles, Bot, ShieldCheck, Zap, BarChart2, Check, ArrowRight, MessageSquare, Award } from 'lucide-react';

export const AiAgentSection: React.FC = () => {
  return (
    <section id="ai-agent" className="py-16 md:py-24 bg-white border-b border-[#E7ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F5EC] text-[#004838] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#05A065]" />
            Generasi Baru AI Chat Agent
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241C] tracking-tight">
            Unlimited AI Chat Agent: Cerdas, Luwes, dan Terkendali
          </h2>
          <p className="text-base sm:text-lg text-[#475C51]">
            Kombinasi fleksibel antara kendali penuh manusia (Mode Moderasi) dan efisiensi automasi 24 jam nonstop (Mode Langsung Tayang).
          </p>
        </div>

        {/* 2 Big Cards: Moderation vs Direct Mode */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mode Moderasi */}
          <div className="bg-[#FAFBF9] rounded-3xl p-8 border border-[#DCE4DD] hover:border-[#05A065]/50 transition-all shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#E8F8F0] text-[#004838] border border-[#BDE7D3]">
                  Human-In-The-Loop
                </span>
                <span className="text-xs text-[#526B5E] font-medium">Jam Kerja Kantor</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#12261E]">
                Mode Moderasi (Tinjau & Setujui)
              </h3>
              <p className="text-sm text-[#475E52] leading-relaxed">
                AI otomatis menyusun draf balasan yang ramah, mengecek stok barang di AgxPOS, dan menghitung estimasi ongkir Biteship. Tim CS Anda hanya perlu membaca cepat dan mengklik tombol setujui.
              </p>
              
              <div className="p-4 bg-white rounded-2xl border border-[#E1E8E2] space-y-2 text-xs text-[#284134]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#05A065] shrink-0" />
                  <span>Menghemat waktu ketik CS hingga <strong>80% per pesan</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#05A065] shrink-0" />
                  <span>Menghindari salah ketik harga, nomor rekening, atau estimasi ongkir</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#05A065] shrink-0" />
                  <span>Gaya bahasa dapat disesuaikan dengan tone brand Anda</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5ECE6] flex items-center justify-between text-xs text-[#526D5F]">
              <span>Status: Rekomendasi untuk tim sales & konsultasi</span>
              <span className="font-bold text-[#004838]">1 Klik Kirim</span>
            </div>
          </div>

          {/* Mode Langsung Tayang */}
          <div className="bg-[#FAFBF9] rounded-3xl p-8 border border-[#DCE4DD] hover:border-[#05A065]/50 transition-all shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#E0F3EA] text-[#05A065] border border-[#A7DEC0]">
                  Autopilot 24/7
                </span>
                <span className="text-xs text-[#526B5E] font-medium">Malam Hari & Hari Libur</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#12261E]">
                Mode Langsung Tayang (Auto-Reply Cerdas)
              </h3>
              <p className="text-sm text-[#475E52] leading-relaxed">
                AI menjawab pertanyaan pelanggan secara langsung tanpa menunggu agen standby. Merespons dalam hitungan detik saat tengah malam, akhir pekan, atau saat lonjakan chat campaign promosi.
              </p>

              <div className="p-4 bg-white rounded-2xl border border-[#E1E8E2] space-y-2 text-xs text-[#284134]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#05A065] shrink-0" />
                  <span>Kecepatan balas rata-rata di bawah <strong>2 detik</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#05A065] shrink-0" />
                  <span>Mampu menangani ribuan chat serentak tanpa antrean</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#05A065] shrink-0" />
                  <span>Pelanggan malam hari langsung terlayani tanpa kabur ke kompetitor</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5ECE6] flex items-center justify-between text-xs text-[#526D5F]">
              <span>Status: Siap melayani pelanggan 24/7 nonstop</span>
              <span className="font-bold text-[#05A065]">0 Detik Tunggu</span>
            </div>
          </div>
        </div>

        {/* AI Analytics & VIP Benefits Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI Analisis Percakapan */}
          <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E2E7E2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE4DD] flex items-center justify-center text-[#05A065]">
              <BarChart2 className="w-5 h-5 text-[#05A065]" />
            </div>
            <h4 className="text-base font-bold text-[#14261E]">AI Analisis Percakapan</h4>
            <p className="text-xs sm:text-sm text-[#4E675A] leading-relaxed">
              Algoritma AI memetakan sentimen pelanggan, mendeteksi sinyal pembelian, dan menyajikan ringkasan poin pembicaraan untuk follow-up sales.
            </p>
          </div>

          {/* Akses Fitur Baru Lebih Dulu */}
          <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E2E7E2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE4DD] flex items-center justify-center text-[#05A065]">
              <Award className="w-5 h-5 text-[#004838]" />
            </div>
            <h4 className="text-base font-bold text-[#14261E]">Akses Fitur Baru Lebih Dulu</h4>
            <p className="text-xs sm:text-sm text-[#4E675A] leading-relaxed">
              Jadilah yang pertama menikmati inovasi teknologi AI dan integrasi terbaru yang dikembangkan secara berkala oleh tim engineer agenX.
            </p>
          </div>

          {/* Dukungan Prioritas */}
          <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E2E7E2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE4DD] flex items-center justify-center text-[#05A065]">
              <ShieldCheck className="w-5 h-5 text-[#004838]" />
            </div>
            <h4 className="text-base font-bold text-[#14261E]">Dukungan Prioritas VIP</h4>
            <p className="text-xs sm:text-sm text-[#4E675A] leading-relaxed">
              Bantuan teknis langsung via WhatsApp dan onboarding personal untuk memastikan integrasi bisnis Anda berjalan lancar tanpa kendala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
