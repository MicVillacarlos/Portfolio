import { GLobalStyle } from "./style";
import { ThemeProvider } from "styled-components"
import { Navbar } from "./components/Navbar"
import { Intro } from './components/Intro'
import { Bio } from './components/Bio'
import { Stack } from './components/Stack'
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact"
import { Works } from "./components/Works"
import defaultTheme from './theme/default'

function App() {
  return (
    <div>
      <GLobalStyle/>
        <ThemeProvider theme={defaultTheme}>
            <Navbar/>
            <Intro/>
            <Bio/>
            <Stack/>
            <Works/>
            <Contact/>
            <Footer/>
        </ThemeProvider>
    </div>
  );
}
export default App;
