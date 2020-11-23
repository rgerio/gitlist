import { combineReducers } from 'redux';
import repositoryReducer from './repository/reducer';

const rootReducer = combineReducers({
  repository: repositoryReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
