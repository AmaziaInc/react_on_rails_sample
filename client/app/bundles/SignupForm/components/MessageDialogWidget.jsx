// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import { Dialog, FlatButton } from 'material-ui';

// Simple example of a React "dumb" component
export default class MessageDialogWidget extends React.Component {

  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    message: PropTypes.string,
    closeDialog: PropTypes.func.isRequired,
  };

  handleClose = () => {
    this.props.closeDialog();
  }

  render() {
    const { open, title, message } = this.props;

    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <Dialog
        open={open}
        title={title}
        onRequestClose={this.handleClose}
        actions={actions}>
        {message}
      </Dialog>
    );
  }
}
