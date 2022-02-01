import React, {useCallback, useState} from "react";
import {NavLink} from "react-router-dom";
import "../../css/NavBar.css";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../actions/auth";

const Logout = (props) => {
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const {user: currentUser} = useSelector((state) => state.auth);
    const handleClick = () => setClick(!click);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <li className="nav-item">
            <NavLink
                exact
                to="/logout"
                activeClassName="active"
                className="nav-links"
                onClick={logOut}
            >
                Logout
            </NavLink>
        </li>
    )
};

export default Logout;