import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { color, spacing, text } from '~/app/global-tokens.stylex';
import { utils } from '~/styles/utils';

type BlogFrameProps = {
  backHref: '/' | '/blog';
  backLabel: string;
  children: ReactNode;
};

const Chevron = () => (
  <svg
    aria-hidden
    fill="none"
    height={14}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.75}
    viewBox="0 0 16 16"
    width={14}
  >
    <path d="M10 3.5 5.5 8 10 12.5" />
  </svg>
);

const BackLink = ({ href, label }: { href: '/' | '/blog'; label: string }) => (
  <Link href={href} {...stylex.props(styles.back, utils.focusText)}>
    <Chevron />
    {label}
  </Link>
);

const BlogFrame = ({ backHref, backLabel, children }: BlogFrameProps) => {
  return (
    <main {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.shell)}>
        <aside {...stylex.props(styles.aside)}>
          <BackLink href={backHref} label={backLabel} />
        </aside>
        <p {...stylex.props(styles.mobileNav)}>
          <BackLink href={backHref} label={backLabel} />
        </p>
        <div {...stylex.props(styles.content)}>{children}</div>
      </div>
    </main>
  );
};

const DESKTOP = '@media (min-width: 64rem)';

const styles = stylex.create({
  main: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: spacing.xxxl,
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
    paddingTop: spacing.xxxl,
    width: '100%',
  },
  shell: {
    position: 'relative',
    maxWidth: '36rem',
    width: '100%',
  },
  aside: {
    display: {
      [DESKTOP]: 'block',
      default: 'none',
    },
    position: 'absolute',
    paddingRight: spacing.lg,
    right: '100%',
    top: 0,
    width: 'max-content',
  },
  mobileNav: {
    display: {
      [DESKTOP]: 'none',
      default: 'block',
    },
    marginBottom: spacing.md,
  },
  content: {
    width: '100%',
  },
  back: {
    gap: spacing.xs,
    textDecoration: 'none',
    alignItems: 'center',
    color: {
      default: color.textMuted,
      ':hover': {
        default: null,
        '@media (hover: hover)': color.text,
      },
    },
    display: 'inline-flex',
    fontSize: text.sm,
    transitionDuration: '150ms',
    transitionProperty: 'color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    marginBottom: -12,
    marginTop: -12,
    paddingBottom: 12,
    paddingTop: 12,
  },
});

export { BlogFrame };
