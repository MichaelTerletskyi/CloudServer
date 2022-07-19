import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {UPLOAD} from "../../consts/RoutePathes";

export const NavBarUpload = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <li className="nav-item">
            <NavLink
                exact
                to={UPLOAD}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Upload
            </NavLink>
        </li>
    );
};