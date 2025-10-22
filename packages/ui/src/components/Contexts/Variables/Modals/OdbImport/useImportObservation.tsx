import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';
import { GET_INSTRUMENT, useResetInstruments } from '@gql/configs/Instrument';
import { useRotator, useUpdateRotator } from '@gql/configs/Rotator';
import { useRemoveAndCreateBaseTargets, useRemoveAndCreateWfsTargets } from '@gql/configs/Target';
import type { SourceProfile } from '@gql/odb/gen/graphql';
import { useGetCentralWavelength, useGetGuideEnvironment } from '@gql/odb/Observation';

import { extractMagnitude } from '@/Helpers/bands';
import { firstIfOnlyOne } from '@/Helpers/functions';
import { extractGuideTargets } from '@/Helpers/guideTargets';
import { useToast } from '@/Helpers/toast';
import { extractCentralWavelength } from '@/Helpers/wavelength';
import type { ConfigurationType, OdbObservationType } from '@/types';

export function useImportObservation() {
  const toast = useToast();
  const configuration = useConfiguration().data?.configuration;
  const [getGuideEnvironment, { loading: getGuideEnvironmentLoading }] = useGetGuideEnvironment();
  const [getCentralWavelength, { loading: getCentralWavelengthLoading }] = useGetCentralWavelength();
  const [removeAndCreateBaseTargets, { loading: removeCreateLoading }] = useRemoveAndCreateBaseTargets();
  const [updateConfiguration, { loading: updateConfigLoading }] = useUpdateConfiguration();
  const [updateRotator, { loading: updateRotatorLoading }] = useUpdateRotator();
  const [removeAndCreateWfsTargets, { loading: wfsTargetsLoading }] = useRemoveAndCreateWfsTargets();
  const [resetInstruments, { loading: resetInstrumentsLoading }] = useResetInstruments();

  const rotator = useRotator().data?.rotator;

  const importLoading =
    updateConfigLoading ||
    removeCreateLoading ||
    updateRotatorLoading ||
    getGuideEnvironmentLoading ||
    getCentralWavelengthLoading ||
    wfsTargetsLoading ||
    resetInstrumentsLoading;

  async function importObservation(selectedObservation: OdbObservationType | null, callback?: () => void) {
    try {
      if (!selectedObservation) {
        toast?.show({
          severity: 'warn',
          summary: 'No observation selected',
          detail: 'Please select an observation to import',
        });
        return;
      }
      await updateConfiguration({
        variables: {
          ...(configuration as ConfigurationType),
          obsId: selectedObservation.id,
          obsTitle: selectedObservation.title,
          obsSubtitle: selectedObservation.subtitle,
          obsInstrument: selectedObservation.instrument,
          obsReference: selectedObservation.reference?.label,
        },
      });

      // Observation selected
      // First try to get a central wavelength associated to the observation
      const obsWithWavelength = await getCentralWavelength({
        context: { clientName: 'odb' },
        variables: { obsId: selectedObservation.id },
      });

      const wavelength = extractCentralWavelength(selectedObservation.instrument, obsWithWavelength.data);

      const { name: band, value: magnitude } = extractMagnitude(
        selectedObservation.targetEnvironment?.firstScienceTarget?.sourceProfile as SourceProfile,
      );

      // Second create the observation base target (SCIENCE)
      const { data: t } = await removeAndCreateBaseTargets({
        variables: {
          targets: selectedObservation.targetEnvironment.firstScienceTarget
            ? [
                {
                  id: selectedObservation.targetEnvironment.firstScienceTarget.id,
                  name: selectedObservation.targetEnvironment.firstScienceTarget.name,
                  coord1:
                    typeof selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.ra.degrees === 'string'
                      ? parseFloat(selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.ra.degrees)
                      : selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.ra.degrees,
                  coord2:
                    typeof selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.dec.degrees === 'string'
                      ? parseFloat(selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.dec.degrees)
                      : selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.dec.degrees,
                  pmRa: selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.properMotion?.ra
                    .microarcsecondsPerYear,
                  pmDec:
                    selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.properMotion?.dec
                      .microarcsecondsPerYear,
                  radialVelocity:
                    selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.radialVelocity
                      ?.centimetersPerSecond,
                  parallax:
                    selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.parallax?.microarcseconds,
                  epoch: selectedObservation.targetEnvironment.firstScienceTarget.sidereal?.epoch,
                  magnitude: magnitude,
                  band: band,
                  type: 'SCIENCE',
                  wavelength: wavelength,
                },
              ]
            : [],
        },
      });

      await updateConfiguration({
        variables: {
          pk: configuration?.pk ?? 1,
          selectedTarget: t?.removeAndCreateBaseTargets[0]?.pk,
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
            variables: {
              pk: rotator?.pk,
              angle:
                typeof guideEnv.data?.observation?.targetEnvironment.guideEnvironment.posAngle.degrees === 'string'
                  ? parseFloat(guideEnv.data?.observation?.targetEnvironment.guideEnvironment.posAngle.degrees)
                  : (guideEnv.data?.observation?.targetEnvironment.guideEnvironment.posAngle.degrees ?? 0),
              tracking: 'TRACKING',
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
          });
        }
      }

      if (selectedObservation.instrument) {
        await resetInstruments({
          variables: { name: selectedObservation.instrument },
          refetchQueries: [GET_INSTRUMENT],
        });
      }
    } finally {
      callback?.();
    }
  }

  return { importLoading, importObservation };
}
