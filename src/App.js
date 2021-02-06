import './App.css';
import { Router } from "@reach/router"
import Home from './Component/Home'
import AppState from './Context/AppContext/AppState'


function App() {
  return (
    <AppState>
    <Router>
      
  <Home path="/"/>
    </Router>
    </AppState>
  );
}

export default App;
