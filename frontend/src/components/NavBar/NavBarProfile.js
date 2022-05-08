import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {PROFILE} from "../../consts/RoutePathes";

export const NavBarProfile = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to={PROFILE}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Profile
            </NavLink>
        </li>
    );
};