import React, { Component } from 'react';
import { Link } from 'react-router'
import { AuthForm }  from '../components/AuthForm';
import GodeskAPI from '../utils/GodeskAPI'
// import './App.css';

class SignupLayout extends Component {

  onSignUpSuccess() {
    alert('Welcome!')
  }

  onSignUpError() {
    alert('Unable to sign in. Please check your username and password.')
  }

  signUp = (evt) => {
    evt.preventDefault()
    console.log('signUp')
    const username = document.getElementById('auth_username').value
    const password = document.getElementById('auth_password').value
    GodeskAPI.signUp(username, password, this.onSignUpSuccess, this.onSignUpError)
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <p>Create an account and get support.</p>
        <AuthForm handleSubmit={this.signUp}/>
        <div>
          <p>
            Already have an account?
            <Link to="/signin">Sign in.</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SignupLayout;
