import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { jwtDecode } from 'jwt-decode';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-BhCRBuXq.mjs';
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

const _sfc_main$1 = {
  name: "Footer",
  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky-container" }, _attrs))} data-v-fa23a01b><div class="relative" data-v-fa23a01b><button class="send-btn w-full rounded-lg font-semibold text-sm text-white p-4 bg-primary" data-v-fa23a01b> Lanjutkan </button></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fa23a01b"]]);
const _sfc_main = {
  components: {
    Footer: __nuxt_component_0
  },
  data() {
    return {
      isFlutterInAppWebViewReady: false,
      // new
      decodedToken: {},
      jwtToken: this.$route.query.token
    };
  },
  beforeMount() {
    this.isFlutterInAppWebViewReady = true;
  },
  methods: {
    submit() {
      if (this.isFlutterInAppWebViewReady) {
        (void 0).flutter_inappwebview.callHandler(
          "onPdpAccept"
        );
      }
      console.log("onPdpAccept");
    },
    decodeToken() {
      try {
        console.log("Token:", typeof this.jwtToken);
        this.decodedToken = jwtDecode(this.jwtToken);
        console.log("Decoded Token:", this.decodedToken);
      } catch (error) {
        console.error("Error decoding JWT:", error);
      }
    }
  },
  async mounted() {
    this.decodeToken();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Footer = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-ca2d0c1b><div class="content" data-v-ca2d0c1b><div class="centered-content" data-v-ca2d0c1b><br data-v-ca2d0c1b><span class="custom-number" style="${ssrRenderStyle({ "margin": "0 16px" })}" align="right" data-v-ca2d0c1b>${ssrInterpolate($data.decodedToken.name)}</span></div><div data-v-ca2d0c1b><div class="centered-content" style="${ssrRenderStyle({ "margin-top": "-45px" })}" data-v-ca2d0c1b><img${ssrRenderAttr("src", _imports_0)} alt="icon" style="${ssrRenderStyle({ "width": "169.14px", "height": "150px", "margin": "70px 0 -50px 20px" })}" data-v-ca2d0c1b><br data-v-ca2d0c1b><br data-v-ca2d0c1b><br data-v-ca2d0c1b><span class="custom-text-center" data-v-ca2d0c1b>${ssrInterpolate($data.decodedToken.description)}</span><br data-v-ca2d0c1b><br data-v-ca2d0c1b><br data-v-ca2d0c1b></div><div style="${ssrRenderStyle({ "margin": "-50px 16px -17px", "margin-left": "10px", "margin-right": "10px" })}" data-v-ca2d0c1b><div class="flex flex-col gap-4" data-v-ca2d0c1b><div class="border-gray-500 flex flex-col gap-4 justify-between" data-v-ca2d0c1b><div class="alert w-full p-2 mb-4 w-96 h-10 text-sm rounded-lg bg-top flex justify-between items-center" data-v-ca2d0c1b><img${ssrRenderAttr("src", _imports_1)} alt="icon" style="${ssrRenderStyle({ "width": "101px", "height": "16px", "margin": "2px 10px 0 0" })}" data-v-ca2d0c1b><span class="text-top-day" style="${ssrRenderStyle({ "font-size": "12px", "font-weight": "700", "line-height": "16px", "padding-right": "10px" })}" data-v-ca2d0c1b>${ssrInterpolate($data.decodedToken.efective_date)}</span></div></div></div></div></div><br data-v-ca2d0c1b><br data-v-ca2d0c1b><div class="text-pdp flex flex-col gap-2" style="${ssrRenderStyle({ "margin-top": "10px", "margin-left": "10px", "margin-right": "10px" })}" data-v-ca2d0c1b><div data-v-ca2d0c1b>${(_a = $data.decodedToken.content) != null ? _a : ""}</div></div></div>`);
  _push(ssrRenderComponent(_component_Footer, {
    class: "footer",
    onSubmit: $options.submit
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pdp/legal-agreement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const legalAgreement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ca2d0c1b"]]);

export { legalAgreement as default };
//# sourceMappingURL=legal-agreement-he0Znj3W.mjs.map
