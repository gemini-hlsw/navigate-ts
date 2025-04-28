import environments from '../assets/environments.json';

export type Environment = (typeof environments)[number];

const getEnvironmentForHost = (host: string) => environments.find((e) => e.hostName === host);

function getEnvironment(): Environment {
  const env = getEnvironmentForHost(window.location.hostname) ?? getEnvironmentForHost('*')!;

  console.log(`Loaded ${env.environment} environment`, env);
  return env;
}

export const environment = getEnvironment();
