import { ADD_REPOSITORY_REQUEST, ComparisonActionTypes } from './types';

export function addRepositoryRequest(full_name: string): ComparisonActionTypes {
  return {
    type: ADD_REPOSITORY_REQUEST,
    payload: {
      full_name,
    },
  };
}
