/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('primereact')) return 'prime';
        },
      },
    },
  },
  server: {
    allowedHosts: ['localhost', '.lucuma.xyz', '.gemini.edu'],
    host: '0.0.0.0',
    proxy: {
      '^/navigate/graphql': {
        target: 'http://navigate.gemini.edu:9090',
        changeOrigin: true,
      },
      '^/db': {
        target: 'http://navigate.lucuma.xyz:4000',
        changeOrigin: true,
      },
      '^/navigate/ws': {
        target: 'ws://localhost:9090',
        changeOrigin: true,
        ws: true,
      },
    },
    hmr: {
      overlay: mode === 'development',
    },
  },
  css: {
    postcss: {
      plugins: [fixCssRoot()],
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    mode === 'development' &&
      mkcert({ hosts: ['localhost', 'local.lucuma.xyz', 'navigate.lucuma.xyz', 'navigate.gemini.edu'] }),
    mode === 'production' && buildVersionFile,
  ],
  test: {
    clearMocks: true,
    globals: true,
    setupFiles: ['src/gql/dev-messages.ts', 'src/test/setup.ts', 'src/test/disable-animations.css'],
    browser: {
      enabled: true,
      provider: playwright({
        contextOptions: {
          // Disable animations in tests to speed them up
          reducedMotion: 'reduce',
        },
      }),
      instances: [
        {
          browser: 'chromium',
          name: 'chromium',
          retry: process.env.CI ? 2 : 0,
          viewport: { width: 834, height: 1112 },
        },
      ],
    },
  },
}));
