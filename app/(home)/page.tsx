import { About } from '~/components/about';
import { Connect } from '~/components/connect';
import { Container } from '~/components/container';
import { DirectionalTransition } from '~/components/directional-transition';
import { Header } from '~/components/header';
import { Latest } from '~/components/latest';

const Home = () => {
  return (
    <DirectionalTransition>
      <Header />
      <Container>
        <About />
        <Latest />
        <Connect />
      </Container>
    </DirectionalTransition>
  );
};

export default Home;
