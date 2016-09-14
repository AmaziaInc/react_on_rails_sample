import React from 'react';
import ReactOnRails from 'react-on-rails';
//import { Provider } from 'react-redux';

//import createStore from '../store/helloWorldStore';
import SignupForm from '../containers/SignupForm';

const SignupFormApp = (props) => (
  <SignupForm {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ SignupFormApp });
