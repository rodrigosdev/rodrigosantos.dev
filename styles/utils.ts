import * as stylex from '@stylexjs/stylex';

import { color, spacing, text, tokens } from '~/app/global-tokens.stylex';

export const utils = stylex.create({
  focusText: {
    borderRadius: 2,
    outline: 'none',
    boxShadow: {
      default: 'none',
      ':focus-visible': `0 0 0 2px ${color.bg}, 0 0 0 4px color-mix(in oklab, ${color.ink} 75%, transparent)`,
    },
  },
  h2: {
    textDecoration: 'none',
    color: color.text,
    fontFamily: tokens.fontPixel,
    fontSize: text.md,
    fontWeight: 500,
  },
  inner: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: tokens.container,
    width: '100%',
  },
  link: {
    borderStyle: 'none',
    borderWidth: 0,
    textDecoration: 'none',
    appearance: 'none',
    backgroundColor: 'transparent',
    color: 'inherit',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    textDecorationColor: {
      default: 'color-mix(in oklab, currentColor 30%, transparent)',
      ':hover': {
        default: null,
        '@media (hover: hover)': 'color-mix(in oklab, currentColor 70%, transparent)',
      },
    },
    textDecorationLine: 'underline',
    textUnderlineOffset: 1.4,
    transitionDuration: '150ms',
    transitionProperty: 'text-decoration-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  p: {
    color: color.textMuted,
    fontFamily: tokens.fontSans,
    fontWeight: 400,
    lineHeight: 1.625,
    marginBottom: spacing.xxl,
    marginTop: spacing.sm,
  },
});
