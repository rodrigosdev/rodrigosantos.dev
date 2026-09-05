export const SITE_URL = 'https://rodrigosantos.dev';
export const SITE_NAME = 'Rodrigo Santos';
export const SITE_EMAIL = 'hello@rodrigosantos.dev';
export const SITE_GITHUB_URL = 'https://github.com/rodrigosdev';
export const SITE_LINKEDIN_URL = 'https://www.linkedin.com/in/rrcssantos/';
export const SITE_X_URL = 'https://x.com/rrcssantos';

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
      sameAs: [SITE_GITHUB_URL, SITE_LINKEDIN_URL, SITE_X_URL],
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
