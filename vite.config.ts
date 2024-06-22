import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/person-portfolio',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src/') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@data', replacement: path.resolve(__dirname, 'src/__data__') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@styles', replacement: path.relative(__dirname, 'src/styles') },
    ],
  },
});
