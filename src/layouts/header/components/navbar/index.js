import React, { useRef } from 'react';
import arrowDownIcon from "../../../../assets/icons/arrow-down.svg";
import DropDownModal from '../../../../components/drop-down';
import "./style.scss";

const navbarList = [
    {
        title: 'Departments',
        items: [
            {
                title: 'TV & Video',

            }
        ]
    },
    {
        title: 'Grocery',
        items: [
            {
                title: 'TV & Video',

            }
        ]
    },
    {
        title: 'Beauty',
        items: [
            {
                title: 'TV & Video',

            }
        ]
    }
];

function Navbar(props) {

    return (
        <>
            <nav className="navbar">
                <ul className="navbar__list">
                    {
                        navbarList.map((item, idx) => (
                            <li key={idx} className="navbar__item">
                                <a href="#!" className="navbar__link">
                                    {item.title}
                                    <img src={arrowDownIcon} alt="Loading" className="icon navbar__arrow" />                        
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
}

export default Navbar;