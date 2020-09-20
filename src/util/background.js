import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../styles/colors';

const StarAnimation = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-2000px);
  }		
`;

const getRandomArbitrary = (min, max) => parseInt(Math.random() * (max - min) + min, 10);

const MultipleBoxShadow = (n) => {
  let css = `${getRandomArbitrary(0, 2000)}px ${getRandomArbitrary(0, 2000)}px ${colors.lines}`;

  for (let i = 2; i <= n; i += 1) {
    css += `, ${getRandomArbitrary(0, 2000)}px ${getRandomArbitrary(0, 2000)}px ${colors.lines}`;
  }

  return css;
};

const StarWrapper = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Star = styled.div`
  border-radius: 50%;
  background: transparent;

  &:after {
    content: '';
    position: absolute;
    top: -2000px;
    border-radius: 50%;
  }
`;

const SmallStar = styled(Star)`
  width: 4px;
  height: 4px;

  box-shadow: ${MultipleBoxShadow(700)};
  animation: ${StarAnimation} 50s linear infinite;

  &:after {
    width: 4px;
    height: 4px;

    box-shadow: ${MultipleBoxShadow(700)};
    animation: ${StarAnimation} 50s linear infinite;
  }
`;
const MediumStar = styled(Star)`
  width: 6px;
  height: 6px;

  box-shadow: ${MultipleBoxShadow(200)};
  animation: ${StarAnimation} 100s linear infinite;

  &:after {
    width: 6px;
    height: 6px;

    box-shadow: ${MultipleBoxShadow(200)};
    animation: ${StarAnimation} 100s linear infinite;
  }
`;
const LargeStar = styled(Star)`
  width: 10px;
  height: 10px;

  box-shadow: ${MultipleBoxShadow(100)};
  animation: ${StarAnimation} 150s linear infinite;

  &:after {
    width: 10px;
    height: 10px;

    box-shadow: ${MultipleBoxShadow(100)};
    animation: ${StarAnimation} 150s linear infinite;
  }
`;

const LineWrapper = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
`;

const Line = styled.span`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: block;
  width: 1px;
  height: 100%;
`;

const background = () => {
  return (
    <>
      <StarWrapper>
        <SmallStar />
        <MediumStar />
        <LargeStar />
      </StarWrapper>
      <LineWrapper>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </LineWrapper>
    </>
  );
};

export default background;
