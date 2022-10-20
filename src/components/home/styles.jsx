import styled from 'styled-components';
import { colors } from '../utils/Colors';
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 3rem;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: 2px solid ${colors.white};
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  padding: 1rem 2rem;
  transition: all 0.5s;
  margin-top: 1rem;
`;
const Heading = styled.h1`
  font-size: 3rem;
  color: ${colors.white};
`;
const SubText = styled.span`
  color: ${colors.darkBlue};
`;
export { Container, Button, Navbar, ContentWrapper, Heading, SubText };
