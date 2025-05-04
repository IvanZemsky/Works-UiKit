import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import path from "path"
import { fileURLToPath } from "url"

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      dts({
         rollupTypes: true,
         tsconfigPath: "./tsconfig.app.json",
      }),
   ],
   resolve: {
      alias: {
         "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
   },
   build: {
      lib: {
         entry: path.resolve(__dirname, "src/index.ts"),
         name: "works-ui",
         fileName: (format) => `works-ui.${format}.js`,
      },
      rollupOptions: {
         external: ["vue", "vue-router"],
         output: {
            exports: "named",
            globals: {
               vue: "Vue",
               "vue-router": "VueRouter",
            },
         },
      },
   },
})
