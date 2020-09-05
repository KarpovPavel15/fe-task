import React from 'react';
import './App.scss';
import { Header } from '../header';
import { MainContent } from '../mainContent';

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <MainContent/>
            <footer>
                Footer
            </footer>
        </div>
    );
};

