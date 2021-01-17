import { all, fork } from 'redux-saga/effects';
import registerSaga from './register';
import loginSaga from './login';
import categorySaga from './category';
import postSaga from './post';

export default function* rootSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(categorySaga),
    fork(postSaga),
  ]);
}
