import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export function PWFS1({ disabled }: { disabled: boolean }) {
  return (
    <div className="pwfs">
      <span className="label">Filter</span>
      <span>Red</span>
      <Dropdown
        disabled={disabled}
        value={'Red'}
        options={['Red', 'Blue']}
        onChange={(e) => console.log(e.value)}
        placeholder="Select filter"
      />
      <Button label="Set" />
      <span className="label">Field stop</span>
      <span>10.0</span>
      <Dropdown
        disabled={disabled}
        value={'10.0'}
        options={['10.0', '20.0']}
        onChange={(e) => console.log(e.value)}
        placeholder="Select stop"
      />
      <Button label="Set" />
    </div>
  );
}
