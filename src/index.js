import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import SignupLayout from './SignupLayout';
import SigninLayout from './SigninLayout';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/signup" component={SignupLayout} />
    <Route path="/signin" component={SigninLayout} />
    <Route path="/tickets" component={App} />
  </Router>),
  document.getElementById('root')
);