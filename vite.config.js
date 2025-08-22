import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    port: 5000, // or the port you use
    allowedHosts: [
      'houseofspecials.in',
      'localhost'
    ]
  }
})