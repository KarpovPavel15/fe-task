import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './component';

export const HeaderContainer = () => {
    let [counter, setCounter] = useState(0);
    let {basketInfo} = useSelector(store => store);

    useEffect(() => {
        setCounter(basketInfo.length);
    }, [basketInfo]);

    return (
        <Header counter={counter}/>
    )
};
