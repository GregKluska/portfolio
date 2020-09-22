import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import theme from '@styles/theme';
import Typography from '@styles/typography';
import Drawer from '@components/Drawer';
import Content from '@components/Content/Content';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans';
    color: ${theme.colors.primary};
    background: ${theme.colors.background};

    line-height: 1.8rem;
    font-weight: 400;
  }

  .color-secondary {
    color ${theme.colors.secondary};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
`;

const MainTemplate = ({ path, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography />
      <Normalize />
      <GlobalStyles />
      <Wrapper>
        <Drawer />
        <Content path={path}>{children}</Content>
      </Wrapper>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
