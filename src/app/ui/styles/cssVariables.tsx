import { createGlobalStyle } from 'styled-components';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });

export default createGlobalStyle`
  :root {
    --background: #f2f2f2;
    --color-text: #24292f;
    --color-link: #117cad;
    --color-link--hover: #ff1e1e;
    --color-error: #d50000;
    --font-family: ${lexend.style.fontFamily};
    --font-size: 1.5em;
    --spacing: 20px;
    --section-spacing: 40px;
  }
`;