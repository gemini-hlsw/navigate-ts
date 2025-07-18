import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';
import { useResetInstruments } from '@gql/configs/Instrument';
import { useRotator, useUpdateRotator } from '@gql/configs/Rotator';
import { useRemoveAndCreateBaseTargets, useRemoveAndCreateWfsTargets } from '@gql/configs/Target';
import type {
  Flamingos2ExecutionConfig,
  GetCentralWavelengthQuery,
  GetGuideEnvironmentQuery,
  GmosNorthExecutionConfig,
  GmosSouthExecutionConfig,
  Instrument,
  SourceProfile,
} from '@gql/odb/gen/graphql';
import { useGetCentralWavelength, useGetGuideEnvironment, useObservationsByState } from '@gql/odb/Observation';
import { dateToLocalObservingNight } from 'lucuma-core';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useCallback, useState } from 'react';

import { useCanEdit } from '@/components/atoms/auth';
import { useServerConfigValue } from '@/components/atoms/config';
import { useOdbVisible } from '@/components/atoms/odb';
import { extractMagnitude } from '@/Helpers/bands';
import { useToast } from '@/Helpers/toast';
import type { ConfigurationType, OdbObservationType, TargetInput } from '@/types';

import { ObservationTable } from './ObservationTable';

export function OdbImport() {
  const canEdit = useCanEdit();
  const configuration = useConfiguration().data?.configuration;
  const { site } = useServerConfigValue();
  const toast = useToast();
  const [odbVisible, setOdbVisible] = useOdbVisible();
  const [selectedObservation, setSelectedObservation] = useState<OdbObservationType | null>(null);

  const observingNight = dateToLocalObservingNight(new Date());

  const { data, loading } = useObservationsByState({
    skip: !odbVisible || !site,
    variables: {
      date: observingNight,
      site,
      states: ['READY', 'ONGOING'],
    },
  });

  const [getGuideEnvironment, { loading: getGuideEnvironmentLoading }] = useGetGuideEnvironment();
  const [getCentralWavelength, { loading: getCentralWavelengthLoading }] = useGetCentralWavelength();
  const [removeAndCreateBaseTargets, { loading: removeCreateLoading }] = useRemoveAndCreateBaseTargets();
  const [updateConfiguration, { loading: updateConfigLoading }] = useUpdateConfiguration();
  const [updateRotator, { loading: updateRotatorLoading }] = useUpdateRotator();
  const [removeAndCreateWfsTargets, { loading: wfsTargetsLoading }] = useRemoveAndCreateWfsTargets();
  const [resetInstruments, { loading: resetInstrumentsLoading }] = useResetInstruments();

  const rotator = useRotator().data?.rotator;

  const updateLoading =
    updateConfigLoading ||
    removeCreateLoading ||
    updateRotatorLoading ||
    getGuideEnvironmentLoading ||
    getCentralWavelengthLoading ||
    wfsTargetsLoading ||
    resetInstrumentsLoading;

  const updateObs = useCallback(() => {
    if (!selectedObservation) {
      toast?.show({
        severity: 'warn',
        summary: 'No observation selected',
        detail: 'Please select an observation to import',
      });
      return;
    }
    void updateConfiguration({
      variables: {
        ...(configuration as ConfigurationType),
        obsId: selectedObservation.id,
        obsTitle: selectedObservation.title,
        obsSubtitle: selectedObservation.subtitle,
        obsInstrument: selectedObservation.instrument,
        obsReference: selectedObservation.reference?.label,
      },
      async onCompleted() {
        // Observation selected
        // First try to get a central wavelength associated to the observation
        const obsWithWavelength = await getCentralWavelength({
          variables: { obsId: selectedObservation.id },
        });

        const wavelength = extractCentralWavelength(selectedObservation.instrument, obsWithWavelength.data);

        const { name: band, value: magnitude } = extractMagnitude(
          selectedObservation.targetEnvironment?.firstScienceTarget?.sourceProfile as SourceProfile,
        );

        // Second create the observation base target (SCIENCE)
        await removeAndCreateBaseTargets({
          variables: {
            targets: [
              {
                id: selectedObservation.targetEnvironment?.firstScienceTarget?.id,
                name: selectedObservation.targetEnvironment?.firstScienceTarget?.name,
                coord1:
                  typeof selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.ra.degrees === 'string'
                    ? parseFloat(selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.ra.degrees)
                    : selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.ra.degrees,
                coord2:
                  typeof selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.dec.degrees === 'string'
                    ? parseFloat(selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.dec.degrees)
                    : selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.dec.degrees,
                epoch: selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.epoch,
                magnitude: magnitude,
                band: band,
                type: 'SCIENCE',
                wavelength: wavelength,
              },
            ],
          },
          async onCompleted(t) {
            await updateConfiguration({
              variables: {
                pk: configuration?.pk ?? 1,
                selectedTarget: t.removeAndCreateBaseTargets[0]?.pk,
              },
            });
          },
        });

        // If there is a rotator, retrieve guide targets and create them
        if (rotator) {
          // Get the guide environment separately to avoid large query times for _all_ observations
          const guideEnv = await getGuideEnvironment({
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
          const selectedOiTarget = firstIfOnlyOne(oi.data?.removeAndCreateWfsTargets)?.pk;
          const selectedP1Target = firstIfOnlyOne(p1.data?.removeAndCreateWfsTargets)?.pk;
          const selectedP2Target = firstIfOnlyOne(p2.data?.removeAndCreateWfsTargets)?.pk;

          if (configuration?.pk && (selectedOiTarget || selectedP1Target || selectedP2Target)) {
            await updateConfiguration({
              variables: { pk: configuration.pk, selectedOiTarget, selectedP1Target, selectedP2Target },
            });
          }
        }

        if (selectedObservation.instrument) {
          await resetInstruments({
            variables: { name: selectedObservation.instrument },
            refetchQueries: ['getInstrument'],
          });
        }

        setOdbVisible(false);
      },
    });
  }, [
    configuration,
    getCentralWavelength,
    getGuideEnvironment,
    removeAndCreateBaseTargets,
    removeAndCreateWfsTargets,
    resetInstruments,
    rotator,
    selectedObservation,
    setOdbVisible,
    toast,
    updateConfiguration,
    updateRotator,
  ]);

  const header = (
    <div className="header-item">
      <span>
        Observing Night {observingNight} @ {site}
      </span>
    </div>
  );

  const footer = (
    <div className="modal-footer">
      <div className="right">
        <Button
          disabled={
            !(canEdit && selectedObservation?.targetEnvironment?.firstScienceTarget?.name) ||
            !selectedObservation?.targetEnvironment?.firstScienceTarget?.name
          }
          className=""
          label="Import to Navigate"
          loading={updateLoading}
          onClick={updateObs}
        />
        <Button disabled={!canEdit} className="p-button-danger" label="Cancel" onClick={() => setOdbVisible(false)} />
      </div>
    </div>
  );

  return (
    <Dialog header="Import from ODB" footer={footer} visible={odbVisible} modal onHide={() => setOdbVisible(false)}>
      {
        <ObservationTable
          headerItems={header}
          loading={loading}
          observations_list={data?.observationsByWorkflowState}
          selectedObservation={selectedObservation}
          setSelectedObservation={setSelectedObservation}
        />
      }
    </Dialog>
  );
}

function extractGuideTargets(data: GetGuideEnvironmentQuery | undefined) {
  return (data?.observation?.targetEnvironment.guideEnvironment.guideTargets ?? []).reduce<
    Record<'oiwfs' | 'pwfs1' | 'pwfs2', TargetInput[]>
  >(
    (acc, t) => {
      const { name: band, value: magnitude } = extractMagnitude(t.sourceProfile as SourceProfile);
      const auxTarget: Omit<TargetInput, 'type'> = {
        name: t.name,
        epoch: t.sidereal?.epoch,
        coord1:
          typeof t.sidereal?.ra.degrees === 'string' ? parseFloat(t.sidereal?.ra.degrees) : t.sidereal?.ra.degrees,
        coord2:
          typeof t.sidereal?.dec.degrees === 'string' ? parseFloat(t.sidereal?.dec.degrees) : t.sidereal?.dec.degrees,
        magnitude: magnitude,
        band: band,
      };
      if (t.probe.endsWith('OIWFS')) {
        acc.oiwfs.push({ ...auxTarget, type: 'OIWFS' });
      } else if (t.probe === 'PWFS_1') {
        acc.pwfs1.push({ ...auxTarget, type: 'PWFS1' });
      } else if (t.probe === 'PWFS_2') {
        acc.pwfs2.push({ ...auxTarget, type: 'PWFS2' });
      } else {
        console.warn('Unknown guide target:', t);
      }
      return acc;
    },
    { oiwfs: [], pwfs1: [], pwfs2: [] },
  );
}

function extractCentralWavelength(
  instrument: Instrument | undefined | null,
  data: GetCentralWavelengthQuery | undefined,
) {
  if (!instrument) return undefined;

  const config = data?.observation?.execution.config;
  if (!config) return undefined;

  // TODO: Add other instruments when odb supports them
  let instrumentName: keyof typeof config;
  switch (instrument) {
    case 'FLAMINGOS2':
      instrumentName = 'flamingos2';
      break;
    case 'GMOS_NORTH':
      instrumentName = 'gmosNorth';
      break;
    case 'GMOS_SOUTH':
      instrumentName = 'gmosSouth';
      break;
    default:
      return undefined;
  }

  const instrumentConfig = config[instrumentName] as
    | GmosNorthExecutionConfig
    | GmosSouthExecutionConfig
    | Flamingos2ExecutionConfig;
  if (!instrumentConfig) return undefined;
  return instrumentConfig.acquisition?.nextAtom.steps[0]?.instrumentConfig.centralWavelength?.nanometers;
}

function firstIfOnlyOne<T>(arr: T[] | undefined): T | undefined {
  return arr?.length === 1 ? arr[0] : undefined;
}
