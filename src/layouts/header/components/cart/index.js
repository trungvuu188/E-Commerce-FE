import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from "../../../../assets/icons/Buy.svg";
import arrowUp from "../../../../assets/icons/arrow-up.png";
import imgNotAvailable from "../../../../assets/img/img-notfound/image-notavailable.png";
import "./style.scss";

function Cart(props) {
    return (
        <div className="top-act__dropdown">
            <button className="top-act__btn">
                <img src={cartIcon} alt="Loading" className="icon top-act__icon" />
                <span className="top-act__title">$65.42</span>
            </button>
            <div className="check-out__cart">
                <div className="check-out__cart-inner">
                    <img src={arrowUp} alt="Loading" className="check-out__arrow" />
                    <div className="check-out__cart--row">
                        <h2 className="check-out__title">You have 3 item</h2>
                        <Link to="/favourite" className="check-out__see-all">See All</Link>
                    </div>
                    <div className="check-out__product-list">
                        <div className="row row-cols-3">
                            <div className="col">
                                <CartItem />
                            </div>
                            <div className="col">
                                <CartItem />
                            </div>
                            <div className="col">
                                <CartItem />
                            </div>
                        </div>
                    </div>
                    <div className="check-out__payment">
                        <div className="check-out__cart--row">
                            <span className="check-out__label">Subtotal</span>
                            <span className="check-out__value">$415.99</span>
                        </div>
                        <div className="check-out__cart--row">
                            <span className="check-out__label">Texes</span>
                            <span className="check-out__value">Free</span>
                        </div>
                        <div className="check-out__cart--row">
                            <span className="check-out__label">Shipping</span>
                            <span className="check-out__value">$10.00</span>
                        </div>
                        <div className="check-out__cart--row check-out__cart--total">
                            <span className="check-out__label">Total Price</span>
                            <span className="check-out__value">$425.99</span>
                        </div>
                    </div>
                    <div className="check-out__cta">
                        <Link to="/checkout" className="btn btn--primary btn--rounded check-out__btn">Check out all</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CartItem = () => {
    return (
        <div className="check-out__item">
            <div className="check-out__item-thumb">
                <img src={imgNotAvailable} alt="Loading" className="check-out__item-img" />
            </div>
            <span className="check-out__item--title">Qualità Oro Mountain</span>
            <span className="check-out__item--price">$47.00</span>
        </div>
    )
}

export default Cart;