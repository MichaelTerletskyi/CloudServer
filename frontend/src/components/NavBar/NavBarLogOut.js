import {NavLink} from "react-router-dom";
import React, {useState} from "react";

export const NavBarLogOut = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        localStorage.removeItem("user");
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to="/logout"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Log Out
            </NavLink>
        </li>
    );
};