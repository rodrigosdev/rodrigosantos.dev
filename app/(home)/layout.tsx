import type { ReactNode } from 'react';

import { Header } from '~/components/header';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;
