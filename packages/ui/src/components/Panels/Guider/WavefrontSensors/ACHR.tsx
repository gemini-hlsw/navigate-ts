import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export function ACHR({ disabled }: { disabled: boolean }) {
  return (
    <div className="achr">
      <span className="label">Lens</span>
      <span>In</span>
      <Dropdown
        disabled={disabled}
        value={'In'}
        options={['In', 'Out']}
        onChange={(e) => console.log(e.value)}
        placeholder="Select lens pos"
      />
      <Button label="Set" />
      <span className="label">Filter</span>
      <span>R-red2</span>
      <Dropdown
        disabled={disabled}
        value={'R-red2'}
        options={['R-red2', '???']}
        onChange={(e) => console.log(e.value)}
        placeholder="Select filter"
      />
      <Button label="Set" />
      <span className="label">Neutral density</span>
      <span>Open</span>
      <Dropdown
        disabled={disabled}
        value={'Open'}
        options={['Open', '???']}
        onChange={(e) => console.log(e.value)}
        placeholder="Select state"
      />
      <Button label="Set" />
      <span className="label">ROI</span>
      <span>200x200</span>
      <Dropdown
        disabled={disabled}
        value={'200x200'}
        options={['200x200', '???']}
        onChange={(e) => console.log(e.value)}
        placeholder="Select ROI"
      />
      <Button label="Set" />
    </div>
  );
}
