import {NavLink} from "react-router-dom";
import React, {useState} from "react";

export const NavBarHome = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Home
            </NavLink>
        </li>
    );
};