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
          entryFileNames: 'server.js',
          format: 'cjs'
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
          app: resolve(__dirname, 'src/ts/index.tsx'),
          admin: resolve(__dirname, 'src/admints/index.tsx')
        },
        output: {
          dir: 'public/js',
          entryFileNames: '[name].js',
          chunkFileNames: '[name]-[hash].js'
        }
      }
    },

    // Copy static files during build
    publicDir: isServer ? false : resolve(__dirname, 'src/static'),

    // Development server configuration
    server: {
      port: 3000,
      host: true
    },

    // Define environment variables
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode)
    },

    // SSR specific configuration
    ssr: isServer ? {
      noExternal: []
    } : undefined,
  };
});