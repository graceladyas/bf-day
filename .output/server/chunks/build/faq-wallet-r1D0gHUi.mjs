import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  layout: "blank",
  data() {
    return {
      faqs: [
        {
          title: "Aktifkan Fitur Saldo VENTENY",
          subtitle: "*Bekerjasama dengan Dipay",
          answer: "Kabar gembira untuk teman-teman karena sekarang kamu bisa bayar transaksi menggunakan fitur Saldo VENTENY. Kamu cukup aktifkan fitur ini di dalam aplikasi VENTENY. Permudah berbagai transaksi, mengirim, dan menerima uang dengan cepat, serta dapatkan berbagai promo dengan menggunakan Saldo VENTENY supaya tetap hemat dan #SemuaBisaHepi bersama VENTENY."
        },
        {
          title: "Apa itu Saldo DIPAY?",
          // answer: 'Saldo VENTENY adalah uang elektronik milik kamu pada aplikasi VENTENY yang dapat digunakan untuk melakukan transaksi pada aplikasi VENTENY, termasuk untuk melakukan transfer dana dan melakukan pembelian produk digital seperti voucher digital, pulsa, paket data dan juga token listrik. Pemberian layanan ini merupakan hasil kerja sama antara VENTENY dengan Dipay yang merupakan penyedia uang elektronik dengan nomor izin 23/570/DKSP/Srt/B yang terdaftar dan diawasi oleh Bank Indonesia.'
          answer: "DIPAY adalah aplikasi layanan uang elektronik berbasis server yang diselenggarakan oleh PT Mareco Prima Mandiri (www.dipay.id) yang didirikan berdasarkan hukum Negara Republik Indonesia serta merupakan Penerbit Uang Elektronik berbasis server dan Penyelenggara Transfer Dana yang telah memperoleh izin dari Bank Indonesia berdasarkan Surat Bank Indonesia No. 22/630/DKSP/Srt/B dan No.22/631/DKSP/Srt/B tanggal 8 Desember 2020 serta Penyelenggara QRIS berdasarkan Surat Bank Indonesia No. 27/484/DKSP/Srt/B tanggal 6 September 2021."
        },
        {
          title: "Bagaimana cara aktivasi fitur Saldo VENTENY?",
          answer: "Untuk melakukan aktivasi fitur Saldo VENTENY dapat dilakukan dengan cara klik tombol Aktivasi Saldo VENTENY yang ada di halaman awal aplikasi, lalu kamu dapat mengikuti rangkaian proses aktivasinya.\n\nBerikut tiga langkah mudah buat daftar dan aktivasi fitur Saldo di aplikasi VENTENY!\n\n1. Klik Aktifkan Saldo VENTENY di aplikasi VENTENY.\n2. Isi data diri, konfirmasi password dan masukkan kode OTP. Pastikan nomor ponsel yang kamu daftarkan memiliki pulsa untuk menerima kode OTP.\n3. Yeay! Saldo VENTENYmu siap dipakai."
        },
        {
          title: "Bagaimana cara Top Up/ Pengisian Saldo VENTENY?",
          answer: 'Kamu dapat melakukan top up atau pengisian saldo setelah berhasil melakukan aktivasi fitur Saldo VENTENY. Untuk melakukan top up/ pengisian Saldo VENTENY kamu bisa mengikuti langkah-langkah berikut:\n\n1. Klik Top Up pada beranda aplikasi VENTENY.\n2. Pada halaman Top Up Wallet, silakan pilih bank yang akan digunakan. Sebelum memilih rekening bank yang akan digunakan, pastikan kamu sudah membaca syarat dan ketentuan yang berlaku ya. \n3. Silakan kamu melakukan transfer sesuai dengan metode pengisian yang digunakan sesuai dengan petunjuk yang tertera pada aplikasi VENTENY via ATM / internet / mobile banking sebesar nominal + kode uniknya. \n4. Setelah melakukan transfer, silahkan kembali ke aplikasi VENTENY untuk mengecek nominal saldo terbaru. \nSetelah dana yang sudah kamu kirimkan telah terverifikasi, maka top up/pengisian saldo akan segera diproses. Waktu yang dibutuhkan untuk memproses transaksi umumnya adalah 10 (sepuluh) menit. Namun jika transaksi kamu bermasalah, silahkan kirimkan bukti transfer melalui email <a href="mailto:customerservice@venteny.com">customerservice@venteny.com</a> atau WA di +62 818-694-800 agar  dapat dilakukan pengecekan manual. \n5. Setelah pengisian Saldo VENTENY berhasil diproses, maka saldo tersebut dapat langsung digunakan untuk kirim uang, pembelian voucher digital, video e-learning, pulsa/paket data dan token listrik. \n \nJika transaksi top up saldo kamu sudah berhasil tapi saldo pada aplikasi VENTENY masih belum bertambah, silakan coba logout dan login kembali akun VENTENY kamu. Apabila ada kendala lebih lanjut kamu dapat menghubungi tim VENTENY via email <a href="mailto:customerservice@venteny.com">customerservice@venteny.com</a> atau WA di +62 818-694-800.'
        },
        {
          title: "Bagaimana Cara Pembayaran Menggunakan Fitur Saldo VENTENY?",
          answer: "1. Pilih produk yang akan kamu beli. Lalu, klik Beli.\n2. Pada halaman checkout, silahkan konfirmasi mengenai total harga produk, biaya admin, metode pembayaran dan bagian promo. Pilih metode pembayaran menggunakan Saldo VENTENY. Lalu, klik Beli.\n3. Konfirmasi password Saldo VENTENYmu, lalu transaksimu akan di proses.\n4. Yeay! Selamat transaksi kamu berhasil."
        },
        {
          title: "Bagaimana Cara Upgrade Fitur Saldo VENTENY?",
          answer: "1. Buka aplikasi VENTENY.\n2. Pilih Transfer, apabila data profil belum lengkap silahkan lengkapi data. Apabila profil sudah lengkap, silahkan verifikasi profil. \n3. Isi form untuk permintaan upgrade fitur Saldo VENTENY.\n4. Setelah lengkap, silahkan tunggu beberapa saat untuk persetujuan. \n5. Persetujuan berhasil, kamu dapat menggunakan Saldo VENTENY untuk melakukan transfer saldo ke sesama pengguna VENTENY dan tarik Saldo VENTENYmu."
        },
        {
          title: "Bagaimana Cara Transfer Saldo VENTENY?",
          answer: "1. Buka aplikasi VENTENY. Lalu, pada halaman beranda pilih Transfer.\n2. Pilih Ke sesama pengguna.\n3. Masukan nomor ponsel tujuan dan nominal saldo yang akan di transfer. \n4. Konfirmasi nomor ponsel dan nominal transfer yang akan dilakukan. Lalu, klik Transfer.\n5. Konfirmasi password. Lalu, klik Lanjut.\n6. Yeay! Proses transfer Saldo VENTENY berhasil."
        },
        {
          title: "Bagaimana Cara Transfer Saldo VENTENY ke Rekening Bank Pengguna?",
          answer: "1. Buka aplikasi VENTENY. Pada halaman beranda pilih Transfer lalu pilih  Tarik Tunai.\n2. Pada halaman Tarik Tunai, pilih Bank Rekening Tujuan, Nomor Rekening Tujuan dan Nominal Transfer yang akan dilakukan.\n3. Konfirmasi detail transfer yang akan dilakukan. Lalu, klik Transfer.\n4. Konfirmasi password. Lalu, klik Lanjut.\n5. Yeay! Proses transfer Saldo VENTENY ke rekening bankmu berhasil."
        },
        {
          title: "Bagaimana dengan saldo DOKU yang dimiliki dalam aplikasi VENTENY?",
          answer: 'Saldo DOKU yang masih kamu miliki dalam aplikasi VENTENY versi lama secara otomatis tetap dapat kamu gunakan melalui aplikasi DOKU e-Wallet yang bisa kamu download di Google Play Store atau App Store. Untuk informasi lebih jelas mengenai aplikasi DOKU e-Wallet, silahkan kunjungi halaman Bantuan/ FAQ DOKU melalui link berikut <a href="https://doku.promo/e-wallet">https://doku.promo/e-wallet</a>'
        },
        {
          title: "Bagaimana Cara Menghubungi Kami?",
          answer: 'Kamu dapat menghubungi kami melalui nomor telepon atau WhatsApp di +62 818-694-800 atau melalui email ke <a href="mailto:customerservice@venteny.com">customerservice@venteny.com</a>'
        },
        {
          title: "Bagaimana Cara Menghubungi Layanan Pengaduan Kementerian Perdagangan terkait Penyelenggara Perdagangan Melalui Sistem Elektronik?",
          answer: "Kamu dapat menghubungi kontak layanan pengaduan Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga, Kementerian Perdagangan Republik Indonesia, ke alamat dan nomor WhatsApp sebagai berikut:\n\nAlamat: Gedung I Lantai 3, Jalan M. I. Ridwan Rais No. 5 Jakarta Pusat 10110\nWhatsApp: 0853-1111-1010"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center gap-4 font-nunito text-justify" }, _attrs))} data-v-f3b98d05><div class="px-6" data-v-f3b98d05><div class="flex flex-col gap-4" data-v-f3b98d05><div class="flex flex-col gap-4 justify-between" data-v-f3b98d05><div class="flex justify-between items-center gap-2" data-v-f3b98d05><div class="flex items-center gap-2" data-v-f3b98d05><div class="landing-wrapper test" id="term" data-v-f3b98d05><div class="banner" data-v-f3b98d05><!--[-->`);
  ssrRenderList($data.faqs, (faq, index) => {
    var _a;
    _push(`<div class="container mx-auto" style="${ssrRenderStyle({ "text-align": "justify" })}"${ssrRenderAttr("id", faq.title.toLowerCase().replace(/\W/g, "-"))} data-v-f3b98d05><h1 class="font-bold" data-v-f3b98d05>${ssrInterpolate(faq.title)}</h1><hr data-v-f3b98d05>`);
    if (faq.subtitle) {
      _push(`<small class="text-xs" data-v-f3b98d05><i data-v-f3b98d05>${ssrInterpolate(faq.subtitle)}</i></small>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<p class="mt-2 mb-4" style="${ssrRenderStyle({ "white-space": "pre-line" })}" data-v-f3b98d05>${(_a = faq.answer) != null ? _a : ""}</p></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/faq-wallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faqWallet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f3b98d05"]]);

export { faqWallet as default };
//# sourceMappingURL=faq-wallet-r1D0gHUi.mjs.map
