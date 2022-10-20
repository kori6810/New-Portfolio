import React, { useState } from 'react';
import {
  Container,
  Button,
  Navbar,
  ContentWrapper,
  Heading,
  SubText,
} from './styles';
// import Img1 from '../../assets/img1.jpeg';

export const Home = () => {
  return (
    <Container>
      <ContentWrapper>
        <Heading>
          Hello, I'm <SubText>Kori</SubText>
        </Heading>
        <Heading>I'm a Front-End Developer.</Heading>
      </ContentWrapper>
    </Container>
  );
};
