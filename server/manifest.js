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
		client: {"start":"_app/immutable/entry/start.0f119a81.js","app":"_app/immutable/entry/app.d59bba7a.js","imports":["_app/immutable/entry/start.0f119a81.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.9332d6ef.js","_app/immutable/chunks/paths.b588f51c.js","_app/immutable/entry/app.d59bba7a.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c9ad2b38.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-37c93da0.js')),
			__memo(() => import('./chunks/1-45f4ecb6.js'))
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
