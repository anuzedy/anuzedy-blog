import { all, fork } from 'redux-saga/effects';
import registerSaga from './register';

export default function* rootSaga() {
  yield all([
    fork(registerSaga),
  ]);
}
