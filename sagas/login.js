import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../reducers/login';

function* login(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOGIN_SUCCESS,
      data: {
        id: action.data.email,
        User: {
          id: 'anuzedy',
          nickname: 'anuzedy',
          thumbnail: '/pngegg.png',
        },
      },
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

function* logout() {
  try {
    yield delay(1000);
    yield put({
      type: LOGOUT_SUCCESS,
    });
    Router.push('/');
  } catch (error) {
    yield put({
      type: LOGOUT_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default function* loginSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
  ]);
}
