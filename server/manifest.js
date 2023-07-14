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
		client: {"start":"_app/immutable/entry/start.acd27cab.js","app":"_app/immutable/entry/app.d4362b31.js","imports":["_app/immutable/entry/start.acd27cab.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.41a9d029.js","_app/immutable/chunks/paths.7ecbba1b.js","_app/immutable/entry/app.d4362b31.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c9ad2b38.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-e76cdb33.js')),
			__memo(() => import('./chunks/1-36c83219.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/Portfolio_SvelteKit/","/Portfolio_SvelteKit/comic/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
