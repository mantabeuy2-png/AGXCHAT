import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/featuresData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF9F5] border-b border-[#E7ECE7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F5EC] text-[#004838] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#05A065]" />
            Pertanyaan yang Sering Diajukan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241C] tracking-tight">
            Semua yang Perlu Anda Ketahui tentang AgxChat
          </h2>
          <p className="text-base sm:text-lg text-[#475C51]">
            Jawaban lengkap seputar biaya, integrasi Biteship, TemanQRIS, sistem kasir AgxPOS, dan Unlimited AI Agent.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#DDE5DE] shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-[#14261E] hover:text-[#004838] cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#F3F6F3] flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-[#004838] text-white' : 'text-[#4A6456]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#455D50] leading-relaxed border-t border-[#F2F5F2]">
                    <span className="inline-block text-[10px] font-bold uppercase text-[#05A065] bg-[#E8F7F0] px-2 py-0.5 rounded mb-2">
                      {faq.category}
                    </span>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-[#DDE5DE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-[#13261E]">Punya pertanyaan teknis lain seputar integrasi?</h4>
            <p className="text-xs text-[#526B5D]">Tim spesialis kami siap membantu onboarding dan konsultasi langsung.</p>
          </div>
          <a
            href="https://agxchat.agenx.id/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-[#0972e3] hover:bg-[#0863c5] text-white text-xs font-bold px-5 py-3 rounded-full transition-colors"
          >
            Hubungi Tim AgxChat
          </a>
        </div>
      </div>
    </section>
  );
};
