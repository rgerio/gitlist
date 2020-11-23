import {
  ADD_REPOSITORY_FAILURE,
  ADD_REPOSITORY_REQUEST,
  ADD_REPOSITORY_SUCCESS,
  DELETE_REPOSITORY,
  RepositoryActionTypes,
  RepositoryState,
} from './types';

const initialState: RepositoryState = {
  loadingAddRepositoryRequest: false,
  errorAddRepositoryRequest: false,
  repositories: [],
};

export default function repositoryReducer(
  state = initialState,
  action: RepositoryActionTypes,
): RepositoryState {
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
        repositories: [...state.repositories, action.payload],
      };

    case ADD_REPOSITORY_FAILURE:
      return {
        ...state,
        loadingAddRepositoryRequest: false,
        errorAddRepositoryRequest: true,
      };
    case DELETE_REPOSITORY:
      return {
        ...state,
        repositories: state.repositories.filter(
          (repository) => repository.full_name !== action.payload.full_name,
        ),
      };

    default:
      return state;
  }
}
