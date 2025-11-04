import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center gap-4 font-nunito text-justify" }, _attrs))}><div class="px-6"><div class="flex flex-col gap-4"><div class="flex flex-col gap-4 justify-between"><div class="flex justify-between items-center gap-2"><div class="flex items-center gap-2"></div></div></div></div></div><div class="px-6 flex flex-col gap-8 text-gray"><p class="text-sm leading-relaxed"><strong><span style="${ssrRenderStyle({ "color": "#000000" })}">SYARAT DAN KETENTUAN VENTENY BIOMETRIC</span></strong><br></p><p class="text-sm leading-relaxed"><strong> DEFINISI </strong><br><ol class="list-decimal text-sm leading-relaxed" style="${ssrRenderStyle({ "text-align": "justify" })}"><li> VENTENY App adalah kanal digital yang dimiliki, dioperasikan dan/atau dikelola oleh VENTENY FORTUNA INTERNATIONAL dalam bentuk aplikasi gawai (mobile application) dari www.venteny.com, termasuk untuk sistem operasi iOS dan Android (termasuk perubahannya dari waktu ke waktu). </li><li> VENTENY Biometric adalah fitur yang disediakan di dalam VENTENY App sebagai sistem autentikasi Pengguna dengan cara pemindaian sidik jari, pengenalan wajah, pengenalan retina mata, ritme pengetikan, suara, atau karakteristik lain sebagai pengganti nama (username) dan kata sandi (password) dalam mengkonfirmasi identitas Pengguna ketika mengakses VENTENY App. </li><li> \u2060Pengguna adalah setiap individu yang menggunakan, mengakses, memanfaatkan dan/atau memiliki akun yang terdaftar di VENTENY App.</li></ol></p><p class="text-sm leading-relaxed"><strong> Penggunaan VENTENY Biometric </strong></p><p> Untuk dapat menggunakan VENTENY Biometric, Pengguna harus memiliki perangkat seluler dengan fitur pemindaian sidik jari dan/atau pengenalan wajah yang perlu pengaktifan terlebih dahulu di perangkat seluler Pengguna. Pengguna memiliki pilihan untuk menggunakan atau tidak menggunakan VENTENY Biometric ketika mengakses VENTENY App. Ketika Pengguna memilih untuk tidak menggunakan VENTENY Biometric, Pengguna tetap dapat mengakses VENTENY App dengan menggunakan nama (username) dan kata sandi (password) melalui perangkat seluler yang telah terdaftar sebelumnya. </p><p> VENTENY App tidak menyimpan data VENTENY Biometric yang telah aktif dan/atau didaftarkan oleh Pengguna. Kecuali jika diberitahukan lain kepada Pengguna, maka data VENTENY Biometric tersebut tetap tersimpan di perangkat seluler Pengguna dan dapat disimpan oleh pihak ketiga, seperti pembuat perangkat Pengguna. Pengguna setuju dan memahami bahwa Venteny App tidak bertanggung jawab atas setiap akses tidak sah atau kerugian apapun atas data VENTENY Biometric yang tersimpan di perangkat seluler Pengguna. </p><p> Pengguna bertanggung jawab atas (i) seluruh data VENTENY Biometric dalam perangkat seluler yang digunakan oleh Pengguna untuk mengakses VENTENY App, (ii) penggunaan VENTENY Biometric, serta (iii) resiko yang timbul pada layanan VENTENY App sebagai akibat dari penggunaan VENTENY Biometric. VENTENY App tidak bertanggung jawab dan tidak memberikan ganti rugi dan/atau pertanggungjawaban dalam bentuk apapun kepada Pengguna atas segala risiko dan/atau akibat dan/atau konsekuensi yang timbul dari fitur VENTENY Biometric. </p><p class="text-sm leading-relaxed"><strong> Persetujuan </strong></p><p> Dengan ini, Pengguna memberikan persetujuan kepada VENTENY App untuk mengakses dan menggunakan data VENTENY Biometric yang telah terdaftar pada VENTENY App berikut dengan data dan/atau informasi perangkat seluler yang digunakan Pengguna, untuk keperluan pendaftaran dan penggunaan VENTENY Biometric pada VENTENY App. </p><p> Pengguna bertanggung jawab secara penuh dan membebaskan VENTENY App dari peristiwa yang timbul sehubungan dengan:</p><ol class="list-decimal text-sm leading-relaxed" style="${ssrRenderStyle({ "text-align": "justify" })}"><li> Penggunaan VENTENY Biometric yang tidak wajar atau tidak sah oleh Pengguna, atau penggunaan perangkat seluler Pengguna yang dilakukan tanpa persetujuan Pengguna; </li><li> Adanya pengalihan perangkat seluler Pengguna tanpa terlebih dahulu dilakukan penghapusan data VENTENY Biometric di perangkat seluler Pengguna; </li><li>Setiap pelanggaran yang dilakukan oleh Pengguna terhadap Syarat dan Ketentuan VENTENY Biometric ini.</li></ol><p> Pengguna dengan ini telah membaca, memahami, dan menyetujui seluruh Syarat dan Ketentuan VENTENY Biometric ini. </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/biometric.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const biometric = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { biometric as default };
//# sourceMappingURL=biometric-g8vFAx1F.mjs.map
