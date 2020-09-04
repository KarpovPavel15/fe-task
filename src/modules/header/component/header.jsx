import React from 'react';
import './header.scss';
import logo from '../../../images/CELogo.svg';
import planet from '../../../images/Group.svg';
import basket from '../../../images/Group117.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="info header__info">
                <img className="info__logo" src={logo} alt=""/>
                <img className="info__planet" src={planet} alt=""/>
                <select className="info__language">
                    <option>RU</option>
                    <option>ENG</option>
                </select>
            </div>
            <div className="basket header__basket">
                <div className="basket__area">
                    <img className="basket__img" src={basket} alt=""/>
                    <div className="basket__counter-area">
                        <small className="basket__count">0</small>
                    </div>
                </div>
            </div>
        </header>
    )
};
