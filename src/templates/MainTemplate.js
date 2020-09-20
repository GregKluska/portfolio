import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import theme from '../styles/theme';

const GlobalStyles = createGlobalStyle`
    body {
        background: white;
    }
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;
