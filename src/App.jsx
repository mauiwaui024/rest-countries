
import { BrowserRouter as Router} from "react-router-dom";
import AppRouter from './AppRouter';
import { ThemeProvider } from './hooks/ThemeContext';
import "./main.global.css"

function App() {

  return (
    <ThemeProvider>
     
    <Router>
      <AppRouter/>
    </Router>
    
    </ThemeProvider>
  )
}

export default App
