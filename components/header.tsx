import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';

import { color, spacing } from '~/app/global-tokens.stylex';
import { utils } from '~/styles/utils';

const Header = () => {
  return (
    <header {...stylex.props(styles.header)}>
      <div {...stylex.props(utils.inner)}>
        <Link href="/" {...stylex.props(utils.h2, utils.focusText)}>
          Rodrigo Santos
        </Link>
        <p {...stylex.props(styles.subtitle)}>AI Engineer</p>
      </div>
    </header>
  );
};

const styles = stylex.create({
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 0,
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
    paddingTop: spacing.xxxl,
    width: '100%',
  },
  subtitle: {
    color: color.textMuted,
  },
});

export { Header };
