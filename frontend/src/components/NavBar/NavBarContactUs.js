import {NavLink} from "react-router-dom";
import React, {useState} from "react";

import "./../NavBar.css";

export const NavBarContactUs = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Contact Us
            </NavLink>
        </li>
    );
};