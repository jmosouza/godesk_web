import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import SignupLayout from './layouts/SignupLayout';
import SigninLayout from './layouts/SigninLayout';

import './index.css';
import './signin.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={SigninLayout} />
    <Route path="/signin" component={SigninLayout} />
    <Route path="/signup" component={SignupLayout} />
  </Router>),
  document.getElementById('root')
);
