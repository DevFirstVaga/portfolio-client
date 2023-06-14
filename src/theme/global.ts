import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.primary}, sans-serif;
    list-style: none;
    text-decoration: none;
  }
  body{
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  }
  main{
    max-width: 500px;
    margin: auto;
    text-align: center
  }
  .cta-buttons{
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

export default GlobalStyle;
