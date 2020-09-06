import React, { useEffect } from 'react';
import './mainContent.scss';
import news from '../../../images/banner.svg';
import { ProductsList } from '../../productsList';
import { useDispatch, useSelector } from 'react-redux';
import { setMainPageContentRequestAction } from '../actions';

export const MainContent = () => {
    let array = [null, null, 'Release', 'Manufacturer', 'Model', 'Hash', 'Algorithm', 'Efficiency', 'Profit', 'Price'];

    let dispatch = useDispatch();
    let {productsInfo} = useSelector(store => store);

    useEffect(() => {
        dispatch(setMainPageContentRequestAction())
    },[]);

    return (
        <main className="mainContent">
            <div className="mainContent__area">
                <section className="sorting mainContent__sorting">
                    <div className="mainContent__columnName">SORT BY</div>
                    <div className="sorting__manufacturer">By Manufacturer</div>
                    <div className="sorting__minPrice">Minimum price</div>
                    <div className="sorting__maxPrice">Maximum price</div>
                </section>
                <div className="mainContent__productsList">
                    <div className="mainContent__columnName">ON SALE</div>
                    <ProductsList array={array} arr={productsInfo}/>
                </div>
            </div>
            <aside className="mainContent__news">
                <div className="mainContent__columnName">News</div>
                <img className="mainContent__banner" src={news} alt=""/>
            </aside>
        </main>
    )
};
