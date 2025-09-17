import './Modals.css';

import { About } from './About';
import { Catalog } from './Catalog/Catalog';
import { Instrument } from './Instrument';
import { OdbImport } from './OdbImport/OdbImport';
import { SlewFlags } from './SlewFlags';
import { Target } from './Target';

export function Modals() {
  return (
    <>
      <OdbImport />
      <Catalog />
      <SlewFlags />
      <Target />
      <Instrument />
      <About />
    </>
  );
}
