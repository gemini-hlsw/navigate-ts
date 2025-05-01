import { Tooltip } from 'primereact/tooltip';

import { useWsIsConnectedValue } from '@/components/atoms/connection';

export function ConnectionLost() {
  const wsIsConnected = useWsIsConnectedValue();

  if (wsIsConnected) {
    return null;
  }

  return (
    <>
      <Tooltip target="#connection-lost" />
      <span
        id="connection-lost"
        className="connection-lost"
        data-pr-tooltip="Connection to server lost. Wait or reload the page. If the problem persists a server restart may be needed."
        data-pr-position="bottom"
      />
    </>
  );
}
