import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import './App.scss';
import JobsContainer from '../Jobs/JobsContainer';
import logo from './logo.svg';

const Login = (props) => (
  <div>
    <Link to="/login">
      <FlatButton secondary={true} {...this.props} label="login" />
    </Link>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar
          title="前端工作快搜"
          iconElementLeft={<img src={logo} className="banner-logo" alt="logo" />}
          iconElementRight={<Login />}
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