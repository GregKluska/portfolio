import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import theme from '../styles/theme';
import Drawer from '../components/Drawer/Drawer';
import Content from '../components/Content/Content';

const GlobalStyles = createGlobalStyle`
    body {
        background: ${theme.colors.background};
    }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Wrapper>
        <Drawer />
        <Content>{children}</Content>
      </Wrapper>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
