import { BsGithub } from "react-icons/bs";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/global";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        nickname="DrewDomi"
        section={["Sobre", "Skills", "Projetos", "Contato"]}
      />
      <Button
        variant="solid"
        size="medium"
        color="#000"
        leftIcon={<BsGithub />}
      >
        GitHub
      </Button>
    </ThemeProvider>
  );
}

export default App;
