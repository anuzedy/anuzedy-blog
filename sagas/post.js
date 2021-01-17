import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { POST_REQUEST, POST_SUCCESS, POST_FAILURE,
  POST_GET_REQUEST, POST_GET_SUCCESS, POST_GET_FAILURE } from '../reducers/post';

function* post(action) {
  try {
    yield delay(1000);
    yield put({
      type: POST_SUCCESS,
      data: action.data,
    });
    console.log(action.data);
  } catch (error) {
    yield put({
      type: POST_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchPost() {
  yield takeLatest(POST_REQUEST, post);
}

function* postGet() {
  try {
    yield delay(1000);
    yield put({
      type: POST_GET_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: POST_GET_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchPostGet() {
  yield takeLatest(POST_GET_REQUEST, postGet);
}

export default function* loginSaga() {
  yield all([
    fork(watchPost),
    fork(watchPostGet),
  ]);
}
