import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducers/login';

function* login(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOGIN_SUCCESS,
      data: action.data,
    });
    console.log(action.data);
    Router.push('/');
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* loginSaga() {
  yield all([
    fork(watchLogin),
  ]);
}
