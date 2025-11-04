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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center gap-4 font-nunito text-justify" }, _attrs))}><div class="px-6"><div class="flex flex-col gap-4"><div class="flex flex-col gap-4 justify-between"><div class="flex justify-between items-center gap-2"><div class="flex items-center gap-2"></div></div></div></div></div><div class="px-6 flex flex-col gap-8 text-gray"><p class="text-sm leading-relaxed"> Transaction Rewards adalah fitur di VENTENY Employee Superapp yang memberikan Koin sebagai bentuk apresiasi setiap kali pengguna melakukan transaksi. </p><strong><span style="${ssrRenderStyle({ "color": "#000000" })}">Syarat Dan Ketentuan </span></strong><ol class="list-decimal text-sm leading-relaxed" style="${ssrRenderStyle({ "text-align": "justify" })}"><li>Fitur Transaction Rewards hanya berlaku untuk <strong>pengguna terdaftar dengan akun aktif</strong> di aplikasi VENTENY Employee Super App. </li><li><strong>Koin hanya akan diberikan untuk transaksi yang berhasil diselesaikan dan dibayarkan</strong> menggunakan metode pembayaran yang tersedia di aplikasi VENTENY. Transaksi yang dibatalkan, dikembalikan, atau tidak berhasil tidak akan mendapatkan koin. </li><li><strong>Jumlah koin</strong> yang didapatkan berbeda-beda mengikuti produk yang dibeli sesuai dengan <strong> ketentuan pembelian</strong> dibawah ini:<br> - Voucher Digital: <strong>2.000 Koin</strong><br> - Pulsa:<strong>3.000 Koin</strong><br> - Token PLN: <strong>3.000 Koin</strong><br> - Paket Data: <strong>3.000 Koin</strong><br> - Tagihan Listrik: <strong>5.000 Koin</strong><br> - Tagihan Telepon: <strong>5.000 Koin</strong><br> - Internet &amp; TV Kabel: <strong>10.000 Koin</strong><br> - PDAM: <strong>10.000 Koin</strong></li><li> Koin yang diperoleh <strong>tidak dapat ditukar dengan uang tunai</strong> <strong> dan hanya dapat digunakan dalam aplikasi VENTENY</strong> sesuai dengan ketentuan yang berlaku. Koin <strong>memiliki masa berlaku tertentu dan akan hangus</strong> jika tidak digunakan dalam waktu tersebut. </li><li> VENTENY berhak <strong>mengubah, menunda, atau menghentikan fitur Transaction Rewards kapan saja,</strong> dengan atau tanpa pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah diumumkan melalui aplikasi atau media komunikasi resmi VENTENY. </li></ol></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tnc/transaction-reward.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transactionReward = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { transactionReward as default };
//# sourceMappingURL=transaction-reward-CuB2TULL.mjs.map
