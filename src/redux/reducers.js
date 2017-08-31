import { combineReducers } from 'redux';
import jobs from './modules/jobs/reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  jobs,
});

export default rootReducer;