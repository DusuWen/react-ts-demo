import { defineConfig } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { EsLinter, linterPlugin } from 'vite-plugin-linter';
import reactJsx from 'vite-react-jsx';

export default defineConfig((configEnv) => {
  return {
    base: '',
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    plugins: [
      reactJsx()
    ],
    build: {
      lib: {
        entry: './src/standalone.tsx',
        name: 'renderReact',
        fileName: 'render-react'
      }
    }
  };
});
