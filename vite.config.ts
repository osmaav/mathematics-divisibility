// vite.config.ts
// Version: 1.1.0 (2026-10-09)
// Комментарий к изменениям: версия конфига синхронизирована с версией пакета;
// сборка в ./docs используется workflow .github/workflows/deploy.yml для GitHub Pages.
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // 👇 Абсолютный путь с именем репозитория — обязательно для GitHub Pages
  base: '/mathematics-divisibility/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types')
    },
  },

  css: {
    postcss: './postcss.config.js',
  }
});
