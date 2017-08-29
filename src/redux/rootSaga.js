import { all } from 'redux-saga/effects';
import jobsSaga from './modules/jobs/saga';

export default function* rootSaga() {
  yield all([
    ...jobsSaga
  ])
};