import type { Prisma } from '../../prisma/gen/client.ts';
import type { InstrumentConfig, Resolvers } from '../gen/index.ts';

// Temporary instruments first, then most recent first
const orderBy: Prisma.InstrumentOrderByWithRelationInput[] = [{ isTemporary: 'desc' }, { createdAt: 'desc' }];

export const InstrumentResolver: Resolvers = {
  Query: {
    instrument: async (_parent, args, { prisma }) => {
      let instrument = await prisma.instrument.findFirst({ where: args, orderBy });
      if (instrument) {
        return instrument as InstrumentConfig;
      }
      // If instrument was not found and wfs is not NONE
      // Try to get the instrument using wfs NONE
      if (args.wfs !== 'NONE') {
        instrument = await prisma.instrument.findFirst({ where: { ...args, wfs: 'NONE', isTemporary: false } });
      }
      // Create a default configuration to be manually modified if instrument was not found
      // Otherwise use the NONE wfs as default parameters
      if (!instrument) {
        instrument = await prisma.instrument.create({
          data: {
            name: args.name ?? '',
            issPort: args.issPort ?? 1,
            wfs: args.wfs,
            isTemporary: false,
            extraParams: {},
            ao: false,
            originX: 0.0,
            originY: 0.0,
            focusOffset: 0.0,
            iaa: 0.0,
            comment: 'Default fallback configuration, using empty configuration please modify manually',
          },
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { pk, ...instArgs } = instrument;
        instrument = await prisma.instrument.create({
          data: {
            ...instArgs,
            wfs: args.wfs,
            isTemporary: false,
            extraParams: {},
            comment: 'Default fallback configuration, using parameters from previous configuration',
          },
        });
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
    deleteInstrument: async (_parent, args, { prisma }) => {
      await prisma.instrument.delete({ where: { pk: args.pk } });
    },
  },
};
