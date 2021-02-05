import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { POST_REQUEST, POST_SUCCESS, POST_FAILURE,
  POST_WRITE_REQUEST, POST_WRITE_SUCCESS, POST_WRITE_FAILURE,
  COMMENT_REQUEST, COMMENT_SUCCESS, COMMENT_FAILURE } from '../reducers/post';

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

function* postWrite(action) {
  try {
    yield delay(1000);
    yield put({
      type: POST_WRITE_SUCCESS,
      data: action.data,
    });
    console.log(action.data);
  } catch (error) {
    yield put({
      type: POST_WRITE_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchPostWrite() {
  yield takeLatest(POST_WRITE_REQUEST, postWrite);
}

function* comment(action) {
  try {
    yield delay(1000);
    yield put({
      type: COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: COMMENT_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchComment() {
  yield takeLatest(COMMENT_REQUEST, comment);
}

export default function* postSaga() {
  yield all([
    fork(watchPost),
    fork(watchComment),
    fork(watchPostWrite),
  ]);
}
