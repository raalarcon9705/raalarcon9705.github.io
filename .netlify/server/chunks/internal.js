import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./index.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `



${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="favicon.ico" type="image/x-icon">\n		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">\n		<meta charset="UTF-8" />\n		<meta http-equiv="X-UA-Compatible" content="IE=edge" />\n		<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n		<title>Reynier Rivero, Web Developer</title>\n		<meta name="title" content="Reynier Rivero, Web developer" />\n		<meta\n			name="description"\n			content="Senior Frontend Developer with 7+ years of experience building scalable web applications and intuitive user interfaces. Specialized in Angular, React, and JavaScript, with solid knowledge of TypeScript, Node.js, and state management tools like NgRx, Redux, and Context API. Experienced in translating client requirements into well-structured solutions, writing clean and maintainable code, and working directly with DOM manipulation techniques. Strong background in performance optimization, reusable component architecture, and solving algorithmic challenges. Familiar with relational databases such as PostgreSQL, and skilled at collaborating in fast-paced startup environments, mentoring junior developers, and delivering high-quality solutions for international clients."\n		/>\n		<meta\n			name="keywords"\n			content="freelance, web developer, reynier rivero, raalarcon, raalarcon9705, reynier alberto rivero alarcon, angular developer, javascript developer, react developer"\n		/>\n		<meta name="image" content="https://reynierweb.netlify.app/assets/reynier-memoji.png" />\n		<meta name="url" content="https://reynierweb.netlify.app" />\n		<link rel="canonical" href="https://reynierweb.netlify.app/" />\n\n		<meta name="twitter:card" content="summary_large_image" />\n		<meta name="twitter:site" content="Reynier Rivero, Web Developer" />\n		<meta name="twitter:type" content="article" />\n		<meta name="twitter:title" content="Reynier Rivero, Web developer" />\n		<meta\n			name="twitter:description"\n			content="Web developer with advanced skills in developing lightweight user interfaces with javascript frameworks. Expert in Angular 2+, React and Javascript based technologies like ExpressJS and NestJs."\n		/>\n		<meta\n			name="twitter:image"\n			content="https://raalarcon9705.github.io/assets/reynier-memoji.png"\n		/>\n		<meta name="twitter:url" content="https://reynierweb.netlify.app" />\n\n		<meta name="facebook-domain-verification" content="l1h26ul8hoyd1zhy8zv65hm3wy59hq" />\n\n		<meta property="og:type" content="website" />\n		<meta property="og:site_name" content="Reynier Rivero, Web Developer" />\n		<meta property="og:title" content="Reynier Rivero, Web Developer" />\n		<meta\n			property="og:description"\n			content="Web developer with advanced skills in developing lightweight user interfaces with javascript frameworks. Expert in Angular 2+, React and Javascript based technologies like ExpressJS and NestJs."\n		/>\n		<meta\n			property="og:image"\n			content="https://reynierweb.netlify.app/assets/reynier-memoji.png"\n		/>\n		<meta\n			property="og:image:secure"\n			content="https://reynierweb.netlify.app/assets/reynier-memoji.png"\n		/>\n		<meta property="og:url" content="https://reynierweb.netlify.app" />\n		<meta property="fb:app_id" content="354962231890760" />\n		<meta property="og:image:width" content="1200" />\n		<meta property="og:image:height" content="627" />\n\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "iag7yy"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
