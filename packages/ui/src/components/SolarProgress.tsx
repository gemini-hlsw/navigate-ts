import './SolarProgress.css';

/**
 * Spinning Solar System progress.
 *
 * Copied from lucuma-ui
 */
export function SolarProgress() {
  return (
    <div className="solar-system">
      <div className="mars-orbit orbit">
        <div className="planet mars"></div>
        <div className="earth-orbit orbit">
          <div className="planet earth"></div>
          <div className="venus-orbit orbit">
            <div className="planet venus"></div>
            <div className="mercury-orbit orbit">
              <div className="planet mercury"></div>
              <div className="sun"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
