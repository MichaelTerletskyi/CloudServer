import React, {useCallback, useState} from "react";
import {NavLink} from "react-router-dom";
import "./css/NavBar.css";
import {useDispatch, useSelector} from "react-redux";

import Users from "../components/NavBar/elements/Users"
import Profile from "./NavBar/elements/Profile";
import Files from "./NavBar/elements/Files";
import Logout from "./NavBar/elements/Logout";

import LogIn from "./NavBar/elements/LogIn";
import SignIn from "./NavBar/elements/SignIn";

const NavBarPanel = () => {
    useDispatch();
    const [click, setClick] = useState(false);
    const {user: currentUser} = useSelector((state) => state.auth);
    const [isAdmin] = useState(currentUser !== null ? currentUser.roles.includes("ROLE_ADMIN") : false);
    const [isUserNonNull] = useState(currentUser !== null);

    const handleClick = () => setClick(!click);

    return (
        <>

            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Cloud Server
                        <i className="fas fa-code"/>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        {!isUserNonNull ? <LogIn/> : null}

                        {!isUserNonNull ? <SignIn/> : null}

                        {isUserNonNull ? isAdmin ? <Users/> : <Profile/> : null}

                        {isUserNonNull && !isAdmin ? <Files/> : null}

                        {isUserNonNull ? <Logout/> : null}


                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBarPanel;
