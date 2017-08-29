import { types } from './constant';

export function getJobsRequest() {
  return {
    type: types.GET_JOBS_REQUEST
  };
}

export function getJobsSuccess(data) {
  return {
    type: types.GET_JOBS_SUCCESS,
    data
  };
}

export function getJobsFailure(error) {
  return {
    type: types.GET_JOBS_FAILURE,
    error
  };
}

export function getLabelsRequest() {
  return {
    type: types.GET_LABELS_REQUEST
  };
}

export function getLabelsSuccess(data) {
  return {
    type: types.GET_LABELS_SUCCESS,
    data
  };
}

export function getLabelsFailure(error) {
  return {
    type: types.GET_LABELS_FAILURE,
    error
  };
}

export function getJobsCountRequest() {
  return {
    type: types.GET_JOBS_COUNT_REQUEST
  };
}

export function getJobsCountSuccess(data) {
  return {
    type: types.GET_JOBS_COUNT_SUCCESS,
    data
  };
}

export function getJobsCountFailure(error) {
  return {
    type: types.GET_JOBS_COUNT_FAILURE,
    error
  };
}

export function filterJobsRequest(params) {
  return {
    type: types.FILTER_JOBS_REQUEST,
    params
  };
}

export function filterJobsSuccess(data) {
  return {
    type: types.FILTER_JOBS_SUCCESS,
    data
  };
}

export function filterJobsFailure(error) {
  return {
    type: types.FILTER_JOBS_FAILURE,
    error
  };
}
