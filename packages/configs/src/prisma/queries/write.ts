import type { PrismaClient } from '../db.ts';
import type { TypeMap } from '../gen/internal/prismaNamespaceBrowser.ts';
import { INITIAL_CAL_PARAMS } from './init/calParams.ts';
import { INITIAL_CONFIGURATION } from './init/configuration.ts';
import { INITIAL_ENGINEERING_TARGETS } from './init/engineeringTargets.ts';
import { INITIAL_GUIDE_ALARMS } from './init/guideAlarm.ts';
import { INITIAL_ALTAIR_GUIDE_LOOP, INITIAL_GEMS_GUIDE_LOOP, INITIAL_GUIDE_LOOP } from './init/guideLoop.ts';
import { INITIAL_ALTAIR_INSTRUMENT, INITIAL_GEMS_INSTRUMENT, INITIAL_INSTRUMENTS } from './init/instruments.ts';
import { INITIAL_MECHANISM } from './init/mechanism.ts';
import { INITIAL_ROTATOR } from './init/rotator.ts';
import { INITIAL_SLEW_FLAGS } from './init/slewFlags.ts';
import { INITIAL_WINDOW_CENTER } from './init/windowCenter.ts';

type Models = TypeMap['model'];
type FindInput<T extends keyof Models> = Models[T]['operations']['findFirst']['args'];
type CreateManyInput<T extends keyof Models> = Models[T]['operations']['createMany']['args']['data'];

async function createRecord<TModel extends keyof Models>(
  prisma: PrismaClient,
  subject: TModel,
  initialRecord: CreateManyInput<TModel>,
  recordName: string,
  log: (msg: string) => void,
  findInput: FindInput<TModel> = {},
) {
  // Transform 'EngineeringTarget' to 'engineeringTarget'
  const lowercaseFirstLetter = (s: TModel) => (s.charAt(0).toLowerCase() + s.slice(1)) as TypeMap['meta']['modelProps'];

  const client = prisma[lowercaseFirstLetter(subject)];
  // @ts-expect-error Generic types are difficult with prisma
  if (await client.findFirst(findInput)) {
    log(`${recordName} already exist`);
    return;
  }

  log(`Creating ${recordName}`);
  // @ts-expect-error Generic types are difficult with prisma
  await client.createMany({
    data: initialRecord,
  });
}

async function createInstruments(prisma: PrismaClient, log: (msg: string) => void) {
  const groupedInstruments = Object.groupBy(INITIAL_INSTRUMENTS, (inst) => inst.name);
  for (const [name, configs] of Object.entries(groupedInstruments)) {
    await createRecord(prisma, 'Instrument', configs, `Instrument ${name} configurations`, log, {
      where: { name },
    });
  }
  await createRecord(prisma, 'AltairInstrument', INITIAL_ALTAIR_INSTRUMENT, 'Altair instrument', log);
  await createRecord(prisma, 'GemsInstrument', INITIAL_GEMS_INSTRUMENT, 'Gems instrument', log);
}

async function createRotator(prisma: PrismaClient, log: (msg: string) => void) {
  await createRecord(prisma, 'Rotator', INITIAL_ROTATOR, 'Rotator', log);
}

async function createSlewFlags(prisma: PrismaClient, log: (msg: string) => void) {
  await createRecord(prisma, 'SlewFlags', INITIAL_SLEW_FLAGS, 'Slew flags', log);
}

async function createConfiguration(prisma: PrismaClient, log: (msg: string) => void) {
  await createRecord(prisma, 'Configuration', INITIAL_CONFIGURATION, 'Configuration', log);
}

async function createGuideLoopInfo(prisma: PrismaClient, log: (msg: string) => void) {
  await createRecord(prisma, 'AltairGuideLoop', INITIAL_ALTAIR_GUIDE_LOOP, 'Altair guide loop info', log);
  await createRecord(prisma, 'GemsGuideLoop', INITIAL_GEMS_GUIDE_LOOP, 'Gems guide loop info', log);
  await createRecord(prisma, 'GuideLoop', INITIAL_GUIDE_LOOP, 'General guide loop info', log);
}

async function createMechanism(prisma: PrismaClient, log: (msg: string) => void) {
  await createRecord(prisma, 'Mechanism', INITIAL_MECHANISM, 'Mechanism', log);
}

async function createGuideAlarms(prisma: PrismaClient, log: (msg: string) => void) {
  log('Creating guide alarms');
  for (const guideAlarm of INITIAL_GUIDE_ALARMS) {
    await prisma.guideAlarm.upsert({
      where: { wfs: guideAlarm.wfs },
      update: guideAlarm,
      create: guideAlarm,
    });
  }
}

async function createEngineeringTargets(prisma: PrismaClient, log: (msg: string) => void) {
  await createRecord(prisma, 'EngineeringTarget', INITIAL_ENGINEERING_TARGETS, 'Engineering targets', log);
}

async function createWindowCenters(prisma: PrismaClient, log: (msg: string) => void) {
  await createRecord(prisma, 'WindowCenter', INITIAL_WINDOW_CENTER, 'Window centers', log);
}

async function createCalParams(prisma: PrismaClient, log: (msg: string) => void) {
  // Populate acqCamX and acqCamY from deprecated WindowCenter table
  for (const param of INITIAL_CAL_PARAMS) {
    const acqCam = await prisma.windowCenter.findFirst({ where: { site: param.site } });
    if (acqCam) {
      param.acqCamX = acqCam.x;
      param.acqCamY = acqCam.y;
    }
  }
  await createRecord(prisma, 'CalParams', INITIAL_CAL_PARAMS, 'CalParams', log);
}

export async function write(client: PrismaClient, log: (msg: string) => void) {
  await createInstruments(client, log);
  await createSlewFlags(client, log);
  await createRotator(client, log);
  await createConfiguration(client, log);
  await createGuideLoopInfo(client, log);
  await createMechanism(client, log);
  await createGuideAlarms(client, log);
  await createEngineeringTargets(client, log);
  await createWindowCenters(client, log);
  await createCalParams(client, log);
}
