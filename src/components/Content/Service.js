/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import * as mixins from '@styles/mixins';

const Wrapper = styled.div`
  ${mixins.makeColReady()}
  ${mixins.makeCol()}

  padding-top:${({ theme }) => theme.gutterSize.xs / 2}px;
  padding-bottom: ${({ theme }) => theme.gutterSize.xs / 2}px;

  ${up('md')} {
    ${mixins.makeCol(1, 2)}

    padding-top:${({ theme }) => theme.gutterSize.md / 2}px;
    padding-bottom: ${({ theme }) => theme.gutterSize.md / 2}px;
  }

  ${up('lg')} {
    ${mixins.makeCol(1, 3)}
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: 5px solid ${({ theme }) => theme.colors.border};
  padding: 30px;

  transition: border-top-color 0.3s ease;

  &:hover {
    border-top-color: ${({ theme }) => theme.colors.secondary};
  }

  h5 {
    font-weight: 600;
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 15px;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: auto;
      bottom: 0;
      height: 2px;
      width: 50px;
      background: ${({ theme }) => theme.colors.border};
    }
  }
`;

const Service = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

Service.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Service;
