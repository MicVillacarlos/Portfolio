import { GLobalStyle } from "./style";
import { ThemeProvider } from "styled-components"
import { Navbar } from "./components/Navbar"
import  First  from "./Pages/First"
import defaultTheme from './theme/default'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GLobalStyle/>
        <ThemeProvider theme={defaultTheme}>
            <Navbar/>
                <Routes>
                  <Route path='/' element={<First/>} />
                  <Route path='/works' />
                </Routes>
        </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
