import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { readFileSync } from 'fs'
import vue from '@vitejs/plugin-vue'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version)
  },

  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://10.50.5.7:8000',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://10.50.5.7:8000',
        changeOrigin: true
      }
    }
  },

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  assetsInclude: ['**/*.svg']
})

/*
{
  "version": "1.0.0"   ← patch (багфикс)
  "version": "1.1.0"   ← minor (новая фича)
  "version": "2.0.0"   ← major (большие изменения)
}

npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0
*/