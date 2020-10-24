import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { updateAPIConfig } from '../src/api/base';

import ScrollToTop from "../src/components/ScrollToTop";

import Home from './pages/Home';
import LoginPage from './pages/signin';
import Register from '../src/components/Auth/Register/Register';
import Logout from '../src/components/Auth/Logout';
import PageNotFound from '../src/components/PageNotFound';
import Leagues from '../src/components/League/index';
import Footer from '../src/components/Footer/index';
import Navbar from '../src/components/Navbar/index';

  function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/league" component={Leagues} />
        <Route component={PageNotFound} />
        <Route path="/footer" component={Footer} />
      </Switch>
    </Router>  
  );
  }



export default App;  
 
