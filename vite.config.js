import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Served from XAMPP at http://localhost/Chon/dist/ after `npm run build`.
  base: './',
  build: { outDir: 'dist' }
});
