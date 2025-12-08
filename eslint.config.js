import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      js,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // React modernit käytännöt
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // Yleinen kehitys
      'no-unused-vars': 'warn',

      // Prettier ESLintin kautta
      'prettier/prettier': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
