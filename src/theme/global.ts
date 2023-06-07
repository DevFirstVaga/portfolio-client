import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    font-family: ${theme.fonts.primary}, sans-serif;
  }
`;

export default GlobalStyle;
