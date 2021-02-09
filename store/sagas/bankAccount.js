import { takeLatest, retry, put } from 'redux-saga/effects';
import {
  setAccountData,
  errorAccountData,
  Types as BankAccountTypes,
} from '../ducks/bankAccount';
import APIService from '../../services';

function* getAccountData() {
  try {
    const SECOND = 1000;
    const response = yield retry(3, 1 * SECOND, APIService.getAccountData);
    if (!response.success) {
      throw new Error(response?.error);
    }
    const accountData = response?.result;
    yield put(setAccountData(accountData));
  } catch (error) {
    console.warn('[AccountData] Error - ', error);
    yield put(errorAccountData(error));
  }
}

export function* getAccountDataSaga() {
  yield takeLatest(BankAccountTypes.FETCH_ACCOUNT_DATA, getAccountData);
}
