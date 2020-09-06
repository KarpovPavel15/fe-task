import React from 'react';
import './mainContent.scss';
import news from '../../../images/banner.svg';
import { ProductsList } from '../../productsList';
import arrow from '../../../images/arrow.svg'
import star from '../../../images/star.svg'
import productImg from '../../../images/14.png'
import productImg2 from '../../../images/71.png'

export const MainContent = () => {
    let array = [null, null, 'Release', 'Manufacturer', 'Model', 'Hash', 'Algorithm', 'Efficiency', 'Profit', 'Price'];
    let arr = [{
        img: {star},
        productImg:productImg,
        arrow: {arrow},
        data: 'Mar 2019',
        manufacturer: 'Bitmain',
        model: 'S9i',
        hash: '10.5-14.5 th/s',
        algorithm: 'SHA-256',
        efficiency: '8.00j/H/s',
        profit: '$122.8/day',
        price: '$137-$217'

    },{
        img: {star},
        productImg:productImg2,
        arrow: {arrow},
        data: 'Mar 2019',
        manufacturer: 'Bitmain',
        model: 'S9i',
        hash: '10.5-14.5 th/s',
        algorithm: 'SHA-256',
        efficiency: '8.00j/H/s',
        profit: '$122.8/day',
        price: '$137-$217'

    }];
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
                    <ProductsList array={array} arr={arr}/>
                </div>
            </div>
            <aside className="mainContent__news">
                <div className="mainContent__columnName">News</div>
                <img className="mainContent__banner" src={news} alt=""/>
            </aside>
        </main>
    )
};
