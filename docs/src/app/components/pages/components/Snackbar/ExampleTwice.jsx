import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';
import RaisedButton from 'material-ui/lib/raised-button';

export default class SnackbarExampleTwice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Event added to your calendar',
      open: false,
    };
    this._timerId = undefined;
  }

  componentWillUnMount() {
    clearTimeout(this._timerId);
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });

    this._timerId = setTimeout(() => {
      this.setState({
        message: 'Event ' + Math.round(Math.random() * 100) + ' added to your calendar',
      });
    }, 1500);
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar two times"
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default SnackbarExampleTwice;
