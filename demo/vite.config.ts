import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [nodePolyfills(), react()],
  resolve: {
    alias: {
      "tsup-lib-vite-demo-example": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        "vite-plugin-node-polyfills/shims/process",
      ],
    },
  },
  server: {
    fs: {
      strict: false,
      allow: [".."],
    },
  },
});
