import * as stylex from '@stylexjs/stylex';

import { globalTokens as $, spacing, text } from '~/app/global-tokens.stylex';

export const utils = stylex.create({
  focusText: {
    borderRadius: 2,
    outline: 'none',
    boxShadow: {
      default: 'none',
      ':focus-visible': `0 0 0 2px ${$.surfaceBg}, 0 0 0 4px color-mix(in oklab, ${$.base1000} 75%, transparent)`,
    },
  },
  h2: {
    textDecoration: 'none',
    color: $.textStrong,
    fontFamily: $.fontPixel,
    fontSize: text.p,
    fontWeight: 500,
  },
  p: {
    color: $.textSoft,
    fontFamily: $.fontSans,
    fontWeight: 400,
    lineHeight: 1.625,
    marginBottom: spacing.xl,
    marginTop: spacing.xxs,
  },
});
