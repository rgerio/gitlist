import {
  ADD_REPOSITORY_FAILURE,
  ADD_REPOSITORY_REQUEST,
  ADD_REPOSITORY_SUCCESS,
  ComparisonActionTypes,
  ComparisonState,
} from './types';

const initialState: ComparisonState = {
  loadingAddRepositoryRequest: false,
  errorAddRepositoryRequest: false,
  repositoryList: [],
};

export default function comparisonReducer(
  state = initialState,
  action: ComparisonActionTypes,
): ComparisonState {
  switch (action.type) {
    case ADD_REPOSITORY_REQUEST:
      return {
        ...state,
        loadingAddRepositoryRequest: true,
        errorAddRepositoryRequest: false,
      };

    case ADD_REPOSITORY_SUCCESS:
      return {
        ...state,
        loadingAddRepositoryRequest: false,
        errorAddRepositoryRequest: false,
        repositoryList: [...state.repositoryList, action.payload],
      };

    case ADD_REPOSITORY_FAILURE:
      return {
        ...state,
        loadingAddRepositoryRequest: false,
        errorAddRepositoryRequest: true,
      };

    default:
      return state;
  }
}
