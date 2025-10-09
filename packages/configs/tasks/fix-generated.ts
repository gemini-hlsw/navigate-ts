/*
Script that fixes typescript errors in generated files, until this issue is solved:
https://github.com/eddeee888/graphql-code-generator-plugins/issues/364
*/

/**
 * Prefix all imports with "type"
 * e.g.
 *
 * ```
 * import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
 * import { UserMapper } from './user/schema.mappers.js';
 * import { GraphQLContext } from '../context/GraphQLContext.ts';
 * ```
 *
 * should become
 *
 * ```
 * import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
 * import type { UserMapper } from './user/schema.mappers.js';
 * import type { GraphQLContext } from '../context/GraphQLContext.ts';
 * ```
 *
 */
export function fixTypesContent(content: string) {
  let typesContent = content;

  // Step 1: Replace imports that don't already start with "type"
  typesContent = typesContent.replace(/import\s+{([^}]*)}\s+from\s+(['"].*['"])/g, (match, importNames, source) => {
    // Check if the import statement already has "type"
    if (match.includes('import type')) {
      return match;
    }

    // Add "type" to the import statement
    return `import type {${importNames}} from ${source}`;
  });

  // Step 2: Fix duplicate "type" keywords in imports
  typesContent = typesContent.replace(
    /import\s+type\s+{([^}]*)}\s+from\s+(['"].*['"])/g,
    (match, importNames, source) => {
      // Remove individual "type" keywords from imports
      const cleanedImports = importNames.replace(/\btype\s+/g, '');

      // Return cleaned imports with a single "type" keyword at import level
      return `import type { ${cleanedImports} } from ${source}`;
    },
  );

  // Step 3: Fix .js extensions to .ts
  typesContent = typesContent.replace(/\.js(['"])/g, '.ts$1');
  return typesContent;
}

export function fixResolversContent(content: string) {
  // Replace all .js extensions with .ts
  return content.replace(/\.js'/g, ".ts'");
}
