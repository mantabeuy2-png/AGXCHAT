import React from 'react';
import { Heart, Shield, Lock, Globe } from 'lucide-react';
import { AgxChatLogo } from './AgxChatLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF9F5] border-t border-[#E3E8E3] pt-14 pb-12 text-[#3D5447]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E3E8E3]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 flex items-center justify-center bg-transparent">
                <AgxChatLogo className="w-full h-full" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-[#013c8b] tracking-tight">AgxChat</span>
                <span className="w-2 h-2 rounded-full bg-[#ff0681]"></span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4E6659] leading-relaxed max-w-sm">
              Platform Omnichannel & Unlimited AI Chat Agent untuk bisnis Indonesia. Terintegrasi langsung dengan Biteship, TemanQRIS, dan AgxPOS tanpa biaya per pesan.
            </p>

            <div className="text-xs text-[#5D776A] space-y-1">
              <p>Bagian dari ekosistem digital <strong>agenX.id</strong></p>
              <p className="font-mono text-[11px] text-[#004838] font-bold">https://agxchat.agenx.id/</p>
            </div>
          </div>

          {/* Fitur Utama */}
          <div className="space-y-3 text-xs">
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-[#14261E]">Fitur Unggulan</h5>
            <ul className="space-y-2 text-[#465E51]">
              <li><a href="#fitur" className="hover:text-[#004838]">Unlimited Chat Masuk & Keluar</a></li>
              <li><a href="#fitur" className="hover:text-[#004838]">Bebas Kirim Gambar & File</a></li>
              <li><a href="#fitur" className="hover:text-[#004838]">Riwayat Chat 1 Tahun Penuh</a></li>
              <li><a href="#fitur" className="hover:text-[#004838]">Tanpa Biaya Per Pesan</a></li>
              <li><a href="#fitur" className="hover:text-[#004838]">Tanpa Biaya Tambahan</a></li>
            </ul>
          </div>

          {/* AI & Automasi */}
          <div className="space-y-3 text-xs">
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-[#14261E]">AI Chat Agent</h5>
            <ul className="space-y-2 text-[#465E51]">
              <li><a href="#ai-agent" className="hover:text-[#004838]">Unlimited AI Chat Agent</a></li>
              <li><a href="#ai-agent" className="hover:text-[#004838]">Mode Moderasi (Human Review)</a></li>
              <li><a href="#ai-agent" className="hover:text-[#004838]">Mode Langsung Tayang 24/7</a></li>
              <li><a href="#ai-agent" className="hover:text-[#004838]">AI Analisis Percakapan</a></li>
              <li><a href="#ai-agent" className="hover:text-[#004838]">Akses Fitur Baru & VIP Prioritas</a></li>
            </ul>
          </div>

          {/* Integrasi Ekosistem */}
          <div className="space-y-3 text-xs">
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-[#14261E]">Integrasi Resmi</h5>
            <ul className="space-y-2 text-[#465E51]">
              <li><a href="#integrasi" className="hover:text-[#004838]">Hitung Ongkir Biteship</a></li>
              <li><a href="#integrasi" className="hover:text-[#004838]">Invoice Digital Instan</a></li>
              <li><a href="#integrasi" className="hover:text-[#004838]">TemanQRIS Dinamis</a></li>
              <li><a href="#integrasi" className="hover:text-[#004838]">API Aplikasi Kasir AgxPOS</a></li>
              <li><a href="https://agxchat.agenx.id/" target="_blank" rel="noreferrer" className="hover:text-[#004838]">Portal Web AgxChat</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#637C6F]">
          <div className="flex items-center gap-2">
            <span>© 2026 AgxChat by PT. FadPlus Communication - Bandung. Seluruh hak cipta dilindungi undang-undang.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#05A065]" />
              Enkripsi Cloud 256-bit
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#05A065]" />
              Server SLA 99.9% Uptime
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
