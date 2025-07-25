import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  server: {
    port: 5173,
    host: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    devSourcemap: true
  }
})