// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, 
  FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

// Simple example of a React "dumb" component
export default class HelloWorldWidget extends React.Component {
  constructor(props) {
    super(props)
    this.styles = {
      paperStyle: {
        width: 300,
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
    this.handleChange = this.handleChange.bind(this)
  }
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    const { name } = this.props;
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={paperStyle}>
          <div className="container">
            <h3>
              Hello, {name}!
            </h3>
            <hr />
            <Formsy.Form>
              <FormsyText
                name="name"
                type="text"
                floatingLabelText="Name"
                value={name}
                onChange={this.handleChange}
              />
            </Formsy.Form>
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}
