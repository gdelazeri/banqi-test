import { all } from 'redux-saga/effects';
import {
  getAccountDataSaga,
} from './bankAccount';

function* rootSaga() {
  yield all([
    getAccountDataSaga(),
  ]);
}

export default rootSaga;
