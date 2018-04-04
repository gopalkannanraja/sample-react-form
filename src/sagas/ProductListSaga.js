import { put, takeEvery } from 'redux-saga/effects'
import products from '../mock-data/products';


function* fetchProducts(action) {
    try {
        yield put({type: "PRODUCT_SUCCESS", response: products});
    } catch (e) {
        yield put({type: "PRODUCT_ERROR", response: {status: 0,message: 'Server temporarily unavailable...'}
        });
    }
}

export default function* ProductListSaga() {
    yield takeEvery("PRODUCT_REQUEST", fetchProducts);
}
