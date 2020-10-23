import React from 'react';

import { Container } from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedingIcon />
          <SearchInput />
        </div>
        <div className="rigth">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>inicio</span>
            </button>

          </nav>

        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
