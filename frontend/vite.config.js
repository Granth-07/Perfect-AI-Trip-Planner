import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.jsx', '.js'], // Recognize these extensions
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000', // Your backend proxy
    },
  },
});
