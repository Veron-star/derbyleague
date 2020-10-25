import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from "../src/components/ScrollToTop";

import Home from './pages/Home';
import { LoginConnect as LogIn} from '../src/components/Dashboard/Auth/Connect/LoginConnect';
import { RegisterConnect as Register } from '../src/components/Dashboard/Auth/Connect/RegisterConnect';
import { LogoutConnect as LogOut } from '../src/components/Dashboard/Auth/Connect/LogoutConnect';
import PageNotFound from '../src/components/PageNotFound';
import Leagues from './components/Leagues/index';
import Footer from './components/Dashboard/Footer/index';
import Navbar from './components/Dashboard/Navbar/index';

  function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LogIn} />
        <Route path="/logout" component={LogOut} />
        <Route path="/register" component={Register} />
        <Route path="/league" component={Leagues} />
        <Route component={PageNotFound} />
        <Route path="/footer" component={Footer} />
      </Switch>
    </Router>  
  );
  }



export default App;  
 
