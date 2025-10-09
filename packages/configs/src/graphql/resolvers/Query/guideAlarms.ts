import type { FieldNode } from 'graphql';

import type { GuideAlarm, QueryResolvers, WfsType } from './../../gen/types.generated.ts';

export const guideAlarms: NonNullable<QueryResolvers['guideAlarms']> = async (_parent, _args, { prisma }, info) => {
  // Get the wfs types to query for from the graphql info object
  const wfsTypesToQuery =
    ((info.fieldNodes[0]?.selectionSet?.selections as FieldNode[])
      .map((selection) => selection.name.value)
      .filter((wfs) => wfs !== '__typename') as WfsType[]) ?? [];

  const alarms = await prisma.guideAlarm.findMany({
    where: {
      wfs: {
        in: wfsTypesToQuery,
      },
    },
  });

  // Convert the array of alarms to an object with the wfs as the key
  return Object.fromEntries(alarms.map((alarm) => [alarm.wfs, alarm])) as Record<WfsType, GuideAlarm>;
};
