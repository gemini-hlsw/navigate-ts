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
          PosInt: 'number',

          AttachmentId: 'string',
          CallForProposalsId: 'string',
          DatasetId: 'string',
          ExecutionEventId: 'string',
          GroupId: 'string',
          ObservationId: 'string',
          ProgramId: 'string',
          ProgramNoteId: 'string',
          ProgramUserId: 'string',
          StandardRoleId: 'string',
          TargetId: 'string',
          UserId: 'string',
          VisitId: 'string',
        },
      },
    },
  },
} satisfies CodegenConfig;
