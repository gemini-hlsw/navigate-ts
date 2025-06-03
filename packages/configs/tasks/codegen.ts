import type { CodegenConfig } from '@graphql-codegen/cli';
import { typeDefs } from 'navigate-schema';

export default {
  overwrite: true,
  schema: typeDefs,
  generates: {
    'src/graphql/gen/index.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '../../server.js#ApolloContext',
        enumsAsTypes: true,
        inputMaybeValue: 'T | undefined',
        scalars: {
          DateTime: 'Date',
        },
      },
    },
  },
} satisfies CodegenConfig;
