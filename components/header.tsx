import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';

import { globalTokens as $, spacing } from '~/app/global-tokens.stylex';
import { utils } from '~/styles/utils';

const Header = () => {
  return (
    <header {...stylex.props(styles.header)}>
      <div {...stylex.props(styles.container)}>
        <Link href="/" {...stylex.props(styles.link, utils.h2, utils.focusText)}>
          Rodrigo Santos
        </Link>
        <p {...stylex.props(styles.subtitle)}>AI Engineer</p>
      </div>
    </header>
  );
};

const styles = stylex.create({
  header: {
    padding: `${spacing.xxl} ${spacing.md} 0 ${spacing.md}`,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    maxWidth: $.containerWidth,
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
  subtitle: {
    color: $.textSoft,
  },
});

export { Header };
