import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tonic-gitbubble/',
  plugins: [react()],
})

