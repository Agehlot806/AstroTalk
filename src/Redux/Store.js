import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    console.log('action.type', action.type);
    persistConfig.storage.removeItem('persist:root');

    return persistedReducer(undefined, action);
  }
  return persistedReducer(state, action);
};
const middleware = [thunk];
const enhancers = [applyMiddleware(...middleware)];
const persistConfigEnhancer = {enhancers};
const store = createStore(rootReducer, undefined, compose(...enhancers));

const persistor = persistStore(store, persistConfigEnhancer, () => {});
const configureStore = () => {
  return {persistor, store};
};
export default configureStore;
