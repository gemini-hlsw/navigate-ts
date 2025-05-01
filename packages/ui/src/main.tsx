import './styles/main.scss';
import './gql/dev-messages';

import { createClient } from '@gql/ApolloConfigs';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { environment } from './Helpers/environment';

const root = createRoot(document.getElementById('root')!);

const client = createClient(environment);

root.render(
  <StrictMode>
    <App client={client} />
  </StrictMode>,
);
