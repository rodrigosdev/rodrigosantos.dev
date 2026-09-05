import * as stylex from '@stylexjs/stylex';

import { TextLink } from '~/components/text-link';
import { utils } from '~/styles/utils';

const About = () => {
  return (
    <>
      <h2 {...stylex.props(utils.h2)}>About</h2>
      <p {...stylex.props(utils.p)}>
        I'm currently spending my energy AI-ifying{' '}
        <TextLink href="https://snyk.io" title="Snyk" external />, the AI security platform.
      </p>
    </>
  );
};

export { About };
