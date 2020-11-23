import {
  applyMiddleware,
  createStore,
  Middleware,
  Store,
  Reducer,
} from 'redux';

import { RootState } from './modules/rootReducer';

import { RepositoryActionTypes } from './modules/repository/types';

export type RootAction = RepositoryActionTypes;

export default (
  reducers: Reducer,
  middlewares: Middleware[],
): Store<RootState, RootAction> => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
