'use client';

import * as stylex from '@stylexjs/stylex';

import { spacing } from '~/app/global-tokens.stylex';
import { SITE_EMAIL } from '~/app/site';
import { CopiedTooltip } from '~/components/copied-tooltip';
import { useCopyFeedback } from '~/components/copy-feedback';
import { utils } from '~/styles/utils';

const EmailButton = () => {
  const { copy, isCopied } = useCopyFeedback();

  return (
    <div {...stylex.props(styles.root)}>
      {isCopied ? <CopiedTooltip /> : null}
      <button
        onClick={() => {
          copy(SITE_EMAIL);
        }}
        type="button"
        {...stylex.props(utils.link, utils.focusText, styles.link)}
      >
        Email
      </button>
    </div>
  );
};

const styles = stylex.create({
  root: {
    position: 'relative',
  },
  link: {
    paddingBottom: spacing.xs,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    paddingTop: spacing.xs,
  },
});

export { EmailButton };
