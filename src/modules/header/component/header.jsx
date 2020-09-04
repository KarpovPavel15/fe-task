import React from 'react';
import './header.scss';
import logo from '../../../images/CELogo.svg';
import planet from '../../../images/Group.svg';
import basket from '../../../images/Group117.svg';
import option from '../../../images/controls.svg';
import smallLogo from '../../../images/Group1.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__info">
                <img className="header__logo" src={logo} alt=""/>
                <img className="header__planet" src={planet} alt=""/>
                <select className="header__language">
                    <option>RU</option>
                    <option>ENG</option>
                </select>
            </div>
            <div className="header__option">
                <div>
                    <img className="header__img" src={option} alt=""/>
                </div>
                <div>
                    <img className="header__small-logo" src={smallLogo} alt=""/>
                </div>
                <div className="small-basket">
                    <div className="small-basket__area">
                        <img className="small-basket__img" src={basket} alt=""/>
                        <div className="small-basket__counter-area">
                            <small className="small-basket__count">0</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basket">
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
