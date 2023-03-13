import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #888;
  }

  ::-webkit-scrollbar-thumb {
    background: #e4dada;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
`