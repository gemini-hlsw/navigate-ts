import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';
import type {
  TargetType,
  UpdateConfigurationMutationVariables,
  UpdateRotatorMutationVariables,
} from '@gql/configs/gen/graphql';
import { GET_INSTRUMENT, useResetInstruments } from '@gql/configs/Instrument';
import { useRotator, useUpdateRotator } from '@gql/configs/Rotator';
import { useRemoveAndCreateBaseTargets, useRemoveAndCreateWfsTargets } from '@gql/configs/Target';
import { useGetCentralWavelength, useGetGuideEnvironment } from '@gql/odb/Observation';

import { extractMagnitude } from '@/Helpers/bands';
import { firstIfOnlyOne, isNotNullish } from '@/Helpers/functions';
import { extractGuideTargets } from '@/Helpers/guideTargets';
import { useTransitionPromise } from '@/Helpers/hooks';
import { extractCentralWavelength } from '@/Helpers/wavelength';
import type { OdbObservationType, OdbTargetType, TargetInput } from '@/types';

export function useImportObservation() {
  const { data: configurationData, loading: configurationLoading } = useConfiguration();
  const configuration = configurationData?.configuration;
  const { data: rotatorData, loading: rotatorLoading } = useRotator();
  const rotator = rotatorData?.rotator;

  const [getGuideEnvironment, { loading: getGuideEnvironmentLoading }] = useGetGuideEnvironment();
  const [getCentralWavelength, { loading: getCentralWavelengthLoading }] = useGetCentralWavelength();
  const [removeAndCreateBaseTargets, { loading: removeCreateLoading }] = useRemoveAndCreateBaseTargets();
  const [updateConfiguration, { loading: updateConfigLoading }] = useUpdateConfiguration();
  const [updateRotator, { loading: updateRotatorLoading }] = useUpdateRotator();
  const [removeAndCreateWfsTargets, { loading: wfsTargetsLoading }] = useRemoveAndCreateWfsTargets();
  const [resetInstruments, { loading: resetInstrumentsLoading }] = useResetInstruments();

  const [isPending, startTransition] = useTransitionPromise();

  const loading =
    configurationLoading ||
    rotatorLoading ||
    updateConfigLoading ||
    removeCreateLoading ||
    updateRotatorLoading ||
    getGuideEnvironmentLoading ||
    getCentralWavelengthLoading ||
    wfsTargetsLoading ||
    resetInstrumentsLoading ||
    isPending;

  function importObservation(selectedObservation: OdbObservationType): Promise<void> {
    if (!configuration) return Promise.resolve();

    return startTransition(async () => {
      // Observation selected
      // First try to get a central wavelength associated to the observation
      const obsWithWavelength = await getCentralWavelength({
        context: { clientName: 'odb' },
        variables: { obsId: selectedObservation.id },
      });

      const wavelength = extractCentralWavelength(selectedObservation.instrument, obsWithWavelength.data);

      const { blindOffsetTarget, firstScienceTarget } = selectedObservation.targetEnvironment ?? {};

      const baseTargets = [
        blindOffsetTarget && { target: blindOffsetTarget, type: 'BLINDOFFSET' as const satisfies TargetType },
        firstScienceTarget && { target: firstScienceTarget, type: 'SCIENCE' as const satisfies TargetType },
      ]
        .filter(isNotNullish)
        .map(({ target, type }) => createBaseTarget(target, type, wavelength));

      // Second create the observation base targets (SCIENCE and BLINDOFFSET)
      const { data: baseTargetsData } = await removeAndCreateBaseTargets({ variables: { targets: baseTargets } });

      const configurationVariables = {
        pk: configuration.pk,
        obsId: selectedObservation.id,
        obsTitle: selectedObservation.title,
        obsSubtitle: selectedObservation.subtitle,
        obsInstrument: selectedObservation.instrument,
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        obsReference: selectedObservation.reference?.label!,
        baffleMode: 'AUTO',
        centralBaffle: null,
        deployableBaffle: null,
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        selectedTarget: baseTargetsData?.removeAndCreateBaseTargets[0]?.pk!,
      } satisfies UpdateConfigurationMutationVariables;
      await updateConfiguration({
        variables: configurationVariables,
        optimisticResponse: {
          updateConfiguration: {
            ...configuration,
            ...configurationVariables,
          },
        },
      });

      // If there is a rotator, retrieve guide targets and create them
      if (rotator) {
        // Get the guide environment separately to avoid large query times for _all_ observations
        const guideEnv = await getGuideEnvironment({
          context: { clientName: 'odb' },
          variables: { obsId: selectedObservation.id },
        });

        const { oiwfs, pwfs1, pwfs2 } = extractGuideTargets(guideEnv.data);

        const rotatorVariables = {
          pk: rotator.pk,
          angle:
            typeof guideEnv.data?.observation?.targetEnvironment.guideEnvironment.posAngle.degrees === 'string'
              ? parseFloat(guideEnv.data?.observation?.targetEnvironment.guideEnvironment.posAngle.degrees)
              : (guideEnv.data?.observation?.targetEnvironment.guideEnvironment.posAngle.degrees ?? 0),
          tracking: 'TRACKING',
        } satisfies UpdateRotatorMutationVariables;
        const [oi, p1, p2] = await Promise.all([
          removeAndCreateWfsTargets({
            variables: {
              wfs: 'OIWFS',
              targets: oiwfs,
            },
          }),
          removeAndCreateWfsTargets({
            variables: {
              wfs: 'PWFS1',
              targets: pwfs1,
            },
          }),
          removeAndCreateWfsTargets({
            variables: {
              wfs: 'PWFS2',
              targets: pwfs2,
            },
          }),
          updateRotator({
            variables: rotatorVariables,
            optimisticResponse: {
              updateRotator: {
                ...rotator,
                ...rotatorVariables,
              },
            },
          }),
        ]);

        // Set the first of each result as the selected target if there is only 1
        const selectedOiTarget = firstIfOnlyOne(oi.data?.removeAndCreateWfsTargets)?.pk ?? null;
        const selectedP1Target = firstIfOnlyOne(p1.data?.removeAndCreateWfsTargets)?.pk ?? null;
        const selectedP2Target = firstIfOnlyOne(p2.data?.removeAndCreateWfsTargets)?.pk ?? null;

        if (configuration?.pk) {
          await updateConfiguration({
            variables: { pk: configuration.pk, selectedOiTarget, selectedP1Target, selectedP2Target },
            optimisticResponse: {
              updateConfiguration: {
                ...configuration,
                selectedOiTarget,
                selectedP1Target,
                selectedP2Target,
              },
            },
          });
        }
      }

      if (selectedObservation.instrument) {
        await resetInstruments({
          variables: { name: selectedObservation.instrument },
          refetchQueries: [GET_INSTRUMENT],
        });
      }
    });
  }

  return [importObservation, { loading }] as const;
}

function createBaseTarget(target: OdbTargetType, type: TargetType, wavelength: number | undefined): TargetInput {
  const { name: band, value: magnitude } = extractMagnitude(target.sourceProfile);
  return {
    id: target.id,
    name: target.name,
    coord1:
      typeof target.sidereal?.ra.degrees === 'string'
        ? parseFloat(target.sidereal?.ra.degrees)
        : target.sidereal?.ra.degrees,
    coord2:
      typeof target.sidereal?.dec.degrees === 'string'
        ? parseFloat(target.sidereal?.dec.degrees)
        : target.sidereal?.dec.degrees,
    pmRa: target.sidereal?.properMotion?.ra.microarcsecondsPerYear,
    pmDec: target.sidereal?.properMotion?.dec.microarcsecondsPerYear,
    radialVelocity: target.sidereal?.radialVelocity?.centimetersPerSecond,
    parallax: target.sidereal?.parallax?.microarcseconds,
    epoch: target.sidereal?.epoch,
    magnitude,
    band,
    type,
    wavelength,
  };
}
