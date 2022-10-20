import React from 'react';
import styled from 'styled-components';
import { colors } from './utils/Colors';
const Container = styled.div`
  position: relative;
  text-align: center;
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
  color: white;
`;
const ContentWrapper = styled.div`
  height: 80vh;
  width: 100%;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export { Container, ContentWrapper };
