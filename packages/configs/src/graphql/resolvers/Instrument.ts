import { INITIAL_INSTRUMENTS } from '../../prisma/queries/init/instruments.js';
import type { Resolvers } from '../gen/index.js';

export const InstrumentResolver: Resolvers = {
  Query: {
    instrument: async (_parent, args, { prisma }) => {
      const instrument = await prisma.instrument.findFirst({ where: args });
      if (!instrument) {
        throw new Error(`Instrument not found for args: ${JSON.stringify(args)}`);
      }
      return instrument;
    },
    instruments: (_parent, args, { prisma }) => {
      return prisma.instrument.findMany({ where: args });
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
      return prisma.instrument.create({ data: { extraParams: {}, ...args } });
    },
    updateInstrument: (_parent, args, { prisma }) => {
      return prisma.instrument.update({
        where: { pk: args.pk },
        data: args,
      });
    },
    resetInstruments: async (_parent, args, { prisma }) => {
      const initialInstruments = INITIAL_INSTRUMENTS.filter((i) => i.name === args.name);
      if (!initialInstruments.length) {
        throw new Error(`No initial instruments found for name: ${args.name}`);
      }

      return prisma.$transaction(async (tx) => {
        await tx.instrument.deleteMany({ where: args });

        return tx.instrument.createManyAndReturn({ data: initialInstruments });
      });
    },
  },
};
