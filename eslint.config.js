// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // Общие правила для всего проекта
  {
    ignores: ['**/dist/**', '**/node_modules/**']
  },

  // Конфиг для JavaScript (frontend)
  {
    files: ['frontend/**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ChatAuth: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
    }
  },

  // Конфиг для TypeScript (backend)
  ...tseslint.configs.recommended,
  {
    files: ['backend/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './backend/tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    }
  }
];