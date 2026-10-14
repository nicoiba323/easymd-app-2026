import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas: funciona en la raíz de un dominio y en GitHub Pages (/easymd-app-2026/).
  base: './',
  plugins: [react()],
})
