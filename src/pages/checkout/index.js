import React from 'react';
import noImg from "../../assets/img/img-notfound/image-notavailable.png";
import heart from "../../assets/icons/Heart.svg";
import trash from "../../assets/icons/Delete.svg";
import arrowDown from "../../assets/icons/arrow-down-checkout.png";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import gift from "../../assets/icons/check-out-gift.svg";
import { Link } from 'react-router-dom';
import "./style.scss";

function Checkout(props) {
    return (
        <main className="check-out">
            <div className="container">
                <div className="check-out__container">
                    <div className="row">
                        <div className="col-8 col-xl-12">
                            <div className="check-out__content">
                                <ul className="check-out__list">
                                    <li className="check-out__item">
                                        <CheckoutItem />
                                    </li>
                                    <li className="check-out__item">
                                        <CheckoutItem />
                                    </li>
                                    <li className="check-out__item">
                                        <CheckoutItem />
                                    </li>
                                </ul>
                                <div className="check-out__bottom">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="check-out__navigation">
                                                <Link to="/" className="check-out__continue-shopping">
                                                    <img src={arrowDown} alt="Loading"
                                                        className="check-out__continue-icon icon" />
                                                    Continue Shopping
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-xl-12">
                            <div className="check-out__content">
                                <div className="check-out__price-cart">
                                    <div className="check-out__row">
                                        <span>Subtotal <span className="check-out__title-normal">(items)</span></span>
                                        <span>3</span>
                                    </div>
                                    <div className="check-out__row">
                                        <span>Price <span className="check-out__title-normal">(Total)</span></span>
                                        <span>$191.65</span>
                                    </div>
                                    <div className="check-out__row check-out__row-bold">
                                        <span>Shipping</span>
                                        <span>$10.00</span>
                                    </div>
                                    <div className="check-out__seperate"></div>
                                    <div className="check-out__row check-out__row-bold">
                                        <span>Estimated Total</span>
                                        <span>$201.65</span>
                                    </div>
                                    <Link to="#!" className="btn btn--primary btn--rounded check-out__continue-btn">Continue to checkout</Link>
                                </div>
                            </div>
                            <a href="#!">
                                <div className="check-out__content">
                                    <article className="check-out__gift">
                                        <div className="check-out__gift--thumb-warp">
                                            <img src={gift} alt="" />
                                        </div>
                                        <div className="check-out__gift--content">
                                            <h4 className="check-out__gift-title">Send this order as a gift.</h4>
                                            <p className="check-out__gift-desc">Available items will be shipped to your gift
                                                recipient.
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const CheckoutItem = (props) => {
    return (
        <div className="check-out__product">
            <div className="check-out__thumb">
                <img src={noImg} alt="Loading"
                    className="check-out__thumb-img" />
            </div>
            <div className="check-out__item-content">
                <div className="check-out__item-content-left">
                    <h3 className="check-out__title">Coffee Beans - Espresso Arabica and Robusta
                        Beans</h3>
                    <span className="check-out__price">$47.00 | <span
                            className="check-out__price-status">In Stock</span></span>
                    <div className="check-out__control">
                        <div className="check-out__control-adjust">
                            <span className="check-out__control-title">LavAzza</span>
                            <img className="icon" src={arrowDown} alt="Loading" />
                        </div>
                        <div className="check-out__control-adjust">
                            <img className="icon" src={minus} alt="Loading" />
                            <span className="check-out__control-title">1</span>
                            <img className="icon" src={plus} alt="Loading" />
                        </div>
                    </div>
                </div>
                <div className="check-out__item-content-right">
                    <span className="check-out__total">$47.00</span>
                    <div className="check-out__control">
                        <button className="check-out__action">
                            <img src={heart} alt="Loading" className='icon' />
                            Save
                        </button>
                        <button className="check-out__action">
                            <img src={trash} alt="Loading" className='icon' />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;