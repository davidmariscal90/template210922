
/**import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from './sagas/RootSagas';
import reducers from './reducers/'

const sagaMiddleware:SagaMiddleware<object> = createSagaMiddleware();

const rootReducer = (state:any, action:any) => {
    return reducers(state, action);
  };

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;*/

import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user']
}
import rootReducer from './reducers';

const persistedReducer = persistReducer(persistConfig, rootReducer)

import thunk from 'redux-thunk';
const middlewares = [thunk]
const enhancers = [applyMiddleware(...middlewares)]
export const store = createStore(persistedReducer, compose(...enhancers))
export const store2 = configureStore({reducer: rootReducer, middleware: middlewares})
export const persistor = persistStore(store)