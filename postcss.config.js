import babelConfig from './babel.config.js';

const config = {
  plugins: {
    '@stylexjs/postcss-plugin': {
      babelConfig: {
        babelrc: false,
        parserOpts: { plugins: ['typescript', 'jsx'] },
        plugins: babelConfig.plugins,
      },
      include: ['app/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'],
      useCSSLayers: true,
    },
  },
};

export default config;
