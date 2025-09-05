// @ts-check

import eslint from '@eslint/js';
import { importX } from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { configs } from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  eslint.configs.recommended,
  ...configs.stylisticTypeChecked,
  ...configs.strictTypeChecked,
  // @ts-expect-error - incorrect type
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowBoolean: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],
      '@typescript-eslint/no-unnecessary-condition': 'off',

      // Allow passing `() => Promise<void>` to a React prop that expects `() => void`. Mostly for Primereact
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
  {
    rules: {
      'import-x/newline-after-import': 'error',

      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

      eqeqeq: 'error',
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
  },
  {
    // Test-specific rules
    files: ['src/integration/**/*.ts', 'src/**/*.{spec,test}.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    files: ['*.js', '*.config.{js,ts}', 'tasks/*.{js,ts}', '.husky/**/*.{js,ts}', 'src/**/*.graphql'],
    ...configs.disableTypeChecked,
  },
  {
    files: ['*.js', '*.config.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['node_modules', 'dist', 'public', 'reports', 'src/gql/*/gen', 'src/*/gen', 'target'],
  },
);
