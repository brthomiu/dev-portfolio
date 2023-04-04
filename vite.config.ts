import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dev-portfolio',
  build: {
    outDir: '../2023portfoliots/docs'
  }
})
