import React from 'react';
import './root-page.scss';
import { HeaderContainer } from '../header';
import { MainContentContainer } from '../mainContent';
import { Footer } from '../footer';

export const RootPage = () => {
    return (
        <div className="root-page">
            <HeaderContainer/>
            <MainContentContainer/>
            <Footer/>
        </div>
    );
};

