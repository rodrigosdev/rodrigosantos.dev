import * as stylex from '@stylexjs/stylex';

import { SITE_X_URL } from '~/app/site';
import { TextLink } from '~/components/text-link';
import { utils } from '~/styles/utils';

const Connect = () => {
  return (
    <>
      <h2 {...stylex.props(utils.h2)}>Connect</h2>
      <p {...stylex.props(utils.p)}>
        You can find me on <TextLink external href={SITE_X_URL} title="X" />, feel free to send a
        dm.
      </p>
    </>
  );
};

export { Connect };
