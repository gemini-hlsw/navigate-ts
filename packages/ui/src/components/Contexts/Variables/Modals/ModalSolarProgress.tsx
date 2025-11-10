import { SolarProgress } from '@/components/SolarProgress';

/**
 * Progress spinner intended for sizing inside a loading modal
 */
export function ModalSolarProgress() {
  return (
    <div className="modal-solar-progress">
      <SolarProgress />
    </div>
  );
}
