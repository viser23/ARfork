import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'
import path from 'path'
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: { https: true },
  // plugins: [react()],
  plugins: [react(),  mkcert()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`, // toglie codici random
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        // manualChunks: {
        //   three: ['three'], // esporta a parte
        // },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      // "@elements":  path.resolve(__dirname, './src/ui/elements'),
      // "@templates":  path.resolve(__dirname, './src/ui/templates'),
      // "@assets":  path.resolve(__dirname, './src/assets'),
    },
  },
})
