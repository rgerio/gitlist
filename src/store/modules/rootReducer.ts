import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import repositoryReducer from './repository/reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['repository'],
};

const repositoryPersistConfig = {
  key: 'repository',
  storage,
  whitelist: ['repositories'],
};

const rootReducer = combineReducers({
  repository: persistReducer(repositoryPersistConfig, repositoryReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;

export type RootState = ReturnType<typeof persistedReducer>;
