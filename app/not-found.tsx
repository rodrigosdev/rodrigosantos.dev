import * as stylex from '@stylexjs/stylex';

import { Container } from '~/components/container';
import { TextLink } from '~/components/text-link';
import { utils } from '~/styles/utils';

const NotFound = () => {
  return (
    <Container>
      <h2 {...stylex.props(utils.h2)}>Not found</h2>
      <p {...stylex.props(utils.p)}>
        This page isn't here. You can go <TextLink href="/" title="home" />.
      </p>
    </Container>
  );
};

export default NotFound;
