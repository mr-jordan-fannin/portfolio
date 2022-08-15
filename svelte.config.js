import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	alias: {
		$components: './src/components',
		$routes: './src/routes',
		$stores: './src/stores',
		$utils: './src/utils'
	}
};

export default config;
