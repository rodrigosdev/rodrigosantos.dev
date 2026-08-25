import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  heading: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
});

const Home = () => {
  return <h1 {...stylex.props(styles.heading)}>Hello World</h1>;
};

export default Home;
