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
      globals: {
        ...globals.node,
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

      eqeqeq: 'error',
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
  },
  {
    // Test-specific rules
    files: ['src/integration/**/*.ts', 'src/**/*.test.ts', 'src/**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    files: ['*.js', '*.config.{js,ts}', 'tasks/**/*.{js,ts}', '.husky/**/*.{js,ts}'],
    ...configs.disableTypeChecked,
  },
  {
    ignores: ['node_modules', 'dist', 'public', 'reports', 'src/graphql/gen', 'gen'],
  },
);
