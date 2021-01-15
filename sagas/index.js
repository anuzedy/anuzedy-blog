import { all, fork } from 'redux-saga/effects';
import registerSaga from './register';
import loginSaga from './login';
import categorySaga from './category';

export default function* rootSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(categorySaga),
  ]);
}
