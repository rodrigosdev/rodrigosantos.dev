import * as stylex from '@stylexjs/stylex';

import { color, spacing, text, tokens } from '~/app/global-tokens.stylex';
import { CopyCodeButton } from '~/components/blog/copy-code-button';

type CodeBlockProps = {
  html: string;
  source: string;
};

const CodeBlock = ({ html, source }: CodeBlockProps) => {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.frame)}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <CopyCodeButton source={source} />
    </div>
  );
};

const styles = stylex.create({
  root: {
    fontFamily: tokens.fontMono,
    fontSize: text.sm,
    position: 'relative',
    marginBottom: spacing.lg,
  },
  frame: {
    borderColor: color.border,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
  },
});

export { CodeBlock };
