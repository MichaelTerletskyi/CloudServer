import React, {useState} from "react";

import {NavLink} from "react-router-dom";

import {NavBarLogIn} from "./NavBar/NavBarLogIn";
import {NavBarRegister} from "./NavBar/NavBarRegister";
import {NavBarLogOut} from "./NavBar/NavBarLogOut";

function NavBar() {
    const [click, setClick] = useState(false);
    const [isLoggedIn] = useState(localStorage.hasOwnProperty("user"));

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Cloud Server
                        <i className="fas fa-code"/>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {!isLoggedIn
                            ? (<>
                                <NavBarLogIn/>
                                <NavBarRegister/>
                            </>)
                            : (<>
                                <NavBarLogOut/>
                            </>)}
                    </ul>

                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;