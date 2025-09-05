// @ts-check

import { defineConfig } from 'eslint/config';
import globals from 'globals';

import shared from '../../eslint.config.shared.js';

export default defineConfig(...shared, {
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
});
