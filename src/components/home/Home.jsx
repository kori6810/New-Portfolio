import React, { useState } from 'react';
import { Container, Button } from './styles';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import Img1 from '../../assets/img1.jpeg';

export const Home = () => {
  return (
    <Container>
      <div>navbar</div>
      <div>
        <h1>
          Hello, I'm <span className="home__highlight">Kori</span>
        </h1>
        <h1>I'm a Front-End Developer.</h1>
        <Button>
          View My Work
          <span>
            <HiArrowNarrowRight className="home__arr" />
          </span>
        </Button>
      </div>
    </Container>
  );
};
