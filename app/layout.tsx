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
  return (
    <html
      {...stylex.props(
        styles.html,
        styles.fonts(
          GeistSans.style.fontFamily,
          GeistMono.style.fontFamily,
          GeistPixelSquare.style.fontFamily,
        ),
      )}
      lang="en"
    >
      <body {...stylex.props(styles.body)}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

const styles = stylex.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: $.fontSans,
    minHeight: '100vh',
  },
  fonts: (sans: string, mono: string, pixel: string) => ({
    '--font-geist-mono': mono,
    '--font-geist-pixel-square': pixel,
    '--font-geist-sans': sans,
  }),
  html: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    backgroundColor: $.surfaceBg,
    color: $.textStrong,
    colorScheme: 'light dark',
    minHeight: '100%',
    '::selection': {
      backgroundColor: $.selection,
      color: $.textStrong,
    },
  },
});

export default RootLayout;
