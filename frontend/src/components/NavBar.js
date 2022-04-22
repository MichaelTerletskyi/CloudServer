import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";
import {NavBarHome} from "./NavBar/NavBarHome";
import {NavBarLogIn} from "./NavBar/NavBarLogIn";
import {NavBarRegister} from "./NavBar/NavBarRegister";
import {NavBarLogOut} from "./NavBar/NavBarLogOut";
import {NavBarContactUs} from "./NavBar/NavBarContactUs";


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
                        <NavBarHome/>

                        {!isLoggedIn
                            ? (<>
                                <NavBarLogIn/>
                                <NavBarRegister/>
                            </>)
                            : (<>
                                <NavBarLogOut/>
                            </>)}

                        <NavBarContactUs/>
                    </ul>

                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                </div>
            </nav>


            {/*<section data-bs-version="5.1" className="menu menu1 cid-sFGzlAXw3z" once="menu" id="menu1-2">*/}
            {/*    <nav className="navbar navbar-dropdown navbar-expand-lg">*/}
            {/*        <div className="nav-container">*/}
            {/*            <div className="navbar-brand">*/}
            {/*                <span className="navbar-caption-wrap">*/}
            {/*                    <a className="navbar-caption text-white display-7" href="/">Cloud Server</a>*/}
            {/*                </span>*/}
            {/*            </div>*/}
            {/*            <button className="navbar-toggler" type="button" data-toggle="collapse"*/}
            {/*                    data-bs-toggle="collapse"*/}
            {/*                    data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent"*/}
            {/*                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*                <div className="hamburger">*/}
            {/*                    <span></span>*/}
            {/*                    <span></span>*/}
            {/*                    <span></span>*/}
            {/*                    <span></span>*/}
            {/*                </div>*/}
            {/*            </button>*/}
            {/*            <div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
            {/*                <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link link text-white text-primary display-4" href="/">Home</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link link text-white text-primary display-4" href="/login">Login</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link link text-white text-primary display-4" href="/register">Register</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link link text-white text-primary display-4" href="/logout">Logout</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link link text-white text-primary display-4" href="/contact">Contact</a>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}

            {/*                <div className="navbar-buttons mbr-section-btn">*/}
            {/*                    <a className="btn btn-primary display-4" href="https://mobiri.se">Get Started</a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</section>*/}
        </>
    );
}

export default NavBar;
