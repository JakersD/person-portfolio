import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src/') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@widgets', replacement: path.resolve(__dirname, 'src/components/widgets') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/components/shared') },
      { find: '@data', replacement: path.resolve(__dirname, 'src/__data__') },
      { find: '@styles', replacement: path.relative(__dirname, 'src/styles') },
    ],
  },
});
