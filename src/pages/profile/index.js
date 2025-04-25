import React from 'react';
import "./style.scss";
import profileIcon from "../../assets/icons/profile.svg";
import callingIcon from "../../assets/icons/calling.svg";
import locationIcon from "../../assets/icons/location.svg";
import messageIcon from "../../assets/icons/message-2.svg";
import message1Icon from "../../assets/icons/message.svg";
import downloadIcon from "../../assets/icons/download.svg";
import heartIcon from "../../assets/icons/Heart.svg";
import giftIcon from "../../assets/icons/gift-2.svg";
import shieldIcon from "../../assets/icons/shield.svg";
import infoIcon from "../../assets/icons/info.svg";
import plusIcon from "../../assets/icons/plus.svg";
import dangerIcon from "../../assets/icons/danger.svg";
import noImg from "../../assets/img/img-notfound/image-notavailable.png";
import planeBgImg from "../../assets/img/card/plane-bg.svg";
import planeImg from "../../assets/img/card/plane.svg";
import leafImg from "../../assets/img/card/leaf.svg";
import leafBgImg from "../../assets/img/card/leaf-bg.svg";

function Profile(props) {
    return (
        <main className="profile">
            <div className="container">
                <div className="profile-container">
                    <div className="row gy-md-3">
                        <div className="col-3 col-xl-4 col-lg-5 col-md-12">
                            <aside className="profile__sidebar">
                                <div className="profile-user">
                                    <img src={noImg} alt="" className="profile-user__avatar" />
                                    <h1 className="profile-user__name">Imran Khan</h1>
                                    <p className="profile-user__desc">Registered: 17th May 2022</p>
                                </div>

                                <div className="profile-menu">
                                    <h3 className="profile-menu__title">Manage Account</h3>
                                    <ul className="profile-menu__list">
                                        <li>
                                            <a href="./edit-personal-info.html" className="profile-menu__link">
                                                <span className="profile-menu__icon">
                                                    <img src={profileIcon} alt="" className="icon" />
                                                </span>
                                                Personal info
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="profile-menu__link">
                                                <span className="profile-menu__icon">
                                                    <img src={locationIcon} alt="" className="icon" />
                                                </span>
                                                Addresses
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="profile-menu__link">
                                                <span className="profile-menu__icon">
                                                    <img src={messageIcon} alt="" className="icon" />
                                                </span>
                                                Communications & privacy
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="profile-menu">
                                    <h3 className="profile-menu__title">My items</h3>
                                    <ul className="profile-menu__list">
                                        <li>
                                            <a href="#!" className="profile-menu__link">
                                                <span className="profile-menu__icon">
                                                    <img src={downloadIcon} alt="" className="icon" />
                                                </span>
                                                Reorder
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="profile-menu__link">
                                                <span className="profile-menu__icon">
                                                    <img src={heartIcon} alt="" className="icon" />
                                                </span>
                                                Lists
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="profile-menu__link">
                                                <span className="profile-menu__icon">
                                                    <img src={giftIcon} alt="" className="icon" />
                                                </span>
                                                Registries
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="profile-menu">
                                    <h3 className="profile-menu__title">Subscriptions & plans</h3>
                                    <ul className="profile-menu__list">
                                        <li>
                                            <a href="#!" className="profile-menu__link">
                                                <span className="profile-menu__icon">
                                                    <img src={shieldIcon} alt="" className="icon" />
                                                </span>
                                                Protection plans
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="profile-menu">
                                    <h3 className="profile-menu__title">Customer Service</h3>
                                    <ul className="profile-menu__list">
                                        <li>
                                            <a href="#!" className="profile-menu__link">
                                                <span className="profile-menu__icon">
                                                    <img src={infoIcon} alt="" className="icon" />
                                                </span>
                                                Help
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="profile-menu__link">
                                                <span className="profile-menu__icon">
                                                    <img src={dangerIcon} alt="" className="icon" />
                                                </span>
                                                Terms of Use
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div className="col-9 col-xl-8 col-lg-7 col-md-12">
                            <div className="cart-info">
                                <div className="row gy-3">
                                    <div className="col-12">
                                        <h2 className="cart-info__heading">My Wallet</h2>
                                        <p className="cart-info__desc profile__desc">Payment methods</p>

                                        <div className="row gy-md-2 row-cols-3 row-cols-xl-2 row-cols-lg-1">
                                            <div className="col">
                                                <article className="payment-card" style={{backgroundColor: "#1e2e69"}}>
                                                    <img
                                                        src={planeBgImg}
                                                        alt=""
                                                        className="payment-card__img"
                                                    />
                                                    <div className="payment-card__top">
                                                        <img src={planeImg} alt="" />
                                                        <span className="payment-card__type">FeatherCard</span>
                                                    </div>
                                                    <div className="payment-card__number">1234 4567 8901 2221</div>
                                                    <div className="payment-card__bottom">
                                                        <div>
                                                            <p className="payment-card__label">Card Holder</p>
                                                            <p className="payment-card__value">Imran Khan</p>
                                                        </div>
                                                        <div className="payment-card__expired">
                                                            <p className="payment-card__label">Expired</p>
                                                            <p className="payment-card__value">10/22</p>
                                                        </div>
                                                        <div className="payment-card__circle"></div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="col">
                                                <article className="payment-card" style={{backgroundColor: "#354151"}}>
                                                    <img
                                                        src={leafBgImg}
                                                        alt=""
                                                        className="payment-card__img"
                                                    />
                                                    <div className="payment-card__top">
                                                        <img src={leafImg} alt="" />
                                                        <span className="payment-card__type">FeatherCard</span>
                                                    </div>
                                                    <div className="payment-card__number">1234 4567 2221 8901</div>
                                                    <div className="payment-card__bottom">
                                                        <div>
                                                            <p className="payment-card__label">Card Holder</p>
                                                            <p className="payment-card__value">Imran Khan</p>
                                                        </div>
                                                        <div className="payment-card__expired">
                                                            <p className="payment-card__label">Expired</p>
                                                            <p className="payment-card__value">11/22</p>
                                                        </div>
                                                        <div className="payment-card__circle"></div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="col">
                                                <a className="new-card" href="./add-new-card.html">
                                                    <img
                                                        src={plusIcon}
                                                        alt=""
                                                        className="new-card__icon icon"
                                                    />
                                                    <p className="new-card__text">Add New Card</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <h2 className="cart-info__heading">Account info</h2>
                                        <p className="cart-info__desc profile__desc">
                                            Addresses, contact information and password
                                        </p>
                                        <div className="row gy-md-2 row-cols-2 row-cols-lg-1">
                                            <div className="col">
                                                <a href="./edit-personal-info.html">
                                                    <article className="account-info">
                                                        <div className="account-info__icon">
                                                            <img src={message1Icon} alt="" className="icon" />
                                                        </div>
                                                        <div>
                                                            <h3 className="account-info__title">Email Address</h3>
                                                            <p className="account-info__desc">tarek97.ta@gmail.com</p>
                                                        </div>
                                                    </article>
                                                </a>
                                            </div>

                                            <div className="col">
                                                <a href="./edit-personal-info.html">
                                                    <article className="account-info">
                                                        <div className="account-info__icon">
                                                            <img src={callingIcon} alt="" className="icon" />
                                                        </div>
                                                        <div>
                                                            <h3 className="account-info__title">Phone number</h3>
                                                            <p className="account-info__desc">+000 11122 2345 657</p>
                                                        </div>
                                                    </article>
                                                </a>
                                            </div>

                                            <div className="col">
                                                <a href="./edit-personal-info.html">
                                                    <article className="account-info">
                                                        <div className="account-info__icon">
                                                            <img
                                                                src={locationIcon}
                                                                alt=""
                                                                className="icon"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3 className="account-info__title">Add an address</h3>
                                                            <p className="account-info__desc">
                                                                Bangladesh Embassy, Washington, DC 20008
                                                            </p>
                                                        </div>
                                                    </article>
                                                </a>
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

export default Profile;