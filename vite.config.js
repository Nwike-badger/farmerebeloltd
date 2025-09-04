import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: '/', // ✅ always root now
    server: {
      historyApiFallback: true, // so refresh works
    },
    appType: 'spa', // ensures SPA routing
  }
})
