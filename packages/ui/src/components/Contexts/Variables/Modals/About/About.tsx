import { Dialog } from 'primereact/dialog';
import { lazy, startTransition, Suspense } from 'react';

import { useAboutVisible } from '@/components/atoms/about';

import { ModalSolarProgress } from '../ModalSolarProgress';

const AboutContent = lazy(() => import('../ModalContent').then((module) => ({ default: module.AboutContent })));

export function About() {
  const [aboutVisible, setAboutVisible] = useAboutVisible();

  const onHide = () => startTransition(() => setAboutVisible(false));

  return (
    <Dialog header="About Navigate" visible={aboutVisible} modal onHide={onHide}>
      <Suspense fallback={<ModalSolarProgress />}>
        <AboutContent />
      </Suspense>
    </Dialog>
  );
}
