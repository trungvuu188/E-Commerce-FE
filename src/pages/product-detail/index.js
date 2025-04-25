import React from 'react';
import "./style.scss";
import noImg from "../../assets/img/img-notfound/image-notavailable.png";
import star from "../../assets/icons/Star.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import document from "../../assets/icons/Document.svg";
import buy from "../../assets/icons/Buy.svg";
import bag from "../../assets/icons/Bag.svg";
import heart from "../../assets/icons/Heart.svg";



function ProductDetail(props) {
    return (
        <main className="product-detail">
        <div className="container">
            <div className="product-detail__container">
                <div className="product-detail__content">
                    <div className="row">
                        <div className="col-5 col-xl-6 col-lg-12">
                            <div className="product-detail__images">
                                <div className="product-detail__image">
                                    <img src={noImg} alt="Loading" className="product-detail__image-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-7 col-xl-6 col-lg-12">
                            <section className="product__info">
                                <h1 className="product__heading">Coffee Beans - Espresso Arabica and Robusta Beans</h1>
                                <div className="product__info--container">
                                    <div className="row">
                                        <div className="col-5 col-xl-12">
                                            <div className="product__property product__property--mobile-margin">
                                                <img src={star} alt="Star" className="product__property-icon icon" />
                                                <span className="product__property-title">(3.5) 1100 reviews</span>
                                            </div>
                                            <div className="form__block product__info--select">
                                                <label for="" className="form__label">Size/Weight</label>
                                                <div className="form__action">
                                                    <div className="form__select">
                                                        <div className="form__select--item">
                                                            <span className="form__select--item--title">500g</span>
                                                            <img src={arrowDown} alt="" className="form__select--item--arrow icon" />
                                                        </div>
                                                        <div className="form__select--item">
                                                            <span className="form__select--item--title">Gram</span>
                                                            <img src={arrowDown} alt="" className="form__select--item--arrow icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form__tags">
                                                    <button className="form--tag product-detail__tag">Small</button>
                                                    <button className="form--tag product-detail__tag">Medium</button>
                                                    <button className="form--tag product-detail__tag">Large</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-7 col-xl-12">
                                            <div className="product-detail__col">
                                                <div className="product__property">
                                                    <img src={document} alt="Star" className="product__property-icon icon" />
                                                    <span className="product__property-title">Compare</span>
                                                </div>
                                                <div className="product__property">
                                                    <img src={buy} alt="Star" className="product__property-icon icon" />
                                                    <div>
                                                        <span className="product__property-title">Delivery</span>
                                                        <p className="product__property-desc">From $6 for 1-3 days</p>
                                                    </div>
                                                </div>
                                                <div className="product__property">
                                                    <img src={bag} alt="Star" className="product__property-icon icon" />
                                                    <div>
                                                        <span className="product__property-title">Pickup</span>
                                                        <p className="product__property-desc">Out of 2 store, today</p>
                                                    </div>
                                                </div>
                                                <div className="product__cart">
                                                    <div className="product__cart--row">
                                                        <span className="product__cart--price">Total Price</span>
                                                    </div>
                                                    <span className="product__cart--total-price">$540.00</span>
                                                    <div className="product__cart--row">
                                                        <button className="btn btn--primary product__cart--add-btn">Add to cart</button>
                                                        <button className="product__cart--like">
                                                            <img src={heart} alt="Loading" className="product__cart--like-icon icon" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="product-detail__container">
                    <ul className="product__about">
                        <li className="product__about--item">
                            <a href="#!" className="product__about--link">Description</a>
                        </li>
                        <li className="product__about--item">
                            <a href="#!" className="product__about--link">Features</a>
                        </li>
                        <li className="product__about--item">
                            <a href="#!" className="product__about--link product__about--link-current">Review (1100)</a>
                        </li>
                        <li className="product__about--item">
                            <a href="#!" className="product__about--link">Similar</a>
                        </li>
                    </ul>
                    <div className="product__about--content">
                        <h2 className="product__about--heading">What our customers are saying</h2>
                        <div className="product__review">
                            <div className="row row-cols-3 row-cols-lg-1 g-xl-2">
                                <div className="col">
                                    <div className="product__review--card">
                                        <div className="product__reviewer">
                                            <img src={noImg} alt="Loading" className="product__reviewer--avatar" />
                                            <div className="product__reviewer--background">
                                                <h4 className="product__reviewer--name">Jakir Hussen</h4>
                                                <p className="product__reviewer--comment">Great product, I love this Coffee Beans </p>
                                            </div>
                                        </div>
                                        <div className="product__review--evaluate">
                                            <img src={star} alt="Loading" className="product__review--icon icon" />
                                            <img src={star} alt="Loading" className="product__review--icon icon" />
                                            <img src={star} alt="Loading" className="product__review--icon icon" />
                                            <img src={star} alt="Loading" className="product__review--icon icon" />
                                            <img src={star} alt="Loading" className="product__review--icon icon" />
                                            <span className="product__review--evaluate-title">(5.0) Review</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default ProductDetail;