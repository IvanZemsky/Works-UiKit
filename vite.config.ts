import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts';
import path from "path"

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      dts({
         rollupTypes: true,
         tsconfigPath: "./tsconfig.app.json",
      }),
   ],
   build: {
      lib: {
         entry: path.resolve(__dirname, "src/index.ts"),
         name: "work-ui",
         fileName: (format) => `work-ui.${format}.js`,
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
