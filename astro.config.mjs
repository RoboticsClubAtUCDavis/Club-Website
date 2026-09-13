import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://RoboticsClubAtUCDavis.github.io',
  base: '/Club-Website/',
  output: 'static',
  integrations: [sitemap()],
});
