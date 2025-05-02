// @ts-check

import globals from 'globals';
import { config } from 'typescript-eslint';

import shared from '../../eslint.config.shared.js';

export default config(...shared, {
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
});
