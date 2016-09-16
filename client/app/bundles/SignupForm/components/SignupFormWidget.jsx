// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import { RaisedButton, Divider } from 'material-ui';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, 
  FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

// Simple example of a React "dumb" component
export default class SignupFormWidget extends React.Component {
  constructor(props) {
    super(props)
    this.styles = {
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
  }

  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    isValid: PropTypes.bool.isRequired,
    updateAttribute: PropTypes.func.isRequired,
    updateValidStatus: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  };

  // React will automatically provide us with the event `e`
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.props.updateAttribute(name, value);
  }

  submit = () => {
    this.props.submit();
  }

  enableButton = () => {
    this.props.updateValidStatus(true);
  }

  disableButton = () => {
    this.props.updateValidStatus(false);
  }

  render() {
    let { wordsError, emailError, passwordError, minLengthError, maxLengthError } = this.errorMessages;
    let { submitStyle } = this.styles;

    return (
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
          disabled={!this.props.isValid}
          type="submit"
          label="Submit"
        />
      </Formsy.Form>
    );
  }
}
