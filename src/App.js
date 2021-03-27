import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/Home';
import Videos from './components/Videos';
import SignUpCard from './components/SignUpCard'

function App() {
  return (

  <>
    <Router>
      <div className="App">
        < NavBar />
      </div>
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col>        
            <div>
              <Route exact path='/' component={Home}/>
              <Route exact path='/videos' component={Videos}/>
            </div>  
          </Col>
          <Col>
            <SignUpCard />
          </Col>
        </Row>
      </Container>
     
    </Router>
  </>

  );
}

export default App;
