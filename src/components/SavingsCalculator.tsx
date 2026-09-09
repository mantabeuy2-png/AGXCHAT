import React, { useState } from 'react';
import { DollarSign, ArrowRight, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [monthlyMessages, setMonthlyMessages] = useState<number>(25000);
  const competitorFeePerMessage = 350; // standard Rp 350 per message in typical Indonesian BSP/per-message platforms

  const competitorCost = monthlyMessages * competitorFeePerMessage;
  // In AgxChat, pricing starts from Rp 49.000 / month flat for unlimited chat!
  const agxChatCost = 49000; 
  const monthlySavings = Math.max(0, competitorCost - agxChatCost);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E7ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F5EC] text-[#004838] text-xs font-bold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-[#05A065]" />
            Kalkulator Hemat Biaya
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241C] tracking-tight">
            Berapa Biaya yang Dihemat dengan Rp 0 / Pesan?
          </h2>
          <p className="text-base sm:text-lg text-[#475C51]">
            Platform lain mengenakan biaya per pesan (Rp 250 - Rp 500/chat). Di AgxChat, kirim dan terima ratusan ribu percakapan tanpa argo pesan.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-[#FAFBF9] rounded-3xl border border-[#DCE4DD] p-6 sm:p-10 shadow-sm">
          <div className="space-y-8">
            {/* Slider */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <label className="text-sm sm:text-base font-bold text-[#14261E]">
                  Estimasi Jumlah Percakapan Chat Bisnis Anda Per Bulan:
                </label>
                <span className="text-xl font-extrabold text-[#004838] bg-[#E3F4EB] px-3.5 py-1 rounded-full">
                  {monthlyMessages.toLocaleString('id-ID')} Pesan
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="100000"
                step="1000"
                value={monthlyMessages}
                onChange={(e) => setMonthlyMessages(Number(e.target.value))}
                className="w-full h-2.5 bg-[#DCE5DE] rounded-lg appearance-none cursor-pointer accent-[#004838]"
              />
              <div className="flex justify-between text-xs text-[#5D776A] mt-2">
                <span>3.000 Pesan/bln</span>
                <span>25.000 Pesan/bln</span>
                <span>50.000 Pesan/bln</span>
                <span>100.000+ Pesan/bln</span>
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Competitor Cost */}
              <div className="bg-white rounded-2xl p-6 border border-[#E9D5D5] shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Platform Lain (Biaya Per Pesan)
                  </span>
                  <span className="text-[11px] text-[#7F1D1D] bg-[#FEE2E2] px-2 py-0.5 rounded-md font-semibold">
                    Rp 350 / Pesan
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#6B7280]">Perkiraan Tagihan Bulanan:</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#991B1B] mt-1">
                    Rp {competitorCost.toLocaleString('id-ID')}
                    <span className="text-xs font-normal text-[#6B7280]"> / bulan</span>
                  </div>
                </div>
                <div className="text-xs text-[#6B7280] space-y-1 pt-2 border-t border-[#F3F4F6]">
                  <p>• Makin banyak promosi broadcast, makin mahal tagihan</p>
                  <p>• Ada risiko saldo deposit habis saat jam sibuk</p>
                  <p>• Sering ada biaya tambahan kuota kontak</p>
                </div>
              </div>

              {/* AgxChat Guarantee */}
              <div className="bg-[#EDF8F2] rounded-2xl p-6 border-2 border-[#05A065] shadow-sm space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#004838] uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#05A065]" />
                    AgxChat (agenx.id)
                  </span>
                  <span className="text-[11px] text-white bg-[#0972e3] px-2.5 py-0.5 rounded-full font-bold">
                    HEMAT 100% BIAYA PESAN
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#2C4A3C]">Mulai :</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#004838] mt-1">
                    Rp 49.000
                    <span className="text-xs font-normal text-[#2C4A3C]"> / Chat Sepuasnya</span>
                  </div>
                </div>
                <div className="text-xs text-[#203D2E] space-y-1 pt-2 border-t border-[#CCE8D9]">
                  <p className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#05A065] shrink-0" />
                    Bebas kirim gambar, katalog PDF & pesan teks
                  </p>
                  <p className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#05A065] shrink-0" />
                    Tidak ada biaya per pesan & tidak ada biaya tambahan
                  </p>
                  <p className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#05A065] shrink-0" />
                    Unlimited AI Agent tanpa kuota token
                  </p>
                </div>
              </div>
            </div>

            {/* Total Savings Result */}
            <div className="bg-[#0972e3] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <span className="text-xs font-semibold text-[#D4E8FC] uppercase tracking-wider">
                  Total Penghematan Anggaran Chat Bisnis Anda
                </span>
                <div className="text-2xl sm:text-4xl font-extrabold text-[#F0F7FF] mt-1">
                  Rp {monthlySavings.toLocaleString('id-ID')}
                  <span className="text-sm font-normal text-[#D4E8FC]"> / bulan</span>
                </div>
                <p className="text-xs text-[#D4E8FC] mt-1">
                  Atau setara dengan penghematan <strong>Rp {annualSavings.toLocaleString('id-ID')} per tahun</strong>!
                </p>
              </div>

              <a
                href="https://agxchat.agenx.id/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 bg-[#3EE69F] hover:bg-[#32D288] text-[#0A261A] text-sm font-extrabold px-6 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-xs"
              >
                <span>Mulai Berhemat Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
