import * as stylex from '@stylexjs/stylex';

import { globalTokens as $ } from '~/app/global-tokens.stylex';

const Home = () => {
  return (
    <>
      <h1 {...stylex.props(styles.heading)}>Hello World</h1>
      <p {...stylex.props(styles.paragraph)}>Hello World</p>
      <code {...stylex.props(styles.mono)}>Hello World</code>
    </>
  );
};

const styles = stylex.create({
  heading: {
    fontFamily: $.fontPixel,
  },
  paragraph: {
    fontFamily: $.fontSans,
  },
  mono: {
    fontFamily: $.fontMono,
  },
});

export default Home;
