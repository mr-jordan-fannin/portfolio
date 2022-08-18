import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$routes: './src/routes',
			$facemaker_classes: './src/projects/facemaker/classes',
			$facemaker_components: './src/projects/facemaker/components',
			$facemaker_stores: './src/projects/facemaker/stores',
			$facemaker_utils: './src/projects/facemaker/utils'
		}
	}
};

export default config;
