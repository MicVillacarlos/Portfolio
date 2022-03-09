import { GLobalStyle } from "./style";
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Footer } from "./components/Footer";

function App() {
  return (
    <div >
      <GLobalStyle/> 
      <Navbar />
      <Intro/>
      <About/>
      <Stack/>
      <Footer/>
    </div>
  );
}

export default App;
