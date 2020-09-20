import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Background from '../../util/background';

const Wrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  z-index: 998;

  display: flex;
  flex-direction: column;
`;

const Content = ({ path, children }) => {
  return (
    <Wrapper>
      <Background stars={path === '/'} />
      <Container>{children}</Container>
    </Wrapper>
  );
};

Content.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Content;
