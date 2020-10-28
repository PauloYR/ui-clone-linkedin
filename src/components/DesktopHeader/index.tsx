import React from 'react';

import { Container, Wrapper, LinkedinIcon, SearchInput, HomeIcon, NotificationsIcon, ProfileCircle, CaretDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput />
        </div>
        <div className="rigth">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>inicio</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://github.com/PauloYR.png" />
              <span>Eu <CaretDownIcon /></span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
