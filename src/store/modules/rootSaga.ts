/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all } from 'redux-saga/effects';
import comparisonSagas from './comparison/sagas';

export default function* rootSaga() {
  return yield all([comparisonSagas]);
}
