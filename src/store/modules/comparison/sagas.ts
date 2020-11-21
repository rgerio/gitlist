/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, all, takeEvery } from 'redux-saga/effects';

import { AddRepositoryRequestAction, ADD_REPOSITORY_REQUEST } from './types';
import * as actions from './actions';

import api from '../../../services/api';

export function* addRepository({ payload }: AddRepositoryRequestAction) {
  try {
    const { full_name } = payload;

    const response = yield call(api.get, `repos/${full_name}`);

    yield put(actions.addRepositorySuccess(response.data));
  } catch {
    yield put(actions.addRepositoryFailure());
  }
}

export default all([takeEvery(ADD_REPOSITORY_REQUEST, addRepository)]);
