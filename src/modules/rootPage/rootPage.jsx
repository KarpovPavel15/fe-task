import React from 'react';
import './root-page.scss';
import { Header } from '../header';
import { MainContent } from '../mainContent';

export const RootPage = () => {
    return (
        <div className="root-page">
            <Header/>
            <MainContent/>
            <footer>
                Footer
            </footer>
        </div>
    );
};

