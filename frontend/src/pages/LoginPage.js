import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../components/Forms/LoginForm";
import { login } from "../actions/auth";
import { Link } from "react-router-dom";
 
 class LoginPage extends React.Component 
 {  submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"));
    //here after data is submit to loginform--then login is done and dashboard page is pushed
    
    render() 
    {  return ( <div> <h1>Login page</h1>
                     <LoginForm submit={this.submit} />
                     <Link to="/forgot_password">Forgot Password?</Link>
                </div>
              );
    }
 }
 

LoginPage.propTypes = 
{ history: PropTypes.shape({ push: PropTypes.func.isRequired  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);