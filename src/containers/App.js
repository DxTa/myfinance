import React, { Component, PropTypes } from 'react';
import styles from '../stylesheets/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <MuiThemeProvider className={styles.app}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}
