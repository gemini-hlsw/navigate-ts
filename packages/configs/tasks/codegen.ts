import type { CodegenConfig } from '@graphql-codegen/cli';
import { dirname, join } from 'path';

export default {
  overwrite: true,
  schema: join(dirname(require.resolve('navigate-schema')), 'src/**/*.graphql'),
  generates: {
    'src/graphql/gen/index.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '../../server.js#ApolloContext',
        enumsAsTypes: true,
        immutableTypes: true,
        strictScalars: true,
        inputMaybeValue: 'T | undefined',
        skipTypename: true,
        useTypeImports: true,
        scalars: {
          DateTime: 'Date',
          JSON: 'Record<string, unknown>',
        },
      },
    },
  },
} satisfies CodegenConfig;
