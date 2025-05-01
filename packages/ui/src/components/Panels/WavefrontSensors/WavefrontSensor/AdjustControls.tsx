import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';

export default function AdjustControls() {
  return (
    <div className="controls">
      <span style={{ textAlign: 'center', alignSelf: 'center', gridArea: 'g1' }}>Exp</span>
      <Dropdown style={{ gridArea: 'g2' }} value={2} options={[{ label: 'a', value: 'a' }]} />
      <span style={{ textAlign: 'center', alignSelf: 'center', gridArea: 'g3' }}>Save</span>
      <InputSwitch style={{ gridArea: 'g4' }} checked={true} />
      {/* Next one is a toggle button play / stop */}
      <Button style={{ gridArea: 'g5' }} label="Stop" />
      <Button style={{ gridArea: 'g6' }} label="Take Sky" />
    </div>
  );
}
