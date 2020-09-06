import React  from 'react';
import './mainContent.scss';
import news from '../../../images/banner.svg';
import { ProductsList } from '../../productsList';

export const MainContent = ({array,productsInfo}) => {
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
