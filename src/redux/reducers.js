import { combineReducers } from 'redux';
import jobs from './modules/jobs/reducer';

const rootReducer = combineReducers({
  jobs
});

export default rootReducer;