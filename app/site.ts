export const SITE_URL = 'https://rodrigosantos.dev';
export const SITE_NAME = 'Rodrigo Santos';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: 'AI Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Snyk',
        url: 'https://snyk.io',
      },
      sameAs: [
        'https://github.com/rodrigosdev',
        'https://www.linkedin.com/in/rrcssantos/',
        'https://x.com/rrcssantos',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
  ],
} as const;

export function serializeJsonLd(): string {
  return JSON.stringify(jsonLd).replaceAll('<', '\\u003c');
}
