import React from 'react';
import noImg from "../../assets/img/img-notfound/image-notavailable.png";
import heart from "../../assets/icons/Heart.svg";
import trash from "../../assets/icons/Delete.svg";
import arrowDown from "../../assets/icons/arrow-down-checkout.png";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import gift from "../../assets/icons/check-out-gift.svg";
import { Link, Links } from 'react-router-dom';
import "./style.scss";

function Favourite(props) {
    return (
        <main className="check-out">
            <div className="container">
                <div className="check-out__container">
                    <div className="check-out__content">
                        <h3 className="check-out__list-heading favorite-heading">Favourite List</h3>
                        <span className="check-out__total-items">3 items</span>
                        <div className="check-out__seperate"></div>
                        <ul className="check-out__list">
                            <li className="check-out__item">
                                <FavouriteItem />
                            </li>
                            <li className="check-out__item">
                                <FavouriteItem />
                            </li>
                            <li className="check-out__item">
                                <FavouriteItem />
                            </li>
                        </ul>
                        <div className="check-out__bottom">
                            <div className="check-out__navigation check-out__navigation-favorite">
                                <Link to="/" className="check-out__continue-shopping">
                                    <img src={arrowDown} alt=""
                                        className="check-out__continue-icon icon" />
                                    Continue Shopping
                                </Link>
                                <Link to="/checkout" className="btn btn--primary btn--rounded check-out__all-btn">All
                                    check out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const FavouriteItem = (props) => {
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
                    <span className="check-out__price">$47.00 | <span className="check-out__price-status">In
                            Stock</span></span>
                    <div className="check-out__control">
                        <div className="check-out__control-adjust">
                            <span className="check-out__control-title">LavAzza</span>
                            <img className="icon" src={arrowDown}
                                alt="Loading" />
                        </div>
                        <div className="check-out__control-adjust">
                            <img className="icon" src={minus} alt="Loading" />
                            <span className="check-out__control-title">1</span>
                            <img className="icon" src={plus} alt="Loading" />
                        </div>
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
                <div className="check-out__item-content-right check-out__favorite-action">
                    <span className="check-out__total">$47.00</span>
                    <Link to="/checkout" className="btn btn--primary btn--rounded">Check out</Link>
                </div>
            </div>
        </div>
    )
}

export default Favourite;