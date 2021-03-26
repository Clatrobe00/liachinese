import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/Home';
import Videos from './components/Videos';

function App() {
  return (

    <div className="App">
          <Router>
            < NavBar />
            <div>
              <Route exact path='/' component={Home}/>
              <Route exact path='/videos' component={Videos}/>
            </div>   
          </Router>
          

    </div>
  );
}

export default App;
