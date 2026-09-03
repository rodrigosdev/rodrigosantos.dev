import * as stylex from '@stylexjs/stylex';

import { globalTokens as $ } from '~/app/global-tokens.stylex';

export const utils = stylex.create({
  focusText: {
    borderRadius: 2,
    outline: 'none',
    boxShadow: {
      default: 'none',
      ':focus-visible': `0 0 0 2px ${$.surfaceBg}, 0 0 0 4px color-mix(in oklab, ${$.base1000} 75%, transparent)`,
    },
  },
});
