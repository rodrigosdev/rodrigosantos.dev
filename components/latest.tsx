import * as stylex from '@stylexjs/stylex';

import { Redacted } from '~/components/redacted';
import { utils } from '~/styles/utils';

const Latest = () => {
  return (
    <>
      <h2 {...stylex.props(utils.h2)}>Latest</h2>
      <p {...stylex.props(utils.p)}>
        On the side, I'm building <Redacted />.
      </p>
    </>
  );
};

export { Latest };
