import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base to ensure it works on GitHub Pages subfolders
  base: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})