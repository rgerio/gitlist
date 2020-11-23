import {
  ADD_REPOSITORY_REQUEST,
  ADD_REPOSITORY_SUCCESS,
  ADD_REPOSITORY_FAILURE,
  RepositoryActionTypes,
  Repository,
  DELETE_REPOSITORY,
} from './types';

export function addRepositoryRequest(full_name: string): RepositoryActionTypes {
  return {
    type: ADD_REPOSITORY_REQUEST,
    payload: {
      full_name,
    },
  };
}

export function addRepositorySuccess(
  repository: Repository,
): RepositoryActionTypes {
  return {
    type: ADD_REPOSITORY_SUCCESS,
    payload: repository,
  };
}

export function addRepositoryFailure(): RepositoryActionTypes {
  return {
    type: ADD_REPOSITORY_FAILURE,
  };
}

export function deleteRepository(full_name: string): RepositoryActionTypes {
  return {
    type: DELETE_REPOSITORY,
    payload: {
      full_name,
    },
  };
}
