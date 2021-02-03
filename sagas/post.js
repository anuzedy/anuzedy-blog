import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { POST_REQUEST, POST_SUCCESS, POST_FAILURE,
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
  ]);
}
