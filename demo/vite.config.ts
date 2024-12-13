import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [nodePolyfills(), react()],
  build: {
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        interop: 'esModule'
      }
    }
  },
  resolve: {
    alias: {
      "tsup-lib-vite-demo-example": path.resolve(__dirname, "../src"),
    },
  },
  server: {
    fs: {
      strict: false,
      allow: [".."],
    },
  },
});
