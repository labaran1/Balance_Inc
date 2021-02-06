import './App.css';
import { Router } from "@reach/router"
import Home from './Component/Home'


function App() {
  return (
    <Router>
  <Home path="/"/>
    </Router>
  );
}

export default App;
