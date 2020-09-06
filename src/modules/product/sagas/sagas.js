import { put, takeLatest } from 'redux-saga/effects';
import { setBasketInfoSuccessAction } from '../actions';

function* setBasketContent({currentElement}) {
    yield put(setBasketInfoSuccessAction({
        array: [...currentElement],
    }));
}

export function* sagaBasket() {
    yield takeLatest('SET_BASKET_INFO_REQUEST', setBasketContent)
}
