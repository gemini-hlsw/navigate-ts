import { GraphQLScalarType, Kind } from 'graphql';
import { DateTimeResolver, JSONResolver, PositiveIntResolver } from 'graphql-scalars';
import { parseObservationId, parseTargetId } from 'lucuma-core';

import type { Resolvers } from '../gen/index.js';

export const ScalarResolvers: Resolvers = {
  DateTime: DateTimeResolver,
  JSON: JSONResolver,
  PosInt: PositiveIntResolver,
  ObservationId: newObdIdGraphQLScalarType('ObservationId', 'o', parseObservationId),
  TargetId: newObdIdGraphQLScalarType('TargetId', 't', parseTargetId),
};

/**
 * Creates a new GraphQL scalar type for odb IDs.
 */
function newObdIdGraphQLScalarType(name: string, idTag: string, parser: (value: string) => string | undefined) {
  return new GraphQLScalarType<unknown, string>({
    name,
    serialize(value) {
      const parsed =
        typeof value === 'string' ? parser(value) : typeof value === 'number' ? parser(`${idTag}-${value}`) : undefined;
      if (!parsed) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`'${value}' is not a valid ${name}`);
      }
      // ...
      return parsed;
    },
    parseValue(value) {
      return this.serialize?.(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return this.serialize?.(ast.value);
      } else if (ast.kind === Kind.INT) {
        return this.serialize?.(`${idTag}-${ast.value}`);
      }

      // ...
      throw new Error(`not a valid ${name}`);
    },
  });
}
