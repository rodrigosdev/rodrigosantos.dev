import * as stylex from '@stylexjs/stylex';

import { TextLink } from '~/components/text-link';
import { utils } from '~/styles/utils';

const Connect = () => {
  return (
    <>
      <h2 {...stylex.props(utils.h2)}>Connect</h2>
      <p {...stylex.props(utils.p)}>
        You can find me on <TextLink href="https://x.com/rrcssantos" title="X" external />, feel
        free to send a dm.
      </p>
    </>
  );
};

export { Connect };
