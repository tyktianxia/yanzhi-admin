import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const { resolve } = require("path"); // 必须要引入resolve

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      vue: "vue/dist/vue.esm-bundler.js", // 定义vue的别名，如果使用其他的插件，可能会用到别名
    },
  },
  server: {
    port: 7777, // 端口号
    // https: true, // https:{type:Boolean}
    open: false,
    proxy: {
      // '/api': {
      //   target: url,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/api": "",
      //   },
      // }
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 将大块分解为小块
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
  },
});
