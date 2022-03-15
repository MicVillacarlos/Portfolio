import { GLobalStyle } from "./style";
import { ThemeProvider } from "styled-components"
import { Page1 } from "./components/Page"
import defaultTheme from './theme/default'

function App() {
  return (
    <div>
      <GLobalStyle/>
        <ThemeProvider theme={defaultTheme}>
          <Page1/>
        </ThemeProvider>
    </div>
  );
}
export default App;
