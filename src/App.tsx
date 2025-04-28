import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { Authentication } from '@Contexts/Auth/Authentication';
import { Modals } from '@Contexts/Variables/Modals/Modals';
import { Provider as AtomProvider } from 'jotai';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { store } from './components/atoms/store';
import { useThemeValue } from './components/atoms/theme';
import Home from './components/Layout/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import { VersionManager } from './components/VersionManager/VersionManager';
import { ToastProvider } from './Helpers/toast';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [{ index: true, element: <Home /> }] },
  { path: '/login', element: <Login /> },
]);

export function App({ client }: { client: ApolloClient<NormalizedCacheObject> }) {
  const theme = useThemeValue();
  // Re-render on theme change
  useEffect(() => {
    document.body.classList.value = theme;
  }, [theme]);

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
