import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [sveltePreprocess(), importAssets()],
	kit: {
		adapter: adapter()
	}
};

export default config;
