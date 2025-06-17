// Apollo
import { ApolloClient, ApolloLink, defaultDataIdFromObject, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
// Subscription channel
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationTypeNode } from 'graphql/language';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { odbTokenAtom } from '@/components/atoms/auth';
import { wsIsConnectedAtom } from '@/components/atoms/connection';
import { store } from '@/components/atoms/store';
import type { Environment } from '@/Helpers/environment';
import { toastAtom } from '@/Helpers/toast';

/**
 * Converts a relative URI to an absolute URI based on the current window origin.
 */
const withAbsoluteUri = (uri: string, isWs = false) => {
  if (!uri.startsWith('/')) return uri;

  const newUri = window.location.origin + uri;
  return isWs ? newUri.replace(/^http/, 'ws') : newUri;
};

// Log errors to the console and show a toast
const errorLink = onError(({ operation, graphQLErrors, networkError }) => {
  const ctx = operation.getContext();
  // Extract either the context error message, or the first GraphQL error message
  const errorMessage = ctx.error?.detail ?? graphQLErrors?.[0]?.message?.trim();
  if (errorMessage) {
    store.get(toastAtom)?.show({
      severity: 'error',
      contentClassName: 'graphql-error-toast',
      summary: ctx.error?.summary ?? 'GraphQL error',
      detail: errorMessage,
      life: 10000,
    });
  }

  graphQLErrors?.forEach(({ message, locations, path }) => {
    console.warn(`[GraphQL error]`, message.trim(), { path, locations, ctx });
  });

  if (networkError) console.error(`[Network error]`, networkError);
});

export function createClient(env: Environment) {
  const navigateCommandServer = new HttpLink({ uri: withAbsoluteUri(env.navigateServerURI) });

  const navigateConfigs = new HttpLink({ uri: withAbsoluteUri(env.navigateConfigsURI) });

  const odbAuthLink = setContext((_, { headers }) => {
    const token = store.get(odbTokenAtom);
    if (!token) {
      store.get(toastAtom)?.show({
        severity: 'warn',
        summary: 'Login required',
        detail: 'Login before querying ODB',
      });
    }

    const prevHeaders = (headers ?? {}) as Record<string, string>;
    return {
      headers: token ? { ...prevHeaders, Authorization: `Bearer ${token}` } : prevHeaders,
    };
  });

  const odbLink = new HttpLink({ uri: withAbsoluteUri(env.odbURI) });

  const subscriptionClient = new SubscriptionClient(withAbsoluteUri(env.navigateServerWsURI, true), {
    reconnect: true,
  });

  // How long to wait until we assume the websocket is disconnected
  const disconnectTimeoutMs = 250;
  let wsIsConnectedTimer: NodeJS.Timeout | undefined;

  const setWebSocketConnected = () => {
    clearTimeout(wsIsConnectedTimer);
    store.set(wsIsConnectedAtom, true);
  };
  const setWebsocketDisconnected = () => {
    clearTimeout(wsIsConnectedTimer);
    wsIsConnectedTimer = setTimeout(() => store.set(wsIsConnectedAtom, false), disconnectTimeoutMs);
  };
  subscriptionClient.onConnected(setWebSocketConnected);
  subscriptionClient.onDisconnected(setWebsocketDisconnected);
  subscriptionClient.onReconnected(setWebSocketConnected);

  const wsLink = new WebSocketLink(subscriptionClient);

  return new ApolloClient({
    name: 'navigate-ui',
    link: ApolloLink.from([
      errorLink,
      ApolloLink.split(
        (operation) => operation.getContext().clientName === 'odb',
        odbAuthLink.concat(odbLink),
        ApolloLink.split(
          (operation) => operation.getContext().clientName === 'navigateConfigs',
          navigateConfigs,
          ApolloLink.split(
            ({ query }) => {
              const definition = getMainDefinition(query);
              return (
                definition.kind === Kind.OPERATION_DEFINITION && definition.operation === OperationTypeNode.SUBSCRIPTION
              );
            },
            wsLink,
            navigateCommandServer,
          ),
        ),
      ),
    ]),
    cache: new InMemoryCache({
      dataIdFromObject(responseObject) {
        // Configure primary-key fields for cache normalization to use 'pk' field
        if (
          !('id' in responseObject && responseObject.id !== null) &&
          'pk' in responseObject &&
          (typeof responseObject.pk === 'string' || typeof responseObject.pk === 'number')
        ) {
          return `${responseObject.__typename}:pk:${responseObject.pk}`;
        } else {
          return defaultDataIdFromObject(responseObject);
        }
      },
      // Configure primary-key fields for cache normalization
      typePolicies: {
        GuideAlarm: {
          keyFields: ['wfs'],
        },
        Instrument: {
          keyFields: ['name', 'wfs'],
        },
      },
    }),
  });
}
