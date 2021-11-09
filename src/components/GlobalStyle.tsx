import { createGlobalStyle } from 'styled-components';
import { testWrap } from '../utils/testWrap';

const GlobalStyleC = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Lato, Helvetica, sans-serif;
    font-size: 16px;
    overflow-x: hidden;
  }

  li {
    text-decoration: none;
    list-style-type: none;
  }


  svg {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const GlobalStyle = testWrap(GlobalStyleC, 'global styles');
