import React from 'react';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';

import MobileHeader from '../MobileHeader';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>

      <MobileHeader />

      <main>
        <LeftColumn />
        <MiddleColumn/>
        <RightColumn/>
      </main>
    </Container>
  );
};

export default Layout;