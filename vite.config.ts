import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or '@vitejs/plugin-vue' depending on what you use. If you don't use React/Vue, you can remove this line.

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WeKongsi/',
  plugins: [react()], // If you don't use React, change this to just: plugins: []
})
