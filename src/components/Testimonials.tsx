import React from 'react';
import { Star, MessageSquare, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rian Hendrawan',
      role: 'Owner, Arka Fashion Store (Bandung)',
      quote: 'Dulu kami keluar 3-4 juta sebulan hanya untuk biaya per pesan WhatsApp. Sejak pindah ke AgxChat dengan flat unlimited, biaya operasional chat jadi hemat 100%! Ditambah integrasi Biteship, CS kami bisa hitung ongkir tanpa repot.',
      stats: 'Hemat Rp 3.5jt / bulan'
    },
    {
      name: 'Nadia Safitri',
      role: 'Head of Customer Operations, Kopi Nusantara (Jakarta)',
      quote: 'Fitur Mode Moderasi AI-nya juara! AI bikin draf balasan yang sopan plus rekomendasi menu, admin tinggal klik setuju. Pelanggan malam hari juga otomatis terlayani dengan Mode Langsung Tayang.',
      stats: 'Response time < 10 detik'
    },
    {
      name: 'Budi Santoso',
      role: 'Founder, Sentral Gadget Retail (Surabaya)',
      quote: 'Tersambung langsung ke AgxPOS adalah game changer buat kami. Setiap kali ada closing via chat, stok di toko offline kami otomatis sinkron. Dan bayar pakai TemanQRIS langsung verifikasi tanpa cek mutasi bank.',
      stats: '0 Human Error Stok'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E7ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F5EC] text-[#004838] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#05A065] text-[#05A065]" />
            Kisah Sukses Pengguna
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241C] tracking-tight">
            Dipercaya Ratusan Bisnis Retail & E-Commerce
          </h2>
          <p className="text-base sm:text-lg text-[#475C51]">
            Bagaimana pelaku usaha di Indonesia meningkatkan omzet dan memangkas biaya chat hingga puluhan juta rupiah bersama AgxChat.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F5] rounded-3xl p-8 border border-[#DFE6DF] shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#004838] bg-[#E5F5EC] px-2.5 py-0.5 rounded-full">
                    {t.stats}
                  </span>
                </div>
                <Quote className="w-6 h-6 text-[#A0BDB0]" />
                <p className="text-sm text-[#2E473A] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5ECE6]">
                <h4 className="text-sm font-extrabold text-[#14261E]">{t.name}</h4>
                <p className="text-xs text-[#5C7769]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
