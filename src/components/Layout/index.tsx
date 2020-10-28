import React, { useEffect, useState } from 'react';


import { Container } from './styles';


import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import AdBanner from '../AdBanner';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';


const Layout: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  return (
    <Container>
      <DesktopHeader />
      <MobileHeader />
      <span>
        { !isLoading && <AdBanner />}
      </span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};

export default Layout;
