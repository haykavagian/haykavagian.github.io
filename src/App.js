import './App.css';
import Gallery from './components/Gallery/Gallery';
import Hero from './components/Hero/Hero';
import Navbar2 from './components/Navbar/Navbar2';
import About from './components/About/About'
import Space1 from './components/Spaces/Space1';
import Space2 from './components/Spaces/Space2';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Kids from './components/Photos/Kids';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Gallery2 from './components/Gallery2/Gallery2';
import Wrapper from './Wrapper/Wrapper';




function App() {


  
  return (
    
    <Router>
      <Switch>
        <Route path='/' component={Wrapper} exact/>
        <Route path="/kids" exact component={Kids} />
      </Switch>
    </Router>
  );
}

export default App;
