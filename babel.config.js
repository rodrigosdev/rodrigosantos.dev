import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        aliases: { '~/*': [path.join(dirname, '*')] },
        dev: process.env.NODE_ENV !== 'production',
        enableInlinedConditionalMerge: true,
        runtimeInjection: false,
        treeshakeCompensation: true,
        unstable_moduleResolution: { type: 'commonJS' },
      },
    ],
  ],
  presets: ['next/babel'],
};

export const plugins = config.plugins;
export const presets = config.presets;
export default config;
