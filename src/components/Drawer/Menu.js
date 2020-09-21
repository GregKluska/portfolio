import React from 'react';
import { Link } from 'gatsby';
import { up } from 'styled-breakpoints';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px 5px;

  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Item = styled(Link)`
  width: 100%;

  position: relative;

  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.8rem;
  font-size: 0.7rem;

  text-align: center;
  text-transform: uppercase;

  padding: 7px 0;

  overflow: hidden;

  ${up('xxl')} {
    padding: 5px 0;
  }

  transition: 0.4s ease-in-out color;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &[aria-current='page'] {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:after {
    content: '';

    position: absolute;
    top: 0;
    right: 100%;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.hover};

    transition: 0.4s ease-in-out transform;
  }

  &:hover:after {
    transform: translateX(100%);
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      <Item to="/">Home</Item>
      <Item to="/about">About</Item>
      <Item to="/cv">CV</Item>
      <Item to="/contact">Contact</Item>
    </Wrapper>
  );
};

export default Menu;
