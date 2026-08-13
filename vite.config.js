import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Forwards /api requests to the Express server in /server during local dev.
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})
