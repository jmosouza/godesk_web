import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import SignupLayout from './layouts/SignupLayout';
import SigninLayout from './layouts/SigninLayout';

import './index.css';
import './signin.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={SignupLayout} />
    <Route path="/signup" component={SignupLayout} />
    <Route path="/signin" component={SigninLayout} />
  </Router>),
  document.getElementById('root')
);
