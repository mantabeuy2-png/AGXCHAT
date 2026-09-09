import React from 'react';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPARISON_DATA } from '../data/featuresData';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="perbandingan" className="py-16 md:py-24 bg-[#FAF9F5] border-b border-[#E7ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F5EC] text-[#004838] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#05A065]" />
            Perbandingan Transparan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241C] tracking-tight">
            Mengapa Pelaku Bisnis Memilih AgxChat?
          </h2>
          <p className="text-base sm:text-lg text-[#475C51]">
            Lihat perbedaan nyata antara model flat unlimited AgxChat dibandingkan platform berbasis biaya argo per pesan.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl border border-[#DFE6DF] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5EBE5] bg-[#F7F9F7]">
                  <th className="py-5 px-6 text-sm font-extrabold text-[#152B21] w-1/3">
                    Fitur & Kapabilitas
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-[#004838] bg-[#EAF7F0] w-1/3 border-x border-[#D5EADB]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#05A065]"></span>
                      <span>AgxChat (agenx.id)</span>
                      <span className="text-[10px] bg-[#05A065] text-white px-2 py-0.5 rounded-full font-bold">
                        Pilihan Cerdas
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-[#64748B] w-1/3">
                    Platform Chat Lainnya
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAEFEA] text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`hover:bg-[#FAFBF9] transition-colors ${
                      row.highlight ? 'bg-[#FAFCFA]' : ''
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-[#183125]">
                      {row.feature}
                    </td>

                    {/* AgxChat Column */}
                    <td className="py-4 px-6 font-bold text-[#004838] bg-[#F2FBF6] border-x border-[#D9EFE1]">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#05A065] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                          ✓
                        </span>
                        <span>{row.agxChat}</span>
                      </div>
                    </td>

                    {/* Competitors Column */}
                    <td className="py-4 px-6 text-[#5A6D63]">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#FEE2E2] text-[#991B1B] flex items-center justify-center text-[10px] shrink-0 font-bold">
                          ✕
                        </span>
                        <span>{row.competitors}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-[#FAF9F5] border-t border-[#E5EBE5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4F685B]">
            <p>
              Semua fitur diuji dan terintegrasi langsung dengan ekosistem Biteship, TemanQRIS, dan AgxPOS.
            </p>
            <a
              href="https://agxchat.agenx.id/"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 bg-[#0972e3] hover:bg-[#0863c5] text-white font-bold px-5 py-2.5 rounded-full transition-colors"
            >
              Coba AgxChat Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
