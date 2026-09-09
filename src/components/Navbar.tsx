import React, { useState } from 'react';
import { ArrowRight, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { AgxChatLogo } from './AgxChatLogo';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E7EBE6] transition-all">
      {/* Top Brevo-style announcement banner */}
      <div className="bg-[#0972e3] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-[#ee2868] text-white">
          BARU
        </span>
        <span>Unlimited AI Chat Agent + Integrasi Resmi Biteship, TemanQRIS & AgxPOS</span>
        <button 
          onClick={() => scrollToSection('simulasi')}
          className="hidden md:inline-flex items-center underline hover:text-white ml-2 text-xs"
        >
          Coba Simulasi <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="https://agxchat.agenx.id/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 flex items-center justify-center bg-transparent transition-transform group-hover:scale-105">
                <AgxChatLogo className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-[#013c8b]">AgxChat</span>
                  <span className="w-2 h-2 rounded-full bg-[#ff0681]"></span>
                </div>
                <span className="text-[11px] font-medium text-[#4D6257] tracking-wider uppercase -mt-0.5">
                  by agenx.id
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#253B31]">
            <button 
              onClick={() => scrollToSection('fitur')} 
              className="hover:text-[#004838] transition-colors py-1 cursor-pointer"
            >
              Fitur Lengkap
            </button>
            <button 
              onClick={() => scrollToSection('ai-agent')} 
              className="hover:text-[#004838] transition-colors py-1 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-[#05A065]" />
              AI Chat Agent
            </button>
            <button 
              onClick={() => scrollToSection('integrasi')} 
              className="hover:text-[#004838] transition-colors py-1 cursor-pointer"
            >
              Integrasi Ekosistem
            </button>
            <button 
              onClick={() => scrollToSection('simulasi')} 
              className="hover:text-[#004838] transition-colors py-1 cursor-pointer"
            >
              Simulasi Interaktif
            </button>
            <button 
              onClick={() => scrollToSection('perbandingan')} 
              className="hover:text-[#004838] transition-colors py-1 cursor-pointer"
            >
              Keunggulan
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="hover:text-[#004838] transition-colors py-1 cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://agxchat.agenx.id/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[#1F342B] px-4 py-2.5 rounded-full hover:bg-[#EAECE8] transition-colors"
            >
              Masuk
            </a>
            <a
              href="https://agxchat.agenx.id/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0972e3] hover:bg-[#0863c5] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <span>Mulai Uji Coba</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://agxchat.agenx.id/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold bg-[#0972e3] text-white px-3 py-2 rounded-full sm:hidden"
            >
              Mulai
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#253B31] hover:bg-[#EAECE8]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E7EBE6] bg-[#FAF9F5] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-semibold text-[#253B31]">
            <button 
              onClick={() => scrollToSection('fitur')}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#EAECE8]"
            >
              Fitur Lengkap
            </button>
            <button 
              onClick={() => scrollToSection('ai-agent')}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#EAECE8] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#05A065]" />
              AI Chat Agent (Unlimited)
            </button>
            <button 
              onClick={() => scrollToSection('integrasi')}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#EAECE8]"
            >
              Integrasi (Biteship, TemanQRIS, AgxPOS)
            </button>
            <button 
              onClick={() => scrollToSection('simulasi')}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#EAECE8]"
            >
              Simulasi Interaktif
            </button>
            <button 
              onClick={() => scrollToSection('perbandingan')}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#EAECE8]"
            >
              Perbandingan Biaya
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#EAECE8]"
            >
              FAQ
            </button>
          </div>

          <div className="pt-4 border-t border-[#E7EBE6] flex flex-col gap-2.5">
            <a
              href="https://agxchat.agenx.id/"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 text-sm font-semibold border border-[#D5DCD6] rounded-full text-[#1F342B] bg-white"
            >
              Masuk ke Akun
            </a>
            <a
              href="https://agxchat.agenx.id/"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 text-sm font-semibold rounded-full bg-[#0972e3] hover:bg-[#0863c5] text-white flex items-center justify-center gap-2"
            >
              <span>Mulai Uji Coba Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
