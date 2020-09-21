import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
`;

const Heading = styled.h2`
  font-size: 2.57rem;
  line-height: 3.2857rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: auto;
    bottom: 0;
    height: 5px;
    border-radius: 100px;
  }

  &:before {
    width: 100px;
    background: rgba(3, 127, 255, 0.3);
  }
  &:after {
    width: 35px;
    background: #037fff;
  }
`;

const Shadow = styled.span`
  position: absolute;
  left: 0;
  top: 100%;
  font-size: 6rem;
  line-height: 1;
  font-weight: 900;
  color: rgba(25, 29, 43, 0.44);
  display: inline-block;
  text-transform: uppercase;
  z-index: -1;
  transform: translateY(-40%);
  user-select: none;
  white-space: nowrap;
`;

const SectionTitle = ({ children }) => {
  return (
    <Wrapper>
      <Heading>{children}</Heading>
      <Shadow>{children}</Shadow>
    </Wrapper>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
