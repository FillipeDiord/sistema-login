import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --gray: #676767;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #F0F2F5;
    font-family: Arial, Helvetica, sans-serif;
  }
`;