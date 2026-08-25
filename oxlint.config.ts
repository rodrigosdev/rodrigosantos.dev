import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: [
    'typescript',
    'eslint',
    'unicorn',
    'oxc',
    'react',
    'nextjs',
    'promise',
    'jsx-a11y',
    'jsdoc',
    'import',
  ],
  options: {
    typeAware: true,
    typeCheck: true,
    maxWarnings: 10,
  },
  categories: {
    correctness: 'error',
  },
  env: {
    builtin: true,
  },
  ignorePatterns: [
    '.next/**',
    'dist/**',
    'node_modules/**',
    'public/**',
    '.vercel/**',
    'next-env.d.ts',
  ],
});
