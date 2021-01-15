import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAILURE } from '../reducers/category';

function* category() {
  try {
    yield delay(1000);
    yield put({
      type: CATEGORY_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: CATEGORY_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchCategory() {
  yield takeLatest(CATEGORY_REQUEST, category);
}

export default function* registerSaga() {
  yield all([
    fork(watchCategory),
  ]);
}
