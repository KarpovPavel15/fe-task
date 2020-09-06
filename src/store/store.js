import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import { sagaMainPage } from '../modules/mainContent/sagas';
import { sagaBasket } from '../modules/product/sagas';

const sagas = [
    sagaMainPage,
    sagaBasket
];

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagas.forEach(saga => sagaMiddleware.run(saga));
    return store;
};

export const store = configureStore();
