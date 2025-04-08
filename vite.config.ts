import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
   base: "/Works-UiKit/",
   plugins: [vue()],
   build: {
      lib: {
         entry: path.resolve(__dirname, "src/index.ts"),
         name: "work-ui",
         fileName: (format) => `work-ui.${format}.js`,
      },
      rollupOptions: {
         external: ["vue", "vue-router"],
         output: {
            globals: {
               vue: "Vue",
               vueRouter: "VueRouter",
            },
         },
      },
   },
})
