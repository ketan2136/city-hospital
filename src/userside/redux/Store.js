//6
import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer"
import thunk from "redux-thunk"
import { persistReducer, persistStore } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../redux/saga/rootSaga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['midicine', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const allMedaleware = [thunk, sagaMiddleware];

export const configureStore = () => {

  let store = createStore(persistedReducer, applyMiddleware(...allMedaleware));

  sagaMiddleware.run(rootSaga)

  return store;
}

export const store = configureStore();
export const persistor = persistStore(store);

