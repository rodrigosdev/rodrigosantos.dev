import * as stylex from '@stylexjs/stylex';

import { globalTokens as $ } from '~/app/global-tokens.stylex';

const Inset = ({ children }: React.PropsWithChildren) => {
  return <div {...stylex.props(styles.inset)}>{children}</div>;
};

const styles = stylex.create({
  inset: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: $.containerWidth,
    width: '100%',
  },
});

export { Inset };
