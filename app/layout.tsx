import * as stylex from '@stylexjs/stylex';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare } from 'geist/font/pixel';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import { globalTokens as $ } from '~/app/global-tokens.stylex';

import './app.css';

export const metadata: Metadata = {
  title: 'Rodrigo Santos',
  description: '...',
};

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  const htmlProps = stylex.props(styles.html, styles.reset);
  const fontVariables = [GeistSans.variable, GeistMono.variable, GeistPixelSquare.variable].join(
    ' ',
  );

  return (
    <html
      {...htmlProps}
      className={
        htmlProps.className === undefined
          ? fontVariables
          : `${fontVariables} ${htmlProps.className}`
      }
      lang="en"
    >
      <body {...stylex.props(styles.reset, styles.body)}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

const styles = stylex.create({
  html: {
    colorScheme: 'light dark',
  },
  reset: {
    margin: 0,
    padding: 0,
    minHeight: '100%',
  },
  body: {
    backgroundColor: $.surfaceBg,
    fontFamily: $.fontSans,
  },
});

export default RootLayout;
