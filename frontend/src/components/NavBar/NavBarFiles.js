import {NavLink} from "react-router-dom";
import React, {useState} from "react";

export const NavBarFiles = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to="/files"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Files
            </NavLink>
        </li>
    );
};