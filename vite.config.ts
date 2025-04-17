/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { execSync } from 'child_process';
import path from 'path';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

import pkgJson from './package.json';

const version = (process.env.GITHUB_REF_NAME || 'v' + pkgJson.version).trim();
const commitHash = (process.env.GITHUB_SHA || execSync('git rev-parse --short HEAD').toString()).trim().slice(0, 7);

const buildTime = new Date();
function formatDate(date: Date) {
  const years = date.getFullYear();
  // Months are 0-indexed
  const months = date.getMonth() + 1;
  const days = date.getDate();
  return `${years}${months.toString().padStart(2, '0')}${days.toString().padStart(2, '0')}`;
}
const frontendVersion = `${version}+${formatDate(buildTime)}.${commitHash}`;

/**
 * Adds a 'version.txt' file with the current version to the build output
 */
const buildVersionFile: Plugin = {
  name: 'build-version-file',
  apply: 'build',
  buildStart() {
    this.emitFile({
      type: 'asset',
      fileName: 'version.txt',
      name: 'version.txt',
      source: frontendVersion,
    });
  },
};

function fixCssRoot() {
  return {
    postcssPlugin: 'postcss-fix-nested-root',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Once(root: any) {
      root.walkRules((rule: { selector: string }) => {
        if (rule.selector.includes(' :root')) {
          rule.selector = rule.selector.replace(' :root', '');
        }
      });
    },
  };
}
fixCssRoot.postcss = true;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  define: {
    'globalThis.__DEV__': JSON.stringify(mode !== 'production'),
    'import.meta.env.FRONTEND_VERSION': JSON.stringify(frontendVersion),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Contexts': path.resolve(__dirname, './src/components/Contexts'),
      '@Telescope': path.resolve(__dirname, './src/components/Panels/Telescope'),
      '@WavefrontSensors': path.resolve(__dirname, './src/components/Panels/WavefrontSensors'),
      '@Guider': path.resolve(__dirname, './src/components/Panels/Guider'),
      '@Shared': path.resolve(__dirname, './src/components/Shared'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@gql': path.resolve(__dirname, './src/gql'),
    },
  },
  build: {
    outDir: 'dist/navigate-ui',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('primereact')) return 'prime';
        },
      },
    },
  },
  server: {
    allowedHosts: ['localhost', '.lucuma.xyz'],
    host: '0.0.0.0',
    proxy: {
      '^/navigate/graphql': {
        target: 'http://navigate.lucuma.xyz:9070',
        changeOrigin: true,
      },
      '^/db': {
        target: 'http://navigate.lucuma.xyz:4000',
        changeOrigin: true,
      },
      '^/odb': {
        target: 'https://lucuma-postgres-odb-dev.herokuapp.com',
        changeOrigin: true,
      },
      '^/navigate/ws': {
        target: 'ws://localhost:9070',
        changeOrigin: true,
        ws: true,
      },
    },
  },
  css: {
    postcss: {
      plugins: [fixCssRoot()],
    },
  },
  plugins: [react({}), mkcert({ hosts: ['localhost', 'local.lucuma.xyz', 'navigate.lucuma.xyz'] }), buildVersionFile],
  test: {
    globals: true,
    setupFiles: ['vitest-browser-react'],
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        {
          browser: 'chromium',
          name: 'chromium',
        },
      ],
    },
  },
}));
