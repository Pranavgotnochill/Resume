import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    cors: true,
    hmr: {
      clientPort: 443,
      host: 'resume-r2ro.onrender.com',
      protocol: 'wss'
    }
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
})
