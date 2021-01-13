import { all, fork } from 'redux-saga/effects';
import registerSaga from './register';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
  ]);
}
