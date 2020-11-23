/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all } from 'redux-saga/effects';
import repositorySagas from './repository/sagas';

export default function* rootSaga() {
  return yield all([repositorySagas]);
}
