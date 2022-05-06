import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {FILES} from "../../consts/RoutePathes";

export const NavBarFiles = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to={FILES}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Files
            </NavLink>
        </li>
    );
};