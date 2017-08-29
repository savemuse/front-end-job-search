import * as JobAction from '../action';

describe('jobsAction', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('type: GET_JOBS_REQUEST', () => {
    it('should show the initial load status', () => {
      expect(JobAction.getJobsRequest()).toEqual({ type: 'GET_JOBS_REQUEST' });
    });
  });

  describe('type: GET_JOBS_SUCCESS', () => {
    it('should get job successfully', () => {
      expect(JobAction.getJobsSuccess([])).toEqual({ 
        type: 'GET_JOBS_SUCCESS',
        data: [] 
      });
    });
  });

  describe('type: GET_JOBS_FAILURE', () => {
    it('should get jobs fail', () => {
      expect(JobAction.getJobsFailure('GET_JOBS_FAILURE')).toEqual({ 
        type: 'GET_JOBS_FAILURE',
        error: 'GET_JOBS_FAILURE' 
      });
    });
  });

  describe('type: GET_LABELS_REQUEST', () => {
    it('should show the initial load status', () => {
      expect(JobAction.getLabelsRequest()).toEqual({ type: 'GET_LABELS_REQUEST' });
    });
  });

  describe('type: GET_JOBS_SUCCESS', () => {
    it('should get labels successfully', () => {
      expect(JobAction.getLabelsSuccess([])).toEqual({ 
        type: 'GET_LABELS_SUCCESS',
        data: [] 
      });
    });
  });

  describe('type: GET_LABELS_FAILURE', () => {
    it('should get labels fail', () => {
      expect(JobAction.getLabelsFailure('GET_LABELS_FAILURE')).toEqual({ 
        type: 'GET_LABELS_FAILURE',
        error: 'GET_LABELS_FAILURE' 
      });
    });
  });

  describe('type: GET_JOBS_COUNT_REQUEST', () => {
    it('should show the initial load status', () => {
      expect(JobAction.getJobsCountRequest()).toEqual({ type: 'GET_JOBS_COUNT_REQUEST' });
    });
  });

  describe('type: GET_JOBS_COUNT_SUCCESS', () => {
    it('should get jobs count successfully', () => {
      expect(JobAction.getJobsCountSuccess([])).toEqual({ 
        type: 'GET_JOBS_COUNT_SUCCESS',
        data: [] 
      });
    });
  });

  describe('type: GET_JOBS_COUNT_FAILURE', () => {
    it('should get labels fail', () => {
      expect(JobAction.getJobsCountFailure('GET_JOBS_COUNT_FAILURE')).toEqual({ 
        type: 'GET_JOBS_COUNT_FAILURE',
        error: 'GET_JOBS_COUNT_FAILURE' 
      });
    });
  });

  describe('type: FILTER_JOBS_REQUEST', () => {
    it('should show the initial load status', () => {
      expect(JobAction.filterJobsRequest([])).toEqual({ 
        type: 'FILTER_JOBS_REQUEST',
        params: [] 
      });
    });
  });

  describe('type: FILTER_JOBS_SUCCESS', () => {
    it('should filter jobs successfully', () => {
      expect(JobAction.filterJobsSuccess([])).toEqual({ 
        type: 'FILTER_JOBS_SUCCESS',
        data: [] 
      });
    });
  });

  describe('type: FILTER_JOBS_FAILURE', () => {
    it('should filter jobs fail', () => {
      expect(JobAction.filterJobsFailure('FILTER_JOBS_FAILURE')).toEqual({ 
        type: 'FILTER_JOBS_FAILURE',
        error: 'FILTER_JOBS_FAILURE' 
      });
    });
  });

});
