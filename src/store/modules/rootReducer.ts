import { combineReducers } from 'redux';
import comparisonReducer from './comparison/reducer';

const rootReducer = combineReducers({
  comparison: comparisonReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
