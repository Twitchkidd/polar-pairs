import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    position: fixed;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    font-size: 16px;
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
