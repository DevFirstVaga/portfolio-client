import { ThemeProvider } from "styled-components";

import { theme } from "./theme/theme";
import Button from "./components/Button";
import GlobalStyle from "./theme/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello, World!!</h1>
      <Button>Button</Button>
    </ThemeProvider>
  );
}

export default App;
