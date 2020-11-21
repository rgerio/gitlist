export interface Repository {
  readonly full_name: string;
  readonly stargazers_count: number;
}

export interface ComparisonState {
  readonly loadingAddRepositoryRequest: boolean;
  readonly errorAddRepositoryRequest: boolean;
  readonly repositoryList: Repository[];
}

export const ADD_REPOSITORY_REQUEST = 'comparison/ADD_REPOSITORY_REQUEST';

export interface AddRepositoryRequestAction {
  type: typeof ADD_REPOSITORY_REQUEST;
  payload: {
    full_name: string;
  };
}

export const ADD_REPOSITORY_SUCCESS = 'comparison/ADD_REPOSITORY_SUCCESS';

export interface AddRepositorySuccessAction {
  type: typeof ADD_REPOSITORY_SUCCESS;
  payload: Repository;
}

export const ADD_REPOSITORY_FAILURE = 'comparison/ADD_REPOSITORY_FAILURE';

export interface AddRepositoryFailureAction {
  type: typeof ADD_REPOSITORY_FAILURE;
}

export type ComparisonActionTypes =
  | AddRepositoryRequestAction
  | AddRepositorySuccessAction
  | AddRepositoryFailureAction;
