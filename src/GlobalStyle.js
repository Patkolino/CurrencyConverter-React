import { createGlobalStyle } from "styled-components";
import "normalize.css";
import background from "./assets/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  #root {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    background: url(${background});
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    padding: 30px;
    margin: 0 auto;
  }  
`;