import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Background from '../../util/background';

const Wrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;

const Content = ({ path, children }) => {
  return (
    <Wrapper>
      <Background stars={path === '/'} />
      {children}
    </Wrapper>
  );
};

Content.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Content;
