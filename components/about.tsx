import * as stylex from '@stylexjs/stylex';

import { utils } from '~/styles/utils';

const About = () => {
  return (
    <>
      <h2 {...stylex.props(utils.h2)}>About</h2>
      <p {...stylex.props(utils.p)}>
        I'm a software engineer with a passion for building web applications.
      </p>
    </>
  );
};

export { About };
