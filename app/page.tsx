import { About } from '~/components/about';
import { Container } from '~/components/container';
import { Inset } from '~/components/inset';

const Home = () => {
  return (
    <Container>
      <Inset>
        <About />
      </Inset>
    </Container>
  );
};

export default Home;
