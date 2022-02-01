import React, {useCallback, useState} from "react";
import {NavLink} from "react-router-dom";
import "../../css/NavBar.css";
import {useDispatch, useSelector} from "react-redux";

const Users = (props) => {
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const {user: currentUser} = useSelector((state) => state.auth);
    const handleClick = () => setClick(!click);

    return (
        <li className="nav-item">
            <NavLink
                exact
                to="/users"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                Users
            </NavLink>
        </li>
    )
};

export default Users;