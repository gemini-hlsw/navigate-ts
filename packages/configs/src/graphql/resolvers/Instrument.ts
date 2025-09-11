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
    distinctInstruments: async (_parent, _args, { prisma }) => {
      const results = await prisma.instrument.findMany({
        distinct: ['name'],
        select: { name: true },
        orderBy: { name: 'asc' },
      });
      return results.map((r) => r.name);
    },
    distinctPorts: async (_parent, args, { prisma }) => {
      const results = await prisma.instrument.findMany({
        where: args,
        distinct: ['issPort'],
        select: { issPort: true },
        orderBy: { issPort: 'asc' },
      });
      return results.map((r) => r.issPort);
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
    setTemporaryInstrument: async (_parent, args, { prisma }) => {
      const tempInstrument = await prisma.instrument.findFirst({
        where: { name: args.name, issPort: args.issPort, wfs: args.wfs, isTemporary: true },
        select: { pk: true },
        orderBy,
      });
      if (tempInstrument) {
        return prisma.instrument.update({
          where: { pk: tempInstrument.pk },
          data: args,
        }) as Promise<InstrumentConfig>;
      } else {
        return prisma.instrument.create({
          data: { extraParams: {}, ...args, isTemporary: true },
        }) as Promise<InstrumentConfig>;
      }
    },
    resetInstruments: async (_parent, args, { prisma }) => {
      await prisma.instrument.deleteMany({ where: { ...args, isTemporary: true } });
    },
  },
};
