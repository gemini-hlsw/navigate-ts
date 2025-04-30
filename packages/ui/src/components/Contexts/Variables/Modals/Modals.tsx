import './Modals.scss';

import { About } from './About';
import { Instrument } from './Instrument';
import { OdbImport } from './OdbImport/OdbImport';
import { SlewFlags } from './SlewFlags';
import { Target } from './Target';

export function Modals() {
  return (
    <>
      <OdbImport />
      <SlewFlags />
      <Target />
      <Instrument />
      <About />
    </>
  );
}
