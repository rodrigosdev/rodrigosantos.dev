import * as stylex from '@stylexjs/stylex';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rodrigo Santos',
  description: '...',
};

const DARK = '@media (prefers-color-scheme: dark)' as const;

const styles = stylex.create({
  html: {
    colorScheme: {
      [DARK]: 'dark',
      default: 'light',
    },
    height: '100%',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  body: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    backgroundColor: {
      [DARK]: '#0a0a0a',
      default: '#ffffff',
    },
    color: {
      [DARK]: '#ededed',
      default: '#171717',
    },
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, Helvetica, sans-serif',
    maxWidth: '100vw',
    minHeight: '100%',
    overflowX: 'hidden',
  },
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
  const htmlProps = stylex.props(styles.html);
  const bodyProps = stylex.props(styles.body);
  const fontClassName = `${geistSans.variable} ${geistMono.variable}`;
  const htmlClassName =
    htmlProps.className == null ? fontClassName : `${fontClassName} ${htmlProps.className}`;

  return (
    <html lang="en" {...htmlProps} className={htmlClassName}>
      <body {...bodyProps}>{children}</body>
    </html>
  );
}
