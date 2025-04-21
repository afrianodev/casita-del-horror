import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '98c1-187-251-246-29.ngrok-free.app',  // Your ngrok URL
      'localhost',                           // You can keep localhost for local development
      '127.0.0.1'                            // Keep this as well for local dev
    ]
  }
  
})
