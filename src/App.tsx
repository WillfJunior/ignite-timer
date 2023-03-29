import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { DefaultTheme } from "./styles/themes/default";


export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button />
      <Button variant="secondary"/>
      
    </ThemeProvider>
      
    
  )
}


