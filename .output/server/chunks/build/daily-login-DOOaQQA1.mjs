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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center gap-4 font-nunito text-justify" }, _attrs))}><div class="px-6"><div class="flex flex-col gap-4"><div class="flex flex-col gap-4 justify-between"><div class="flex justify-between items-center gap-2"><div class="flex items-center gap-2"></div></div></div></div></div><div class="px-6 flex flex-col gap-8 text-gray"><p class="text-sm leading-relaxed"> Daily Login Streaks adalah fitur khusus pengguna baru/private user VENTENY untuk bisa mendapatkan Koin VENTENY dengan membuka aplikasi VENTENY setiap hari hingga hari ke-7. Jumlah Koin yang diberikan akan meningkat seiring bertambahnya hari. Pastikan kamu tidak melewatkan satu hari pun dan kumpulkan Koinmu untuk berbelanja di aplikasi VENTENY. </p><strong><span style="${ssrRenderStyle({ "color": "#000000" })}">Syarat Dan Ketentuan </span></strong><ol class="list-decimal text-sm leading-relaxed" style="${ssrRenderStyle({ "text-align": "justify" })}"><li> Fitur Daily Login Streaks hanya berlaku untuk <strong>pengguna baru</strong> yang <strong> terdaftar </strong> di <strong>perusahaan mitra VENTENY</strong> dan memiliki <strong>akun aktif di aplikasi VENTENY</strong> memiliki <strong>akun aktif di aplikasi VENTENY Employee Super App.</strong></li><li> User dapat <strong>mengklaim Koin VENTENY</strong> setelah <strong>berhasil login dan membuka Aplikasi</strong>, Koin VENTENY bisa <strong>diklaim melalui menu Koin.</strong></li><li> Jika kamu <strong>tidak login</strong> atau <strong> tidak membuka Aplikasi VENTENY di hari tertentu</strong>, kamu <strong>tidak bisa mengklaim Koin hari tersebut</strong>.<br> Contoh: Jika kamu tidak login pada hari ke-3, maka kamu tidak bisa mengklaim Koin VENTENY sebesar 2.500 Koin untuk hari ke -3 </li><li> Jika kamu <strong>login dan membuka aplikasi VENTENY</strong> di hari - x tetapi <strong>lupa untuk mengklaim Koin</strong>, kamu tetap <strong>bisa mengklaimnya di hari berikutnya.</strong></li><li> Kamu berkesempatan mendapatkan total <strong> 30.000 Koin VENTENY</strong> jika <strong>login dan membuka aplikasi VENTENY setiap hari.</strong> Struktur Koin Rewards dari Daily Login Streaks adalah sebagai berikut:<br> - Hari 1-4:<strong>2.500 koin per hari (total 10.000)</strong><br> - Hari 5-6:<strong>5.000 koin per hari (total 10.000)</strong><br> - Bonus untuk hari ke 7: <strong>10.000 koin (total 10.000)</strong></li><li> VENTENY berhak untuk <strong>mengubah, menunda, atau menghentikan fitur Daily Login Streaks kapan saja, </strong> dengan atau tanpa pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah diumumkan melalui aplikasi atau media Komunikasi resmi VENTENY.</li></ol></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tnc/daily-login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dailyLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { dailyLogin as default };
//# sourceMappingURL=daily-login-DOOaQQA1.mjs.map
