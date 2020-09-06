import React from 'react';
import { Provider } from 'react-redux';
import { RootPage } from './rootPage';
import { store } from '../store';

export default function App() {
    return (
        <Provider store={store}>
            <RootPage/>
        </Provider>
    )
};
