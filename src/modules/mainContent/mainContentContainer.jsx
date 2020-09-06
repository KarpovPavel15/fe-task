import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainContent } from './component';
import { setMainPageContentRequestAction } from './actions';

export const MainContentContainer = () => {
    let array = [null, null, 'Release', 'Manufacturer', 'Model', 'Hash', 'Algorithm', 'Efficiency', 'Profit', 'Price'];

    let dispatch = useDispatch();
    let {productsInfo} = useSelector(store => store);

    useEffect(() => {
        dispatch(setMainPageContentRequestAction())
    }, []);

    return (
        <MainContent array={array} productsInfo={productsInfo}/>
    )
};
