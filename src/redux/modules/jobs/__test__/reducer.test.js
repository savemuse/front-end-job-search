import { types } from '../constant';
import JobReducer from '../reducer';
import mockJobs from './mocks/mockJobs.json';
import mockLabels from './mocks/mockLabels.json';

describe('jobsReducer', () => {
  let jobsReducer;

  beforeEach(() => {
    jest.resetModules();
    jobsReducer = JobReducer; // eslint-disable-line global-require
  });

  describe('type: GET_JOBS_REQUEST', () => {
    it('should show the initial load status', () => {
      const state = {};
      const result = jobsReducer(state, {
        type: types.GET_JOBS_REQUEST
      });

      expect(result).toEqual({
        ...state,
        loading: true
      });
    });
  });

  describe('type: GET_JOBS_SUCCESS', () => {
    it('should show the success status', () => {
      const state = {};
      const fakeRequestResponse = {
        type: types.GET_JOBS_SUCCESS,
        data: mockJobs
      };
      const result = jobsReducer(state, fakeRequestResponse);
      expect(result).toMatchSnapshot();
    });
  });

  describe('type: GET_JOBS_FAILURE', () => {
    it('should show the initial load status', () => {
      const state = {};
      const result = jobsReducer(state, {
        type: types.GET_JOBS_FAILURE,
        error: 'GET_JOBS_FAILURE'
      });

      expect(result).toEqual({
        ...state,
        loading: false,
        error: 'GET_JOBS_FAILURE'
      });
    });
  });

  describe('type: GET_LABELS_REQUEST', () => {
    it('should show the initial load status', () => {
      const state = {};
      const result = jobsReducer(state, {
        type: types.GET_LABELS_REQUEST
      });

      expect(result).toEqual({
        ...state,
        loading: true
      });
    });
  });

  describe('type: GET_LABELS_SUCCESS', () => {
    it('should show all labels', () => {
      const state = {};
      const fakeRequestResponse = {
        type: types.GET_LABELS_SUCCESS,
        labels: mockLabels
      };
      const result = jobsReducer(state, fakeRequestResponse);
      expect(result).toMatchSnapshot();
    });
  });

  describe('type: GET_LABELS_FAILURE', () => {
    it('should show empty label', () => {
      const state = {};
      const result = jobsReducer(state, {
        type: types.GET_JOBS_FAILURE,
        error: 'GET_LABELS_FAILURE'
      });

      expect(result).toEqual({
        ...state,
        loading: false,
        error: 'GET_LABELS_FAILURE'
      });
    });
  });

  describe('type: GET_JOBS_COUNT_REQUEST', () => {
    it('should show the initial load status', () => {
      const state = {};
      const result = jobsReducer(state, {
        type: types.GET_JOBS_COUNT_REQUEST
      });

      expect(result).toEqual({
        ...state,
        loading: true
      });
    });
  });

  describe('type: GET_JOBS_COUNT_SUCCESS', () => {
    it('should count the jobs', () => {
      const state = {};
      const fakeRequestResponse = {
        type: types.GET_JOBS_COUNT_SUCCESS,
        data: {
          open_issues_count: mockJobs.length
        }
      };
      const result = jobsReducer(state, fakeRequestResponse);
      expect(result).toMatchSnapshot();
    });
  });

  describe('type: GET_JOBS_COUNT_FAILURE', () => {
    it('should fail to count the jobs', () => {
      const state = {};
      const result = jobsReducer(state, {
        type: types.GET_JOBS_FAILURE,
        error: 'GET_JOBS_COUNT_FAILURE'
      });

      expect(result).toEqual({
        ...state,
        loading: false,
        error: 'GET_JOBS_COUNT_FAILURE'
      });
    });
  });

  describe('type: FILTER_JOBS_REQUEST', () => {
    it('should show the initial load status', () => {
      const state = {};
      const result = jobsReducer(state, {
        type: types.FILTER_JOBS_REQUEST
      });

      expect(result).toEqual({
        ...state,
        loading: true
      });
    });
  });

  describe('type: FILTER_JOBS_SUCCESS', () => {
    it('should show the success status', () => {
      const state = {};
      const fakeRequestResponse = {
        type: types.FILTER_JOBS_SUCCESS,
        data: mockJobs
      };
      const result = jobsReducer(state, fakeRequestResponse);
      expect(result).toMatchSnapshot();
    });
  });

  describe('type: FILTER_JOBS_FAILURE', () => {
    it('should show the initial load status', () => {
      const state = {};
      const result = jobsReducer(state, {
        type: types.GET_JOBS_FAILURE,
        error: 'FILTER_JOBS_FAILURE'
      });

      expect(result).toEqual({
        ...state,
        loading: false,
        error: 'FILTER_JOBS_FAILURE'
      });
    });
  });
  
});
