import React, { useContext, useState } from 'react';
import Logo from '../../components/logo';
import searchIcon from "../../assets/icons/Search.svg";
import arrowUp from "../../assets/icons/arrow-up.png";
import sunIcon from "../../assets/icons/sun.svg";
import imgNotAvailable from "../../assets/img/img-notfound/image-notavailable.png";
import "./style.scss";
import WishList from './components/wishlist';
import Cart from './components/cart';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar';
import { ThemeContext } from '../../helper/ThemeContext';
import { SwitchModeBtn } from '../../components/switch-button/SwitchModeBtn';
import { Logout } from '../../services/AuthenticationService';

function Header(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('token') || "");
    const {isDark, toggleTheme} = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        if(window.confirm('Do you really want to logout?')) {
            await Logout();
            navigate('/');
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="top-bar">
                    <Logo />
                    <Navbar />
                    <div className="top-act">
                        {
                            !isAuthenticated ?
                            <>
                                <Link to="/sign-in" className="btn btn--text d-sm-none">Sign in</Link>
                                <Link to="/sign-up" className="btn sign-up__btn btn--primary">Sign up</Link>
                            </>
                            :
                            <>
                                <div className="top-act__group top-act__group--single">
                                    <button className="top-act__btn top-act__btn">
                                        <img src={searchIcon} alt="Loading" className="icon top-act__icon" />                                    
                                    </button>
                                </div>
                                <div className="top-act__group">
                                    <WishList />
                                    <div className="top-act__seperate"></div>
                                    <Cart />
                                </div>
                                <div className="top-act__user">
                                    <img src={imgNotAvailable} alt="Loading" className="top-act__avatar" />   

                                    <div className="act-dropdown top-act__user--dropdown">
                                        <div className="act-dropdown__inner user-menu">
                                            <img
                                                src={arrowUp}
                                                alt=""
                                                className="act-dropdown__arrow top-act__dropdown-arrow"
                                            />

                                            <div className="user-menu__top">
                                                <img src={imgNotAvailable} alt="" className="user-menu__avatar" />
                                                <div>
                                                    <p className="user-menu__name">John Smith</p>
                                                    <p>@johnsmith</p>
                                                </div>
                                            </div>

                                            <ul className="user-menu__list">
                                                <li>
                                                    <Link to="/profile" className="user-menu__link">Profile</Link>
                                                </li>
                                                <li>
                                                    <Link to="/favourite" className="user-menu__link">Favourite list</Link>
                                                </li>
                                                <li className="user-menu__separate">
                                                    <div className="user-menu__link" >
                                                        <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                                                        <SwitchModeBtn isDark={isDark} toggleTheme={toggleTheme} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#!" className="user-menu__link">Settings</a>
                                                </li>
                                                <li className="user-menu__separate">
                                                    <span onClick={handleLogout} className="user-menu__link">Logout</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>                             
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;