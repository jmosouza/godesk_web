import React, { Component } from 'react';
import { Link } from 'react-router'
import { AuthForm }  from '../components/AuthForm';
import GodeskAPI from '../utils/GodeskAPI'

class SignupLayout extends Component {

  onSignUpSuccess() {
    alert('Welcome!')
  }

  onSignUpError() {
    alert('Unable to sign up. Please check your username and password.')
  }

  signUp = (evt) => {
    evt.preventDefault()
    console.log('signUp')
    const username = document.getElementById('auth_username').value
    const password = document.getElementById('auth_password').value
    console.log(username, password);
    GodeskAPI.signUp(username, password, this.onSignUpSuccess, this.onSignUpError)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="text-center">
            <h1>Godesk</h1>
            <p>Sign up to a new account.</p>
            <AuthForm handleSubmit={this.signUp}/>
            <div>
              <p>
                Already have an account?&nbsp;
                <Link to="/signin">Sign in.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupLayout;
