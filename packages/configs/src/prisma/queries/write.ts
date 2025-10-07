import type { PrismaClient } from '../db.ts';
import type { TypeMap } from '../gen/internal/prismaNamespaceBrowser.ts';
import { INITIAL_CONFIGURATION } from './init/configuration.ts';
import { INITIAL_ENGINEERING_TARGETS } from './init/engineeringTargets.ts';
import { INITIAL_GUIDE_ALARMS } from './init/guideAlarm.ts';
import { INITIAL_ALTAIR_GUIDE_LOOP, INITIAL_GEMS_GUIDE_LOOP, INITIAL_GUIDE_LOOP } from './init/guideLoop.ts';
import { INITIAL_ALTAIR_INSTRUMENT, INITIAL_GEMS_INSTRUMENT, INITIAL_INSTRUMENTS } from './init/instruments.ts';
import { INITIAL_MECHANISM } from './init/mechanism.ts';
import { INITIAL_ROTATOR } from './init/rotator.ts';
import { INITIAL_SLEW_FLAGS } from './init/slewFlags.ts';
import { INITIAL_USERS } from './init/users.ts';
import { INITIAL_WINDOW_CENTER } from './init/windowCenter.ts';

type Models = TypeMap['model'];
type FindInput<T extends keyof Models> = Models[T]['operations']['findFirst']['args'];
type CreateManyInput<T extends keyof Models> = Models[T]['operations']['createMany']['args']['data'];

async function createRecord<TModel extends keyof Models>(
  prisma: PrismaClient,
  subject: TModel,
  initialRecord: CreateManyInput<TModel>,
  recordName: string,
  findInput: FindInput<TModel> = {},
) {
  // Transform 'EngineeringTarget' to 'engineeringTarget'
  const lowercaseFirstLetter = (s: TModel) => (s.charAt(0).toLowerCase() + s.slice(1)) as TypeMap['meta']['modelProps'];

  const client = prisma[lowercaseFirstLetter(subject)];
  // @ts-expect-error Generic types are difficult with prisma
  if (await client.findFirst(findInput)) {
    console.log(`${recordName} already exist`);
    return;
  }

  console.log(`Creating ${recordName}`);
  // @ts-expect-error Generic types are difficult with prisma
  await client.createMany({
    data: initialRecord,
  });
}

async function createUsers(prisma: PrismaClient) {
  await createRecord(prisma, 'User', INITIAL_USERS, 'Users');
}

async function createInstruments(prisma: PrismaClient) {
  const groupedInstruments = Object.groupBy(INITIAL_INSTRUMENTS, (inst) => inst.name);
  for (const [name, configs] of Object.entries(groupedInstruments)) {
    await createRecord(prisma, 'Instrument', configs, `Instrument ${name} configurations`, {
      where: { name },
    });
  }
  await createRecord(prisma, 'AltairInstrument', INITIAL_ALTAIR_INSTRUMENT, 'Altair instrument');
  await createRecord(prisma, 'GemsInstrument', INITIAL_GEMS_INSTRUMENT, 'Gems instrument');
}

async function createRotator(prisma: PrismaClient) {
  await createRecord(prisma, 'Rotator', INITIAL_ROTATOR, 'Rotator');
}

async function createSlewFlags(prisma: PrismaClient) {
  await createRecord(prisma, 'SlewFlags', INITIAL_SLEW_FLAGS, 'Slew flags');
}

async function createConfiguration(prisma: PrismaClient) {
  await createRecord(prisma, 'Configuration', INITIAL_CONFIGURATION, 'Configuration');
}

async function createGuideLoopInfo(prisma: PrismaClient) {
  await createRecord(prisma, 'AltairGuideLoop', INITIAL_ALTAIR_GUIDE_LOOP, 'Altair guide loop info');
  await createRecord(prisma, 'GemsGuideLoop', INITIAL_GEMS_GUIDE_LOOP, 'Gems guide loop info');
  await createRecord(prisma, 'GuideLoop', INITIAL_GUIDE_LOOP, 'General guide loop info');
}

async function createMechanism(prisma: PrismaClient) {
  await createRecord(prisma, 'Mechanism', INITIAL_MECHANISM, 'Mechanism');
}

async function createGuideAlarms(prisma: PrismaClient) {
  console.log('Creating guide alarms');
  for (const guideAlarm of INITIAL_GUIDE_ALARMS) {
    await prisma.guideAlarm.upsert({
      where: { wfs: guideAlarm.wfs },
      update: guideAlarm,
      create: guideAlarm,
    });
  }
}

async function createEngineeringTargets(prisma: PrismaClient) {
  await createRecord(prisma, 'EngineeringTarget', INITIAL_ENGINEERING_TARGETS, 'Engineering targets');
}

async function createWindowCenters(prisma: PrismaClient) {
  await createRecord(prisma, 'WindowCenter', INITIAL_WINDOW_CENTER, 'Window centers');
}

export async function write(client: PrismaClient) {
  await createUsers(client);
  await createInstruments(client);
  await createSlewFlags(client);
  await createRotator(client);
  await createConfiguration(client);
  await createGuideLoopInfo(client);
  await createMechanism(client);
  await createGuideAlarms(client);
  await createEngineeringTargets(client);
  await createWindowCenters(client);
}
