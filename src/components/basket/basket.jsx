import './basket.scss'
import React from 'react';
import basket from '../../images/Group117.svg';

export const Basket = ({isSmall, counter}) => {
    return (
        isSmall ? <div className="small-basket">
            <div className="small-basket__area">
                <img className="small-basket__img" src={basket} alt=""/>
                <div className="small-basket__counter-area">
                    <small className="small-basket__count">{counter}</small>
                </div>
            </div>
        </div> : <div className="basket">
            <div className="basket__area">
                <img className="basket__img" src={basket} alt=""/>
                <div className="basket__counter-area">
                    <small className="basket__count">{counter}</small>
                </div>
            </div>
        </div>
    )
};
