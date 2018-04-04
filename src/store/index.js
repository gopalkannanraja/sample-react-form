
import {createStore, applyMiddleware} from 'redux';
import Reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import Sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(Sagas);

export default store;