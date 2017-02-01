import React, { Component } from 'react';
import { Link } from 'react-router'
import { AuthForm }  from '../components/AuthForm';
// import './App.css';

class SigninLayout extends Component {
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <p>Sign in to your existing account.</p>
        <AuthForm/>
        <div>
          <p>
            Don't have an account?
            <Link to="/signup">Sign up.</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SigninLayout;
