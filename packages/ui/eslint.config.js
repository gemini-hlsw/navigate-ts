// @ts-check

import graphqlPlugin from '@graphql-eslint/eslint-plugin';
import { defineConfig } from 'eslint/config';
import { importX } from 'eslint-plugin-import-x';
import reactPlugin from 'eslint-plugin-react';
import * as reactHooks from 'eslint-plugin-react-hooks';

import shared from '../../eslint.config.shared.js';

export default defineConfig(
  ...shared,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  // @ts-expect-error - incorrect type
  importX.flatConfigs.react,
  reactHooks.configs.recommended,
  {
    settings: {
      react: { version: 'detect' },
    },
  },
  ...graphqlConfigForSchema(
    [import.meta.resolve('lucuma-schemas/odb'), import.meta.resolve('navigate-server-schema/navigate.graphql')],
    './src/gql/{server,odb}',
  ),
  // @graphql-eslint tries to merge all schemas, even if defined separately. Because some same names are used but with different types we can't enable linting for both server/odb and configs at the same time
  // ...graphqlConfigForSchema(
  //   join(dirname(import.meta.resolve('navigate-schema')), 'src/**/*.graphql'),
  //   './src/gql/configs',
  // ),
);

/**
 * Create a GraphQL ESLint config for a specific schema.
 *
 * @param {string | string[]} schema schema location
 * @param {string} base base directory for the TS files containing the GraphQL operations
 * @returns {import('typescript-eslint').ConfigWithExtends[]}
 */
function graphqlConfigForSchema(schema, base) {
  return [
    {
      files: [`${base}/*.{ts,tsx}`],
      processor: graphqlPlugin.processor,
    },
    {
      files: [`${base}/**/*.graphql`],
      languageOptions: {
        parser: graphqlPlugin.parser,
        parserOptions: {
          graphQLConfig: {
            schema,
            documents: [`${base}/**/*.{ts,tsx}`],
          },
        },
      },
      plugins: {
        '@graphql-eslint': graphqlPlugin,
      },
      rules: {
        ...graphqlPlugin.configs['flat/operations-recommended'].rules,

        '@graphql-eslint/naming-convention': ['error', { types: 'PascalCase', FieldDefinition: 'camelCase' }],
        '@graphql-eslint/require-selections': ['error', { fieldName: ['id', 'pk'] }],
      },
    },
  ];
}
