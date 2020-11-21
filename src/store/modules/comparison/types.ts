interface Repository {
  readonly full_name: string;
  readonly stargazers_count: number;
}

export interface ComparisonState {
  readonly loadingAddRepositoryRequest: boolean;
  readonly repositoryList: Repository[];
}

export const ADD_REPOSITORY_REQUEST = 'comparison/ADD_REPOSITORY_REQUEST';

interface AddRepositoryRequestAction {
  type: typeof ADD_REPOSITORY_REQUEST;
  payload: {
    full_name: string;
  };
}

export type ComparisonActionTypes = AddRepositoryRequestAction;
