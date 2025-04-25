import React, { useState } from 'react';
import DefaultLayout from '../components/defaultLayout';
import "./style.scss";
import emailIcon from "../../../assets/icons/message.svg";
import passwordIcon from "../../../assets/icons/Lock.svg";
import googleIcon from "../../../assets/icons/google.svg";
import FormInput from '../../../components/input';
import Logo from '../../../components/logo';
import { Link, useNavigate } from 'react-router-dom';
import { Login } from '../../../services/AuthenticationService';
import { JWTDecoder } from '../../../helper/JWTDecoder';


function SignIn(props) {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await Login(userData);
        const token = sessionStorage.getItem('token');
        if(token) {
            const userRole = JWTDecoder(token).scope;
            userRole === 'ROLE_CUSTOMER' && navigate('/profile')
            userRole === 'ROLE_ADMIN' && navigate('/admin')
        } else {
            console.log("Login failed");
        }
    }

    return (
        <DefaultLayout>
            <div id="login__content" className="login__content">
                <div className="login__content--inner">
                    <Logo />
                    <h1 className="login__heading">Hello Again!</h1>
                    <p className="login__desc"> Welcome back to sign in. As a returning customer, you have access to your previously saved all information.</p>

                    <form onSubmit={handleLogin} className="form login__form">
                        <FormInput 
                            name={'username'}
                            placeholder={'Username'}
                            icon={emailIcon}
                            getInputData={(data) => userData.username = data}
                            required
                        />
                        <FormInput 
                            name={'password'}
                            placeholder={'Password'}
                            icon={passwordIcon}
                            getInputData={(data) => userData.password = data}
                            required
                        />
                        <div className="form__group form__group--inline">
                            <Link to="#!" className="login__link form__pull-right">Forgot password?</Link>
                        </div>
                        <div className="form__group form__login--cta">
                            <button type='submit' className="btn btn--primary login__btn">Sign In</button>
                            <a href="" className="btn btn--outline login__btn">
                                <img src={googleIcon} alt="Loading" className="btn__icon icon" />
                                Sign in with Gmail
                            </a>
                        </div>
                    </form>

                    <p className="login__confirm">
                        Don’t have an account yet?
                        <Link to="/sign-up" className="login__link login__confirm-link">Sign Up</Link>
                    </p>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default SignIn;