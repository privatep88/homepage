import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Determine base URL:
    // - During development and Google AI Studio preview: '/'
    // - During CI/CD build for GitHub Pages repo 'homepage': '/homepage/'
    // - If explicit BASE_URL is set, respect its exact value
    let base = '/';
    if (process.env.BASE_URL) {
      base = process.env.BASE_URL;
    } else if (process.env.GITHUB_ACTIONS === 'true') {
      base = '/homepage/';
    } else {
      base = '/';
    }

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
