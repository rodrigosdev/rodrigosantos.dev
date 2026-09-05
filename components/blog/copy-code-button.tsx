'use client';

import * as stylex from '@stylexjs/stylex';

import { color, spacing, text, tokens } from '~/app/global-tokens.stylex';
import { IconClipboard, useCopyFeedback } from '~/components/copied-tooltip';
import { utils } from '~/styles/utils';

type CopyCodeButtonProps = {
  source: string;
};

const CopyCodeButton = ({ source }: CopyCodeButtonProps) => {
  const { copy, isCopied } = useCopyFeedback();

  return (
    <button
      aria-label={isCopied ? 'Copied to clipboard' : 'Copy code'}
      onClick={() => {
        copy(source);
      }}
      type="button"
      {...stylex.props(utils.focusText, styles.button, isCopied && styles.message)}
    >
      {isCopied ? <span aria-live="polite">Copied to clipboard</span> : <IconClipboard />}
    </button>
  );
};

const styles = stylex.create({
  button: {
    padding: spacing.xs,
    borderStyle: 'none',
    borderWidth: 0,
    appearance: 'none',
    backgroundColor: 'transparent',
    color: {
      default: color.textMuted,
      ':hover': {
        default: color.text,
        '@media (hover: hover)': color.text,
      },
    },
    cursor: 'pointer',
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    right: spacing.xs,
    top: spacing.xs,
  },
  message: {
    borderColor: color.border,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: color.surface,
    boxShadow: `0 1px 2px color-mix(in oklab, ${color.ink} 6%, transparent)`,
    color: color.text,
    fontFamily: tokens.fontSans,
    fontSize: text.sm,
    whiteSpace: 'nowrap',
    paddingBottom: spacing.xs,
    paddingLeft: spacing.sm,
    paddingRight: spacing.sm,
    paddingTop: spacing.xs,
  },
});

export { CopyCodeButton };
