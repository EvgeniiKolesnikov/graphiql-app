/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    // stylelint({
    //   fix: true,
    // }),
  ],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      pages: '/src/pages',
    },
  },
});
