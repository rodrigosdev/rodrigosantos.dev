import * as stylex from '@stylexjs/stylex';
import { cacheLife } from 'next/cache';

import { globalTokens as $, spacing, text } from '~/app/global-tokens.stylex';
import { SITE_GITHUB_URL, SITE_LINKEDIN_URL, SITE_X_URL } from '~/app/site';
import { EmailButton } from '~/components/email-button';
import { TextLink } from '~/components/text-link';

const Footer = async () => {
  'use cache';
  cacheLife('days');
  const currentYear = new Date().getFullYear();

  return (
    <footer {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.inner)}>
        <p {...stylex.props(styles.copyright)}>© {currentYear}</p>
        <nav {...stylex.props(styles.nav)}>
          <TextLink external href={SITE_X_URL} style={styles.link} title="X" />
          <TextLink external href={SITE_GITHUB_URL} style={styles.link} title="Github" />
          <TextLink external href={SITE_LINKEDIN_URL} style={styles.link} title="LinkedIn" />
          <EmailButton />
        </nav>
      </div>
    </footer>
  );
};

const styles = stylex.create({
  footer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: spacing.xxl,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    paddingTop: spacing.xxl,
    width: '100%',
  },
  inner: {
    alignItems: 'center',
    color: $.textSoft,
    display: 'flex',
    flexWrap: 'wrap-reverse',
    fontSize: text.sm,
    justifyContent: 'space-between',
    maxWidth: $.containerWidth,
    width: '100%',
  },
  copyright: {
    userSelect: 'none',
  },
  nav: {
    gap: spacing.xxxs,
    display: 'flex',
    marginRight: `calc(${spacing.xs} * -1)`,
  },
  link: {
    paddingBottom: spacing.xxxs,
    paddingLeft: spacing.xs,
    paddingRight: spacing.xs,
    paddingTop: spacing.xxxs,
  },
});

export { Footer };
