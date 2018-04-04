import {fork} from 'redux-saga/effects';
import ProductListSaga from './ProductListSaga';

export default function* Sagas() {
    yield* [
        fork(ProductListSaga),
    ];
}


