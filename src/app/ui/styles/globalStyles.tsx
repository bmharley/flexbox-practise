import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    font-size: var(--font-size);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-text);
    background-color: var(--background);
  }
`;