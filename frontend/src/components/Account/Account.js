import React from 'react';
import AccountDetails from './AccountDetails';
import SignInForm from '../Auth/SignInForm';

class Account extends React.Component {
  render() {
    if (this.props.currentUser == null) {
      return (
        <div>
          <p>Please log in to your account</p>
          <SignInForm onUserSignedIn={this.props.onUserSignedIn}/>
        </div>
      )
    }

    return(
      <div>
        <h3><strong>Account Details</strong></h3>
        <AccountDetails currentUser={this.props.currentUser} />
        <hr />
      </div>
    )
  }
}

export default Account;