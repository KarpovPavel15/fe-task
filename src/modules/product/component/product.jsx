import React from 'react';
import './product.scss'

export const Product = ({arr, clickHandler}) => {
        return arr.length !== 0 && arr.map((el, index) => {
                const {img, arrow, data, manufacturer, model, hash, algorithm, efficiency, profit, price, productImg} = el;
                return <tr>
                    {index % 2 === 0 ?
                        <td id={index} className="product" onClick={e => clickHandler(e)}>
                            <div className="product__star"><img src={img.star}/></div>
                            <div className="product__arrow"><img src={arrow.arrow}/></div>
                            <div className="product__release">{data}</div>
                            <div className="product__manufacturer">{manufacturer}</div>
                            <div className="product__model">{model}</div>
                            <div className="product__hash">{hash}</div>
                            <div className="product__algorithm">{algorithm}</div>
                            <div className="product__efficiency">{efficiency}</div>
                            <div className="product__profit">{profit}</div>
                            <div className="product__price">{price}</div>
                        </td>
                        : <td id={index} className="product-v2" onClick={(e) => clickHandler(e)}>
                            <div className="product__star"><img src={img.star}/></div>
                            <div className="product__arrow"><img src={arrow.arrow}/></div>
                            <div className="product__release">{data}</div>
                            <div className="product__manufacturer">{manufacturer}</div>
                            <div className="product__model">{model}</div>
                            <div className="product__hash">{hash}</div>
                            <div className="product__algorithm">{algorithm}</div>
                            <div className="product__efficiency">{efficiency}</div>
                            <div className="product__profit">{profit}</div>
                            <div className="product__price">{price}</div>
                        </td>

                    }
                    <td id={index} className="product-small" onClick={e => clickHandler(e)}>
                        <div className="product-small__info">
                            <div className="product-small__data">
                                <div className="product-small__manufacturer">{manufacturer}</div>
                                <div className="product-small__model">{model}</div>
                            </div>
                            <div className="product-small__star"><img src={img.star}/></div>
                        </div>
                        <img className="product-small__img" src={productImg}/>
                        <div className="product-small__price">{price}</div>
                    </td>
                </tr>
            }
        )
    }
;
