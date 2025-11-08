// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Optional override from CI/local env (most robust)
const baseOverride = process.env.VITE_BASE

// Auto-detect for GitHub Pages project pages
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isCI = process.env.GITHUB_ACTIONS === 'true'

// Final base: explicit override > auto-detect > local default
const base = baseOverride ?? (isCI && repo ? `/${repo}/` : '/')

export default defineConfig({
  plugins: [react()],
  base,
})
