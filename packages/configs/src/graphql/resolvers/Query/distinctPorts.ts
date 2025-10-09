import type { QueryResolvers } from './../../gen/types.generated.ts';

export const distinctPorts: NonNullable<QueryResolvers['distinctPorts']> = async (_parent, args, { prisma }) => {
  const results = await prisma.instrument.findMany({
    where: args,
    distinct: ['issPort'],
    select: { issPort: true },
    orderBy: { issPort: 'asc' },
  });
  return results.map((r) => r.issPort);
};
