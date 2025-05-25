import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Half = styled(motion.div)<{ $isLeft?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$isLeft ? '#f5f5f5' : '#e5e5e5'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    flex: 1.2;
    background-color: ${props => props.$isLeft ? '#ebebeb' : '#dbdbdb'};
  }
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: #333;
  text-decoration: none;
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Half 
        $isLeft 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <StyledLink to="/architecture">Architecture</StyledLink>
      </Half>
      <Half
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <StyledLink to="/photography">Photography</StyledLink>
      </Half>
    </HomeContainer>
  );
};

export default Home;
