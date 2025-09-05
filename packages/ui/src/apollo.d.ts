// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultContext } from '@apollo/client';

// Extend the DefaultContext interface to include extra properties
declare module '@apollo/client' {
  interface DefaultContext {
    error?: {
      /**
       * Toast title to display when an error occurs
       *
       * @default 'GraphQL error'
       */
      summary: string;
      /**
       * Toast message to display when an error occurs
       *
       * @default the error message from the error object
       */
      detail?: string;
    };

    clientName?: 'odb' | 'navigateConfigs';
    headers?: Record<string, string>;
  }
}
