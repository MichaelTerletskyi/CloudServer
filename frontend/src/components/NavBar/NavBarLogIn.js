import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {LOGIN} from "../../consts/RoutePathes";

export const NavBarLogIn = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to={LOGIN}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Login
            </NavLink>
        </li>
    );
};