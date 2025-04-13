export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/Reynier's Resume.pdf","assets/link.svg","assets/reynier-memoji.png","assets/reynier-rivero.jpg","favicon.ico"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.e4f4b837.js","app":"_app/immutable/entry/app.674ae10a.js","imports":["_app/immutable/entry/start.e4f4b837.js","_app/immutable/chunks/index.3c0bc2f3.js","_app/immutable/chunks/singletons.bb952223.js","_app/immutable/entry/app.674ae10a.js","_app/immutable/chunks/index.3c0bc2f3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
