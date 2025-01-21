// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://hieunhan.vercel.app',
  integrations: [icon(), mdx(), react(), tailwind({ applyBaseStyles: false })],
  adapter: vercel()
});
