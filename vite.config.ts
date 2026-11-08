import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Determine base URL:
    // - During development and Google AI Studio preview: '/'
    // - During build for GitHub Pages repo 'homepage': '/homepage/' (or process.env.BASE_URL if provided)
    const isProduction = mode === 'production' || command === 'build';
    const base = isProduction ? (process.env.BASE_URL || '/homepage/') : '/';

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
