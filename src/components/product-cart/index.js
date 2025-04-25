import React from 'react';
import noImg from "../../assets/img/img-notfound/image-notavailable.png";
import heart from "../../assets/icons/Heart.svg";
import star from "../../assets/icons/Star.svg";
import heartRed from "../../assets/icons/Heart-red.svg";

import "./style.scss";
import { Link } from 'react-router-dom';

function ProductCart(props) {
    return (
        <article className="product-cart">
            <div className="product-cart__thumb">
                <Link to="/product">
                    <img src={noImg} alt="Loading" className="product-cart__img" />
                </Link>
                <button className="like-btn product-cart__like-btn">
                    <img src={heart} alt="Loading" className="like-btn__icon icon icon" />
                    <img src={heartRed} alt="Loading" className="like-btn__icon-liked" />
                </button>
            </div>
            <h3 className="product-cart__title">
                <Link to="/product">
                    Coffee Beans - Espresso Arabica and Robusta Beans
                </Link>
            </h3>
            <span className="product-cart__brand">Lavazza</span>
            <div className="product-cart__row">
                <span className="product-cart__price">$47.00</span>
                <img src={star} alt="Loading" className="product-cart__star icon" />
                <span className="product-cart__evaluate">4.3</span>
            </div>
        </article>
    );
}

export default ProductCart;