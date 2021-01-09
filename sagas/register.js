import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../reducers/register';

function* register(action) {
  try {
    yield delay(1000);
    yield put({
      type: REGISTER_SUCCESS,
      data: action.data,
    });
    console.log(action.data);
  } catch (error) {
    yield put({
      type: REGISTER_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, register);
}

export default function* registerSaga() {
  yield all([
    fork(watchRegister),
  ]);
}
