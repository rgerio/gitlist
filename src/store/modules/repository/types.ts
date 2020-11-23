interface MinifiedUser {
  login: string;
  avatar_url: string;
}

export interface Repository {
  full_name: string;
  description: string;
  owner: MinifiedUser;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
}

export interface RepositoryState {
  readonly loadingAddRepositoryRequest: boolean;
  readonly errorAddRepositoryRequest: boolean;
  readonly repositories: Repository[];
}

export const ADD_REPOSITORY_REQUEST = '@repository/ADD_REPOSITORY_REQUEST';

export interface AddRepositoryRequestAction {
  type: typeof ADD_REPOSITORY_REQUEST;
  payload: {
    full_name: string;
  };
}

export const ADD_REPOSITORY_SUCCESS = '@repository/ADD_REPOSITORY_SUCCESS';

export interface AddRepositorySuccessAction {
  type: typeof ADD_REPOSITORY_SUCCESS;
  payload: Repository;
}

export const ADD_REPOSITORY_FAILURE = '@repository/ADD_REPOSITORY_FAILURE';

export interface AddRepositoryFailureAction {
  type: typeof ADD_REPOSITORY_FAILURE;
}

export const DELETE_REPOSITORY = '@repository/DELETE_REPOSITORY';

export interface DeleteRepositoryAction {
  type: typeof DELETE_REPOSITORY;
  payload: {
    full_name: string;
  };
}

export type RepositoryActionTypes =
  | AddRepositoryRequestAction
  | AddRepositorySuccessAction
  | AddRepositoryFailureAction
  | DeleteRepositoryAction;
