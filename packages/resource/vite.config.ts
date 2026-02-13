import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [fixCssRoot()],
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
});
