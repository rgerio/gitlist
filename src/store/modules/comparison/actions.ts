import {
  ADD_REPOSITORY_REQUEST,
  ADD_REPOSITORY_SUCCESS,
  ADD_REPOSITORY_FAILURE,
  ComparisonActionTypes,
  Repository,
} from './types';

export function addRepositoryRequest(full_name: string): ComparisonActionTypes {
  return {
    type: ADD_REPOSITORY_REQUEST,
    payload: {
      full_name,
    },
  };
}

export function addRepositorySuccess({
  full_name,
  stargazers_count,
}: Repository): ComparisonActionTypes {
  return {
    type: ADD_REPOSITORY_SUCCESS,
    payload: {
      full_name,
      stargazers_count,
    },
  };
}

export function addRepositoryFailure(): ComparisonActionTypes {
  return {
    type: ADD_REPOSITORY_FAILURE,
  };
}
