// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    // Bun 1.4 closes Miniflare's inspector HTTP server before dispose(),
    // which crashes workerd prerender teardown with "Server is not running."
    prerenderEnvironment: 'node',
  })
});
