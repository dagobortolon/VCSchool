import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';
import prerender from '@prerenderer/rollup-plugin';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';

const routesList = ['/'];

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      prerender({
        routes: routesList,
        renderer: new PuppeteerRenderer({
          renderAfterTime: 2000,
          headless: true,
        }),
        postProcess(renderedRoute) {
          if (renderedRoute.html) {
             renderedRoute.html = renderedRoute.html.replace(/data-server-rendered="true"/g, '');
          }
        },
      }),
      {
        name: 'generate-sitemap',
        closeBundle() {
          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routesList.map(route => `  <url><loc>https://vinicavalcanti.com${route}</loc></url>`).join('\n')}
</urlset>`;
          fs.writeFileSync(path.resolve(__dirname, 'dist', 'sitemap.xml'), sitemap);
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      copyPublicDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'framer-motion', 'motion'],
          }
        }
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
