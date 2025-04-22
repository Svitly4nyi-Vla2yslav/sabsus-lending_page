import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    proxy: {
      "/firebase": {
        target: "https://firebasestorage.googleapis.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/firebase/, ""),
      },
    },
  },
  base: '/.',
  plugins: [react(), VitePWA()],
});