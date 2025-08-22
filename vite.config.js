import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
  port: 5000,
  host: true,
  cors: {
    origin: [
      'https://houseofspecials.in', 
      'https://www.houseofspecials.in', 
      'http://localhost'
    ],
  },
  strictPort: true
}

})
