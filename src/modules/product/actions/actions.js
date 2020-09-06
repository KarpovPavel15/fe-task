import { actionCreator, requestCreator, successCreator } from '../../../utils';

export const setBasketInfo = 'SET_BASKET_INFO';
export const setBasketInfoRequestAction = actionCreator(requestCreator(setBasketInfo));
export const setBasketInfoSuccessAction = actionCreator(successCreator(setBasketInfo));
