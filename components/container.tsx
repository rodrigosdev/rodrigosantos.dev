import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';

import { spacing } from '~/app/global-tokens.stylex';
import { utils } from '~/styles/utils';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <main {...stylex.props(styles.main)}>
      <div {...stylex.props(utils.inner)}>{children}</div>
    </main>
  );
};

const styles = stylex.create({
  main: {
    alignItems: 'start',
    display: 'flex',
    flexGrow: 1,
    paddingBottom: spacing.xxxl,
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
    paddingTop: spacing.xxxl,
    width: '100%',
  },
});

export { Container };
