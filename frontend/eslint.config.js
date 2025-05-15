import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['frontend/js/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser, // стандартные браузерные глобалы
        ChatAuth: 'readonly', // твой кастомный глобал
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
    },
  },
];
