import { prisma } from '../db.js';
import { INITIAL_CONFIGURATION } from './init/configuration.js';
import { INITIAL_ENGINEERING_TARGETS } from './init/engineeringTargets.js';
import { INITIAL_GUIDE_ALARMS } from './init/guideAlarm.js';
import { INITIAL_ALTAIR_GUIDE_LOOP, INITIAL_GEMS_GUIDE_LOOP, INITIAL_GUIDE_LOOP } from './init/guideLoop.js';
import { INITIAL_ALTAIR_INSTRUMENT, INITIAL_GEMS_INSTRUMENT, INITIAL_INSTRUMENTS } from './init/instruments.js';
import { INITIAL_MECHANISM } from './init/mechanism.js';
import { INITIAL_ROTATOR } from './init/rotator.js';
import { INITIAL_SLEW_FLAGS } from './init/slewFlags.js';
import { INITIAL_USERS } from './init/users.js';

async function createUsers() {
  console.log('Creating user reader');
  await prisma.user.createMany({
    data: INITIAL_USERS,
  });
}

async function createInstruments() {
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

async function createRotator() {
  console.log('Creating initial rotator');
  await prisma.rotator.create({
    data: INITIAL_ROTATOR,
  });
}

async function createSlewFlags() {
  console.log('Creating initial slew flags');
  await prisma.slewFlags.create({
    data: INITIAL_SLEW_FLAGS,
  });
}

async function createConfiguration() {
  console.log('Creating initial configuration');
  await prisma.configuration.create({
    data: INITIAL_CONFIGURATION,
  });
}

async function createGuideLoopInfo() {
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

async function createMechanism() {
  console.log('Creating mechanism info');
  await prisma.mechanism.create({
    data: INITIAL_MECHANISM,
  });
}

async function createGuideAlarms() {
  console.log('Creating guide alarms');
  for (const guideAlarm of INITIAL_GUIDE_ALARMS) {
    await prisma.guideAlarm.upsert({
      where: { wfs: guideAlarm.wfs },
      update: guideAlarm,
      create: guideAlarm,
    });
  }
}

async function createEngineeringTargets() {
  console.log('Creating initial engineering targets');
  await prisma.engineeringTarget.createMany({
    data: INITIAL_ENGINEERING_TARGETS,
  });
}

export async function write() {
  await createUsers();
  await createInstruments();
  await createSlewFlags();
  await createRotator();
  await createConfiguration();
  await createGuideLoopInfo();
  await createMechanism();
  await createGuideAlarms();
  await createEngineeringTargets();
}
