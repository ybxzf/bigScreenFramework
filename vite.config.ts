import { fileURLToPath, URL } from "node:url";
import pxtorem from "postcss-pxtorem";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      "/api": "http://47.108.165.207:20088/ ",
      "/alm_framework": {
        target: "http://47.108.165.207:20088/api",
        timeout: 20 * 60 * 1000,
        changeOrigin: true,
      },
    },
  },
  base: '/sim-dashboard/',
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 16, // 指定根元素的字体大小（一般是设计稿宽度的1/10，但设置为16px更方便我自己）
          propList: ["*"], // 对所有属性进行转换，不进行白名单过滤，如果指定列表，则只对其进行转换
          // selectorBlackList: ['.no-rem', /^.van-/] // 过滤掉开头是 .no-rem 的class，或者包含 .van- 的class
          selectorBlackList: [".no-rem"], // 页面中不需要进行rem转换的元素，加个no-rem的classname就行
        }),
      ],
    },
  },
  build: {
    outDir: 'sim-dashboard' // 设置打包文件夹的名称为'sim-dashboard'
  },
});
