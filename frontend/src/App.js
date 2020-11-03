import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from "../src/components/ScrollToTop";
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import GuestRoute from './components/routes/GuestRoute';
import Navbar from './components/Dashboard/Navbar';
import LeaguesPage from './pages/LeaguesPage';

  function App () {
    return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <GuestRoute path="/login" component={LoginPage} />
        <GuestRoute path="/signup" component={SignupPage} />
        <GuestRoute path="/forgot_password" component={ForgotPasswordPage} />
        <GuestRoute path="/reset_password/:token" component={ResetPasswordPage} />
        <GuestRoute path="/leagues" component={LeaguesPage} />
      </Switch>
    </Router>  
    )};

//   App.propTypes = {
//     location: PropTypes.shape({
//       pathname: PropTypes.string.isRequired
//     }).isRequired,
//     isAuthenticated: PropTypes.bool.isRequired
//   };

// function mapStateToProps(state) {  return {  isAuthenticated: !!state.user.email  }; }


export default App;
// export default connect(mapStateToProps)(App);


 
