import React, {useState} from "react";
import "./NavBar/navbar-menu/css/style.css"

function NavBar() {
    const [isLoggedIn] = useState(localStorage.hasOwnProperty("user"));

    return (
        <>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"/>
                    </div>
                </div>
                <div className="site-mobile-menu-body"/>
            </div>


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
                                <ul className="site-menu main-menu js-clone-nav ml-auto ">

                                    {
                                        !isLoggedIn ? (
                                            <>

                                                <li><
                                                    a href={"/login"} className={"nav-link"}>Login</a>
                                                </li>
                                                <li>
                                                    <a href={"register"} className={"nav-link"}>Register</a>
                                                </li>

                                            </>
                                        ) : (
                                            <>

                                                <li>
                                                    <a href={"logout"} className={"nav-link"}>Logout</a>
                                                </li>

                                            </>
                                        )
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </header>

            <div className="hero">

            </div>

            <script src="./NavBar/navbar-menu/js/jquery-3.3.1.min.js"/>
            <script src="./NavBar/navbar-menu/js/popper.min.js"/>
            <script src="./NavBar/navbar-menu/js/bootstrap.min.js"/>
            <script src="./NavBar/navbar-menu/js/jquery.sticky.js"/>

        </>
    );
}

export default NavBar;