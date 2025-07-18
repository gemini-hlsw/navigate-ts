import type { CodegenConfig } from '@graphql-codegen/cli';
import { dirname, join } from 'path';

// Simple mapping of scalar types to their TypeScript representation
// Some of these might be wrong or incomplete, feel free to adjust as needed
/*eslint sort-keys: "error"*/
const scalars = {
  AtomId: 'string',
  AttachmentId: 'string',
  BigDecimal: 'string|number',
  CallForProposalsId: 'string',
  ChronicleId: 'string',
  ConfigurationRequestId: 'string',
  DatasetFilename: 'string',
  DatasetId: 'string',
  DatasetReferenceLabel: 'string',
  Date: 'string',
  DateTime: 'string',
  DmsString: 'string',
  EmailAddress: 'string',
  EpochString: 'string',
  ExecutionEventId: 'string',
  Extinction: 'number',
  GroupId: 'string',
  HmsString: 'string',
  IntPercent: 'number',
  Long: 'number',
  NonEmptyString: 'string',
  NonNegBigDecimal: 'number',
  NonNegInt: 'number',
  NonNegLong: 'number',
  NonNegShort: 'number',
  ObsAttachmentId: 'string',
  ObservationId: 'string',
  ObservationReferenceLabel: 'string',
  PosBigDecimal: 'number',
  PosInt: 'number',
  PosLong: 'number',
  PosShort: 'number',
  ProgramId: 'number',
  ProgramReferenceLabel: 'string',
  ProgramUserId: 'string',
  ProposalReferenceLabel: 'string',
  Semester: "`${number}${number}${number}${number}${'A' | 'B'}`",
  SignalToNoise: 'number',
  StepId: 'string',
  TargetId: 'string',
  Timestamp: 'string',
  TransactionId: 'string',
  UserId: 'string',
  UserInvitationId: 'string',
  UserInvitationKey: 'string',
  VisitId: 'string',
};
/*eslint-disable sort-keys*/

const sharedConfig = {
  scalars,
  // Generate union types (`'foo' | 'bar'`) for enums instead of non-standard typescript enums
  enumsAsTypes: true,
  useTypeImports: true,
  skipTypename: true,
};

export default {
  generates: {
    './src/gql/odb/gen/': {
      schema: require.resolve('lucuma-schemas/odb'),
      documents: './src/gql/odb/*.{ts,tsx}',
      config: sharedConfig,
      preset: 'client',
    },
    './src/gql/server/gen/': {
      schema: require.resolve('navigate-server-schema/navigate.graphql'),
      documents: './src/gql/server/*.{ts,tsx}',
      config: sharedConfig,
      preset: 'client',
    },
    './src/gql/configs/gen/': {
      schema: join(dirname(require.resolve('navigate-schema')), 'src/**/*.graphql'),
      config: sharedConfig,
      documents: './src/gql/configs/*.{ts,tsx}',
      preset: 'client',
    },
  },
} satisfies CodegenConfig;
