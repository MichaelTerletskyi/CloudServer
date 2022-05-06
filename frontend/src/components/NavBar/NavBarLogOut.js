import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {HOME, LOGOUT} from "../../consts/RoutePathes";

export const NavBarLogOut = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        sessionStorage.clear();
        window.location.reload();
        window.location.href = HOME;
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