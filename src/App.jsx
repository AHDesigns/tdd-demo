import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Greeting } from './components/Greeting';
import { GlobalStyle } from './components/GlobalStyle';
import { theme } from './utils/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Greeting />
  </ThemeProvider>
);
