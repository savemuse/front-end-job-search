import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.scss';
import JobsContainer from '../Jobs/JobsContainer';
// import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar
          title="Front-End Job"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div className="banner">
          <div className="banner-header">
            {/* <img src={logo} className="banner-logo" alt="logo" /> */}
            <h1>盡情展現屬於你的才華</h1>
          </div>
        </div>

        <JobsContainer />
      </div>
    );
  }
}

export default App;
