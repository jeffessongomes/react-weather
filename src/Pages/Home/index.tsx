import React from 'react';

import { WiCloudy } from 'react-icons/wi';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <h3>weather</h3>
        <div>
          <strong>16°</strong>

          <div>
            <strong>Goianinha</strong>
            <p>06:09 - Segunda, 9 Set 2020</p>
          </div>
          <p>
            <WiCloudy size={74} color="#D7DBDD" />
            Nublado
          </p>
        </div>
      </div>
      <div />
    </Container>
  );
};

export default Home;
