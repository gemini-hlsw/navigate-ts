import { useSubscription } from '@apollo/client/react';
import { useState } from 'react';

import { graphql } from './gen';
import type { LogMessage } from './gen/graphql';

type LogMessageWithId = LogMessage & { id: string };

const LOGS_SUBSCRIPTION = graphql(`
  subscription logMessage {
    logMessage {
      timestamp
      level
      thread
      message
    }
  }
`);

export function useLogMessages() {
  const MAX_LOG_DISPLAY = 30;
  const [messages, setMessages] = useState<LogMessageWithId[]>([]);

  const sub = useSubscription(LOGS_SUBSCRIPTION, {
    onData({ data }) {
      if (data.data?.logMessage) {
        const msg = data.data.logMessage;

        const msgWithId = { id: `${msg.level}${msg.timestamp}${msg.thread}${msg.message}`, ...msg };

        // Only add new messages. On reconnect we get the last 30 messages
        if (!messages.some((m) => m.id === msgWithId.id)) {
          if (messages.length >= MAX_LOG_DISPLAY) {
            setMessages([msgWithId, ...messages.splice(0, MAX_LOG_DISPLAY - 1)]);
          } else {
            setMessages([msgWithId, ...messages]);
          }
        }
      }
    },
  });

  return { ...sub, data: messages };
}
