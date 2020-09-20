import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Background from '../../util/background';

const Wrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;

const Content = ({ children }) => {
  return (
    <Wrapper>
      <Background />
      {children}
    </Wrapper>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
