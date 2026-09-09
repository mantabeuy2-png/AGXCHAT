import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1c61ab] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
          {/* Background subtle radial gradient */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#05A065]/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#3EE69F]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05A065]/25 border border-[#3EE69F]/30 text-[#8CE3B8] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#3EE69F]" />
              Mulai Dalam 5 Menit
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAFDFB] leading-tight">
              Tingkatkan Penjualan Chat Anda Tanpa Batasan Biaya Pesan.
            </h2>

            <p className="text-base sm:text-lg text-[#C8E4D5] leading-relaxed max-w-2xl mx-auto">
              Daftar sekarang di <strong>agxchat.agenx.id</strong>. Dapatkan akses ke Unlimited Chat, Unlimited AI Agent, ongkir Biteship, TemanQRIS, dan integrasi AgxPOS.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://agxchat.agenx.id/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3EE69F] hover:bg-[#32D288] text-[#082015] text-base font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Mulai Uji Coba Gratis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://agxchat.agenx.id/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-[#528972] text-base font-semibold px-7 py-4 rounded-full transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#B2D8C3]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3EE69F]" />
                Tanpa Biaya Per Pesan
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3EE69F]" />
                Tanpa Kontrak Mengikat
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3EE69F]" />
                Dukungan Prioritas Teknis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
