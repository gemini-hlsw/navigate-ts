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

async function createUsers(prisma: Prisma) {
  console.log('Creating user reader');
  await prisma.user.createMany({
    data: INITIAL_USERS,
  });
}

async function createInstruments(prisma: Prisma) {
  console.log('Creating initial instruments');
  await prisma.instrument.createMany({
    data: INITIAL_INSTRUMENTS,
  });
  console.log('Creating initial altair instrument');
  await prisma.altairInstrument.create({
    data: INITIAL_ALTAIR_INSTRUMENT,
  });
  console.log('Creating initial gems instrument');
  await prisma.gemsInstrument.create({
    data: INITIAL_GEMS_INSTRUMENT,
  });
}

async function createRotator(prisma: Prisma) {
  console.log('Creating initial rotator');
  await prisma.rotator.create({
    data: INITIAL_ROTATOR,
  });
}

async function createSlewFlags(prisma: Prisma) {
  console.log('Creating initial slew flags');
  await prisma.slewFlags.create({
    data: INITIAL_SLEW_FLAGS,
  });
}

async function createConfiguration(prisma: Prisma) {
  console.log('Creating initial configuration');
  await prisma.configuration.create({
    data: INITIAL_CONFIGURATION,
  });
}

async function createGuideLoopInfo(prisma: Prisma) {
  console.log('Creating altair guide loop info');
  await prisma.altairGuideLoop.create({
    data: INITIAL_ALTAIR_GUIDE_LOOP,
  });
  console.log('Creating gems guide loop info');
  await prisma.gemsGuideLoop.create({
    data: INITIAL_GEMS_GUIDE_LOOP,
  });
  console.log('Creating general guide loop info');
  await prisma.guideLoop.create({
    data: INITIAL_GUIDE_LOOP,
  });
}

async function createMechanism(prisma: Prisma) {
  console.log('Creating mechanism info');
  await prisma.mechanism.create({
    data: INITIAL_MECHANISM,
  });
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
  console.log('Creating initial engineering targets');
  await prisma.engineeringTarget.createMany({
    data: INITIAL_ENGINEERING_TARGETS,
  });
}

async function createWindowCenters(prisma: Prisma) {
  console.log('Creating initial window centers');
  await prisma.windowCenter.createMany({
    data: INITIAL_WINDOW_CENTER,
  });
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
