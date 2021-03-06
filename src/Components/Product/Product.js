import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {img, name, seller,price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div>
                 <h4 className="product-name">{name}</h4>
                 <br/>
                 <p><small>by: {seller}</small></p>
                 <p>${price}</p>
                 <p><small>Only {stock} left in stock</small></p>
                 <br/>
                 <button className="main-button" onClick={ () => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartArrowDown} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;