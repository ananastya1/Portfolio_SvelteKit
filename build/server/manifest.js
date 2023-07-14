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
		client: {"start":"_app/immutable/entry/start.46a0d1ed.js","app":"_app/immutable/entry/app.a5fb3579.js","imports":["_app/immutable/entry/start.46a0d1ed.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.a550c302.js","_app/immutable/chunks/paths.cda312f7.js","_app/immutable/entry/app.a5fb3579.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c9ad2b38.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-8491aec3.js')),
			__memo(() => import('./chunks/1-e8f3968e.js'))
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
