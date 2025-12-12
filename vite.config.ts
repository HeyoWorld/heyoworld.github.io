import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This makes sure your site works in a subfolder (like /heyoworld/)
  // and fixes the "blank page" issue caused by absolute paths.
  base: './', 
  build: {
    outDir: 'dist',
  }
})