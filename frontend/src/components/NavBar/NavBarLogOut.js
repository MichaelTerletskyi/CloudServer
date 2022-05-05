import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {LOGOUT} from "../../actions/authTypes";

export const NavBarLogOut = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        sessionStorage.clear();
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to={LOGOUT}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Log Out
            </NavLink>
        </li>
    );
};