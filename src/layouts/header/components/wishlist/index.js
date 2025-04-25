import React from 'react';
import { Link } from 'react-router-dom';
import heartIcon from "../../../../assets/icons/Heart.svg";
import arrowUp from "../../../../assets/icons/arrow-up.png";
import imgNotAvailable from "../../../../assets/img/img-notfound/image-notavailable.png"

import "./style.scss";

function WishList(props) {
    return (
        <div className="top-act__dropdown">
            <button className="top-act__btn">
                <img src={heartIcon} alt="Loading" className="top-act__icon icon" />
                <span className="top-act__title">03</span>
            </button>
            <div className="check-out__cart">
                <div className="check-out__cart-inner">
                    <img src={arrowUp} alt="Loading" className="check-out__arrow icon" />
                    <div className="check-out__cart--row">
                        <h2 className="check-out__title">You have 3 item</h2>
                        <Link to="/favourite" className="check-out__see-all">See All</Link>
                    </div>
                    <div className="check-out__product-list">
                        <div className="row row-cols-3">
                            <div className="col">
                                <WishListItem />
                            </div>
                            <div className="col">
                                <WishListItem />
                            </div>
                            <div className="col">
                                <WishListItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WishListItem = () => {
    return (
        <div className="check-out__item">
            <div className="check-out__item-thumb">
                <img src={imgNotAvailable} alt="Loading" className="check-out__item-img" />
            </div>
            <span className="check-out__item--title">Lavazza Coffee Blends </span>
            <span className="check-out__item--price">$329.00</span>
        </div>
    )
}

export default WishList;