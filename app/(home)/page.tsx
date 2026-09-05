import { About } from '~/components/about';
import { Connect } from '~/components/connect';
import { Container } from '~/components/container';
import { Latest } from '~/components/latest';

const Home = () => {
  return (
    <Container>
      <About />
      <Latest />
      <Connect />
    </Container>
  );
};

export default Home;
