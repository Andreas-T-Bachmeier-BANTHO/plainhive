// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On CI for GitHub Pages, GITHUB_REPOSITORY is "owner/repo"
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isCI = process.env.GITHUB_ACTIONS === 'true'

// Use "/<repo>/" on Pages, "/" locally
const base = isCI && repo ? `/${repo}/` : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
