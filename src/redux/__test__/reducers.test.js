import rootReducer from '../reducers';
import { createStore } from 'redux';
import jobs from '../modules/jobs/reducer';

const store = createStore(rootReducer);

describe('root reducers', () => {
  it('must be same as initial state', () => {
    expect(store.getState().jobs).toEqual(jobs(undefined, {}));
  });
});