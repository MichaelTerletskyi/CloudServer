import React, {useCallback, useState} from "react";
import {NavLink} from "react-router-dom";
import "../../css/NavBar.css";
import {useDispatch, useSelector} from "react-redux";

const SignIn = (props) => {
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const {user: currentUser} = useSelector((state) => state.auth);
    const handleClick = () => setClick(!click);

    return (
        <li className="nav-item">
            <NavLink
                exact
                to="/signin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Sign In
            </NavLink>
        </li>
    )
};

export default SignIn;