import { call, put } from 'redux-saga/effects';
import * as JobsSaga from '../saga';
import * as actions from '../action';
import { api } from '../../../../constants/api';
const state = { jobs: {} };
const getState = () => state;

describe('jobsSaga', () => {
  let jobsSaga;

  beforeEach(() => {
    jest.resetModules();
    jobsSaga = JobsSaga; // eslint-disable-line global-require
  });

  describe('getJobsCountRequest Saga test', () => {
    it('must yield api.getJobsCountApi', () => {
      const generator = JobsSaga.getJobsCountRequestSaga(getState);
      let next = generator.next(actions.getJobsCountRequest())
      expect(next.value).toEqual(call(api.getJobsCountApi));
      next = generator.next({});
      expect(next.value).toEqual(put(actions.getJobsCountSuccess({})));
      expect(generator.next()).toEqual({ 
        value: undefined,
        done: true 
      });
    });
  });

});
