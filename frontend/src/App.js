import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import Navbar from "../src/components/Navbar";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
      </Switch>
      
    </Router>  
  );
  }


  export default App;