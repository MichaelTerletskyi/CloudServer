import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {ADMIN_PAGE} from "../../consts/RoutePathes";

export const NavBarAdminPage = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to={ADMIN_PAGE}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Admin Page
            </NavLink>
        </li>
    );
};