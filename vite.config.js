// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On CI for GitHub Pages, GITHUB_REPOSITORY is "owner/repo"
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isCI = process.env.GITHUB_ACTIONS === 'true'

// Prefer explicit VITE_BASE (set in CI), otherwise fallback to repo-based detection
const explicitBase = process.env.VITE_BASE

// Use "/<repo>/" on Pages, "/" locally if no override provided
const base = explicitBase ?? (isCI && repo ? `/${repo}/` : '/')

export default defineConfig({
  plugins: [react()],
  base,
})
