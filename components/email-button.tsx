'use client';

import * as stylex from '@stylexjs/stylex';
import { useEffect, useState } from 'react';

import { globalTokens as $, spacing } from '~/app/global-tokens.stylex';
import { SITE_EMAIL } from '~/app/site';
import { TextLink } from '~/components/text-link';

const reveal = stylex.keyframes({
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const IconClipboard = () => (
  <svg
    aria-hidden
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...stylex.props(styles.icon)}
  >
    <path
      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, 1250);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isCopied]);

  const copyText = () => {
    void navigator.clipboard.writeText(SITE_EMAIL).then(() => {
      setIsCopied(true);
    });
  };

  return (
    <div {...stylex.props(styles.root)}>
      {isCopied ? (
        <div {...stylex.props(styles.tooltipAnchor)}>
          <div aria-live="polite" {...stylex.props(styles.tooltip)}>
            <IconClipboard />
            <p>Copied to clipboard</p>
          </div>
        </div>
      ) : null}
      <TextLink as="button" onClick={copyText} style={styles.link} title="Email" type="button" />
    </div>
  );
};

const styles = stylex.create({
  root: {
    position: 'relative',
  },
  tooltipAnchor: {
    pointerEvents: 'none',
    position: 'absolute',
    transform: 'translateX(-50%)',
    left: {
      default: '-50%',
      '@media (min-width: 640px)': '50%',
    },
    top: `calc(${spacing.lg} * -1)`,
  },
  tooltip: {
    borderColor: $.border,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    gap: spacing.xxxs,
    alignItems: 'center',
    animationDuration: '0.25s',
    animationFillMode: 'forwards',
    animationName: {
      default: reveal,
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
    animationTimingFunction: 'cubic-bezier(0.3, 0, 0, 1)',
    backgroundColor: $.surfaceBgDepth,
    boxShadow: `0 1px 2px color-mix(in oklab, ${$.base1000} 6%, transparent)`,
    color: $.textStrong,
    display: 'flex',
    flexShrink: 0,
    opacity: {
      default: 0,
      '@media (prefers-reduced-motion: reduce)': 1,
    },
    transform: {
      default: `translateY(${spacing.xxs})`,
      '@media (prefers-reduced-motion: reduce)': 'translateY(0)',
    },
    whiteSpace: 'nowrap',
    paddingBottom: spacing.xxxs,
    paddingLeft: spacing.xxs,
    paddingRight: spacing.xs,
    paddingTop: spacing.xxxs,
    width: 'max-content',
  },
  icon: {
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  link: {
    paddingBottom: spacing.xxxs,
    paddingLeft: spacing.xs,
    paddingRight: spacing.xs,
    paddingTop: spacing.xxxs,
  },
});

export { EmailButton };
