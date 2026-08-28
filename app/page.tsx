import * as stylex from '@stylexjs/stylex';

import { globalTokens as $ } from '~/app/global-tokens.stylex';

const Home = () => {
  return <h1 {...stylex.props(styles.heading)}>Hello World</h1>;
};

const styles = stylex.create({
  heading: {
    fontFamily: $.fontPixel,
  },
});

export default Home;
