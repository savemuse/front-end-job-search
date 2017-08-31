import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.scss';
import JobsContainer from '../Jobs/JobsContainer';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar
          title="前端工作快搜"
          iconElementLeft={<img src={logo} className="banner-logo" alt="logo" />}
        />
        <div className="banner">
          <div className="banner-header">
            <h1>大膽表現你的才華</h1>
          </div>
        </div>

        <JobsContainer />
      </div>
    );
  }
}

export default App;
