/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, all, takeEvery, select } from 'redux-saga/effects';

import {
  AddRepositoryRequestAction,
  ADD_REPOSITORY_REQUEST,
  Repository,
} from './types';
import * as actions from './actions';

import api from '../../../services/api';
import { RootState } from '../rootReducer';

export function* addRepository({ payload }: AddRepositoryRequestAction) {
  try {
    const { full_name } = payload;

    const repositories: Repository[] = yield select(
      (state: RootState) => state.repository.repositories,
    );

    const repositoriesIndex = repositories.findIndex(
      (repository) => repository.full_name === full_name,
    );

    if (repositoriesIndex >= 0) {
      throw new Error('Repository already added');
    }

    const response = yield call(api.get, `repos/${full_name}`);

    yield put(actions.addRepositorySuccess(response.data));
  } catch {
    yield put(actions.addRepositoryFailure());
  }
}

export default all([takeEvery(ADD_REPOSITORY_REQUEST, addRepository)]);
