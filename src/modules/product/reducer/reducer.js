export const reducerBasketInfo = (state = [], action) => {
    switch (action.type) {
        case 'SET_BASKET_INFO_SUCCESS':
            return [
                ...state,
                ...action.array
            ];
        default:
            return state;
    }
};
