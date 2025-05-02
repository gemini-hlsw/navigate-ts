// @ts-check

import { flatConfigs } from 'eslint-plugin-import-x';
import reactPlugin from 'eslint-plugin-react';
import * as reactHooks from 'eslint-plugin-react-hooks';
import { config } from 'typescript-eslint';

import shared from '../../eslint.config.shared.js';

export default config(
  ...shared,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  flatConfigs.react,
  reactHooks.configs['recommended-latest'],
  {
    settings: {
      react: { version: 'detect' },
    },
  },
);
