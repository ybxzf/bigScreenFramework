import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  server: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      '/api': 'http://47.108.165.207:20088/ ',
      "/alm_framework": {
        target: "http://47.108.165.207:20088/api",
        timeout: 20 * 60 * 1000,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
