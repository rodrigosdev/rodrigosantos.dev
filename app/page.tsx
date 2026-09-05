import { About } from '~/components/about';
import { Container } from '~/components/container';
import { Inset } from '~/components/inset';
import { Latest } from '~/components/latest';

const Home = () => {
  return (
    <Container>
      <Inset>
        <About />
        <Latest />
      </Inset>
    </Container>
  );
};

export default Home;
