import React, { Component } from 'react';
import { Link } from 'react-router'
import { SignonForm }  from './SignonForm';
import './App.css';

class SignupLayout extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <p>Create an account and get support.</p>
        <SignonForm/>
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
