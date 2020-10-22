import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from '../src/components/Signin';
import SignUp from '../src/components/Signup';
import Navbar from "../src/components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
// import Leagues from "../src/components/League";
import Footer from  "../src/components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/signup" component={SignUp} exact />
        {/* <Route path="/league" component={Leagues} exact /> */}
        <Route path="/footer" component={Footer} exact />
      </Switch>
      
    </Router>  
  );
  }


  export default App;