import Button from "./components/Button";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello, World!!</h1>
      <Button>Button</Button>
    </ThemeProvider>
  );
}

export default App;
