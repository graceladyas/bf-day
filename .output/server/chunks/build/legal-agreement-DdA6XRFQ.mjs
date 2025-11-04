import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-BhCRBuXq.mjs';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      isFlutterInAppWebViewReady: false
    };
  },
  beforeMount() {
    this.isFlutterInAppWebViewReady = true;
  },
  methods: {
    submit() {
      if (this.isFlutterInAppWebViewReady) {
        (void 0).flutter_inappwebview.callHandler(
          "onPrdAccept"
        );
      }
      console.log("onPrdAccept");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="centered-content"><br><span class="custom-number" align="right"> Persetujuan Penggunaan Data</span><span class="custom-number" align="right" style="${ssrRenderStyle({ "margin-top": "5px" })}"> Pribadi (PDP)</span></div><div><div class="centered-content" style="${ssrRenderStyle({ "margin-top": "-45px" })}"><img${ssrRenderAttr("src", _imports_0)} alt="icon" style="${ssrRenderStyle({ "width": "169.14px", "height": "150px", "margin-bottom": "-50px", "margin-left": "20px", "margin-top": "70px" })}"><br><br><br><span class="custom-text-center"> Pemberitahuan pembaruan privasi dalam rangka pemenuhan UU PDP </span> <br><br><br></div><div style="${ssrRenderStyle({ "margin-left": "16px", "margin-right": "16px", "margin-bottom": "-17px", "margin-top": "-50px" })}"><div class="flex flex-col gap-4"><div class="border-gray-500 flex flex-col gap-4 justify-between"><div class="w-full p-2 mb-4 w-96 h-10 text-sm rounded-lg bg-top flex justify-between items-center" role="alert"><img${ssrRenderAttr("src", _imports_1)} alt="icon" style="${ssrRenderStyle({ "width": "101px", "height": "16px", "margin-top": "2px", "margin-left": "10px" })}"><span class="text-top-day" style="${ssrRenderStyle({ "font-size": "12px", "font-weight": "700", "line-height": "16px" })}"><span class="custom-bottom-orange"></span>1 Desember 2024</span></div></div></div></div><br><br><br><br><br><br><br><div class="flex flex-col gap-2" style="${ssrRenderStyle({ "margin-top": "-130px", "margin-left": "20px", "margin-right": "20px" })}"><div class="flex justify-between items-center gap-2"><div class="flex items-center gap-2"><span class="custom-prd">Terima kasih telah menggunakan VENTENY Employee Super App!</span></div></div><span class="custom-text-4">Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Berikut adalah informasi penting terkait pengumpulan, penggunaan, dan perlindungan data pribadi Anda di VENTENY Employee Super App. Dengan melanjutkan penggunaan aplikasi ini, Anda memberikan persetujuan Anda sesuai dengan poin-poin yang dijelaskan di bawah ini.</span><span class="custom-prd">1. Jenis Data yang Dikumpulkan</span><span class="custom-text-4" style="${ssrRenderStyle({ "margin-bottom": "5px" })}"> Kami akan mengumpulkan data pribadi Anda yang relevan dengan layanan yang kami sediakan, yang meliputi, tetapi tidak terbatas pada: </span><ul class="custom-text-4"><li><span class="custom-bottom-1">Data Identitas: </span> Nama, nomor identitas, alamat, email, nomor telepon.</li><li><span class="custom-bottom-1">Data Keuangan: </span>Informasi rekening bank, slip gaji, riwayat pinjaman, informasi pendapatan.</li><li><span class="custom-bottom-1">Data Penggunaan Aplikasi: </span>Aktivitas, interaksi, preferensi, serta pola penggunaan di dalam aplikasi.</li><li><span class="custom-bottom-1">Data Lokasi: </span>Informasi terkait lokasi saat Anda menggunakan aplikasi (jika diizinkan).</li></ul><span class="custom-prd">2. Tujuan Pengumpulan dan Penggunaan Data</span><span class="custom-text-4" style="${ssrRenderStyle({ "margin-bottom": "5px" })}"> Data pribadi Anda akan digunakan untuk: </span><ul class="custom-text-4"><li>Memastikan keamanan dan autentikasi akun Anda.</li><li>Memproses permintaan layanan, seperti Earned Wage Access dan Multipurpose Loan.</li><li>Menyediakan layanan dan penawaran yang relevan dengan kebutuhan Anda.</li><li>Mengelola dan meningkatkan kualitas layanan VENTENY Employee Super App.</li><li>Melakukan analitik data untuk memberikan rekomendasi yang lebih baik.</li></ul><span class="custom-prd">3. Bagaimana Data Anda Disimpan dan Dilindungi</span><span class="custom-text-4" style="${ssrRenderStyle({ "margin-bottom": "5px" })}"> Data pribadi Anda akan digunakan untuk:</span><ul class="custom-text-4"><li>Data Anda akan disimpan dengan aman di server yang terenkripsi.</li><li>Kami menggunakan protokol keamanan ketat untuk melindungi data Anda, termasuk firewall, enkripsi data, dan autentikasi berlapis.</li><li>Hanya pihak yang berwenang yang memiliki akses ke data Anda, dan akses tersebut dibatasi sesuai kebutuhan.</li></ul><span class="custom-prd">4. Berbagi Data Pribadi</span><span class="custom-text-4" style="${ssrRenderStyle({ "margin-bottom": "5px" })}">Kami mungkin membagikan data Anda dengan pihak ketiga yang bekerja sama dengan kami untuk memproses layanan yang Anda pilih, termasuk:</span><ul class="custom-text-4"><li><span class="custom-bottom-1">Penyedia layanan keuangan</span> yang bekerja sama dengan VENTENY.</li><li><span class="custom-bottom-1">Mitra analitik </span> yang membantu kami meningkatkan pengalaman pengguna. Kami tidak akan menjual, menyewakan, atau membagikan data Anda kepada pihak ketiga di luar ketentuan ini tanpa persetujuan Anda.</li></ul><span class="custom-prd">5. Hak Anda atas Data Pribadi</span><span class="custom-text-4" style="${ssrRenderStyle({ "margin-bottom": "5px" })}">Anda memiliki hak untuk:</span><ul class="custom-text-4"><li>Mengakses dan memperbarui data pribadi Anda.</li><li>Menarik persetujuan terkait penggunaan data pribadi untuk pemasaran.</li><li>Meminta penghapusan data pribadi tertentu sesuai dengan hukum yang berlaku.</li><li>Mengetahui bagaimana data Anda diproses dan digunakan oleh VENTENY.</li></ul><span class="custom-prd">6. Penarikan Persetujuan</span><span class="custom-text-4" style="${ssrRenderStyle({ "margin-bottom": "5px" })}">Anda dapat menarik persetujuan kapan saja melalui pengaturan privasi dalam aplikasi atau dengan menghubungi layanan pelanggan kami di [kontak layanan VENTENY].</span><span class="custom-prd">7. Perubahan pada Kebijakan Privasi</span><span class="custom-text-4" style="${ssrRenderStyle({ "margin-bottom": "5px" })}">Kami dapat memperbarui Inform Consent ini dari waktu ke waktu. Kami akan memberi tahu Anda melalui aplikasi jika terdapat perubahan penting. Anda disarankan untuk meninjau pembaruan ini secara berkala.</span><span class="custom-prd">8. Hubungi Kami</span><span class="custom-text-4" style="${ssrRenderStyle({ "margin-bottom": "5px" })}"> Jika Anda memiliki pertanyaan atau ingin menggunakan hak Anda atas data pribadi, silakan hubungi kami melalui:</span><ul class="custom-text-4"><li><span class="custom-bottom-1">Email: </span>[email VENTENY] </li><li><span class="custom-bottom-1">Telepon:</span> [nomor telepon VENTENY]</li></ul><span class="custom-bottom-1">Dengan memilih &quot;Lanjutkan&quot;, Anda mengonfirmasi bahwa Anda telah membaca dan memahami informasi ini serta memberikan persetujuan Anda untuk pengumpulan, penggunaan, dan pengelolaan data pribadi Anda sesuai dengan ketentuan di atas. </span></div><div class="sticky-container"><div class="relative"><button class="send-btn w-full rounded-lg font-semibold text-sm text-white p-4 bg-primary"> Lanjutkan </button></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prd/legal-agreement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const legalAgreement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { legalAgreement as default };
//# sourceMappingURL=legal-agreement-DdA6XRFQ.mjs.map
