import { Dialog } from 'primereact/dialog';
import { lazy, startTransition, Suspense } from 'react';

import { useSlewVisible } from '@/components/atoms/slew';

import { ModalSolarProgress } from '../ModalSolarProgress';

const SlewFlagsContent = lazy(() => import('../ModalContent').then((module) => ({ default: module.SlewFlagsContent })));

export function SlewFlags() {
  const [slewVisible, setSlewVisible] = useSlewVisible();

  const onHide = () => startTransition(() => setSlewVisible(false));

  return (
    <Dialog header="Set slew flags" visible={slewVisible} modal onHide={onHide}>
      <Suspense fallback={<ModalSolarProgress />}>
        <SlewFlagsContent />
      </Suspense>
    </Dialog>
  );
}
