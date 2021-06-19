import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';
import rootReducer from './root-reducer';
// import  thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import { fetchCollectionsStart } from './shop/shop.saga';
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();


const middlewares = [sagaMiddleware];


if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);

export default store;

