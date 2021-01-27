
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footerbase from './components/Footer/Footerbase';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import LearningPage from './components/pages/LearningPage/LearningPage';
import Skills from './components/pages/Skills/Skills';
import Signin from './components/Signup/Signin';
import Signup from './components/Signup/Signup';

function App() {
  return (
    
    <Router>

      <Navbar />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/page' exact component={LearningPage} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
      </Switch>

      <Footerbase />

    </Router>

  );
}

export default App;
