import { c as create_ssr_component, e as escape } from './ssr-bcb86966.js';
import { b as base } from './paths-1d646bab.js';

const css = {
  code: "header.svelte-fpbqft.svelte-fpbqft{height:53px;line-height:53px;font-family:Opensans, sans-serif;background-color:white;color:black;text-align:center;padding:0;margin:0}header.svelte-fpbqft a.svelte-fpbqft{color:black}header.svelte-fpbqft a.svelte-fpbqft:hover{color:gray}footer.svelte-fpbqft.svelte-fpbqft{height:53px;line-height:53px;font-family:Opensans, sans-serif;background-color:white;color:black;text-align:center;padding:0;margin:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-fpbqft"><nav><a href="${escape(base, true) + "/"}" class="svelte-fpbqft">Home</a> <a href="${escape(base, true) + "/comic"}" class="svelte-fpbqft">Comic</a></nav></header> <main>${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-fpbqft" data-svelte-h="svelte-3ehzi1"><p>© 2023 Anastasia Barabanova. All rights reserved.</p> </footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-67ec590a.js.map
