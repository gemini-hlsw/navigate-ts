import type { DocumentNode, OperationVariables, QueryHookOptions } from '@apollo/client';
import type { MockedResponse } from '@apollo/client/testing';
import type { ResultOf, VariablesOf } from '@graphql-typed-document-node/core';

import type { TargetType } from '@/types';

/**
 * Options for useQuery hook.
 */
export type OptionsOf<T extends DocumentNode> =
  VariablesOf<T> extends OperationVariables ? Omit<QueryHookOptions<ResultOf<T>, VariablesOf<T>>, 'context'> : never;

export function isBaseTarget(target: Pick<TargetType, 'type'>) {
  return ['SCIENCE', 'BLINDOFFSET', 'FIXED'].includes(target.type);
}
export function isOiTarget(target: Pick<TargetType, 'type'>) {
  return target.type === 'OIWFS';
}
export function isP1Target(target: Pick<TargetType, 'type'>) {
  return target.type === 'PWFS1';
}
export function isP2Target(target: Pick<TargetType, 'type'>) {
  return target.type === 'PWFS2';
}

export type MockedResponseOf<T extends DocumentNode> = MockedResponse<ResultOf<T>, VariablesOf<T>>;
