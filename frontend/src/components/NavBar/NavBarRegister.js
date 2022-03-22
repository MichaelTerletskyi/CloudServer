import {NavLink} from "react-router-dom";
import React, {useState} from "react";

export const NavBarRegister = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        alert("NavBarRegister clicked");
        setClick(!click)
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Register
            </NavLink>
        </li>
    );
};