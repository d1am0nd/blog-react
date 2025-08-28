import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
import { builtinModules } from 'node:module';

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  const isServer = process.env.VITE_BUILD_TARGET === 'server';

  return {
    plugins: [
      react()
    ],
    
    resolve: {
      alias: {
        config: resolve(__dirname, 'config'),
        admin: resolve(__dirname, 'src', 'admin'),
        '@': resolve(__dirname, 'src', 'js'),
        '~': resolve(__dirname, 'src/ts'),
      }
    },

    build: {
      ssr: isServer,
      rollupOptions: isServer ? {
        // Server-side build configuration
        input: resolve(__dirname, 'node/server.tsx'),
        output: {
          dir: '.',
          entryFileNames: 'server.cjs',
          format: 'cjs',
          exports: 'named',
          interop: 'auto'
        },
        external: [
          ...builtinModules,
          ...builtinModules.map(m => `node:${m}`),
          'express',
          'mysql',
          'sitemap',
          /node_modules/
        ]
      } : {
        // Client-side build configuration  
        input: {
          main: resolve(__dirname, 'src/ts/index.tsx'),
          admin: resolve(__dirname, 'admin.html')
        },
        output: {
          dir: 'public/dist',
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name]-[hash].js'
        }
      }
    },

    // Copy static files during build
    publicDir: isServer ? false : resolve(__dirname, 'src/static'),

    // Development server configuration
    server: {
      port: 3001,
      host: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
        '/uploads': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        }
      }
    },

    // Define environment variables
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode)
    },

    // SSR specific configuration
    ssr: isServer ? {
      noExternal: ['styled-components']
    } : undefined,
  };
});