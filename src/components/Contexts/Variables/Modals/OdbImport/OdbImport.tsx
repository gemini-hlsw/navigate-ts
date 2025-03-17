import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';
import { useRotator, useUpdateRotator } from '@gql/configs/Rotator';
import { useRemoveAndCreateBaseTargets, useRemoveAndCreateWfsTargets } from '@gql/configs/Target';
import type { GetCentralWavelengthQuery, GetGuideEnvironmentQuery } from '@gql/odb/gen/graphql';
import { useGetCentralWavelength, useGetGuideEnvironment, useGetObservationsByState } from '@gql/odb/Observation';
import { dateToLocalObservingNight } from 'lucuma-core';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';

import { useCanEdit } from '@/components/atoms/auth';
import { useOdbVisible } from '@/components/atoms/odb';
import { useToast } from '@/Helpers/toast';
import type { ConfigurationType, OdbObservationType, SiteType, TargetInput } from '@/types';

import { ObservationTable } from './ObservationTable';

export function OdbImport() {
  const canEdit = useCanEdit();
  const configuration = useConfiguration().data?.configuration;
  const toast = useToast();
  const [odbVisible, setOdbVisible] = useOdbVisible();
  const [selectedObservation, setSelectedObservation] = useState<OdbObservationType | null>(null);
  const [getReadyObservations, { loading, data }] = useGetObservationsByState();
  const [getGuideEnvironment, { loading: getGuideEnvironmentLoading }] = useGetGuideEnvironment();
  const [getCentralWavelength, { loading: getCentralWavelengthLoading }] = useGetCentralWavelength();
  const [removeAndCreateBaseTargets, { loading: removeCreateLoading }] = useRemoveAndCreateBaseTargets();
  const [updateConfiguration, { loading: updateConfigLoading }] = useUpdateConfiguration();
  const [updateRotator, { loading: updateRotatorLoading }] = useUpdateRotator();
  const [removeAndCreateWfsTargets, { loading: wfsTargetsLoading }] = useRemoveAndCreateWfsTargets();

  const observingNight = dateToLocalObservingNight(new Date());

  const rotator = useRotator().data?.rotator;

  const updateLoading =
    updateConfigLoading ||
    removeCreateLoading ||
    updateRotatorLoading ||
    getGuideEnvironmentLoading ||
    getCentralWavelengthLoading ||
    wfsTargetsLoading;

  function updateObs() {
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
        setOdbVisible(false);

        // Observation selected
        // First try to get a central wavelength associated to the observation
        const obsWithWavelength = await getCentralWavelength({
          variables: { obsId: selectedObservation.id },
        });

        const wavelength = extractCentralWavelength(configuration?.site, obsWithWavelength.data);

        // Second create the observation base target (SCIENCE)
        await removeAndCreateBaseTargets({
          variables: {
            targets: [
              {
                id: selectedObservation.targetEnvironment?.firstScienceTarget?.id,
                name: selectedObservation.targetEnvironment?.firstScienceTarget?.name,
                coord1: selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.ra.degrees,
                coord2: selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.dec.degrees,
                epoch: selectedObservation.targetEnvironment?.firstScienceTarget?.sidereal?.epoch,
                type: 'SCIENCE',
                wavelength: wavelength,
              },
            ],
          },
          async onCompleted(t) {
            await updateConfiguration({
              variables: {
                pk: configuration?.pk ?? 1,
                selectedTarget: t.removeAndCreateBaseTargets[0].pk,
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
                angle: guideEnv.data?.observation?.targetEnvironment.guideEnvironment.posAngle.degrees ?? 0,
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
      },
    });
  }

  useEffect(() => {
    if (configuration?.site && odbVisible) {
      void getReadyObservations({
        variables: {
          date: observingNight,
          site: configuration.site,
          states: ['READY', 'ONGOING'],
        },
        fetchPolicy: 'no-cache',
      });
    }
  }, [configuration?.site, getReadyObservations, observingNight, odbVisible]);

  const header = (
    <div className="header-item">
      <span>
        Observing Night {observingNight} @ {configuration?.site}
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
      const auxTarget: Omit<TargetInput, 'type'> = {
        name: t.name,
        epoch: t.sidereal?.epoch,
        coord1: t.sidereal?.ra.degrees,
        coord2: t.sidereal?.dec.degrees,
      };
      if (t.probe === 'GMOS_OIWFS') {
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

function extractCentralWavelength(site: SiteType | undefined, data: GetCentralWavelengthQuery | undefined) {
  return site === 'GN'
    ? data?.observation?.execution.config?.gmosNorth?.acquisition?.nextAtom.steps[0].instrumentConfig.centralWavelength
        ?.nanometers
    : data?.observation?.execution.config?.gmosSouth?.acquisition?.nextAtom.steps[0].instrumentConfig.centralWavelength
        ?.nanometers;
}

function firstIfOnlyOne<T>(arr: T[] | undefined): T | undefined {
  return arr?.length === 1 ? arr[0] : undefined;
}
