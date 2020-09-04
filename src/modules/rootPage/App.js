import React from 'react';
import './App.scss';
import { Header } from '../header';

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <main>
                Main
            </main>
            <footer>
                Footer
            </footer>
        </div>
    );
};

