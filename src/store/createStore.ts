import {
  applyMiddleware,
  createStore,
  Middleware,
  Store,
  Reducer,
} from 'redux';

import { RootState } from './modules/rootReducer';

import { ComparisonActionTypes } from './modules/comparison/types';

export type RootAction = ComparisonActionTypes;

export default (
  reducers: Reducer<RootState, RootAction>,
  middlewares: Middleware[],
): Store<RootState, RootAction> => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
