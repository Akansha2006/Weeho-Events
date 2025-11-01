<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
=======
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Redirect direct calls to react/cjs/react.production.min.js -> react package entry (ESM)
      {
        find: /^react\/cjs\/react\.production\.min\.js$/,
        replacement: path.resolve(__dirname, 'node_modules/react/index.js')
      },
      // react-dom internal CJS -> react-dom package
      {
        find: /^react-dom\/cjs\/.*/,
        replacement: path.resolve(__dirname, 'node_modules/react-dom/index.js')
      },
      // Ensure imports of 'react' and 'react-dom' resolve to node_modules versions
      { find: 'react', replacement: path.resolve(__dirname, 'node_modules/react') },
      { find: 'react-dom', replacement: path.resolve(__dirname, 'node_modules/react-dom') },
    ]
  },
  optimizeDeps: {
    // avoid Vite trying to pre-bundle react incorrectly
    exclude: ['react', 'react-dom'],
  },
  build: {
    outDir: 'dist',
  }
})
>>>>>>> parent of 55b45df (Revert "update")
