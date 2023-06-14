import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/global";
import Header from "./components/Header";
import NameAndRole from "./components/NameAndRole";
import Photo, { img } from "./components/Photo";
import Bio, { TEXT } from "./components/Bio";
import Button from "./components/Button";
import { BsGithub, BsFilePdfFill } from "react-icons/bs";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        nickname="DrewDomi"
        sections={["Sobre", "Skills", "Projetos", "Contato"]}
      />
      <main>
        <section id="Sobre">
          <NameAndRole
            name="Andrew Domingues"
            role="Front-end Developer & UX/UI Designer."
          />
          <Photo
            imgLink={img}
          />
          <Bio
            text={TEXT}
          />
          <div className="cta-buttons">
            <Button
              href="https://github.com"
              leftIcon={<BsGithub />}
              color="black"
            >
              GitHub
            </Button>
            <Button
              href="https://example.org"
              color="dodgerblue"
              variant="ghost"
              leftIcon={<BsFilePdfFill />}
            >
              Baixar CV
            </Button>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
