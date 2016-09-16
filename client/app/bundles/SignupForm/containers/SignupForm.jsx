import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import SignupFormWidget from '../components/SignupFormWidget';
import MessageDialogWidget from '../components/MessageDialogWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as signupFormActionCreators from '../actions/signupFormActionCreators';

const styles = {
  paperStyle: {
    width: 400,
    margin: 'auto',
    padding: 20,
  },
};

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return {
    $$signupFormStore: state.$$signupFormStore,
    $$messageDialogStore: state.$$messageDialogStore,
  };
}

// Simple example of a React "smart" component
const SignupForm = (props) => {
  const { dispatch, $$signupFormStore, $$messageDialogStore } = props;
  const actions = bindActionCreators(signupFormActionCreators, dispatch);
  const { updateAttribute, updateValidStatus, submit, openDialog, closeDialog } = actions;

  const isValid = $$signupFormStore.get('isValid');
  const open = $$messageDialogStore.get('open');
  const title = $$messageDialogStore.get('title');
  const message = $$messageDialogStore.get('message');

  let {paperStyle} = styles;
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper style={paperStyle}>
        <MessageDialogWidget {...{ open, title, message, closeDialog }} />
        <SignupFormWidget {...{ isValid, updateAttribute, updateValidStatus, submit }} />
      </Paper>
    </MuiThemeProvider>
  );
};

SignupForm.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$signupFormStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$signupFormStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  $$messageDialogStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default connect(select)(SignupForm);
