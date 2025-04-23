import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';

if (import.meta.env.DEV) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
