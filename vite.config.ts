import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemapPlugin from 'vite-plugin-sitemap';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://eshanized.github.io/resume', // Your website's base URL
      exclude: ['/404'], // Pages to exclude from the sitemap
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'public/robots.txt', // Copy the robots.txt from your public folder
          dest: './',
        },
      ],
    }),
  ],
  base: '/resume/', // Base path for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react from pre-bundling
  },
});
