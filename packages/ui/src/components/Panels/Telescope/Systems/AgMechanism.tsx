import { Button } from 'primereact/button';

export function AgMechanism({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="top-right">
      <div className="title">
        <span>AG Mechanisms</span>
      </div>
      <div className="ag-body under-construction">
        <span className="label">Science Fold</span>
        <Button disabled={!canEdit} label="Park" />
        <span className="label">AO Fold</span>
        <Button disabled={!canEdit} label="Park" />
        <span className="label">AC Pickoff</span>
        <Button disabled={!canEdit} label="Park" />
        <span></span>
        <Button disabled={!canEdit} label="Park All" />
      </div>
    </div>
  );
}
