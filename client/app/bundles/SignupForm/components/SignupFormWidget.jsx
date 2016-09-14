// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { RaisedButton, Divider } from 'material-ui';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, 
  FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

// Simple example of a React "dumb" component
export default class SignupFormWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = { canSubmit: false }
    this.styles = {
      paperStyle: {
        width: 400,
        margin: 'auto',
        padding: 20,
      },
      switchStyle: {
        marginBottom: 16,
      },
      submitStyle: {
        marginTop: 32,
      },
    };
    this.errorMessages = {
      wordsError: "Please only use letters",
      emailError: "Please provide a valid email",
      passwordError: "Please only use numbers or letters",
      minLengthError: "You can not type in less than 8 characters",
      maxLengthError: "You can not type in more than 20 characters",
    };
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
  }

  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateAttribute: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.props.updateAttribute(name, value);
  }

  submit() {
    this.props.handleSubmit();
  }

  enableButton() {
    this.setState({canSubmit: true});
  }

  disableButton() {
    this.setState({canSubmit: false});
  }

  render() {
    const { name } = this.props;
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, emailError, passwordError, minLengthError, maxLengthError } = this.errorMessages;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={paperStyle}>
          <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <h2>Signup Form</h2>
            <Divider />
            <FormsyText
              name="name"
              type="text"
              onChange={this.handleChange}
              validations="isWords"
              validationError={wordsError}
              fullWidth={true}
              required
              floatingLabelText="Name"
            />
            <FormsyText
              name="email"
              type="email"
              onChange={this.handleChange}
              validations="isEmail"
              validationError={emailError}
              fullWidth={true}
              required
              floatingLabelText="Email"
            />
            <FormsyText
              name="password"
              type="password"
              onChange={this.handleChange}
              validations="isAlphanumeric,minLength:8,maxLength:20"
              validationErrors={{isAlphanumeric: passwordError, minLength: minLengthError, maxLength: maxLengthError}}
              fullWidth={true}
              required
              floatingLabelText="Password"
            />
            <RaisedButton
              style={submitStyle}
              disabled={!this.state.canSubmit}
              type="submit"
              label="Submit"
            />
          </Formsy.Form>
        </Paper>
      </MuiThemeProvider>
    );
  }
}
