import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    port: 4173, // or the port you use
    allowedHosts: [
      'houseofspecials.in',
    ]
  }
})