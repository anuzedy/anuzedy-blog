import Router from 'next/router';
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { POST_REQUEST, POST_SUCCESS, POST_FAILURE,
  POST_WRITE_REQUEST, POST_WRITE_SUCCESS, POST_WRITE_FAILURE,
  COMMENT_REQUEST, COMMENT_SUCCESS, COMMENT_FAILURE } from '../reducers/post';

function* post(action) {
  try {
    if (action.data === 0) {
      yield delay(1000);
      yield put({
        type: POST_SUCCESS,
        data: [{
          id: 1,
          title: '첫번째 타이틀',
          content: '첫번째 내용',
          Comments: [{
            id: 1,
            userId: '더미아이디',
            userIcon: '/pngegg.png',
            content: '댓글내용',
          }, {
            id: 2,
            userId: '더미아이디2',
            userIcon: '/pngegg.png',
            content: '댓글내용2',
          }],
        }, {
          id: 2,
          title: '두번째 타이틀',
          content: '두번째 내용',
          Comments: [{
            id: 3,
            userId: '더미아이디3',
            userIcon: '/pngegg.png',
            content: '댓글내용3',
          }, {
            id: 4,
            userId: '더미아이디4',
            userIcon: '/pngegg.png',
            content: '댓글내용4',
          }],
        }],
      });
    }
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
    Router.push('/blog');
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
