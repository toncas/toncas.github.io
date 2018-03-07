import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Under Construction" />
      </MuiThemeProvider>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
