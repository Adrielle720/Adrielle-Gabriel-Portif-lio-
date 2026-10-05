import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // No GitHub Pages o site fica em /<nome-do-repo>/; o workflow define BASE_PATH.
  base: process.env.BASE_PATH ?? '/',
})
