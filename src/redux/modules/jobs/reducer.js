import { handleActions } from 'redux-actions';
import { types } from './constant';

const initialState = {
  loading: false,
  initial_jobs: [],
  filter_jobs: [],
  labels: [],
  jobs_count: 0
};

export default handleActions({
  [types.GET_JOBS_REQUEST]: (state) => {
    return {
      ...state,
      loading: true
    };
  },
  [types.GET_JOBS_SUCCESS]: (state, action) => {
    return {
			...state,
      loading: false,
      initial_jobs: action.data,
      filter_jobs: action.data
		};
  },
  [types.GET_JOBS_FAILURE]: (state, action) => {
    return {
			...state,
			loading: false,
			error: action.error
		};
  },
  [types.GET_LABELS_REQUEST]: (state) => {
    return {
      ...state,
      loading: true
    };
  },
  [types.GET_LABELS_SUCCESS]: (state, action) => {
    return {
			...state,
      loading: false,
      labels: action.data
		};
  },
  [types.GET_LABELS_FAILURE]: (state, action) => {
    return {
			...state,
			loading: false,
			error: action.error
		};
  },
  [types.GET_JOBS_COUNT_REQUEST]: (state) => {
    return {
      ...state,
      loading: true
    };
  },
  [types.GET_JOBS_COUNT_SUCCESS]: (state, action) => {
    return {
			...state,
      loading: false,
      jobs_count: action.data.open_issues_count
		};
  },
  [types.GET_JOBS_COUNT_FAILURE]: (state, action) => {
    return {
			...state,
			loading: false,
			error: action.error
		};
  },
  [types.FILTER_JOBS_REQUEST]: (state) => {
    return {
      ...state,
      loading: true
    };
  },
  [types.FILTER_JOBS_SUCCESS]: (state, action) => {
    return {
			...state,
      loading: false,
      filter_jobs: action.data
		};
  },
  [types.FILTER_JOBS_FAILURE]: (state, action) => {
    return {
			...state,
			loading: false,
			error: action.error
		};
  }
}, initialState);
