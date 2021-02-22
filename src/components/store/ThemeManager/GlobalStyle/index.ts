import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}
  
  html, body {
    display:flex;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: ${(props) => props.theme.fontFamily};
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
