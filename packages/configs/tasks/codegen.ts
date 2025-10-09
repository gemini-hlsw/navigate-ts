import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';
import type { CodegenConfig } from '@graphql-codegen/cli';

import { fixResolversContent, fixTypesContent } from './fix-generated.js';

export default {
  overwrite: true,
  schema: './src/graphql/schema/*.graphql',
  hooks: {
    beforeOneFileWrite: (filename: string, content: string) => {
      if (filename.endsWith('types.generated.ts')) {
        return fixTypesContent(content);
      } else if (filename.endsWith('resolvers.generated.ts')) {
        return fixResolversContent(content);
      }
    },
  },
  generates: {
    'src/graphql/gen': defineConfig({
      typesPluginsConfig: {
        contextType: '../../server.js#GraphQLContext',
        enumsAsTypes: true,
        immutableTypes: true,
        strictScalars: true,
        inputMaybeValue: 'T | undefined',
        skipTypename: true,
        useTypeImports: true,
      },
      resolverGeneration: 'minimal',
      resolverRelativeTargetDir: '../resolvers',
      emitLegacyCommonJSImports: false,
      scalarsOverrides: {
        PosInt: {
          resolver: '../resolvers/Scalars.ts.ts#PosIntResolver',
          type: 'number',
        },
        AttachmentId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#AttachmentIdResolver' },
        CallForProposalsId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#CallForProposalsIdResolver' },
        DatasetId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#DatasetIdResolver' },
        ExecutionEventId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#ExecutionEventIdResolver' },
        GroupId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#GroupIdResolver' },
        ObservationId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#ObservationIdResolver' },
        ProgramId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#ProgramIdResolver' },
        ProgramNoteId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#ProgramNoteIdResolver' },
        ProgramUserId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#ProgramUserIdResolver' },
        StandardRoleId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#StandardRoleIdResolver' },
        TargetId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#TargetIdResolver' },
        UserId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#UserIdResolver' },
        VisitId: { type: 'string', resolver: '../resolvers/Scalars.ts.ts#VisitIdResolver' },
      },
    }),
  },
} satisfies CodegenConfig;
