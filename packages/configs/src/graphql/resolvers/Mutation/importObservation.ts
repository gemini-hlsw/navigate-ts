import type { Target } from '../../../prisma/gen/client.ts';
import { firstIfOnlyOne } from '../../../util.ts';
import type { Configuration, MutationResolvers, TargetInput, TargetType } from './../../gen/types.generated.js';

export const importObservation: NonNullable<MutationResolvers['importObservation']> = async (
  _parent,
  args,
  { prisma },
) =>
  // Use a transaction to ensure all operations complete successfully together
  prisma.$transaction(async (prisma) => {
    const { configurationPk, rotatorPk, observation, targets, guideEnvironmentAngle } = args.input;

    const angleParsed =
      typeof guideEnvironmentAngle?.degrees === 'string'
        ? parseFloat(guideEnvironmentAngle.degrees)
        : (guideEnvironmentAngle?.degrees ?? 0);
    const rotator = await prisma.rotator.update({
      where: { pk: rotatorPk },
      data: {
        angle: angleParsed,
        tracking: 'TRACKING',
      },
    });

    await prisma.target.deleteMany({
      where: {},
    });

    const newTargets: Pick<Target, 'pk' | 'type'>[] = [];
    for (const t of [
      ...targets.base,
      ...targets.oiwfs.map(setWfs('OIWFS')),
      ...targets.pwfs1.map(setWfs('PWFS1')),
      ...targets.pwfs2.map(setWfs('PWFS2')),
    ]) {
      // Create each target individually to handle sidereal and nonsidereal relations
      const result = await prisma.target.create({
        data: {
          ...t,
          sidereal: t.sidereal ? { create: { ...t.sidereal, type: t.type } } : undefined,
          nonsidereal: t.nonsidereal ? { create: t.nonsidereal } : undefined,
        },
        select: {
          pk: true,
          type: true,
        },
      });
      newTargets.push(result);
    }

    const selectedTarget = newTargets.find((t) => t.type === 'BLINDOFFSET' || t.type === 'SCIENCE')?.pk;
    const selectedOiTarget = firstIfOnlyOne(newTargets.filter((t) => t.type === 'OIWFS'))?.pk;
    const selectedP1Target = firstIfOnlyOne(newTargets.filter((t) => t.type === 'PWFS1'))?.pk;
    const selectedP2Target = firstIfOnlyOne(newTargets.filter((t) => t.type === 'PWFS2'))?.pk;
    const selectedGuiderTarget = firstIfOnlyOne([selectedOiTarget, selectedP1Target, selectedP2Target].filter(Boolean));

    const configuration = (await prisma.configuration.update({
      where: { pk: configurationPk },
      data: {
        obsId: observation.id,
        obsTitle: observation.title,
        obsSubtitle: observation.subtitle,
        obsReference: observation.reference,
        obsInstrument: observation.instrument,
        baffleMode: 'AUTO',
        centralBaffle: null,
        deployableBaffle: null,
        selectedTarget,
        selectedOiTarget,
        selectedP1Target,
        selectedP2Target,
        selectedGuiderTarget,
      },
    })) as Configuration;

    await prisma.instrument.deleteMany({ where: { name: observation.instrument, isTemporary: true } });

    return { configuration, rotator };
  });

/**
 * Helper function to force set the WFS type on a target
 */
const setWfs =
  (wfs: TargetType) =>
  (target: TargetInput): TargetInput => ({ ...target, type: wfs });
