import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// User site: repo must be named rizkidwi07.github.io (no `base` needed).
export default defineConfig({
  site: 'https://rizkidwi07.github.io',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
