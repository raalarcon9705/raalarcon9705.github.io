import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/Reynier's Resume.pdf","assets/reynier-rivero.jpg","favicon.png"]),
	mimeTypes: {".pdf":"application/pdf",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-81e2de10.js","imports":["_app/immutable/start-81e2de10.js","_app/immutable/chunks/index-1f769502.js","_app/immutable/chunks/singletons-27551856.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
