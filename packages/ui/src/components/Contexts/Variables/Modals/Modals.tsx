import './Modals.css';

import { About } from './About/About';
import { CalParams } from './CalParams/CalParams';
import { CalParamsHistory } from './CalParams/CalParamsHistory';
import { Catalog } from './Catalog/Catalog';
import { Instrument } from './Instrument/Instrument';
import { OdbImport } from './OdbImport/OdbImport';
import { SlewFlags } from './SlewFlags/SlewFlags';
import { Target } from './Target/Target';

export function Modals() {
  return (
    <>
      <OdbImport />
      <Catalog />
      <SlewFlags />
      <Target />
      <Instrument />
      <About />
      <CalParams />
      <CalParamsHistory />
    </>
  );
}
