import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" components={Home} exact />
        <Route path="/signin" components={SignInPage} exact />
      </Switch>
    </Router>
    
  )
  }


  export default App;