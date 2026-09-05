import * as stylex from '@stylexjs/stylex';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare } from 'geist/font/pixel';
import { GeistSans } from 'geist/font/sans';
import type { Metadata, Viewport } from 'next';

import { color, tokens } from '~/app/global-tokens.stylex';
import { serializeJsonLd, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '~/app/site';
import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

import './app.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rrcssantos',
    creator: '@rrcssantos',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd() }}
        />
        <Header />
        {children}
        <Footer />
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
    backgroundColor: color.bg,
    color: color.text,
    colorScheme: 'light dark',
    fontFamily: tokens.fontSans,
    transitionDuration: '150ms',
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    minHeight: '100%',
    '::selection': {
      backgroundColor: `color-mix(in oklab, ${color.selection} 50%, transparent)`,
      color: color.text,
    },
  },
});

export default RootLayout;
