import { defineConfig } from 'vite';
import swc from 'unplugin-swc'

export default defineConfig({
  esbuild: false,
  optimizeDeps: {
    exclude: ['solid-js']
  },
  plugins: [
    swc.vite()
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
});
