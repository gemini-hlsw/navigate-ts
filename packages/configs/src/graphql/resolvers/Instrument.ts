import type { Prisma } from '../../prisma/gen/client.ts';
import type { InstrumentConfig, Resolvers } from '../gen/index.ts';

// Temporary instruments first, then most recent first
const orderBy: Prisma.InstrumentOrderByWithRelationInput[] = [{ isTemporary: 'desc' }, { createdAt: 'desc' }];

export const InstrumentResolver: Resolvers = {
  Query: {
    instrument: async (_parent, args, { prisma }) => {
      const instrument = await prisma.instrument.findFirst({ where: args, orderBy });
      if (!instrument) {
        throw new Error(`Instrument not found for args: ${JSON.stringify(args)}`);
      }
      return instrument as InstrumentConfig;
    },
    instruments: (_parent, args, { prisma }) => {
      return prisma.instrument.findMany({ where: args, orderBy }) as Promise<InstrumentConfig[]>;
    },
    distinctInstruments: (_parent, _args, { prisma }) => {
      return prisma.instrument.findMany({
        distinct: ['name'],
        select: { name: true },
      });
    },
    distinctPorts: (_parent, args, { prisma }) => {
      return prisma.instrument.findMany({
        where: args,
        distinct: ['issPort'],
        select: { issPort: true },
      });
    },
  },
  Mutation: {
    createInstrument: (_parent, args, { prisma }) => {
      return prisma.instrument.create({ data: { extraParams: {}, ...args } }) as Promise<InstrumentConfig>;
    },
    updateInstrument: (_parent, args, { prisma }) => {
      return prisma.instrument.update({
        where: { pk: args.pk },
        data: args,
      }) as Promise<InstrumentConfig>;
    },
    resetInstruments: async (_parent, args, { prisma }) => {
      await prisma.instrument.deleteMany({ where: { ...args, isTemporary: true } });
    },
  },
};
