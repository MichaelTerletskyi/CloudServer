import React, {useState} from "react";
import "./navbar-menu/css/style.css"
import {NavBarLogOut} from "././NavBarLogOut";
import {NavBarLogIn} from "./NavBarLogIn";
import {NavBarRegister} from "./NavBarRegister";

function NavBar() {
    const [isLoggedIn] = useState(localStorage.hasOwnProperty("user"));

    return (
        <>
            <header className="site-navbar site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center position-relative">

                        <div className="col-3">
                            <div className="site-logo">
                                <a href="/" className="font-weight-bold">Cloud Server</a>
                            </div>
                        </div>

                        <div className="col-9  text-right">
                            <span className="d-inline-block d-lg-none">
                                <a href="/" className="text-primary site-menu-toggle js-menu-toggle py-5">
                                    <span className="icon-menu h3 text-white"/>
                                </a>
                            </span>

                            <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav ml-auto">
                                    {
                                        !isLoggedIn ? (
                                            <>
                                                <NavBarLogIn/>
                                                <NavBarRegister/>
                                            </>
                                        ) : (
                                            <>
                                                <NavBarLogOut/>
                                            </>
                                        )
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;