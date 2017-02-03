import React, { Component } from 'react';
import { Link } from 'react-router'
import { AuthForm }  from '../components/AuthForm';

class SigninLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="text-center">
            <h1>Godesk</h1>
            <p>Sign in to your existing account.</p>
            <AuthForm/>
            <div>
              <p>
                Don't have an account?&nbsp;
                <Link to="/signup">Sign up.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SigninLayout;
