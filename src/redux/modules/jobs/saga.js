import { call, put, take, fork, select } from 'redux-saga/effects';
import { types } from './constant';
import { api } from '../../../constants/api';
import * as actions from './action';
import { getInitialJobs } from './selector';

export function* getJobsRequestSaga() {
  try {
    const response = yield call(api.getJobsCountApi);
    let data = [];
    for (let page = 1; page <= Math.ceil(response.open_issues_count / 30); page++) {
      const response = yield call(api.getJobsApiByPage, page);
      data = data.concat(response);
    }
    yield put(actions.getJobsSuccess(data));
  } catch (error) {
    yield put(actions.getJobsFailure(error));
  }
}

export function* getLabelsRequestSaga() {
  try {
    let data = [''];
    for (let page = 1; page <= 2; page++) {
      const response = yield call(api.getLabelsApi, page);
      data = data.concat(response.map(label => label.name));
    }
    yield put(actions.getLabelsSuccess(data));
  } catch (error) {
    yield put(actions.getLabelsFailure(error));
  }
}

export function* getJobsCountRequestSaga() {
  try {
    const response = yield call(api.getJobsCountApi);
    yield put(actions.getJobsCountSuccess(response));
  } catch (error) {
    yield put(actions.getJobsCountFailure(error));
  }
}

export function* filterJobsRequestSaga(action) {
  try {
    const params = action.params;
    let jobs = yield select(getInitialJobs);
    if (params.text.trim()) {
      jobs = jobs.filter(job => job.title.includes(params.text.trim()));
    }

    if (params.filter) {
      jobs = jobs.filter(job => {
        return job.labels.some( label => {
          return label.name === params.filter;
        })
      });
    }

    yield put(actions.filterJobsSuccess(jobs));
  } catch (error) {
    yield put(actions.filterJobsFailure(error));
  }
}

export function* watchGetJobs() {
  while (true) {
		yield take(types.GET_JOBS_REQUEST);
		yield fork(getJobsRequestSaga);
	}
}

export function* watchGetLabels() {
  while (true) {
		yield take(types.GET_LABELS_REQUEST);
		yield fork(getLabelsRequestSaga);
	}
}

export function* watchGetJobsCount() {
  while (true) {
		yield take(types.GET_JOBS_COUNT_REQUEST);
		yield fork(getJobsCountRequestSaga);
	}
}

export function* watchFilterJobs() {
  while (true) {
		const action = yield take(types.FILTER_JOBS_REQUEST);
		yield fork(filterJobsRequestSaga, action);
	}
}

export default [
  fork(watchGetJobs),
  fork(watchGetLabels),
  fork(watchGetJobsCount),
  fork(watchFilterJobs),
];