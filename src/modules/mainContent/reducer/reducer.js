export const reducerMainPage = (state = [], action) => {
    switch (action.type) {
        case 'SET_MAIN_PAGE_CONTENT_SUCCESS':
            return [
                ...state,
                ...action.array
            ];
        default:
            return state;
    }
};
