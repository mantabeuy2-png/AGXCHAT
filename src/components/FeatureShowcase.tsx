import React, { useState } from 'react';
import { CORE_FEATURES } from '../data/featuresData';
import { 
  MessageSquare, 
  FileText, 
  History, 
  DollarSign, 
  ShieldCheck, 
  Truck, 
  Receipt, 
  QrCode, 
  TerminalSquare, 
  Sparkles, 
  ToggleRight, 
  BarChart3, 
  Rocket, 
  Headphones, 
  Infinity as InfinityIcon,
  Check,
  CheckCircle2,
  Filter
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5 text-[#004838]" />,
  FileText: <FileText className="w-5 h-5 text-[#004838]" />,
  History: <History className="w-5 h-5 text-[#004838]" />,
  DollarSign: <DollarSign className="w-5 h-5 text-[#05A065]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#004838]" />,
  Truck: <Truck className="w-5 h-5 text-[#004838]" />,
  Receipt: <Receipt className="w-5 h-5 text-[#004838]" />,
  QrCode: <QrCode className="w-5 h-5 text-[#004838]" />,
  TerminalSquare: <TerminalSquare className="w-5 h-5 text-[#004838]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#05A065]" />,
  ToggleRight: <ToggleRight className="w-5 h-5 text-[#004838]" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-[#004838]" />,
  Rocket: <Rocket className="w-5 h-5 text-[#004838]" />,
  Headphones: <Headphones className="w-5 h-5 text-[#004838]" />,
  Infinity: <InfinityIcon className="w-5 h-5 text-[#05A065]" />
};

export const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'chat' | 'commerce' | 'ai' | 'support'>('all');

  const filteredFeatures = activeTab === 'all' 
    ? CORE_FEATURES 
    : CORE_FEATURES.filter(f => f.category === activeTab);

  return (
    <section id="fitur" className="py-16 md:py-24 bg-[#FFFFFF] border-t border-b border-[#E7EBE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F5EC] text-[#004838] text-xs font-bold uppercase tracking-wider">
            <Check className="w-3.5 h-3.5 text-[#05A065]" />
            Keunggulan & Fitur Lengkap AgxChat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241C] tracking-tight">
            Dirancang untuk Skalabilitas Bisnis Modern Indonesia
          </h2>
          <p className="text-base sm:text-lg text-[#475C51] leading-relaxed">
            Semua kebutuhan operasional chat, automasi AI, pembayaran, ekspedisi kurir, hingga sistem kasir toko telah terpadu tanpa biaya tersembunyi.
          </p>

          {/* Filter Pills (Brevo-style) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#004838] text-white shadow-xs'
                  : 'bg-[#F3F5F2] text-[#334D41] hover:bg-[#E5E9E4]'
              }`}
            >
              Semua Fitur ({CORE_FEATURES.length})
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'chat'
                  ? 'bg-[#004838] text-white shadow-xs'
                  : 'bg-[#F3F5F2] text-[#334D41] hover:bg-[#E5E9E4]'
              }`}
            >
              Pesan & Media Unlimited
            </button>
            <button
              onClick={() => setActiveTab('commerce')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'commerce'
                  ? 'bg-[#004838] text-white shadow-xs'
                  : 'bg-[#F3F5F2] text-[#334D41] hover:bg-[#E5E9E4]'
              }`}
            >
              Transaksi, Biteship & AgxPOS
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'ai'
                  ? 'bg-[#004838] text-white shadow-xs'
                  : 'bg-[#F3F5F2] text-[#334D41] hover:bg-[#E5E9E4]'
              }`}
            >
              Unlimited AI Chat Agent
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'support'
                  ? 'bg-[#004838] text-white shadow-xs'
                  : 'bg-[#F3F5F2] text-[#334D41] hover:bg-[#E5E9E4]'
              }`}
            >
              Prioritas & Eksklusif
            </button>
          </div>
        </div>

        {/* Feature Cards Grid (Brevo aesthetic: warm white cards, clean borders, prominent checkmarks) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feat) => {
            const icon = iconMap[feat.iconName] || <Check className="w-5 h-5 text-[#004838]" />;

            return (
              <div
                key={feat.id}
                className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#E3E8E3] hover:border-[#05A065]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE3DD] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      {icon}
                    </div>
                    {feat.highlightBadge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#E5F5EC] text-[#004838] border border-[#BDE7D3]">
                        {feat.highlightBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Checkmark */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#05A065]/15 text-[#05A065] flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <h3 className="text-lg font-bold text-[#142920] tracking-tight group-hover:text-[#004838] transition-colors">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm text-[#475E52] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>

                {/* Sub-details list */}
                <div className="mt-6 pt-4 border-t border-[#E7ECE7] space-y-2">
                  {feat.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#30483C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#05A065] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Banner for Flat Rp 0 Message Guarantee */}
        <div className="mt-12 bg-[#E9F6F0] rounded-2xl border border-[#BDE7D3] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-[#004838] bg-white px-2.5 py-0.5 rounded-full">
              Jaminan Flat Fair
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#10271E]">
              Tidak Ada Biaya Per Pesan. Tidak Ada Biaya Tambahan.
            </h3>
            <p className="text-sm text-[#3E5649] max-w-2xl">
              Fokus kembangkan bisnis Anda tanpa takut lonjakan tagihan obrolan saat promosi akbar, peluncuran produk baru, atau seasonal campaign.
            </p>
          </div>

          <a
            href="https://agxchat.agenx.id/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-[#0972e3] hover:bg-[#0863c5] text-white text-sm font-bold px-6 py-3.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            Mulai Tanpa Risiko
          </a>
        </div>
      </div>
    </section>
  );
};
