import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Determine base URL:
    // - Use process.env.BASE_URL if set (e.g. GitHub Actions workflow sets BASE_URL: /homepage/)
    // - In production build mode without explicit env var, default to '/homepage/' for GitHub Pages
    // - In dev / preview mode, default to '/' for local server (http://localhost:3000)
    const base = process.env.BASE_URL !== undefined
      ? process.env.BASE_URL
      : (command === 'build' ? '/homepage/' : '/');

    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: true,
      },
      plugins: [react(), tailwindcss()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
