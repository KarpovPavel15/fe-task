import React from 'react';
import './header.scss';
import logo from '../../../images/CELogo.svg';
import planet from '../../../images/Group.svg';
import option from '../../../images/controls.svg';
import smallLogo from '../../../images/Group1.svg';
import { Basket } from '../../../components/basket';

export const Header = ({counter}) => {
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
                <Basket isSmall counter={counter}/>
            </div>
            <Basket counter={counter}/>
        </header>
    )
};
