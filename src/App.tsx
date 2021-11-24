import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Greeting } from './components/Greeting';
import { GlobalStyle } from './components/GlobalStyle';
import { Box } from './components/Box';
import { theme } from './utils/theme';

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Box>
      <Greeting services={{ getCharacterCount: async () => Promise.resolve(2) }} />
    </Box>
  </ThemeProvider>
);
