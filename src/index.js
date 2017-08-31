import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/configureStore';
import App from './containers/App/App';
import Login from './containers/Login/Login';
import './index.scss';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
