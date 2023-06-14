import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/global";
import Header from "./components/Header";
import NameAndRole from "./components/NameAndRole";
import Photo, { img } from "./components/Photo";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        nickname="DrewDomi"
        sections={["Sobre", "Skills", "Projetos", "Contato"]}
      />
      <main>
        <NameAndRole
          name="Andrew Domingues"
          role="Front-end Developer & UX/UI Designer."
        />
        <Photo imgLink={img} />
      </main>
    </ThemeProvider>
  );
}

export default App;
