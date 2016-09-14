import React, { PropTypes } from 'react';
import SignupFormWidget from '../components/SignupFormWidget';

// Simple example of a React "smart" component
export default class SignupForm extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: '', email: '', password: '' };
  }

  updateAttribute(name, value) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    console.log(this.state);
    alert('[Dummy Form] Name: ' + this.state.name + ' Email: ' + this.state.email);
  }

  render() {
    return (
      <div>
        <SignupFormWidget
          updateAttribute={(name, value) => this.updateAttribute(name, value)}
          handleSubmit={() => this.handleSubmit()} />
      </div>
    );
  }
}
