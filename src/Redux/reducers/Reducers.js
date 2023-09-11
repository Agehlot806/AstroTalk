import { combineReducers } from 'redux';
import { authReducer } from './AuthReducer';
import { HomeReducer } from './HomeReducer';
import { PoojaReducer } from './PoojaReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  homeState: HomeReducer,
  pooja: PoojaReducer
});

export default rootReducer;
