import * as stylex from '@stylexjs/stylex';
import type { Metadata } from 'next';

import { globalTokens as $ } from '~/app/global-tokens.stylex';

import './app.css';

export const metadata: Metadata = {
  title: 'Rodrigo Santos',
  description: '...',
};

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html {...stylex.props(styles.html, styles.reset)} lang="en">
      <body {...stylex.props(styles.reset, styles.body)}>{children}</body>
    </html>
  );
};

const styles = stylex.create({
  html: {
    colorScheme: 'light dark',
  },
  reset: {
    minHeight: '100%',
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: $.surfaceBg,
  },
});

export default RootLayout;
