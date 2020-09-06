import { combineReducers } from 'redux';
import { reducerMainPage } from '../modules/mainContent/reducer';

export default combineReducers({
    productsInfo: reducerMainPage
});
