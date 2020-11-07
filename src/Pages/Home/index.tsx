import React from 'react';

import { WiCloudy } from 'react-icons/wi';

import { BsSearch } from 'react-icons/bs';

import { Container, Navbar } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <h3>weather</h3>
        <div>
          <strong>16°</strong>

          <div>
            <strong>Goianinha</strong>
            <p>06:09 - Monday, 9 Sep 2020</p>
          </div>
          <p>
            <WiCloudy size={74} color="#D7DBDD" />
            Cloudy
          </p>
        </div>
      </div>
      <Navbar>
        <div>
          <input type="text" placeholder="Another location" />
          <button type="button">
            <BsSearch size={33} color="#FFF" />
          </button>
        </div>
        <div>
          <h2>Weather Details</h2>
          <ul>
            <li>
              <span>Cloudy</span>
              86%
            </li>
            <li>
              <span>Humidity</span>
              62%
            </li>
            <li>
              <span>Wind</span>
              8km/h
            </li>
          </ul>
        </div>
      </Navbar>
    </Container>
  );
};

export default Home;
