import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center gap-4 font-nunito text-justify" }, _attrs))}><div class="px-6"><div class="flex flex-col gap-4"><div class="flex flex-col gap-4 justify-between"><div class="flex justify-between items-center gap-2"><div class="flex items-center gap-2"></div></div></div></div></div><div class="px-6 flex flex-col gap-8 text-gray"><p class="text-sm leading-relaxed"> Tingkatkan loyalitas, kinerja dan jaga hubungan baik karyawan melalui VENTENY <br><br> Aplikasi Super Apps yang lahir dari gagasan sesama karyawan yang diharapkan dapat meningkatkan produktivitas kerja dan mendukung rekan-rekan karyawan guna menciptakan work-life balance </p><p class="text-sm leading-relaxed"> V-Nancial<br> Fitur dukungan financial karyawan atas kebutuhan dana darurat Menawarkan solusi kebutuhan dana darurat yang exclusive untuk karyawan dengan pendapatan bulanan tetap sebagai </p><p class="text-sm leading-relaxed"> VIP (VENTENY Insurance &amp; Protection)<br> Fitur Safety Net bagi karyawan dan keluarga tercintanya. Ditambah dengan fitur khusus perlindungan untuk gadget Menawarkan Asuransi perlindungan ganda yang melindungi diri dan anggota keluarga tercinta </p><p class="text-sm leading-relaxed"> V-Academy<br> Fitur konten edukasi online, menampilkan ahli praktisi dibidangnya masing masing Menawarkan skills sharing online platform bagi karyawan, diharapkan bisa mendorong terjadinya pertukaran keahlian dan ketrampilan, khususnya life skills, sehingga kompetensi sumber daya manusia meningkat. </p><p class="text-sm leading-relaxed"> E-Wallet<br> Fitur untuk mendukung program cashless yang lebih aman dan nyaman bagi karyawan Menawarkan transaksinya cepat, dan bisa membayar apa saja di Mobile Apps VENTENY Anda. Sistem pembayaran non tunai yang sangat populer! </p><p class="text-sm leading-relaxed"> Top Up <br> Fitur Isi ulang pulsa / Biaya bulanan / Token Listri untuk keluarga, kerabat, atau pelanggan Anda dengan cepat dan mudah 24 Jam ke semua operator di seluruh Indonesia </p><p class="text-sm leading-relaxed"> Otomotif <br> Fitur yang menawarkan solusi diberbagai kesulitan yang sering dihadapi dalam transaksi jual beli motor. Menawarkan solusi diberbagai kesulitan yang sering dihadapi dalam transaksi jual beli motor. Diantaranya, bagaimana menentukan acuan harga pasar dan memastikan harga yang disepakati sesuai dengan kondisi motor </p><p class="text-sm leading-relaxed"> Misi <br> Fitur bermain game yang fun sekaligus mengolahragakan pikiran sehingga bisa kembali fresh. </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/benefit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benefit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { benefit as default };
//# sourceMappingURL=benefit-CarRMPoN.mjs.map
