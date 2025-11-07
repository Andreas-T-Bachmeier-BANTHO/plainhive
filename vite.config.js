import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rawBase = process.env.VITE_BASE_URL;
const normalizedBase = (() => {
  if (!rawBase) {
    return '/';
  }

  const trimmed = rawBase.trim();
  if (!trimmed) {
    return '/';
  }

  const withLeading = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
})();

export default defineConfig({
  base: './',
  plugins: [react()],
});
