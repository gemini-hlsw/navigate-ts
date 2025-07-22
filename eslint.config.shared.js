// @ts-check

import eslint from '@eslint/js';
import { flatConfigs } from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { config, configs } from 'typescript-eslint';

export default config(
  eslint.configs.recommended,
  ...configs.recommendedTypeChecked,
  ...configs.stylisticTypeChecked,
  flatConfigs.recommended,
  flatConfigs.typescript,
  {
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

      'import-x/newline-after-import': 'error',
      'import-x/no-deprecated': 'error',

      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

      // Allow passing `() => Promise<void>` to a React prop that expects `() => void`. Mostly for Primereact
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],

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
    files: ['*.js', '*.config.{js,ts}', 'tasks/*.{js,ts}', '.husky/**/*.{js,ts}'],
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
    ignores: ['node_modules', 'dist', 'public', 'reports', 'src/gql/*/gen/*.ts', 'src/graphql/gen', 'gen', 'target'],
  },
);
