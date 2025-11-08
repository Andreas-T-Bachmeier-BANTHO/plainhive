import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use relative asset URLs so the site renders whether it is served from the
  // repository subdirectory (e.g. username.github.io/project/) or from a
  // custom domain at the root.
  base: './',
  plugins: [react()],
});
