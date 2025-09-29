import type { PrismaClient } from '@prisma/client';

import type { Prisma } from '../db.ts';
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

type INITIAL_RECORD =
  | typeof INITIAL_USERS
  | typeof INITIAL_INSTRUMENTS
  | typeof INITIAL_ALTAIR_INSTRUMENT
  | typeof INITIAL_GEMS_INSTRUMENT
  | typeof INITIAL_ROTATOR
  | typeof INITIAL_SLEW_FLAGS
  | typeof INITIAL_CONFIGURATION
  | typeof INITIAL_ALTAIR_GUIDE_LOOP
  | typeof INITIAL_GEMS_GUIDE_LOOP
  | typeof INITIAL_GUIDE_LOOP
  | typeof INITIAL_MECHANISM
  | typeof INITIAL_ENGINEERING_TARGETS
  | typeof INITIAL_WINDOW_CENTER;

async function createRecord(
  prismaConnection: PrismaClient,
  initialRecord: INITIAL_RECORD,
  recordName: string,
  query: object = {},
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  if (await prismaConnection.findFirst(query)) {
    console.log(`${recordName} already exist`);
    return;
  }

  console.log(`Creating ${recordName}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  await prismaConnection.createMany({
    data: initialRecord,
  });
}

async function createUsers(prisma: Prisma) {
  await createRecord(prisma.user, INITIAL_USERS, 'Users');
}

async function createInstruments(prisma: Prisma) {
  const groupedInstruments = Object.groupBy(INITIAL_INSTRUMENTS, (inst) => inst.name);
  for (const [name, configs] of Object.entries(groupedInstruments)) {
    await createRecord(prisma.instrument, configs, `Instrument ${name} configurations`, { where: { name } });
  }
  await createRecord(prisma.altairInstrument, INITIAL_ALTAIR_INSTRUMENT, 'Altair instrument');
  await createRecord(prisma.gemsInstrument, INITIAL_GEMS_INSTRUMENT, 'Gems instrument');
}

async function createRotator(prisma: Prisma) {
  await createRecord(prisma.rotator, INITIAL_ROTATOR, 'Rotator');
}

async function createSlewFlags(prisma: Prisma) {
  await createRecord(prisma.slewFlags, INITIAL_SLEW_FLAGS, 'Slew flags');
}

async function createConfiguration(prisma: Prisma) {
  await createRecord(prisma.configuration, INITIAL_CONFIGURATION, 'Configuration');
}

async function createGuideLoopInfo(prisma: Prisma) {
  await createRecord(prisma.altairGuideLoop, INITIAL_ALTAIR_GUIDE_LOOP, 'Altair guide loop info');
  await createRecord(prisma.gemsGuideLoop, INITIAL_GEMS_GUIDE_LOOP, 'Gems guide loop info');
  await createRecord(prisma.guideLoop, INITIAL_GUIDE_LOOP, 'General guide loop info');
}

async function createMechanism(prisma: Prisma) {
  await createRecord(prisma.mechanism, INITIAL_MECHANISM, 'Mechanism');
}

async function createGuideAlarms(prisma: Prisma) {
  console.log('Creating guide alarms');
  for (const guideAlarm of INITIAL_GUIDE_ALARMS) {
    await prisma.guideAlarm.upsert({
      where: { wfs: guideAlarm.wfs },
      update: guideAlarm,
      create: guideAlarm,
    });
  }
}

async function createEngineeringTargets(prisma: Prisma) {
  await createRecord(prisma.engineeringTarget, INITIAL_ENGINEERING_TARGETS, 'Engineering targets');
}

async function createWindowCenters(prisma: Prisma) {
  await createRecord(prisma.windowCenter, INITIAL_WINDOW_CENTER, 'Window centers');
}

export async function write(client: Prisma) {
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
