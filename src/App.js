import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Author from './Component/Author'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component ={Home} /> 
      <Route path="/author" exact component ={Author} />
    </BrowserRouter>
      
  
  );
}

export default App;
