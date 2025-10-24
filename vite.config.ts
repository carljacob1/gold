import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { syncApiPlugin } from './vite-sync-plugin.js'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Only use sync plugin in development
    process.env.NODE_ENV === 'development' ? syncApiPlugin() : null
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8080,
    host: true, // Allow external connections
    cors: true
  }
})