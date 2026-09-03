import * as stylex from '@stylexjs/stylex';

import { spacing } from '~/app/global-tokens.stylex';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main {...stylex.props(styles.main)}>
      <section {...stylex.props(styles.section)}>{children}</section>
    </main>
  );
};

const styles = stylex.create({
  main: {
    alignItems: 'start',
    display: 'flex',
    flexGrow: 1,
  },
  section: {
    padding: `${spacing.xxl} ${spacing.md} ${spacing.xxl} ${spacing.md}`,
    width: '100%',
  },
});

export { Container };
