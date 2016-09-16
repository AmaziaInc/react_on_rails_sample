import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';

import createStore from '../store/signupFormStore';
import SignupForm from '../containers/SignupForm';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const SignupFormApp = (props, _railsContext) => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <SignupForm />
    </Provider>
  );
  return reactComponent;
};

// This is how react_on_rails can see the SignupFormApp in the browser.
ReactOnRails.register({ SignupFormApp });
