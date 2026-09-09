import React from 'react';
import { Truck, QrCode, Store, Check, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

export const IntegrationEcosystem: React.FC = () => {
  return (
    <section id="integrasi" className="py-16 md:py-24 bg-[#FAF9F5] border-b border-[#E7ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F5EC] text-[#004838] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#05A065]" />
            Ekosistem Integrasi Resmi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241C] tracking-tight">
            Terhubung Sempurna dengan Sistem Logistik, Finansial & Kasir
          </h2>
          <p className="text-base sm:text-lg text-[#475C51]">
            Tidak perlu bolak-balik aplikasi. AgxChat mengintegrasikan seluruh rantai transaksi penjualan langsung di dalam percakapan chat.
          </p>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Biteship Integration */}
          <div className="bg-white rounded-3xl p-8 border border-[#DFE6DF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E6F4ED] border border-[#BEE4D0] flex items-center justify-center text-[#004838]">
                <Truck className="w-7 h-7 text-[#004838]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#05A065] uppercase tracking-wider">Logistik & Kurir</span>
                <h3 className="text-xl font-bold text-[#14261E] mt-1">Hitung Ongkir Otomatis Biteship</h3>
              </div>
              <p className="text-sm text-[#4E675A] leading-relaxed">
                Tersambung langsung dengan API Biteship untuk cek tarif live puluhan kurir (JNE, J&T, SiCepat, Anteraja, Ninja, ID Express, GoSend, GrabExpress).
              </p>
              <div className="space-y-2 pt-2 border-t border-[#EDF2EE] text-xs text-[#2A4437]">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E5F5EC] text-[#05A065] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Cek tarif akurat per kecamatan & berat paket</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E5F5EC] text-[#05A065] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Request pick-up tanpa buka aplikasi logistik</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E5F5EC] text-[#05A065] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Kirim nomor resi otomatis ke WhatsApp pembeli</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EDF2EE]">
              <span className="text-[11px] font-bold text-[#004838] bg-[#EAF7F0] px-3 py-1 rounded-full inline-block">
                Terkoneksi API Biteship
              </span>
            </div>
          </div>

          {/* 2. TemanQRIS Integration */}
          <div className="bg-white rounded-3xl p-8 border border-[#DFE6DF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E6F4ED] border border-[#BEE4D0] flex items-center justify-center text-[#004838]">
                <QrCode className="w-7 h-7 text-[#004838]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#05A065] uppercase tracking-wider">Pembayaran Instan</span>
                <h3 className="text-xl font-bold text-[#14261E] mt-1">Buat QR Pembayaran TemanQRIS</h3>
              </div>
              <p className="text-sm text-[#4E675A] leading-relaxed">
                Generate kode QRIS dinamis unik untuk setiap nominal pesanan. Sistem otomatis memverifikasi pembayaran saat pelanggan berhasil scan.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#EDF2EE] text-xs text-[#2A4437]">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E5F5EC] text-[#05A065] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Support semua e-wallet & m-banking Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E5F5EC] text-[#05A065] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Bebas dari risiko bukti transfer manipulasi/palsu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E5F5EC] text-[#05A065] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Invoice langsung berganti status 'Lunas'</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EDF2EE]">
              <span className="text-[11px] font-bold text-[#004838] bg-[#EAF7F0] px-3 py-1 rounded-full inline-block">
                Powered by TemanQRIS
              </span>
            </div>
          </div>

          {/* 3. AgxPOS Integration */}
          <div className="bg-white rounded-3xl p-8 border border-[#DFE6DF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E6F4ED] border border-[#BEE4D0] flex items-center justify-center text-[#004838]">
                <Store className="w-7 h-7 text-[#004838]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#05A065] uppercase tracking-wider">Point of Sale (Kasir)</span>
                <h3 className="text-xl font-bold text-[#14261E] mt-1">Tersambung via API ke AgxPOS</h3>
              </div>
              <p className="text-sm text-[#4E675A] leading-relaxed">
                Sinkronisasi katalog produk, harga, dan kuantitas inventori toko fisik langsung sinkron 2 arah dengan pesanan di chat WhatsApp.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#EDF2EE] text-xs text-[#2A4437]">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E5F5EC] text-[#05A065] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Stok toko fisik otomatis berkurang saat closing di chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E5F5EC] text-[#05A065] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Laporan omzet penjualan online & offline terpadu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E5F5EC] text-[#05A065] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Integrasi mulus dalam satu grup ekosistem agenX</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EDF2EE]">
              <span className="text-[11px] font-bold text-[#004838] bg-[#EAF7F0] px-3 py-1 rounded-full inline-block">
                Native API AgxPOS
              </span>
            </div>
          </div>
        </div>

        {/* Workflow Diagram Banner */}
        <div className="mt-12 bg-[#12241C] text-white rounded-3xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-[#3EE69F] font-bold">
              Alur Transaksi Otomatis 1 Layar
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              Dari Pertanyaan Pelanggan Menjadi Penjualan Lunas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-[#1C3529] p-4 rounded-2xl border border-[#2E5442] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#05A065] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <p className="font-bold text-sm text-white">Chat Masuk</p>
              <p className="text-[#9DB9AA]">Pelanggan bertanya produk & kota tujuan di WhatsApp tanpa batasan kuota pesan.</p>
            </div>

            <div className="bg-[#1C3529] p-4 rounded-2xl border border-[#2E5442] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#05A065] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <p className="font-bold text-sm text-white">Cek Ongkir Biteship</p>
              <p className="text-[#9DB9AA]">AI / CS memilih ekspedisi termurah dan tercepat langsung disematkan ke chat.</p>
            </div>

            <div className="bg-[#1C3529] p-4 rounded-2xl border border-[#2E5442] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#05A065] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <p className="font-bold text-sm text-white">Invoice & TemanQRIS</p>
              <p className="text-[#9DB9AA]">1 klik generate invoice resmi dengan QRIS dinamis unik sesuai nominal order.</p>
            </div>

            <div className="bg-[#1C3529] p-4 rounded-2xl border border-[#2E5442] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#05A065] text-white font-extrabold flex items-center justify-center text-xs">4</span>
              <p className="font-bold text-sm text-white">Update AgxPOS</p>
              <p className="text-[#9DB9AA]">Stok kasir berkurang otomatis saat pembayaran terverifikasi tanpa input manual.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
