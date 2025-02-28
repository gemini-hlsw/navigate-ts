import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { Modals } from '@Contexts/Variables/Modals/Modals';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { useThemeValue } from './components/atoms/theme';
import Home from './components/Layout/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Token from './components/Token/Token';
import { VersionManager } from './components/VersionManager/VersionManager';
import { ToastProvider } from './Helpers/toast';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [{ index: true, element: <Home /> }] },
  { path: '/login', element: <Login /> },
  { path: '/token', element: <Token /> },
]);

export function App({ client }: { client: ApolloClient<NormalizedCacheObject> }) {
  const theme = useThemeValue();
  // Re-render on theme change
  useEffect(() => {
    document.body.classList.value = theme;
  }, [theme]);

  return (
    <ApolloProvider client={client}>
      <ToastProvider>
        <Modals />
        <RouterProvider router={router} />
        <VersionManager />
      </ToastProvider>
    </ApolloProvider>
  );
}
