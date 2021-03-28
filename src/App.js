import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Layout from './components/Layout';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Videos from './components/Videos';
import SignUpCard from './components/SignUpCard';


function App() {
  return (

  <>
    <Router>
      <div className="App">
        < NavBar />
      </div>
      <Layout>
        <Row>
          <Col xs={3}>1 of 3</Col>
          <Col xs={6}>        
            <div>
              <Route exact path='/' component={Home}/>
              <Route exact path='/videos' component={Videos}/>
              <Route exact path='/signup' component={SignUp}/>
            </div>  
          </Col>
          <Col xs={3}>
            <Route exact path={['/', '/videos']} component={SignUpCard}/>
          </Col>
        </Row>
      </Layout>
     
    </Router>
  </>

  );
}

export default App;
