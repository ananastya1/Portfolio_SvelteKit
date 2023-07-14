import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from './ssr-bcb86966.js';
import './index-2b68e648.js';
import { formatDistanceToNow } from 'date-fns';

const css = {
  code: "body.svelte-hs3oei{margin:0}#comic-page.svelte-hs3oei{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background-color:#4c631d}",
  map: null
};
const Comic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comicData = null } = $$props;
  if ($$props.comicData === void 0 && $$bindings.comicData && comicData !== void 0)
    $$bindings.comicData(comicData);
  $$result.css.add(css);
  return `<body class="svelte-hs3oei"><div id="comic-page" class="svelte-hs3oei">${comicData ? `<h1>${escape(comicData.safe_title)}</h1> <img${add_attribute("src", comicData.img, 0)}${add_attribute("alt", comicData.alt, 0)}> <p>${escape(new Date(comicData.year, comicData.month - 1, comicData.day).toLocaleDateString())}</p> <p>${escape(formatDistanceToNow(new Date(comicData.year, comicData.month - 1, comicData.day)))} ago</p>` : ``}</div> </body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-120fsiu_START -->${$$result.title = `<title>Comic</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-120fsiu_END -->`, ""} ${validate_component(Comic, "Comic").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-73177e0c.js.map
