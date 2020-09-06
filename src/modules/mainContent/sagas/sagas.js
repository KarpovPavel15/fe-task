import { call, put, takeLatest } from 'redux-saga/effects';
import { homeAPI } from '../../../api/rest/home/homeAPI';
import { setMainPageContentSuccessAction } from '../actions';

function* setMainPageContent() {
    const arrayData = yield call(homeAPI.getProductList);
    yield put(setMainPageContentSuccessAction({
        array: [...arrayData.data],
    }));
}

export function* sagaMainPage() {
    yield takeLatest('SET_MAIN_PAGE_CONTENT_REQUEST', setMainPageContent)
}
