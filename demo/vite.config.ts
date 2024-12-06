import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'tsup-lib-vite-demo-example': path.resolve(__dirname, '../src')
    }
  },
  server: {
    fs: {
      strict: false,
      allow: ['..'] // Allow access to the parent directory
    }
  }
});
