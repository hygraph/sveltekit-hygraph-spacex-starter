import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    prerender: {
      crawl: true,
      enabled: true,
      onError: 'continue',
      pages: ['*'],
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
