import React, {useCallback, useState} from "react";
import {NavLink} from "react-router-dom";
import "../../css/NavBar.css";
import {useDispatch, useSelector} from "react-redux";

const LogIn = (props) => {
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const {user: currentUser} = useSelector((state) => state.auth);
    const handleClick = () => setClick(!click);

    return (
        <li className="nav-item">
            <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Log In
            </NavLink>
        </li>
    )
};

export default LogIn;