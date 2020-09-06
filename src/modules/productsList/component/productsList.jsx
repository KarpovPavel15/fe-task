import React from 'react';
import './productsList.scss';
import { Product } from '../../../components/product';

export const ProductsList = ({array, arr}) => {
    return (
        <table className="productsList">
            <tr className="productsList__paragraphs">
                {
                    array.length !== 0 && array.map(el =>
                        el !== null
                            ? <th className={`productsList__${el.toLowerCase()}`}>
                                {el}
                            </th>
                            : <th className={`productsList__option`}>
                            </th>
                    )
                }
            </tr>
            <Product arr={arr}/>
        </table>
    )
};
