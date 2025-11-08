// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Auto-detect base for GitHub Pages project pages.
// If it's an org/user site (<owner>.github.io) => "/", else => "/<repo>/"
function computeAutoBase() {
  const repoFull = process.env.GITHUB_REPOSITORY || ''
  const [owner, repo] = repoFull.split('/')
  if (!process.env.GITHUB_ACTIONS || !owner || !repo) return '/'
  return repo.toLowerCase() === `${owner.toLowerCase()}.github.io` ? '/' : `/${repo}/`
}

export default defineConfig({
  plugins: [react()],
  // Explicit override via env if ever needed; otherwise auto-detect safely
  base: process.env.VITE_BASE || process.env.VITE_BASE_URL || computeAutoBase(),
})
