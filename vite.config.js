import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath =
  (typeof process !== 'undefined' && process.env?.VITE_BASE_URL) ?? '/plainhive/';

export default defineConfig({
  base: basePath,
  plugins: [react()],
});
