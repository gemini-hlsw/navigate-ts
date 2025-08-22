import { ApolloProvider } from '@apollo/client/react';
import { Authentication } from '@Contexts/Auth/Authentication';
import { Modals } from '@Contexts/Variables/Modals/Modals';
import { client } from '@gql/ApolloConfigs';
import { useServerConfiguration } from '@gql/server/ServerConfiguration';
import { Provider as AtomProvider } from 'jotai';
import { Message } from 'primereact/message';
import { startTransition, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { serverConfigAtom } from './components/atoms/config';
import { store } from './components/atoms/store';
import { useThemeValue } from './components/atoms/theme';
import Home from './components/Layout/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import { SolarProgress } from './components/SolarProgress';
import { VersionManager } from './components/VersionManager/VersionManager';
import { ToastProvider } from './Helpers/toast';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [{ index: true, element: <Home /> }] },
  { path: '/login', element: <Login /> },
]);

export function App() {
  const theme = useThemeValue();
  // Re-render on theme change
  useEffect(() => {
    document.body.classList.value = theme;
  }, [theme]);

  const [loading, setLoading] = useState(true);
  const { data, error } = useServerConfiguration({ client });

  useEffect(() => {
    if (data?.serverConfiguration) {
      startTransition(() => {
        store.set(serverConfigAtom, data.serverConfiguration);
        setLoading(false);
      });
    }
  }, [data?.serverConfiguration]);

  if (error) {
    return (
      <div className="error-container">
        <Message
          text={
            <>
              <p>
                <b>Could not load server configuration.</b>
              </p>
              <p>{error.message}</p>
            </>
          }
          severity="error"
        />
      </div>
    );
  }

  if (loading) {
    return <SolarProgress />;
  }

  return (
    <AtomProvider store={store}>
      <ApolloProvider client={client}>
        <ToastProvider>
          <Authentication />
          <Modals />
          <RouterProvider router={router} />
          <VersionManager />
        </ToastProvider>
      </ApolloProvider>
    </AtomProvider>
  );
}
