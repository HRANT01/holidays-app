// eslint.config.js
import { defineConfig } from 'eslint-define-config';
import vue from 'eslint-plugin-vue';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  // Base configuration
  defineConfig({
    languageOptions: {
      parser: typescriptParser, // Set the parser directly here
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        // Add any global variables here
        // Example: myGlobal: 'readonly',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      // Add other custom rules here
    },
  }),

  // Vue-specific configuration
  defineConfig({
    files: ['*.vue'],
    languageOptions: {
      parser: 'vue-eslint-parser', // This should remain a string
    },
    rules: {
      // Add your specific Vue rules here
    },
  }),

  // TypeScript-specific configuration
  defineConfig({
    files: ['*.ts'],
    languageOptions: {
      parser: typescriptParser, // Set the parser directly here
    },
    rules: {
      // Add your specific TypeScript rules here
    },
  }),

  // Prettier configuration
  defineConfig({
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  }),
];
