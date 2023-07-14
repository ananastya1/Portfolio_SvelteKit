const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Portfolio_SvelteKit/_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.64b1a574.js","app":"_app/immutable/entry/app.9409c8a6.js","imports":["_app/immutable/entry/start.64b1a574.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.61c80ce3.js","_app/immutable/chunks/paths.9cde0ed3.js","_app/immutable/entry/app.9409c8a6.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c9ad2b38.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-0d18936e.js')),
			__memo(() => import('./chunks/1-a1877a7d.js')),
			__memo(() => import('./chunks/2-0486b713.js')),
			__memo(() => import('./chunks/3-c31425ad.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/comic",
				pattern: /^\/comic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
