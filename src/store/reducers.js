import { combineReducers } from 'redux';
import { reducerMainPage } from '../modules/mainContent/reducer';
import { reducerBasketInfo } from '../modules/product/reducer';

export default combineReducers({
    productsInfo: reducerMainPage,
    basketInfo: reducerBasketInfo
});
