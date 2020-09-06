import React from 'react';

export const Product = arr => {
    return arr.map(el =>
        <tr>
            <td className="product">
                <div className="product__star"><img src={el.img.star}/></div>
                <div className="product__arrow"><img src={el.arrow.arrow}/></div>
                <div className="product__release">{el.data}</div>
                <div className="product__manufacturer">{el.manufacturer}</div>
                <div className="product__model">{el.model}</div>
                <div className="product__hash">{el.hash}</div>
                <div className="product__algorithm">{el.algorithm}</div>
                <div className="product__efficiency">{el.efficiency}</div>
                <div className="product__profit">{el.profit}</div>
                <div className="product__price">{el.price}</div>
            </td>
            <td className="product-small">
                <div className="product-small__info">
                    <div className="product-small__data">
                        <div className="product-small__manufacturer">{el.manufacturer}</div>
                        <div className="product-small__model">{el.model}</div>
                    </div>
                    <div className="product-small__star"><img src={el.img.star}/></div>
                </div>
                <img className="product-small__img" src={el.productImg}/>
                <div className="product-small__price">{el.price}</div>
            </td>
        </tr>
    )
};
