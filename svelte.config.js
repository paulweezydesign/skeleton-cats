import adapter from '@sveltejs/adapter-netlify';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            edge: true,
            split: true
        })
    },
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
    vitePlugin: {
        experimental: {
            inspector: {
                holdMode: true,
            }
        }
    }

};

export default config;