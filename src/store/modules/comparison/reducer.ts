import {
  ADD_REPOSITORY_REQUEST,
  ComparisonActionTypes,
  ComparisonState,
} from './types';

const initialState: ComparisonState = {
  loadingAddRepositoryRequest: false,
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
      };

    default:
      return state;
  }
}
