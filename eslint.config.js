import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    files: ['src/ts/**/*.{ts,tsx}', 'src/admints/**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        alert: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
        Cache: 'readonly',
        CacheStorage: 'readonly',
        caches: 'readonly',
        self: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        global: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // ESLint base rules
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-unused-vars': 'off', // Use TypeScript version instead
      
      // TypeScript rules (relaxed for legacy codebase)
      '@typescript-eslint/no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrors: 'none',
        ignoreRestSiblings: true 
      }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // Allow any during migration
      
      // React rules
      'react/prop-types': 'off', // TypeScript handles prop validation
      'react/jsx-uses-react': 'off', // Not needed with new JSX transform
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/jsx-uses-vars': 'error',
      'react/display-name': 'off',
      
      // React Hooks rules (relaxed)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off', // Too noisy during migration
      
      // Style preferences
      'camelcase': 'off',
    },
  },
  {
    // Configuration for other TypeScript/JavaScript files without TypeScript project
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['src/ts/**/*.{ts,tsx}', 'src/admints/**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        // No project reference for files outside main TypeScript project
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        alert: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
        Cache: 'readonly',
        CacheStorage: 'readonly',
        caches: 'readonly',
        self: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        global: 'readonly',
      },
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // ESLint base rules
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-unused-vars': 'off', // Disabled for legacy codebase
      
      // React rules
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      'react/display-name': 'off',
      
      // React Hooks rules (relaxed)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off', // Too noisy during migration
      
      // Style preferences
      'camelcase': 'off',
    },
  },
  {
    // Ignore patterns
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'public/**',
      '**/*.d.ts',
    ],
  },
];