import { defineConfig } from 'oxfmt';

export default defineConfig({
  singleQuote: true,
  arrowParens: 'always',
  proseWrap: 'preserve',
  embeddedLanguageFormatting: 'auto',
  sortPackageJson: true,

  sortImports: {
    groups: [
      'builtin',
      'external',
      ['internal', 'subpath'],
      ['parent', 'sibling', 'index'],
      'style',
      'unknown',
    ],
    internalPattern: ['~/'],
    ignoreCase: true,
    sortSideEffects: true,
  },

  ignorePatterns: [
    'node_modules/**',
    '.next/**',
    'dist/**',
    'public/**',
    '.vercel/**',
    'pnpm-lock.yaml',
  ],
});
