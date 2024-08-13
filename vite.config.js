import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // other plugins if needed
  ],
  server: {
    port: 3000, // customize the port
    open: true, // open the browser when Vite starts
  },
  build: {
    outDir: 'dist', // specify the output directory
    minify: true, // minify the output (default is true in production)
    sourcemap: true, // generate source maps
    // other build options
  },
});
