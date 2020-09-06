import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from './component';
import { setBasketInfoRequestAction } from './actions';

export const ProductContainer = ({arr}) => {
        let dispatch = useDispatch();
        let {productsInfo} = useSelector(store => store);
        let {basketInfo} = useSelector(store => store);

        let clickHandler = e => {
            let currentElement = productsInfo.filter((elem, index) => index === +e.currentTarget.id);
            if (basketInfo.length === 0) {
                dispatch(setBasketInfoRequestAction({currentElement}))
            }
            if (basketInfo.length > 0) {
                if (basketInfo.includes(currentElement[0])) {
                    return null
                } else dispatch(setBasketInfoRequestAction({currentElement}))
            }
        };

        return <Product arr={arr} clickHandler={clickHandler}/>
    }
;
